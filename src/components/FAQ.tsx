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
import { CIPHER_SYSTEMS, CIPHER_COUNT_WORD } from "@/lib/gematriaReference";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const faqs = [
    {
      question: "Why do some names or words show 'no dominant theme' in the results?",
      answer: (
        <div>
          <p>
            Each system uses a different letter table, so the same word usually produces a different
            total in each one. Those totals are then reduced to a single digit. Sometimes several
            systems reduce to the same digit, and sometimes they scatter.
          </p>
          <p>
            When no digit repeats across the systems, the results show <strong>no dominant theme</strong>.
            Longer inputs and full names scatter more often, simply because there are more letters and
            larger totals involved.
          </p>
          <p>
            This is a property of the arithmetic rather than a verdict on the word. A scattered result
            means the totals happened not to share a reduced digit; it does not mean the calculation
            failed, and it does not say anything factual about the person or idea behind the word.
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
          <p>
            This calculator runs {CIPHER_COUNT_WORD} systems at once, across three scripts:
          </p>
          <ul className="list-disc ml-6">
            {CIPHER_SYSTEMS.map((c) => (
              <li key={c.method}>
                <strong>{c.method}</strong> ({c.script}){c.alsoKnownAs ? `, also called ${c.alsoKnownAs}` : ""}
              </li>
            ))}
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
      question: "What is Pythagorean Gematria?",
      answer: (
        <p>
          <strong>Pythagorean Gematria</strong>, also called Full Reduction, assigns values from 1 to 9
          in a repeating pattern: A=1 through I=9, then J=1 through R=9, then S=1 through Z=8. It is
          sometimes described as the digital root system.
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
    {
      question: "What are the tradition badges that sometimes appear in the results?",
      answer: (
        <div>
          <p>
            You might notice badges like <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Jewish</span> or <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Greek</span> appearing on some Gematria cards. These badges serve an important purpose:
          </p>
          
          <ul className="list-disc ml-6 space-y-2 mt-2">
            <li>
              <strong>Cross-Tradition Significance:</strong> When a calculation produces a number with special significance in a particular tradition, a badge appears to highlight this connection.
            </li>
            <li>
              <strong>Example:</strong> If English Gematria gives you 26, you'll see a "Jewish" badge because 26 represents YHWH (יהוה), the divine name in Jewish tradition.
            </li>
            <li>
              <strong>Cultural Bridge:</strong> These badges show how sacred numbers transcend cultural boundaries - the same meaningful numbers often appear across different traditions and calculation methods.
            </li>
          </ul>
          
          <div className="bg-blue-50 p-3 rounded-md mt-3">
            <p className="font-semibold text-blue-800 mb-1">Common badges you might see:</p>
            <ul className="list-disc ml-6">
              <li><strong>Jewish/Hebrew:</strong> For numbers like 18 (life), 26 (divine name), or 613 (commandments)</li>
              <li><strong>Biblical:</strong> For numbers like 7 (completion), 12 (perfection), or 40 (testing)</li>
              <li><strong>Greek:</strong> For numbers with significance in Greek isopsephy</li>
              <li><strong>Pythagorean:</strong> For numbers important in Pythagorean numerology</li>
            </ul>
          </div>
          
          <p className="mt-3">
            These badges help you discover deeper connections between your search term and various spiritual traditions, even when using different calculation methods.
          </p>
        </div>
      ),
    },
    {
      question: "What is the Number Connections chart and how do I use it?",
      answer: (
        <div>
          <p>
            The <strong>Number Connections</strong> chart is a visual way to explore how your name or word creates patterns across different Gematria systems.
          </p>
          
          <div className="bg-blue-50 p-3 rounded-md mt-2 mb-3">
            <p className="font-semibold text-blue-800 mb-1">What the chart shows:</p>
            <ul className="list-disc ml-6">
              <li><strong>X-axis:</strong> Numerical values (higher numbers appear further right)</li>
              <li><strong>Y-axis:</strong> The gematria systems (English Gematria, English Reverse, Jewish Gematria and so on)</li>
              <li><strong>Colored dots:</strong> Each dot represents a calculation in a specific system</li>
              <li><strong>Number Matches:</strong> When the same number appears in multiple systems</li>
              <li><strong>Significant Numbers:</strong> Values with special meaning in spiritual traditions</li>
            </ul>
          </div>
          
          <p className="mb-2">
            <span className="font-medium">How to use this chart:</span>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Look for <strong>vertical alignments</strong> of dots - these show the same number appearing in different systems</li>
            <li>Pay attention to <strong>Number Matches</strong> - these highlight meaningful cross-system connections</li>
            <li>Notice any <strong>Significant Numbers</strong> that appear - these have special traditional meanings</li>
            <li>Use the buttons below the chart to show/hide specific Gematria systems</li>
            <li>Click on dots for more detailed information about that specific calculation</li>
          </ul>
          
          <p className="mt-3 text-sm italic">
            The Number Connections chart helps you discover patterns that might be missed when looking at individual Gematria systems in isolation.
          </p>
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
