import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Gematria Systems Overview — Module 3",
  description: "Explore the major gematria systems including standard, reduced, ordinal, gadol, and more. Learn how each system assigns values and when to use them.",
  keywords: ["gematria systems", "mispar gadol", "mispar katan", "ordinal gematria"],
  openGraph: { title: "Gematria Systems Overview", url: "https://gematriaguru.com/learning/systems" },
};

export default function SystemsModulePage() {
  return (
    <NextModuleLayout
      title="Gematria Systems Overview"
      description="Explore the major gematria systems and learn how each assigns numerical values to Hebrew letters."
      prevModule={{ title: "The Hebrew Alphabet as Numbers", href: "/learning/hebrew-alphabet" }}
      nextModule={{ title: "Advanced Techniques", href: "/learning/advanced" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Mispar Hechrachi (Standard Value)</h2>
        <p className="text-muted-foreground mb-3">The most commonly used system, also called Mispar Ragil. Letters are assigned values in groups: Aleph–Tet (1–9), Yod–Tsadi (10–90), Qof–Tav (100–400). This is the default system used in most classical sources.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Example: אהבה (Ahavah — Love)</p>
          <p className="text-muted-foreground">א(1) + ה(5) + ב(2) + ה(5) = 13. The same value as אחד (Echad — One), expressing the unity within love.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Mispar Katan (Reduced Value)</h2>
        <p className="text-muted-foreground mb-3">Each letter's value is reduced to a single digit by removing zeros. Yod (10) becomes 1, Kaf (20) becomes 2, and so on up to Tav (400) becoming 4. This simplification highlights root numerical patterns across words.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Use case</p>
          <p className="text-muted-foreground">Mispar Katan is useful for finding connections between words that differ in magnitude but share a reduced root value, pointing to shared spiritual essence.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Mispar Siduri (Ordinal Value)</h2>
        <p className="text-muted-foreground mb-3">Letters are assigned their position in the alphabet: Aleph = 1, Bet = 2, … Tav = 22. This system emphasizes sequential relationships and is often used in combination with other systems to corroborate findings.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Comparison</p>
          <p className="text-muted-foreground">While standard gematria gives Tav a value of 400, ordinal gives it 22 — highlighting its role as the final, completing letter of the alphabet.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Mispar Gadol (Large Value)</h2>
        <p className="text-muted-foreground mb-3">Identical to standard gematria but assigns higher values to the five final (sofit) letter forms: Final Kaf = 500, Final Mem = 600, Final Nun = 700, Final Pe = 800, Final Tsadi = 900. This system is used in Kabbalistic texts to emphasize words ending with final letters.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Key difference</p>
          <p className="text-muted-foreground">The same word can have a different total under Mispar Gadol if it contains a final letter form — which can unlock additional layers of interpretation.</p>
        </div>
      </div>
    </NextModuleLayout>
  );
}
