/**
 * Entity Type Detection Utility
 * 
 * This utility uses heuristic rules to determine whether an input is likely a person's name
 * or a conceptual word/term for more appropriate templating in interpretations.
 */

type EntityType = "name" | "word";

const knownNamesSet = new Set([
  "david", "maria", "inna", "elijah", "sarah", "isaac", "rachel", "moses", "abraham", "noah", "joshua",
  "levi", "daniel", "john", "paul", "ruth", "naomi", "miriam", "joseph", "rebecca", "solomon", "esther",
  "adam", "eve", "aaron", "jacob", "simon", "peter", "matthew", "mary", "simon", "deborah", "samuel",
  "elizabeth", "james", "thomas", "luke", "mark", "anna", "hannah", "michael", "gabriel", "raphael"
  // Common biblical and western names
]);

const themeWordsSet = new Set([
  "commandments", "faith", "truth", "love", "justice", "hope", "freedom", "power", "light", "peace", "wisdom",
  "creation", "knowledge", "strength", "joy", "blessing", "torah", "heaven", "earth", "water", "fire", "air",
  "spirit", "soul", "body", "mind", "heart", "good", "evil", "sin", "virtue", "mercy", "grace", "law", "covenant",
  "temple", "prophet", "priest", "king", "god", "lord", "messiah", "angel", "demon", "paradise", "hell", "jerusalem",
  "israel", "egypt", "babylon", "rome", "greece", "persia", "redemption", "salvation", "atonement"
  // Spiritual, religious, and philosophical terms
]);

/**
 * Detects whether the input is likely a name or a concept/word
 * @param input The user input to analyze
 * @returns "name" if the input is likely a person's name, "word" otherwise
 */
export function detectEntityType(input: string): EntityType {
  const clean = input.trim().toLowerCase();

  // Empty string fallback
  if (!clean) return "word";

  // Rule 1: Multi-word input (first last name pattern) → likely a name
  if (/^[a-z]+\s[a-z]+$/.test(clean)) {
    return "name";
  }

  // Rule 2: Known name (from name list)
  if (knownNamesSet.has(clean)) {
    return "name";
  }

  // Rule 3: Known abstract/spiritual/conceptual word
  if (themeWordsSet.has(clean)) {
    return "word";
  }

  // Rule 4: Short, neutral word (length 3–9) defaults to name
  if (clean.length >= 3 && clean.length <= 9) {
    return "name";
  }

  // Fallback
  return "word";
}

/**
 * Returns appropriate templated text based on entity type
 * @param input User input (name or word)
 * @param archetype Archetype description (e.g. "Powerhouse/Achiever")
 * @returns Properly formatted description text
 */
export function getEntityTemplatedText(input: string, archetype: string): string {
  const entityType = detectEntityType(input);
  
  if (entityType === "name") {
    return `This name reflects the ${archetype} archetype`;
  } else {
    return `The word "${input}" carries the energy of the ${archetype} archetype`;
  }
}

/**
 * Formats theme description based on entity type
 * @param input User input (name or word)
 * @param themeArchetype Archetype description
 * @param mostRepeatedNumber The most repeated reduced number
 * @param mostRepeatedCount How many times the number repeats
 * @returns Properly formatted theme description
 */
export function getEntityThemeDescription(
  input: string, 
  themeArchetype: string | null, 
  mostRepeatedNumber: string | null, 
  mostRepeatedCount: number | null
): string {
  const entityType = detectEntityType(input);
  
  if (!mostRepeatedNumber || !mostRepeatedCount || !themeArchetype) {
    return entityType === "name" 
      ? "This name reflects a Complex Soul"
      : `The word "${input}" reflects a Complex Energy`;
  }
  
  return entityType === "name"
    ? `This name reflects the ${themeArchetype} archetype`
    : `The word "${input}" carries the energy of the ${themeArchetype} archetype`;
} 