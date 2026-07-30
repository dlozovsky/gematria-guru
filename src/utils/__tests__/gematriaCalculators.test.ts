import { describe, it, expect } from "vitest";
import {
  ENGLISH_MAP,
  SIMPLE_MAP,
  REVERSE_MAP,
  SUMERIAN_MAP,
  HEBREW_MAP,
  MISPAR_GADOL_MAP,
  HEBREW_ORDINAL_MAP,
  GREEK_MAP,
  reduceToSingleDigit,
  buildReductionSteps,
  detectScript,
  calculateEnglishGematria,
  calculateSimpleGematria,
  calculatePythagoreanGematria,
  calculateEnglishReverse,
  calculateSumerianGematria,
  calculateMisparGadol,
  calculateHebrewOrdinal,
  calculateJewishGematria,
  calculateAllGematria,
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

describe("English Reverse mapping", () => {
  it("maps Z to 1", () => {
    expect(REVERSE_MAP["z"]).toBe(1);
  });

  it("maps A to 26", () => {
    expect(REVERSE_MAP["a"]).toBe(26);
  });

  it("mirrors the ordinal map: each letter pair sums to 27", () => {
    for (let i = 0; i < 26; i++) {
      const ch = String.fromCharCode(97 + i);
      expect(ENGLISH_MAP[ch] + REVERSE_MAP[ch]).toBe(27);
    }
  });

  it("differs from English Ordinal for asymmetric input", () => {
    const ordinal = calculateEnglishGematria("abc");
    const reverse = calculateEnglishReverse("abc");
    expect(ordinal.value).toBe(6);
    expect(reverse.value).toBe(75);
  });
});

describe("Mispar Gadol mapping", () => {
  it("gives final kaf 500 where Hechrachi gives 20", () => {
    expect(MISPAR_GADOL_MAP["ך"]).toBe(500);
    expect(HEBREW_MAP["ך"]).toBe(20);
  });

  it("gives final tsadi 900", () => {
    expect(MISPAR_GADOL_MAP["ץ"]).toBe(900);
  });

  it("leaves non-final letters identical to Hechrachi", () => {
    for (const ch of ["א", "י", "ל", "ת"]) {
      expect(MISPAR_GADOL_MAP[ch]).toBe(HEBREW_MAP[ch]);
    }
  });

  it("matches Jewish Gematria when the word has no final forms", () => {
    const jewish = calculateJewishGematria("חי", "strict", latinToHebrew);
    const gadol = calculateMisparGadol("חי", "strict", latinToHebrew);
    expect(jewish.value).toBe(18);
    expect(gadol.value).toBe(18);
  });

  it("diverges from Jewish Gematria when a final form is present", () => {
    // מלך — final kaf: 40 + 30 + 20 = 90 standard, 40 + 30 + 500 = 570 gadol
    const jewish = calculateJewishGematria("מלך", "strict", latinToHebrew);
    const gadol = calculateMisparGadol("מלך", "strict", latinToHebrew);
    expect(jewish.value).toBe(90);
    expect(gadol.value).toBe(570);
  });
});

describe("Hebrew Ordinal (Mispar Siduri) mapping", () => {
  it("maps aleph to 1 and tav to 22", () => {
    expect(HEBREW_ORDINAL_MAP["א"]).toBe(1);
    expect(HEBREW_ORDINAL_MAP["ת"]).toBe(22);
  });

  it("maps yod to 10 and kaf to 11", () => {
    expect(HEBREW_ORDINAL_MAP["י"]).toBe(10);
    expect(HEBREW_ORDINAL_MAP["כ"]).toBe(11);
  });

  it("gives final forms the same ordinal as their base letter", () => {
    expect(HEBREW_ORDINAL_MAP["ך"]).toBe(HEBREW_ORDINAL_MAP["כ"]);
    expect(HEBREW_ORDINAL_MAP["ם"]).toBe(HEBREW_ORDINAL_MAP["מ"]);
  });

  it("calculates chai as 18 in ordinal (8 + 10)", () => {
    const r = calculateHebrewOrdinal("חי", "strict", latinToHebrew);
    expect(r.value).toBe(18);
  });

  it("blocks in strict mode without Hebrew input", () => {
    const r = calculateHebrewOrdinal("shalom", "strict", latinToHebrew);
    expect(r.status).toBe("blocked");
  });
});

describe("calculateAllGematria composition", () => {
  it("returns eight methods", () => {
    expect(calculateAllGematria("test")).toHaveLength(8);
  });

  it("returns no duplicate method names", () => {
    const methods = calculateAllGematria("test").map((r) => r.method);
    expect(new Set(methods).size).toBe(methods.length);
  });

  it("includes the three previously missing ciphers", () => {
    const methods = calculateAllGematria("test").map((r) => r.method);
    expect(methods).toContain("English Reverse");
    expect(methods).toContain("Mispar Gadol");
    expect(methods).toContain("Hebrew Ordinal");
    expect(methods).toContain("English Sumerian");
  });

  it("no longer emits Simple Gematria, which duplicated Pythagorean", () => {
    const methods = calculateAllGematria("test").map((r) => r.method);
    expect(methods).not.toContain("Simple Gematria");
  });

  it("produces distinct ordinal and reverse values for a real word", () => {
    // "gematria" — ordinal 7+5+13+1+20+18+9+1 = 74.
    // Reverse mirrors each letter (pairs sum to 27), so 8 letters => 8*27 - 74.
    const results = calculateAllGematria("gematria");
    const ordinal = results.find((r) => r.method === "English Gematria");
    const reverse = results.find((r) => r.method === "English Reverse");
    expect(ordinal?.value).toBe(74);
    expect(reverse?.value).toBe(8 * 27 - 74);
    expect(reverse?.value).not.toBe(ordinal?.value);
  });
});

describe("English Sumerian mapping", () => {
  it("maps A to 6 and Z to 156", () => {
    expect(SUMERIAN_MAP["a"]).toBe(6);
    expect(SUMERIAN_MAP["z"]).toBe(156);
  });

  it("is exactly six times the ordinal map for every letter", () => {
    for (let i = 0; i < 26; i++) {
      const ch = String.fromCharCode(97 + i);
      expect(SUMERIAN_MAP[ch]).toBe(ENGLISH_MAP[ch] * 6);
    }
  });

  it("gives a word total six times its ordinal total", () => {
    const ordinal = calculateEnglishGematria("gematria").value;
    const sumerian = calculateSumerianGematria("gematria").value;
    expect(ordinal).toBe(74);
    expect(sumerian).toBe(74 * 6);
  });

  it("gives JESUS the widely cited Sumerian value of 444", () => {
    expect(calculateEnglishGematria("JESUS").value).toBe(74);
    expect(calculateSumerianGematria("JESUS").value).toBe(444);
  });

  it("differs from every other Latin cipher for the same word", () => {
    const results = calculateAllGematria("JESUS");
    const latin = results.filter((r) => r.status === "calculated-strict" && r.value > 0);
    const sumerian = results.find((r) => r.method === "English Sumerian")!;
    const others = latin.filter((r) => r.method !== "English Sumerian").map((r) => r.value);
    expect(others).not.toContain(sumerian.value);
  });
});
