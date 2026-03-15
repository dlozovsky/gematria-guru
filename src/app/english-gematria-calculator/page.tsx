import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "English Gematria Calculator — Free Online Tool",
  description: "Calculate English gematria instantly. Free online calculator supporting Simple English and English Ordinal cipher methods.",
  openGraph: {
    title: "English Gematria Calculator — Free Online Tool",
    description: "Calculate English gematria instantly. Free online calculator supporting Simple English and English Ordinal cipher methods.",
    url: "https://www.gematriaguru.com/english-gematria-calculator",
  },
  alternates: {
    canonical: "https://www.gematriaguru.com/english-gematria-calculator",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-4">English Gematria Calculator</h1>
        <p className="text-muted-foreground mb-8">English gematria assigns numerical values to the English alphabet. The most common methods are English Ordinal (A=1 to Z=26) and Simple/Reduced cipher values.</p>
        <div className="rounded-xl border border-border p-6">
          <p className="mb-4">Use our main calculator with a English preset:</p>
          <Link
            href="/?preset=english"
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
