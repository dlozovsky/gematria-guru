
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, School, Layers } from "lucide-react";
import Footer from "../components/Footer";
import ModuleCard from "../components/ModuleCard";

const modules = [
  {
    title: "Introduction to Gematria",
    description: "Learn the basics of gematria and its historical significance",
    icon: BookOpen,
    level: "Beginner",
    duration: "15 mins",
    path: "/learning/intro"
  },
  {
    title: "The Hebrew Alphabet as Numbers",
    description: "Master the Hebrew alphabet and its numerical values",
    icon: School,
    level: "Beginner",
    duration: "20 mins",
    path: "/learning/hebrew-alphabet"
  },
  {
    title: "Hebrew Gematria Systems",
    description: "Explore the different systems of Hebrew gematria calculation",
    icon: Layers,
    level: "Intermediate",
    duration: "25 mins",
    path: "/learning/systems"
  },
  {
    title: "Advanced Interpretations",
    description: "Master the art of interpreting gematria values",
    icon: GraduationCap,
    level: "Advanced",
    duration: "25 mins",
    path: "/learning/advanced"
  }
];

const LearningModules = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Learning Modules</CardTitle>
              <CardDescription>
                Master the ancient art of gematria through interactive lessons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Choose a module below to begin your journey into understanding numerical patterns
                and their spiritual significance. Each module includes interactive exercises and
                practical examples.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 mt-8">
            {modules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default LearningModules;
