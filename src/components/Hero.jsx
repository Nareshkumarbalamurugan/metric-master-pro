
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          ConverterPro
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}Universal Converter
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Convert between any units instantly with our comprehensive converter. 
          From area and weight to temperature and currency with real-time rates - we've got you covered!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">17+ Categories</span>
          <span className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">200+ Units</span>
          <span className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">Real-time Currency</span>
          <span className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">Mobile Friendly</span>
          <span className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full">Dark Mode</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by <span className="font-semibold text-blue-600 dark:text-blue-400">BKND Groups</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
