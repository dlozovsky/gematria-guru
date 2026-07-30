
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const objectives = [
  "Understand how Gematria has been adapted into the English alphabet",
  "Learn the structure and logic behind English Gematria and Pythagorean (Simple) Gematria",
  "Compare English systems with their Hebrew counterparts",
  "Calculate the numerical value of English names, words, and phrases using multiple systems",
  "Recognize patterns and interpret symbolic meaning in English-language results"
];

export const LearningObjectives = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">🎯 Learning Objectives</h2>
        <ul className="space-y-2">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
