
import { useMemo } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Scatter,
  ScatterChart,
  Tooltip,
  ZAxis,
  Legend
} from "recharts";
import { motion } from "framer-motion";
import { Award, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { checkSignificance } from "@/utils/significantNumbers";
import { type NumberConnections } from "@/utils/numberMapUtils";

interface NumberMapChartProps {
  connections: NumberConnections;
  inputText: string;
}

const NumberMapChart = ({ connections, inputText }: NumberMapChartProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Extract nodes that have significance
  const significantNodes = useMemo(() => {
    if (!connections.nodes) return [];
    
    return connections.nodes.filter(node => {
      const significance = checkSignificance(node.value);
      return significance && (significance.significance === 'major' || significance.significance === 'profound');
    });
  }, [connections]);
  
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };
  
  const chartConfig = {
    english: { label: "English Gematria", theme: { light: "#3b82f6", dark: "#60a5fa" } },
    simple: { label: "Simple Gematria", theme: { light: "#10b981", dark: "#34d399" } },
    jewish: { label: "Jewish Gematria", theme: { light: "#8b5cf6", dark: "#a78bfa" } },
    pythagorean: { label: "Pythagorean Gematria", theme: { light: "#f97316", dark: "#fb923c" } },
    greek: { label: "Greek Isopsephy", theme: { light: "#06b6d4", dark: "#22d3ee" } },
  };

  if (!inputText.trim() || !connections.nodes || connections.nodes.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center text-muted-foreground">
        <p>Enter text above to see number connections</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute right-4 top-0 z-10 flex gap-1">
        <Button size="sm" variant="outline" onClick={handleZoomOut} className="h-8 w-8 p-0">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleZoomIn} className="h-8 w-8 p-0">
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    
      {significantNodes.length > 0 && (
        <div className="absolute right-4 top-12 z-10 flex flex-col gap-1 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
          <p className="text-xs font-medium flex items-center gap-1">
            <Award className="h-3.5 w-3.5 text-yellow-500" />
            Significant Numbers
          </p>
          <div className="flex flex-wrap gap-1">
            {significantNodes.map(node => {
              const significance = checkSignificance(node.value);
              return (
                <motion.div 
                  key={node.id}
                  className="text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {node.value}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    
      <ChartContainer 
        className="h-72"
        config={chartConfig}
      >
        <ScatterChart 
          margin={{ top: 20, right: 30, bottom: 40, left: 30 }}
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="value" 
            allowDecimals={false}
            tick={{ fontSize: 11 }}
            label={{ value: 'Number Value', position: 'bottom', offset: 0, fontSize: 12 }}
          />
          <YAxis 
            type="category"
            dataKey="method" 
            name="method"
            tick={{ fontSize: 11 }}
            width={120}
          />
          <ZAxis 
            type="number" 
            dataKey="z" 
            range={[20, 500]} 
            name="significance" 
          />
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            wrapperStyle={{ zIndex: 100 }}
            content={
              <ChartTooltipContent
                formatter={(value, name, item) => {
                  const node = connections.nodes.find(n => n.x === item.payload.x && n.method === item.payload.method);
                  if (!node) return null;
                  
                  const significance = checkSignificance(node.value);
                  return (
                    <div className="max-w-56">
                      <div className="font-medium text-sm">{node.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{node.method}</div>
                      {significance && (
                        <div className="mt-1 text-xs bg-primary/10 p-1 rounded text-primary max-h-24 overflow-y-auto">
                          <span className="font-semibold">{significance.tradition}:</span> {significance.description}
                        </div>
                      )}
                    </div>
                  );
                }}
              />
            }
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="top" 
            align="center"
            wrapperStyle={{ fontSize: '11px', paddingBottom: '10px' }}
          />
          <Scatter 
            name="English Gematria" 
            data={connections.nodes.filter(node => node.method === "English Gematria")} 
            fill="#3b82f6" 
          />
          <Scatter 
            name="Simple Gematria" 
            data={connections.nodes.filter(node => node.method === "Simple Gematria")} 
            fill="#10b981" 
          />
          <Scatter 
            name="Jewish Gematria" 
            data={connections.nodes.filter(node => node.method === "Jewish Gematria")} 
            fill="#8b5cf6" 
          />
          <Scatter 
            name="Pythagorean Gematria" 
            data={connections.nodes.filter(node => node.method === "Pythagorean Gematria")} 
            fill="#f97316" 
          />
          <Scatter 
            name="Greek Isopsephy" 
            data={connections.nodes.filter(node => node.method === "Greek Isopsephy")} 
            fill="#06b6d4" 
          />
        </ScatterChart>
      </ChartContainer>
    </div>
  );
};

export default NumberMapChart;
