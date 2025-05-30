
import React, { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';

const ShareButton = ({ category, fromUnit, toUnit, value, result }) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareText = `${value} ${fromUnit} = ${result} ${toUnit} | Converted using ConverterPro`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareViaTwitter = () => {
    const text = encodeURIComponent(shareText);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent('Unit Conversion Result');
    const body = encodeURIComponent(`${shareText}\n\nConvert more units at: https://converterpro.online`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  if (!value || !result) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Share2 size={16} />
        Share Result
      </button>

      {showShareMenu && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 min-w-48 z-50">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy Result'}
          </button>
          
          <button
            onClick={shareViaWhatsApp}
            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
          >
            📱 WhatsApp
          </button>
          
          <button
            onClick={shareViaTwitter}
            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
          >
            🐦 Twitter
          </button>
          
          <button
            onClick={shareViaEmail}
            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm"
          >
            ✉️ Email
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
