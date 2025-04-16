
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberCard from "./NumberCard";
import ShareButton from "./ShareButton";
import type { GematriaResult } from "../utils/gematriaCalculators";
import { checkSignificance } from "@/utils/significantNumbers";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResultsDisplayProps {
  results: GematriaResult[];
  inputText: string;
}

const ResultsDisplay = ({ results, inputText }: ResultsDisplayProps) => {
  const [displayResults, setDisplayResults] = useState<GematriaResult[]>([]);
  const [showBanner, setShowBanner] = useState(false);
  const [significantResult, setSignificantResult] = useState<{value: number, description: string, tradition: string} | null>(null);
  
  useEffect(() => {
    if (results.length > 0) {
      setDisplayResults(results);
      
      // Check for significant numbers
      const profoundResults = results.filter(r => {
        const sig = checkSignificance(r.value);
        return sig && (sig.significance === 'profound' || sig.significance === 'major');
      });
      
      if (profoundResults.length > 0) {
        const firstSignificant = profoundResults[0];
        const significance = checkSignificance(firstSignificant.value);
        if (significance) {
          setSignificantResult({
            value: firstSignificant.value,
            description: significance.description,
            tradition: significance.tradition
          });
          setShowBanner(true);
          
          // Hide banner after some time
          const timer = setTimeout(() => {
            setShowBanner(false);
          }, 6000);
          
          return () => clearTimeout(timer);
        }
      } else {
        setShowBanner(false);
        setSignificantResult(null);
      }
    } else {
      setDisplayResults([]);
      setShowBanner(false);
      setSignificantResult(null);
    }
  }, [results]);

  if (!inputText.trim()) {
    return null;
  }

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {showBanner && significantResult && (
          <motion.div 
            className="w-full mb-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex items-center gap-3">
              <Award className="text-yellow-500 h-6 w-6 animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-primary">Significant Number Discovered!</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {significantResult.tradition}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-semibold">{significantResult.value}:</span> {significantResult.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
        
        {displayResults.length > 0 ? (
          <>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayResults.map((result, index) => (
                <NumberCard
                  key={result.method}
                  value={result.value}
                  method={result.method}
                  explanation={result.explanation}
                />
              ))}
            </motion.div>
            
            <div className="flex justify-center mt-6">
              <ShareButton results={displayResults} inputText={inputText} />
            </div>
          </>
        ) : (
          <motion.div 
            className="text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Enter text above to see results</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResultsDisplay;
