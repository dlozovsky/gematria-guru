import React, { useEffect, useState } from "react";

interface TimelineEntry {
  value: number;
  phrase: string;
  year: number;
  source: string;
  context: string;
}

interface TimelineReferencesProps {
  gematriaValues: number[];
  inputText: string;
}

// Use static import for Vite/React static assets
import timelineReferences from '../data/timelineReferences.json';

const TimelineReferences: React.FC<TimelineReferencesProps> = ({ gematriaValues, inputText }) => {
  const [entries] = useState<TimelineEntry[]>(timelineReferences);

  const normalizedInput = inputText.trim().toLowerCase();

  const filtered = entries.filter(
    (entry) =>
      gematriaValues.includes(entry.value) ||
      entry.phrase.toLowerCase().includes(normalizedInput) ||
      normalizedInput.includes(entry.phrase.toLowerCase())
  );

  if (!filtered.length) return null;

  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-lg font-semibold">Timeline of Usage</h3>
      <ul className="border-l-2 border-primary/30 pl-4">
        {filtered.sort((a, b) => a.year - b.year).map((entry, idx) => (
          <li key={idx} className="mb-4 relative">
            <div className="absolute -left-3 w-2 h-2 bg-primary rounded-full top-2" />
            <div className="text-sm text-muted-foreground">{entry.year > 0 ? entry.year : `${-entry.year} BCE`}</div>
            <div className="font-semibold">{entry.phrase}</div>
            <div className="text-xs italic">{entry.source}</div>
            <div className="text-sm">{entry.context}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineReferences;
