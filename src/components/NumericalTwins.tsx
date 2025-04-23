
import { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { findNumericalTwins, type NumericalTwin } from "@/utils/numberMapUtils";
import { checkSignificance } from "@/utils/significantNumbers";

interface NumericalTwinsProps {
  inputText: string;
}

const NumericalTwins = ({ inputText }: NumericalTwinsProps) => {
  const twins = useMemo(() => {
    if (!inputText.trim()) return [];
    return findNumericalTwins(inputText);
  }, [inputText]);

  if (!inputText.trim()) {
    return (
      <div className="text-center text-muted-foreground p-6">
        <p>Enter text above to find number matches</p>
      </div>
    );
  }

  if (twins.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="pt-6 text-center text-muted-foreground">
          <p>No number matches found for this text</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">
          Found {twins.length} Number Match{twins.length !== 1 ? "es" : ""}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {twins.map((twin) => {
          const significance = checkSignificance(twin.value);
          return (
            <motion.div
              key={twin.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={significance ? "border-primary/40 bg-primary/5" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold">{twin.value}</CardTitle>
                    <Badge className="bg-primary/20 text-primary border border-primary/30">
                      {twin.count} methods
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {twin.methods.map((method) => (
                      <Badge key={method} variant="outline" className="bg-background">
                        {method}
                      </Badge>
                    ))}
                  </div>
                  
                  {significance && (
                    <div className="flex items-start gap-2 mt-2 p-2 rounded-md bg-primary/10">
                      <Award className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-medium">{significance.tradition}:</span>{" "}
                        {significance.description}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NumericalTwins;
