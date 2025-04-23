# Gematria Guru

A modern, interactive web application for exploring the ancient art and science of Gematria. Gematria Guru combines educational modules, real-time calculators, and personal exploration tools to help users uncover the hidden meanings of words, names, and numbers in both Hebrew and English traditions.

---

## 🚀 Features

### Learning Modules
- **Structured Curriculum:** Eight progressive modules covering everything from the basics of Gematria to advanced mystical symbolism and practical applications.
- **Interactive Lessons:** Each module includes learning objectives, highlights, and hands-on exercises.
- **Quotes & Insights:** Inspirational quotes and thematic highlights for each topic.

### Gematria Explorer
- **Inline & Full-Page Explorer:** Instantly calculate Gematria values for Hebrew and English words using multiple systems (Standard, Katan, Ordinal, Pythagorean, Sumerian, etc.).
- **Real-Time Analysis:** See results live as you type.
- **Symbolic Matches:** Discover matching words, famous numbers, and their spiritual meanings.
- **Smart Entity Detection:** Automatically distinguishes between names and concepts to provide contextually appropriate interpretations.
- **Tradition Badges:** Visual indicators showing when a number has special significance in a specific tradition (Jewish, Greek, Biblical, etc.), highlighting cross-cultural connections.
- **Number Connections Chart:** Interactive visualization showing how values relate across different Gematria systems, with zoom controls and cross-system pattern detection.

### Personal & Practical Tools
- **Name Explorer:** Analyze your name's value and discover its symbolic resonance.
- **Decision Clarity Tool:** Compare options numerically and symbolically for naming, dates, and more.
- **Synchronicity Tracker:** Log and reflect on meaningful number appearances in your life.
- **Name Compatibility Checker:** Explore energetic resonance and shared values between two names.
- **Daily Gematria Message:** Receive in-app or email insights based on number symbolism.
- **Recent Lookups & History:** Instantly revisit previous searches and results.

### User Experience
- **Beautiful UI:** Clean, modern, and responsive design with enhanced summary formatting (icons, backgrounds, and spacing).
- **Expandable Sections:** Inline Gematria Explorer and collapsible FAQ for streamlined navigation.
- **Accessibility:** Keyboard navigation and readable color schemes.
- **Contextual Insights:** Different templates and language for names versus conceptual words.
- **Cross-System Correlations:** Identify and highlight patterns that appear across multiple Gematria systems.

---

## 🛠️ Tech Stack

- **Frontend:** React (with TypeScript)
- **UI/UX:** Tailwind CSS, Lucide Icons, Framer Motion (animations)
- **Routing:** React Router
- **State Management:** React Hooks, useState
- **Persistence:** LocalStorage (for recent lookups, history, and preferences)
- **Utilities:** Custom Gematria calculation logic in JavaScript/TypeScript
- **Intelligence:** Heuristic entity detection for contextual interpretations
- **Build Tools:** Vite (fast, modern build system)

---

## 📦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dlozovsky/gematria-guru.git
   cd gematria-guru
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized output will be in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ✨ Latest Features (v1.2)

### Enhanced Sharing Functionality
- **Rich Content Sharing:** Share the complete Gematria card with detailed numerical information, not just a link
- **Native Sharing Support:** Leverages Web Share API for seamless sharing on mobile and desktop devices
- **Social Media Integration:** Optimized sharing for Facebook, Twitter, and LinkedIn with rich previews
- **Image Generation:** Download or share your Gematria results as an image
- **Improved Metadata:** Dynamic meta tags ensure proper social media previews with images and descriptions

### Tradition Badges
- **Cross-Tradition Indicators:** Visual badges showing when a number has special significance in a specific tradition
- **Cultural Connections:** Discover when numbers calculated in one system have significance in other traditions
- **Enhanced Understanding:** Comprehensive FAQ explaining the badge system and its purpose
- **Visual Hierarchy:** Clear design that highlights important numbers across cultural boundaries

### Number Connections Chart
- **Visual Data Exploration:** Interactive scatter plot showing numerical patterns across different Gematria systems
- **Pattern Recognition:** Easily identify when the same number appears in multiple calculation systems
- **Significant Number Highlights:** Special badge for numbers with traditional spiritual significance 
- **Zoom Controls:** Adjust the view to better examine number clusters and patterns
- **Interactive Legend:** Toggle different Gematria systems on/off for focused analysis
- **Detailed Tooltips:** Click on any point to see complete information about that calculation

### Unified Meaning System
- **Cross-System Pattern Detection:** Identifies repeated numerical patterns across different Gematria systems
- **Theme Highlighting:** Emphasizes the most dominant numerical theme in your search results
- **Smart Contextual Language:** Adapts descriptions based on whether the input is a name or concept
- **Comprehensive Interpretations:** Provides both individual system insights and unified meanings

### Entity Type Detection System
- **Heuristic Detection:** Uses multiple rule-based approaches to determine if input is a name or concept
- **Contextual Templates:** Dynamically changes the interpretation text based on entity type
- **Improved Readability:** "This name reflects..." for names vs "The word carries..." for concepts
- **Expanded Dictionary:** Pre-loaded with common names and spiritual/philosophical concepts

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change or improve.

- Please make sure to update tests as appropriate.
- For feature requests or bug reports, open a GitHub issue.

---

## 📢 Issues & Feedback

If you encounter bugs or have suggestions, please use the GitHub Issues tab.

---

## 📝 License

MIT License

---

## 📚 Project Highlights
- Tradition badges that identify cross-cultural number significance
- Interactive Number Connections chart for visual pattern exploration
- Consistent summary insights for all results (theme found or not)
- No modal popups for system meanings—everything is clear and on the card
- Home navigation is always present
- Modern, accessible, and responsive UI
- Smart entity detection for contextual interpretations

---

## 📚 Module List & Estimated Times

| # | Module Title                                                    | Time         |
|---|------------------------------------------------------------------|--------------|
| 1 | Introduction to Gematria                                        | 10–15 min    |
| 2 | The Hebrew Alphabet as Numbers                                  | 12–18 min    |
| 3 | Exploring Hebrew Gematria Systems                               | 15–20 min    |
| 4 | English and Pythagorean Gematria                                | 10–15 min    |
| 5 | Gematria in the Torah: Interpreting Sacred Text Through Numbers | 15–20 min    |
| 6 | Calculating and Interpreting Your Own Name in Gematria          | 20–25 min    |
| 7 | Symbolism, Synchronicity, and Number Mysticism                  | 15–20 min    |
| 8 | Pulling It All Together – Practical Applications                | 20–30 min    |

---

## ✨ Credits
- Inspired by classic and modern Gematria research, Jewish tradition, and user feedback.
- Icons by [Lucide](https://lucide.dev/).
- UI powered by [Tailwind CSS](https://tailwindcss.com/).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3e6acd4e-cc3b-415f-a8f2-adf57b2ef4c0) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
