export type DetectedScript = "Latin" | "Hebrew" | "Greek" | "Mixed" | "Unknown";
export type CalculationMode = "strict" | "assisted";
export type ResultStatus = "calculated-strict" | "calculated-assisted" | "blocked";

export interface WordBreakdown {
  word: string;
  letters: { char: string; value: number }[];
  wordSum: number;
}

export interface GematriaResult {
  method: string;
  value: number;
  reducedValue: number;
  reductionSteps: string;
  letterBreakdown: { char: string; value: number }[];
  wordBreakdown: WordBreakdown[];
  explanation: string;
  requiresScript?: "hebrew" | "greek";
  scriptMissing?: boolean;
  status: ResultStatus;
  mode: CalculationMode;
  scriptUsed?: string;
  isAssistedEstimate?: boolean;
}

export function detectScript(text: string): DetectedScript {
  const hasLatin = /[A-Za-z]/.test(text);
  const hasHebrew = /[\u0590-\u05FF]/.test(text);
  const hasGreek = /[\u0370-\u03FF\u1F00-\u1FFF]/.test(text);

  const scriptCount = [hasLatin, hasHebrew, hasGreek].filter(Boolean).length;
  if (scriptCount > 1) return "Mixed";
  if (hasHebrew) return "Hebrew";
  if (hasGreek) return "Greek";
  if (hasLatin) return "Latin";
  return "Unknown";
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

export const ENGLISH_MAP: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i + 1;
  }
  return map;
})();

export const SIMPLE_MAP: Record<string, number> = (() => {
  const map: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = (i % 9) + 1;
  }
  return map;
})();

export const HEBREW_MAP: Record<string, number> = {
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

export const GREEK_MAP: Record<string, number> = {
  "\u03B1": 1,
  "\u03B2": 2,
  "\u03B3": 3,
  "\u03B4": 4,
  "\u03B5": 5,
  "\u03DB": 6,
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
  "\u03DF": 90,
  "\u03C1": 100,
  "\u03C3": 200,
  "\u03C2": 200,
  "\u03C4": 300,
  "\u03C5": 400,
  "\u03C6": 500,
  "\u03C7": 600,
  "\u03C8": 700,
  "\u03C9": 800,
  "\u03E1": 900,
};

function stripHebrewNiqqud(text: string): string {
  return text.replace(/[\u05B0-\u05C7\u0591-\u05AF]/g, "");
}

function normalizeGreekDiacritics(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036F]/g, "").normalize("NFC");
}

function applyFinalSigma(word: string): string {
  if (word.endsWith("\u03C3")) {
    return word.slice(0, -1) + "\u03C2";
  }
  return word;
}

function buildWordBreakdown(
  words: string[],
  map: Record<string, number>
): { wordBreakdown: WordBreakdown[]; total: number; allLetters: { char: string; value: number }[] } {
  let total = 0;
  const wordBreakdown: WordBreakdown[] = [];
  const allLetters: { char: string; value: number }[] = [];

  for (const word of words) {
    const letters: { char: string; value: number }[] = [];
    let wordSum = 0;
    for (const char of word.split("")) {
      const val = map[char];
      if (val !== undefined && val > 0) {
        letters.push({ char, value: val });
        allLetters.push({ char, value: val });
        wordSum += val;
        total += val;
      }
    }
    if (letters.length > 0) {
      wordBreakdown.push({ word, letters, wordSum });
    }
  }

  return { wordBreakdown, total, allLetters };
}

export function calculateEnglishGematria(text: string, mode: CalculationMode = "strict"): GematriaResult {
  const words = text.toLowerCase().split(/\s+/).map(w => w.replace(/[^a-z]/g, "")).filter(Boolean);
  const { wordBreakdown, total, allLetters } = buildWordBreakdown(words, ENGLISH_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "English Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: allLetters,
    wordBreakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    status: "calculated-strict",
    mode,
  };
}

export function calculateSimpleGematria(text: string, mode: CalculationMode = "strict"): GematriaResult {
  const words = text.toLowerCase().split(/\s+/).map(w => w.replace(/[^a-z]/g, "")).filter(Boolean);
  const { wordBreakdown, total, allLetters } = buildWordBreakdown(words, SIMPLE_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Simple Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: allLetters,
    wordBreakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    status: "calculated-strict",
    mode,
  };
}

