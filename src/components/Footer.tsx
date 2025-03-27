
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-6 text-center text-xs text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <p>Gematria Guru © {new Date().getFullYear()}</p>
    </motion.footer>
  );
};

export default Footer;
