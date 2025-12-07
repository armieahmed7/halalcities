/**
 * Enrich nomads.com city data with Muslim-relevant information
 *
 * This script:
 * 1. Takes the nomads.com city data
 * 2. Adds Muslim population estimates based on country data
 * 3. Estimates mosque counts, halal restaurants
 * 4. Calculates halal scores
 * 5. Adds discrimination scores, airport prayer room status, etc.
 */

const fs = require('fs');
const path = require('path');
const {
  getMuslimPercent,
  hasAirportPrayerRoom,
  hasIslamicBanking,
  getDiscrimination,
} = require('./country-muslim-data');

// Load nomads.com city data
const nomadsData = require('./nomads-cities-full.json');

// Unsplash image collection for cities (fallback images)
const cityImages = {
  default: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
  asia: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
  europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
  middleeast: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800",
  africa: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800",
  latinamerica: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
  northamerica: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
  oceania: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
};

// Major Muslim ethnicities by region/country
const ethnicityData = {
  "United States": ["African American", "Arab", "South Asian", "Somali", "Bosnian"],
  "United Kingdom": ["Pakistani", "Bangladeshi", "Somali", "Arab", "Turkish"],
  "Canada": ["Pakistani", "Arab", "Somali", "Bangladeshi", "Turkish"],
  "Germany": ["Turkish", "Arab", "Bosnian", "Afghan", "Pakistani"],
  "France": ["Moroccan", "Algerian", "Tunisian", "Turkish", "Sub-Saharan African"],
  "Netherlands": ["Turkish", "Moroccan", "Surinamese", "Indonesian"],
  "Australia": ["Lebanese", "Turkish", "Afghan", "Indonesian", "Pakistani"],
  "Malaysia": ["Malay", "Indian Muslim", "Arab", "Pakistani"],
  "Indonesia": ["Javanese", "Sundanese", "Malay", "Minangkabau"],
  "Turkey": ["Turkish", "Kurdish", "Arab"],
  "Saudi Arabia": ["Saudi Arab", "Egyptian", "Pakistani", "Indian", "Bangladeshi"],
  "United Arab Emirates": ["Emirati", "Indian", "Pakistani", "Bangladeshi", "Egyptian"],
  "Qatar": ["Qatari", "Indian", "Pakistani", "Egyptian", "Nepali"],
  "Kuwait": ["Kuwaiti", "Indian", "Egyptian", "Pakistani", "Sri Lankan"],
  "Egypt": ["Egyptian Arab", "Nubian", "Bedouin"],
  "Morocco": ["Arab", "Berber"],
  "Pakistan": ["Punjabi", "Sindhi", "Pashtun", "Baloch", "Muhajir"],
  "Bangladesh": ["Bengali"],
  "India": ["North Indian", "South Indian", "Kashmiri", "Bengali"],
  "Japan": ["Indonesian", "Pakistani", "Bangladeshi", "Turkish"],
  "South Korea": ["Indonesian", "Pakistani", "Bangladeshi"],
  "Thailand": ["Thai Malay", "South Asian", "Arab"],
  "Singapore": ["Malay", "Indian Muslim", "Arab"],
  "South Africa": ["Cape Malay", "Indian", "Somali"],
};

/**
 * Estimate Muslim population for a city
 */
function estimateMuslimPopulation(city, countryPercent) {
  const population = city.population || 500000;

  // Adjust percentage for cities (usually higher diversity in major cities)
  let cityPercent = countryPercent;

  // Major cities often have higher Muslim populations than country average
  if (population > 5000000) {
    cityPercent = Math.min(countryPercent * 1.3, 100);
  } else if (population > 1000000) {
    cityPercent = Math.min(countryPercent * 1.15, 100);
  }

  // Special adjustments for known diverse cities
  const diverseCities = {
    "new-york": 7,
    "london": 15,
    "paris": 10,
    "toronto": 8,
    "sydney": 5,
    "melbourne": 4,
    "birmingham": 27,
    "bradford": 30,
    "marseille": 25,
    "amsterdam": 8,
    "rotterdam": 15,
    "berlin": 8,
    "frankfurt": 12,
    "brussels": 25,
    "malmö": 20,
    "dearborn": 40, // Near Detroit
  };

  // Check for partial slug matches
  for (const [cityKey, percent] of Object.entries(diverseCities)) {
    if (city.slug.includes(cityKey)) {
      cityPercent = percent;
      break;
    }
  }

  const muslimPop = Math.round((cityPercent / 100) * population);
  return { population: muslimPop, percent: cityPercent };
}

