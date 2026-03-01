import React from "react";
import type { DetectedScript, CalculationMode } from "@/utils/gematriaCalculators";

export interface RecentLookup {
  input: string;
  numbers: number[];
  detectedScript?: DetectedScript;
  mode?: CalculationMode;
  hebrewStringUsed?: string;
  greekStringUsed?: string;
  pinned?: boolean;
}

interface RecentLookupsProps {
  lookups: RecentLookup[];
  onSelect: (input: string) => void;
  onClear: () => void;
  activeInput: string;
  onPin?: (input: string) => void;
}

const RecentLookups: React.FC<RecentLookupsProps> = ({
  lookups,
  onSelect,
  onClear,
  activeInput,
  onPin,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 max-w-md w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Recent Lookups</h3>
        <button
          className="text-xs text-gray-400 hover:text-gray-600 hover:underline transition"
          onClick={onClear}
        >
          Clear History
        </button>
      </div>
      <ul className="text-blue-600 text-sm space-y-1.5">
        {lookups.map((item) => (
          <li key={item.input} className="flex items-center gap-1">
            <button
              className={`hover:underline flex-1 text-left rounded px-1 py-0.5 transition truncate ${
                activeInput === item.input ? "font-bold bg-blue-50" : ""
              }`}
              onClick={() => onSelect(item.input)}
              title={item.input}
            >
              <span className="truncate">{item.input}</span>
              <span className="text-gray-400 ml-1 text-xs font-normal">
                → {item.numbers.join(", ")}
              </span>
            </button>
            <div className="flex items-center gap-1 shrink-0">
              {item.detectedScript && (
                <span className="text-xs text-gray-400 hidden sm:inline">
                  {item.detectedScript}
                </span>
              )}
              {item.mode && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-medium hidden sm:inline ${
                    item.mode === "assisted"
                      ? "bg-amber-100 text-amber-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {item.mode}
                </span>
              )}
              {onPin && (
                <button
                  className="text-xs text-yellow-500 hover:text-yellow-700"
                  title={item.pinned ? "Unpin" : "Pin"}
                  onClick={() => onPin(item.input)}
                >
                  {item.pinned ? "pinned" : "pin"}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentLookups;
