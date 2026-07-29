/**
 * Single source of truth for the letter-value tables and cipher descriptions
 * shown across the site.
 *
 * Every number here is read out of the maps in `gematriaCalculators`, so the
 * published tables cannot drift away from what the calculator actually
 * computes. Do not hardcode values in page copy; import from here.
 */
import {
  ENGLISH_MAP,
  REVERSE_MAP,
  SIMPLE_MAP,
  HEBREW_MAP,
  MISPAR_GADOL_MAP,
  HEBREW_ORDINAL_MAP,
  calculateEnglishGematria,
  calculateEnglishReverse,
  calculatePythagoreanGematria,
  calculateJewishGematria,
  calculateMisparGadol,
  calculateHebrewOrdinal,
} from "@/utils/gematriaCalculators";

export interface CipherSystem {
  /** Must match the `method` field emitted by calculateAllGematria. */
  method: string;
  /** Traditional or alternative name, where one exists. */
  alsoKnownAs?: string;
  script: "Latin" | "Hebrew" | "Greek";
  /** One-sentence statement of the rule, written to be quotable on its own. */
  rule: string;
}

export const CIPHER_SYSTEMS: CipherSystem[] = [
  {
    method: "English Gematria",
    alsoKnownAs: "English Ordinal, Simple English",
    script: "Latin",
    rule: "Each letter takes its position in the alphabet, A=1 through Z=26, and the values are added together.",
  },
  {
    method: "English Reverse",
    alsoKnownAs: "Reverse Ordinal",
    script: "Latin",
    rule: "The alphabet is counted backwards, Z=1 through A=26, so every letter takes the mirror of its ordinal value.",
  },
  {
    method: "Pythagorean Gematria",
    alsoKnownAs: "Full Reduction",
    script: "Latin",
    rule: "Letters cycle through the digits 1 to 9. A=1 to I=9, then J=1 to R=9, then S=1 to Z=8.",
  },
  {
    method: "Jewish Gematria",
    alsoKnownAs: "Mispar Hechrachi, Standard Value",
    script: "Hebrew",
    rule: "The 22 Hebrew letters take fixed values: Aleph to Tet are 1-9, Yod to Tsadi count in tens, and Qof to Tav count in hundreds up to 400.",
  },
  {
    method: "Mispar Gadol",
    alsoKnownAs: "Large Value",
    script: "Hebrew",
    rule: "Identical to the standard value, except the five final letter forms carry their own values from 500 to 900 instead of repeating the base letter.",
  },
  {
    method: "Hebrew Ordinal",
    alsoKnownAs: "Mispar Siduri",
    script: "Hebrew",
    rule: "The Hebrew letters are numbered 1 to 22 by alphabetical position, so Aleph=1 and Tav=22.",
  },
  {
    method: "Greek Isopsephy",
    alsoKnownAs: "Greek Gematria",
    script: "Greek",
    rule: "Greek letters take values from 1 to 900, including the archaic letters digamma (6), qoppa (90) and sampi (900).",
  },
];

export const CIPHER_COUNT = CIPHER_SYSTEMS.length;

export interface EnglishLetterRow {
  letter: string;
  ordinal: number;
  reverse: number;
  pythagorean: number;
}

export const ENGLISH_LETTER_TABLE: EnglishLetterRow[] = Array.from({ length: 26 }, (_, i) => {
  const ch = String.fromCharCode(97 + i);
  return {
    letter: ch.toUpperCase(),
    ordinal: ENGLISH_MAP[ch],
    reverse: REVERSE_MAP[ch],
    pythagorean: SIMPLE_MAP[ch],
  };
});

export interface HebrewLetterRow {
  glyph: string;
  name: string;
  standard: number;
  gadol: number;
  ordinal: number;
  isFinal?: boolean;
}

const HEBREW_NAMES: [string, string][] = [
  ["א", "Aleph"], ["ב", "Bet"], ["ג", "Gimel"], ["ד", "Dalet"],
  ["ה", "He"], ["ו", "Vav"], ["ז", "Zayin"], ["ח", "Chet"],
  ["ט", "Tet"], ["י", "Yod"], ["כ", "Kaf"], ["ל", "Lamed"],
  ["מ", "Mem"], ["נ", "Nun"], ["ס", "Samech"], ["ע", "Ayin"],
  ["פ", "Pe"], ["צ", "Tsadi"], ["ק", "Qof"], ["ר", "Resh"],
  ["ש", "Shin"], ["ת", "Tav"],
];

const HEBREW_FINAL_NAMES: [string, string][] = [
  ["ך", "Final Kaf"], ["ם", "Final Mem"], ["ן", "Final Nun"],
  ["ף", "Final Pe"], ["ץ", "Final Tsadi"],
];

function hebrewRow([glyph, name]: [string, string], isFinal = false): HebrewLetterRow {
  return {
    glyph,
    name,
    standard: HEBREW_MAP[glyph],
    gadol: MISPAR_GADOL_MAP[glyph],
    ordinal: HEBREW_ORDINAL_MAP[glyph],
    ...(isFinal ? { isFinal: true } : {}),
  };
}

