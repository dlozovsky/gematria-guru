
import ModuleLayout from "@/components/ModuleLayout";
import { EnglishGematriaTable } from "@/components/gematria/EnglishGematriaTable";
import { LearningObjectives } from "@/components/gematria/LearningObjectives";
import { GematriaSystemsOverview } from "@/components/gematria/GematriaSystemsOverview";
import { MultiSystemExample } from "@/components/gematria/MultiSystemExample";
import { PracticeExercise } from "@/components/gematria/PracticeExercise";

const AdvancedModule = () => {
  return (
    <ModuleLayout
      title="English and Pythagorean Gematria"
      description="The code of numbers lives not only in Hebrew, but in every alphabet that speaks to the soul."
    >
      <LearningObjectives />
      <GematriaSystemsOverview />
      <MultiSystemExample />
      <EnglishGematriaTable />
      <PracticeExercise />
    </ModuleLayout>
  );
};

export default AdvancedModule;
