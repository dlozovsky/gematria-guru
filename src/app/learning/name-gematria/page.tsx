import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Name Gematria — Module 6",
  description: "Learn how to calculate and interpret the gematria of Hebrew names. Understand the spiritual significance of names and how gematria reveals their hidden meaning.",
  keywords: ["name gematria", "hebrew name numerology", "gematria of names"],
  openGraph: { title: "Name Gematria", url: "https://gematriaguru.com/learning/name-gematria" },
};

export default function NameGematriaModulePage() {
  return (
    <NextModuleLayout
      title="Name Gematria"
      description="Discover how to calculate and interpret the gematria of Hebrew names and their spiritual significance."
      prevModule={{ title: "Torah Gematria", href: "/learning/torah-gematria" }}
      nextModule={{ title: "Number Mysticism", href: "/learning/number-mysticism" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">The Significance of Names in Judaism</h2>
        <p className="text-muted-foreground mb-3">In Jewish tradition, a name is not merely a label — it is a window into a person's essence and spiritual mission. The Talmud teaches that parents receive a minor form of prophecy when naming a child, encoding the soul's purpose into the name itself.</p>
        <p className="text-muted-foreground">Calculating the gematria of a name can reveal connections to Torah verses, divine attributes, or other names — all of which shed light on the name-bearer's deeper identity.</p>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Famous Name Examples</h2>
        <div className="space-y-4 text-sm">
          {[
            ["משה (Moshe — Moses) = 345","345 is the same value as השם (HaShem — The Name), suggesting Moses was uniquely connected to the divine. It also equals שמו (Shmo — His name), a self-referential gematria."],
            ["אברהם (Avraham — Abraham) = 248","248 corresponds to the 248 positive commandments in the Torah and the 248 limbs of the human body — reflecting Abraham as the embodiment of the full mitzvot."],
            ["דוד (David) = 14","14 corresponds to יד (Yad — Hand), symbolizing David's kingship as the hand of God in the world. Fourteen also appears in the genealogy of Jesus in Matthew 1, which is structured around this gematria."]
          ].map(([title, detail]) => (
            <div key={String(title)} className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">How to Calculate Your Name's Gematria</h2>
        <p className="text-muted-foreground mb-3">To find the gematria of a Hebrew name, write the name in Hebrew characters, assign each letter its standard value (Mispar Hechrachi), and sum them. If your name is typically spelled in another language, first transliterate it to Hebrew using standard conventions.</p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Write your name in Hebrew script.</li>
          <li>Look up each letter's value in the standard table (Aleph=1, Bet=2 … Tav=400).</li>
          <li>Add all values together to get the total gematria.</li>
          <li>Search for Torah words or verses with the same value to find connections.</li>
        </ol>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Connecting Names to Torah Verses</h2>
        <p className="text-muted-foreground mb-3">A traditional practice is to find a verse in the Torah whose total gematria matches your name, or that begins and ends with the first and last letters of your name. This verse is considered your personal verse (Pasuk) and can be recited at the end of the Amidah prayer.</p>
        <p className="text-muted-foreground">This practice grounds the abstract numerology in lived Jewish observance, connecting personal identity to scripture.</p>
      </div>
    </NextModuleLayout>
  );
}
