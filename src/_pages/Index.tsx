
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import ResultsDisplay from "../components/ResultsDisplay";
import ShareButton from "../components/ShareButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";
import FAQ from "../components/FAQ";
import ExampleCard from "../components/ExampleCard";
import { calculateAllGematria, type GematriaResult } from "../utils/gematriaCalculators";
import { useToast } from "@/components/ui/use-toast";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryPanel, { addToHistory } from "../components/HistoryPanel";
import RecentLookups, { RecentLookup } from "../components/RecentLookups";

const RECENT_LOOKUPS_KEY = "recent_lookups";
const MAX_LOOKUPS = 7;

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<GematriaResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recentLookups, setRecentLookups] = useState<RecentLookup[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem(RECENT_LOOKUPS_KEY);
    if (saved) {
      setRecentLookups(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem(RECENT_LOOKUPS_KEY, JSON.stringify(recentLookups));
  }, [recentLookups]);

  const handleCalculate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Enter words or phrases to calculate their gematria values",
      });
      return;
    }
    setIsCalculating(true);
    setTimeout(() => {
      const newResults = calculateAllGematria(inputText);
      setResults(newResults);
      setIsCalculating(false);
      if (inputText.trim()) {
        const numbers = newResults.map(r => r.value).filter(Boolean);
        // Remove duplicate entries by input
        let updated = recentLookups.filter(l => l.input !== inputText.trim());
        updated.unshift({ input: inputText.trim(), numbers });
        if (updated.length > MAX_LOOKUPS) updated = updated.slice(0, MAX_LOOKUPS);
        setRecentLookups(updated);
        addToHistory(inputText.trim());
      }
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

  const navigate = useNavigate();

  const handleExploreNumberMaps = () => {
    navigate("/number-maps", { state: { inputText } });
  };

  const handleRecentSelect = (input: string) => {
    setInputText(input);
  };
  const handleRecentClear = () => {
    setRecentLookups([]);
  };

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
        <ExampleCard />
        <Instructions />
        <div className="w-full mb-2">
          <TextInput 
            value={inputText}
            onChange={setInputText}
            onSubmit={handleCalculate}
            placeholder="Enter words or phrases..."
          />
        </div>
        {/* Recent Lookups Card */}
        {recentLookups.length > 0 && (
          <div className="w-full mb-6 flex justify-center">
            <RecentLookups 
              lookups={recentLookups} 
              onSelect={handleRecentSelect}
              onClear={handleRecentClear}
              activeInput={inputText.trim()}
            />
          </div>
        )}
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
        <FAQ />
      </motion.main>
      <Footer />
      {/* Sticky Action Bar for Explore/Share */}
      {results.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center bg-white/90 backdrop-blur border-t border-neutral-200 shadow-lg py-4 px-2 gap-4 transition-all">
          <Button
            className="flex items-center gap-2 px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            onClick={handleExploreNumberMaps}
            style={{ minWidth: 180 }}
          >
            <Network className="h-5 w-5" />
            Explore Number Maps
          </Button>
          <ShareButton
            results={results}
            inputText={inputText}
            className="px-6 py-3 text-base font-semibold"
          />
        </div>
      )}

    </motion.div>
  );
};

export default Index;
