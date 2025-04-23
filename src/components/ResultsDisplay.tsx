
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberCard from "./NumberCard";
import ShareButton from "./ShareButton";
import type { GematriaResult } from "../utils/gematriaCalculators";
import { UnifiedMeaningCard } from "./UnifiedMeaningCard";
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

  // UnifiedMeaningCard breakdown and summary logic
  let breakdown: any[] = [];
  let summary = "";
  if (displayResults.length > 0 && inputText.trim()) {
    breakdown = displayResults.map(r => {
      const reducedMatch = r.explanation.match(/reduces to (Master Number )?(\d+)[^,]*,? ([^.]+)\./i);
      if (reducedMatch) {
        const reduced = Number(reducedMatch[2]);
        const meaning = reducedMatch[3];
        return { system: r.method, value: r.value, reduced, meaning };
      }
      return { system: r.method, value: r.value, reduced: undefined, meaning: "" };
    });
    // Count occurrences of each reduced value
    const reducedCounts: Record<number, number> = {};
    breakdown.forEach(item => {
      if (item.reduced !== undefined) reducedCounts[item.reduced] = (reducedCounts[item.reduced] || 0) + 1;
    });
    // Find most common reduced value(s)
    const mostCommon = Object.entries(reducedCounts).sort((a, b) => b[1] - a[1])[0];
    // Build summary
    summary = breakdown
      .map(s =>
        s.reduced !== undefined ? `${s.system} reduces to ${s.reduced} (${s.meaning.trim()})` : `${s.system}`
      )
      .join('; ') + '. ';
    if (mostCommon && mostCommon[1] > 1) {
      summary += `The repeated presence of ${mostCommon[0]} across systems suggests a strong emphasis on its qualities.`;
    }
  }

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto py-4 px-2 sm:py-8 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {breakdown.length > 0 && inputText.trim() && (
        <UnifiedMeaningCard
          name={inputText}
          breakdown={breakdown}
          summary={summary}
        />
      )}
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {(() => {
  // Guarantee unique keys even if method/value are duplicated or empty
  const seen = new Set<string>();
  return displayResults.map((result, index) => {
    let baseKey = (typeof result.method === 'string' && result.method.trim() !== '' && typeof result.value === 'number' && !isNaN(result.value))
      ? `${result.method.trim()}-${result.value}`
      : `item-${index}`;
    let key = baseKey;
    let suffix = 1;
    while (seen.has(key)) {
      key = `${baseKey}-${suffix++}`;
    }
    seen.add(key);
    return (
      <NumberCard
        key={key}
        value={result.value}
        method={result.method}
        explanation={result.explanation}
      />
    );
  });
})()}
            </motion.div>
            

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
