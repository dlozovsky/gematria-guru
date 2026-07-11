import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "The Ultimate English Gematria Value Chart | Gematria Guru" },
  description:
    "Master the numerical essence of the English language. Explore comprehensive value charts for English Ordinal, Pythagorean Reduction, Sumerian, and Jewish Gematria systems.",
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
      "Master the numerical essence of the English language. Explore comprehensive value charts for English Ordinal, Pythagorean Reduction, Sumerian, and Jewish Gematria systems.",
    url: "https://www.gematriaguru.com/english-gematria-value-chart",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Ultimate English Gematria Value Chart",
  description:
    "Master the numerical essence of the English language. Explore comprehensive value charts for English Ordinal, Pythagorean Reduction, Sumerian, and Jewish Gematria systems.",
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
    <p>Master the numerical essence of the English language. Explore comprehensive value charts for English Ordinal, Pythagorean Reduction, Sumerian, and Jewish Gematria systems.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/af13464f-a056-4648-b133-923e800bd834" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>Understanding English Gematria</h2>
    <p>Gematria is an ancient practice, traditionally rooted in Hebrew and Greek, that assigns numerical values to letters. While it began with the 22 letters of the Hebrew alphabet, the same esoteric principles have been adapted to the 26-letter English alphabet. An <strong>English Gematria value chart</strong> serves as the foundational map for this practice, allowing practitioners to convert words, phrases, and names into numerical signatures.</p>
    <p>At <a href="https://www.gematriaguru.com/">Gematria Guru</a>, we believe that numbers are a universal language. By using a standardized English Gematria value chart, you can uncover hidden linguistic patterns, explore biblical numerology, and find synchronicity between seemingly unrelated words. Whether you are a student of Kabbalah or a curious linguist, understanding these charts is the first step toward deeper alphanumeric analysis.</p>
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
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/ddb5a1e5-f37b-48c0-a245-12653416c7ce" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
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
          </tr>
        </thead>
        <tbody>
          <tr><td>A</td><td>1</td><td>1</td><td>26</td></tr>
          <tr><td>B</td><td>2</td><td>2</td><td>25</td></tr>
          <tr><td>C</td><td>3</td><td>3</td><td>24</td></tr>
          <tr><td>D</td><td>4</td><td>4</td><td>23</td></tr>
          <tr><td>E</td><td>5</td><td>5</td><td>22</td></tr>
          <tr><td>F</td><td>6</td><td>6</td><td>21</td></tr>
          <tr><td>G</td><td>7</td><td>7</td><td>20</td></tr>
          <tr><td>H</td><td>8</td><td>8</td><td>19</td></tr>
          <tr><td>I</td><td>9</td><td>9</td><td>18</td></tr>
          <tr><td>J</td><td>10</td><td>1</td><td>17</td></tr>
          <tr><td>K</td><td>11</td><td>2</td><td>16</td></tr>
          <tr><td>L</td><td>12</td><td>3</td><td>15</td></tr>
          <tr><td>M</td><td>13</td><td>4</td><td>14</td></tr>
          <tr><td>N</td><td>14</td><td>5</td><td>13</td></tr>
          <tr><td>O</td><td>15</td><td>6</td><td>12</td></tr>
          <tr><td>P</td><td>16</td><td>7</td><td>11</td></tr>
          <tr><td>Q</td><td>17</td><td>8</td><td>10</td></tr>
          <tr><td>R</td><td>18</td><td>9</td><td>9</td></tr>
          <tr><td>S</td><td>19</td><td>1</td><td>8</td></tr>
          <tr><td>T</td><td>20</td><td>2</td><td>7</td></tr>
          <tr><td>U</td><td>21</td><td>3</td><td>6</td></tr>
          <tr><td>V</td><td>22</td><td>4</td><td>5</td></tr>
          <tr><td>W</td><td>23</td><td>5</td><td>4</td></tr>
          <tr><td>X</td><td>24</td><td>6</td><td>3</td></tr>
          <tr><td>Y</td><td>25</td><td>7</td><td>2</td></tr>
          <tr><td>Z</td><td>26</td><td>8</td><td>1</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lp-section">
    <h2>Advanced English Ciphers</h2>
    <h3>English Sumerian Gematria</h3>
    <p>The English Sumerian system is unique because it is based on the number 6. To find a letter's value in this system, you take its Ordinal position and multiply it by 6 (A=6, B=12, C=18... Z=156). This system is highly regarded by researchers looking for connections to time (60 seconds/minutes) and the physical geometry of the Earth.</p>
    <h3>Jewish (Latin) Gematria</h3>
    <p>This is a sophisticated mapping system where English letters are assigned the values of their phonetic Hebrew counterparts. For example:</p>
    <ul class="lp-list">
      <li><strong>A, I, J, Y:</strong> Value 1 (Aleph/Yod)</li>
      <li><strong>B:</strong> Value 2 (Bet)</li>
      <li><strong>S:</strong> Value 60 (Samekh)</li>
      <li><strong>T:</strong> Value 400 (Tav)</li>
    </ul>
    <p>This chart is essential for those who want to apply traditional Kabbalistic interpretations to English words. You can explore these visual maps further on our <a href="https://www.gematriaguru.com/number-maps">Number Reference Maps</a> page.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/dd2cd23a-ae65-4eef-a840-82b0344fa460" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>How to Choose the Right Value Chart</h2>
    <p>With so many charts available, users often ask which one is "correct." The answer depends on the intent of your study:</p>
    <div class="lp-grid">
      <div class="lp-card">
        <strong>For General Study:</strong> Use the <strong>English Ordinal</strong> chart. It is the most common and provides the most relatable mathematical connections in the English language.
      </div>
      <div class="lp-card">
        <strong>For Spiritual/Esoteric:</strong> Use <strong>Jewish Gematria</strong> or <strong>Sumerian</strong>. These charts bridge the gap between ancient traditions and modern English.
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
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/9047f4c6-6a44-44a0-ad32-dae349ec393a" alt="Landing page illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
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
    <p>Put these value charts to work. Use our comprehensive, free tool to instantly calculate English and Hebrew Gematria across all major systems.</p>
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
