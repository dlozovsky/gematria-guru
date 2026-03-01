import React from "react";
import type { CalculationMode } from "@/utils/gematriaCalculators";

interface ModeToggleProps {
  mode: CalculationMode;
  onChange: (mode: CalculationMode) => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onChange }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-xs font-medium text-gray-600">Calculation Mode:</span>
      <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 p-0.5 gap-0.5">
        <button
          onClick={() => onChange("strict")}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 ${
            mode === "strict"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          title="Strict: Hebrew/Greek require native script"
        >
          Strict
        </button>
        <button
          onClick={() => onChange("assisted")}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-150 ${
            mode === "assisted"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          title="Assisted: auto-transliteration estimate"
        >
          Assisted
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;
