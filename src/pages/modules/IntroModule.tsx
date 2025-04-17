
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";
import { ScrollArea } from "@/components/ui/scroll-area";

const IntroModule = () => {
  return (
    <ModuleLayout
      title="Introduction to Gematria"
      description="Learn about the ancient practice of gematria and its significance in spiritual traditions."
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">What is Gematria?</h2>
          <p className="mb-4">
            Gematria is an alphanumeric code of assigning a numerical value to a name, word or phrase. 
            It originated as a system of Jewish tradition that assigns numerical value to a word or phrase 
            in the belief that words or phrases with identical numerical values bear some relation to each other.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Historical Origins</h3>
          <p className="mb-4">
            The practice of gematria has its roots in ancient Mesopotamia and was later adopted and 
            developed in Jewish mystical traditions. The earliest documented use dates back to the 
            Babylonian period (around 6th century BCE), with significant development during the 
            Second Temple period (516 BCE to 70 CE).
          </p>

          <ScrollArea className="h-[200px] rounded-md border p-4">
            <div className="space-y-4">
              <h4 className="font-semibold">First Steps in Gematria:</h4>
              <p>In Hebrew gematria, each letter corresponds to a specific value:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>א (Aleph) = 1</li>
                <li>ב (Bet) = 2</li>
                <li>ג (Gimel) = 3</li>
                <li>ד (Dalet) = 4</li>
                <li>ה (He) = 5</li>
                <li>And so on...</li>
              </ul>
              <p className="mt-4">To calculate a word's value, simply add the values of each letter:</p>
              <p className="font-semibold">Example: "אב" (Av, meaning "father")</p>
              <p>א (Aleph) = 1, ב (Bet) = 2</p>
              <p>Total value: 1 + 2 = 3</p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Foundational Concepts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Letter-Number Correspondence</h3>
              <p>Each letter in an alphabet corresponds to a specific number, creating a bridge between language and mathematics.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Word Values</h3>
              <p>The numerical value of a word is calculated by adding the values of its individual letters, revealing hidden connections between seemingly unrelated words.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Spiritual Significance</h3>
              <p>In mystical traditions, these numerical values are believed to reveal divine messages and deeper layers of meaning within sacred texts.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Beginner Practice</h3>
              <p>Start by calculating your name's value in a simple gematria system and reflect on its potential significance in your life journey.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default IntroModule;
