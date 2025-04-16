
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import NumberMapChart from "@/components/NumberMapChart";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { generateNumberConnections } from "@/utils/numberMapUtils";
import { checkSignificance } from "@/utils/significantNumbers";

const NumberMaps = () => {
  const [inputText, setInputText] = useState("");
  const [connections, setConnections] = useState<any[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Generate connections when input changes
  useEffect(() => {
    if (inputText.trim()) {
      const data = generateNumberConnections(inputText);
      setConnections(data);
      
      // Find significant numbers in the connections
      const significantNodes = data.nodes.filter(node => 
        checkSignificance(node.value)?.significance === 'profound' || 
        checkSignificance(node.value)?.significance === 'major'
      );
      
      if (significantNodes.length > 0) {
        const firstSignificant = significantNodes[0];
        const significance = checkSignificance(firstSignificant.value);
        
        if (significance) {
          toast({
            title: "Significant Number Detected",
            description: (
              <div className="flex flex-col gap-1">
                <span>{firstSignificant.value}: {significance.description}</span>
                <Badge variant="outline" className="w-fit">
                  {significance.tradition}
                </Badge>
              </div>
            ),
            variant: 'significant',
            duration: 8000,
          });
        }
      }
    }
  }, [inputText, toast]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="py-6 w-full max-w-7xl mx-auto flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Personal Number Maps</h1>
        <div className="w-9" />
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-medium">Enter Text to Visualize Number Connections</h2>
            <Badge variant="outline" className="bg-primary/5">BETA</Badge>
          </div>
          <div className="flex gap-2 items-center text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <p>Visualizes numbers and their relationships based on gematria calculations</p>
          </div>
        </div>
        
        <div className="mb-6">
          <textarea
            className="w-full p-3 border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter words or phrases to see their number connections..."
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        
        <div className="bg-muted/30 border rounded-lg p-4 mb-8">
          <NumberMapChart connections={connections} inputText={inputText} />
        </div>
        
        <div className="text-sm text-muted-foreground mb-8">
          <h3 className="font-medium mb-2">About Personal Number Maps</h3>
          <p className="mb-4">
            This visualization shows the interconnections between different gematria methods and their resulting values. 
            Larger nodes represent significant numbers in various traditions. The thickness of connecting lines 
            represents the strength of the relationship.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Blue nodes: Numbers from English Gematria</li>
            <li>Green nodes: Numbers from Simple Gematria</li>
            <li>Purple nodes: Numbers from Jewish Gematria</li>
            <li>Orange nodes: Numbers from Pythagorean Gematria</li>
            <li>Teal nodes: Numbers from Greek Isopsephy</li>
          </ul>
        </div>
      </main>
    </motion.div>
  );
};

export default NumberMaps;
