
// Currency API integration for real-time exchange rates
const EXCHANGE_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';
const FALLBACK_RATES = {
  usd: 1,
  eur: 0.85,
  inr: 83.12,
  gbp: 0.73,
  jpy: 149.5,
  aud: 1.52,
  cad: 1.36,
  chf: 0.88,
  cny: 7.24,
  krw: 1320,
  sgd: 1.34,
  hkd: 7.83,
  nzd: 1.62,
  sek: 10.87,
  nok: 10.75,
  dkk: 6.91,
  pln: 4.15,
  czk: 22.84,
  huf: 360.25,
  rub: 88.45
};

let cachedRates = { ...FALLBACK_RATES };
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const fetchExchangeRates = async () => {
  const now = Date.now();
  
  // Return cached rates if still fresh
  if (now - lastFetchTime < CACHE_DURATION) {
    return cachedRates;
  }

  try {
    const response = await fetch(EXCHANGE_API_URL);
    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    
    // Convert rates to our base currencies
    const rates = {
      usd: 1,
      eur: data.rates.EUR || FALLBACK_RATES.eur,
      inr: data.rates.INR || FALLBACK_RATES.inr,
      gbp: data.rates.GBP || FALLBACK_RATES.gbp,
      jpy: data.rates.JPY || FALLBACK_RATES.jpy,
      aud: data.rates.AUD || FALLBACK_RATES.aud,
      cad: data.rates.CAD || FALLBACK_RATES.cad,
      chf: data.rates.CHF || FALLBACK_RATES.chf,
      cny: data.rates.CNY || FALLBACK_RATES.cny,
      krw: data.rates.KRW || FALLBACK_RATES.krw,
      sgd: data.rates.SGD || FALLBACK_RATES.sgd,
      hkd: data.rates.HKD || FALLBACK_RATES.hkd,
      nzd: data.rates.NZD || FALLBACK_RATES.nzd,
      sek: data.rates.SEK || FALLBACK_RATES.sek,
      nok: data.rates.NOK || FALLBACK_RATES.nok,
      dkk: data.rates.DKK || FALLBACK_RATES.dkk,
      pln: data.rates.PLN || FALLBACK_RATES.pln,
      czk: data.rates.CZK || FALLBACK_RATES.czk,
      huf: data.rates.HUF || FALLBACK_RATES.huf,
      rub: data.rates.RUB || FALLBACK_RATES.rub
    };

    cachedRates = rates;
    lastFetchTime = now;
    
    console.log('Exchange rates updated successfully');
    return rates;
  } catch (error) {
    console.warn('Failed to fetch exchange rates, using fallback:', error);
    return FALLBACK_RATES;
  }
};

export const getCachedRates = () => cachedRates;
