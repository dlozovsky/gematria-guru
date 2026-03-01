"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email, status: "active" }]);
    setLoading(false);
    if (error?.code === "23505") {
      toast({ title: "Already subscribed", description: "This email is already on our list." });
    } else if (error) {
      toast({ title: "Error", description: "Could not subscribe. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Subscribed!", description: "You are now on our newsletter list." });
      setEmail("");
    }
  };

  return (
    <div className="mt-16 border border-border rounded-xl p-8 text-center max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Stay Updated</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Get the latest articles and insights about gematria delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm disabled:opacity-60"
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  );
}
