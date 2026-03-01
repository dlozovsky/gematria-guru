"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/TextInput";
import ResultsDisplay from "@/components/ResultsDisplay";
import ShareButton from "@/components/ShareButton";
import Instructions from "@/components/Instructions";
import FAQ from "@/components/FAQ";
import ExampleCard from "@/components/ExampleCard";
import { calculateAllGematria, type GematriaResult } from "@/utils/gematriaCalculators";
import { useToast } from "@/components/ui/use-toast";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryPanel, { addToHistory } from "@/components/HistoryPanel";
import RecentLookups, { RecentLookup } from "@/components/RecentLookups";

const RECENT_LOOKUPS_KEY = "recent_lookups";
const MAX_LOOKUPS = 7;

export default function GematriaCalculatorClient() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<GematriaResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recentLookups, setRecentLookups] = useState<RecentLookup[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem(RECENT_LOOKUPS_KEY);
    if (saved) setRecentLookups(JSON.parse(saved));
  }, []);

  useEffect(() => {
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
        const numbers = newResults.map((r) => r.value).filter(Boolean);
        let updated = recentLookups.filter((l) => l.input !== inputText.trim());
        updated.unshift({ input: inputText.trim(), numbers });
        if (updated.length > MAX_LOOKUPS) updated = updated.slice(0, MAX_LOOKUPS);
        setRecentLookups(updated);
        addToHistory(inputText.trim());
      }
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) handleCalculate();
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);

  const handleExploreNumberMaps = () => {
    router.push(`/number-maps?q=${encodeURIComponent(inputText)}`);
  };

  return (
    <div className="w-full">
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
      {recentLookups.length > 0 && (
        <div className="w-full mb-6 flex justify-center">
          <RecentLookups
            lookups={recentLookups}
            onSelect={setInputText}
            onClear={() => setRecentLookups([])}
            activeInput={inputText.trim()}
          />
        </div>
      )}
      {isCalculating ? (
        <div className="w-full h-40 flex items-center justify-center">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full" />
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          </div>
        </div>
      ) : (
        <ResultsDisplay results={results} inputText={inputText} />
      )}
      <FAQ />
      <HistoryPanel />
      {results.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center bg-white/90 backdrop-blur border-t border-neutral-200 shadow-lg py-4 px-2 gap-4">
          <Button
            className="flex items-center gap-2 px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-md hover:bg-blue-700"
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
    </div>
  );
}
