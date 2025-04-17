
import { Card, CardContent } from "@/components/ui/card";
import ModuleLayout from "@/components/ModuleLayout";

const AdvancedModule = () => {
  return (
    <ModuleLayout
      title="Advanced Gematria Interpretation"
      description="Master the art of interpreting gematria values and understanding their deeper spiritual significance."
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Advanced Techniques</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
              <p className="mb-4">
                Advanced gematria involves identifying patterns between words and phrases that share 
                the same numerical value. This practice reveals hidden connections in sacred texts 
                and spiritual writings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Multiple Layer Analysis</h3>
              <p className="mb-4">
                Words and phrases can be analyzed using different calculation methods simultaneously 
                to reveal multiple layers of meaning and significance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contextual Interpretation</h3>
              <p>
                Understanding how numerical values relate to the broader context of spiritual 
                teachings and historical significance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Practical Applications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Textual Analysis</h3>
              <p>Methods for analyzing sacred texts and uncovering hidden meanings.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Insight</h3>
              <p>Using gematria for personal names and life events interpretation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Spiritual Practice</h3>
              <p>Incorporating gematria into meditation and spiritual development.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModuleLayout>
  );
};

export default AdvancedModule;
