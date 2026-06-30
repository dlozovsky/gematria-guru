import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "English to Hebrew Gematria: The Ultimate Guide | Gematria Guru" },
  description:
    "Explore the mystical intersection of language and mathematics. Use our comprehensive English to Hebrew Gematria tools to uncover the hidden numerical patterns within your words and phrases.",
  keywords: [
    "english to hebrew gematria",
    "english gematria calculator",
    "gematria cipher systems",
    "hebrew numerology",
    "english simple gematria",
    "gematria english alphabet",
    "hebrew letter values english",
  ],
  alternates: { canonical: "https://www.gematriaguru.com/english-to-hebrew-gematria" },
  openGraph: {
    title: "English to Hebrew Gematria: The Ultimate Guide",
    description:
      "Explore the mystical intersection of language and mathematics. Use our comprehensive English to Hebrew Gematria tools to uncover the hidden numerical patterns within your words and phrases.",
    url: "https://www.gematriaguru.com/english-to-hebrew-gematria",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "English to Hebrew Gematria: The Ultimate Guide",
  description:
    "Explore the mystical intersection of language and mathematics. Use our comprehensive English to Hebrew Gematria tools to uncover the hidden numerical patterns within your words and phrases.",
  publisher: { "@type": "Organization", name: "Gematria Guru", url: "https://www.gematriaguru.com" },
  url: "https://www.gematriaguru.com/english-to-hebrew-gematria",
};

const LP_CSS = `
  .lp-container {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
  }

  .lp-hero {
    background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
    color: white;
    padding: 60px 40px;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 40px;
  }

  .lp-hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .lp-hero p {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }

  .lp-section {
    margin-bottom: 50px;
  }

  .lp-section h2 {
    font-size: 2rem;
    color: #1a2a6c;
    border-bottom: 2px solid #fdbb2d;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }

  .lp-section h3 {
    font-size: 1.5rem;
    color: #b21f1f;
    margin-top: 30px;
  }

  .lp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 30px 0;
  }

  .lp-card {
    background: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    border-left: 5px solid #1a2a6c;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .lp-example-box {
    background: #fffef0;
    border: 1px solid #e0d0a0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }

  .lp-table-wrapper {
    overflow-x: auto;
    margin: 30px 0;
  }

  .lp-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  .lp-table th, .lp-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .lp-table th {
    background-color: #1a2a6c;
    color: white;
  }

  .lp-faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .lp-faq-question {
    font-weight: bold;
    color: #1a2a6c;
    font-size: 1.1rem;
    cursor: pointer;
    display: block;
    margin-bottom: 10px;
  }

  .lp-cta-block {
    background-color: #f4f4f4;
    padding: 40px;
    text-align: center;
    border-radius: 12px;
    margin-top: 60px;
  }

  .lp-btn {
    display: inline-block;
    background-color: #b21f1f;
    color: white;
    padding: 15px 35px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease;
    margin-top: 20px;
  }

  .lp-btn:hover {
    background-color: #1a2a6c;
  }

  .lp-highlight {
    color: #b21f1f;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .lp-hero h1 { font-size: 2rem; }
    .lp-hero { padding: 40px 20px; }
    .lp-grid { grid-template-columns: 1fr; }
  }
`;

