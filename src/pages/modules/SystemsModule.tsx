
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
          <h2 className="text-2xl font-semibold mb-4">Common Calculation Methods</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Hechrachi (Absolute Value)</h3>
              <p className="mb-2">The most straightforward method, where each letter has a specific value:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aleph = 1</li>
                <li>Bet = 2</li>
                <li>Gimel = 3</li>
                <li>Dalet = 4</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Gadol (Large Number)</h3>
              <p>
                In this system, the value of each letter is equal to its value multiplied by the numerical order 
                of appearance in the word or phrase.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Mispar Katan (Small Number)</h3>
              <p>
                Reduces all numbers to a single digit by adding the digits together until a single digit is reached.
                For example: 18 becomes 1 + 8 = 9
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Cultural Variations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Hebrew Gematria</h3>
              <p>The original system using Hebrew letters and their corresponding values.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Greek Isopsephy</h3>
              <p>The Greek equivalent of gematria, using the Greek alphabet.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">English Gematria</h3>
              <p>Modern adaptations using the English alphabet and various numbering systems.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default SystemsModule;
