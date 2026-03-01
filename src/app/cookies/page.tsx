import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Gematria Guru.",
  openGraph: { url: "https://gematriaguru.com/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        <div className="space-y-6 text-muted-foreground">
          <p>This policy explains how Gematria Guru uses cookies.</p>
          <h2 className="text-xl font-semibold text-foreground">Essential Cookies</h2>
          <p>Required for site functionality, including storing your recent gematria lookups in your browser.</p>
          <h2 className="text-xl font-semibold text-foreground">Analytics Cookies</h2>
          <p>We use Google Analytics to understand site usage. These collect anonymous information.</p>
          <h2 className="text-xl font-semibold text-foreground">Advertising Cookies</h2>
          <p>We use Google AdSense. Google may use cookies for personalized ads. Opt out at <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>Questions? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
