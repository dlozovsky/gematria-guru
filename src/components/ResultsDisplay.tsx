
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberCard from "./NumberCard";
import type { GematriaResult } from "../utils/gematriaCalculators";

interface ResultsDisplayProps {
  results: GematriaResult[];
  inputText: string;
}

const ResultsDisplay = ({ results, inputText }: ResultsDisplayProps) => {
  const [displayResults, setDisplayResults] = useState<GematriaResult[]>([]);
  
  useEffect(() => {
    if (results.length > 0) {
      setDisplayResults(results);
    } else {
      setDisplayResults([]);
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
        {displayResults.length > 0 ? (
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
