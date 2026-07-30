
import { motion } from "framer-motion";
import { Lightbulb, Info } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HEBREW_MAP } from "@/utils/gematriaCalculators";

interface ExampleWithMeaning {
  word: string;
  value: number;
  method: string;
  meaning: string;
}

/** Sum a Hebrew word from the live map so an example cannot show a wrong total. */
const hebrewValue = (word: string) =>
  word.split("").reduce((sum, ch) => sum + (HEBREW_MAP[ch] ?? 0), 0);

const HEBREW_EXAMPLES: ExampleWithMeaning[] = [
  {
    word: "חי",
    value: hebrewValue("חי"),
    method: "Jewish Gematria",
    meaning:
      "Chai means life. Its value of 18 is why charitable gifts are customarily given in multiples of 18.",
  },
  {
    word: "שלום",
    value: hebrewValue("שלום"),
    method: "Jewish Gematria",
    meaning:
      "Shalom means peace. Shin(300) + Lamed(30) + Vav(6) + Final Mem(40) gives 376, which reduces to 7.",
  },
  {
    word: "אהבה",
    value: hebrewValue("אהבה"),
    method: "Jewish Gematria",
    meaning:
      "Ahavah means love and totals 13, the same value as echad (אחד), meaning one. Commentators read the pair together.",
  },
  {
    word: "אלהים",
    value: hebrewValue("אלהים"),
    method: "Jewish Gematria",
    meaning:
      "Elohim totals 86. Kabbalistic commentary notes that HaTeva (הטבע), meaning nature, carries the same value.",
  },
  {
    word: "אמת",
    value: hebrewValue("אמת"),
    method: "Jewish Gematria",
    meaning:
      "Emet means truth and totals 441, which is 21 squared. Its letters are the first, middle and last of the alphabet.",
  },
  {
    word: "תורה",
    value: hebrewValue("תורה"),
    method: "Jewish Gematria",
    meaning:
      "Torah totals 611. Tav(400) + Vav(6) + Resh(200) + He(5), summing the four letters of the word itself.",
  },
];

interface ExampleCardProps {
  /** When "hebrew", show Hebrew worked examples instead of the English set. */
  preset?: "english" | "hebrew";
}

const ExampleCard = ({ preset }: ExampleCardProps) => {
  const englishExamples: ExampleWithMeaning[] = [
    { 
      word: "LOVE", 
      value: 54, 
      method: "English Gematria",
      meaning: "The number 54 equals 6×9, connecting to harmony (6) and completion (9). In Jewish tradition, 54 is associated with refinement and self-improvement."
    },
    { 
      word: "WISDOM", 
      value: 83, 
      method: "English Gematria", 
      meaning: "83 is a prime number, representing the pure, indivisible nature of true wisdom. In some traditions, prime numbers are considered divine or spiritually significant."
    },
    { 
      word: "PEACE", 
      value: 49, 
      method: "English Gematria",
      meaning: "49 equals 7×7, representing spiritual perfection squared. The 7th day was the Sabbath (day of rest), so 49 can symbolize complete peace."
    },
    { 
      word: "GOD", 
      value: 26, 
      method: "English Gematria", 
      meaning: "26 is the value of the Tetragrammaton (YHVH) in Jewish Gematria, representing the sacred name of God. This shows the synchronicity between different languages."
    },
    { 
      word: "LIGHT", 
      value: 56, 
      method: "English Gematria", 
      meaning: "56 equals 7×8, combining spiritual perfection (7) with new beginnings (8). In Kabbalah, this can represent divine illumination breaking through to a new level."
    },
    { 
      word: "TRUTH", 
      value: 87, 
      method: "English Gematria", 
      meaning: "87 reduces to 15 (8+7), which further reduces to 6 (1+5). This connects truth to harmony and balance, suggesting that truth brings equilibrium."
    }
  ];

  const examples = preset === "hebrew" ? HEBREW_EXAMPLES : englishExamples;

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto my-4 p-4 glass-card rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
        <Lightbulb size={18} className="text-amber-500" />
        Examples with Interpretations
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {examples.slice(0, 3).map((example, index) => (
          <motion.div
            key={index}
            className="p-3 bg-white/40 rounded-lg shadow-sm border border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="font-medium">{example.word}</div>
            <div className="text-2xl font-bold text-primary">{example.value}</div>
            <div className="text-xs text-muted-foreground">{example.method}</div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="mt-2 text-xs gap-1">
                  <Info size={12} />
                  Meaning
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Gematria of "{example.word}" = {example.value}
                  </DialogTitle>
                  <DialogDescription>
                    {example.meaning}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {examples.slice(3, 6).map((example, index) => (
          <motion.div
            key={index + 3}
            className="p-3 bg-white/40 rounded-lg shadow-sm border border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="font-medium">{example.word}</div>
            <div className="text-2xl font-bold text-primary">{example.value}</div>
            <div className="text-xs text-muted-foreground">{example.method}</div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="mt-2 text-xs gap-1">
                  <Info size={12} />
                  Meaning
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Gematria of "{example.word}" = {example.value}
                  </DialogTitle>
                  <DialogDescription>
                    {example.meaning}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExampleCard;
