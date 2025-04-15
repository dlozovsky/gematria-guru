
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const ExampleCard = () => {
  const examples = [
    { word: "LOVE", value: 54, method: "English Gematria" },
    { word: "WISDOM", value: 83, method: "English Gematria" },
    { word: "PEACE", value: 49, method: "English Gematria" }
  ];

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto my-4 p-4 glass-card rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
        <Lightbulb size={18} className="text-amber-500" />
        Examples to Try
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            className="p-3 bg-white/40 rounded-lg shadow-sm border border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="font-medium">{example.word}</div>
            <div className="text-2xl font-bold text-primary">{example.value}</div>
            <div className="text-xs text-muted-foreground">{example.method}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExampleCard;
