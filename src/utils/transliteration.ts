const HEBREW_DIGRAPHS: [string, string][] = [
  ["sh", "\u05E9"],
  ["ch", "\u05D7"],
  ["ts", "\u05E6"],
  ["ph", "\u05E4"],
  ["th", "\u05EA"],
  ["kh", "\u05DB"],
];

const HEBREW_CONSONANTS: Record<string, string> = {
  b: "\u05D1",
  g: "\u05D2",
  d: "\u05D3",
  h: "\u05D4",
  z: "\u05D6",
  k: "\u05DB",
  c: "\u05DB",
  l: "\u05DC",
  m: "\u05DE",
  n: "\u05E0",
  p: "\u05E4",
  f: "\u05E4",
  r: "\u05E8",
  s: "\u05E1",
  t: "\u05D8",
  y: "\u05D9",
  j: "\u05D9",
  v: "\u05D5",
  w: "\u05D5",
  q: "\u05E7",
};

const HEBREW_VOWELS: Record<string, string> = {
  a: "\u05D0",
  e: "\u05D0",
  i: "\u05D9",
  o: "\u05D5",
  u: "\u05D5",
};

export function latinToHebrew(text: string): string {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  const convertedWords = words.map((word) => {
    let result = "";
    let i = 0;
    while (i < word.length) {
      let matched = false;

      for (const [digraph, hebrew] of HEBREW_DIGRAPHS) {
        if (word.startsWith(digraph, i)) {
          result += hebrew;
          i += digraph.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;

      if (word[i] === "x") {
        result += "\u05E7\u05E1";
        i++;
        continue;
      }

      const ch = word[i];
      if (HEBREW_CONSONANTS[ch]) {
        result += HEBREW_CONSONANTS[ch];
      } else if (HEBREW_VOWELS[ch]) {
        result += HEBREW_VOWELS[ch];
      }
      i++;
    }
    return result;
  });

  return convertedWords.filter(Boolean).join(" ");
}

const GREEK_DIGRAPHS: [string, string][] = [
  ["th", "\u03B8"],
  ["ch", "\u03C7"],
  ["ps", "\u03C8"],
  ["ks", "\u03BE"],
  ["ph", "\u03C6"],
];

const GREEK_CONSONANTS: Record<string, string> = {
  b: "\u03B2",
  v: "\u03B2",
  g: "\u03B3",
  d: "\u03B4",
  z: "\u03B6",
  k: "\u03BA",
  c: "\u03BA",
  l: "\u03BB",
  m: "\u03BC",
  n: "\u03BD",
  p: "\u03C0",
  r: "\u03C1",
  s: "\u03C3",
  t: "\u03C4",
  h: "\u03B7",
  y: "\u03C5",
  j: "\u03B9",
  w: "\u03C9",
  x: "\u03BE",
};

const GREEK_VOWELS: Record<string, string> = {
  a: "\u03B1",
  e: "\u03B5",
  i: "\u03B9",
  o: "\u03BF",
  u: "\u03C5",
};

function applyFinalSigma(word: string): string {
  if (word.endsWith("\u03C3")) {
    return word.slice(0, -1) + "\u03C2";
  }
  return word;
}

export function latinToGreek(text: string): string {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  const convertedWords = words.map((word) => {
    let result = "";
    let i = 0;
    while (i < word.length) {
      let matched = false;

      for (const [digraph, greek] of GREEK_DIGRAPHS) {
        if (word.startsWith(digraph, i)) {
          result += greek;
          i += digraph.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;

      const ch = word[i];
      if (GREEK_CONSONANTS[ch]) {
        result += GREEK_CONSONANTS[ch];
      } else if (GREEK_VOWELS[ch]) {
        result += GREEK_VOWELS[ch];
      }
      i++;
    }
    return applyFinalSigma(result);
  });

  return convertedWords.filter(Boolean).join(" ");
}
