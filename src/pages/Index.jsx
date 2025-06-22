import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Converter from '../components/Converter';
import Footer from '../components/Footer';
import { fetchExchangeRates } from '../utils/currencyApi';
import { fetchGoldRates } from '../utils/goldApi';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'area', name: 'Area', icon: '🌍', description: 'Square meters, acres, hectares, and more' },
    { id: 'length', name: 'Length', icon: '📏', description: 'Meters, feet, inches, miles, and more' },
    { id: 'weight', name: 'Weight', icon: '⚖️', description: 'Kilograms, pounds, ounces, and more' },
    { id: 'volume', name: 'Volume', icon: '💧', description: 'Liters, gallons, cups, and more' },
    { id: 'temperature', name: 'Temperature', icon: '🌡️', description: 'Celsius, Fahrenheit, Kelvin' },
    { id: 'time', name: 'Time', icon: '⏱️', description: 'Seconds, minutes, hours, days, and more' },
    { id: 'speed', name: 'Speed', icon: '⚡', description: 'km/h, mph, m/s, knots, and more' },
    { id: 'digital', name: 'Digital Storage', icon: '💻', description: 'Bytes, KB, MB, GB, TB, and more' },
    { id: 'currency', name: 'Currency', icon: '💵', description: 'USD, EUR, INR, GBP, and more with real-time rates' },
    { id: 'gold', name: 'Gold Rates', icon: '🥇', description: 'Live gold prices in different currencies' },
    { id: 'energy', name: 'Energy', icon: '🔋', description: 'Joules, calories, kWh, and more' },
    { id: 'pressure', name: 'Pressure', icon: '🧪', description: 'Pascal, bar, PSI, atmosphere' },
    { id: 'power', name: 'Power', icon: '🔌', description: 'Watts, horsepower, BTU/h' },
    { id: 'density', name: 'Density', icon: '🧱', description: 'kg/m³, g/cm³, lb/ft³' },
    { id: 'fuel', name: 'Fuel Consumption', icon: '🧾', description: 'km/l, mpg, l/100km' },
    { id: 'data', name: 'Data Transfer', icon: '📊', description: 'bps, kbps, Mbps, Gbps' },
    { id: 'angle', name: 'Angle', icon: '📐', description: 'Degrees, radians, gradians' },
    { id: 'height', name: 'Height', icon: '🪜', description: 'Feet, inches, centimeters, meters' }
  ];

  useEffect(() => {
    // Initialize currency and gold rates on page load
    fetchExchangeRates();
    fetchGoldRates();
    
    // Check URL parameters for direct converter access
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
      const foundCategory = categories.find(cat => cat.id === category);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    }

    // Listen for search converter events
    const handleSearchConverter = (event) => {
      const { category: categoryId } = event.detail;
      const foundCategory = categories.find(cat => cat.id === categoryId);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    };

    // Listen for category selection from footer
    const handleSelectCategory = (event) => {
      const { id } = event.detail;
      const foundCategory = categories.find(cat => cat.id === id);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    };

    // Listen for home reset events
    const handleResetToHome = () => {
      setSelectedCategory(null);
      window.history.pushState({}, '', window.location.pathname);
    };

    window.addEventListener('searchConverter', handleSearchConverter);
    window.addEventListener('selectCategory', handleSelectCategory);
    window.addEventListener('resetToHome', handleResetToHome);

    return () => {
      window.removeEventListener('searchConverter', handleSearchConverter);
      window.removeEventListener('selectCategory', handleSelectCategory);
      window.removeEventListener('resetToHome', handleResetToHome);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>ConverterPro - Universal Unit Converter | Convert Any Unit Instantly</title>
        <meta name="description" content="ConverterPro by BKND Groups - Convert between 200+ units across 18 categories including area, length, weight, temperature, currency, and gold rates. Fast, accurate, and free online converter with real-time exchange rates." />
        <meta name="keywords" content="unit converter, metric converter, length converter, weight converter, temperature converter, currency converter, gold rates, area converter, volume converter, converterpro, online unit conversion, instant unit calculator, free measurement converter, best unit converter website, universal converter, measurement conversion calculator, convert units easily, real-time currency converter, digital storage converter, speed converter, pressure converter, power converter, density converter, fuel consumption converter, data transfer converter, angle converter, height converter, scientific calculator, engineering tools, educational tools, mobile-friendly converter, fast conversion tool, accurate unit conversion, live exchange rates, currency rates online, land measurement tool, metric to imperial converter, imperial to metric, conversion formulas, conversion chart, online calculator, conversion app, web converter, professional converter, student tools, business calculator, international units, SI units, US customary units, UK imperial units, conversion for students, conversion for engineers, conversion for teachers, conversion for professionals, free online converter, no registration converter, privacy safe converter, dark mode converter, responsive converter, modern converter, 2025 unit converter, updated unit converter, latest conversion tool, best free converter, top conversion website, easy unit conversion, quick unit converter, all-in-one converter, multi-category converter, comprehensive converter, advanced unit converter, user-friendly converter, converter for all, converter for everyone, converter for business, converter for education, converter for science, converter for travel, converter for shopping, converter for cooking, converter for construction, converter for real estate, converter for finance, converter for academics, converter for research, converter for daily use, converter for global users, converter for mobile, converter for desktop, converter for tablet, converter for web, converter for Chrome, converter for Edge, converter for Firefox, converter for Safari, converter for Opera, converter for Windows, converter for Mac, converter for Linux, converter for Android, converter for iOS, converter for iPhone, converter for iPad, converter for Chromebook, converter for smart devices, converter for IoT, converter for smart home, converter for smart office, converter for smart school, converter for smart city, converter for smart world, converter for future, converter for now, converter for tomorrow, converter for everyone, converter for you" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://converterpro.online/" />
        
        {/* Structured Data for SEO (hidden from users) */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ConverterPro",
          "description": "Universal unit converter supporting 200+ units across 18 categories including area, length, weight, temperature, currency, and gold rates with real-time exchange rates",
          "url": "https://converterpro.online",
          "applicationCategory": "Utility",
          "operatingSystem": "Web Browser",
          "creator": {
            "@type": "Organization",
            "name": "BKND Groups",
            "email": "kamaleshkumarbalamurugan@gmail.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        {/* Removed repeated SEO headings/links. Only show main UI below. */}
        {!selectedCategory ? (
          <CategoryGrid categories={categories} onCategorySelect={setSelectedCategory} />
        ) : (
          <Converter 
            category={selectedCategory} 
            onBack={() => {
              setSelectedCategory(null);
              window.history.pushState({}, '', window.location.pathname);
            }} 
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Index;
