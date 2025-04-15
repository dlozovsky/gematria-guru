
export interface GematriaResult {
  method: string;
  value: number;
  explanation: string;
}

// English Gematria (A=1, B=2, etc.)
export const calculateEnglishGematria = (text: string): GematriaResult => {
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = a; i < normalizedText.length; i++) {
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

// Pythagorean Gematria (reduced values, A=1, B=2, ... I=9, J=1, etc.)
export const calculatePythagoreanGematria = (text: string): GematriaResult => {
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = 0; i < normalizedText.length; i++) {
    const charCode = normalizedText.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      // Map A-I to 1-9, J-R to 1-9, S-Z to 1-8
      total += ((charCode - 97) % 9) + 1;
    }
  }
  
  return {
    method: "Pythagorean Gematria",
    value: total,
    explanation: "Numerology system using reduced values (1-9)"
  };
};

// Greek Isopsephy (approximation for English letters)
export const calculateGreekGematria = (text: string): GematriaResult => {
  // This is a simplified mapping for demonstration
  const greekValues: {[key: string]: number} = {
    'a': 1, 'b': 2, 'g': 3, 'd': 4, 'e': 5, 'z': 7, 'h': 8, 'q': 9,
    'i': 10, 'k': 20, 'l': 30, 'm': 40, 'n': 50, 'x': 60, 'o': 70, 'p': 80, 'r': 100,
    's': 200, 't': 300, 'u': 400, 'f': 500, 'c': 600, 'y': 700, 'w': 800
  };
  
  const normalizedText = text.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  
  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    if (greekValues[char]) {
      total += greekValues[char];
    }
  }
  
  return {
    method: "Greek Isopsephy",
    value: total,
    explanation: "Based on Classical Greek number values"
  };
};

// Calculate all methods
export const calculateAllGematria = (text: string): GematriaResult[] => {
  return [
    calculateEnglishGematria(text),
    calculateSimpleGematria(text),
    calculateJewishGematria(text),
    calculatePythagoreanGematria(text),
    calculateGreekGematria(text)
  ];
};

// Fix a typo in the English Gematria function
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
