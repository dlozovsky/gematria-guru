
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="w-full pt-8 pb-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Numerical Wisdom
      </motion.span>
      <motion.h1 
        className="text-3xl md:text-4xl font-bold tracking-tight mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Gematria Calculator
      </motion.h1>
      <motion.p 
        className="text-sm text-muted-foreground max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Discover the numerical values hidden within words and phrases
      </motion.p>
    </motion.header>
  );
};

export default Header;
