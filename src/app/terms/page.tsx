import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Gematria Guru.",
  openGraph: { url: "https://gematriaguru.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        <div className="space-y-6 text-muted-foreground">
          <p>By using Gematria Guru, you agree to these Terms of Service.</p>
          <h2 className="text-xl font-semibold text-foreground">Use of Service</h2>
          <p>Gematria Guru provides a free online gematria calculator and educational resources for personal and educational use.</p>
          <h2 className="text-xl font-semibold text-foreground">Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Do not use the service for any unlawful purpose</li>
            <li>Do not attempt to access or interfere with our systems</li>
            <li>Do not scrape content without permission</li>
          </ul>
          <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
          <p>Gematria calculations are for educational purposes only. The service is provided "as is" without warranties.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>Questions? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
