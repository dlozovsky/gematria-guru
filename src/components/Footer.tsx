
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer 
      className="w-full py-8 px-4 bg-slate-900/50 backdrop-blur border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Gematria Guru</h3>
            <p className="text-slate-300 text-sm mb-4">
              Your comprehensive platform for learning and exploring the ancient art of Gematria. 
              Discover hidden meanings in Hebrew and English through our interactive calculators and educational modules.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2" data-testid="footer-email">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@gematriaguru.com" className="hover:text-purple-400 transition-colors">
                  support@gematriaguru.com
                </a>
              </div>
              <div className="flex items-center gap-2" data-testid="footer-address">
                <MapPin className="h-4 w-4" />
                <span>Educational Platform • Worldwide Access</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/learning" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-learning">
                Learning Modules
              </Link>
              <Link to="/number-maps" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-calculator">
                Gematria Calculator
              </Link>
              <Link to="/about" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-about">
                About Us
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-contact">
                Contact Support
              </Link>
            </nav>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-privacy">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-terms">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block text-slate-300 hover:text-purple-400 transition-colors" data-testid="footer-link-cookies">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Gematria Guru. All rights reserved. | 
            Educational content for learning purposes only.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
