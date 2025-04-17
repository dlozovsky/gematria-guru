
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";
import { Separator } from "@/components/ui/separator";

const AdvancedModule = () => {
  return (
    <ModuleLayout
      title="Advanced Gematria Interpretation"
      description="Master the art of interpreting gematria values and understanding their deeper spiritual significance."
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Interpretative Techniques</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Thematics</h3>
              <p className="mb-4">
                Identifying thematic patterns between words and phrases with identical or related numerical values. 
                This technique reveals conceptual connections that might otherwise remain hidden.
              </p>
              <p className="italic text-sm mb-4">
                Example: In Hebrew, both "love" (אהבה = 13) and "unity" (אחד = 13) share the same numerical value, 
                suggesting a profound connection between love and oneness in Kabbalistic thought.
              </p>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="text-xl font-semibold mb-3">Multiple Layer Analysis</h3>
              <p className="mb-4">
                Analyzing a word or phrase using multiple calculation methods simultaneously to reveal 
                different layers of meaning and significance.
              </p>
              <div className="bg-muted p-3 rounded-md">
                <p className="font-semibold">Example Analysis of "חכמה" (Wisdom):</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Standard value: 73 (symbolic of Divine Wisdom)</li>
                  <li>Ordinal value: 37 (the mirror of 73, suggesting reflection)</li>
                  <li>Reduced value: 10 (representing completion and perfection)</li>
                </ul>
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="text-xl font-semibold mb-3">Atbash Cipher</h3>
              <p className="mb-3">
                A substitution method where the first letter of the alphabet is replaced with the last, 
                the second with the second-to-last, and so on. This creates a mirror transformation that 
                reveals hidden connections.
              </p>
              <p>
                In Hebrew: Aleph ↔ Tav, Bet ↔ Shin, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Practical Applications</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Sacred Text Analysis</h3>
              <p className="mb-3">Advanced methods for analyzing religious and mystical texts:</p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Notarikon: Interpreting each letter of a word as the first letter of another word</li>
                <li className="mb-2">Temurah: Systematic letter substitution to reveal hidden meanings</li>
                <li>ELS (Equidistant Letter Sequence): Finding patterns by skipping letters at regular intervals</li>
              </ul>
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Meditative Practices</h3>
              <p className="mb-3">Using gematria for spiritual development:</p>
              <ol className="list-decimal pl-6">
                <li className="mb-2">Select a sacred word or phrase with personal significance</li>
                <li className="mb-2">Calculate its numerical value using various methods</li>
                <li className="mb-2">Contemplate other words or phrases with the same value</li>
                <li className="mb-2">Meditate on the connections between these concepts</li>
                <li>Journal insights that arise during this practice</li>
              </ol>
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Creative Exploration</h3>
              <p>
                Apply gematria principles to personal names, birthdays, or significant life events to 
                uncover patterns and potential guidance for your spiritual journey.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default AdvancedModule;
