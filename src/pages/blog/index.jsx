import React from 'react';
import { Helmet } from 'react-helmet';

const BlogIndex = () => (
  <>
    <Helmet>
      <title>ConverterPro Blog – Unit Conversion Tips & Guides</title>
      <meta name="description" content="Read the latest articles on unit conversion, currency rates, and measurement tips. Learn how to convert units easily and get the most from ConverterPro." />
    </Helmet>
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">ConverterPro Blog</h1>
      <p className="mb-4">Tips, guides, and news about unit conversion, currency rates, and measurement tools.</p>
      <ul className="list-disc ml-6">
        <li><a href="/blog/inches-to-centimeters">How to Convert Inches to Centimeters Easily</a></li>
        <li><a href="/blog/top-5-unit-conversion-tools">Top 5 Unit Conversion Tools in 2025</a></li>
        <li><a href="/blog/currency-conversion-guide">Understanding Currency Conversion – A Beginner's Guide</a></li>
      </ul>
    </main>
  </>
);

export default BlogIndex;
