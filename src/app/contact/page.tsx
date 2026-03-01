import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Gematria Guru team. We welcome questions, feedback, and suggestions.",
  openGraph: { title: "Contact Gematria Guru", url: "https://gematriaguru.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-10 w-full">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have a question, suggestion, or feedback? We would love to hear from you.
        </p>
        <ContactForm />
      </main>
      <NavFooter />
    </div>
  );
}
