import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModuleLayout from "../../components/ModuleLayout";

const TorahGematriaModule = () => {
  const moduleData = {
    title: "Gematria in the Torah – Interpreting Sacred Text Through Numbers",
    description: "Discover how Jewish sages and mystics used Gematria to reveal hidden meanings in the Torah. Analyze verses, words, and letters to unlock spiritual and legal insights.",
    icon: BookOpen,
    level: "Advanced",
    duration: "30 mins",
    quote: {
      text: "In the Torah, there are no coincidences—only concealed meanings waiting to be revealed.",
      source: ""
    },
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
            <h2 className="text-xl font-bold text-primary">The Torah and the Hidden World of Numbers</h2>
            <p>
              The Torah, the first five books of the Hebrew Bible, has been studied for millennia not only for its explicit 
              teachings but also for the hidden layers of meaning embedded within it. One of the most fascinating 
              approaches to uncovering these hidden dimensions is through Gematria—the practice of assigning numerical 
              values to Hebrew letters and words.
            </p>
            <p>
              Jewish sages, from the Talmudic period through medieval commentators and Kabbalists, have used 
              Gematria to reveal connections between seemingly unrelated concepts, provide support for legal rulings, 
              and offer deeper spiritual insights into the sacred text.
            </p>

            <h2 className="text-xl font-bold text-primary">Classical Examples from the Torah</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">בראשית (B'reshit) = 913</h3>
              <p className="text-sm">
                The very first word of the Torah, meaning "In the beginning," has a Gematria value of 913. 
                Commentators note this equals the sum of the phrase "ברית אש" (covenant of fire = 913), 
                suggesting the Torah was given through a divine covenant of fire at Sinai.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">אדם (Adam) = 45</h3>
              <p className="text-sm">
                The Hebrew word for the first human equals 45, which is also the value of מה (mah, "what"), 
                suggesting humans should always question their purpose. Additionally, 45 = יהוה (26) + אלהים (19),
                uniting God's mercy (YHVH) and justice (Elohim) attributes.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">נחש (Nachash, "serpent") & משיח (Mashiach, "messiah") = 358</h3>
              <p className="text-sm">
                Both these words equal 358, teaching that the ultimate rectification (Messiah) corresponds to 
                the source of temptation (serpent). This shows how forces of evil can be transformed into redemption.
              </p>
            </div>

            <h2 className="text-xl font-bold text-primary">Types of Gematria Interpretation in Torah Study</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Literal Equivalence:</span> Finding words with identical numerical values to draw connections.</li>
              <li><span className="font-semibold">Allusion (Remez):</span> Using Gematria to suggest meanings not explicitly stated in the text.</li>
              <li><span className="font-semibold">Spelled-out Values (Milui):</span> Calculating values based on how letters are spelled when written out fully.</li>
              <li><span className="font-semibold">Symbolic Totals:</span> Key numbers like 18 (life), 26 (YHVH), and 613 (commandments) have special significance.</li>
              <li><span className="font-semibold">Mystical Geometry:</span> Arranging letters in geometric forms to reveal hidden patterns and meanings.</li>
            </ul>

            <h2 className="text-xl font-bold text-primary">Famous Totals in Torah Study</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">18 - Life (חי)</span>
                <p className="text-sm">Considered lucky and sacred because it's the numerical value of "chai" (life).</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">26 - YHWH (יהוה)</span>
                <p className="text-sm">The four-letter divine name, representing God's attribute of mercy.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">40 - Transition</span>
                <p className="text-sm">Symbolizes transitions and transformations (40 days of flood, 40 years in desert).</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">70 - Nations</span>
                <p className="text-sm">Represents the 70 nations of the world descended from Noah after the flood.</p>
              </div>
              <div className="p-3 border border-blue-200 rounded-lg">
                <span className="font-bold text-primary">613 - Commandments</span>
                <p className="text-sm">The total number of commandments (mitzvot) in the Torah.</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary">Try It Yourself: Simple Analysis Exercise</h2>
            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
              <p>These two Hebrew words both equal 13:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border border-blue-200 rounded-lg text-center">
                  <span className="text-2xl font-bold">אחד</span>
                  <p>Echad (One) = 1+8+4 = 13</p>
                </div>
                <div className="p-3 border border-blue-200 rounded-lg text-center">
                  <span className="text-2xl font-bold">אהבה</span>
                  <p>Ahavah (Love) = 1+5+2+5 = 13</p>
                </div>
              </div>
              <p className="text-sm italic">What might this connection suggest about the nature of love and unity? Many commentators see this as teaching that true love creates unity and oneness between people.</p>
            </div>

            <h2 className="text-xl font-bold text-primary">How Sages Use Gematria in Commentary</h2>
            <p>
              Throughout Jewish history, prominent scholars have employed Gematria in their Torah commentaries:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Rabbi Akiva:</span> Famous for deriving "mountains of laws from every crown of the letters," including numerical meanings.</li>
              <li><span className="font-semibold">Vilna Gaon:</span> Extensively used Gematria to explain difficult passages and show connections between Jewish law and mysticism.</li>
              <li><span className="font-semibold">The Zohar:</span> The central text of Kabbalah draws countless connections between words based on their numerical equivalence.</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-800">Learning Reflection</h3>
              <p className="text-sm">
                Numbers in Torah study are never merely quantitative—they carry qualitative meaning. When you encounter 
                significant numbers in Jewish texts, consider their Gematria connections and what deeper messages might be embedded.
              </p>
            </div>
          </section>
        </ModuleLayout>
      </main>
      <Footer />
    </motion.div>
  );
};

export default TorahGematriaModule; 