import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Info, BookOpen, Calculator, Search, Divide, Hash } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const faqs = [
    {
      question: "Why do some names or words show 'no dominant theme' in the results?",
      answer: (
        <div>
          <p>
            Great question! Sometimes when you enter a word or name — especially full names — the numerical values across different Gematria systems (English, Simple, Jewish, Pythagorean, Greek) don't reduce to the same number.
          </p>
          <p>
            Instead, you might get a variety of different reduced values like:<br />
            <strong>English:</strong> 153 → 1<br />
            <strong>Simple:</strong> 63 → 9<br />
            <strong>Jewish:</strong> 742 → 4<br />
            <strong>Greek:</strong> 811 → 2
          </p>
          <p>
            Because these reduced numbers don't repeat or cluster, we say there's <strong>no dominant theme</strong>.
          </p>
          <p>
            <span role="img" aria-label="brain">🧠</span> <strong>What does that mean?</strong> It doesn't mean the word or name is meaningless — in fact, it usually means the person or idea carries a blend of energies:
          </p>
          <ul className="list-disc ml-6">
            <li>A mix of leadership and compassion</li>
            <li>A blend of intuition and structure</li>
            <li>A combination of creativity and spiritual insight</li>
          </ul>
          <p>
            This kind of result is often interpreted as a <strong>"Complex Soul"</strong> or multifaceted identity — someone who isn't defined by one archetype but instead draws strength from diverse traits.
          </p>
        </div>
      ),
    },
    {
      question: "What is the Recent Lookups feature?",
      answer: (
        <div>
          <p>
            The <strong>Recent Lookups</strong> card appears below the input bar and displays your last 7 searches with their key numbers. You can click any entry to instantly rerun that search.
          </p>
          <ul className="list-disc ml-6">
            <li>Your recent lookups are saved in your browser (<strong>localStorage</strong>) and will persist between visits.</li>
            <li>Only the 7 most recent lookups are shown; older ones are automatically removed.</li>
            <li>There is no scroll bar for this card to keep the interface clean.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Why is there no scroll bar in the Recent Lookups?",
      answer: (
        <div>
          <p>
            To keep the interface tidy and user-friendly, the <strong>Recent Lookups</strong> card only displays the 7 most recent entries.
          </p>
          <ul className="list-disc ml-6">
            <li>If you perform more searches, the oldest entries are automatically removed from the list.</li>
            <li>This ensures the card remains compact and easy to use.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the latest enhancements to Gematria Guru?",
      answer: (
        <div>
          <p>Recent updates include:</p>
          <ul className="list-disc ml-6">
            <li>Bullet-point summaries for Gematria card interpretations for better readability</li>
            <li>A Learning Modules page with interactive lessons</li>
            <li>The Recent Lookups card for quick access to your latest searches</li>
            <li>A cleaner, more mobile-friendly interface</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is Gematria?",
      answer: (
        <p>
          Gematria is a system of assigning numerical values to letters in alphabets. It has been used in various cultures, particularly in Jewish mysticism, to find hidden meanings and connections between words and phrases that share the same numerical value.
        </p>
      ),
    },
    {
      question: "What are the different types of Gematria?",
      answer: (
        <div>
          <p>This calculator offers three main types:</p>
          <ul className="list-disc ml-6">
            <li><strong>English Gematria</strong> (A=1, B=2, etc.)</li>
            <li><strong>Simple Gematria</strong> (cycles values 1-9)</li>
            <li><strong>Jewish Gematria</strong> (based on traditional Hebrew letter values applied to English)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How is English Gematria calculated?",
      answer: (
        <p>
          In <strong>English Gematria</strong>, each letter is assigned a value based on its position in the alphabet: A=1, B=2, C=3, and so on up to Z=26.
        </p>
      ),
    },
    {
      question: "What is Simple Gematria?",
      answer: (
        <p>
          <strong>Simple Gematria</strong> assigns values from 1-9 in a repeating pattern: A=1, B=2... I=9, J=1, K=2, etc. This method is also known as the 'digital root' system.
        </p>
      ),
    },
    {
      question: "How is Jewish Gematria applied to English?",
      answer: (
        <p>
          This adaptation applies traditional Hebrew letter values to their English counterparts. For example, A=1, B=2, G=3, corresponding roughly to Aleph, Beth, Gimel, etc.
        </p>
      ),
    },
    {
      question: "How do I interpret Gematria numbers?",
      answer: (
        <div>
          <p>Gematria numbers can be interpreted in various ways:</p>
          <ul className="list-disc ml-6">
            <li>Finding words with the same numerical value to discover hidden connections</li>
            <li>Relating to significant biblical or cultural numbers (7 for completion, 18 for life, etc.)</li>
            <li>Breaking down numbers into their constituent parts (e.g., 36 can be seen as 3×12 or 6×6)</li>
          </ul>
          <p>The meaning often depends on cultural and religious context.</p>
        </div>
      ),
    },
    {
      question: "What do some common numbers mean in Gematria?",
      answer: (
        <div>
          <p>Some significant numbers include:</p>
          <ul className="list-disc ml-6">
            <li>7 (spiritual perfection, divine completion)</li>
            <li>8 (new beginnings)</li>
            <li>11 (disorder, judgment)</li>
            <li>12 (governmental perfection)</li>
            <li>13 (rebellion in Western tradition, but unity in Jewish tradition)</li>
            <li>18 (life in Jewish tradition)</li>
            <li>26 (name of God - YHVH)</li>
            <li>666 (typically associated with 'the beast' in Christian tradition)</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How can I use Gematria in my studies?",
      answer: (
        <div>
          <p>Gematria can be used to:</p>
          <ul className="list-disc ml-6">
            <li>Find connections between related concepts</li>
            <li>Explore hidden meanings in sacred texts</li>
            <li>Enhance meditation and contemplative practices</li>
            <li>Discover patterns that might reveal deeper spiritual truths</li>
          </ul>
          <p>Many scholars use it as one of many interpretive tools rather than as a standalone method.</p>
        </div>
      ),
    },
    {
      question: "Is Gematria scientific?",
      answer: (
        <div>
          <p>
            Gematria is <strong>not considered scientific</strong> in the modern sense. It's a mystical or hermeneutic approach to finding meaning.
          </p>
          <ul className="list-disc ml-6">
            <li>Due to the many calculation methods available, critics note that desired connections can often be found if one searches long enough.</li>
            <li>However, many religious scholars value it as part of traditional exegesis.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Where is Gematria used today?",
      answer: (
        <div>
          <p>Today, Gematria is still used in:</p>
          <ul className="list-disc ml-6">
            <li>Jewish mysticism (Kabbalah)</li>
            <li>Some Christian theological studies</li>
            <li>Occult practices and numerology</li>
            <li>By people interested in finding hidden patterns in language</li>
          </ul>
          <p>It continues to be a subject of interest in both religious and esoteric contexts.</p>
        </div>
      ),
    },
    {
      question: "How to Use the Gematria Calculator",
      answer: (
        <div className="space-y-3">
          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">1</div>
              <Calculator size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">Enter a word or phrase in the input field above.</div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">2</div>
              <Calculator size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">The calculator will automatically compute the gematria values using three different methods.</div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">3</div>
              <Search size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">Examine the results and consider what the numbers might symbolize.</div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">4</div>
              <Search size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">Look for other words with the same numerical values to find hidden connections.</div>
          </div>
          {/* Step 5 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">5</div>
              <Divide size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">Consider breaking down the number into factors (e.g., 36 = 6×6 or 4×9) to find additional meanings.</div>
          </div>
          {/* Step 6 */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center min-w-[2.2rem]">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm">6</div>
              <HelpCircle size={18} className="text-primary mt-1" />
            </div>
            <div className="text-sm pt-1">Reference the FAQ section to learn about common number interpretations.</div>
          </div>
        </div>
      ),
    },
    {
      question: "Interpretation Guide",
      answer: (
        <div className="space-y-3">
          <p>Gematria interpretation is both an art and a science. Numbers reveal connections between seemingly unrelated concepts and can provide deeper spiritual insights.</p>
          
          <div className="space-y-2">
            <h5 className="font-medium">Methods of Interpretation:</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Word Connections:</span> Find other words with the same numerical value to discover conceptual relationships.</li>
              <li><span className="font-medium">Number Symbolism:</span> Explore traditional meanings of specific numbers across cultures.</li>
              <li><span className="font-medium">Mathematical Properties:</span> Consider if the number is prime, a perfect square, or has interesting factors.</li>
              <li><span className="font-medium">Patterns and Repetition:</span> Look for recurring numbers in related words or concepts.</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h5 className="font-medium">Common Number Meanings:</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">1:</span> Unity, beginnings, singularity, God</li>
              <li><span className="font-medium">3:</span> Divine perfection, heavenly completeness</li>
              <li><span className="font-medium">7:</span> Spiritual perfection, divine completeness</li>
              <li><span className="font-medium">8:</span> New beginnings, resurrection</li>
              <li><span className="font-medium">12:</span> Governmental perfection, divine authority</li>
              <li><span className="font-medium">18:</span> Life (chai in Hebrew equals 18)</li>
              <li><span className="font-medium">26:</span> The divine name YHWH (יהוה)</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Button 
        variant="outline" 
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        {isOpen ? <HelpCircle size={16} /> : <HelpCircle size={16} />}
        {isOpen ? "Hide FAQ" : "Frequently Asked Questions"}
      </Button>
      
      {isOpen && (
        <motion.div
          className="glass-card rounded-xl p-4 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <HelpCircle size={18} className="text-primary" />
            Frequently Asked Questions
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground" asChild>
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="py-2"
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FAQ;
