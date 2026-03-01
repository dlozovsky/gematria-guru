import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Torah Gematria — Module 5",
  description: "Discover how gematria is used to interpret the Torah. Learn classic examples from the Five Books of Moses, rabbinic literature, and Kabbalistic commentary.",
  keywords: ["torah gematria", "gematria bible", "jewish numerology torah"],
  openGraph: { title: "Torah Gematria", url: "https://gematriaguru.com/learning/torah-gematria" },
};

export default function TorahGematriaModulePage() {
  return (
    <NextModuleLayout
      title="Torah Gematria"
      description="Explore how gematria has been applied to interpret sacred Torah texts for thousands of years."
      prevModule={{ title: "Advanced Techniques", href: "/learning/advanced" }}
      nextModule={{ title: "Name Gematria", href: "/learning/name-gematria" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Gematria as Torah Interpretation</h2>
        <p className="text-muted-foreground mb-3">In Jewish tradition, the Torah is considered a divine document in which every letter, word, and number carries intentional meaning. Gematria is one of the 32 methods of Torah interpretation (the 32 Paths of Wisdom in Kabbalah) used to reveal deeper layers of meaning embedded in the text.</p>
        <p className="text-muted-foreground">Rabbinic literature (Talmud, Midrash) and Kabbalistic texts (Zohar, Sefer HaBahir) frequently employ gematria to draw connections between seemingly unrelated passages, words, or concepts.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Classic Torah Examples</h2>
        <div className="space-y-4 text-sm">
          {[
            ["Chai (חי) = 18","The word for life equals 18. This is why Jews give gifts in multiples of 18, and why 18 is considered an especially auspicious number in Jewish culture."],
            ["Echad (אחד) = 13, Ahavah (אהבה) = 13","The Hebrew words for 'One' and 'Love' share the same gematria value, hinting at the Kabbalistic principle that unity and love are the same divine force."],
            ["Torah (תורה) = 611","The word Torah equals 611. Moses transmitted 611 commandments directly; the remaining 2 of the 613 were heard directly from God at Sinai."]
          ].map(([title, detail]) => (
            <div key={String(title)} className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">The First Word of the Torah</h2>
        <p className="text-muted-foreground mb-3">The Torah begins with בראשית (Bereishit — "In the beginning"). Its gematria value is 913. Kabbalistic commentators note that 913 contains deep numerical structure: it is the product of hidden names and is linked to concepts of creation, wisdom, and divine speech.</p>
        <p className="text-muted-foreground">The letter Bet (ב), with which the Torah begins, has a value of 2 — symbolizing duality, the nature of creation, and the separation of the primordial unity into the world of multiplicity.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Gematria in Talmudic Reasoning</h2>
        <p className="text-muted-foreground mb-3">The Talmud (Kiddushin 30a) teaches that there are 600,000 letters in the Torah — matching the 600,000 Jewish souls said to have stood at Sinai. Each soul corresponds to a letter, making the entire Jewish people a living Torah.</p>
        <p className="text-muted-foreground">While scholars debate the precise count, the principle illustrates how numerical symbolism in Torah study is not merely academic — it is deeply personal and communal.</p>
      </div>
    </NextModuleLayout>
  );
}
