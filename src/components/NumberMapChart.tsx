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
import { Award, Check, Eye, EyeOff, HelpCircle, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { checkSignificance } from "@/utils/significantNumbers";
import { type NumberConnections } from "@/utils/numberMapUtils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface NumberMapChartProps {
  connections: NumberConnections;
  inputText: string;
}

const NumberMapChart = ({ connections, inputText }: NumberMapChartProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [visibleSystems, setVisibleSystems] = useState({
    "English Gematria": true,
    "Simple Gematria": true,
    "Jewish Gematria": true,
    "Pythagorean Gematria": true,
    "Greek Isopsephy": true
  });
  
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

  const toggleSystem = (system: string) => {
    setVisibleSystems(prev => ({
      ...prev,
      [system]: !prev[system]
    }));
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
      <div className="h-96 flex items-center justify-center text-muted-foreground">
        <p>Enter text above to see number connections</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 z-10">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 text-muted-foreground hover:text-foreground">
              <HelpCircle className="h-4 w-4" />
              <span className="sr-only">Chart Help</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">About this Chart</h4>
              <p className="text-xs text-muted-foreground">
                This chart shows how your input produces values across different Gematria systems.
              </p>
              <div className="space-y-1 mt-1">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <p className="text-xs">English Gematria</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <p className="text-xs">Simple Gematria</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <p className="text-xs">Jewish Gematria</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <p className="text-xs">Pythagorean Gematria</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                  <p className="text-xs">Greek Isopsephy</p>
                </div>
              </div>
              <div className="text-xs space-y-1 mt-2">
                <p className="font-medium">How to use:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>Look for vertical alignments - same number in different systems</li>
                  <li>Click dots for detailed information</li>
                  <li>Use zoom buttons to adjust the view</li>
                  <li>Toggle systems using the buttons below the chart</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-1.5 rounded text-xs">
                <span className="font-medium">Tip:</span> When the same number appears in multiple systems, it often indicates a stronger thematic connection.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="absolute right-4 top-0 z-10 flex gap-1">
        <Button size="sm" variant="outline" onClick={handleZoomOut} className="h-8 w-8 sm:h-10 sm:w-10 p-0">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleZoomIn} className="h-8 w-8 sm:h-10 sm:w-10 p-0">
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    
      {significantNodes.length > 0 && (
        <div className="absolute right-4 top-12 z-10 flex flex-col gap-1 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
          <p className="text-xs sm:text-sm font-medium flex items-center gap-1">
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
        className="h-96"
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
            content={props => {
              if (!props.active || !props.payload || props.payload.length === 0) {
                return null;
              }
              
              // Find the node that was hovered
              const item = props.payload[0];
              const node = connections.nodes.find(n => n.x === item.payload.x && n.method === item.payload.method);
              
              if (!node) return null;
              
              const significance = checkSignificance(node.value);
              
              return (
                <div className="min-w-56 rounded-lg border border-border/50 bg-background p-2.5 text-xs shadow-xl">
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
          {visibleSystems["English Gematria"] && (
            <Scatter 
              name="English Gematria" 
              data={connections.nodes.filter(node => node.method === "English Gematria")} 
              fill="#3b82f6" 
            />
          )}
          {visibleSystems["Simple Gematria"] && (
            <Scatter 
              name="Simple Gematria" 
              data={connections.nodes.filter(node => node.method === "Simple Gematria")} 
              fill="#10b981" 
            />
          )}
          {visibleSystems["Jewish Gematria"] && (
            <Scatter 
              name="Jewish Gematria" 
              data={connections.nodes.filter(node => node.method === "Jewish Gematria")} 
              fill="#8b5cf6" 
            />
          )}
          {visibleSystems["Pythagorean Gematria"] && (
            <Scatter 
              name="Pythagorean Gematria" 
              data={connections.nodes.filter(node => node.method === "Pythagorean Gematria")} 
              fill="#f97316" 
            />
          )}
          {visibleSystems["Greek Isopsephy"] && (
            <Scatter 
              name="Greek Isopsephy" 
              data={connections.nodes.filter(node => node.method === "Greek Isopsephy")} 
              fill="#06b6d4" 
            />
          )}
        </ScatterChart>
      </ChartContainer>

      {/* System toggle buttons */}
      <div className="mt-2 flex flex-wrap gap-1 justify-center">
        <Button
          size="sm"
          variant="outline"
          className={cn(
            "text-xs h-7 gap-1",
            visibleSystems["English Gematria"] ? "bg-blue-50 text-blue-700 border-blue-200" : "text-muted-foreground"
          )}
          onClick={() => toggleSystem("English Gematria")}
        >
          {visibleSystems["English Gematria"] ? <Eye size={12} /> : <EyeOff size={12} />}
          English
        </Button>
        <Button
          size="sm"
          variant="outline"
          className={cn(
            "text-xs h-7 gap-1",
            visibleSystems["Simple Gematria"] ? "bg-green-50 text-green-700 border-green-200" : "text-muted-foreground"
          )}
          onClick={() => toggleSystem("Simple Gematria")}
        >
          {visibleSystems["Simple Gematria"] ? <Eye size={12} /> : <EyeOff size={12} />}
          Simple
        </Button>
        <Button
          size="sm"
          variant="outline"
          className={cn(
            "text-xs h-7 gap-1",
            visibleSystems["Jewish Gematria"] ? "bg-purple-50 text-purple-700 border-purple-200" : "text-muted-foreground"
          )}
          onClick={() => toggleSystem("Jewish Gematria")}
        >
          {visibleSystems["Jewish Gematria"] ? <Eye size={12} /> : <EyeOff size={12} />}
          Jewish
        </Button>
        <Button
          size="sm"
          variant="outline"
          className={cn(
            "text-xs h-7 gap-1",
            visibleSystems["Pythagorean Gematria"] ? "bg-orange-50 text-orange-700 border-orange-200" : "text-muted-foreground"
          )}
          onClick={() => toggleSystem("Pythagorean Gematria")}
        >
          {visibleSystems["Pythagorean Gematria"] ? <Eye size={12} /> : <EyeOff size={12} />}
          Pythagorean
        </Button>
        <Button
          size="sm"
          variant="outline"
          className={cn(
            "text-xs h-7 gap-1",
            visibleSystems["Greek Isopsephy"] ? "bg-cyan-50 text-cyan-700 border-cyan-200" : "text-muted-foreground"
          )}
          onClick={() => toggleSystem("Greek Isopsephy")}
        >
          {visibleSystems["Greek Isopsephy"] ? <Eye size={12} /> : <EyeOff size={12} />}
          Greek
        </Button>
      </div>
    </div>
  );
};

export default NumberMapChart;
