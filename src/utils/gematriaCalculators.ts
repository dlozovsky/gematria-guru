
import { REDUCED_TEMPLATES, FACTOR_TEMPLATES } from "../data/numerologyTemplates";

export interface GematriaResult {
  method: string;
  value: number;
  explanation: string;
}

function reduceValue(value: number): number {
  while (value > 9 && value !== 11 && value !== 22 && value !== 33) {
    value = value
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value;
}

function getFactors(value: number): number[] {
  const factors = [];
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) factors.push(i);
  }
  return factors;
}

function generateInterpretation(reducedValue: number | undefined, factors: number[]): string {
  let reducedText = reducedValue && REDUCED_TEMPLATES[reducedValue] ? REDUCED_TEMPLATES[reducedValue] : '';
  const factorTexts = factors
    .filter(f => FACTOR_TEMPLATES[f])
    .map(f => FACTOR_TEMPLATES[f]);
  let factorSummary = '';
  if (factorTexts.length) {
    factorSummary = `The presence of ${factorTexts.join(', ')} suggests a combination of ${factorTexts.join(', ')}.`;
  }
  if (reducedText && factorSummary) {
    return `${reducedText} ${factorSummary} Together, these energies imply a name or word that carries great potential for balanced power, creative insight, and emotional intelligence.`;
  }
  return reducedText || factorSummary || '';
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
  
  const reduced = reduceValue(total);
  const factors = getFactors(total);
  return {
    method: "English Gematria",
    value: total,
    explanation: generateInterpretation(reduced, factors)
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
  
  const reduced = reduceValue(total);
  const factors = getFactors(total);
  return {
    method: "Simple Gematria",
    value: total,
    explanation: generateInterpretation(reduced, factors)
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
  
  const reduced = reduceValue(total);
  const factors = getFactors(total);
  return {
    method: "Jewish Gematria",
    value: total,
    explanation: generateInterpretation(reduced, factors)
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
  
  const reduced = reduceValue(total);
  const factors = getFactors(total);
  return {
    method: "Pythagorean Gematria",
    value: total,
    explanation: generateInterpretation(reduced, factors)
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
  
  const reduced = reduceValue(total);
  const factors = getFactors(total);
  return {
    method: "Greek Isopsephy",
    value: total,
    explanation: generateInterpretation(reduced, factors)
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
