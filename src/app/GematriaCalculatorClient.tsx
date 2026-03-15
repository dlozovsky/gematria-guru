"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TextInput from "@/components/TextInput";
import ResultsDisplay from "@/components/ResultsDisplay";
import ShareButton from "@/components/ShareButton";
import Instructions from "@/components/Instructions";
import FAQ from "@/components/FAQ";
import ExampleCard from "@/components/ExampleCard";
import ScriptIndicator from "@/components/ScriptIndicator";
import ModeToggle from "@/components/ModeToggle";
import {
  calculateAllGematria,
  detectScript,
  type GematriaResult,
  type CalculationMode,
  type DetectedScript,
} from "@/utils/gematriaCalculators";
import { latinToHebrew, latinToGreek } from "@/utils/transliteration";
import { useToast } from "@/components/ui/use-toast";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryPanel, { addToHistory } from "@/components/HistoryPanel";
import RecentLookups, { type RecentLookup } from "@/components/RecentLookups";

const RECENT_LOOKUPS_KEY = "recent_lookups";
const MAX_LOOKUPS = 7;

export default function GematriaCalculatorClient() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<GematriaResult[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recentLookups, setRecentLookups] = useState<RecentLookup[]>([]);
  const [calculationMode, setCalculationMode] = useState<CalculationMode>("strict");
  const [detectedScript, setDetectedScript] = useState<DetectedScript>("Unknown");
  const [hebrewOverride, setHebrewOverride] = useState<string | undefined>(undefined);
  const [greekOverride, setGreekOverride] = useState<string | undefined>(undefined);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const saved = localStorage.getItem(RECENT_LOOKUPS_KEY);
    if (saved) setRecentLookups(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(RECENT_LOOKUPS_KEY, JSON.stringify(recentLookups));
  }, [recentLookups]);

  useEffect(() => {
    setDetectedScript(detectScript(inputText));
    setHebrewOverride(undefined);
    setGreekOverride(undefined);
  }, [inputText]);
  useEffect(() => {
    const preset = searchParams.get("preset");
    if (preset === "english") {
      setInputText((current) => current || "gematria");
      setCalculationMode("strict");
    }
    if (preset === "hebrew") {
      setInputText((current) => current || "אבג");
      setCalculationMode("strict");
    }
  }, [searchParams]);


  const runCalculation = useCallback(
    (text: string, mode: CalculationMode, hOverride?: string, gOverride?: string) => {
      if (!text.trim()) {
        setResults([]);
        return;
      }
      setIsCalculating(true);
      setTimeout(() => {
        const newResults = calculateAllGematria(text, {
          mode,
          hebrewOverride: hOverride,
          greekOverride: gOverride,
          transliterateLatinToHebrew: latinToHebrew,
          transliterateLatinToGreek: latinToGreek,
        });
        setResults(newResults);
        setIsCalculating(false);

        const numbers = newResults
          .filter((r) => r.status !== "blocked")
          .map((r) => r.value)
          .filter(Boolean);

        const hebrewResult = newResults.find(
          (r) => r.requiresScript === "hebrew" && r.isAssistedEstimate
        );
        const greekResult = newResults.find(
          (r) => r.requiresScript === "greek" && r.isAssistedEstimate
        );

        let updated = recentLookups.filter((l) => l.input !== text.trim());
        updated.unshift({
          input: text.trim(),
          numbers,
          detectedScript: detectScript(text),
          mode,
          hebrewStringUsed: hebrewResult?.scriptUsed,
          greekStringUsed: greekResult?.scriptUsed,
        });
        if (updated.length > MAX_LOOKUPS) updated = updated.slice(0, MAX_LOOKUPS);
        setRecentLookups(updated);
        addToHistory(text.trim());
      }, 300);
    },
    [recentLookups]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        runCalculation(inputText, calculationMode, hebrewOverride, greekOverride);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText, calculationMode]);

  const handleHebrewOverrideChange = (val: string) => {
    setHebrewOverride(val);
    runCalculation(inputText, calculationMode, val, greekOverride);
  };

  const handleGreekOverrideChange = (val: string) => {
    setGreekOverride(val);
    runCalculation(inputText, calculationMode, hebrewOverride, val);
  };

  const handleModeChange = (mode: CalculationMode) => {
    setCalculationMode(mode);
    setHebrewOverride(undefined);
    setGreekOverride(undefined);
  };

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
          onSubmit={() =>
            runCalculation(inputText, calculationMode, hebrewOverride, greekOverride)
          }
          placeholder="Enter words or phrases..."
        />
      </div>
      <div className="w-full flex flex-wrap items-center gap-3 mb-4 px-1">
        <ScriptIndicator script={detectedScript} />
        <ModeToggle mode={calculationMode} onChange={handleModeChange} />
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
        <ResultsDisplay
          results={results}
          inputText={inputText}
          onHebrewOverrideChange={handleHebrewOverrideChange}
          onGreekOverrideChange={handleGreekOverrideChange}
        />
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
