import React from 'react';
import { Helmet } from 'react-helmet';

const InchesToCentimeters = () => (
  <>
    <Helmet>
      <title>How to Convert Inches to Centimeters Easily | ConverterPro Blog</title>
      <meta name="description" content="Learn the simple formula to convert inches to centimeters. Step-by-step guide and examples for accurate length conversion." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "How to Convert Inches to Centimeters Easily",
          "description": "Learn the simple formula to convert inches to centimeters. Step-by-step guide and examples for accurate length conversion.",
          "author": {"@type": "Person", "name": "ConverterPro Team"},
          "datePublished": "2025-06-22",
          "mainEntityOfPage": {"@type": "WebPage", "@id": "https://converterpro.online/blog/inches-to-centimeters"}
        })}
      </script>
    </Helmet>
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">How to Convert Inches to Centimeters Easily</h1>
      <p className="mb-4">To convert inches to centimeters, multiply the number of inches by <strong>2.54</strong>. For example, 10 inches × 2.54 = 25.4 cm.</p>
      <h2 className="text-xl font-semibold mb-2">Formula</h2>
      <p className="mb-4"><code>centimeters = inches × 2.54</code></p>
      <h2 className="text-xl font-semibold mb-2">Example</h2>
      <p>If you have 5 inches: 5 × 2.54 = 12.7 cm.</p>
      <h2 className="text-xl font-semibold mb-2">Why Use This Conversion?</h2>
      <p>Inches are used in the US and UK, while centimeters are standard in most other countries. Accurate conversion is important for science, engineering, and daily life.</p>
    </main>
  </>
);

export default InchesToCentimeters;
