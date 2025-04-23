// Helper to format long summaries as bullet points
import React from "react";

const FormattedSummary: React.FC<{ summary: string; reducedValue?: number }> = ({ summary, reducedValue }) => {
  if (!summary) {
    return null;
  }
  // Enhanced splitting logic for all summary types
  let points: string[] = [];
  // If the summary contains trait patterns like 'individuality (1)', extract them all
  const traitMatches = summary.match(/([a-zA-Z ]+\([0-9]\))/g);
  if (traitMatches && traitMatches.length > 0) {
    points = Array.from(new Set(traitMatches.map(s => s.trim())));
  } else if (summary.includes('suggests a combination of')) {
    // Extract all traits from both sides of the phrase
    const [first, second] = summary.split('suggests a combination of');
    points = [...first.split(',').map(s => s.replace(/^The presence of /, '').trim()), ...second.split(',').map(s => s.trim())];
  } else if (summary.match(/[.?!]/)) {
    points = summary.split(/(?<=[.?!])\s+(?=[A-Z])/);
  } else if (summary.includes(',')) {
    points = summary.split(',').map(s => s.trim());
  } else {
    points = [summary];
  }
  // Remove duplicates and empty
  points = points.map(s => s.replace(/^and /, '').trim()).filter((v, i, a) => v && a.indexOf(v) === i);
  return (
    <div className="space-y-1 text-xs">
      <ul className="list-disc pl-5">
        {points.filter(pt => pt && pt.trim()).map((pt, i) => {
          const key = i + '-' + btoa(unescape(encodeURIComponent(pt.trim()))).slice(0, 8);
          return (
            <li key={key} className="mb-1">{pt.trim()}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormattedSummary;
