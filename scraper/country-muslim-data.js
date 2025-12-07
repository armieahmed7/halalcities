/**
 * Country-level Muslim population data
 * Sources: Pew Research, World Population Review, CIA Factbook
 */

// Muslim percentage of total population by country
const countryMuslimPercent = {
  // 99%+ Muslim majority
  "Maldives": 100,
  "Mauritania": 99.9,
  "Somalia": 99.8,
  "Tunisia": 99.5,
  "Afghanistan": 99.7,
  "Iran": 99.4,
  "Western Sahara": 99.4,
  "Yemen": 99.1,
  "Morocco": 99,
  "Iraq": 99,
  "Algeria": 99,
  "Comoros": 98.3,
  "Pakistan": 96.5,
  "Libya": 96.6,
  "Saudi Arabia": 93,
  "Jordan": 97.2,
  "Tajikistan": 98,
  "Azerbaijan": 97,
  "Turkey": 98,
  "Senegal": 96.1,
  "Djibouti": 94,
  "Gambia": 95.7,
  "Mali": 95,
  "Turkmenistan": 93,
  "Niger": 99.3,
  "Guinea": 89.1,
  "Kosovo": 95.6,
  "Bangladesh": 90.4,
  "Egypt": 90,
  "Uzbekistan": 88,
  "Indonesia": 87.2,
  "Sudan": 91,
  "Kyrgyzstan": 90,
  "Syria": 87,
  "Oman": 85.9,
  "Kuwait": 74.6,
  "Bahrain": 73.7,
  "Palestine": 98,
  "United Arab Emirates": 76,
  "Qatar": 77.5,
  "Brunei": 82.1,
  "Malaysia": 63.5,
  "Sierra Leone": 78.6,
  "Chad": 58,
  "Nigeria": 53.5,
  "Kazakhstan": 72,
  "Lebanon": 61.1,
  "Burkina Faso": 63.2,
  "Guinea-Bissau": 46,
  "Albania": 58.8,
  "Ivory Coast": 42.9,
  "Bosnia and Herzegovina": 51,
  "North Macedonia": 33.3,
  "Eritrea": 50,

  // 10-40% Muslim
  "Tanzania": 35,
  "Ethiopia": 33.9,
  "Cameroon": 30,
  "Benin": 27.7,
  "Mozambique": 18,
  "Togo": 20,
  "Ghana": 18,
  "Israel": 18.1,
  "India": 14.2,
  "Sri Lanka": 9.7,
  "Singapore": 15.6,
  "Montenegro": 19.1,
  "Cyprus": 25.4,
  "Bulgaria": 13.7,
  "Kenya": 11.2,
  "Russia": 10,
  "Georgia": 10.7,
  "Liberia": 12,
  "Uganda": 14,
  "Malawi": 13,
  "Mauritius": 17.3,
  "Fiji": 6.3,
  "Serbia": 3.1,
  "Greece": 5.7,
  "Myanmar": 4.3,
  "Thailand": 5.4,
  "Nepal": 4.4,

  // 1-10% Muslim
  "France": 9,
  "Belgium": 7.6,
  "Austria": 8,
  "Germany": 6.1,
  "Netherlands": 5.1,
  "Sweden": 8.1,
  "Switzerland": 5.3,
  "United Kingdom": 6.5,
  "Norway": 5.7,
  "Denmark": 5.4,
  "Italy": 4.8,
  "Spain": 4.1,
  "Canada": 4.9,
  "Australia": 3.2,
  "New Zealand": 1.3,
  "United States": 1.1,
  "Philippines": 6,
  "Cambodia": 2,
  "South Africa": 1.9,
  "Argentina": 1,
  "Brazil": 0.1,
  "Ireland": 1.4,
  "Finland": 2.7,
  "Portugal": 0.6,
  "Romania": 0.3,
  "Croatia": 1.5,
  "Slovenia": 2.4,
  "Czech Republic": 0.2,
  "Czechia": 0.2,
  "Poland": 0.1,
  "Hungary": 0.4,
  "Slovakia": 0.1,
  "Lithuania": 0.1,
  "Latvia": 0.3,
  "Estonia": 0.2,
  "Ukraine": 0.9,
  "Belarus": 0.2,
  "Moldova": 0.1,

  // <1% Muslim
  "Japan": 0.2,
  "South Korea": 0.2,
  "Taiwan": 0.1,
  "Hong Kong": 4.1,
  "China": 1.8,
  "Vietnam": 0.1,
  "Mexico": 0.1,
  "Chile": 0.1,
  "Colombia": 0.1,
  "Peru": 0.1,
  "Venezuela": 0.3,
  "Ecuador": 0.1,
  "Costa Rica": 0.1,
  "Panama": 0.7,
  "Jamaica": 0.1,
  "Puerto Rico": 0.1,
  "Trinidad and Tobago": 5.8,
  "Guyana": 7.3,
  "Suriname": 13.9,
  "Paraguay": 0.1,
  "Uruguay": 0.1,
  "Bolivia": 0.1,
  "Cuba": 0.1,
  "Dominican Republic": 0.1,
  "Haiti": 0.1,
  "Guatemala": 0.1,
  "Honduras": 0.1,
  "El Salvador": 0.1,
  "Nicaragua": 0.1,
  "Iceland": 0.4,
  "Luxembourg": 3.2,
  "Malta": 0.3,
  "Monaco": 0.5,
  "Andorra": 0.8,
  "Liechtenstein": 5.4,
  "San Marino": 0.1,
  "Vatican": 0,
  "Rwanda": 4.8,
  "Burundi": 2.5,
  "Madagascar": 7,
  "Zimbabwe": 1,
  "Zambia": 0.5,
  "Botswana": 0.4,
  "Namibia": 0.3,
  "Lesotho": 0.1,
  "Eswatini": 0.1,
  "Angola": 0.2,
  "DR Congo": 1.5,
  "Republic of the Congo": 1.6,
  "Central African Republic": 15,
  "Gabon": 12,
  "Equatorial Guinea": 4,
  "South Sudan": 6.2,

  // Small island nations
  "Aruba": 0.4,
  "Bermuda": 1,
  "Curacao": 0.4,
  "Bahamas": 0.2,
  "Barbados": 0.8,
  "Seychelles": 1.1,
  "Papua New Guinea": 0.2,
};

