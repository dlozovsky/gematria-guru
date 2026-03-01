import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, School, Layers } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModuleCard from "../components/ModuleCard";
import { Button } from "@/components/ui/button";
import ExplorerInline from "../components/ExplorerInline";

const modules = [
  {
    title: "Introduction to Gematria",
    description: "Learn the basics of gematria and its historical significance.",
    icon: BookOpen,
    level: "Beginner",
    duration: "10–15 min",
    path: "/learning/intro",
    quote: {
      text: "Every number tells a story. Gematria is the key to unlocking it.",
      source: ""
    },
    objectives: [
      "Understand what Gematria is and why it matters.",
      "Recognize the historical and spiritual roots of Gematria.",
      "Identify the basic concept of assigning numbers to letters."
    ],
    highlights: [
      "Definition and origins of Gematria.",
      "How numbers and letters are connected in Jewish tradition.",
      "Famous examples of Gematria in history and texts."
    ]
  },
  {
    title: "The Hebrew Alphabet as Numbers",
    description: "Master the Hebrew alphabet and its numerical values.",
    icon: School,
    level: "Beginner",
    duration: "12–18 min",
    path: "/learning/hebrew-alphabet",
    quote: {
      text: "The Hebrew alphabet is a bridge between language and number.",
      source: ""
    },
    objectives: [
      "Memorize the Hebrew letters and their numerical values.",
      "Learn the difference between standard and final forms.",
      "Practice calculating values for simple words."
    ],
    highlights: [
      "Aleph to Tav: The 22 letters and their values.",
      "Final forms and their special numbers.",
      "Hands-on: Calculate the value of your first Hebrew word!"
    ]
  },
  {
    title: "Hebrew Gematria Systems",
    description: "Explore the different systems of Hebrew gematria calculation.",
    icon: Layers,
    level: "Intermediate",
    duration: "15–20 min",
    path: "/learning/systems",
    quote: {
      text: "Not all numbers are created equal—discover the systems behind the sums.",
      source: ""
    },
    objectives: [
      "Compare the main systems: Mispar Hechrechi, Mispar Gadol, and Mispar Katan.",
      "Understand how different systems change the meaning of a word.",
      "Apply at least two systems to a sample word."
    ],
    highlights: [
      "Overview of the most-used Hebrew Gematria systems.",
      "How to calculate values in each system.",
      "Try it: See how one word can have multiple values!"
    ]
  },
  {
    title: "Advanced Interpretations",
    description: "Master the art of interpreting gematria values and uncovering their deeper symbolic meanings across different systems.",
    icon: GraduationCap,
    level: "Advanced",
    duration: "25 mins",
    path: "/learning/advanced",
    objectives: [
      "Develop skills to interpret gematria values beyond basic numerical equivalence.",
      "Learn to synthesize meanings from multiple gematria systems.",
      "Understand how to explore numerical patterns and their symbolic significance.",
      "Apply critical thinking to distinguish meaningful connections from coincidences."
    ],
    highlights: [
      "Advanced Meaning Extraction: Techniques for deriving insights from gematria calculations.",
      "Cross-System Analysis: Finding patterns across different calculation methods.",
      "Symbolic Interpretation Methods: Tools for connecting numbers to spiritual concepts.",
      "Critical Discernment: Guidelines for separating meaningful connections from random ones.",
      "Practical Examples: Walk through complex interpretation cases step by step."
    ],
    quote: {
      text: "When you understand the language of numbers, the universe reveals its hidden wisdom.",
      source: ""
    }
  },
  {
    title: "Gematria in the Torah – Interpreting Sacred Text Through Numbers",
    description: "Discover how Jewish sages and mystics used Gematria to reveal hidden meanings in the Torah. Analyze verses, words, and letters to unlock spiritual and legal insights.",
    icon: BookOpen, // You may want a Torah scroll icon here if available
    level: "Advanced",
    duration: "30 mins",
    path: "/learning/torah-gematria",
    objectives: [
      "Understand how Gematria is applied to analyze verses, words, and letters in the Torah.",
      "Recognize classical examples of Gematria-based Torah commentary.",
      "Appreciate how Jewish sages used Gematria to support legal rulings, mystical teachings, and spiritual messages.",
      "Apply basic Gematria analysis to select Hebrew verses."
    ],
    highlights: [
      "The Torah and the Hidden World of Numbers",
      "Classical Examples: בראשית (913), אדם (45), נחש & משיח (358), Torah skip codes",
      "Types of Gematria Interpretation: literal equivalence, allusion, spelled-out values, symbolic totals, mystical geometry",
      "Famous Totals: 18 (Life), 26 (YHWH), 40 (Transition), 70 (Nations), 613 (Commandments)",
      "Try It Yourself: Analyze אחד (Echad = 13) and אהבה (Ahavah = 13)",
      "How sages use Gematria in law and commentary (Rabbi Akiva, Vilna Gaon, Zohar)"
    ],
    quote: {
      text: "In the Torah, there are no coincidences—only concealed meanings waiting to be revealed.",
      source: ""
    }
  },
  {
    title: "Calculating and Interpreting Your Own Name in Gematria",
    description: "Learn how to transliterate your name, calculate its value in Hebrew and English systems, and reflect on its symbolic meaning.",
    icon: BookOpen, // You may want a user/person icon here if available
    level: "Advanced",
    duration: "25 mins",
    path: "/learning/name-gematria",
    objectives: [
      "Transliterate your name into Hebrew letters (or use English systems).",
      "Calculate your name's value using Standard, Katan, and other systems.",
      "Compare that value with other meaningful words or concepts.",
      "Explore potential insights and symbolic interpretations.",
      "Use name-based Gematria for spiritual reflection and personal growth."
    ],
    highlights: [
      "Why Your Name Matters in Gematria: spiritual DNA, soul connection, and life themes.",
      "Step-by-step: Transliterate, assign values, and calculate totals in Hebrew and English systems.",
      "Compare your name's value to famous words, concepts, or other names.",
      "Interpret your number: Look for symbolic meaning, parallels, and personal insights.",
      "Practice: Analyze your own name and reflect on what you discover."
    ],
    quote: {
      text: "Your name holds your energy. Gematria helps you see it clearly.",
      source: ""
    }
  },
  {
    title: "Symbolism, Synchronicity, and Number Mysticism",
    description: "Explore the symbolic power of numbers, synchronicity, and recurring number patterns in Jewish and mystical traditions.",
    icon: BookOpen, // You may want a mysticism or sparkles icon here if available
    level: "Advanced",
    duration: "25 mins",
    path: "/learning/number-mysticism",
    objectives: [
      "Understand the concept of number symbolism in Jewish and mystical traditions.",
      "Recognize and interpret recurring or 'sacred' numbers.",
      "Explore how synchronicity and number sequences may carry personal meaning.",
      "Combine intuition with Gematria values to reflect on life's patterns and inner questions."
    ],
    highlights: [
      "Numbers as Symbols: Learn how numbers like 111, 144, 777, and 613 are viewed as carriers of spiritual meaning.",
      "What is Synchronicity? Discover Jung's concept and how it relates to number patterns in daily life.",
      "Symbolic Power of Key Numbers: Explore the meaning of 1, 7, 18, 26, 33, 40, 72, 111, 144, 358, 613, 777, 888, 1000, and more.",
      "Repeating Numbers and Personal Meaning: Reflect on what it means to see recurring numbers and how to research their spiritual significance.",
      "Case Studies: Real-life examples of synchronicity and number symbolism.",
      "Gematria as a Meditative Tool: Step-by-step guide for using Gematria for spiritual reflection.",
      "Personal Exercise: Start a number synchronicity journal and track your own patterns."
    ],
    quote: {
      text: "Numbers are the language of the universe. Synchronicity is how it speaks to you.",
      source: ""
    }
  },
  {
    title: "Pulling It All Together – Practical Applications of Gematria in Daily Life",
    description: "Put your Gematria knowledge into action with interactive tools for name analysis, decision-making, synchronicity tracking, compatibility, and daily insights.",
    icon: BookOpen, // You may want a checkmark or tools icon here if available
    level: "Practical",
    duration: "30 mins",
    path: "/learning/practical-applications",
    objectives: [
      "Understand real-life applications of Gematria for decision-making, name analysis, spiritual alignment, and personal growth.",
      "Learn how to use Gematria tools within your SaaS product.",
      "Get guided through interactive in-app features that replace the need for downloads or PDFs.",
      "Explore creative ways to integrate Gematria into daily living—professionally and spiritually."
    ],
    highlights: [
      "Name Explorer Tool: Calculate and interpret your name's value, see matching words, and save results to your profile.",
      "Decision Clarity Tool: Compare options numerically and symbolically for business naming, dates, and more.",
      "Synchronicity Tracker: Log meaningful number appearances and get weekly summaries of your patterns.",
      "Name Compatibility Checker: Explore resonance between two names and discover shared values.",
      "Daily Gematria Message: Receive number-based insights or reflections in-app or via notification.",
      "Optional Guided Flow: Step-by-step in-app walkthrough to help you use all the tools in real life."
    ],
    quote: {
      text: "You've learned the code. Now it's time to apply it.",
      source: ""
    }
  }
];

