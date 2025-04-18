
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

const IntroModule = () => {
  return (
    <ModuleLayout
      title="Introduction to Gematria"
      description="Learn about the ancient practice of gematria and its significance in spiritual traditions."
    >
      {/* Learning Objectives */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
          <ul className="space-y-2">
            {[
              "Understand what Gematria is and where it comes from",
              "Recognize its historical roots and cultural importance",
              "Describe how letters are converted into numbers",
              "Differentiate between common Gematria systems",
              "Understand why people use Gematria and how it's applied today"
            ].map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* What is Gematria */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What Is Gematria?</h2>
          <p className="mb-4">
            Gematria is an ancient system of assigning numerical values to letters, words, or phrases. 
            At its core, Gematria reveals patterns and relationships between words that share the same 
            numerical value. It's often used to uncover hidden meanings, spiritual insights, or symbolic 
            connections in sacred texts—especially in Judaism.
          </p>
          <p>
            Think of it like a secret code hidden inside the words themselves—where every letter is also 
            a number, and every word is a kind of equation.
          </p>
        </CardContent>
      </Card>

      {/* Origins */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Origins of Gematria</h2>
          <p className="mb-4">
            The word "Gematria" likely comes from the Greek word "geōmetriā", meaning "geometry" or 
            "measurement." But its practical and spiritual usage developed primarily in Hebrew culture.
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Biblical Roots</h3>
          <p className="mb-4">
            Gematria has been used for centuries by Jewish scholars, especially Kabbalists, to interpret 
            the Torah, the Talmud, and other sacred texts. The idea is that nothing in these holy 
            writings is accidental—even the number value of a word may hold deep significance.
          </p>

          <h3 className="text-xl font-semibold mb-2">Beyond Judaism</h3>
          <p>
            Gematria-like systems also appear in Greek (Isopsephy), Arabic (Abjad), and even in 
            English esotericism, especially among mystics and numerologists.
          </p>
        </CardContent>
      </Card>

      {/* How Gematria Works */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">How Does Gematria Work?</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hebrew Letter</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>א</TableCell>
                  <TableCell>Aleph</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ב</TableCell>
                  <TableCell>Bet</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>י</TableCell>
                  <TableCell>Yod</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ק</TableCell>
                  <TableCell>Qof</TableCell>
                  <TableCell>100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Example: "שלום" (Shalom)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>ש = 300</li>
              <li>ל = 30</li>
              <li>ו = 6</li>
              <li>ם = 40 (Final Mem)</li>
            </ul>
            <p className="mt-2 font-semibold">Total Gematria = 376</p>
          </div>
        </CardContent>
      </Card>

      {/* Common Systems */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Common Gematria Systems</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mispar Hechrechi (Standard Hebrew Gematria)</h3>
              <p>The classic system. Each letter has a fixed value.</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mispar Gadol (Large Value Gematria)</h3>
              <p>Same as standard, but final letters get enhanced values (like ץ = 900).</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-2">Mispar Katan (Small Gematria)</h3>
              <p>Each letter's value is reduced to a single digit (1–9).</p>
              <ul className="list-disc pl-6 mt-2">
                <li>ש (300) becomes 3</li>
                <li>ל (30) becomes 3</li>
                <li>ו (6) stays 6</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Study */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Case Study: A Famous Example</h2>
          <div className="space-y-4">
            <p>
              The word "Mashiach" (משיח) — meaning Messiah — equals 358.
              So does the word "Nachash" (נחש) — serpent.
            </p>
            <p>
              In Kabbalistic thinking, this isn't a contradiction. It might imply that the 
              Messiah will come through the transformation of chaos or temptation into healing.
            </p>
            <p>
              This kind of thinking forms the backbone of mystical interpretation in Gematria.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn in Future Modules</h2>
          <ul className="space-y-2">
            {[
              "Module 2: The Hebrew Alphabet as Numbers",
              "Module 3: Exploring Hebrew Gematria Systems",
              "Module 4: English and Pythagorean Gematria",
              "Module 5: Using Gematria in Torah Interpretation",
              "Module 6: How to Calculate and Interpret Your Own Name",
              "Module 7: Symbolism, Synchronicity, and Number Mysticism"
            ].map((module, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default IntroModule;
