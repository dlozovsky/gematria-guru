import { useState } from "react";
import { GematriaSystemCard } from "./GematriaSystemCard";
import { UnifiedSummary } from "./UnifiedSummary";
import { calculateGematriaValue, reduceValue, getFactors, getSymbolicMatches, generateShortSummary, generateInterpretation } from "../utils/gematriaUtils";
import type { GematriaSystemResult } from "../types/GematriaSystemResult";

const ExplorerInline = () => {
  const [input, setInput] = useState("");
  const [showSummary, setShowSummary] = useState(true);

  const value = calculateGematriaValue(input, "Simple Gematria");
  const reducedValue = value ? reduceValue(value) : undefined;
  const factors = value ? getFactors(value) : [];
  const significantMatches = value ? getSymbolicMatches(value, factors) : [];

  const simpleResult: GematriaSystemResult = {
    systemName: "Simple Gematria",
    value,
    reducedValue,
    factors,
    significantMatches,
    interpretation: input && value ? generateInterpretation(reducedValue, factors) : "",
    shortSummary: input && value ? generateShortSummary(reducedValue, "Simple Gematria") : "",
    fullMeaning: input && value ? generateInterpretation(reducedValue, factors) : ""
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-4 p-4 bg-white rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">Gematria Explorer</h3>
      <input
        className="w-full border rounded px-3 py-2 mb-3 text-lg"
        type="text"
        placeholder="Enter word or phrase..."
        value={input}
        onChange={e => setInput(e.target.value)}
        autoFocus
      />
      <div className="flex items-center gap-3 mb-3">
        <button
          className={`px-3 py-1 rounded ${showSummary ? 'bg-primary text-white' : 'bg-muted text-foreground'} transition`}
          onClick={() => setShowSummary(!showSummary)}
          type="button"
        >
          {showSummary ? "Hide" : "Show"} Unified Summary
        </button>
      </div>
      {input && showSummary && <UnifiedSummary results={[simpleResult]} />}
      {input && <GematriaSystemCard result={simpleResult} />}
    </div>
  );
};

export default ExplorerInline;
