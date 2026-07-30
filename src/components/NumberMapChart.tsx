import { useMemo, useRef } from "react";
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
import { CIPHER_SYSTEMS } from "@/lib/gematriaReference";

interface NumberMapChartProps {
  connections: NumberConnections;
  inputText: string;
}

/**
 * One plotted series per cipher, derived from CIPHER_SYSTEMS so a newly added
 * cipher cannot silently go unplotted. Colours cycle if more ciphers are added
 * than there are palette entries.
 */
const SERIES_PALETTE = [
  { fill: "#3b82f6", chip: "bg-blue-50 text-blue-700 border-blue-200" },
  { fill: "#10b981", chip: "bg-green-50 text-green-700 border-green-200" },
  { fill: "#f97316", chip: "bg-orange-50 text-orange-700 border-orange-200" },
  { fill: "#e11d48", chip: "bg-rose-50 text-rose-700 border-rose-200" },
  { fill: "#8b5cf6", chip: "bg-purple-50 text-purple-700 border-purple-200" },
  { fill: "#ca8a04", chip: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { fill: "#0f766e", chip: "bg-teal-50 text-teal-700 border-teal-200" },
  { fill: "#06b6d4", chip: "bg-cyan-50 text-cyan-700 border-cyan-200" },
];

const SERIES = CIPHER_SYSTEMS.map((cipher, i) => ({
  method: cipher.method,
  // short label for the toggle chips, which are tight on mobile
  short: cipher.method
    .replace("English ", "")
    .replace(" Gematria", "")
    .replace(" Isopsephy", ""),
  ...SERIES_PALETTE[i % SERIES_PALETTE.length],
}));

const NumberMapChart = ({ connections, inputText }: NumberMapChartProps) => {
  // Instead of a zoom level, we'll use domain states to control the view
  const [xDomain, setXDomain] = useState<[number, number] | null>(null);
  const [visibleSystems, setVisibleSystems] = useState<Record<string, boolean>>(
    () => Object.fromEntries(SERIES.map((sr) => [sr.method, true]))
  );
  
  // Extract nodes that have significance
  const significantNodes = useMemo(() => {
    if (!connections.nodes) return [];
    
    return connections.nodes.filter(node => {
      const significance = checkSignificance(node.value);
      return significance && (significance.significance === 'major' || significance.significance === 'profound');
    });
  }, [connections]);
  
  // Calculate min and max X values for the domain
  const { minX, maxX } = useMemo(() => {
    if (!connections.nodes || connections.nodes.length === 0) {
      return { minX: 0, maxX: 100 };
    }
    
    const values = connections.nodes.map(node => node.x);
    return {
      minX: Math.floor(Math.min(...values) * 0.9),
      maxX: Math.ceil(Math.max(...values) * 1.1)
    };
  }, [connections.nodes]);
  
  // Zoom functions
  const handleZoomIn = () => {
    console.log("Zoom In clicked");
    const currentMin = xDomain ? xDomain[0] : minX;
    const currentMax = xDomain ? xDomain[1] : maxX;
    const range = currentMax - currentMin;
    const center = (currentMin + currentMax) / 2;
    const newRange = range * 0.5; // 50% of the current range - much more aggressive
    const newMin = Math.max(Math.floor(center - newRange / 2), 0); // Ensure positive and round down
    const newMax = Math.ceil(center + newRange / 2); // Round up
    console.log(`Zoom In: [${currentMin}, ${currentMax}] -> [${newMin}, ${newMax}]`);
    setXDomain([newMin, newMax]);
  };
  
  const handleZoomOut = () => {
    console.log("Zoom Out clicked");
    const currentMin = xDomain ? xDomain[0] : minX;
    const currentMax = xDomain ? xDomain[1] : maxX;
    const range = currentMax - currentMin;
    const center = (currentMin + currentMax) / 2;
    const newRange = range * 2.0; // 200% of the current range - more aggressive
    const newMin = Math.max(Math.floor(center - newRange / 2), 0); // Prevent negative values and round down
    const newMax = Math.ceil(center + newRange / 2); // Round up
    console.log(`Zoom Out: [${currentMin}, ${currentMax}] -> [${newMin}, ${newMax}]`);
    setXDomain([newMin, newMax]);
  };

  const handleResetZoom = () => {
    console.log("Reset Zoom clicked");
    console.log(`Reset Zoom: [${xDomain?.[0]}, ${xDomain?.[1]}] -> [${minX}, ${maxX}]`);
    // Force a complete re-render by setting to null first
    setXDomain(null);
  };
  
  const toggleSystem = (system: string) => {
    setVisibleSystems(prev => ({
      ...prev,
      [system]: !prev[system]
    }));
  };
  
  const chartConfig = Object.fromEntries(
    SERIES.map((sr) => [
      sr.method,
      { label: sr.method, theme: { light: sr.fill, dark: sr.fill } },
    ])
  );

  if (!inputText.trim() || !connections.nodes || connections.nodes.length === 0) {
    return (
      <div className="h-[450px] flex items-center justify-center text-muted-foreground">
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
                {SERIES.map((sr) => (
                  <div key={sr.method} className="flex items-center gap-2">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: sr.fill }}
                    ></div>
                    <p className="text-xs">{sr.method}</p>
                  </div>
                ))}
              </div>
              <div className="text-xs space-y-1 mt-2">
                <p className="font-medium">How to use:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  <li>Look for vertical alignments - same number in different systems</li>
                  <li>Click dots for detailed information</li>
                  <li>Use zoom buttons to adjust the view</li>
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
        {xDomain && (
          <Button size="sm" variant="default" onClick={handleResetZoom} className="h-8 sm:h-10 text-xs">
            Reset
          </Button>
        )}
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
    
      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart 
            margin={{ top: 30, right: 30, bottom: 40, left: 30 }}
            key={xDomain ? `chart-${xDomain[0]}-${xDomain[1]}` : 'auto-domain-chart'}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="value" 
              allowDecimals={false}
              tick={{ fontSize: 12 }}
              label={{ value: 'Number Value', position: 'bottom', offset: 5, fontSize: 13 }}
              domain={xDomain || ['auto', 'auto']}  // Use custom domain when zoomed, otherwise auto
              key={xDomain ? `domain-${xDomain[0]}-${xDomain[1]}` : 'auto-domain'} // Force re-render on domain change
            />
            <YAxis 
              type="category"
              dataKey="method" 
              name="method"
              tick={{ fontSize: 12 }}
              width={140}
            />
            <ZAxis 
              type="number" 
              dataKey="z" 
              range={[30, 600]} 
              name="significance" 
            />
            <ChartTooltip
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{ zIndex: 100 }}
              offset={15}
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
            {SERIES.filter((sr) => visibleSystems[sr.method]).map((sr) => (
              <Scatter
                key={`${sr.method}-${xDomain ? `${xDomain[0]}-${xDomain[1]}` : "auto"}`}
                name={sr.method}
                data={connections.nodes.filter((node) => node.method === sr.method)}
                fill={sr.fill}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* System toggle buttons */}
      <div className="mt-2 flex flex-wrap gap-1 justify-center">
        {SERIES.map((sr) => (
          <Button
            key={sr.method}
            size="sm"
            variant="outline"
            className={cn(
              "text-xs h-7 gap-1",
              visibleSystems[sr.method] ? sr.chip : "text-muted-foreground"
            )}
            onClick={() => toggleSystem(sr.method)}
            aria-pressed={visibleSystems[sr.method]}
          >
            {visibleSystems[sr.method] ? <Eye size={12} /> : <EyeOff size={12} />}
            {sr.short}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NumberMapChart;
