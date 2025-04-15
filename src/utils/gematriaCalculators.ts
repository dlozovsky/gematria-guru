
export interface GematriaResult {
  method: string;
  value: number;
  explanation: string;
}

// English Gematria (A=1, B=2, etc.)
export const calculateEnglishGematria = (text: string): GematriaResult => {
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = 0; i < normalizedText.length; i++) {
    const charCode = normalizedText.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      total += (charCode - 96); // 'a' is 97 in ASCII, so we subtract 96 to get 1
    }
  }
  
  return {
    method: "English Gematria",
    value: total,
    explanation: "A=1, B=2, C=3, ... Z=26"
  };
};

// Simple Gematria (A=1, B=2, ... I=9, J=1, K=2, etc.)
export const calculateSimpleGematria = (text: string): GematriaResult => {
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = 0; i < normalizedText.length; i++) {
    const charCode = normalizedText.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      total += ((charCode - 97) % 9) + 1; // Cycle from 1-9
    }
  }
  
  return {
    method: "Simple Gematria",
    value: total,
    explanation: "A=1, B=2, ... I=9, J=1, K=2 (cycles 1-9)"
  };
};

// Jewish Gematria (specific values for each letter)
export const calculateJewishGematria = (text: string): GematriaResult => {
  const hebrewValues: {[key: string]: number} = {
    'a': 1, 'b': 2, 'g': 3, 'd': 4, 'h': 5, 'v': 6, 'z': 7, 'c': 8,
    't': 9, 'i': 10, 'k': 20, 'l': 30, 'm': 40, 'n': 50, 's': 60,
    'o': 70, 'p': 80, 'q': 90, 'r': 100, 'w': 200, 'x': 300, 'y': 400,
    'e': 5, 'f': 80, 'j': 600, 'u': 6
  };
  
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    if (hebrewValues[char]) {
      total += hebrewValues[char];
    }
  }
  
  return {
    method: "Jewish Gematria",
    value: total,
    explanation: "Based on Hebrew letter values"
  };
};

// Calculate all methods
export const calculateAllGematria = (text: string): GematriaResult[] => {
  return [
    calculateEnglishGematria(text),
    calculateSimpleGematria(text),
    calculateJewishGematria(text)
  ];
};
