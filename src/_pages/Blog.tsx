import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Tag, User } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Basics of Gematria: A Beginner's Guide",
    excerpt: "Discover the ancient art of Gematria and learn how numerical values reveal hidden meanings in words and texts. Perfect for beginners starting their journey.",
    author: "Gematria Guru Team",
    date: "2025-01-04",
    readTime: "8 min read",
    category: "Beginner",
    slug: "understanding-basics-gematria-beginners-guide"
  },
  {
    id: 2,
    title: "Hebrew Alphabet and Numerical Values: Complete Reference",
    excerpt: "A comprehensive guide to Hebrew letter values and their significance in traditional Gematria calculations. Includes pronunciation guides and examples.",
    author: "Sarah Cohen",
    date: "2025-01-03",
    readTime: "12 min read",
    category: "Reference",
    slug: "hebrew-alphabet-numerical-values-complete-reference"
  },
  {
    id: 3,
    title: "English Gematria Systems: Exploring Different Methods",
    excerpt: "Learn about various English Gematria systems including Simple, Reverse, and Jewish ordinal methods. Compare results and understand applications.",
    author: "Michael David",
    date: "2025-01-02",
    readTime: "10 min read",
    category: "Advanced",
    slug: "english-gematria-systems-different-methods"
  },
  {
    id: 4,
    title: "Biblical Numerology and Sacred Numbers in Scripture",
    excerpt: "Explore the significance of numbers in biblical texts and how Gematria reveals deeper spiritual meanings in religious literature.",
    author: "Rabbi Jonathan Stone",
    date: "2025-01-01",
    readTime: "15 min read",
    category: "Spiritual",
    slug: "biblical-numerology-sacred-numbers-scripture"
  },
  {
    id: 5,
    title: "Modern Applications of Gematria in Digital Age",
    excerpt: "How ancient Gematria principles apply to modern contexts, from name analysis to digital communications and contemporary interpretations.",
    author: "Dr. Lisa Roberts",
    date: "2024-12-30",
    readTime: "7 min read",
    category: "Modern",
    slug: "modern-applications-gematria-digital-age"
  },
  {
    id: 6,
    title: "Kabbalah and Gematria: The Mystical Connection",
    excerpt: "Understand the deep relationship between Kabbalistic teachings and Gematria, exploring how numbers reveal divine wisdom and cosmic truths.",
    author: "Benjamin Wolf",
    date: "2024-12-28",
    readTime: "13 min read",
    category: "Mystical",
    slug: "kabbalah-gematria-mystical-connection"
  }
];

const categories = ["All", "Beginner", "Advanced", "Reference", "Spiritual", "Modern", "Mystical"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gematria Knowledge Center
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore articles, guides, and insights about Gematria, numerology, and the mystical significance of numbers.
            Learn from experts and deepen your understanding of this ancient practice.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-colors h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                    <Tag className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      data-testid={`link-blog-post-${post.id}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-white/10 backdrop-blur border-white/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-slate-300">
                Get the latest articles and insights about Gematria delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  data-testid="input-newsletter-email"
                />
                <button
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  data-testid="button-newsletter-subscribe"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;