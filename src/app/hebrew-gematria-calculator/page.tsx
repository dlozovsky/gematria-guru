import type { Metadata } from "next";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

const PAGE_TITLE = "Hebrew Gematria Calculator — Free Online Tool";
const PAGE_DESCRIPTION =
  "Free Hebrew gematria calculator online. Convert Hebrew words and phrases to their numerical values using traditional gematria cipher.";
const PAGE_CANONICAL_URL =
  "https://www.gematriaguru.com/hebrew-gematria-calculator";

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
        <h1 className="text-3xl font-bold mb-4">Hebrew Gematria Calculator</h1>
        <p className="text-muted-foreground mb-8">
          Hebrew gematria is an ancient alphanumeric system where each Hebrew
          letter corresponds to a number. Originating in classical Jewish
          tradition, it is widely used in Torah study and mystical
          interpretation to uncover deeper textual relationships.
        </p>
        <div className="rounded-xl border border-border p-6">
          <p className="mb-4">
            Use our main calculator with the Hebrew preset selected:
          </p>
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
