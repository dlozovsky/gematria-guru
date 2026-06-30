import type { Metadata } from "next";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";

export const metadata: Metadata = {
  title: { absolute: "2026 Master Reference Chart: Hebrew Alphabet Gematria Values | Gematria Guru" },
  description:
    "Your definitive guide to Hebrew alphabet gematria values. Explore Mispar Hechrachi, Mispar Gadol, and Mispar Katan values for all 22 letters and 5 Soffit forms — the complete 2026 reference chart.",
  keywords: [
    "hebrew alphabet gematria",
    "mispar hechrachi",
    "mispar gadol",
    "mispar katan",
    "hebrew letter values",
    "gematria chart 2026",
    "hebrew gematria reference",
  ],
  alternates: { canonical: "https://www.gematriaguru.com/hebrew-gematria-reference-chart-2026" },
  openGraph: {
    title: "2026 Master Reference Chart: Hebrew Alphabet Gematria Values",
    description:
      "Your definitive guide to Hebrew alphabet gematria values. Explore Mispar Hechrachi, Mispar Gadol, and Mispar Katan for all 22 letters and 5 Soffit forms.",
    url: "https://www.gematriaguru.com/hebrew-gematria-reference-chart-2026",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2026 Master Reference Chart: Hebrew Alphabet Gematria Values",
  description:
    "Your definitive guide to the numerical architecture of the Hebrew language. Explore Mispar Hechrachi, Mispar Gadol, and Mispar Katan values for spiritual study and linguistic analysis.",
  publisher: { "@type": "Organization", name: "Gematria Guru", url: "https://www.gematriaguru.com" },
  url: "https://www.gematriaguru.com/hebrew-gematria-reference-chart-2026",
};

const LP_CSS = `
  .lp-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
  }
  .lp-hero {
    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
    color: #ffffff;
    padding: 60px 40px;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 40px;
  }
  .lp-hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    color: #ffd700;
    line-height: 1.2;
  }
  .lp-hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }
  .lp-section {
    margin-bottom: 50px;
  }
  .lp-section h2 {
    font-size: 2rem;
    color: #1a237e;
    border-bottom: 3px solid #ffd700;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }
  .lp-section h3 {
    font-size: 1.5rem;
    color: #283593;
    margin-top: 30px;
  }
  .lp-table-container {
    width: 100%;
    overflow-x: auto;
    margin: 30px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-radius: 8px;
  }
  .lp-reference-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
  }
  .lp-reference-table th {
    background-color: #1a237e;
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  .lp-reference-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 0.95rem;
  }
  .lp-reference-table tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  .lp-reference-table tr:hover {
    background-color: #f1f3f9;
  }
  .lp-letter-glyph {
    font-family: "Times New Roman", serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #1a237e;
    text-align: center;
  }
  .lp-highlight-box {
    background-color: #fff9c4;
    padding: 25px;
    border-left: 5px solid #fbc02d;
    margin: 30px 0;
    border-radius: 0 8px 8px 0;
  }
  .lp-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 30px;
  }
  .lp-card {
    background: #f1f3f9;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #d1d9e6;
  }
  .lp-faq-container {
    margin-top: 40px;
  }
  .lp-faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }
  .lp-faq-question {
    font-weight: bold;
    color: #1a237e;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 8px;
  }
  .lp-cta-block {
    text-align: center;
    background: #1a237e;
    color: white;
    padding: 50px 30px;
    border-radius: 12px;
    margin-top: 60px;
  }
  .lp-cta-button {
    display: inline-block;
    background-color: #ffd700;
    color: #1a237e;
    padding: 15px 35px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: transform 0.2s, background-color 0.2s;
    margin-top: 25px;
  }
  .lp-cta-button:hover {
    transform: scale(1.05);
    background-color: #ffecb3;
  }
  .lp-tag {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .lp-tag-system { background: #e8eaf6; color: #3f51b5; }
  @media (max-width: 768px) {
    .lp-grid { grid-template-columns: 1fr; }
    .lp-hero h1 { font-size: 2rem; }
    .lp-container { padding: 10px; }
  }
`;

const LP_HTML = `
<article class="lp-container">
  <section class="lp-hero">
    <span class="lp-tag" style="background: rgba(255,215,0,0.2); color: #ffd700;">OFFICIAL 2026 EDITION</span>
    <h1>2026 Master Reference Chart: Hebrew Alphabet Gematria Values</h1>
    <p>Your definitive guide to the numerical architecture of the Hebrew language. Explore Mispar Hechrachi, Mispar Gadol, and Mispar Katan values for spiritual study and linguistic analysis.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/89f1dd9b-9eb2-458f-98af-b7a38b1fd928" alt="Hebrew gematria illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>The Significance of Gematria in 2026</h2>
    <p>As we navigate the year 2026, the study of Gematria—the ancient practice of assigning numerical values to Hebrew letters—takes on profound new dimensions. In the Hebrew calendar, 2026 aligns largely with the year <strong>5786 (תשפ״ו)</strong>. This year is particularly noteworthy for two primary reasons:</p>
    <div class="lp-grid">
      <div class="lp-card">
        <h3>The Year of the Vav</h3>
        <p>In the Hebrew year 5786, the final digit is <strong>6</strong>, which corresponds to the letter <strong>Vav (ו)</strong>. Symbolically, the Vav represents a "hook" or a "connector." It is the vertical line that bridges Heaven and Earth. For practitioners of Gematria, 2026 is a year dedicated to connection, integration, and grounding spiritual insights into physical reality.</p>
      </div>
      <div class="lp-card">
        <h3>The "26" Connection</h3>
        <p>The number 26 is the numerical value of the <strong>Tetragrammaton (YHVH)</strong>—the most sacred four-letter name of the Divine in Hebrew tradition (Yud=10, Hey=5, Vav=6, Hey=5). The appearance of "26" within the Gregorian year 2026 signals a "Master Year" for those exploring covenantal patterns and divine presence through numbers.</p>
      </div>
    </div>
    <p style="margin-top: 20px;">Furthermore, in universal numerology, 2026 is a <strong>Universal Year 1</strong> (2+0+2+6 = 10 → 1). This signifies new beginnings, leadership, and the "Road Less Traveled," making it the perfect time to master the foundational building blocks of creation: the 22 letters of the Hebrew Aleph-Bet.</p>
  </section>

  <section class="lp-section">
    <h2>2026 Master Reference Chart</h2>
    <p>This comprehensive table maps the 22 standard letters and the 5 Soffit (final) forms across the most utilized cipher systems. Whether you are using our <a href="https://www.gematriaguru.com/">Gematria Calculator</a> or performing manual calculations, this chart serves as your primary key.</p>
    <div class="lp-table-container">
      <table class="lp-reference-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Name</th>
            <th>Phonetic</th>
            <th>Standard (Hechrachi)</th>
            <th>Great (Gadol)</th>
            <th>Small (Katan)</th>
            <th>Symbolic Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="lp-letter-glyph">א</td><td>Aleph</td><td>' (Silent)</td><td>1</td><td>1</td><td>1</td><td>Unity, The Divine, Source</td></tr>
          <tr><td class="lp-letter-glyph">ב</td><td>Bet</td><td>B / V</td><td>2</td><td>2</td><td>2</td><td>House, Container, Duality</td></tr>
          <tr><td class="lp-letter-glyph">ג</td><td>Gimel</td><td>G</td><td>3</td><td>3</td><td>3</td><td>Bridge, Camel, Kindness</td></tr>
          <tr><td class="lp-letter-glyph">ד</td><td>Dalet</td><td>D</td><td>4</td><td>4</td><td>4</td><td>Door, Humility, Dimension</td></tr>
          <tr><td class="lp-letter-glyph">ה</td><td>Hey</td><td>H</td><td>5</td><td>5</td><td>5</td><td>Window, Breath, Expression</td></tr>
          <tr><td class="lp-letter-glyph">ו</td><td>Vav</td><td>V / O / U</td><td>6</td><td>6</td><td>6</td><td>Hook, Connection, Man</td></tr>
          <tr><td class="lp-letter-glyph">ז</td><td>Zayin</td><td>Z</td><td>7</td><td>7</td><td>7</td><td>Weapon, Crown, Time</td></tr>
          <tr><td class="lp-letter-glyph">ח</td><td>Chet</td><td>Ch (Guttural)</td><td>8</td><td>8</td><td>8</td><td>Fence, Life, Vitality</td></tr>
          <tr><td class="lp-letter-glyph">ט</td><td>Tet</td><td>T</td><td>9</td><td>9</td><td>9</td><td>Snake, Hidden Good, Womb</td></tr>
          <tr><td class="lp-letter-glyph">י</td><td>Yud</td><td>Y / I</td><td>10</td><td>10</td><td>1</td><td>Hand, Infinite Point, Seed</td></tr>
          <tr><td class="lp-letter-glyph">כ</td><td>Kaf</td><td>K / Ch</td><td>20</td><td>20</td><td>2</td><td>Palm, Potential, Actualization</td></tr>
          <tr><td class="lp-letter-glyph">ל</td><td>Lamed</td><td>L</td><td>30</td><td>30</td><td>3</td><td>Goad, Learning, Aspiration</td></tr>
          <tr><td class="lp-letter-glyph">מ</td><td>Mem</td><td>M</td><td>40</td><td>40</td><td>4</td><td>Water, Flow, Revealed Knowledge</td></tr>
          <tr><td class="lp-letter-glyph">נ</td><td>Nun</td><td>N</td><td>50</td><td>50</td><td>5</td><td>Fish, Emergence, Faithfulness</td></tr>
          <tr><td class="lp-letter-glyph">ס</td><td>Samech</td><td>S</td><td>60</td><td>60</td><td>6</td><td>Support, Cycle, Protection</td></tr>
          <tr><td class="lp-letter-glyph">ע</td><td>Ayin</td><td>' (Silent)</td><td>70</td><td>70</td><td>7</td><td>Eye, Vision, Perception</td></tr>
          <tr><td class="lp-letter-glyph">פ</td><td>Pei</td><td>P / Ph</td><td>80</td><td>80</td><td>8</td><td>Mouth, Speech, Communication</td></tr>
          <tr><td class="lp-letter-glyph">צ</td><td>Tzadi</td><td>Tz</td><td>90</td><td>90</td><td>9</td><td>Righteousness, Harvest, Hook</td></tr>
          <tr><td class="lp-letter-glyph">ק</td><td>Kuf</td><td>K</td><td>100</td><td>100</td><td>1</td><td>Back of Head, Holiness, Growth</td></tr>
          <tr><td class="lp-letter-glyph">ר</td><td>Resh</td><td>R</td><td>200</td><td>200</td><td>2</td><td>Head, Beginning, Poverty</td></tr>
          <tr><td class="lp-letter-glyph">ש</td><td>Shin</td><td>Sh / S</td><td>300</td><td>300</td><td>3</td><td>Teeth, Fire, Divine Presence</td></tr>
          <tr><td class="lp-letter-glyph">ת</td><td>Tav</td><td>T</td><td>400</td><td>400</td><td>4</td><td>Mark, Seal, Truth, Completion</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/94aab912-c767-43a9-bebc-b88844e32b5d" alt="Hebrew final letter forms illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>The 5 Soffit (Final) Forms</h2>
    <p>In Hebrew, five letters change their shape when they appear at the end of a word. In the <strong>Mispar Gadol</strong> system, these final forms are assigned higher values (500–900), whereas in the Standard system, they retain the value of their non-final counterparts.</p>
    <div class="lp-table-container">
      <table class="lp-reference-table">
        <thead>
          <tr>
            <th>Final Letter</th>
            <th>Name</th>
            <th>Standard Value</th>
            <th>Mispar Gadol Value</th>
            <th>Mispar Katan Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="lp-letter-glyph">ך</td><td>Kaf Soffit</td><td>20</td><td>500</td><td>5</td></tr>
          <tr><td class="lp-letter-glyph">ם</td><td>Mem Soffit</td><td>40</td><td>600</td><td>6</td></tr>
          <tr><td class="lp-letter-glyph">ן</td><td>Nun Soffit</td><td>50</td><td>700</td><td>7</td></tr>
          <tr><td class="lp-letter-glyph">ף</td><td>Pei Soffit</td><td>80</td><td>800</td><td>8</td></tr>
          <tr><td class="lp-letter-glyph">ץ</td><td>Tzadi Soffit</td><td>90</td><td>900</td><td>9</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lp-section">
    <h2>Understanding the 6 Traditional Cipher Systems</h2>
    <p>To truly master the <a href="https://www.gematriaguru.com/number-maps">Number Reference Maps</a> of the Hebrew alphabet, one must understand how different systems are applied to the same letters.</p>
    <div class="lp-highlight-box">
      <strong>Pro Tip:</strong> Most biblical study begins with <em>Mispar Hechrachi</em>. If you are looking for deeper mystical connections or "near-matches," practitioners often look toward <em>Mispar Katan</em> or <em>Mispar Kolel</em>.
    </div>
    <h3>1. Mispar Hechrachi (Standard Gematria)</h3>
    <p>This is the most common system. Letters 1–9 are units, 10–90 are tens, and 100–400 are hundreds. It provides the baseline for almost all Gematria analysis found in the Torah and Talmud.</p>
    <h3>2. Mispar Gadol (The Great System)</h3>
    <p>In this system, the five final (Soffit) letters are not treated as 20, 40, 50, 80, and 90. Instead, they continue the numerical sequence after Tav (400), taking on values from 500 up to 900.</p>
    <h3>3. Mispar Katan (Small Value / Reduced)</h3>
    <p>This system reduces every letter to its single-digit root by ignoring zeros. For example, Yud (10) becomes 1, Kaf (20) becomes 2, and Tav (400) becomes 4. This is used to find the "essential" vibration of a word.</p>
    <h3>4. Mispar Siduri (Ordinal Gematria)</h3>
    <p>This ignores the traditional numerical values and simply counts the letter's position in the alphabet (1 through 22). Aleph is 1, Yud is 10, and Tav is 22.</p>
    <h3>5. Mispar Atbash (Reverse Gematria)</h3>
    <p>Atbash is a substitution cipher where the first letter (Aleph) is replaced by the last (Tav), the second (Bet) by the second to last (Shin), and so on. The Gematria value is then calculated based on the substituted letters.</p>
    <h3>6. Mispar Kolel</h3>
    <p>This is a method of finding connections by adding "1" to the total value of a word. The "1" represents the word as a single unit or the Divine source behind the word. It allows for "near-matches" in textual analysis.</p>
  </section>

  <section class="lp-section">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/3ea13533-3673-4e42-b855-991340f93eb2" alt="Gematria study illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>Why Gematria Matters Today</h2>
    <p>The practice of Gematria dates back thousands of years in Jewish tradition, where scholars like the <em>Baal HaTurim</em> would find connections between seemingly unrelated words that shared the same numerical value. Today, it remains a vital tool for:</p>
    <ul>
      <li><strong>Biblical Interpretation:</strong> Uncovering layers of meaning in the Tanakh that are not visible through literal translation.</li>
      <li><strong>Kabbalistic Study:</strong> Understanding the 22 "Building Blocks" of creation as described in the <em>Sefer Yetzirah</em>.</li>
      <li><strong>Personal Reflection:</strong> Finding numerical patterns in names, dates, and life events to gain spiritual perspective.</li>
      <li><strong>Linguistic Research:</strong> Exploring the mathematical symmetry inherent in the Hebrew language.</li>
    </ul>
    <p>For a deeper dive into the mechanics of these systems, visit our <a href="https://www.gematriaguru.com/learning">Gematria Learning Center</a>.</p>
  </section>

  <section class="lp-section lp-faq-container">
    <img src="https://outgoing-oyster-428.convex.cloud/api/storage/eae492e6-85c7-43e0-8c28-abed3673d43a" alt="FAQ illustration" style="max-width:100%;height:auto;border-radius:8px;margin:24px 0;" />
    <h2>Frequently Asked Questions</h2>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Why is 2026 significant in Gematria?</span>
      <p>2026 contains the number 26, which is the numerical value of the Tetragrammaton (YHVH). Furthermore, the Hebrew year 5786 ends in 6, the value of Vav, emphasizing connection and divine mediation.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">What is the "Year of the Vav"?</span>
      <p>The Hebrew year 5786 (corresponding to late 2025/2026) is identified with the letter Vav (6). Vav means "hook" and symbolizes the link between the spiritual and physical realms.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">Is Gematria mentioned in the Bible?</span>
      <p>While the word "Gematria" is of later origin, the practice is rooted in the "Baraita of the 32 Rules" for biblical interpretation (Rule 28), which ancient scholars used to decode the text.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">How does English Gematria differ from Hebrew?</span>
      <p>Hebrew Gematria is based on the traditional positions and historical values of the 22 letters. English Gematria is a modern adaptation that applies similar logic (Simple, Ordinal, or Pythagorean) to the Latin alphabet. You can explore both on our <a href="https://www.gematriaguru.com/blog">blog</a>.</p>
    </div>
    <div class="lp-faq-item">
      <span class="lp-faq-question">What is a "lucky" Gematria number?</span>
      <p>The most widely recognized "positive" number is 18, which corresponds to the word <em>Chai</em> (ח״י), meaning "Life."</p>
    </div>
  </section>

  <section class="lp-cta-block">
    <h2>Calculate Your Values Instantly</h2>
    <p>Ready to explore the numerical secrets of your name or favorite verses? Use our free, multi-cipher Gematria calculator to get instant results across all six Hebrew and English systems.</p>
    <a href="https://www.gematriaguru.com/" class="lp-cta-button">Open Gematria Calculator</a>
    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">No registration required. Free for all users.</p>
  </section>
</article>
`;

export default function HebrewGematriaReferenceChart() {
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
