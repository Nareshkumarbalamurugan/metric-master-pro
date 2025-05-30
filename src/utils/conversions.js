import { fetchExchangeRates, getCachedRates } from './currencyApi';

export const conversions = {
  area: {
    units: [
      { key: 'sqm', name: 'Square Meter', symbol: 'm²' },
      { key: 'sqft', name: 'Square Feet', symbol: 'ft²' },
      { key: 'sqyd', name: 'Square Yard', symbol: 'yd²' },
      { key: 'acre', name: 'Acre', symbol: 'ac' },
      { key: 'hectare', name: 'Hectare', symbol: 'ha' },
      { key: 'are', name: 'Are', symbol: 'a' },
      { key: 'cent', name: 'Cent', symbol: 'cent' },
      { key: 'bigha', name: 'Bigha', symbol: 'bigha' },
      { key: 'gunta', name: 'Gunta', symbol: 'gunta' },
      { key: 'kanal', name: 'Kanal', symbol: 'kanal' },
      { key: 'marla', name: 'Marla', symbol: 'marla' },
      { key: 'ground', name: 'Ground', symbol: 'ground' }
    ],
    convert: (value, from, to) => {
      const toSqm = {
        sqm: 1,
        sqft: 0.092903,
        sqyd: 0.836127,
        acre: 4046.86,
        hectare: 10000,
        are: 100,
        cent: 40.4686,
        bigha: 2529.285,
        gunta: 101.171,
        kanal: 505.857,
        marla: 25.2929,
        ground: 222.967
      };
      return (value * toSqm[from]) / toSqm[to];
    }
  },

  length: {
    units: [
      { key: 'mm', name: 'Millimeter', symbol: 'mm' },
      { key: 'cm', name: 'Centimeter', symbol: 'cm' },
      { key: 'm', name: 'Meter', symbol: 'm' },
      { key: 'km', name: 'Kilometer', symbol: 'km' },
      { key: 'in', name: 'Inch', symbol: 'in' },
      { key: 'ft', name: 'Foot', symbol: 'ft' },
      { key: 'yd', name: 'Yard', symbol: 'yd' },
      { key: 'mi', name: 'Mile', symbol: 'mi' },
      { key: 'nmi', name: 'Nautical Mile', symbol: 'nmi' }
    ],
    convert: (value, from, to) => {
      const toMeters = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34,
        nmi: 1852
      };
      return (value * toMeters[from]) / toMeters[to];
    }
  },

  weight: {
    units: [
      { key: 'mg', name: 'Milligram', symbol: 'mg' },
      { key: 'g', name: 'Gram', symbol: 'g' },
      { key: 'kg', name: 'Kilogram', symbol: 'kg' },
      { key: 'ton', name: 'Metric Ton', symbol: 't' },
      { key: 'oz', name: 'Ounce', symbol: 'oz' },
      { key: 'lb', name: 'Pound', symbol: 'lb' },
      { key: 'stone', name: 'Stone', symbol: 'st' },
      { key: 'uston', name: 'US Ton', symbol: 'US ton' },
      { key: 'ukton', name: 'Imperial Ton', symbol: 'UK ton' }
    ],
    convert: (value, from, to) => {
      const toKg = {
        mg: 0.000001,
        g: 0.001,
        kg: 1,
        ton: 1000,
        oz: 0.0283495,
        lb: 0.453592,
        stone: 6.35029,
        uston: 907.185,
        ukton: 1016.05
      };
      return (value * toKg[from]) / toKg[to];
    }
  },

  volume: {
    units: [
      { key: 'ml', name: 'Milliliter', symbol: 'ml' },
      { key: 'l', name: 'Liter', symbol: 'L' },
      { key: 'cm3', name: 'Cubic Centimeter', symbol: 'cm³' },
      { key: 'm3', name: 'Cubic Meter', symbol: 'm³' },
      { key: 'tsp', name: 'Teaspoon', symbol: 'tsp' },
      { key: 'tbsp', name: 'Tablespoon', symbol: 'tbsp' },
      { key: 'cup', name: 'Cup', symbol: 'cup' },
      { key: 'pint', name: 'Pint', symbol: 'pt' },
      { key: 'quart', name: 'Quart', symbol: 'qt' },
      { key: 'galus', name: 'Gallon (US)', symbol: 'gal (US)' },
      { key: 'galuk', name: 'Gallon (UK)', symbol: 'gal (UK)' }
    ],
    convert: (value, from, to) => {
      const toLiters = {
        ml: 0.001,
        l: 1,
        cm3: 0.001,
        m3: 1000,
        tsp: 0.00492892,
        tbsp: 0.0147868,
        cup: 0.236588,
        pint: 0.473176,
        quart: 0.946353,
        galus: 3.78541,
        galuk: 4.54609
      };
      return (value * toLiters[from]) / toLiters[to];
    }
  },

  temperature: {
    units: [
      { key: 'c', name: 'Celsius', symbol: '°C' },
      { key: 'f', name: 'Fahrenheit', symbol: '°F' },
      { key: 'k', name: 'Kelvin', symbol: 'K' },
      { key: 'r', name: 'Rankine', symbol: '°R' }
    ],
    convert: (value, from, to) => {
      // Convert to Celsius first
      let celsius;
      switch (from) {
        case 'c': celsius = value; break;
        case 'f': celsius = (value - 32) * 5/9; break;
        case 'k': celsius = value - 273.15; break;
        case 'r': celsius = (value - 491.67) * 5/9; break;
      }
      
      // Convert from Celsius to target
      switch (to) {
        case 'c': return celsius;
        case 'f': return celsius * 9/5 + 32;
        case 'k': return celsius + 273.15;
        case 'r': return celsius * 9/5 + 491.67;
      }
    }
  },

  time: {
    units: [
      { key: 's', name: 'Second', symbol: 's' },
      { key: 'min', name: 'Minute', symbol: 'min' },
      { key: 'h', name: 'Hour', symbol: 'h' },
      { key: 'd', name: 'Day', symbol: 'd' },
      { key: 'w', name: 'Week', symbol: 'w' },
      { key: 'month', name: 'Month', symbol: 'mo' },
      { key: 'y', name: 'Year', symbol: 'y' },
      { key: 'decade', name: 'Decade', symbol: 'decade' },
      { key: 'century', name: 'Century', symbol: 'century' }
    ],
    convert: (value, from, to) => {
      const toSeconds = {
        s: 1,
        min: 60,
        h: 3600,
        d: 86400,
        w: 604800,
        month: 2629746,
        y: 31556952,
        decade: 315569520,
        century: 3155695200
      };
      return (value * toSeconds[from]) / toSeconds[to];
    }
  },

  speed: {
    units: [
      { key: 'ms', name: 'Meter per Second', symbol: 'm/s' },
      { key: 'kmh', name: 'Kilometer per Hour', symbol: 'km/h' },
      { key: 'mph', name: 'Mile per Hour', symbol: 'mph' },
      { key: 'knot', name: 'Knot', symbol: 'kn' },
      { key: 'fts', name: 'Foot per Second', symbol: 'ft/s' }
    ],
    convert: (value, from, to) => {
      const toMs = {
        ms: 1,
        kmh: 0.277778,
        mph: 0.44704,
        knot: 0.514444,
        fts: 0.3048
      };
      return (value * toMs[from]) / toMs[to];
    }
  },

  digital: {
    units: [
      { key: 'bit', name: 'Bit', symbol: 'bit' },
      { key: 'byte', name: 'Byte', symbol: 'B' },
      { key: 'kb', name: 'Kilobyte', symbol: 'KB' },
      { key: 'mb', name: 'Megabyte', symbol: 'MB' },
      { key: 'gb', name: 'Gigabyte', symbol: 'GB' },
      { key: 'tb', name: 'Terabyte', symbol: 'TB' },
      { key: 'pb', name: 'Petabyte', symbol: 'PB' },
      { key: 'eb', name: 'Exabyte', symbol: 'EB' }
    ],
    convert: (value, from, to) => {
      const toBits = {
        bit: 1,
        byte: 8,
        kb: 8192,
        mb: 8388608,
        gb: 8589934592,
        tb: 8796093022208,
        pb: 9007199254740992,
        eb: 9223372036854775808
      };
      return (value * toBits[from]) / toBits[to];
    }
  },

  currency: {
    units: [
      { key: 'usd', name: 'US Dollar', symbol: 'USD' },
      { key: 'eur', name: 'Euro', symbol: 'EUR' },
      { key: 'inr', name: 'Indian Rupee', symbol: 'INR' },
      { key: 'gbp', name: 'British Pound', symbol: 'GBP' },
      { key: 'jpy', name: 'Japanese Yen', symbol: 'JPY' },
      { key: 'aud', name: 'Australian Dollar', symbol: 'AUD' },
      { key: 'cad', name: 'Canadian Dollar', symbol: 'CAD' },
      { key: 'chf', name: 'Swiss Franc', symbol: 'CHF' },
      { key: 'cny', name: 'Chinese Yuan', symbol: 'CNY' },
      { key: 'krw', name: 'South Korean Won', symbol: 'KRW' },
      { key: 'sgd', name: 'Singapore Dollar', symbol: 'SGD' },
      { key: 'hkd', name: 'Hong Kong Dollar', symbol: 'HKD' },
      { key: 'nzd', name: 'New Zealand Dollar', symbol: 'NZD' },
      { key: 'sek', name: 'Swedish Krona', symbol: 'SEK' },
      { key: 'nok', name: 'Norwegian Krone', symbol: 'NOK' },
      { key: 'dkk', name: 'Danish Krone', symbol: 'DKK' },
      { key: 'pln', name: 'Polish Zloty', symbol: 'PLN' },
      { key: 'czk', name: 'Czech Koruna', symbol: 'CZK' },
      { key: 'huf', name: 'Hungarian Forint', symbol: 'HUF' },
      { key: 'rub', name: 'Russian Ruble', symbol: 'RUB' }
    ],
    convert: (value, from, to) => {
      const rates = getCachedRates();
      return (value / rates[from]) * rates[to];
    }
  },

  energy: {
    units: [
      { key: 'j', name: 'Joule', symbol: 'J' },
      { key: 'cal', name: 'Calorie', symbol: 'cal' },
      { key: 'kcal', name: 'Kilocalorie', symbol: 'kcal' },
      { key: 'kj', name: 'Kilojoule', symbol: 'kJ' },
      { key: 'wh', name: 'Watt Hour', symbol: 'Wh' },
      { key: 'kwh', name: 'Kilowatt Hour', symbol: 'kWh' },
      { key: 'btu', name: 'BTU', symbol: 'BTU' },
      { key: 'therm', name: 'Therm', symbol: 'thm' }
    ],
    convert: (value, from, to) => {
      const toJoules = {
        j: 1,
        cal: 4.184,
        kcal: 4184,
        kj: 1000,
        wh: 3600,
        kwh: 3600000,
        btu: 1055.06,
        therm: 105506000
      };
      return (value * toJoules[from]) / toJoules[to];
    }
  },

  pressure: {
    units: [
      { key: 'pa', name: 'Pascal', symbol: 'Pa' },
      { key: 'bar', name: 'Bar', symbol: 'bar' },
      { key: 'psi', name: 'PSI', symbol: 'psi' },
      { key: 'atm', name: 'Atmosphere', symbol: 'atm' },
      { key: 'torr', name: 'Torr', symbol: 'Torr' },
      { key: 'mmhg', name: 'mmHg', symbol: 'mmHg' }
    ],
    convert: (value, from, to) => {
      const toPascals = {
        pa: 1,
        bar: 100000,
        psi: 6894.76,
        atm: 101325,
        torr: 133.322,
        mmhg: 133.322
      };
      return (value * toPascals[from]) / toPascals[to];
    }
  },

  power: {
    units: [
      { key: 'w', name: 'Watt', symbol: 'W' },
      { key: 'kw', name: 'Kilowatt', symbol: 'kW' },
      { key: 'hp', name: 'Horsepower', symbol: 'hp' },
      { key: 'btuh', name: 'BTU per Hour', symbol: 'BTU/h' },
      { key: 'mw', name: 'Megawatt', symbol: 'MW' }
    ],
    convert: (value, from, to) => {
      const toWatts = {
        w: 1,
        kw: 1000,
        hp: 745.7,
        btuh: 0.293071,
        mw: 1000000
      };
      return (value * toWatts[from]) / toWatts[to];
    }
  },

  density: {
    units: [
      { key: 'kgm3', name: 'kg per cubic meter', symbol: 'kg/m³' },
      { key: 'gcm3', name: 'gram per cubic cm', symbol: 'g/cm³' },
      { key: 'lbft3', name: 'pound per cubic foot', symbol: 'lb/ft³' },
      { key: 'lbin3', name: 'pound per cubic inch', symbol: 'lb/in³' }
    ],
    convert: (value, from, to) => {
      const toKgm3 = {
        kgm3: 1,
        gcm3: 1000,
        lbft3: 16.0185,
        lbin3: 27679.9
      };
      return (value * toKgm3[from]) / toKgm3[to];
    }
  },

  fuel: {
    units: [
      { key: 'kml', name: 'Kilometer per Liter', symbol: 'km/L' },
      { key: 'l100km', name: 'Liter per 100km', symbol: 'L/100km' },
      { key: 'mpgus', name: 'Miles per Gallon (US)', symbol: 'mpg (US)' },
      { key: 'mpguk', name: 'Miles per Gallon (UK)', symbol: 'mpg (UK)' }
    ],
    convert: (value, from, to) => {
      // Convert to km/L first
      let kml;
      switch (from) {
        case 'kml': kml = value; break;
        case 'l100km': kml = 100 / value; break;
        case 'mpgus': kml = value * 0.425144; break;
        case 'mpguk': kml = value * 0.354006; break;
      }
      
      switch (to) {
        case 'kml': return kml;
        case 'l100km': return 100 / kml;
        case 'mpgus': return kml / 0.425144;
        case 'mpguk': return kml / 0.354006;
      }
    }
  },

  data: {
    units: [
      { key: 'bps', name: 'Bit per Second', symbol: 'bps' },
      { key: 'kbps', name: 'Kilobit per Second', symbol: 'kbps' },
      { key: 'mbps', name: 'Megabit per Second', symbol: 'Mbps' },
      { key: 'gbps', name: 'Gigabit per Second', symbol: 'Gbps' },
      { key: 'tbps', name: 'Terabit per Second', symbol: 'Tbps' }
    ],
    convert: (value, from, to) => {
      const toBps = {
        bps: 1,
        kbps: 1000,
        mbps: 1000000,
        gbps: 1000000000,
        tbps: 1000000000000
      };
      return (value * toBps[from]) / toBps[to];
    }
  },

  angle: {
    units: [
      { key: 'deg', name: 'Degree', symbol: '°' },
      { key: 'rad', name: 'Radian', symbol: 'rad' },
      { key: 'grad', name: 'Gradian', symbol: 'grad' },
      { key: 'turn', name: 'Turn', symbol: 'turn' }
    ],
    convert: (value, from, to) => {
      const toDegrees = {
        deg: 1,
        rad: 180 / Math.PI,
        grad: 0.9,
        turn: 360
      };
      return (value * toDegrees[from]) / toDegrees[to];
    }
  },

  height: {
    units: [
      { key: 'ft', name: 'Feet', symbol: 'ft' },
      { key: 'in', name: 'Inches', symbol: 'in' },
      { key: 'cm', name: 'Centimeters', symbol: 'cm' },
      { key: 'm', name: 'Meters', symbol: 'm' },
      { key: 'hand', name: 'Hands', symbol: 'h' }
    ],
    convert: (value, from, to) => {
      const toCm = {
        ft: 30.48,
        in: 2.54,
        cm: 1,
        m: 100,
        hand: 10.16
      };
      return (value * toCm[from]) / toCm[to];
    }
  }
};

// Initialize currency rates on app load
fetchExchangeRates();
