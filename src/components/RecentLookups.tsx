import React from "react";

interface RecentLookup {
  input: string;
  numbers: number[];
  pinned?: boolean;
}

interface RecentLookupsProps {
  lookups: RecentLookup[];
  onSelect: (input: string) => void;
  onClear: () => void;
  activeInput: string;
  onPin?: (input: string) => void;
}

const RecentLookups: React.FC<RecentLookupsProps> = ({ lookups, onSelect, onClear, activeInput, onPin }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4 max-w-md animate-fadeIn">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">🕓 Recent Lookups</h3>
        <button className="text-xs text-gray-400 hover:underline" onClick={onClear}>🗑 Clear History</button>
      </div>
      <ul className="text-blue-600 text-sm space-y-1">
        {lookups.map((item) => (
          <li key={item.input} className="flex items-center">
            <button
              className={`hover:underline w-full text-left rounded px-1 py-0.5 transition ${activeInput === item.input ? "font-bold bg-blue-50" : ""}`}
              onClick={() => onSelect(item.input)}
            >
              {item.input} → {item.numbers.join(", ")}
            </button>
            {onPin && (
              <button
                className="ml-2 text-xs text-yellow-500 hover:text-yellow-700"
                title={item.pinned ? "Unpin" : "Pin"}
                onClick={() => onPin(item.input)}
              >
                {item.pinned ? "🔖" : "📌"}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export type { RecentLookup };
export default RecentLookups;
