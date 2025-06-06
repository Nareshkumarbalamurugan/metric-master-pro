
import React from 'react';

const Footer = () => {
  const handleConverterClick = (categoryId) => {
    const event = new CustomEvent('selectCategory', { detail: { id: categoryId } });
    window.dispatchEvent(event);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ConverterPro</h3>
            <p className="text-gray-300 mb-4">
              The most comprehensive unit conversion tool on the web by BKND Groups. Convert between 
              hundreds of units across 17+ categories with precision, real-time currency rates, and ease.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Fast</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Accurate</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Free</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Real-time Currency</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Converters</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleConverterClick('length')}
                  className="hover:text-white transition-colors text-left"
                >
                  Length Converter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleConverterClick('weight')}
                  className="hover:text-white transition-colors text-left"
                >
                  Weight Converter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleConverterClick('temperature')}
                  className="hover:text-white transition-colors text-left"
                >
                  Temperature Converter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleConverterClick('currency')}
                  className="hover:text-white transition-colors text-left"
                >
                  Currency Converter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleConverterClick('area')}
                  className="hover:text-white transition-colors text-left"
                >
                  Area Converter
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ConverterPro by BKND Groups. Made with ❤️ for everyone. All rights reserved.</p>
          <p className="mt-2 text-sm">Domain: <span className="text-blue-400">converterpro.online</span></p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">About ConverterPro</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          ConverterPro is a comprehensive online tool designed by BKND Groups to make unit conversions 
          quick, accurate, and effortless. Whether you're a student, professional, or just 
          someone who needs to convert units regularly, our tool covers all your needs with real-time 
          currency exchange rates and support for 17+ categories.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          With support for 17+ categories and hundreds of units, we provide the most extensive 
          conversion capabilities available online. Our tool is completely free, mobile-friendly, 
          features dark mode, and requires no registration.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Have questions, suggestions, or found an issue? We'd love to hear from you!
        </p>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300 mb-2">
            <strong>BKND Groups</strong>
          </p>
          <p className="text-gray-300">
            Email us at: <span className="text-blue-400 font-semibold">kamaleshkumarbalamurugan@gmail.com</span>
          </p>
          <p className="text-gray-300 mt-2">
            Website: <span className="text-blue-400 font-semibold">converterpro.online</span>
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Your privacy is important to us at BKND Groups. This website does not collect or store any personal 
          information. We may use anonymous analytics to improve our service. No conversion 
          data is stored or transmitted to our servers. Currency rates are fetched from public APIs 
          to provide real-time exchange rates.
        </p>
      </section>

      {/* Terms of Use */}
      <section id="terms" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          By using ConverterPro, you agree to use it for lawful purposes only. While we strive 
          for accuracy with real-time data, conversions are provided as-is for general information. 
          For critical applications, please verify results with authoritative sources. Currency 
          rates are provided by third-party APIs and may have slight delays.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
