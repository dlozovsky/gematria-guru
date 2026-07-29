import type { Metadata } from "next";
import { ENGLISH_LETTER_TABLE } from "@/lib/gematriaReference";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "The Ultimate English Gematria Value Chart | Gematria Guru" },
  description:
    "Full English letter value tables for Ordinal, Reverse, Pythagorean reduction and Sumerian. Every letter listed, with the arithmetic shown and the Hebrew systems alongside.",
  keywords: [
    "english gematria chart",
    "english ordinal gematria",
    "pythagorean gematria",
    "sumerian gematria",
    "jewish gematria chart",
    "gematria value table",
    "english alphabet gematria values",
  ],
  alternates: { canonical: "https://www.gematriaguru.com/english-gematria-value-chart" },
  openGraph: {
    title: "The Ultimate English Gematria Value Chart",
    description:
      "Full English letter value tables for Ordinal, Reverse, Pythagorean reduction and Sumerian. Every letter listed, with the arithmetic shown and the Hebrew systems alongside.",
    url: "https://www.gematriaguru.com/english-gematria-value-chart",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Ultimate English Gematria Value Chart",
  description:
    "Full English letter value tables for Ordinal, Reverse, Pythagorean reduction and Sumerian. Every letter listed, with the arithmetic shown and the Hebrew systems alongside.",
  publisher: { "@type": "Organization", name: "Gematria Guru", url: "https://www.gematriaguru.com" },
  url: "https://www.gematriaguru.com/english-gematria-value-chart",
};

const LP_CSS = `
  :root {
    --lp-primary-color: #1a237e;
    --lp-secondary-color: #c5a059;
    --lp-text-color: #333333;
    --lp-bg-light: #f4f7f9;
    --lp-white: #ffffff;
    --lp-border: #e0e0e0;
    --lp-accent-hover: #b38f4d;
  }

  .lp-wrapper {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--lp-text-color);
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--lp-white);
  }

  .lp-wrapper .lp-hero {
    background: linear-gradient(135deg, var(--lp-primary-color) 0%, #283593 100%);
    color: var(--lp-white);
    padding: 60px 40px;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 40px;
  }

  .lp-wrapper .lp-hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  .lp-wrapper .lp-hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }

  .lp-wrapper .lp-section {
    margin-bottom: 50px;
  }

  .lp-wrapper .lp-section h2 {
    font-size: 2.2rem;
    color: var(--lp-primary-color);
    border-bottom: 3px solid var(--lp-secondary-color);
    display: inline-block;
    margin-bottom: 25px;
    padding-bottom: 5px;
  }

  .lp-wrapper .lp-section h3 {
    font-size: 1.6rem;
    color: var(--lp-primary-color);
    margin-top: 30px;
  }

  .lp-wrapper .lp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .lp-wrapper .lp-card {
    background: var(--lp-bg-light);
    padding: 25px;
    border-radius: 8px;
    border-left: 5px solid var(--lp-secondary-color);
  }

  .lp-wrapper .lp-table-container {
    overflow-x: auto;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-radius: 8px;
  }

  .lp-wrapper .lp-value-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--lp-white);
  }

  .lp-wrapper .lp-value-table th {
    background-color: var(--lp-primary-color);
    color: var(--lp-white);
    padding: 15px;
    text-align: center;
  }

  .lp-wrapper .lp-value-table td {
    padding: 12px;
    text-align: center;
    border: 1px solid var(--lp-border);
  }

  .lp-wrapper .lp-value-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .lp-wrapper .lp-value-table tr:hover {
    background-color: #fff9ed;
  }

  .lp-wrapper .lp-highlight-box {
    background-color: #fffde7;
    border: 1px solid #fff59d;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    font-style: italic;
  }

  .lp-wrapper .lp-faq-container {
    margin-top: 40px;
  }

  .lp-wrapper .lp-faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid var(--lp-border);
    padding-bottom: 15px;
  }

  .lp-wrapper .lp-faq-question {
    font-weight: 700;
    color: var(--lp-primary-color);
    font-size: 1.2rem;
    margin-bottom: 10px;
    display: block;
  }

  .lp-wrapper .lp-cta-section {
    background: var(--lp-bg-light);
    padding: 50px;
    text-align: center;
    border-radius: 12px;
    margin-top: 60px;
  }

  .lp-wrapper .lp-btn {
    display: inline-block;
    background-color: var(--lp-secondary-color);
    color: var(--lp-white);
    padding: 15px 35px;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 700;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    font-size: 1.1rem;
  }

  .lp-wrapper .lp-btn:hover {
    background-color: var(--lp-accent-hover);
  }

  .lp-wrapper .lp-list {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .lp-wrapper .lp-list li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .lp-wrapper .lp-hero h1 { font-size: 2rem; }
    .lp-wrapper .lp-section h2 { font-size: 1.8rem; }
    .lp-wrapper .lp-hero { padding: 40px 20px; }
    .lp-wrapper .lp-cta-section { padding: 30px 15px; }
  }
`;

