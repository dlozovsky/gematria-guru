
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";

const SystemsModule = () => {
  return (
    <ModuleLayout
      title="Number Systems in Gematria"
      description="Explore different methods of calculating gematria values across various traditions."
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Hebrew Calculation Methods</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Hechrachi (Absolute Value)</h3>
              <p className="mb-2">The standard method in Hebrew gematria, where each letter has a specific assigned value:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aleph (א) = 1</li>
                <li>Bet (ב) = 2</li>
                <li>Gimel (ג) = 3</li>
                <li>...and so on to Tav (ת) = 400</li>
              </ul>
              <p className="mt-2">Example: "אמת" (Emet, meaning "truth") = 1 + 40 + 400 = 441</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Gadol (Filling)</h3>
              <p className="mb-2">
                In this method, each letter is spelled out in full and then calculated:
              </p>
              <p>Example: Aleph (א) spelled out is אלף (Aleph-Lamed-Peh) = 1 + 30 + 80 = 111</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Katan (Small Number)</h3>
              <p className="mb-2">
                Reduces all numbers to a single digit by removing zeros and/or adding digits together:
              </p>
              <p>Example: Tav (ת) = 400 → 4+0+0 = 4</p>
              <p>"אמת" (Emet) = 1 + 4 + 4 = 9</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Global Gematria Systems</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Greek Isopsephy</h3>
              <p className="mb-2">The Greek equivalent of gematria, where letters have numerical values:</p>
              <p>Alpha (α) = 1, Beta (β) = 2, etc.</p>
              <p>Example: "Ἰησοῦς" (Jesus) = 10 + 8 + 200 + 70 + 400 + 200 = 888</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Arabic Abjad Numerals</h3>
              <p className="mb-2">A system used in Arabic for chronograms and mystical interpretations:</p>
              <p>Each letter has a specific value based on the ancient order of the alphabet.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">English Gematria Systems</h3>
              <p className="mb-2">Modern adaptations using the English alphabet:</p>
              <ul className="list-disc pl-6">
                <li>Simple (A=1, B=2, C=3, etc.)</li>
                <li>Ordinal (A=1, B=2... Z=26)</li>
                <li>Reduction (A=1, B=2... I=9, J=1, K=2...)</li>
                <li>Pythagorean (reduced to 1-9, with I=1, R=9, S=1, etc.)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default SystemsModule;
