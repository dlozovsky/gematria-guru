
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
import { Award } from "lucide-react";
import { checkSignificance } from "@/utils/significantNumbers";

interface NumberMapChartProps {
  connections: any;
  inputText: string;
}

const NumberMapChart = ({ connections, inputText }: NumberMapChartProps) => {
  // Extract nodes that have significance
  const significantNodes = useMemo(() => {
    if (!connections.nodes) return [];
    
    return connections.nodes.filter(node => {
      const significance = checkSignificance(node.value);
      return significance && (significance.significance === 'major' || significance.significance === 'profound');
    });
  }, [connections]);
  
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
      {significantNodes.length > 0 && (
        <div className="absolute right-4 top-4 z-10 flex flex-col gap-1 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
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
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="value" 
            allowDecimals={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="frequency" 
            allowDecimals={false}
            tick={{ fontSize: 12 }}
          />
          <ZAxis 
            type="number" 
            dataKey="z" 
            range={[20, 500]} 
            name="significance" 
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value, name, item) => {
                  const node = connections.nodes.find(n => n.x === item.payload.x && n.y === item.payload.y);
                  if (!node) return null;
                  
                  const significance = checkSignificance(node.value);
                  return (
                    <div>
                      <div className="font-medium">{node.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{node.method}</div>
                      {significance && (
                        <div className="mt-1 text-xs bg-primary/10 p-1 rounded text-primary">
                          {significance.tradition}: {significance.description}
                        </div>
                      )}
                    </div>
                  );
                }}
              />
            }
          />
          <Legend />
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
