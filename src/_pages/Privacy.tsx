
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p>We collect minimal information necessary to provide our gematria calculation services. This includes:</p>
            <ul className="list-disc pl-6">
              <li>Input text for gematria calculations</li>
              <li>Basic usage analytics</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6">
              <li>Provide gematria calculation services</li>
              <li>Improve our website functionality</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Data Protection</h2>
            <p>We implement security measures to protect your information, including:</p>
            <ul className="list-disc pl-6">
              <li>Encryption of data transmission</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of analytics collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at privacy@gematriaguru.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Privacy;
