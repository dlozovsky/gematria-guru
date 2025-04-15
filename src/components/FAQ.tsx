
import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
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
      question: "What is Gematria?",
      answer: "Gematria is a system of assigning numerical values to letters in alphabets. It has been used in various cultures, particularly in Jewish mysticism, to find hidden meanings and connections between words and phrases that share the same numerical value."
    },
    {
      question: "What are the different types of Gematria?",
      answer: "This calculator offers three main types: English Gematria (A=1, B=2, etc.), Simple Gematria (which cycles values 1-9), and Jewish Gematria (based on traditional Hebrew letter values applied to English)."
    },
    {
      question: "How is English Gematria calculated?",
      answer: "In English Gematria, each letter is assigned a value based on its position in the alphabet: A=1, B=2, C=3, and so on up to Z=26."
    },
    {
      question: "What is Simple Gematria?",
      answer: "Simple Gematria assigns values from 1-9 in a repeating pattern: A=1, B=2... I=9, J=1, K=2, etc. This method is also known as the 'digital root' system."
    },
    {
      question: "How is Jewish Gematria applied to English?",
      answer: "This adaptation applies traditional Hebrew letter values to their English counterparts. For example, A=1, B=2, G=3, corresponding roughly to Aleph, Beth, Gimel, etc."
    },
    {
      question: "What do the numbers mean?",
      answer: "Different numerical values carry various symbolic meanings. For example, 7 often represents perfection or completion, 13 can represent transformation, and 18 is associated with life in Jewish tradition."
    }
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
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
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
