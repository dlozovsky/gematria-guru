import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "About Gematria Guru | Free Hebrew & English Calculator" },
  description: "Learn about Gematria Guru — a free online tool for calculating Hebrew and English gematria values with multiple cipher methods.",
  openGraph: { title: "About Gematria Guru | Free Hebrew & English Calculator", description: "Learn about Gematria Guru — a free online tool for calculating Hebrew and English gematria values with multiple cipher methods.", url: "https://www.gematriaguru.com/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">About Gematria Guru</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>Welcome to Gematria Guru, your premier destination for exploring the ancient practice of gematria and numerical connections in text. Founded with the mission to make gematria accessible and meaningful to everyone, our platform combines traditional wisdom with modern technology.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
          <p>Our mission is to provide an intuitive and comprehensive tool for exploring the hidden numerical patterns and meanings within words and phrases through gematria. We believe in making this ancient practice accessible to both newcomers and experienced practitioners.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accurate gematria calculations across multiple methods including Hebrew and English systems</li>
            <li>Interactive number mapping and visualization tools</li>
            <li>Educational resources and learning modules about gematria and numerology</li>
            <li>A knowledge center with articles on gematria history, kabbalah, and biblical numerology</li>
            <li>Free access with no account required</li>
          </ul>
          <h2 className="text-2xl font-semibold text-foreground mt-8">The Practice of Gematria</h2>
          <p>Gematria is an ancient numerological technique that assigns numerical values to letters in an alphabet. The practice is most associated with Hebrew, where each of the 22 letters carries a specific numerical value. Kabbalists developed sophisticated gematria techniques as part of their mystical exploration of the Torah.</p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Us</h2>
          <p>Have questions or feedback? Visit our <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch.</p>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
