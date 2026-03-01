
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const HebrewAlphabetModule = () => {
  const standardLetters = [
    { letter: "א", name: "Aleph", value: "1", mnemonic: "A for 'Alone'" },
    { letter: "ב", name: "Bet", value: "2", mnemonic: "B for 'Both'" },
    { letter: "ג", name: "Gimel", value: "3", mnemonic: "G for 'Group'" },
    { letter: "ד", name: "Dalet", value: "4", mnemonic: "D for 'Door' (four corners)" },
    { letter: "ה", name: "Hey", value: "5", mnemonic: "Think of a star (five points)" },
    { letter: "ו", name: "Vav", value: "6", mnemonic: "Shape resembles a hook" },
    { letter: "ז", name: "Zayin", value: "7", mnemonic: "Looks like a sword (7 = battle day)" },
    { letter: "ח", name: "Chet", value: "8", mnemonic: "Think of 'Ch' like in 'Chanukah'" },
    { letter: "ט", name: "Tet", value: "9", mnemonic: "Like a snake (symbol of hidden good)" },
    { letter: "י", name: "Yod", value: "10", mnemonic: "Tiny but powerful (smallest letter)" },
    { letter: "כ", name: "Kaf", value: "20" },
    { letter: "ל", name: "Lamed", value: "30" },
    { letter: "מ", name: "Mem", value: "40" },
    { letter: "נ", name: "Nun", value: "50" },
    { letter: "ס", name: "Samekh", value: "60" },
    { letter: "ע", name: "Ayin", value: "70" },
    { letter: "פ", name: "Peh", value: "80" },
    { letter: "צ", name: "Tsade", value: "90" },
    { letter: "ק", name: "Qof", value: "100" },
    { letter: "ר", name: "Resh", value: "200" },
    { letter: "ש", name: "Shin", value: "300" },
    { letter: "ת", name: "Tav", value: "400" }
  ];

  const finalForms = [
    { letter: "ך", name: "Final Kaf", regularValue: "20", finalValue: "500" },
    { letter: "ם", name: "Final Mem", regularValue: "40", finalValue: "600" },
    { letter: "ן", name: "Final Nun", regularValue: "50", finalValue: "700" },
    { letter: "ף", name: "Final Peh", regularValue: "80", finalValue: "800" },
    { letter: "ץ", name: "Final Tsade", regularValue: "90", finalValue: "900" }
  ];

  const commonWords = [
    { word: "אחד", meaning: "One (Unity)", calculation: "1 + 8 + 4", total: "13" },
    { word: "אהבה", meaning: "Love", calculation: "1 + 5 + 2 + 5", total: "13" },
    { word: "שלום", meaning: "Peace", calculation: "300 + 30 + 6 + 40", total: "376" },
    { word: "חיים", meaning: "Life", calculation: "8 + 10 + 10 + 40", total: "68" }
  ];

  return (
    <ModuleLayout
      title="The Hebrew Alphabet as Numbers"
      description="'Every letter is a number. Every number is a story.'"
    >
      {/* Learning Objectives */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🎯 Learning Objectives</h2>
          <ul className="space-y-2">
            {[
              "Identify all 22 letters of the Hebrew alphabet and their numeric values",
              "Understand the structure of the alphabet in terms of ones, tens, and hundreds",
              "Recognize the 5 final forms (sofit letters) and their role in advanced Gematria",
              "Appreciate how Hebrew letters convey both quantity (number) and quality (symbolic meaning)"
            ].map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🔤 The Hebrew Alphabet: 22 Letters, Infinite Insight</h2>
          <p className="mb-4">
            Unlike English, which uses separate symbols for numbers and letters, Hebrew uses its alphabet for both.
            Each Hebrew letter has a name, sound, numerical value, and often, a symbolic meaning. This turns even
            simple Hebrew words into layers of interconnected ideas.
          </p>
        </CardContent>
      </Card>

      {/* Standard Values Table */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🔢 Standard Values (Mispar Hechrechi)</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Letter</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Mnemonic</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standardLetters.map((letter) => (
                  <TableRow key={letter.letter}>
                    <TableCell className="font-bold text-lg">{letter.letter}</TableCell>
                    <TableCell>{letter.name}</TableCell>
                    <TableCell>{letter.value}</TableCell>
                    <TableCell>{letter.mnemonic || "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Final Forms */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🔚 Final Letters (Sofit Forms)</h2>
          <p className="mb-4">
            Five Hebrew letters change form when they appear at the end of a word, and in some systems
            (like Mispar Gadol), they take on larger numerical values.
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Final Letter</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Regular Value</TableHead>
                  <TableHead>Final Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {finalForms.map((letter) => (
                  <TableRow key={letter.letter}>
                    <TableCell className="font-bold text-lg">{letter.letter}</TableCell>
                    <TableCell>{letter.name}</TableCell>
                    <TableCell>{letter.regularValue}</TableCell>
                    <TableCell>{letter.finalValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Common Words */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🔠 Common Hebrew Words and Their Gematria</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Word</TableHead>
                  <TableHead>Meaning</TableHead>
                  <TableHead>Calculation</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {commonWords.map((word) => (
                  <TableRow key={word.word}>
                    <TableCell className="font-bold text-lg">{word.word}</TableCell>
                    <TableCell>{word.meaning}</TableCell>
                    <TableCell>{word.calculation}</TableCell>
                    <TableCell>{word.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-muted-foreground">
            Note: 13 is the value for both "one" and "love", often used to teach that unity and love are inseparable.
          </p>
        </CardContent>
      </Card>

      {/* Practice Activity */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">✍️ Practice Activity</h2>
          <p className="mb-4">Try calculating the Gematria of these Hebrew words:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>תורה (Torah)</li>
            <li>שמים (Shamayim – "Heavens")</li>
            <li>ברוך (Baruch – "Blessed")</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Use the tables above to calculate the totals. Answers will be provided in the next module.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default HebrewAlphabetModule;
