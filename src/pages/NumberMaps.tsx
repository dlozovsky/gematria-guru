
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/TextInput";
import NumberMapChart from "@/components/NumberMapChart";
import NumericalTwins from "@/components/NumericalTwins";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { generateNumberConnections, type NumberConnections } from "@/utils/numberMapUtils";
import { checkSignificance } from "@/utils/significantNumbers";

const NumberMaps = () => {
  const [inputText, setInputText] = useState("");
  const [connections, setConnections] = useState<NumberConnections>({ nodes: [], links: [] });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCalculate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Enter words or phrases to analyze numerical connections",
      });
      return;
    }

    const newConnections = generateNumberConnections(inputText);
    setConnections(newConnections);
  };

  // Auto-calculate when input changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        handleCalculate();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6">
      <motion.div
        className="flex items-center mb-6 space-x-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button variant="ghost" onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Network className="h-5 w-5 text-primary" />
            Number Maps
          </h1>
          <p className="text-muted-foreground text-sm">
            Visualize numerical relationships between different gematria methods
          </p>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <TextInput
            value={inputText}
            onChange={setInputText}
            onSubmit={handleCalculate}
            placeholder="Enter text to analyze numerical patterns..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">Number Connections</h2>
            </div>
            <NumberMapChart connections={connections} inputText={inputText} />
          </div>
          <div>
            <NumericalTwins inputText={inputText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberMaps;
