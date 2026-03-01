import React from "react";
import type { DetectedScript } from "@/utils/gematriaCalculators";

interface ScriptIndicatorProps {
  script: DetectedScript;
}

const scriptColors: Record<DetectedScript, string> = {
  Latin: "bg-blue-100 text-blue-700 border-blue-200",
  Hebrew: "bg-amber-100 text-amber-700 border-amber-200",
  Greek: "bg-green-100 text-green-700 border-green-200",
  Mixed: "bg-orange-100 text-orange-700 border-orange-200",
  Unknown: "bg-gray-100 text-gray-500 border-gray-200",
};

const dotColors: Record<DetectedScript, string> = {
  Latin: "bg-blue-500",
  Hebrew: "bg-amber-500",
  Greek: "bg-green-500",
  Mixed: "bg-orange-500",
  Unknown: "bg-gray-400",
};

const ScriptIndicator: React.FC<ScriptIndicatorProps> = ({ script }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${scriptColors[script]}`}
    >
      <span className={`w-2 h-2 rounded-full ${dotColors[script]}`} />
      Detected script: {script}
    </span>
  );
};

export default ScriptIndicator;
