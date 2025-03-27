
import { motion } from "framer-motion";

interface NumberCardProps {
  value: number;
  method: string;
  explanation: string;
}

const NumberCard = ({ value, method, explanation }: NumberCardProps) => {
  return (
    <motion.div 
      className="glass-card rounded-xl p-5 flex flex-col items-center justify-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <motion.span 
        className="text-2xl md:text-3xl font-bold text-primary"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <h3 className="text-sm font-medium text-foreground">{method}</h3>
      <p className="text-xs text-muted-foreground text-center">{explanation}</p>
    </motion.div>
  );
};

export default NumberCard;
