
import React from 'react';

const CategoryGrid = ({ onCategorySelect }) => {
  const categories = [
    { id: 'area', name: 'Area', icon: '🌍', description: 'Square meters, acres, hectares, and more' },
    { id: 'length', name: 'Length', icon: '📏', description: 'Meters, feet, inches, miles, and more' },
    { id: 'weight', name: 'Weight', icon: '⚖️', description: 'Kilograms, pounds, ounces, and more' },
    { id: 'volume', name: 'Volume', icon: '💧', description: 'Liters, gallons, cups, and more' },
    { id: 'temperature', name: 'Temperature', icon: '🌡️', description: 'Celsius, Fahrenheit, Kelvin' },
    { id: 'time', name: 'Time', icon: '⏱️', description: 'Seconds, minutes, hours, days, and more' },
    { id: 'speed', name: 'Speed', icon: '⚡', description: 'km/h, mph, m/s, knots, and more' },
    { id: 'digital', name: 'Digital Storage', icon: '💻', description: 'Bytes, KB, MB, GB, TB, and more' },
    { id: 'currency', name: 'Currency', icon: '💵', description: 'USD, EUR, INR, GBP, and more' },
    { id: 'energy', name: 'Energy', icon: '🔋', description: 'Joules, calories, kWh, and more' },
    { id: 'pressure', name: 'Pressure', icon: '🧪', description: 'Pascal, bar, PSI, atmosphere' },
    { id: 'power', name: 'Power', icon: '🔌', description: 'Watts, horsepower, BTU/h' },
    { id: 'density', name: 'Density', icon: '🧱', description: 'kg/m³, g/cm³, lb/ft³' },
    { id: 'fuel', name: 'Fuel Consumption', icon: '🧾', description: 'km/l, mpg, l/100km' },
    { id: 'data', name: 'Data Transfer', icon: '📊', description: 'bps, kbps, Mbps, Gbps' },
    { id: 'angle', name: 'Angle', icon: '📐', description: 'Degrees, radians, gradians' },
    { id: 'height', name: 'Height', icon: '🪜', description: 'Feet, inches, centimeters, meters' }
  ];

  return (
    <section id="converters" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose a Conversion Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect(category)}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
