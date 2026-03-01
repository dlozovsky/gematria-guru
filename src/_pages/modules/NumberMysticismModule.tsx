import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModuleLayout from "../../components/ModuleLayout";

const NumberMysticismModule = () => {
  const moduleData = {
    title: "Symbolism, Synchronicity, and Number Mysticism",
    description: "Explore the symbolic power of numbers, synchronicity, and recurring number patterns in Jewish and mystical traditions.",
    icon: Sparkles,
    level: "Advanced",
    duration: "25 mins",
    quote: {
      text: "Numbers are the language of the universe. Synchronicity is how it speaks to you.",
      source: ""
    },
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
            <h2 className="text-xl font-bold text-primary">The Symbolic Language of Numbers</h2>
            <p>
              Throughout human history, numbers have been seen as more than just quantities—they've been 
              understood as symbols carrying qualitative meanings and spiritual significance. From ancient
              civilizations to modern mystical traditions, certain numbers are recognized as having inherent
              symbolic power.
            </p>
            <p>
              In Jewish mysticism particularly, numbers are viewed as foundational to creation itself,
              with the Sefer Yetzirah (Book of Formation) describing how God created the universe through
              the 22 letters of the Hebrew alphabet and the 10 sefirot—forming a numerical and linguistic
              blueprint for all of existence.
            </p>

            <h2 className="text-xl font-bold text-primary">Understanding Synchronicity</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Carl Jung's Concept</h3>
              <p className="text-sm">
                Psychologist Carl Jung coined the term "synchronicity" to describe meaningful coincidences that 
                cannot be explained by cause and effect. These are events that seem to be connected not by 
                causality but by meaning. When certain numbers repeatedly appear in your life at significant moments,
                this may represent synchronicity at work.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-blue-800">Number Synchronicity</h3>
              <p className="text-sm">
                Seeing the same number sequences repeatedly (like 111, 222, or 1234) may be dismissed as mere 
                coincidence, but in mystical traditions, these occurrences are seen as meaningful messages or 
                cosmic signposts guiding you toward awareness or action.
              </p>
            </div>

            <h2 className="text-xl font-bold text-primary">Sacred Numbers and Their Meanings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">1 - Unity</span>
                <p className="text-sm">The number of God, divine unity, and the beginning of all things. In Gematria, it corresponds to the letter Aleph (א).</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">7 - Completion</span>
                <p className="text-sm">Seven days of creation, seven branches of the menorah, seven heavens. Represents perfection and divine order.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">18 - Life</span>
                <p className="text-sm">The Hebrew word for life, "chai" (חי), equals 18, making it a powerful symbol of vitality and blessing.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">26 - Divine Name</span>
                <p className="text-sm">The Tetragrammaton (יהוה), God's ineffable name, has the value 26. Represents divine mercy and presence.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">40 - Transformation</span>
                <p className="text-sm">40 days of the flood, 40 years in the desert, 40 days of Lent. Symbolizes complete transformation or testing.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">72 - Divine Names</span>
                <p className="text-sm">The 72 names of God in Kabbalah, derived from Exodus 14:19-21. Represents divine power and angelic forces.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">613 - Commandments</span>
                <p className="text-sm">The 613 mitzvot (commandments) in the Torah. Represents complete covenant and divine instruction.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">1000 - Eternity</span>
                <p className="text-sm">"A thousand years is like a day" (Psalm 90:4). Symbolizes eternity and God's transcendence of time.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Modern Number Sequences</h2>
            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
              <p>Contemporary spirituality recognizes these repeating sequences as significant:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold">111, 222, 333, etc.</h3>
                  <p className="text-sm">Repeating digits are seen as "angel numbers" or amplified energies of that particular digit. 111 often represents alignment and manifestation power.</p>
                </div>
                <div className="p-3 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold">1212, 1234, 2323, etc.</h3>
                  <p className="text-sm">Sequential numbers often suggest progression, growth, or moving through spiritual stages. They can be seen as cosmic encouragement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Case Study: The Number 358</h2>
            <p>
              One of the most fascinating examples of number mysticism in Jewish tradition involves the number 358.
              This is the Gematria value of "Mashiach" (משיח) meaning "Messiah," but it's also the value of "Nachash" (נחש),
              meaning "serpent." This seemingly contradictory connection reveals a profound mystical teaching:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The very force that represents temptation or evil (the serpent) contains within it the potential for redemption (Messiah).</li>
              <li>Transformation from darkness to light occurs at the same numerical frequency.</li>
              <li>The messiah has the power to transform the serpent's energy into healing (similar to Moses' bronze serpent in Numbers 21:9).</li>
            </ul>
            <p className="mt-2">
              This numerical synchronicity teaches that redemption often emerges from the very places we might least expect it.
            </p>

            <h2 className="text-xl font-bold text-primary">Gematria as a Meditative Tool</h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800">Contemplative Practice</h3>
              <ol className="list-decimal space-y-2 pl-6 text-sm">
                <li>Choose a word, name, or concept meaningful to you.</li>
                <li>Calculate its Gematria value in your preferred system.</li>
                <li>Find other words or phrases with the same value.</li>
                <li>Meditate on the connections between these words.</li>
                <li>Journal any insights that arise about how these concepts might relate in your life.</li>
                <li>Notice what emerges in your awareness over the following days.</li>
              </ol>
            </div>

            <h2 className="text-xl font-bold text-primary">Practical Application: Your Synchronicity Journal</h2>
            <p>
              To begin working with number symbolism and synchronicity in your life, try this practice:
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-yellow-800">Number Synchronicity Journal</h3>
              <p className="text-sm">Create a dedicated journal or note in your phone for tracking number patterns:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm">
                <li>Record the date, time, and circumstances when you notice repeating or significant numbers.</li>
                <li>Note what was happening or what you were thinking about when you noticed the number.</li>
                <li>Research the traditional or symbolic meanings associated with that number.</li>
                <li>After a few weeks, look for patterns in when certain numbers appear.</li>
                <li>Reflect on how these numbers might relate to themes or decisions in your life.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-800">Learning Reflection</h3>
              <p className="text-sm">
                Number mysticism invites us to see the world through a lens where coincidence gives way to 
                meaning and where patterns reveal guidance. While maintaining critical thinking, allow yourself 
                to be open to the possibility that numbers can serve as a bridge between your conscious awareness 
                and deeper wisdom—whether from your own subconscious or from a higher source. The practice is less 
                about predicting the future and more about cultivating awareness and deeper perception of the present.
              </p>
            </div>
          </section>
        </ModuleLayout>
      </main>
      <Footer />
    </motion.div>
  );
};

export default NumberMysticismModule; 