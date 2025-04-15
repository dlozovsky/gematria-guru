
import { useState } from "react";
import { motion } from "framer-motion";
import { Info, BookOpen, HelpCircle, Plus, Minus } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Instructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Button 
        variant="outline" 
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        {isOpen ? <BookOpen size={16} /> : <Info size={16} />}
        {isOpen ? "Hide Instructions" : "Show Instructions"}
      </Button>
      
      {isOpen && (
        <motion.div
          className="glass-card rounded-xl p-4 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
            <BookOpen size={18} className="text-primary" />
            How to Use the Gematria Calculator
          </h3>
          
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Enter a word or phrase in the input field above.</li>
            <li>The calculator will automatically compute the gematria values using three different methods.</li>
            <li>Examine the results and consider what the numbers might symbolize.</li>
            <li>Look for other words with the same numerical values to find hidden connections.</li>
            <li>Consider breaking down the number into factors (e.g., 36 = 6×6 or 4×9) to find additional meanings.</li>
            <li>Reference the FAQ section to learn about common number interpretations.</li>
          </ol>
          
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="interpretation">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <HelpCircle size={16} className="text-primary" />
                  Interpretation Guide
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-3">
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
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="traditions">
              <AccordionTrigger className="text-sm font-medium">
                <span className="flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" />
                  Gematria Traditions
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-3">
                <p>Different cultural and religious traditions have developed their own gematria systems:</p>
                
                <div className="space-y-1">
                  <h5 className="font-medium">Hebrew Gematria:</h5>
                  <p>The original system dating back thousands of years, assigning specific values to Hebrew letters. It's extensively used in Kabbalah and Jewish mysticism.</p>
                </div>
                
                <div className="space-y-1">
                  <h5 className="font-medium">Greek Isopsephy:</h5>
                  <p>The Greek equivalent of gematria, used in ancient Greek texts and early Christian writings.</p>
                </div>
                
                <div className="space-y-1">
                  <h5 className="font-medium">English Gematria:</h5>
                  <p>Modern adaptations applying numerical values to English letters, typically using A=1, B=2, etc.</p>
                </div>
                
                <div className="space-y-1">
                  <h5 className="font-medium">Simple Gematria:</h5>
                  <p>A system that cycles values from 1-9 (A=1, B=2... I=9, J=1, etc.), creating patterns across longer words.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-4 text-xs text-muted-foreground italic">
            Gematria is the ancient practice of assigning numerical values to letters to reveal hidden meanings in words and phrases.
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Instructions;
