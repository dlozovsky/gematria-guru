
import { useState } from "react";
import { motion } from "framer-motion";
import { Info, BookOpen, HelpCircle } from "lucide-react";
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
          
          <div className="mt-4 space-y-3">
            <h4 className="font-medium text-sm">Interpreting Your Results:</h4>
            <p className="text-xs text-muted-foreground">
              Gematria interpretation is both an art and a science. Consider these approaches:
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
              <li><span className="font-medium">Word Connections:</span> Find other words with the same value to discover conceptual relationships.</li>
              <li><span className="font-medium">Number Symbolism:</span> Certain numbers have traditional meanings (7 for completion, 12 for governance).</li>
              <li><span className="font-medium">Mathematical Properties:</span> Consider if the number is prime, a perfect square, or has interesting factors.</li>
              <li><span className="font-medium">Cultural Context:</span> Different traditions (Jewish, Christian, etc.) may interpret the same numbers differently.</li>
            </ul>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground italic">
            Gematria is the ancient practice of assigning numerical values to letters to reveal hidden meanings in words and phrases.
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Instructions;
