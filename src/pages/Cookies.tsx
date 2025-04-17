
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Cookies = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services by:</p>
            <ul className="list-disc pl-6">
              <li>Remembering your preferences</li>
              <li>Understanding how you use our site</li>
              <li>Improving site performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Essential Cookies</h3>
                <p>Required for basic site functionality. Cannot be disabled.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Preference Cookies</h3>
                <p>Remember your settings and preferences for future visits.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Be aware that disabling certain cookies may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
            <p>We may update this cookie policy periodically. Please check back regularly for any changes.</p>
          </section>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Cookies;
