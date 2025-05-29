
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { conversions } from '../utils/conversions';

const Converter = ({ category, onBack }) => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const categoryData = conversions[category.id];

  useEffect(() => {
    if (categoryData && categoryData.units.length > 1) {
      setFromUnit(categoryData.units[0].key);
      setToUnit(categoryData.units[1].key);
    }
  }, [categoryData]);

  useEffect(() => {
    if (value && fromUnit && toUnit && categoryData) {
      const convertedValue = categoryData.convert(parseFloat(value), fromUnit, toUnit);
      setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ''));
    } else {
      setResult('');
    }
  }, [value, fromUnit, toUnit, categoryData]);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </button>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {category.name} Converter
            </h2>
            <p className="text-gray-600">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* From */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categoryData.units.map((unit) => (
                  <option key={unit.key} value={unit.key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            {/* To */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categoryData.units.map((unit) => (
                  <option key={unit.key} value={unit.key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
              <div className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-lg font-semibold text-blue-600">
                {result || '0'}
              </div>
            </div>
          </div>

          {/* Quick conversions */}
          {value && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Conversions for {value} {categoryData.units.find(u => u.key === fromUnit)?.symbol}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryData.units
                  .filter(unit => unit.key !== fromUnit)
                  .slice(0, 6)
                  .map((unit) => {
                    const converted = categoryData.convert(parseFloat(value), fromUnit, unit.key);
                    return (
                      <div key={unit.key} className="bg-white p-3 rounded-lg">
                        <div className="text-sm text-gray-600">{unit.name}</div>
                        <div className="font-semibold">
                          {converted.toFixed(4).replace(/\.?0+$/, '')} {unit.symbol}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Converter;
