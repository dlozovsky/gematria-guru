
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Gematria Guru</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <p>Welcome to Gematria Guru, your premier destination for exploring the ancient practice of gematria and numerical connections in text. Founded with the mission to make gematria accessible and meaningful to everyone, our platform combines traditional wisdom with modern technology.</p>
          
          <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
          <p>Our mission is to provide an intuitive and comprehensive tool for exploring the hidden numerical patterns and meanings within words and phrases through gematria. We believe in making this ancient practice accessible to both newcomers and experienced practitioners.</p>
          
          <h2 className="text-2xl font-semibold mt-8">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accurate gematria calculations across multiple methods</li>
            <li>Interactive number mapping and visualization</li>
            <li>Educational resources about gematria and numerology</li>
            <li>Community features for sharing discoveries</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accuracy in calculations and interpretations</li>
            <li>Respect for traditional practices while embracing modern technology</li>
            <li>Commitment to user privacy and data protection</li>
            <li>Continuous improvement and feature development</li>
          </ul>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
