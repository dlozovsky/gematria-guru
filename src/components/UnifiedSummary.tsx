import React from "react";
import { GematriaSystemResult } from "../types/GematriaSystemResult";

export const UnifiedSummary: React.FC<{ results?: GematriaSystemResult[] }> = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div className="unified-summary" style={{background: '#f6f6f6', padding: 10, borderRadius: 6, marginBottom: 20}}>
        <strong>Unified Summary:</strong> No results available.
      </div>
    );
  }

  const summary = results.map(r => {
    const systemName = (typeof r.systemName === 'string' && r.systemName !== 'undefined') ? r.systemName : "Unknown System";
    const value = (typeof r.value === 'number') ? r.value : (r.value !== undefined && r.value !== null ? r.value : "?");
    const reducedValue = (typeof r.reducedValue === 'number') ? ` (reduced: ${r.reducedValue})` : ((r.reducedValue !== undefined && r.reducedValue !== null) ? ` (reduced: ${r.reducedValue})` : "");
    const significantMatches = Array.isArray(r.significantMatches) && r.significantMatches.length
      ? ` [${r.significantMatches.map(m => (typeof m?.number === 'number') ? m.number : ((m?.number !== undefined && m?.number !== null) ? m.number : "?")).join(", ")}]`
      : "";
    return `${systemName}: ${value}${reducedValue}${significantMatches}`;
  }).join("; ");

  return (
    <div className="unified-summary" style={{background: '#f6f6f6', padding: 10, borderRadius: 6, marginBottom: 20}}>
      <strong>Unified Summary:</strong> {summary}
    </div>
  );
};
