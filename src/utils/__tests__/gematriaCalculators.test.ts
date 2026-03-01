import { describe, it, expect } from "vitest";
import {
  ENGLISH_MAP,
  SIMPLE_MAP,
  HEBREW_MAP,
  GREEK_MAP,
  reduceToSingleDigit,
  buildReductionSteps,
  detectScript,
  calculateEnglishGematria,
  calculateSimpleGematria,
  calculatePythagoreanGematria,
  calculateJewishGematria,
  calculateGreekGematria,
} from "../gematriaCalculators";
import { latinToHebrew, latinToGreek } from "../transliteration";

describe("English Gematria mapping", () => {
  it("maps A to 1", () => {
    expect(ENGLISH_MAP["a"]).toBe(1);
  });

  it("maps Z to 26", () => {
    expect(ENGLISH_MAP["z"]).toBe(26);
  });

  it("maps M to 13", () => {
    expect(ENGLISH_MAP["m"]).toBe(13);
  });

  it("calculates Daniel Lozovsky total as 190", () => {
    const r = calculateEnglishGematria("Daniel Lozovsky");
    expect(r.value).toBe(190);
  });

  it("reduces Daniel Lozovsky English to 1", () => {
    const r = calculateEnglishGematria("Daniel Lozovsky");
    expect(r.reducedValue).toBe(1);
  });
});

describe("Simple / Pythagorean Gematria mapping", () => {
  it("maps A to 1", () => {
    expect(SIMPLE_MAP["a"]).toBe(1);
  });

  it("maps I to 9", () => {
    expect(SIMPLE_MAP["i"]).toBe(9);
  });

  it("maps J to 1 (cycle resets)", () => {
    expect(SIMPLE_MAP["j"]).toBe(1);
  });

  it("maps Z to 8", () => {
    expect(SIMPLE_MAP["z"]).toBe(8);
  });

  it("calculates Daniel Lozovsky Simple total as 64", () => {
    const r = calculateSimpleGematria("Daniel Lozovsky");
    expect(r.value).toBe(64);
  });

  it("reduces Daniel Lozovsky Simple to 1", () => {
    const r = calculateSimpleGematria("Daniel Lozovsky");
    expect(r.reducedValue).toBe(1);
  });

  it("Pythagorean matches Simple for Latin input", () => {
    const simple = calculateSimpleGematria("Daniel Lozovsky");
    const pyth = calculatePythagoreanGematria("Daniel Lozovsky");
    expect(pyth.value).toBe(simple.value);
    expect(pyth.reducedValue).toBe(simple.reducedValue);
  });
});

describe("Reduction function", () => {
  it("reduces 240 to 6", () => {
    expect(reduceToSingleDigit(240)).toBe(6);
  });

  it("reduces 190 to 1", () => {
    expect(reduceToSingleDigit(190)).toBe(1);
  });

  it("reduces 105 to 6", () => {
    expect(reduceToSingleDigit(105)).toBe(6);
  });

  it("reduces 763 to 7", () => {
    expect(reduceToSingleDigit(763)).toBe(7);
  });

  it("reduces 1197 to 9", () => {
    expect(reduceToSingleDigit(1197)).toBe(9);
  });

  it("returns single digits unchanged", () => {
    for (let i = 1; i <= 9; i++) {
      expect(reduceToSingleDigit(i)).toBe(i);
    }
  });

  it("builds correct reduction steps string for 190", () => {
    const steps = buildReductionSteps(190);
    expect(steps).toContain("190");
    expect(steps).toContain("1 + 9 + 0 = 10");
    expect(steps).toContain("1 + 0 = 1");
  });
});

describe("Script detection", () => {
  it("detects Latin for English text", () => {
    expect(detectScript("Daniel Lozovsky")).toBe("Latin");
  });

  it("detects Hebrew for Hebrew text", () => {
    expect(detectScript("\u05D4\u05E9\u05DC\u05D5\u05DD")).toBe("Hebrew");
  });

  it("detects Greek for Greek text", () => {
    expect(detectScript("\u03B1\u03BB\u03C6\u03B1")).toBe("Greek");
  });

  it("detects Mixed when Hebrew and Latin combined", () => {
    expect(detectScript("Hello \u05D4\u05E9")).toBe("Mixed");
  });

  it("detects Mixed when Greek and Latin combined", () => {
    expect(detectScript("Hello \u03B1\u03BB")).toBe("Mixed");
  });

  it("returns Unknown for digits only", () => {
    expect(detectScript("12345")).toBe("Unknown");
  });

  it("returns Unknown for empty string", () => {
    expect(detectScript("")).toBe("Unknown");
  });
});

describe("Hebrew final forms", () => {
  it("kaf sofit (ך) has value 20", () => {
    expect(HEBREW_MAP["\u05DA"]).toBe(20);
  });

  it("mem sofit (ם) has value 40", () => {
    expect(HEBREW_MAP["\u05DD"]).toBe(40);
  });

  it("nun sofit (ן) has value 50", () => {
    expect(HEBREW_MAP["\u05DF"]).toBe(50);
  });

  it("pe sofit (ף) has value 80", () => {
    expect(HEBREW_MAP["\u05E3"]).toBe(80);
  });

  it("tsadi sofit (ץ) has value 90", () => {
    expect(HEBREW_MAP["\u05E5"]).toBe(90);
  });
});