// Airport prayer room data by country (known airports with prayer rooms)
const airportPrayerRooms = {
  "United Arab Emirates": true,
  "Saudi Arabia": true,
  "Qatar": true,
  "Kuwait": true,
  "Bahrain": true,
  "Oman": true,
  "Malaysia": true,
  "Indonesia": true,
  "Turkey": true,
  "Singapore": true,
  "Thailand": true, // Bangkok has one
  "Japan": true, // Major airports
  "South Korea": true, // Incheon
  "United Kingdom": true, // Major airports
  "Germany": true, // Frankfurt, Munich
  "France": true, // CDG
  "Netherlands": true, // Schiphol
  "United States": true, // Major hubs
  "Canada": true, // Major airports
  "Australia": true, // Major airports
  "Egypt": true,
  "Jordan": true,
  "Morocco": true,
  "Tunisia": true,
  "Pakistan": true,
  "Bangladesh": true,
  "India": true, // Major airports
  "Sri Lanka": true,
  "Maldives": true,
  "Philippines": true, // Manila
  "Brunei": true,
  "Hong Kong": true,
};

// Countries with Islamic banking
const islamicBankingCountries = {
  "Saudi Arabia": true,
  "United Arab Emirates": true,
  "Kuwait": true,
  "Qatar": true,
  "Bahrain": true,
  "Oman": true,
  "Malaysia": true,
  "Indonesia": true,
  "Pakistan": true,
  "Bangladesh": true,
  "Turkey": true,
  "Iran": true,
  "Jordan": true,
  "Egypt": true,
  "Sudan": true,
  "Brunei": true,
  "United Kingdom": true, // Has Islamic banks
  "United States": true, // Some options
  "Canada": true, // Some options
  "Kenya": true,
  "Nigeria": true,
  "Morocco": true,
  "Tunisia": true,
  "Algeria": true,
  "Lebanon": true,
  "Syria": true,
  "Iraq": true,
  "Yemen": true,
  "Libya": true,
  "Palestine": true,
  "Afghanistan": true,
  "Maldives": true,
  "Kazakhstan": true,
  "Azerbaijan": true,
  "Uzbekistan": true,
  "Tajikistan": true,
  "Kyrgyzstan": true,
  "Turkmenistan": true,
  "Singapore": true, // Some options
  "South Africa": true, // Some options
  "Sri Lanka": true,
  "Senegal": true,
  "Gambia": true,
  "Niger": true,
  "Mali": true,
  "Guinea": true,
  "Mauritania": true,
  "Somalia": true,
  "Djibouti": true,
  "Comoros": true,
  "Bosnia and Herzegovina": true,
  "Kosovo": true,
  "Albania": true,
};

