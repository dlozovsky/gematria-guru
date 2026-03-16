import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

const PAGE_TITLE = "English Gematria Calculator — Free Online Tool";
const PAGE_DESCRIPTION =
  "Calculate English gematria instantly. Free online calculator supporting Simple English and English Ordinal cipher methods.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/english-gematria-calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_CANONICAL_URL,
  },
  alternates: {
    canonical: PAGE_CANONICAL_URL,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-4">English Gematria Calculator</h1>
        <p className="text-muted-foreground mb-8">
          English gematria assigns numerical values to each letter in the
          alphabet. The most common approaches are English Ordinal (A=1 through
          Z=26) and Simple English ciphers for quickly finding number patterns
          in words and phrases.
        </p>
        <div className="rounded-xl border border-border p-6">
          <p className="mb-4">
            Use our main calculator with the English preset selected:
          </p>
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
