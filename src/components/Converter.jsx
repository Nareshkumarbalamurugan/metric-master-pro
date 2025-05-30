
import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Info } from 'lucide-react';
import { conversions } from '../utils/conversions';
import ShareButton from './ShareButton';

const Converter = ({ category, onBack }) => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);

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
      const formattedResult = typeof convertedValue === 'number' 
        ? convertedValue.toFixed(6).replace(/\.?0+$/, '')
        : convertedValue;
      setResult(formattedResult);

      // Add to history
      const historyItem = {
        id: Date.now(),
        category: category.name,
        from: fromUnit,
        to: toUnit,
        value: value,
        result: formattedResult,
        timestamp: new Date().toLocaleString()
      };
      setHistory(prev => [historyItem, ...prev.slice(0, 4)]); // Keep last 5 items
    } else {
      setResult('');
    }
  }, [value, fromUnit, toUnit, categoryData, category.name]);

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
  };

  const clearAll = () => {
    setValue('');
    setResult('');
  };

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <section className="py-16 px-4 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </button>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {category.name} Converter
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* From */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
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
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Swap Button */}
            <div className="lg:hidden flex justify-center">
              <button
                onClick={swapUnits}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {/* To */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {categoryData.units.map((unit) => (
                  <option key={unit.key} value={unit.key}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
              <div className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-lg font-semibold text-blue-600 dark:text-blue-400">
                {result || '0'}
              </div>
            </div>
          </div>

          {/* Swap Button for desktop */}
          <div className="hidden lg:flex justify-center my-4">
            <button
              onClick={swapUnits}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          {value && result && (
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <ShareButton 
                category={category}
                fromUnit={fromUnit}
                toUnit={toUnit}
                value={value}
                result={result}
              />
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Quick conversions */}
          {value && (
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Conversions for {value} {categoryData.units.find(u => u.key === fromUnit)?.symbol}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryData.units
                  .filter(unit => unit.key !== fromUnit)
                  .slice(0, 6)
                  .map((unit) => {
                    const converted = categoryData.convert(parseFloat(value), fromUnit, unit.key);
                    const formattedConverted = typeof converted === 'number' 
                      ? converted.toFixed(4).replace(/\.?0+$/, '')
                      : converted;
                    return (
                      <div key={unit.key} className="bg-white dark:bg-gray-800 p-3 rounded-lg relative">
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-gray-600 dark:text-gray-400">{unit.name}</div>
                          <button
                            onMouseEnter={() => setShowTooltip(unit.key)}
                            onMouseLeave={() => setShowTooltip(null)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <Info size={12} />
                          </button>
                        </div>
                        <div className="font-semibold dark:text-white">
                          {formattedConverted} {unit.symbol}
                        </div>
                        {showTooltip === unit.key && (
                          <div className="absolute z-10 bg-gray-900 text-white text-xs rounded p-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                            {unit.name} ({unit.symbol})
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Recent History */}
          {history.length > 0 && (
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Conversions
              </h3>
              <div className="space-y-2">
                {history.slice(0, 3).map((item) => (
                  <div key={item.id} className="text-sm text-gray-600 dark:text-gray-400">
                    {item.value} {item.from} → {item.result} {item.to}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Converter;
