
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextInput from "../components/TextInput";
import ResultsDisplay from "../components/ResultsDisplay";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { calculateAllGematria, type GematriaResult } from "../utils/gematriaCalculators";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<GematriaResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const { toast } = useToast();

  const handleCalculate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Enter words or phrases to calculate their gematria values",
      });
      return;
    }

    setIsCalculating(true);
    
    // Artificial delay for animation effect
    setTimeout(() => {
      const newResults = calculateAllGematria(inputText);
      setResults(newResults);
      setIsCalculating(false);
    }, 300);
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
    <motion.div 
      className="min-h-screen flex flex-col items-center px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <motion.main 
        className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-start py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-full mb-8">
          <TextInput 
            value={inputText}
            onChange={setInputText}
            onSubmit={handleCalculate}
            placeholder="Enter words or phrases..."
          />
        </div>
        
        {isCalculating ? (
          <motion.div 
            className="w-full h-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative h-8 w-8">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
            </div>
          </motion.div>
        ) : (
          <ResultsDisplay results={results} inputText={inputText} />
        )}
      </motion.main>

      <Footer />
    </motion.div>
  );
};

export default Index;
