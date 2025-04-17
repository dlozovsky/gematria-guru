
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
          
          <h3 className="text-xl font-semibold mb-3">Historical Context</h3>
          <p className="mb-4">
            The practice of gematria developed in Jewish communities during the Second Temple period 
            (516 BCE to 70 CE). It was later adopted by other cultures and spiritual traditions, 
            including Christian Kabbalah and Islamic Abjad numerology.
          </p>

          <ScrollArea className="h-[200px] rounded-md border p-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Basic Example:</h4>
              <p>In Hebrew gematria:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>א (Aleph) = 1</li>
                <li>ב (Bet) = 2</li>
                <li>ג (Gimel) = 3</li>
                <li>And so on...</li>
              </ul>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Letter-Number Correspondence</h3>
              <p>Each letter in an alphabet corresponds to a specific number.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Word Values</h3>
              <p>Words are calculated by adding the values of their individual letters.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Spiritual Significance</h3>
              <p>Numbers are believed to reveal hidden meanings and connections in sacred texts.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default IntroModule;
