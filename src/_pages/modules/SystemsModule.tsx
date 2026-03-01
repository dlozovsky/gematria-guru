
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";
import ModuleLayout from "@/components/ModuleLayout";

const SystemsModule = () => {
  const learningObjectives = [
    "Identify and differentiate between the most commonly used Hebrew Gematria systems",
    "Understand how each system calculates values",
    "Apply each method to real Hebrew words",
    "Appreciate why multiple systems exist and what they reveal spiritually or symbolically"
  ];

  const finalLetterValues = [
    { letter: "ך", value: "500" },
    { letter: "ם", value: "600" },
    { letter: "ן", value: "700" },
    { letter: "ף", value: "800" },
    { letter: "ץ", value: "900" }
  ];

  const emetExample = [
    { letter: "א", standard: "1", gadol: "1", katan: "1", siduri: "1" },
    { letter: "מ", standard: "40", gadol: "40", katan: "4", siduri: "13" },
    { letter: "ת", standard: "400", gadol: "400", katan: "4", siduri: "22" }
  ];

  const useCases = [
    { use: "Torah Commentary", system: "Mispar Hechrechi" },
    { use: "Kabbalistic Interpretation", system: "Mispar Gadol, Shemi" },
    { use: "Personal Name Analysis", system: "Mispar Katan, Siduri" },
    { use: "Pattern Recognition", system: "Katan" },
    { use: "Mystical Symbolism", system: "Gadol, Atbash" }
  ];

  return (
    <ModuleLayout
      title="Exploring Hebrew Gematria Systems"
      description="One word, many numbers. One number, many meanings."
    >
      {/* Learning Objectives */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🎯 Learning Objectives</h2>
          <ul className="space-y-2">
            {learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Why Multiple Systems */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🧮 Why Multiple Gematria Systems?</h2>
          <p className="mb-4">
            You might be wondering: If one letter = one number, why so many systems?
          </p>
          <p className="mb-4">
            The answer: each system reveals a different layer of insight.
          </p>
          <p>
            Think of it like shining a light on a sculpture from different angles. The shape is the same—but 
            the shadows change, and so do the details you notice.
          </p>
        </CardContent>
      </Card>

      {/* Primary Systems */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">📊 The Four Primary Hebrew Systems</h2>
          
          {/* Mispar Hechrechi */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1️⃣ Mispar Hechrechi (Standard Value)</h3>
            <p className="mb-2">Each Hebrew letter is assigned a fixed numerical value. Final letters are treated the same as their standard form.</p>
            <div className="bg-muted p-4 rounded-lg mb-2">
              <p className="font-semibold">Example – שלום (Shalom)</p>
              <p>ש = 300, ל = 30, ו = 6, ם = 40 → Total: 376</p>
            </div>
            <p className="text-muted-foreground">Usage: Most commonly used in Kabbalah, Torah study, and traditional commentary.</p>
          </div>

          {/* Mispar Gadol */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">2️⃣ Mispar Gadol (Large Value)</h3>
            <p className="mb-4">Same as Mispar Hechrechi, but final letters receive special, higher values:</p>
            
            <Table className="mb-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Final Letter</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {finalLetterValues.map(({ letter, value }) => (
                  <TableRow key={letter}>
                    <TableCell className="font-bold">{letter}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="bg-muted p-4 rounded-lg mb-2">
              <p className="font-semibold">Example – שלום (Shalom) with ם as 600:</p>
              <p>ש = 300, ל = 30, ו = 6, ם = 600 → Total: 936</p>
            </div>
          </div>

          {/* Mispar Katan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">3️⃣ Mispar Katan (Small Value)</h3>
            <p className="mb-2">Each letter's value is reduced to a single digit using digit cycles (1–9).</p>
            <div className="bg-muted p-4 rounded-lg mb-2">
              <p className="font-semibold">Example – שלום (Shalom)</p>
              <p>ש = 3, ל = 3, ו = 6, ם = 4 → Total: 16</p>
            </div>
            <p className="text-muted-foreground">Usage: Popular in numerology and name analysis.</p>
          </div>

          {/* Mispar Siduri */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-3">4️⃣ Mispar Siduri (Ordinal Value)</h3>
            <p className="mb-2">Each letter receives a value based on its position in the alphabet (1 to 22).</p>
            <div className="bg-muted p-4 rounded-lg mb-2">
              <p className="font-semibold">Example – שלום (Shalom)</p>
              <p>ש (21), ל (12), ו (6), ם (13) → Total: 52</p>
            </div>
            <p className="text-muted-foreground">Usage: Symbolizes sequence and is often used in ordinal or alphabetical rituals.</p>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Systems */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🧠 Bonus Systems (Optional)</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Mispar Shemi (Spelled-Out Value)</h3>
            <p className="mb-4">
              Each letter is spelled out and the value is calculated from its full spelling.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p>Example – מ (Mem) is spelled מ-ם, so total = 40 + 600 = 640 (in Gadol system)</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Atbash and Albam (Substitution Ciphers)</h3>
            <p>
              Letters are substituted using fixed rules, such as reversing the alphabet (Atbash), 
              and then values are calculated. These are used in highly esoteric texts, especially 
              by Kabbalists exploring coded meanings.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🧪 Compare Systems Side-by-Side</h2>
          <p className="mb-4">Let's take the word אמת ("Emet" – Truth).</p>
          
          <Table className="mb-4">
            <TableHeader>
              <TableRow>
                <TableHead>Letter</TableHead>
                <TableHead>Standard</TableHead>
                <TableHead>Gadol</TableHead>
                <TableHead>Katan</TableHead>
                <TableHead>Siduri</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emetExample.map((row) => (
                <TableRow key={row.letter}>
                  <TableCell className="font-bold">{row.letter}</TableCell>
                  <TableCell>{row.standard}</TableCell>
                  <TableCell>{row.gadol}</TableCell>
                  <TableCell>{row.katan}</TableCell>
                  <TableCell>{row.siduri}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold">Total</TableCell>
                <TableCell>441</TableCell>
                <TableCell>441</TableCell>
                <TableCell>9</TableCell>
                <TableCell>36</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="space-y-2">
            <p>441 (Standard) is famous because:</p>
            <ul className="list-disc pl-6">
              <li>441 = 21², and 21 is the value of the Divine Name "Ehyeh" (אהיה)</li>
              <li>441 = אמת, truth</li>
              <li>Katan value of 9 = wholeness, finality</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">🔍 Spiritual vs. Practical Use</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Use Case</TableHead>
                <TableHead>Recommended System</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {useCases.map((useCase, index) => (
                <TableRow key={index}>
                  <TableCell>{useCase.use}</TableCell>
                  <TableCell>{useCase.system}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Practice Exercise */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">📝 Try It Yourself</h2>
          <p className="mb-4">Calculate the Gematria of ברוך (Baruch – Blessed) using:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mispar Hechrechi</li>
            <li>Mispar Katan</li>
            <li>Mispar Siduri</li>
          </ul>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-semibold">Need a reminder?</p>
            <p>ב = 2, ר = 200, ו = 6, ך = 20 (or 500 in Gadol)</p>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default SystemsModule;