const LP_HTML = `
<article class="lp-container">

  <section class="lp-hero">
    <h1>English to Hebrew Gematria: The Ultimate Guide</h1>
    <p>Explore the mystical intersection of language and mathematics. Use our comprehensive English to Hebrew Gematria tools to uncover the hidden numerical patterns within your words and phrases.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/2bdefd53-56ac-49c7-9175-e9f91f48b847" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>Bridging Two Worlds Through Numbers</h2>
    <p>Gematria is more than just a calculation; it is an ancient interpretive lens that views letters as numerical values. While traditionally rooted in the 22 letters of the Hebrew alphabet, the practice of <strong>English to Hebrew Gematria</strong> has evolved to help modern seekers find connections between Latin-based languages and the sacred structures of Jewish mysticism.</p>
    <p>At <a href="https://www.gematriaguru.com/">Gematria Guru</a>, we provide the tools to navigate this complexity. Whether you are translating an English concept into its Hebrew equivalent to find its spiritual "root" or using modern English ciphers to see how contemporary words resonate with ancient truths, our platform serves as your definitive resource.</p>
  </section>

  <section class="lp-section">
    <h2>What is English to Hebrew Gematria?</h2>
    <p>English to Hebrew Gematria typically refers to two distinct but related practices:</p>
    <div class="lp-grid">
      <div class="lp-card">
        <h3>1. Transliterated Calculation</h3>
        <p>This involves taking an English word (like "Love"), converting it into Hebrew characters based on phonetics or literal spelling (אהבה - Ahava), and then calculating the value using traditional Hebrew systems.</p>
      </div>
      <div class="lp-card">
        <h3>2. English Cipher Application</h3>
        <p>Applying the principles of Hebrew numerology directly to the English alphabet. This includes systems like "English Simple" (A=1, B=2) or "Pythagorean Numerology" to see how English words stack up against known Hebrew values.</p>
      </div>
    </div>
    <p>The core philosophy, as found in Kabbalistic texts like the <em>Sefer Yitzirah</em> (The Book of Creation), posits that the letters of the alphabet are the "building blocks" of the universe. By analyzing the numerical weight of a word, practitioners believe they can uncover its essential nature or find "conceptual twins"—different words that share the same value.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/44c0fad4-e1e2-45df-979f-4d519ab13f29" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>The Six Essential Cipher Systems</h2>
    <p>To master English to Hebrew Gematria, one must understand the various ways numbers are assigned to letters. Gematria Guru supports six primary systems for comprehensive analysis:</p>
    <div class="lp-table-wrapper">
      <table class="lp-table">
        <thead>
          <tr>
            <th>Cipher System</th>
            <th>Description</th>
            <th>Example: GOD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hebrew Standard</strong></td>
            <td>The absolute value (Mispar Hechrachi). Aleph=1 to Tav=400.</td>
            <td>26 (YHVH)</td>
          </tr>
          <tr>
            <td><strong>English Simple</strong></td>
            <td>The Latin alphabet assigned values 1 through 26 (A=1, Z=26).</td>
            <td>26</td>
          </tr>
          <tr>
            <td><strong>Hebrew Ordinal</strong></td>
            <td>The relative position of the 22 letters in the alphabet (1-22).</td>
            <td>26</td>
          </tr>
          <tr>
            <td><strong>English Reverse</strong></td>
            <td>The Latin alphabet in reverse (A=26, Z=1).</td>
            <td>55</td>
          </tr>
          <tr>
            <td><strong>Mispar Gadol</strong></td>
            <td>Standard values, but "Final" (Sofit) letters have higher values (500-900).</td>
            <td>Variable</td>
          </tr>
          <tr>
            <td><strong>Pythagorean</strong></td>
            <td>Western numerology reducing letters to a 1-9 scale.</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lp-section">
    <h2>Key Interpretations and Word Values</h2>
    <p>Below are common English words and their calculated values using the English Gematria system. These examples illustrate how everyday concepts can be analyzed through a numerical lens:</p>
    <div class="lp-grid">
      <div class="lp-card">
        <p><strong>LOVE</strong></p>
        <p class="lp-highlight">Value: 54</p>
        <p>In Hebrew tradition, the word for love (Ahava) is 13, but the English calculation of 54 offers a different frequency for modern linguistic study.</p>
      </div>
      <div class="lp-card">
        <p><strong>WISDOM</strong></p>
        <p class="lp-highlight">Value: 83</p>
        <p>Wisdom often correlates with high-vibrational insights in multiple systems.</p>
      </div>
      <div class="lp-card">
        <p><strong>PEACE</strong></p>
        <p class="lp-highlight">Value: 49</p>
        <p>49 is 7x7, a significant number representing completion and the counting of the Omer.</p>
      </div>
      <div class="lp-card">
        <p><strong>TRUTH</strong></p>
        <p class="lp-highlight">Value: 87</p>
        <p>In Hebrew, Truth (Emet) is 441, but 87 represents the English path toward that realization.</p>
      </div>
    </div>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/bab21c5a-d59f-4e9f-860b-108e0d5b7763" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>How to Choose Your Gematria Method</h2>
    <p>If you are new to English to Hebrew Gematria, follow these steps to get the most accurate results for your study or meditation:</p>
    <h3>Step 1: Define Your Intent</h3>
    <p>Are you looking for biblical connections? Use the <strong>Hebrew Standard</strong> system. Are you exploring modern synchronicity in the English language? Use <strong>English Simple</strong> or <strong>Pythagorean</strong>.</p>
    <h3>Step 2: Transliteration vs. Calculation</h3>
    <p>To truly bridge English to Hebrew, you must decide how to handle the letters. At Gematria Guru, our <a href="https://www.gematriaguru.com/learning">learning resources</a> explain how to phonetically map English sounds to Hebrew letters before running the calculation.</p>
    <h3>Step 3: Look for the Kolel</h3>
    <p>Remember the <strong>Kolel Rule</strong>. In Hebrew tradition, you can add or subtract 1 from a total value. This "unit" represents the word as a whole and often reveals hidden connections that are off by just one digit.</p>
    <div class="lp-example-box">
      <p><strong>Pro Tip:</strong> Compare the value of <strong>Elohim (86)</strong> with the Hebrew word for "The Nature" (HaTeva). Both equal 86, suggesting a deep connection between the Creator and the natural world. Use our <a href="https://www.gematriaguru.com/number-maps">Number Reference Maps</a> to find these patterns.</p>
    </div>
  </section>

  <section class="lp-section">
    <h2>The Mystical Roots of Numerical Analysis</h2>
    <p>The practice of Gematria was utilized by the <strong>Soferim</strong> (scribes) to ensure the accuracy of sacred texts. By counting the numerical values of verses, they could confirm that no letters were added or removed. Over time, this evolved into a method of <em>exegesis</em>—the interpretation of hidden meanings within the text.</p>
    <p>Key numerical pairs to watch for in your calculations include:</p>
    <ul>
      <li><strong>18 (Chai):</strong> The symbol for life. Many practitioners look for words that result in 18 or multiples thereof as a sign of vitality and blessing.</li>
      <li><strong>26 (Tetragrammaton):</strong> The value of the four-letter name of God. This is the most sought-after value in English to Hebrew gematria.</li>
      <li><strong>666:</strong> While often misunderstood, in Gematria this number is famously linked to historical figures like Emperor Nero through Hebrew transliteration (<em>Neron Kesar</em>).</li>
    </ul>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/d49c8aa6-16c6-4868-8e2e-724d38a3aeb2" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>Frequently Asked Questions</h2>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Is English Gematria as "accurate" as Hebrew Gematria?</span>
      <p>Gematria is a tool for interpretation rather than a fixed science. While Hebrew Gematria has thousands of years of tradition, English Gematria is a modern adaptation that allows English speakers to apply the same spiritual logic to their native tongue.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">What is the difference between "Strict" and "Assisted" calculation modes?</span>
      <p>On Gematria Guru, "Strict" mode adheres to traditional rules, while "Assisted" mode helps suggest common Hebrew equivalents for English phonetic sounds, making it easier to bridge the two languages.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Can I use Gematria for fortune-telling?</span>
      <p>Traditionally, Gematria is used for textual analysis, meditation, and finding conceptual connections (exegesis). It is not intended as a tool for predicting the future, but rather for understanding the essence of the present.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Why do different calculators give different results?</span>
      <p>This is usually due to the cipher system being used. A word will have a different value in "English Simple" compared to "Pythagorean." Always check which system is active in your calculator settings.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">What are the "Sofit" or Final letters?</span>
      <p>In the Hebrew alphabet, five letters (Khaf, Mem, Nun, Pe, Tzadi) change their shape when they appear at the end of a word. In the <strong>Mispar Gadol</strong> system, these final letters are assigned much higher values (500 through 900).</p>
    </div>
  </section>

  <section class="lp-cta-block">
    <h2>Begin Your Numerical Exploration</h2>
    <p>Ready to uncover the hidden values in your name, favorite phrases, or sacred texts? Gematria Guru offers the most comprehensive free tool for English and Hebrew analysis.</p>
    <a href="https://www.gematriaguru.com/" class="lp-btn">Open Free Gematria Calculator</a>
    <p style="margin-top: 20px; font-size: 0.9rem;">
      Explore our <a href="https://www.gematriaguru.com/number-maps">Number Maps</a> or read the <a href="https://www.gematriaguru.com/blog">Gematria Blog</a> to deepen your knowledge.
    </p>
  </section>

</article>
`;

export default function EnglishToHebrewGematria() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavHeader />
      <main className="flex-1">
        <style dangerouslySetInnerHTML={{ __html: LP_CSS }} />
        <div dangerouslySetInnerHTML={{ __html: LP_HTML }} />
      </main>
      <NavFooter />
    </div>
  );
}
