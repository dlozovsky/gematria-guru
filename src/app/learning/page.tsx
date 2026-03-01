import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, School, Layers, GraduationCap, Star, BookMarked, Hash, Lightbulb } from "lucide-react";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "Learn Gematria — Interactive Learning Modules",
  description: "Learn gematria from beginner to advanced with our interactive modules. Covers Hebrew alphabet, gematria systems, kabbalah, Torah interpretation, and more.",
  keywords: ["learn gematria", "gematria course", "Hebrew numerology tutorial"],
  openGraph: { title: "Learn Gematria — Interactive Modules", url: "https://gematriaguru.com/learning" },
};

const modules = [
  { title: "Introduction to Gematria", description: "Learn the basics of gematria and its historical significance.", icon: BookOpen, level: "Beginner", duration: "10–15 min", href: "/learning/intro" },
  { title: "The Hebrew Alphabet as Numbers", description: "Master the Hebrew alphabet and its numerical values.", icon: School, level: "Beginner", duration: "12–18 min", href: "/learning/hebrew-alphabet" },
  { title: "Gematria Systems Overview", description: "Explore standard, reduced, ordinal, and other systems.", icon: Layers, level: "Intermediate", duration: "15–20 min", href: "/learning/systems" },
  { title: "Advanced Techniques", description: "Learn AtBash, Albam, and other advanced gematria ciphers.", icon: GraduationCap, level: "Advanced", duration: "20–30 min", href: "/learning/advanced" },
  { title: "Torah Gematria", description: "How gematria is used in interpreting the Torah.", icon: Star, level: "Intermediate", duration: "15–25 min", href: "/learning/torah-gematria" },
  { title: "Name Gematria", description: "Calculate and interpret the gematria of names.", icon: BookMarked, level: "Beginner", duration: "10–15 min", href: "/learning/name-gematria" },
  { title: "Number Mysticism", description: "The spiritual significance of numbers in Jewish tradition.", icon: Hash, level: "Intermediate", duration: "15–20 min", href: "/learning/number-mysticism" },
  { title: "Practical Applications", description: "Apply gematria to modern contexts and everyday use.", icon: Lightbulb, level: "Beginner", duration: "10–15 min", href: "/learning/practical-applications" },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-orange-100 text-orange-700",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Gematria Learning Modules",
  description: "Comprehensive gematria course from beginner to advanced levels",
  provider: { "@type": "Organization", name: "Gematria Guru", url: "https://gematriaguru.com" },
  url: "https://gematriaguru.com/learning",
};

export default function LearningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Learn Gematria</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master gematria from the ground up. Our structured modules take you from the basics of Hebrew numerology to advanced interpretive techniques.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <Link key={mod.href} href={mod.href} className="group border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 text-primary rounded-lg p-2"><mod.icon className="h-5 w-5" /></div>
                  <span className="text-xs font-medium text-muted-foreground">Module {i + 1}</span>
                </div>
                <h2 className="font-semibold mb-1 group-hover:text-primary transition-colors">{mod.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{mod.description}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[mod.level]}`}>{mod.level}</span>
                  <span className="text-xs text-muted-foreground">{mod.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