/**
 * Estimate mosque count based on Muslim population
 * Average: 1 mosque per 1000-3000 Muslims in Western countries
 * Average: 1 mosque per 500-1500 Muslims in Muslim countries
 */
function estimateMosqueCount(muslimPopulation, countryPercent) {
  let mosquesPerMuslim;

  if (countryPercent >= 90) {
    // Muslim majority country - more mosques per capita
    mosquesPerMuslim = 800;
  } else if (countryPercent >= 50) {
    mosquesPerMuslim = 1200;
  } else if (countryPercent >= 10) {
    mosquesPerMuslim = 2000;
  } else {
    // Minority - fewer mosques
    mosquesPerMuslim = 3000;
  }

  return Math.max(Math.round(muslimPopulation / mosquesPerMuslim), 1);
}

/**
 * Estimate halal restaurant count
 */
function estimateHalalRestaurants(muslimPopulation, countryPercent, population) {
  // In Muslim countries, most restaurants are halal
  if (countryPercent >= 90) {
    return Math.round(population / 500); // Most restaurants
  } else if (countryPercent >= 50) {
    return Math.round(population / 800);
  } else {
    // Based on Muslim population
    return Math.max(Math.round(muslimPopulation / 400), 5);
  }
}

/**
 * Calculate halal score (0-100)
 */
function calculateHalalScore(city, enrichedData) {
  const weights = {
    muslimPopPercent: 0.25,
    mosqueDensity: 0.20,
    halalFoodDensity: 0.15,
    airportPrayer: 0.05,
    islamicBanking: 0.05,
    discrimination: 0.20,
    safety: 0.10,
  };

  let score = 0;
  const pop = city.population || 500000;

  // Muslim population percentage (max 25 points)
  score += Math.min(enrichedData.muslimPercent * 0.25, 25);

  // Mosque density (max 20 points)
  const mosquesPer100k = (enrichedData.mosques / pop) * 100000;
  score += Math.min(mosquesPer100k * 2, 20);

  // Halal food density (max 15 points)
  const restaurantsPer100k = (enrichedData.halalRestaurants / pop) * 100000;
  score += Math.min(restaurantsPer100k * 0.3, 15);

  // Airport prayer room (5 points)
  if (enrichedData.airportPrayerRoom) {
    score += 5;
  }

  // Islamic banking (5 points)
  if (enrichedData.islamicBanks) {
    score += 5;
  }

  // Discrimination score (inverse, max 20 points)
  // Lower discrimination = higher score
  const avgDiscrim = (enrichedData.discrimination.hijab + enrichedData.discrimination.islamophobia) / 2;
  score += (10 - avgDiscrim) * 2;

  // Safety (max 10 points)
  const safetyScore = city.safetyLevel || 5;
  score += safetyScore * 2;

  return Math.round(Math.min(Math.max(score, 0), 100));
}

/**
 * Get appropriate image for city
 */
function getCityImage(city) {
  // Use nomads.com image if available (extract original URL)
  if (city.image) {
    // The image URL is wrapped in resizeapi.com, extract original
    const match = city.image.match(/https:\/\/nomads\.com\/assets\/img\/places\/[^?]+/);
    if (match) {
      return match[0] + "?w=800";
    }
    return city.image;
  }

  // Fallback by region
  const region = city.region?.toLowerCase() || '';
  if (region.includes('asia')) return cityImages.asia;
  if (region.includes('europe')) return cityImages.europe;
  if (region.includes('middle')) return cityImages.middleeast;
  if (region.includes('africa')) return cityImages.africa;
  if (region.includes('latin') || region.includes('south america')) return cityImages.latinamerica;
  if (region.includes('north america')) return cityImages.northamerica;
  if (region.includes('oceania')) return cityImages.oceania;

  return cityImages.default;
}

/**
 * Generate slug for HalalCities format
 */
