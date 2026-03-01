
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>By accessing and using Gematria Guru, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Use License</h2>
            <ul className="list-disc pl-6">
              <li>Permission is granted to temporarily use this website for personal, non-commercial purposes.</li>
              <li>You must not modify or copy the materials unless explicitly allowed.</li>
              <li>This license shall automatically terminate if you violate any of these restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
            <p>The materials on Gematria Guru are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:</p>
            <ul className="list-disc pl-6">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Limitations</h2>
            <p>In no event shall Gematria Guru or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Revisions</h2>
            <p>We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </section>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Terms;
