import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gematria Guru.",
  openGraph: { url: "https://gematriaguru.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        <div className="space-y-6 text-muted-foreground">
          <p>Gematria Guru is committed to protecting your privacy. This policy explains how we collect and use your information.</p>
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Usage data (anonymized) about how you use the calculator</li>
            <li>Contact form submissions</li>
            <li>Newsletter subscriptions (email only)</li>
            <li>Cookies for analytics and advertising</li>
          </ul>
          <h2 className="text-xl font-semibold text-foreground">Google AdSense</h2>
          <p>We use Google AdSense to display ads. Google may use cookies to serve personalized ads. You can opt out at <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>Questions? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
        </div>
      </main>
      <NavFooter />
    </div>
  );
}
