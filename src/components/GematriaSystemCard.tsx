import React, { useState } from "react";
import { GematriaSystemResult } from "../types/GematriaSystemResult";
import { generateShortSummary } from "../utils/gematriaUtils";

export const GematriaSystemCard: React.FC<{ result: GematriaSystemResult }> = ({ result }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Fallbacks for undefined/null
  const systemName = result.systemName ?? "Unknown System";
  const value = result.value !== undefined && result.value !== null ? result.value : "?";
  const reducedValue = result.reducedValue !== undefined && result.reducedValue !== null ? result.reducedValue : "?";
  const shortSummary = result.shortSummary ?? generateShortSummary(result.reducedValue ?? undefined, result.systemName ?? "");
  const fullMeaning = result.fullMeaning ?? "No interpretation available.";
  const digitalReduction = result.digitalReduction ?? null;

  return (
    <div className="p-4 bg-white rounded-md shadow-sm w-full sm:w-[250px] flex flex-col items-start mb-4">
      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full mb-2 font-semibold">
        {systemName}
      </span>
      <h2 className="text-2xl font-semibold text-blue-600 mb-1">{value}</h2>
      <p className="text-sm text-gray-700 mb-1">
        Reduces to <strong>{reducedValue}</strong>
      </p>
      <FormattedSummary
        summary={shortSummary}
        reducedValue={reducedValue !== "?" ? Number(reducedValue) : undefined}
      />
      <button
        className="mt-auto text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200 transition"
        onClick={() => setModalOpen(true)}
      >
        Meaning
      </button>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h4 className="text-lg font-bold mb-2">{systemName} – {value} → {reducedValue}</h4>
            <FormattedSummary summary={fullMeaning} />
            {digitalReduction && (
              <div className="text-xs text-gray-500">
                <strong>Digital Reduction:</strong> {digitalReduction}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper to format long summaries as bullet points
const FormattedSummary: React.FC<{ summary?: string | null; reducedValue?: number }> = ({ summary, reducedValue }) => {
  if (!summary || typeof summary !== 'string' || summary.trim() === '' || summary === 'undefined' || summary === 'null') {
    return (
      <div className="rounded-lg bg-blue-50/60 px-4 py-3 my-2 text-blue-900 italic opacity-80">
        <strong>No dominant theme identified.</strong><br />
        Sometimes the numbers don’t cluster around a single meaning. This usually means a blend of energies or a multifaceted identity.<br />
        <span className="underline">See the FAQ for details.</span>
      </div>
    );
  }
  // Enhanced splitting logic for all summary types
  let points: string[] = [];
  // If the summary contains trait patterns like 'individuality (1)', extract them all
  const traitMatches = summary.match(/([a-zA-Z ]+\([0-9]\))/g);
  if (traitMatches && traitMatches.length > 0) {
    points = Array.from(new Set(traitMatches.map(s => s.trim())));
  } else {
    // Fallback: split by periods or semicolons
    points = summary.split(/[.;\n]+/).map(s => s.trim()).filter(Boolean);
  }
  return (
    <div className="rounded-lg bg-blue-50/60 px-4 py-3 my-2">
      <ul className="list-none pl-0 space-y-2">
        {points.filter(pt => pt && pt.trim() && pt !== 'undefined' && pt !== 'null').map((pt, i) => (
          <li key={i} className="flex items-start gap-2 text-[15px] leading-snug text-blue-900">
            <span className="mt-1 text-blue-400">&#9733;</span>
            <span>{pt.trim()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