export function calculatePythagoreanGematria(text: string, mode: CalculationMode = "strict"): GematriaResult {
  const words = text.toLowerCase().split(/\s+/).map(w => w.replace(/[^a-z]/g, "")).filter(Boolean);
  const { wordBreakdown, total, allLetters } = buildWordBreakdown(words, SIMPLE_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);
  return {
    method: "Pythagorean Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: allLetters,
    wordBreakdown,
    explanation: `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    status: "calculated-strict",
    mode,
  };
}

export function calculateJewishGematria(
  text: string,
  mode: CalculationMode = "strict",
  transliterateLatinToHebrew: (t: string) => string,
  hebrewOverride?: string
): GematriaResult {
  const hasHebrew = /[\u0590-\u05FF]/.test(text);

  if (mode === "strict" && !hasHebrew) {
    return {
      method: "Jewish Gematria",
      value: 0,
      reducedValue: 0,
      reductionSteps: "",
      letterBreakdown: [],
      wordBreakdown: [],
      explanation:
        "Strict mode: Jewish Gematria requires Hebrew letters. Paste the name in Hebrew, or switch to Assisted mode to generate an estimate.",
      requiresScript: "hebrew",
      scriptMissing: true,
      status: "blocked",
      mode,
    };
  }

  let sourceText: string;
  let isAssistedEstimate = false;

  if (hasHebrew) {
    sourceText = stripHebrewNiqqud(text);
  } else {
    sourceText = hebrewOverride !== undefined ? hebrewOverride : transliterateLatinToHebrew(text);
    isAssistedEstimate = true;
  }

  const words = sourceText.split(/\s+/).filter(Boolean);
  const { wordBreakdown, total, allLetters } = buildWordBreakdown(words, HEBREW_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);

  return {
    method: "Jewish Gematria",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: allLetters,
    wordBreakdown,
    explanation: isAssistedEstimate
      ? `Transliteration-assisted estimate (depends on spelling).\nTotal: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`
      : `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    requiresScript: "hebrew",
    scriptMissing: false,
    status: isAssistedEstimate ? "calculated-assisted" : "calculated-strict",
    mode,
    scriptUsed: sourceText,
    isAssistedEstimate,
  };
}

export function calculateGreekGematria(
  text: string,
  mode: CalculationMode = "strict",
  transliterateLatinToGreek: (t: string) => string,
  greekOverride?: string
): GematriaResult {
  const hasGreek = /[\u0370-\u03FF\u1F00-\u1FFF]/.test(text);

  if (mode === "strict" && !hasGreek) {
    return {
      method: "Greek Isopsephy",
      value: 0,
      reducedValue: 0,
      reductionSteps: "",
      letterBreakdown: [],
      wordBreakdown: [],
      explanation:
        "Strict mode: Greek Isopsephy requires Greek letters. Paste the name in Greek, or switch to Assisted mode to generate an estimate.",
      requiresScript: "greek",
      scriptMissing: true,
      status: "blocked",
      mode,
    };
  }

  let sourceText: string;
  let isAssistedEstimate = false;

  if (hasGreek) {
    sourceText = normalizeGreekDiacritics(text).toLowerCase();
  } else {
    sourceText = greekOverride !== undefined ? greekOverride : transliterateLatinToGreek(text);
    isAssistedEstimate = true;
  }

  const wordsRaw = sourceText.split(/\s+/).filter(Boolean);
  const words = wordsRaw.map(applyFinalSigma);
  const { wordBreakdown, total, allLetters } = buildWordBreakdown(words, GREEK_MAP);
  const reducedValue = reduceToSingleDigit(total);
  const reductionSteps = buildReductionSteps(total);

  return {
    method: "Greek Isopsephy",
    value: total,
    reducedValue,
    reductionSteps,
    letterBreakdown: allLetters,
    wordBreakdown,
    explanation: isAssistedEstimate
      ? `Transliteration-assisted estimate (depends on spelling).\nTotal: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`
      : `Total: ${total}\nReduction: ${reductionSteps}\nFinal Reduced: ${reducedValue}`,
    requiresScript: "greek",
    scriptMissing: false,
    status: isAssistedEstimate ? "calculated-assisted" : "calculated-strict",
    mode,
    scriptUsed: words.join(" "),
    isAssistedEstimate,
  };
}

export interface CalculateAllOptions {
  mode?: CalculationMode;
  hebrewOverride?: string;
  greekOverride?: string;
  transliterateLatinToHebrew?: (t: string) => string;
  transliterateLatinToGreek?: (t: string) => string;
}

const noopTransliterate = (_t: string): string => "";

export function calculateAllGematria(
  text: string,
  options: CalculateAllOptions = {}
): GematriaResult[] {
  const {
    mode = "strict",
    hebrewOverride,
    greekOverride,
    transliterateLatinToHebrew = noopTransliterate,
    transliterateLatinToGreek = noopTransliterate,
  } = options;
  return [
    calculateEnglishGematria(text, mode),
    calculateSimpleGematria(text, mode),
    calculatePythagoreanGematria(text, mode),
    calculateJewishGematria(text, mode, transliterateLatinToHebrew, hebrewOverride),
    calculateGreekGematria(text, mode, transliterateLatinToGreek, greekOverride),
  ];
}
