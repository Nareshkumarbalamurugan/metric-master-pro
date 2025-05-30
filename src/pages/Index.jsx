
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Converter from '../components/Converter';
import Footer from '../components/Footer';
import { fetchExchangeRates } from '../utils/currencyApi';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Initialize currency rates on page load
    fetchExchangeRates();
    
    // Check URL parameters for direct converter access
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    const value = urlParams.get('value');
    
    if (category) {
      // Handle direct converter links
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
        { id: 'energy', name: 'Energy', icon: '🔋', description: 'Joules, calories, kWh, and more' },
        { id: 'pressure', name: 'Pressure', icon: '🧪', description: 'Pascal, bar, PSI, atmosphere' },
        { id: 'power', name: 'Power', icon: '🔌', description: 'Watts, horsepower, BTU/h' },
        { id: 'density', name: 'Density', icon: '🧱', description: 'kg/m³, g/cm³, lb/ft³' },
        { id: 'fuel', name: 'Fuel Consumption', icon: '🧾', description: 'km/l, mpg, l/100km' },
        { id: 'data', name: 'Data Transfer', icon: '📊', description: 'bps, kbps, Mbps, Gbps' },
        { id: 'angle', name: 'Angle', icon: '📐', description: 'Degrees, radians, gradians' },
        { id: 'height', name: 'Height', icon: '🪜', description: 'Feet, inches, centimeters, meters' }
      ];
      
      const foundCategory = categories.find(cat => cat.id === category);
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      {!selectedCategory ? (
        <CategoryGrid onCategorySelect={setSelectedCategory} />
      ) : (
        <Converter 
          category={selectedCategory} 
          onBack={() => {
            setSelectedCategory(null);
            // Clear URL parameters when going back
            window.history.pushState({}, '', window.location.pathname);
          }} 
        />
      )}
      <Footer />
    </div>
  );
};

export default Index;
