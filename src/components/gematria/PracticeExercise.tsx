
import { Card, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";

export const PracticeExercise = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          <Pencil className="inline-block w-6 h-6 mr-2" />
          Practice Exercise
        </h2>
        <p className="mb-4">Calculate the Gematria of the word "FREEDOM" using:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Ordinal</li>
          <li>Pythagorean</li>
          <li>Sumerian</li>
        </ul>
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-semibold">Bonus Challenge:</p>
          <p>Try calculating your own first name using all three systems!</p>
        </div>
      </CardContent>
    </Card>
  );
};
