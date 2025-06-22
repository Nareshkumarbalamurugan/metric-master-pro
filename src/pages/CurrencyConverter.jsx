import React from 'react';
import { Helmet } from 'react-helmet';

const CurrencyConverterPage = () => (
  <>
    <Helmet>
      <title>Free Online Currency Converter – Real-Time Exchange Rates</title>
      <meta name="description" content="Convert currencies instantly with real-time exchange rates. Fast, free, and accurate online currency conversion tool for USD, EUR, INR, GBP, and more." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Currency Converter",
          "description": "Convert currencies instantly with real-time exchange rates.",
          "url": "https://converterpro.online/currency-converter"
        })}
      </script>
    </Helmet>
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Free Online Currency Converter</h1>
      <h2 className="text-xl mb-2">Convert currencies in real-time: USD, EUR, INR, GBP, and more</h2>
      <p className="mb-4">Get live exchange rates and convert between all major world currencies. Our tool updates rates in real-time for accurate conversions.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>US Dollar (USD)</li>
        <li>Euro (EUR)</li>
        <li>Indian Rupee (INR)</li>
        <li>British Pound (GBP)</li>
        <li>Japanese Yen (JPY)</li>
        <li>Australian Dollar (AUD)</li>
      </ul>
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
        <p>Enter your amount, select the currencies, and get instant conversion results. Rates are updated in real-time for accuracy.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">Currency Conversion Formula</h3>
        <p>To convert from one currency to another: <code>amount_in_target = amount_in_source × exchange_rate</code></p>
      </section>
    </main>
  </>
);

export default CurrencyConverterPage;
