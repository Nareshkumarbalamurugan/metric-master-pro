
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Universal Converter</h3>
            <p className="text-gray-300 mb-4">
              The most comprehensive unit conversion tool on the web. Convert between 
              hundreds of units across 17+ categories with precision and ease.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Fast</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Accurate</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Free</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Converters</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Length Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weight Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Temperature Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Currency Converter</a></li>
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
          <p>&copy; 2024 Universal Converter. Made with ❤️ for everyone. All rights reserved.</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">About Universal Converter</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Universal Converter is a comprehensive online tool designed to make unit conversions 
          quick, accurate, and effortless. Whether you're a student, professional, or just 
          someone who needs to convert units regularly, our tool covers all your needs.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          With support for 17+ categories and hundreds of units, we provide the most extensive 
          conversion capabilities available online. Our tool is completely free, mobile-friendly, 
          and requires no registration.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Have questions, suggestions, or found an issue? We'd love to hear from you!
        </p>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300">
            Email us at: <span className="text-blue-400 font-semibold">contact@universalconverter.com</span>
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Your privacy is important to us. This website does not collect or store any personal 
          information. We may use anonymous analytics to improve our service. No conversion 
          data is stored or transmitted to our servers.
        </p>
      </section>

      {/* Terms of Use */}
      <section id="terms" className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          By using this website, you agree to use it for lawful purposes only. While we strive 
          for accuracy, conversions are provided as-is for general information. For critical 
          applications, please verify results with authoritative sources.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
