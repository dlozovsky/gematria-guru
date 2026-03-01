import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Introduction to Gematria — Learning Module 1",
  description: "Learn the basics of gematria: what it is, its historical origins in Jewish tradition, how Hebrew letters map to numbers, and common gematria systems.",
  keywords: ["what is gematria", "gematria introduction", "gematria basics"],
  openGraph: { title: "Introduction to Gematria", url: "https://gematriaguru.com/learning/intro" },
};

export default function IntroModulePage() {
  return (
    <NextModuleLayout
      title="Introduction to Gematria"
      description="Learn about the ancient practice of gematria and its significance in spiritual traditions."
      nextModule={{ title: "The Hebrew Alphabet as Numbers", href: "/learning/hebrew-alphabet" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="space-y-2">
          {["Understand what Gematria is and where it comes from", "Recognize its historical roots and cultural importance", "Describe how letters are converted into numbers", "Differentiate between common Gematria systems", "Understand why people use Gematria and how it is applied today"].map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">What Is Gematria?</h2>
        <p className="text-muted-foreground mb-3">Gematria is an ancient system of assigning numerical values to letters, words, or phrases. It reveals patterns and relationships between words that share the same numerical value, often used to uncover hidden meanings in sacred texts — especially in Judaism.</p>
        <p className="text-muted-foreground">Think of it like a secret code hidden inside words — where every letter is also a number, and every word is a kind of equation.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Origins of Gematria</h2>
        <p className="text-muted-foreground mb-4">The word "Gematria" likely comes from the Greek word "geōmetriā", meaning "geometry" or "measurement." Its practical and spiritual usage developed primarily in Hebrew culture.</p>
        <h3 className="font-semibold mb-2">Biblical Roots</h3>
        <p className="text-muted-foreground mb-4">Gematria has been used for centuries by Jewish scholars, especially Kabbalists, to interpret the Torah, the Talmud, and other sacred texts. The idea is that nothing in these holy writings is accidental — even the number value of a word holds deep significance.</p>
        <h3 className="font-semibold mb-2">Beyond Judaism</h3>
        <p className="text-muted-foreground">Similar systems also appear in Greek (Isopsephy), Arabic (Abjad), and English esotericism.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">How Does Gematria Work?</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-muted"><th className="text-left px-4 py-2 font-medium">Letter</th><th className="text-left px-4 py-2 font-medium">Name</th><th className="text-left px-4 py-2 font-medium">Value</th></tr></thead>
            <tbody>
              {[["א","Aleph","1"],["ב","Bet","2"],["י","Yod","10"],["כ","Kaf","20"],["ל","Lamed","30"],["ק","Qof","100"],["ר","Resh","200"],["ש","Shin","300"],["ת","Tav","400"]].map(([l,n,v]) => (
                <tr key={l} className="border-t border-border"><td className="px-4 py-2 text-lg">{l}</td><td className="px-4 py-2">{n}</td><td className="px-4 py-2 font-medium">{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Example: שלום (Shalom)</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>ש = 300</li><li>ל = 30</li><li>ו = 6</li><li>ם = 40 (Final Mem)</li>
          </ul>
          <p className="mt-2 font-semibold">Total Gematria = 376</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Case Study: A Famous Example</h2>
        <p className="text-muted-foreground mb-3">The word "Mashiach" (משיח) — meaning Messiah — equals 358. So does "Nachash" (נחש) — serpent. In Kabbalistic thinking, this implies the Messiah will come through the transformation of chaos into healing.</p>
      </div>
    </NextModuleLayout>
  );
}
