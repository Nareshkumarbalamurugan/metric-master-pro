
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Universal Unit
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}Converter
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Convert between any units instantly with our comprehensive converter. 
          From area and weight to temperature and digital storage - we've got you covered!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">17+ Categories</span>
          <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">200+ Units</span>
          <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">Instant Results</span>
          <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">Mobile Friendly</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
