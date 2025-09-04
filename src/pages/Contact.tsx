import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Gematria Guru
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions about Gematria? Need support with our tools? Want to share feedback? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Send Us a Message</CardTitle>
              <CardDescription className="text-slate-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="your@email.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="What is this about?"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="Tell us more about your question or feedback..."
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  data-testid="button-submit"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>For general inquiries and support:</p>
                <a 
                  href="mailto:support@gematriaguru.com" 
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  data-testid="link-support-email"
                >
                  support@gematriaguru.com
                </a>
                <p className="mt-2">For business inquiries:</p>
                <a 
                  href="mailto:business@gematriaguru.com" 
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  data-testid="link-business-email"
                >
                  business@gematriaguru.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>We typically respond to inquiries within 24-48 hours.</p>
                <p className="mt-2">For urgent technical issues, please include "URGENT" in your subject line.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Join our community for discussions and updates:</p>
                <div className="mt-2 space-y-1">
                  <a 
                    href="#" 
                    className="block text-purple-400 hover:text-purple-300"
                    data-testid="link-discord"
                  >
                    Discord Community
                  </a>
                  <a 
                    href="#" 
                    className="block text-purple-400 hover:text-purple-300"
                    data-testid="link-forum"
                  >
                    Community Forum
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">How accurate are the Gematria calculations?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Our calculations use traditional Gematria systems and are thoroughly tested for accuracy. We support multiple calculation methods including Hebrew, English, and various cipher systems.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Is Gematria Guru free to use?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Yes! Gematria Guru is completely free to use. All our calculators, learning modules, and tools are available at no cost.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Can I request new features?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Absolutely! We welcome feature requests and suggestions. Please use the contact form above or email us with your ideas.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">Do you offer educational resources?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>Yes! Our Learning section contains comprehensive modules covering Gematria basics, advanced techniques, and practical applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;