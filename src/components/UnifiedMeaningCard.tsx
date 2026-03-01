import React, { useState } from "react";
import type { GematriaResult } from "../utils/gematriaCalculators";

const REDUCED_MEANINGS: Record<number, string> = {
  1: "independence, leadership, and initiative",
  2: "partnership, balance, and sensitivity",
  3: "creativity, expression, and social connection",
  4: "stability, practicality, and grounded discipline",
  5: "change, freedom, and adaptability",
  6: "harmony, responsibility, and nurturing",
  7: "spiritual depth, introspection, and analysis",
  8: "ambition, material power, and authority",
  9: "completion, humanitarianism, and universal wisdom",
};

interface UnifiedMeaningCardProps {
  name: string;
  results: GematriaResult[];
}

const LetterBreakdown: React.FC<{ result: GematriaResult }> = ({ result }) => {
  const [open, setOpen] = useState(false);
  if (result.scriptMissing) return null;
  return (
    <div className="w-full mt-1">
      <button
        className="text-xs text-blue-600 underline hover:text-blue-800 transition"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Hide" : "Show"} letter breakdown
      </button>
      {open && (
        <div className="mt-1 text-xs text-gray-600 font-mono bg-gray-50 rounded p-2 border border-gray-200 flex flex-wrap gap-1">
          {result.letterBreakdown.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-0.5">
              <span className="font-bold">{item.char}</span>
              <span className="text-gray-400">=</span>
              <span>{item.value}</span>
              {i < result.letterBreakdown.length - 1 && (
                <span className="text-gray-400 ml-0.5">+</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export const UnifiedMeaningCard: React.FC<UnifiedMeaningCardProps> = ({
  name,
  results,
}) => {
  const active = results.filter((r) => !r.scriptMissing);
  const missing = results.filter((r) => r.scriptMissing);

  const reducedCounts: Record<number, number> = {};
  active.forEach((r) => {
    reducedCounts[r.reducedValue] =
      (reducedCounts[r.reducedValue] || 0) + 1;
  });

  const sortedReduced = Object.entries(reducedCounts).sort(
    (a, b) => b[1] - a[1]
  );
  const dominantEntry =
    sortedReduced.length > 0 && Number(sortedReduced[0][1]) > 1
      ? sortedReduced[0]
      : null;
  const dominantNumber = dominantEntry ? Number(dominantEntry[0]) : null;
  const dominantCount = dominantEntry ? Number(dominantEntry[1]) : null;

  return (
    <div className="bg-gray-50 p-6 px-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-1">
        Gematria Results for{" "}
        <span className="text-primary">{name}</span>
      </h2>
      <p className="text-xs text-gray-500 mb-4">
        Each system is calculated independently. Reduction follows strict digit
        summation to a single digit (1–9).
      </p>
      <hr className="my-3 border-gray-200" />

      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        System Results
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {active.map((r) => {
          const isRepeated = reducedCounts[r.reducedValue] > 1;
          return (
            <div
              key={r.method}
              className="flex flex-col bg-white rounded-lg p-4 border border-gray-200 gap-1"
            >
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold w-fit">
                {r.method}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-bold text-primary">{r.value}</span>
                <span className="text-gray-400 text-sm">→</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  {r.reducedValue}
                </span>
                {isRepeated && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                    Repeats
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 font-mono mt-1 break-all">
                {r.reductionSteps}
              </p>
              {REDUCED_MEANINGS[r.reducedValue] && (
                <p className="text-xs text-gray-600 mt-1">
                  {r.reducedValue}: {REDUCED_MEANINGS[r.reducedValue]}
                </p>
              )}
              <LetterBreakdown result={r} />
            </div>
          );
        })}

        {missing.map((r) => (
          <div
            key={r.method}
            className="flex flex-col bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 gap-1 opacity-70"
          >
            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-semibold w-fit">
              {r.method}
            </span>
            <p className="text-xs text-gray-500 mt-2 italic leading-relaxed">
              {r.explanation}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-4 border-gray-200" />
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Unified Analysis
      </h3>

      <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
        <div className="text-sm text-gray-700 font-medium mb-1">
          Reduced values across active systems:
        </div>
        <ul className="text-sm text-gray-700 space-y-1">
          {active.map((r) => (
            <li key={r.method} className="flex items-start gap-2">
              <span className="font-semibold text-blue-700 w-44 shrink-0">
                {r.method}:
              </span>
              <span>
                {r.value} → <strong>{r.reducedValue}</strong>
                {REDUCED_MEANINGS[r.reducedValue]
                  ? ` — ${REDUCED_MEANINGS[r.reducedValue]}`
                  : ""}
              </span>
            </li>
          ))}
        </ul>

        <hr className="border-gray-100 my-2" />

        {dominantNumber !== null && dominantCount !== null ? (
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-3">
            <p className="text-sm font-semibold text-blue-800">
              Dominant number: <strong>{dominantNumber}</strong> — appears in{" "}
              {dominantCount} of {active.length} active systems.
            </p>
            {REDUCED_MEANINGS[dominantNumber] && (
              <p className="text-sm text-blue-700 mt-1">
                The repeated presence of{" "}
                <strong>{dominantNumber}</strong> emphasizes{" "}
                {REDUCED_MEANINGS[dominantNumber]}.
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 border-l-4 border-gray-300 rounded-r p-3">
            <p className="text-sm text-gray-600 italic">
              No dominant reduction across systems. Reduced values vary:{" "}
              {Object.keys(reducedCounts).join(", ")}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
