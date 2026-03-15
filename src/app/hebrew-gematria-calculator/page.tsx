import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "Hebrew Gematria Calculator — Free Online Tool",
  description: "Free Hebrew gematria calculator online. Convert Hebrew words and phrases to their numerical values using traditional gematria cipher.",
  openGraph: {
    title: "Hebrew Gematria Calculator — Free Online Tool",
    description: "Free Hebrew gematria calculator online. Convert Hebrew words and phrases to their numerical values using traditional gematria cipher.",
    url: "https://www.gematriaguru.com/hebrew-gematria-calculator",
  },
  alternates: {
    canonical: "https://www.gematriaguru.com/hebrew-gematria-calculator",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-4">Hebrew Gematria Calculator</h1>
        <p className="text-muted-foreground mb-8">Hebrew gematria is an ancient system where each Hebrew letter has a numerical value, used in Torah study and Jewish mystical interpretation to reveal textual connections.</p>
        <div className="rounded-xl border border-border p-6">
          <p className="mb-4">Use our main calculator with a Hebrew preset:</p>
          <Link
            href="/?preset=hebrew"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Open Calculator
          </Link>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
