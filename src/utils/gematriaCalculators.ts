
// Gematria calculation methods

interface GematriaResult {
  method: string;
  value: number;
  explanation: string;
}

// Simple English Gematria (A=1, B=2, etc.)
export const calculateEnglishGematria = (text: string): number => {
  const normalizedText = text.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;

  for (let i = 0; i < normalizedText.length; i++) {
    const charCode = normalizedText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      total += charCode - 64; // A = 1, B = 2, etc.
    }
  }

  return total;
};

// Simple Gematria (A=1, B=2, but I=9, J=10, etc.)
export const calculateSimpleGematria = (text: string): number => {
  const normalizedText = text.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;

  for (let i = 0; i < normalizedText.length; i++) {
    const charCode = normalizedText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      total += ((charCode - 65) % 9) + 1; // A = 1, B = 2, ..., I = 9, J = 1, K = 2, etc.
    }
  }

  return total;
};

// Jewish Gematria (Hebrew letters with traditional values)
export const calculateJewishGematria = (text: string): number => {
  const hebrewValues: Record<string, number> = {
    A: 1, B: 2, G: 3, D: 4, E: 5, V: 6, Z: 7, H: 8, T: 9,
    Y: 10, K: 20, L: 30, M: 40, N: 50, S: 60, O: 70, P: 80, Z: 90,
    Q: 100, R: 200, S: 300, T: 400
  };

  const normalizedText = text.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;

  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    if (hebrewValues[char]) {
      total += hebrewValues[char];
    } else {
      total += normalizedText.charCodeAt(i) - 64; // Fallback to English if no Hebrew value
    }
  }

  return total;
};

// Calculate all methods and return results
export const calculateAllGematria = (text: string): GematriaResult[] => {
  if (!text.trim()) return [];
  
  return [
    {
      method: "English Ordinal",
      value: calculateEnglishGematria(text),
      explanation: "A=1, B=2, C=3, etc."
    },
    {
      method: "Simple Gematria",
      value: calculateSimpleGematria(text),
      explanation: "A=1, B=2, ..., I=9, J=1, K=2, etc."
    },
    {
      method: "Jewish Gematria",
      value: calculateJewishGematria(text),
      explanation: "Based on Hebrew letter values"
    }
  ];
};

export type { GematriaResult };