function generateSlug(city) {
  // Convert nomads slug to simpler format
  // "new-york-city-ny-united-states" -> "new-york"
  const parts = city.slug.split('-');

  // Remove country parts
  const countryWords = (city.country || '').toLowerCase().split(' ');
  const stateAbbrevs = ['ny', 'ca', 'tx', 'fl', 'il', 'pa', 'oh', 'ga', 'nc', 'mi', 'nj', 'va', 'wa', 'az', 'ma', 'tn', 'in', 'mo', 'md', 'wi', 'co', 'mn', 'sc', 'al', 'la', 'ky', 'or', 'ok', 'ct', 'ut', 'ia', 'nv', 'ar', 'ms', 'ks', 'nm', 'ne', 'wv', 'id', 'hi', 'nh', 'me', 'mt', 'ri', 'de', 'sd', 'nd', 'ak', 'dc', 'vt', 'wy'];

  let cleanParts = parts.filter(part => {
    if (countryWords.includes(part)) return false;
    if (stateAbbrevs.includes(part)) return false;
    if (part === 'city' && parts.length > 2) return false;
    return true;
  });

  // Limit to first 3 meaningful parts
  cleanParts = cleanParts.slice(0, 3);

  return cleanParts.join('-') || city.shortSlug || city.slug;
}

/**
 * Main enrichment function
 */
