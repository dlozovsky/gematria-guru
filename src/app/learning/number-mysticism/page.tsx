import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Number Mysticism in Jewish Tradition — Module 7",
  description: "Explore the spiritual significance of numbers in Jewish mysticism. Learn about key numbers like 7, 10, 18, 26, and 72 and their role in Kabbalah and Torah.",
  keywords: ["jewish number mysticism", "kabbalah numbers", "gematria number significance"],
  openGraph: { title: "Number Mysticism", url: "https://gematriaguru.com/learning/number-mysticism" },
};

export default function NumberMysticismModulePage() {
  return (
    <NextModuleLayout
      title="Number Mysticism"
      description="Discover the spiritual significance of key numbers in Jewish mysticism and Kabbalistic tradition."
      prevModule={{ title: "Name Gematria", href: "/learning/name-gematria" }}
      nextModule={{ title: "Practical Applications", href: "/learning/practical-applications" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Numbers as Divine Language</h2>
        <p className="text-muted-foreground mb-3">In Kabbalistic thought, numbers are not merely quantitative — they are qualitative expressions of divine energy. The Sefer Yetzirah (Book of Formation), one of the oldest Kabbalistic texts, describes the universe as created through 32 paths of wisdom: 10 Sefirot (divine attributes) and 22 letters of the Hebrew alphabet.</p>
        <p className="text-muted-foreground">Each number, therefore, corresponds to a Sefirah, a divine force, or a structural principle underlying reality itself.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Key Numbers and Their Significance</h2>
        <div className="space-y-3 text-sm">
          {[
            ["7 — Shabbat and Completion","The seventh day of creation. Seven appears throughout Torah: 7 days, 7 years (Shemitah), 7 x 7 years (Jubilee). In Kabbalah, 7 corresponds to the seven lower Sefirot and the seven emotional attributes."],
            ["10 — The Sefirot","Ten divine attributes (Sefirot) compose the Kabbalistic Tree of Life: Keter, Chokhmah, Binah, Chesed, Gevurah, Tiferet, Netzach, Hod, Yesod, and Malkhut."],
            ["18 — Chai (Life)","The Hebrew word חי (Chai, life) equals 18. Multiples of 18 are given as gifts at Jewish celebrations, embodying a blessing of life."],
            ["26 — The Divine Name","The Tetragrammaton יהוה (YHVH) has a gematria of 26. This number pervades Torah structure: the first verse has 7 words and 28 letters (28 = 26 + 2), and many key phrases sum to 26 or its multiples."]
          ].map(([title, detail]) => (
            <div key={String(title)} className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">The Number 72</h2>
        <p className="text-muted-foreground mb-3">One of the most celebrated numbers in Kabbalah is 72 — the number of the divine names derived from Exodus 14:19–21 (three consecutive verses each containing 72 letters). Written in a specific arrangement, these 72 triplets form the 72 Names of God, each associated with a specific divine quality and angelic force.</p>
        <p className="text-muted-foreground">Kabbalistic practitioners use these 72 Names for meditation, healing, and spiritual protection.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">The 10 Sefirot and the Tree of Life</h2>
        <p className="text-muted-foreground mb-3">The Kabbalistic Tree of Life maps 10 Sefirot (divine emanations) connected by 22 paths (one for each Hebrew letter). The entire structure encodes the relationship between numerical, linguistic, and spiritual reality — a complete symbolic system for understanding creation.</p>
        <p className="text-muted-foreground">Gematria serves as the bridge between this abstract structure and the concrete text of the Torah, allowing scholars to trace the divine blueprint encoded in sacred language.</p>
      </div>
    </NextModuleLayout>
  );
}
