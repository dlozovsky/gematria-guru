const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gematria Guru",
  url: "https://www.gematriaguru.com",
  applicationCategory: "UtilitiesApplication",
  description:
    "Free online gematria calculator for Hebrew and English with multiple cipher methods",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  operatingSystem: "Web",
};

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
    </>
  );
}
