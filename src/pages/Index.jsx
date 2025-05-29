
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import Converter from '../components/Converter';
import Footer from '../components/Footer';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      <Hero />
      {!selectedCategory ? (
        <CategoryGrid onCategorySelect={setSelectedCategory} />
      ) : (
        <Converter 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)} 
        />
      )}
      <Footer />
    </div>
  );
};

export default Index;
