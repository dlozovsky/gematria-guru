import { motion } from "framer-motion";
import { User } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModuleLayout from "../../components/ModuleLayout";

const NameGematriaModule = () => {
  const moduleData = {
    title: "Name Gematria – Understanding Personal Numerology",
    description: "Learn how to analyze names using Gematria principles, revealing character traits, life purposes, and spiritual connections through numerical patterns.",
    icon: User,
    level: "Intermediate",
    duration: "25 mins",
    quote: {
      text: "Your name is not a coincidence—it's a numerical blueprint of your essence and potential.",
      source: ""
    },
    objectives: [
      "Understand how names can be analyzed using Gematria principles",
      "Learn to calculate numerical values of names in multiple systems",
      "Discover the significance of name numbers in personal development",
      "Apply basic name analysis techniques to your own name"
    ],
    highlights: [
      "Name Analysis Fundamentals: Converting letters to numbers",
      "Multiple Systems: Hebrew, English, and Pythagorean approaches",
      "Core Numbers: Expression, Soul Urge, and Personality numbers",
      "Character Traits and Life Path insights from name analysis",
      "Famous Names: Case studies of notable historical figures",
      "Practical Application: Calculate and interpret your own name"
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
            <h2 className="text-xl font-bold text-primary">Name Analysis Fundamentals</h2>
            <p>
              In the study of Gematria, names hold special significance as they are believed to carry 
              vibrations that influence a person's character, destiny, and spiritual journey. The practice
              of analyzing names through numerology dates back thousands of years across multiple cultures.
            </p>
            <p>
              When we convert the letters of a name into numbers and analyze the resulting patterns, we can 
              uncover insights about personality traits, life challenges, spiritual gifts, and potential paths.
            </p>

            <h2 className="text-xl font-bold text-primary">Multiple Systems for Name Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">Hebrew System</h3>
                <p className="text-sm">
                  The traditional Hebrew system assigns specific values to each letter of the aleph-bet.
                  Names can be analyzed by transliterating them into Hebrew characters and calculating their values.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">English/Western System</h3>
                <p className="text-sm">
                  Based on English letters, this system assigns values 1-9 in sequence (A=1, B=2, etc.).
                  It's simpler to use for English names but maintains the essence of numerological analysis.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">Pythagorean System</h3>
                <p className="text-sm">
                  The most widely used in Western numerology, this system assigns values 1-9 to letters 
                  (A=1, B=2, ..., I=9, J=1, etc.). It reveals underlying patterns and vibrations in names.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Core Numbers in Name Analysis</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Expression Number:</span> The sum of all letters in your full birth name, revealing your overall potential and abilities.</li>
              <li><span className="font-semibold">Soul Urge Number:</span> Calculated from the vowels in your name, showing your inner desires and what motivates you.</li>
              <li><span className="font-semibold">Personality Number:</span> Derived from consonants in your name, indicating how others perceive you.</li>
              <li><span className="font-semibold">Destiny Number:</span> The reduced sum of your full birth name, revealing life purpose and direction.</li>
            </ul>

            <h2 className="text-xl font-bold text-primary">Character Traits and Life Path Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 1: Leadership</span>
                <p className="text-sm">Names resonating with 1 often indicate independent, pioneering individuals with leadership qualities.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 2: Partnership</span>
                <p className="text-sm">Names with strong 2 energy suggest diplomatic, cooperative individuals who excel in relationships.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 3: Expression</span>
                <p className="text-sm">Creative, communicative, and optimistic traits are common in names with 3 energy.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 4: Stability</span>
                <p className="text-sm">Practical, reliable, and methodical qualities emerge in names with strong 4 influence.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 5: Freedom</span>
                <p className="text-sm">Versatile, adventurous individuals who value change and freedom often have 5-resonant names.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 6: Harmony</span>
                <p className="text-sm">Nurturing, responsible, and service-oriented traits appear in names with 6 energy.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 7: Wisdom</span>
                <p className="text-sm">Analytical, introspective, and spiritual qualities emerge in names with 7 resonance.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 8: Power</span>
                <p className="text-sm">Ambitious, authoritative individuals with executive abilities often have 8-dominant names.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">Number 9: Completion</span>
                <p className="text-sm">Humanitarian, compassionate, and idealistic traits appear in names with 9 energy.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Famous Names Case Studies</h2>
            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
              <p>Let's examine how Gematria principles reveal insights in notable names:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold">Albert Einstein</h3>
                  <p className="text-sm">Expression Number 6: Reflects his responsibility to humanity and service through scientific discovery.</p>
                </div>
                <div className="p-3 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold">Marie Curie</h3>
                  <p className="text-sm">Expression Number 7: Aligns with her analytical mind, research abilities, and spiritual dedication to scientific truth.</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Practical Application</h2>
            <p>
              To analyze your own name, follow these steps:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Write out your full birth name.</li>
              <li>Convert each letter to its corresponding number using your preferred system.</li>
              <li>Calculate your Expression Number by adding all letters.</li>
              <li>Find your Soul Urge Number by adding only the vowels.</li>
              <li>Determine your Personality Number by adding only the consonants.</li>
              <li>Reduce any double-digit numbers to a single digit (except master numbers 11, 22, 33).</li>
            </ol>

            <div className="bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-800">Learning Reflection</h3>
              <p className="text-sm">
                Names are not just labels but can be viewed as vibrational patterns that influence our life journey. 
                As you explore name Gematria, consider how the numerical patterns in your name might reflect your 
                observed traits, talents, and challenges. Remember that numerology offers perspectives rather than 
                fixed predictions—your free will always plays the primary role in shaping your life.
              </p>
            </div>
          </section>
        </ModuleLayout>
      </main>
      <Footer />
    </motion.div>
  );
};

export default NameGematriaModule; 