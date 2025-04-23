import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModuleLayout from "../../components/ModuleLayout";

const PracticalApplicationsModule = () => {
  const moduleData = {
    title: "Pulling It All Together – Practical Applications of Gematria in Daily Life",
    description: "Put your Gematria knowledge into action with interactive tools for name analysis, decision-making, synchronicity tracking, compatibility, and daily insights.",
    icon: CheckSquare,
    level: "Practical",
    duration: "30 mins",
    quote: {
      text: "You've learned the code. Now it's time to apply it.",
      source: ""
    },
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
    ]
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
        <ModuleLayout
          title={moduleData.title}
          description={moduleData.description}
        >
          <section className="learning-module space-y-6">
            <h2 className="text-xl font-bold text-primary">Gematria in Action: Practical Applications</h2>
            <p>
              After exploring the rich traditions and systems of Gematria, you're ready to apply this ancient wisdom to your 
              modern life. This module guides you through practical ways to use Gematria for personal insight, decision-making, 
              and spiritual growth—all accessible through our interactive tools.
            </p>
            <p>
              Rather than keeping Gematria as an abstract study, we'll show you how to integrate it into your daily routine 
              and important life moments, bringing numerical insight to everything from naming your business to understanding 
              relationship dynamics.
            </p>

            <h2 className="text-xl font-bold text-primary">The Name Explorer Tool</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Comprehensive Name Analysis</h3>
              <p className="text-sm mb-3">
                Our Name Explorer tool takes name analysis beyond basic calculations, offering a multi-system approach to reveal the 
                deeper meaning and energy of any name—whether it's your own, your child's, a business, or a creative project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h4 className="font-medium text-primary">Features</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Analyze names in multiple Gematria systems simultaneously</li>
                    <li>View matching words that share the same numerical value</li>
                    <li>Get personalized interpretations of your name's energy</li>
                    <li>Save analyses to your profile for future reference</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h4 className="font-medium text-primary">Practical Applications</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li>Explore your birth name for insights into your core nature</li>
                    <li>Evaluate potential baby names through Gematria lens</li>
                    <li>Analyze business or product names before launching</li>
                    <li>Check pen names or usernames for favorable vibrations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Decision Clarity Tool</h2>
            <p>
              When facing important choices, the Decision Clarity tool can offer a unique perspective by revealing 
              the numerical patterns and symbolic meanings behind your options.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800">How to Use It:</h3>
              <ol className="list-decimal space-y-1 pl-6 text-sm">
                <li>Enter 2-5 options you're considering (names, dates, paths, etc.)</li>
                <li>The tool calculates the Gematria value of each option</li>
                <li>View numerical profiles and symbolic meanings</li>
                <li>Compare the energy and resonance of different choices</li>
                <li>Use the insights as one factor in your decision-making process</li>
              </ol>
              <div className="mt-4 p-3 bg-white rounded shadow-sm">
                <h4 className="font-medium text-primary text-sm">Common Applications:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <div className="text-xs">
                    <span className="font-semibold">Business & Creative:</span>
                    <ul className="list-disc pl-4">
                      <li>Compare potential company names</li>
                      <li>Evaluate product naming options</li>
                      <li>Choose between creative project titles</li>
                    </ul>
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold">Life Planning:</span>
                    <ul className="list-disc pl-4">
                      <li>Compare potential dates for important events</li>
                      <li>Evaluate housing or relocation options</li>
                      <li>Assess different career or educational paths</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Synchronicity Tracker</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Meaningful Patterns in Your Life</h3>
              <p className="text-sm mb-3">
                The Synchronicity Tracker helps you document, analyze, and understand recurring number patterns 
                that appear in your life. Over time, you'll develop a personal numerology dictionary of what 
                specific numbers or sequences might signify for you.
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <h4 className="font-medium text-primary">Key Features:</h4>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>Quick entry system to log numbers as you encounter them</li>
                  <li>Option to note where, when, and what you were thinking</li>
                  <li>Weekly patterns report showing your most common numbers</li>
                  <li>Searchable log of your synchronicity experiences</li>
                  <li>Traditional interpretations of common number sequences</li>
                </ul>
              </div>
              <p className="text-xs italic mt-3">
                "After tracking numbers for just two weeks, I noticed that 23 appeared before every major business 
                opportunity. Now when I see it, I know to be particularly attentive to possibilities."
                — Michael R., Entrepreneur
              </p>
            </div>

            <h2 className="text-xl font-bold text-primary">Name Compatibility Checker</h2>
            <p>
              Explore the numerical resonance between two names—whether for romantic relationships, business 
              partnerships, creative collaborations, or parent-child dynamics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Relationship Analysis</span>
                <p className="text-sm">
                  Input two names to see their individual values, shared numbers, and combined energy. 
                  Receive insights about potential strengths, challenges, and complementary qualities.
                </p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Business Compatibility</span>
                <p className="text-sm">
                  Check how your name aligns with a company name or potential business partner. 
                  Identify synergies and potential growth areas in the numeric relationship.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Daily Gematria Message</h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800">Daily Numerical Wisdom</h3>
              <p className="text-sm mb-3">
                Receive a daily insight based on Gematria principles, aligned with the day's numerical significance 
                and your personal profile. Each message offers a brief but meaningful reflection to carry with you.
              </p>
              <div className="bg-white p-3 rounded border border-indigo-200">
                <h4 className="font-medium text-primary">Message Types:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-xs">
                  <div>
                    <span className="font-semibold">Personal Numerology:</span>
                    <p>Insights based on your name or birth date calculation</p>
                  </div>
                  <div>
                    <span className="font-semibold">Calendar Alignments:</span>
                    <p>Messages related to the numeric energy of today's date</p>
                  </div>
                  <div>
                    <span className="font-semibold">Hebrew Wisdom:</span>
                    <p>Traditional Jewish concepts with matching Gematria values</p>
                  </div>
                  <div>
                    <span className="font-semibold">Practical Prompts:</span>
                    <p>Action-oriented suggestions based on daily numbers</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Guided App Flow: Harnessing the Tools</h2>
            <p>
              To help you seamlessly integrate these tools into your life, we've created a step-by-step guided 
              experience that walks you through each feature with practical examples and personalized applications.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800">Getting Started:</h3>
              <ol className="list-decimal space-y-1 pl-6 text-sm">
                <li>Create your profile with your full name and birth date</li>
                <li>Take the guided tour of all available tools</li>
                <li>Complete your first name analysis and save the results</li>
                <li>Set up preferences for your daily Gematria message</li>
                <li>Add the first entry to your synchronicity tracker</li>
              </ol>
              <p className="text-xs mt-3">
                The guided flow will adapt to your interests and goals, helping you customize your 
                Gematria practice to align with what matters most in your life.
              </p>
            </div>

            <h2 className="text-xl font-bold text-primary">Ethical Guidelines for Application</h2>
            <p>
              As you begin applying Gematria to real-life situations, keep these ethical principles in mind:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Use as One Perspective:</span> Gematria offers valuable insights but should complement, not replace, other forms of discernment.</li>
              <li><span className="font-semibold">Avoid Deterministic Thinking:</span> Numbers reveal patterns and possibilities, not fixed destinies.</li>
              <li><span className="font-semibold">Respect Cultural Origins:</span> Acknowledge the Jewish roots of Gematria while exploring contemporary applications.</li>
              <li><span className="font-semibold">Practice Discernment:</span> Not every numerical coincidence carries profound meaning—develop intuition about which patterns matter.</li>
              <li><span className="font-semibold">Share with Care:</span> When offering Gematria insights to others, present them as possibilities rather than proclamations.</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-800">Learning Reflection</h3>
              <p className="text-sm">
                Gematria is both an ancient wisdom tradition and a living practice. As you integrate these tools 
                into your daily life, you become part of a lineage stretching back thousands of years, while 
                simultaneously evolving the practice for modern times. Trust your intuition about which applications 
                resonate most deeply with you, and allow your relationship with numerical wisdom to unfold naturally.
                Remember that the goal isn't to control or predict, but to deepen awareness and uncover meaningful patterns.
              </p>
            </div>
          </section>
        </ModuleLayout>
      </main>
      <Footer />
    </motion.div>
  );
};

export default PracticalApplicationsModule; 