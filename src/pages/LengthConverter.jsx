import React from 'react';
import { Helmet } from 'react-helmet';

const LengthConverterPage = () => (
  <>
    <Helmet>
      <title>Free Online Length Converter – Meter, Feet, Inches, Miles & More</title>
      <meta name="description" content="Convert length units instantly: meters, feet, inches, miles, and more. Fast, free, and accurate online length conversion tool with explanations and formulas." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Length Converter",
          "description": "Convert length units instantly: meters, feet, inches, miles, and more.",
          "url": "https://converterpro.online/length-converter"
        })}
      </script>
    </Helmet>
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Free Online Length Converter</h1>
      <h2 className="text-xl mb-2">Convert meters, feet, inches, miles, and more</h2>
      <p className="mb-4">Easily convert between all major length and distance units. Enter a value and select your units to get instant results. Common conversions include meters to feet, inches to centimeters, and miles to kilometers.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Meter (m)</li>
        <li>Centimeter (cm)</li>
        <li>Millimeter (mm)</li>
        <li>Kilometer (km)</li>
        <li>Inch (in)</li>
        <li>Foot (ft)</li>
        <li>Yard (yd)</li>
        <li>Mile (mi)</li>
      </ul>
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
        <p>Enter your value, select the units, and get instant conversion results. Our tool uses up-to-date formulas for accuracy.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">Length Conversion Formula</h3>
        <p>To convert from meters to feet: <code>feet = meters × 3.28084</code></p>
      </section>
    </main>
  </>
);

export default LengthConverterPage;
