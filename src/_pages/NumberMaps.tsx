import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Network } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/TextInput";
import NumberMapChart from "@/components/NumberMapChart";
import NumericalTwins from "@/components/NumericalTwins";
import TimelineReferences from "@/components/TimelineReferences";
import { calculateAllGematria } from "@/utils/gematriaCalculators";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { generateNumberConnections, type NumberConnections } from "@/utils/numberMapUtils";
import { checkSignificance } from "@/utils/significantNumbers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NumberMaps = () => {
  const location = useLocation();
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

  // Prefill inputText from navigation state (if present)
  useEffect(() => {
    if (location.state && typeof location.state === "object" && location.state.inputText) {
      setInputText(location.state.inputText);
    }
    // eslint-disable-next-line
  }, []);

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
      <Header />
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

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 py-8 md:py-16">
        <div className="w-full mb-4">
          <TextInput
            value={inputText}
            onChange={setInputText}
            onSubmit={handleCalculate}
            placeholder="Enter text to analyze numerical patterns..."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center items-stretch">
          {/* Chart Section */}
          <div className="flex-[7] min-w-[420px] md:min-w-[600px] max-w-[900px] bg-card rounded-2xl shadow-lg border p-8 md:p-12 flex flex-col min-h-[540px] md:min-h-[700px]">
            <div className="flex items-center gap-2 mb-6">
              <Network className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Number Connections</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <NumberMapChart connections={connections} inputText={inputText} />
            </div>
          </div>

          {/* Twins Section */}
          <div className="flex-[3] min-w-[260px] max-w-[360px] flex flex-col">
            <div className="h-full flex flex-col">
              <NumericalTwins inputText={inputText} />
            </div>
          </div>
        </div>
      </div>
      {/* Timeline of Usage aligned under chart */}
      {inputText.trim() && (
        <div className="flex justify-center w-full">
          <div className="max-w-[900px] w-full">
            <TimelineReferences
              gematriaValues={calculateAllGematria(inputText).map(result => result.value)}
              inputText={inputText}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NumberMaps;
