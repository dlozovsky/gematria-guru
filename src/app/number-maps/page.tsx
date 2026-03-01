import type { Metadata } from "next";
import { Suspense } from "react";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import NumberMapsClient from "./NumberMapsClient";

export const metadata: Metadata = {
  title: "Gematria Number Maps — Visualize Numerical Connections",
  description: "Explore numerical connections and patterns in gematria values. Interactive visualization of how numbers relate across different gematria systems.",
  openGraph: { title: "Gematria Number Maps", url: "https://gematriaguru.com/number-maps" },
};

export default function NumberMapsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-2">Number Maps</h1>
        <p className="text-muted-foreground mb-8">
          Visualize numerical connections and patterns in gematria values across different systems.
        </p>
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-muted-foreground">Loading...</div>}>
          <NumberMapsClient />
        </Suspense>
      </main>
      <NavFooter />
    </div>
  );
}
