import React, { useState } from "react";
import { ChevronDown, ChevronUp, Lock, AlertTriangle } from "lucide-react";
import type { GematriaResult } from "@/utils/gematriaCalculators";

interface SystemCardProps {
  result: GematriaResult;
  onScriptOverrideChange?: (newScript: string) => void;
}

const statusLabel: Record<string, { text: string; className: string }> = {
  "calculated-strict": {
    text: "Calculated (Strict)",
    className: "bg-blue-100 text-blue-700 border-blue-200",
  },
  "calculated-assisted": {
    text: "Calculated (Assisted estimate)",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  blocked: {
    text: "Blocked",
    className: "bg-gray-100 text-gray-500 border-gray-200",
  },
};

const SystemCard: React.FC<SystemCardProps> = ({ result, onScriptOverrideChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [editedScript, setEditedScript] = useState(result.scriptUsed ?? "");

  const isBlocked = result.status === "blocked";
  const label = statusLabel[result.status] ?? statusLabel["blocked"];

  const handleScriptChange = (val: string) => {
    setEditedScript(val);
    onScriptOverrideChange?.(val);
  };

  const scriptLabel =
    result.requiresScript === "hebrew" ? "Hebrew spelling used" : "Greek spelling used";

  return (
    <div
      className={`rounded-xl border transition-all duration-150 ${
        isBlocked
          ? "bg-gray-50 border-dashed border-gray-300 opacity-75"
          : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      <button
        className="w-full flex items-center justify-between px-4 py-3 gap-3 text-left"
        onClick={() => !isBlocked && setExpanded((v) => !v)}
        disabled={isBlocked}
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-gray-800">{result.method}</span>
            <span
              className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border font-medium ${label.className}`}
            >
              {isBlocked && <Lock className="w-3 h-3" />}
              {result.isAssistedEstimate && !isBlocked && (
                <AlertTriangle className="w-3 h-3" />
              )}
              {label.text}
            </span>
          </div>
          {!isBlocked && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xl font-bold text-primary">{result.value}</span>
              <span className="text-gray-400 text-sm">→</span>
              <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                {result.reducedValue}
              </span>
            </div>
          )}
        </div>
        {!isBlocked && (
          <span className="text-gray-400 flex-shrink-0">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
      </button>

      {isBlocked && (
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-500 italic leading-relaxed">{result.explanation}</p>
        </div>
      )}

      {!isBlocked && expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 mt-1 pt-3 space-y-3">
          {result.isAssistedEstimate && (
            <div className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-700">
              <AlertTriangle className="inline w-3 h-3 mr-1" />
              Transliteration-assisted estimate — the value depends on spelling.
            </div>
          )}

          {result.isAssistedEstimate && onScriptOverrideChange && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-600">{scriptLabel}</label>
              <input
                type="text"
                value={editedScript}
                onChange={(e) => handleScriptChange(e.target.value)}
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-1.5 font-mono focus:outline-none focus:ring-2 focus:ring-blue-300"
                dir={result.requiresScript === "hebrew" ? "rtl" : "ltr"}
                placeholder={`Edit ${scriptLabel.toLowerCase()}...`}
              />
              <p className="text-xs text-gray-400">
                Editing this will immediately recalculate the value.
              </p>
            </div>
          )}

          {result.scriptUsed && !result.isAssistedEstimate && (
            <div className="text-xs text-gray-500">
              Input used:{" "}
              <span
                className="font-mono bg-gray-100 px-1.5 py-0.5 rounded"
                dir={result.requiresScript === "hebrew" ? "rtl" : "ltr"}
              >
                {result.scriptUsed}
              </span>
            </div>
          )}

          {result.wordBreakdown.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-700">Per-word breakdown</h4>
              {result.wordBreakdown.map((wb, wi) => (
                <div key={wi} className="bg-gray-50 rounded-lg px-3 py-2">
                  <div className="text-xs font-medium text-gray-600 mb-1 font-mono">
                    {wb.word}
                  </div>
                  <div className="flex flex-wrap gap-1 text-xs font-mono text-gray-700">
                    {wb.letters.map((l, li) => (
                      <span key={li} className="inline-flex items-center gap-0.5">
                        <span className="font-bold">{l.char}</span>
                        <span className="text-gray-400">=</span>
                        <span>{l.value}</span>
                        {li < wb.letters.length - 1 && (
                          <span className="text-gray-400 ml-0.5">+</span>
                        )}
                      </span>
                    ))}
                    <span className="text-gray-500 ml-1">= {wb.wordSum}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-xs text-gray-500 space-y-0.5">
            <div>
              <span className="font-medium text-gray-700">Total:</span> {result.value}
            </div>
            <div className="font-mono">
              <span className="font-medium text-gray-700">Reduction:</span>{" "}
              {result.reductionSteps}
            </div>
            <div>
              <span className="font-medium text-gray-700">Reduced value:</span>{" "}
              <span className="text-blue-700 font-bold">{result.reducedValue}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemCard;