function enrichCities() {
  console.log('='.repeat(60));
  console.log('ENRICHING CITIES WITH MUSLIM DATA');
  console.log('='.repeat(60));

  const enrichedCities = [];
  const errors = [];

  for (const city of nomadsData.cities) {
    try {
      const country = city.country;
      const countryPercent = getMuslimPercent(country);
      const { population: muslimPop, percent: cityPercent } = estimateMuslimPopulation(city, countryPercent);
      const mosques = estimateMosqueCount(muslimPop, countryPercent);
      const halalRestaurants = estimateHalalRestaurants(muslimPop, countryPercent, city.population || 500000);
      const airportPrayerRoom = hasAirportPrayerRoom(country);
      const islamicBanks = hasIslamicBanking(country);
      const discrimination = getDiscrimination(country);

      const enrichedData = {
        muslimPopulation: muslimPop,
        muslimPercent: cityPercent,
        mosques,
        halalRestaurants,
        airportPrayerRoom,
        islamicBanks,
        discrimination,
      };

      const halalScore = calculateHalalScore(city, enrichedData);

      // Create HalalCities format
      const halalCity = {
        slug: generateSlug(city),
        name: city.name,
        country: city.country,
        region: city.region,
        primaryImage: getCityImage(city),
        coordinates: {
          lat: city.latitude,
          lng: city.longitude,
        },
        scores: {
          halal: halalScore,
          muslimPopulationPercent: Math.round(cityPercent),
          food: Math.min(Math.round((halalRestaurants / 100) * 10 + 40), 100),
          community: Math.min(Math.round(cityPercent * 2 + mosques / 10 + 30), 100),
          cost: Math.round(100 - (Number(city.costs?.nomadMonthly) || 2000) / 100),
          internet: Math.min(Math.round((Number(city.internetSpeed) || 20) * 1.2), 100),
          safety: (Number(city.safetyLevel) || 5) * 10 + 20,
          overall: Math.round((halalScore * 0.4) + (Number(city.overallScore) || 2.5) * 12),
        },
        stats: {
          muslimPopulation: muslimPop,
          mosques: mosques,
          halalRestaurants: halalRestaurants,
          monthlyBudget: Number(city.costs?.nomadMonthly) || 2000,
          internetSpeed: Number(city.internetSpeed) || 20,
        },
        features: {
          airportPrayerRoom: airportPrayerRoom,
          halalHotels: Math.max(Math.round(halalRestaurants / 20), 5),
          islamicBanks: islamicBanks,
          islamicSchools: Math.max(Math.round(muslimPop / 50000), 1),
        },
        extended: {
          demographics: {
            percentage: `${Math.round(cityPercent)}% of population`,
            population: muslimPop > 1000000 ? `${(muslimPop / 1000000).toFixed(1)}M Muslims` : `${Math.round(muslimPop / 1000)}k Muslims`,
            majorEthnicities: ethnicityData[country] || ["Local Muslim", "Arab", "South Asian"],
            areas: [],
          },
          discrimination: {
            hijab: discrimination.hijab,
            niqab: discrimination.niqab,
            niqabBanned: discrimination.niqabBanned,
            racism: Math.round((discrimination.hijab + discrimination.islamophobia) / 2),
            islamophobia: discrimination.islamophobia,
          },
          airport: {
            hasPrayerRoom: airportPrayerRoom,
            prayerRoomDetails: airportPrayerRoom ? "Prayer facilities available at major airport" : null,
          },
          hotels: {
            withHalalBreakfast: [],
            withBidet: [],
            withHalalOptions: [],
          },
          islamicFinance: {
            banks: islamicBanks ? ["Islamic banking options available"] : [],
            insurance: [],
          },
          foodAndDining: {
            numberOfRestaurants: `${halalRestaurants}+`,
            halalMeatShops: `${Math.round(halalRestaurants / 10)}+`,
            favouriteRestaurants: [],
            featuredRestaurants: [],
          },
          religiousInfrastructure: {
            numberOfMosques: `${mosques}+`,
            mosquesForJumah: [],
            qiblahDirection: calculateQibla(city.latitude, city.longitude),
            fastingHours: getFastingHours(city.latitude),
            localOrganizations: [],
            numberOfIslamicSchools: `${Math.max(Math.round(muslimPop / 50000), 1)}+`,
            islamicSchoolNames: [],
          },
          tourism: {
            internationalArrivals: "",
            muslimVisitorArrivals: "",
            mainAttractions: [],
            bestShoppingAreas: [],
            fleaMarkets: [],
            famousParks: [],
          },
          digitalNomad: {
            internetSpeed: Number(city.internetSpeed) || 20,
            freeWifiAvailability: Math.min(Math.round((Number(city.internetSpeed) || 20) / 10), 10),
            placesToWorkFrom: [],
          },
          costOfLiving: {
            monthlyBudgetExpat: Number(city.costs?.expatMonthly) || Number(city.costs?.nomadMonthly) || 2000,
          },
          qualityOfLife: {
            safety: Number(city.safetyLevel) || 5,
            airQuality: city.weather?.airQualityScore ? Math.max(1, 10 - Number(city.weather.airQualityScore)) : 5,
            healthcare: 5,
            happiness: 5,
            walkability: 5,
            peace: Number(city.safetyLevel) || 5,
            trafficSafety: 5,
            friendlyToForeigners: 7,
            englishSpeaking: 5,
            freedomOfSpeech: 7,
            racialTolerance: Math.max(1, 10 - (Number(discrimination.racism) || 5)),
            femaleFriendly: Math.max(1, 10 - (Number(discrimination.hijab) || 5)),
          },
          practicalInfo: {
            language: getLanguage(city.country),
            region: city.region,
            country: city.country,
            cashlessSociety: 5,
            safeTapWater: isTapWaterSafe(city.country),
          },
          travel: {},
        },
        // Keep original nomads data for reference
        _nomadsData: {
          slug: city.slug,
          rank: city.rank,
          overallScore: city.overallScore,
          costs: city.costs,
          weather: city.weather,
          community: city.community,
        },
      };

      enrichedCities.push(halalCity);
    } catch (error) {
      errors.push({ city: city.name, error: error.message });
    }
  }

  console.log(`\n✅ Enriched ${enrichedCities.length} cities`);
  console.log(`❌ Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\nFirst 10 errors:');
    errors.slice(0, 10).forEach(e => console.log(`  - ${e.city}: ${e.error}`));
  }

  // Sort by halal score
  enrichedCities.sort((a, b) => b.scores.halal - a.scores.halal);

  // Save enriched data
  const output = {
    metadata: {
      source: 'nomads.com + AI enrichment',
      enrichedAt: new Date().toISOString(),
      totalCities: enrichedCities.length,
    },
    cities: enrichedCities,
  };

  const outputPath = path.join(__dirname, 'halal-cities-enriched.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`\n✅ Saved to ${outputPath}`);

  // Print statistics
  console.log('\n📊 TOP 20 HALAL-FRIENDLY CITIES:');
  enrichedCities.slice(0, 20).forEach((city, i) => {
    console.log(`  ${i + 1}. ${city.name}, ${city.country} (Halal: ${city.scores.halal}, Muslim: ${city.scores.muslimPopulationPercent}%)`);
  });

  // By region
  const byRegion = {};
  enrichedCities.forEach(city => {
    byRegion[city.region] = (byRegion[city.region] || 0) + 1;
  });
  console.log('\n📍 CITIES BY REGION:');
  Object.entries(byRegion).sort((a, b) => b[1] - a[1]).forEach(([region, count]) => {
    console.log(`  ${region}: ${count}`);
  });

  return enrichedCities;
}

/**
 * Calculate Qibla direction from coordinates
 */
function calculateQibla(lat, lng) {
  // Kaaba coordinates
  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;

  const latRad = lat * Math.PI / 180;
  const lngRad = lng * Math.PI / 180;
  const kaabaLatRad = kaabaLat * Math.PI / 180;
  const kaabaLngRad = kaabaLng * Math.PI / 180;

  const y = Math.sin(kaabaLngRad - lngRad);
  const x = Math.cos(latRad) * Math.tan(kaabaLatRad) - Math.sin(latRad) * Math.cos(kaabaLngRad - lngRad);

  let qibla = Math.atan2(y, x) * 180 / Math.PI;
  if (qibla < 0) qibla += 360;

  return `${Math.round(qibla)}° from North`;
}

/**
 * Estimate fasting hours based on latitude
 */
function getFastingHours(lat) {
  const absLat = Math.abs(lat);
  if (absLat > 60) {
    return "Follow nearest city or Mecca times (extreme latitude)";
  } else if (absLat > 50) {
    return "~18-20 hours (summer), ~8-10 hours (winter)";
  } else if (absLat > 40) {
    return "~16-18 hours (summer), ~10-12 hours (winter)";
  } else if (absLat > 30) {
    return "~15-16 hours (summer), ~11-12 hours (winter)";
  } else if (absLat > 20) {
    return "~14-15 hours (summer), ~12-13 hours (winter)";
  } else {
    return "~13-14 hours year-round (near equator)";
  }
}

/**
 * Get primary language for country
 */
function getLanguage(country) {
  const languages = {
    "United States": "English",
    "United Kingdom": "English",
    "Canada": "English/French",
    "Australia": "English",
    "New Zealand": "English",
    "Germany": "German",
    "France": "French",
    "Spain": "Spanish",
    "Italy": "Italian",
    "Portugal": "Portuguese",
    "Netherlands": "Dutch",
    "Belgium": "Dutch/French",
    "Switzerland": "German/French/Italian",
    "Austria": "German",
    "Japan": "Japanese",
    "South Korea": "Korean",
    "China": "Mandarin",
    "Taiwan": "Mandarin",
    "Thailand": "Thai",
    "Vietnam": "Vietnamese",
    "Indonesia": "Indonesian",
    "Malaysia": "Malay/English",
    "Singapore": "English/Malay/Mandarin",
    "Philippines": "Filipino/English",
    "India": "Hindi/English",
    "Pakistan": "Urdu/English",
    "Bangladesh": "Bengali",
    "Turkey": "Turkish",
    "Egypt": "Arabic",
    "Morocco": "Arabic/French",
    "Saudi Arabia": "Arabic",
    "United Arab Emirates": "Arabic/English",
    "Qatar": "Arabic/English",
    "Kuwait": "Arabic",
    "Bahrain": "Arabic",
    "Oman": "Arabic",
    "Jordan": "Arabic",
    "Lebanon": "Arabic/French",
    "Iran": "Persian",
    "Russia": "Russian",
    "Poland": "Polish",
    "Czech Republic": "Czech",
    "Czechia": "Czech",
    "Hungary": "Hungarian",
    "Romania": "Romanian",
    "Greece": "Greek",
    "Mexico": "Spanish",
    "Brazil": "Portuguese",
    "Argentina": "Spanish",
    "Colombia": "Spanish",
    "Chile": "Spanish",
    "Peru": "Spanish",
    "South Africa": "English/Afrikaans",
    "Kenya": "Swahili/English",
    "Nigeria": "English",
    "Ghana": "English",
    "Ethiopia": "Amharic",
    "Tanzania": "Swahili/English",
  };
  return languages[country] || "Local language";
}

/**
 * Check if tap water is safe
 */
function isTapWaterSafe(country) {
  const safeCountries = [
    "United States", "Canada", "United Kingdom", "Germany", "France",
    "Spain", "Italy", "Portugal", "Netherlands", "Belgium", "Switzerland",
    "Austria", "Sweden", "Norway", "Denmark", "Finland", "Ireland",
    "Japan", "South Korea", "Australia", "New Zealand", "Singapore",
    "Israel", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain",
    "Czech Republic", "Czechia", "Poland", "Estonia", "Slovenia", "Croatia",
    "Greece", "Malta", "Cyprus", "Iceland", "Luxembourg",
  ];
  return safeCountries.includes(country);
}

// Run enrichment
enrichCities();
