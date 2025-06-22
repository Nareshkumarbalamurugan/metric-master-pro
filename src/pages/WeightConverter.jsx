import React from 'react';
import { Helmet } from 'react-helmet';

const WeightConverterPage = () => (
  <>
    <Helmet>
      <title>Free Online Weight Converter – Kilogram, Pound, Ounce & More</title>
      <meta name="description" content="Convert weight units instantly: kilograms, pounds, ounces, grams, and more. Fast, free, and accurate online weight conversion tool with explanations and formulas." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Weight Converter",
          "description": "Convert weight units instantly: kilograms, pounds, ounces, grams, and more.",
          "url": "https://converterpro.online/weight-converter"
        })}
      </script>
    </Helmet>
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Free Online Weight Converter</h1>
      <h2 className="text-xl mb-2">Convert kilograms, pounds, ounces, grams, and more</h2>
      <p className="mb-4">Easily convert between all major weight and mass units. Enter a value and select your units to get instant results. Common conversions include kilograms to pounds, grams to ounces, and more.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Kilogram (kg)</li>
        <li>Gram (g)</li>
        <li>Milligram (mg)</li>
        <li>Pound (lb)</li>
        <li>Ounce (oz)</li>
        <li>Ton (t)</li>
      </ul>
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
        <p>Enter your value, select the units, and get instant conversion results. Our tool uses up-to-date formulas for accuracy.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">Weight Conversion Formula</h3>
        <p>To convert from kilograms to pounds: <code>pounds = kilograms × 2.20462</code></p>
      </section>
    </main>
  </>
);

export default WeightConverterPage;
