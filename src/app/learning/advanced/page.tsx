import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Advanced Gematria Techniques — Module 4",
  description: "Learn advanced gematria ciphers including AtBash, Albam, Ayak Bakar, and Achas Beta. Understand substitution ciphers and their use in Kabbalistic texts.",
  keywords: ["atbash gematria", "albam cipher", "advanced gematria", "kabbalistic ciphers"],
  openGraph: { title: "Advanced Gematria Techniques", url: "https://gematriaguru.com/learning/advanced" },
};

export default function AdvancedModulePage() {
  return (
    <NextModuleLayout
      title="Advanced Gematria Techniques"
      description="Master advanced substitution ciphers and interpretive methods used by Kabbalistic scholars."
      prevModule={{ title: "Gematria Systems Overview", href: "/learning/systems" }}
      nextModule={{ title: "Torah Gematria", href: "/learning/torah-gematria" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">AtBash (אתבש)</h2>
        <p className="text-muted-foreground mb-3">AtBash is a substitution cipher where the first letter of the alphabet is replaced by the last, the second by the second-to-last, and so on. Aleph becomes Tav, Bet becomes Shin, and so forth. The name itself encodes the pattern: Aleph↔Tav, Bet↔Shin.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Biblical usage</p>
          <p className="text-muted-foreground">The prophet Jeremiah uses AtBash in Jeremiah 25:26 — "Sheshach" (ששך) is the AtBash encoding of "Babel" (בבל), a veiled reference to Babylon.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Albam (אלבם)</h2>
        <p className="text-muted-foreground mb-3">The alphabet is split into two equal halves of 11 letters each. Each letter in the first half is substituted with its corresponding letter in the second half: Aleph↔Lamed, Bet↔Mem, Gimel↔Nun, and so on. The name encodes the first swap: Aleph↔Lamed, Bet↔Mem.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Example</p>
          <p className="text-muted-foreground">The word for heart, לב (Lev, Lamed-Bet), transforms under Albam to אמ — alluding to the idea that the heart conceals the mother (אמ, Em) within it, a Kabbalistic insight.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Ayak Bakar (איק בכר)</h2>
        <p className="text-muted-foreground mb-3">In this system, letters that share the same reduced (Mispar Katan) value are considered equivalent and interchangeable. Aleph, Yod, and Qof all reduce to 1; Bet, Kaf, and Resh all reduce to 2, and so on. This creates a nine-cycle grouping system.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Interpretive power</p>
          <p className="text-muted-foreground">By substituting letters within the same Ayak Bakar group, scholars reveal hidden equivalences between words that might seem unrelated on the surface.</p>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Milui (Letter Spelling)</h2>
        <p className="text-muted-foreground mb-3">In Milui, each letter is replaced by the sum of the letters that spell its full name. For example, Aleph (אלף) = 1 + 30 + 80 = 111. This dramatically expands numerical values and is used in advanced Kabbalistic calculation, particularly for the Divine Names.</p>
        <div className="bg-muted/50 rounded-lg p-4 text-sm">
          <p className="font-medium mb-1">Divine Names</p>
          <p className="text-muted-foreground">Different spellings of the Divine Name (e.g., יהוה) under Milui yield values of 45, 52, 63, or 72 depending on whether vowels are spelled with Aleph, He, Vav, or Yod — each corresponding to a different Kabbalistic world.</p>
        </div>
      </div>
    </NextModuleLayout>
  );
}
