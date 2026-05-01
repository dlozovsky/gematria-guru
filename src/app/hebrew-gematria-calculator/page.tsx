import type { Metadata } from "next";
import { Suspense } from "react";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import GematriaCalculatorClient from "@/app/GematriaCalculatorClient";

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
        <Suspense fallback={<div className="w-full h-40" />}>
          <GematriaCalculatorClient initialPreset="hebrew" />
        </Suspense>
      </main>
      <NavFooter />
    </div>
  );
}