import { useState } from "react";
import { GematriaSystemCard } from "../components/GematriaSystemCard";
import { UnifiedSummary } from "../components/UnifiedSummary";
import { calculateGematriaValue, reduceValue, getFactors, getSymbolicMatches, generateShortSummary, generateInterpretation } from "../utils/gematriaUtils";
import type { GematriaSystemResult } from "../types/GematriaSystemResult";

const LearningModules = () => {
  const [showExplorer, setShowExplorer] = useState(false);
  // Gematria Explorer State
  const [input, setInput] = useState("");
  const [showSummary, setShowSummary] = useState(true);

  // Compute results for Simple Gematria
  const value = calculateGematriaValue(input, "Simple Gematria");
  const reducedValue = value ? reduceValue(value) : undefined;
  const factors = value ? getFactors(value) : [];
  const significantMatches = value ? getSymbolicMatches(value, factors) : [];


  const simpleResult: GematriaSystemResult = {
    systemName: "Simple Gematria",
    value,
    reducedValue,
    factors,
    significantMatches,
    interpretation: input && value ? generateInterpretation(reducedValue, factors) : "",
    shortSummary: input && value ? generateShortSummary(reducedValue, "Simple Gematria") : "",
    fullMeaning: input && value ? generateInterpretation(reducedValue, factors) : ""
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Gematria Explorer Expandable Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-2">Gematria Explorer</h2>
            <p className="mb-3 text-muted-foreground text-center max-w-lg">
              📘 Want to try what you've just learned?<br />
              Click below to launch the full Gematria Explorer.
            </p>
            <Button className="mt-3" onClick={() => setShowExplorer(v => !v)}>
              {showExplorer ? "✖ Hide Gematria Explorer" : "🔍 Open Gematria Explorer"}
            </Button>
            {showExplorer && <ExplorerInline />}
          </div>
        </div>
        {/* Existing Modules Section */}
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