const LP_HTML = `
<article class="lp-wrapper">

  <section class="lp-hero">
    <h1>The Ultimate English Gematria Value Chart</h1>
    <p>Full letter value tables for English Ordinal, English Reverse, Pythagorean reduction and English Sumerian, with every letter listed and the arithmetic shown.</p>
  </section>

  <section class="lp-section">
    <h2>Understanding English Gematria</h2>
    <p>Gematria is an ancient practice, traditionally rooted in Hebrew and Greek, that assigns numerical values to letters. While it began with the 22 letters of the Hebrew alphabet, the same esoteric principles have been adapted to the 26-letter English alphabet. An <strong>English Gematria value chart</strong> serves as the foundational map for this practice, allowing practitioners to convert words, phrases, and names into numerical signatures.</p>
    <p>A standardised value chart is what makes results comparable. Once the letter values are fixed, two words can be checked against each other, a total can be verified by hand, and a claim about a shared value can be tested rather than taken on trust.</p>
  </section>

  <section class="lp-section">
    <h2>The Core English Gematria Systems</h2>
    <p>Not all gematria is calculated the same way. Depending on the tradition or the specific analysis being performed, different charts are used. Below are the most significant English value charts utilized today.</p>
    <div class="lp-grid">
      <div class="lp-card">
        <h3>English Ordinal (Simple)</h3>
        <p>The most straightforward system where A=1, B=2, and Z=26. It is the standard entry point for English numerology and is widely used for modern linguistic connections.</p>
      </div>
      <div class="lp-card">
        <h3>Full Reduction (Pythagorean)</h3>
        <p>Based on Pythagorean principles, every letter is reduced to a single digit (1-9). For example, 'L' is the 12th letter; in reduction, 1+2=3.</p>
      </div>
      <div class="lp-card">
        <h3>Reverse Ordinal</h3>
        <p>A mirror of the Ordinal system where Z=1 and A=26. This system is often used to find the "hidden" or "shadow" value of a word.</p>
      </div>
    </div>
  </section>

  <section class="lp-section">
    <h2>Master English Gematria Value Chart (Ordinal &amp; Reduction)</h2>
    <p>Use the table below as your primary reference for the two most common English systems. This chart allows you to manually calculate the value of any name or phrase.</p>
    <div class="lp-table-container">
      <table class="lp-value-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Ordinal (Simple)</th>
            <th>Full Reduction</th>
            <th>Reverse Ordinal</th>
            <th>Sumerian</th>
          </tr>
        </thead>
        <tbody>
${ENGLISH_LETTER_TABLE.map(
  (r) =>
    `          <tr><td>${r.letter}</td><td>${r.ordinal}</td><td>${r.pythagorean}</td><td>${r.reverse}</td><td>${r.sumerian}</td></tr>`
).join("\n")}
        </tbody>
      </table>
    </div>
  </section>

  <section class="lp-section">
    <h2>Advanced English Ciphers</h2>
    <h3>English Sumerian Gematria</h3>
    <p>The English Sumerian system is unique because it is based on the number 6. To find a letter's value in this system, you take its Ordinal position and multiply it by 6 (A=6, B=12, C=18... Z=156). This system is highly regarded by researchers looking for connections to time (60 seconds/minutes) and the physical geometry of the Earth.</p>
    <h3>Applying Hebrew values to English words</h3>
    <p>Some calculators publish a fixed table that assigns each English letter a Hebrew value directly, for example treating A, I, J and Y as 1 and T as 400. There is no single agreed version of that table, and different sites disagree about several letters.</p>
    <p>This calculator takes a different route. Latin input is transliterated into Hebrew letters first, and the standard Hebrew values are then applied to the result. Because the outcome depends on how a word is spelled in Hebrew, the result is labelled a transliteration-assisted estimate rather than a fixed value, and the Hebrew spelling used is shown alongside it so you can check or override it. You can explore the same values on our <a href="https://www.gematriaguru.com/number-maps">Number Reference Maps</a> page.</p>
  </section>

  <section class="lp-section">
    <h2>How to Choose the Right Value Chart</h2>
    <p>With so many charts available, users often ask which one is "correct." The answer depends on the intent of your study:</p>
    <div class="lp-grid">
      <div class="lp-card">
        <strong>For General Study:</strong> Use the <strong>English Ordinal</strong> chart. It is the most common and provides the most relatable mathematical connections in the English language.
      </div>
      <div class="lp-card">
        <strong>For Spiritual/Esoteric:</strong> Use <strong>Jewish Gematria</strong> or <strong>English Sumerian</strong>. These bridge the gap between ancient traditions and modern English.
      </div>
      <div class="lp-card">
        <strong>For Root Analysis:</strong> Use <strong>Full Reduction</strong>. By stripping numbers down to their single-digit roots (1-9), you can find the core "vibration" of a word.
      </div>
    </div>
  </section>

  <section class="lp-section">
    <h2>Step-by-Step: How to Calculate Using the Chart</h2>
    <p>Manual calculation is a meditative practice that helps you connect with the letters. Here is how to do it:</p>
    <ol class="lp-list">
      <li><strong>Write down your word:</strong> Example: "TRUTH".</li>
      <li><strong>Select your chart:</strong> Let's use English Ordinal.</li>
      <li><strong>Identify values:</strong> T=20, R=18, U=21, T=20, H=8.</li>
      <li><strong>Sum the numbers:</strong> 20 + 18 + 21 + 20 + 8 = 87.</li>
      <li><strong>Compare:</strong> Use our <a href="https://www.gematriaguru.com/blog">blog resources</a> to see other words that share the value 87.</li>
    </ol>
    <div class="lp-highlight-box">
      Tip: In English Gematria, spaces and punctuation are traditionally ignored. Focus strictly on the 26 letters of the alphabet.
    </div>
  </section>

  <section class="lp-section lp-faq-container">
    <h2>Frequently Asked Questions</h2>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Why does 'A' sometimes equal 1 and sometimes 6 or 26?</span>
      <p>This depends on the cipher system (chart) you are using. In English Ordinal, A is 1. In Sumerian, it is 6 (1x6). In Reverse Ordinal, it is 26. Each system offers a different perspective on the word's meaning.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">What is the most powerful English Gematria system?</span>
      <p>There is no "most powerful" system, but the English Ordinal and Full Reduction systems are the most popular due to their consistency and ease of use in modern English analysis.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Does Gematria Guru support all these charts?</span>
      <p>Yes! Our <a href="https://www.gematriaguru.com/">free online calculator</a> automatically computes values across six distinct cipher systems simultaneously, so you don't have to do the math manually.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Are there charts for the 24-letter English alphabet?</span>
      <p>Historically, yes. In the 16th century, "I/J" and "U/V" were often combined. However, modern gematria almost exclusively uses the standard 26-letter Latin alphabet for accuracy with contemporary spelling.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Where can I find meanings for the numbers I calculate?</span>
      <p>You can browse our <a href="https://www.gematriaguru.com/number-maps">Number Reference Maps</a> or visit our <a href="https://www.gematriaguru.com/blog">Gematria Blog</a> for detailed guides on number meanings and biblical correlations.</p>
    </div>
  </section>

  <section class="lp-cta-section">
    <h2>Ready to Calculate?</h2>
    <p>Put the charts to work. The calculator computes English, Hebrew and Greek values from the same tables shown on this page.</p>
    <a href="https://www.gematriaguru.com/" class="lp-btn">Open Gematria Calculator</a>
    <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">
      Explore more resources:
      <a href="https://www.gematriaguru.com/learning">Learning Hub</a> |
      <a href="https://www.gematriaguru.com/about">About the Tool</a>
    </p>
  </section>

</article>
`;

export default function EnglishGematriaValueChart() {
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