export const HEBREW_LETTER_TABLE: HebrewLetterRow[] = HEBREW_NAMES.map((n) => hebrewRow(n));
export const HEBREW_FINAL_TABLE: HebrewLetterRow[] = HEBREW_FINAL_NAMES.map((n) => hebrewRow(n, true));

export interface WorkedExample {
  input: string;
  transliteration?: string;
  gloss: string;
  method: string;
  /** e.g. "ח(8) + י(10)". The arithmetic, shown rather than asserted. */
  arithmetic: string;
  total: number;
}

/** Uppercase display labels for the Latin alphabet, so examples read "G(7)" not "g(7)". */
const LATIN_LABELS: Record<string, string> = Object.fromEntries(
  Array.from({ length: 26 }, (_, i) => {
    const ch = String.fromCharCode(97 + i);
    return [ch, ch.toUpperCase()];
  })
);

function letterSum(text: string, map: Record<string, number>, labels?: Record<string, string>): string {
  return text
    .split("")
    .filter((ch) => map[ch] !== undefined)
    .map((ch) => `${labels?.[ch] ?? ch}(${map[ch]})`)
    .join(" + ");
}

/**
 * Worked examples. Both the arithmetic string and the total are computed from
 * the live maps, so an example can never show a sum the calculator disagrees
 * with.
 */
export const WORKED_EXAMPLES: WorkedExample[] = [
  {
    input: "חי",
    transliteration: "chai",
    gloss: "life, the number behind the customary gift in multiples of 18",
    method: "Jewish Gematria",
    arithmetic: letterSum("חי", HEBREW_MAP, { "ח": "Chet", "י": "Yod" }),
    total: calculateJewishGematria("חי", "strict", () => "").value,
  },
  {
    input: "שלום",
    transliteration: "shalom",
    gloss: "peace",
    method: "Jewish Gematria",
    arithmetic: letterSum("שלום", HEBREW_MAP, {
      "ש": "Shin", "ל": "Lamed", "ו": "Vav", "ם": "Final Mem",
    }),
    total: calculateJewishGematria("שלום", "strict", () => "").value,
  },
  {
    input: "מלך",
    transliteration: "melech",
    gloss: "king, which shows how Mispar Gadol diverges once a final letter appears",
    method: "Mispar Gadol",
    arithmetic: letterSum("מלך", MISPAR_GADOL_MAP, {
      "מ": "Mem", "ל": "Lamed", "ך": "Final Kaf",
    }),
    total: calculateMisparGadol("מלך", "strict", () => "").value,
  },
  {
    input: "LOVE",
    gloss: "a short English word. LOVE is symmetric across the alphabet, so its Reverse value is also 54",
    method: "English Gematria",
    arithmetic: letterSum("love", ENGLISH_MAP, { l: "L", o: "O", v: "V", e: "E" }),
    total: calculateEnglishGematria("LOVE").value,
  },
  {
    input: "GEMATRIA",
    gloss: "counting forwards through the alphabet",
    method: "English Gematria",
    arithmetic: letterSum("gematria", ENGLISH_MAP, LATIN_LABELS),
    total: calculateEnglishGematria("GEMATRIA").value,
  },
  {
    input: "GEMATRIA",
    gloss: "the same word counted backwards, so each letter takes the mirror of its ordinal value",
    method: "English Reverse",
    arithmetic: letterSum("gematria", REVERSE_MAP, LATIN_LABELS),
    total: calculateEnglishReverse("GEMATRIA").value,
  },
  {
    input: "GEMATRIA",
    gloss: "the same word with every letter reduced to a single digit",
    method: "Pythagorean Gematria",
    arithmetic: letterSum("gematria", SIMPLE_MAP, LATIN_LABELS),
    total: calculatePythagoreanGematria("GEMATRIA").value,
  },
];

/** Steps stated plainly, in the order the calculator performs them. */
export const CALCULATION_STEPS: { title: string; detail: string }[] = [
  {
    title: "The script is detected",
    detail:
      "The calculator reads the input and identifies whether it is Latin, Hebrew, Greek, or a mix, because each script has its own letter-value tables.",
  },
  {
    title: "Each letter is replaced by its number",
    detail:
      "Every letter is looked up in the table for the chosen system. Spaces, digits and punctuation carry no value and are skipped.",
  },
  {
    title: "The values are added together",
    detail:
      "The letter values are summed to produce the total for the word or phrase. Multi-word input is also broken down word by word.",
  },
  {
    title: "The total is reduced to a single digit",
    detail:
      "The digits of the total are added repeatedly until one digit remains. 376 becomes 3+7+6=16, then 1+6=7. This reduced value is reported alongside the full total.",
  },
  {
    title: "Every system is calculated at once",
    detail: `All ${CIPHER_COUNT} systems run in parallel on the same input, so the values can be compared side by side rather than one at a time.`,
  },
];