// Hijab/Niqab status by country (1-10, 10 = banned/severe discrimination)
const discriminationScores = {
  // Countries with bans or severe restrictions
  "France": { hijab: 7, niqab: 9, niqabBanned: true, islamophobia: 6 },
  "Belgium": { hijab: 6, niqab: 8, niqabBanned: true, islamophobia: 5 },
  "Netherlands": { hijab: 5, niqab: 7, niqabBanned: true, islamophobia: 5 },
  "Austria": { hijab: 6, niqab: 8, niqabBanned: true, islamophobia: 5 },
  "Denmark": { hijab: 5, niqab: 8, niqabBanned: true, islamophobia: 5 },
  "Switzerland": { hijab: 6, niqab: 8, niqabBanned: true, islamophobia: 5 },
  "Bulgaria": { hijab: 7, niqab: 9, niqabBanned: true, islamophobia: 6 },
  "Sri Lanka": { hijab: 5, niqab: 8, niqabBanned: true, islamophobia: 5 },
  "Tunisia": { hijab: 3, niqab: 6, niqabBanned: false, islamophobia: 1 },
  "China": { hijab: 8, niqab: 9, niqabBanned: true, islamophobia: 8 },
  "Tajikistan": { hijab: 7, niqab: 8, niqabBanned: true, islamophobia: 3 },
  "Uzbekistan": { hijab: 6, niqab: 7, niqabBanned: false, islamophobia: 2 },

  // Muslim majority - very accepting
  "Saudi Arabia": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "United Arab Emirates": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Qatar": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Kuwait": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Bahrain": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Oman": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Jordan": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Egypt": { hijab: 1, niqab: 2, niqabBanned: false, islamophobia: 1 },
  "Malaysia": { hijab: 1, niqab: 2, niqabBanned: false, islamophobia: 1 },
  "Indonesia": { hijab: 1, niqab: 2, niqabBanned: false, islamophobia: 1 },
  "Turkey": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 1 },
  "Morocco": { hijab: 1, niqab: 2, niqabBanned: false, islamophobia: 1 },
  "Pakistan": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Bangladesh": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Iran": { hijab: 2, niqab: 2, niqabBanned: false, islamophobia: 1 }, // Mandatory hijab
  "Maldives": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },
  "Brunei": { hijab: 1, niqab: 1, niqabBanned: false, islamophobia: 1 },

  // Western countries - moderate
  "United States": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "United Kingdom": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Canada": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Germany": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 4 },
  "Australia": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "New Zealand": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Ireland": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Sweden": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Norway": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Finland": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Spain": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Italy": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },
  "Portugal": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Greece": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },

  // Asian countries
  "Japan": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "South Korea": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Thailand": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Singapore": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 2 },
  "Hong Kong": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Taiwan": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Vietnam": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 3 },
  "Philippines": { hijab: 3, niqab: 3, niqabBanned: false, islamophobia: 3 },
  "India": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 6 },
  "Myanmar": { hijab: 8, niqab: 9, niqabBanned: false, islamophobia: 9 },

  // Eastern Europe
  "Russia": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },
  "Poland": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },
  "Hungary": { hijab: 6, niqab: 7, niqabBanned: false, islamophobia: 6 },
  "Czech Republic": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },
  "Czechia": { hijab: 5, niqab: 6, niqabBanned: false, islamophobia: 5 },
  "Romania": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Serbia": { hijab: 5, niqab: 5, niqabBanned: false, islamophobia: 5 },
  "Croatia": { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 },
  "Bosnia and Herzegovina": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 2 },
  "Albania": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 2 },
  "Kosovo": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 2 },
  "North Macedonia": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Montenegro": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },

  // Latin America
  "Mexico": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Brazil": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Argentina": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Chile": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Colombia": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },
  "Peru": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 2 },

  // Africa
  "South Africa": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Kenya": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Tanzania": { hijab: 2, niqab: 3, niqabBanned: false, islamophobia: 2 },
  "Ethiopia": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Nigeria": { hijab: 2, niqab: 2, niqabBanned: false, islamophobia: 2 },
  "Ghana": { hijab: 3, niqab: 4, niqabBanned: false, islamophobia: 3 },
  "Senegal": { hijab: 1, niqab: 2, niqabBanned: false, islamophobia: 1 },
};

// Default discrimination for countries not listed
const defaultDiscrimination = { hijab: 4, niqab: 5, niqabBanned: false, islamophobia: 4 };

// Export functions
function getMuslimPercent(country) {
  // Try exact match first
  if (countryMuslimPercent[country]) {
    return countryMuslimPercent[country];
  }
  // Try common variations
  const variations = {
    "USA": "United States",
    "UK": "United Kingdom",
    "UAE": "United Arab Emirates",
    "Czech Republic": "Czechia",
    "Republic of Korea": "South Korea",
    "Korea": "South Korea",
  };
  if (variations[country]) {
    return countryMuslimPercent[variations[country]] || 0.5;
  }
  return 0.5; // Default for unknown countries
}

function hasAirportPrayerRoom(country) {
  return airportPrayerRooms[country] || false;
}

function hasIslamicBanking(country) {
  return islamicBankingCountries[country] || false;
}

function getDiscrimination(country) {
  return discriminationScores[country] || defaultDiscrimination;
}

module.exports = {
  countryMuslimPercent,
  airportPrayerRooms,
  islamicBankingCountries,
  discriminationScores,
  getMuslimPercent,
  hasAirportPrayerRoom,
  hasIslamicBanking,
  getDiscrimination,
};
