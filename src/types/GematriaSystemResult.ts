export interface GematriaSystemResult {
  shortSummary: string;
  fullMeaning: string;
  traits?: string[];
  digitalReduction?: string;
  systemName: string;
  value: number;
  reducedValue?: number;
  factors: number[];
  significantMatches: SymbolicNumberMatch[];
  interpretation: string;
}

export interface SymbolicNumberMatch {
  number: number;
  description: string;
  matchingWords: string[];
}
