import * as React from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface GematriaTypeTooltipProps {
  type: string;
  children?: React.ReactNode;
}

const typeDefinitions: Record<string, string> = {
  // English systems
  "English Gematria": "English Gematria is a system where each letter is assigned a value that is a multiple of 6: A=6, B=12, ..., Z=156. Sometimes the term is also used for A=1, B=2, ..., Z=26, but most commonly the 6x system is meant. This method is used in some esoteric, occult, and New Age circles to analyze English words and phrases for hidden meanings, similar to Hebrew gematria. It is distinct from English Ordinal and Sumerian systems, though sometimes confused with them.",
  "English Ordinal": "A=1, B=2, ..., Z=26. The simplest English gematria system, often used for basic numerology.",
  "Pythagorean": "Also known as 'Simple' or 'Reduction' Gematria. Each letter is assigned a value from 1 to 9: A=1, B=2, ..., I=9, then J=1, K=2, ..., R=9, S=1, ..., Z=8. Double-digit sums are reduced to a single digit. This system is based on the teachings of Pythagoras and is the most common numerology method in the West. It emphasizes the vibrational essence of numbers and is used to analyze names, words, and phrases for spiritual or mystical significance.",
  "Pythagorean Gematria": "Also known as 'Simple' or 'Reduction' Gematria. Each letter is assigned a value from 1 to 9: A=1, B=2, ..., I=9, then J=1, K=2, ..., R=9, S=1, ..., Z=8. Double-digit sums are reduced to a single digit. This system is based on the teachings of Pythagoras and is the most common numerology method in the West. It emphasizes the vibrational essence of numbers and is used to analyze names, words, and phrases for spiritual or mystical significance.",
  "Sumerian": "Like English Ordinal, but each value is multiplied by 6. A=6, B=12, ..., Z=156.",
  "Reverse Ordinal": "Z=1, Y=2, ..., A=26. Letters are valued in reverse order, emphasizing hidden meanings.",
  "Reverse Pythagorean": "Z=1 to R=9, Q=1, ..., A=8, based on Pythagorean but reversed.",
  "Full Reduction": "A=1 to I=9, J=1, ..., Z=8. All double-digit values are reduced to a single digit.",
  "Reverse Full Reduction": "Z=1 to R=9, Q=1, ..., A=8. Like Full Reduction but in reverse letter order.",
  "Francis Bacon": "A=1, B=2, ..., Z=26, a=27, b=28, ..., z=52. Distinguishes uppercase and lowercase letters.",
  "Satanic": "A=36, B=37, ..., Z=61. Each letter's value is its position in the alphabet plus 35.",

  // Jewish/Hebrew systems
  "Hebrew Gematria": "Also known as Jewish Gematria, this system assigns numerical values to the Hebrew alphabet (Aleph=1, Bet=2, ..., Yod=10, Kaf=20, ..., Qof=100, Resh=200, ..., Tav=400). Words and phrases are analyzed by their total value, revealing connections and hidden meanings in the Torah and other Jewish texts. Used extensively in Kabbalah, Talmudic study, and Jewish mysticism to uncover spiritual insights and interpret scripture. Variants include Mispar Gadol (final letters have higher values) and Mispar Katan (reduces values to a single digit).",
  "Jewish Gematria": "Also known as Hebrew Gematria, this system assigns numerical values to the Hebrew alphabet (Aleph=1, Bet=2, ..., Tav=400). Used for mystical interpretation of Jewish texts and scripture. See Hebrew Gematria for details.",
  "Mispar Gadol": "Variant of Hebrew gematria where final forms of letters have higher values (e.g., ם=600, ן=700, ץ=900, etc.).",
  "Mispar Katan": "Hebrew gematria reducing all values to a single digit (e.g., 13→4).",
  "Atbash": "A simple substitution cipher for Hebrew, where the first letter is swapped with the last, the second with the second last, etc.",
  "Albam": "A monoalphabetic substitution cipher for Hebrew, shifting each letter by 11 places.",

  // Greek systems
  "Greek Isopsephy": "Greek system assigning values to Greek letters (α=1, β=2, ..., ω=800). Used in classical and biblical texts.",
  "Milesian": "Greek numerals using letters with values: α=1, β=2, ..., ι=10, κ=20, ..., ρ=100, ..., ω=800.",

  // Other
  "Simple Gematria": "Another name for English Ordinal, A=1, B=2, ..., Z=26.",
  "Ordinal": "A=1, B=2, ..., Z=26. Same as English Ordinal.",
  "Reduction": "Letters are reduced to a single digit (A=1, J=1, S=1, etc.), similar to Pythagorean.",
  "Chaldean": "Based on ancient Babylonian numerology. Letters are assigned values 1–8, not sequentially. Used in Chaldean numerology.",
  "Septenary": "A=1, B=2, ..., G=7, H=6, ..., Z=1. Cycles through 1–7 repeatedly.",
};

function getGematriaCategory(type: string): string | null {
  const english = [
    "English Gematria", "English Ordinal", "Pythagorean", "Pythagorean Gematria", "Sumerian", "Reverse Ordinal", "Reverse Pythagorean", "Full Reduction", "Reverse Full Reduction", "Francis Bacon", "Satanic", "Simple Gematria", "Ordinal", "Reduction", "Septenary"
  ];
  const hebrew = [
    "Hebrew Gematria", "Jewish Gematria", "Mispar Gadol", "Mispar Katan", "Atbash", "Albam"
  ];
  const greek = [
    "Greek Isopsephy", "Milesian"
  ];
  const chaldean = ["Chaldean"];
  if (english.includes(type)) return 'English System';
  if (hebrew.includes(type)) return 'Hebrew System';
  if (greek.includes(type)) return 'Greek System';
  if (chaldean.includes(type)) return 'Chaldean System';
  return null;
}

export const GematriaTypeTooltip: React.FC<GematriaTypeTooltipProps> = ({ type, children }) => {
  const definition = typeDefinitions[type] || "No definition available.";
  const category = getGematriaCategory(type);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children ? (
            children
          ) : (
            <Info className="inline align-text-bottom ml-1 text-muted-foreground cursor-help h-4 w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          avoidCollisions={false}
          className="min-w-[220px] w-full whitespace-normal break-words break-all p-5 pt-6 pb-5 shadow-lg rounded-lg flex flex-col justify-start border-2 border-red-500"
          style={{maxWidth: '600px', width: '100%', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal'}}
        >
          <div className="mb-2">
            <span className="font-semibold text-base block" style={{paddingTop: '2px'}}>{type}</span>
            {category && <span className="text-xs text-primary/80 font-medium">{category}</span>}
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal' }}>{definition}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GematriaTypeTooltip;
