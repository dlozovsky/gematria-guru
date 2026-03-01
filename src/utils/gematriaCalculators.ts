export interface GematriaResult {
  method: string;
  value: number;
  reducedValue: number;
  reductionSteps: string;
  letterBreakdown: { char: string; value: number }[];
  explanation: string;
  requiresScript?: "hebrew" | "greek";
  scriptMissing?: boolean;
}

export function reduceToSingleDigit(value: number): number {
  let n = value;
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

export function buildReductionSteps(value: number): string {
  if (value <= 9) return `${value} (already single digit)`;
  const steps: string[] = [];
  let current = value;
  while (current > 9) {
    const digits = current.toString().split("");
    const next = digits.reduce((sum, d) => sum + Number(d), 0);
    steps.push(`${digits.join(" + ")} = ${next}`);
    current = next;
  }
  return `${value} → ${steps.join(" → ")}`;
}

const ENGLISH_MAP: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i + 1;
  }
  return map;
})();

const SIMPLE_MAP: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = (i % 9) + 1;
  }
  return map;
})();

const HEBREW_MAP: Record<string, number> = {
  "\u05D0": 1,
  "\u05D1": 2,
  "\u05D2": 3,
  "\u05D3": 4,
  "\u05D4": 5,
  "\u05D5": 6,
  "\u05D6": 7,
  "\u05D7": 8,
  "\u05D8": 9,
  "\u05D9": 10,
  "\u05DB": 20,
  "\u05DC": 30,
  "\u05DE": 40,
  "\u05E0": 50,
  "\u05E1": 60,
  "\u05E2": 70,
  "\u05E4": 80,
  "\u05E6": 90,
  "\u05E7": 100,
  "\u05E8": 200,
  "\u05E9": 300,
  "\u05EA": 400,
  "\u05DA": 20,
  "\u05DD": 40,
  "\u05DF": 50,
  "\u05E3": 80,
  "\u05E5": 90,
};

const GREEK_MAP: Record<string, number> = {
  "\u03B1": 1,
  "\u03B2": 2,
  "\u03B3": 3,
  "\u03B4": 4,
  "\u03B5": 5,
  "\u03B6": 7,
  "\u03B7": 8,
  "\u03B8": 9,
  "\u03B9": 10,
  "\u03BA": 20,
  "\u03BB": 30,
  "\u03BC": 40,
  "\u03BD": 50,
  "\u03BE": 60,
  "\u03BF": 70,
  "\u03C0": 80,
  "\u03C1": 100,
  "\u03C3": 200,
  "\u03C4": 300,
  "\u03C5": 400,
  "\u03C6": 500,
  "\u03C7": 600,
  "\u03C8": 700,
  "\u03C9": 800,
  "\u03C2": 200,
};

function hasHebrewChars(text: string): boolean {
  return /[\u05D0-\u05EA]/.test(text);
}

function hasGreekChars(text: string): boolean {
  return /[\u0391-\u03C9]/.test(text);
}

function sumWithBreakdown(
  chars: string[],
  map: Record<string, number>
): { total: number; breakdown: { char: string; value: number }[] } {
  let total = 0;
  const breakdown: { char: string; value: number }[] = [];
  for (const char of chars) {
    const val = map[char] ?? 0;
    if (val > 0) {
      total += val;
      breakdown.push({ char, value: val });
    }
  }
  return { total, breakdown };
}

export const calculateEnglishGematria = (text: string): GematriaResult => {
  const chars = text.toLowerCase().replace(/[^a-z]/g, "").split("");
  const { total, breakdown } = sumWithBreakdown(chars, ENGLISH_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "English Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: breakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
  };
};

export const calculateSimpleGematria = (text: string): GematriaResult => {
  const chars = text.toLowerCase().replace(/[^a-z]/g, "").split("");
  const { total, breakdown } = sumWithBreakdown(chars, SIMPLE_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Simple Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: breakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
  };
};

export const calculatePythagoreanGematria = (text: string): GematriaResult => {
  const chars = text.toLowerCase().replace(/[^a-z]/g, "").split("");
  const { total, breakdown } = sumWithBreakdown(chars, SIMPLE_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Pythagorean Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: breakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
  };
};

export const calculateJewishGematria = (text: string): GematriaResult => {
  if (!hasHebrewChars(text)) {
    return {
      method: "Jewish Gematria",
      value: 0,
      reducedValue: 0,
      reductionSteps: "",
      letterBreakdown: [],
      explanation:
        "Accurate Jewish Gematria requires Hebrew spelling. Please provide Hebrew characters.",
      requiresScript: "hebrew",
      scriptMissing: true,
    };
  }
  const chars = text.split("").filter((c) => HEBREW_MAP[c] !== undefined);
  const { total, breakdown } = sumWithBreakdown(chars, HEBREW_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Jewish Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: breakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    requiresScript: "hebrew",
  };
};

export const calculateGreekGematria = (text: string): GematriaResult => {
  if (!hasGreekChars(text)) {
    return {
      method: "Greek Isopsephy",
      value: 0,
      reducedValue: 0,
      reductionSteps: "",
      letterBreakdown: [],
      explanation:
        "Accurate Greek Isopsephy requires Greek spelling. Please provide Greek characters.",
      requiresScript: "greek",
      scriptMissing: true,
    };
  }
  const lowerText = text.toLowerCase();
  const chars = lowerText.split("").filter((c) => GREEK_MAP[c] !== undefined);
  const { total, breakdown } = sumWithBreakdown(chars, GREEK_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Greek Isopsephy",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: breakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    requiresScript: "greek",
  };
};

export const calculateAllGematria = (text: string): GematriaResult[] => {
  return [
    calculateEnglishGematria(text),
    calculateSimpleGematria(text),
    calculatePythagoreanGematria(text),
    calculateJewishGematria(text),
    calculateGreekGematria(text),
  ];
};
