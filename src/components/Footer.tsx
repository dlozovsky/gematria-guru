
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-6 px-4 text-center text-sm text-muted-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="mb-4">Gematria Guru © {new Date().getFullYear()}</p>
        <nav className="flex flex-wrap justify-center gap-4 text-xs">
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