describe("Greek final sigma handling", () => {
  it("final sigma (ς) maps to 200", () => {
    expect(GREEK_MAP["\u03C2"]).toBe(200);
  });

  it("standard sigma (σ) maps to 200", () => {
    expect(GREEK_MAP["\u03C3"]).toBe(200);
  });

  it("word ending in σ gets converted to ς in Isopsephy", () => {
    const r = calculateGreekGematria("\u03B1\u03BD\u03B8\u03C1\u03C9\u03C0\u03BF\u03C3", "strict", latinToGreek);
    expect(r.wordBreakdown[0]?.word.endsWith("\u03C2")).toBe(true);
  });
});

describe("Strict mode blocking", () => {
  it("blocks Jewish Gematria for Latin input in strict mode", () => {
    const r = calculateJewishGematria("hello", "strict", latinToHebrew);
    expect(r.status).toBe("blocked");
    expect(r.scriptMissing).toBe(true);
  });

  it("blocks Greek Isopsephy for Latin input in strict mode", () => {
    const r = calculateGreekGematria("hello", "strict", latinToGreek);
    expect(r.status).toBe("blocked");
    expect(r.scriptMissing).toBe(true);
  });

  it("includes the required exact message for blocked Jewish Gematria", () => {
    const r = calculateJewishGematria("hello", "strict", latinToHebrew);
    expect(r.explanation).toContain("Strict mode: Jewish Gematria requires Hebrew letters");
  });

  it("includes the required exact message for blocked Greek Isopsephy", () => {
    const r = calculateGreekGematria("hello", "strict", latinToGreek);
    expect(r.explanation).toContain("Strict mode: Greek Isopsephy requires Greek letters");
  });
});

describe("Assisted mode transliteration", () => {
  it("produces a non-empty Hebrew string for Latin input", () => {
    const hebrew = latinToHebrew("daniel");
    expect(hebrew.length).toBeGreaterThan(0);
    expect(/[\u0590-\u05FF]/.test(hebrew)).toBe(true);
  });

  it("produces a non-empty Greek string for Latin input", () => {
    const greek = latinToGreek("daniel");
    expect(greek.length).toBeGreaterThan(0);
    expect(/[\u0370-\u03FF]/.test(greek)).toBe(true);
  });

  it("computes a value in assisted mode for Latin input (Jewish)", () => {
    const r = calculateJewishGematria("daniel", "assisted", latinToHebrew);
    expect(r.status).toBe("calculated-assisted");
    expect(r.value).toBeGreaterThan(0);
    expect(r.isAssistedEstimate).toBe(true);
    expect(r.scriptUsed).toBeDefined();
  });

  it("computes a value in assisted mode for Latin input (Greek)", () => {
    const r = calculateGreekGematria("daniel", "assisted", latinToGreek);
    expect(r.status).toBe("calculated-assisted");
    expect(r.value).toBeGreaterThan(0);
    expect(r.isAssistedEstimate).toBe(true);
    expect(r.scriptUsed).toBeDefined();
  });

  it("uses hebrewOverride when provided", () => {
    const override = "\u05D3\u05E0\u05D9\u05D0\u05DC";
    const r = calculateJewishGematria("daniel", "assisted", latinToHebrew, override);
    expect(r.scriptUsed).toBe(override);
  });

  it("uses greekOverride when provided", () => {
    const override = "\u03B4\u03B1\u03BD\u03B9\u03B7\u03BB";
    const r = calculateGreekGematria("daniel", "assisted", latinToGreek, override);
    expect(r.scriptUsed).toBe(override);
  });

  it("preserves spaces in latinToHebrew", () => {
    const result = latinToHebrew("daniel lozovsky");
    expect(result).toContain(" ");
    const words = result.split(" ");
    expect(words.length).toBe(2);
  });

  it("preserves spaces in latinToGreek", () => {
    const result = latinToGreek("daniel lozovsky");
    expect(result).toContain(" ");
    const words = result.split(" ");
    expect(words.length).toBe(2);
  });
});

describe("Per-word breakdown", () => {
  it("English provides word breakdown with correct word sums", () => {
    const r = calculateEnglishGematria("hi lo");
    expect(r.wordBreakdown.length).toBe(2);
    const hi = r.wordBreakdown.find((w) => w.word === "hi");
    const lo = r.wordBreakdown.find((w) => w.word === "lo");
    expect(hi).toBeDefined();
    expect(lo).toBeDefined();
    expect(hi!.wordSum).toBe(ENGLISH_MAP["h"] + ENGLISH_MAP["i"]);
    expect(lo!.wordSum).toBe(ENGLISH_MAP["l"] + ENGLISH_MAP["o"]);
  });
});
