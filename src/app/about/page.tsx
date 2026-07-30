import type { Metadata } from "next";
import { CIPHER_COUNT_WORD, CIPHER_SYSTEMS } from "@/lib/gematriaReference";
import { SITE_AUTHOR } from "@/lib/author";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "About Gematria Guru | Free Hebrew & English Calculator" },
  description: `Gematria Guru is a free online tool for calculating Hebrew, English and Greek gematria values across ${CIPHER_COUNT_WORD} cipher methods.`,
  openGraph: { title: "About Gematria Guru | Free Hebrew & English Calculator", description: `Gematria Guru is a free online tool for calculating Hebrew, English and Greek gematria values across ${CIPHER_COUNT_WORD} cipher methods.`, url: "https://www.gematriaguru.com/about" },
  alternates: { canonical: "https://www.gematriaguru.com/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">About Gematria Guru</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>
            Gematria Guru is a free calculator for Hebrew, English and Greek gematria. Enter a word
            and it returns the value in {CIPHER_COUNT_WORD} systems at once, showing the value of
            every letter so the total can be checked by hand.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">Who writes this site</h2>
            <p className="mb-3">{SITE_AUTHOR.bio}</p>
            <p>
              Articles here carry a real byline. Earlier versions of this site published posts under
              author names that did not correspond to real people; those bylines have been corrected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">What the calculator does</h2>
            <ul className="list-disc pl-6 space-y-2">
              {CIPHER_SYSTEMS.map((c) => (
                <li key={c.method}>
                  <strong className="text-foreground">{c.method}</strong> ({c.script}). {c.rule}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">On accuracy and interpretation</h2>
            <p className="mb-3">
              The arithmetic is fixed. Every letter table published on this site is generated from
              the same code that computes your result, so a chart here cannot disagree with the
              calculator.
            </p>
            <p>
              What a number means is a different question. Gematria is a historical interpretive
              practice, and two words sharing a value is an arithmetic fact rather than evidence of
              a connection between them. This site reports the numbers and leaves the reading to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-3">Contact</h2>
            <p>
              Corrections and questions are welcome through the{" "}
              <a href="/contact" className="text-primary hover:underline">contact page</a>. If you
              find a value on this site that you believe is wrong, please say so and include the
              word and the system.
            </p>
          </section>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
