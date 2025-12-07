/**
 * Generate cities.ts file from enriched data
 */

const fs = require('fs');
const path = require('path');

const enrichedData = require('./halal-cities-enriched.json');

function generateCitiesTS() {
  console.log('='.repeat(60));
  console.log('GENERATING cities.ts');
  console.log('='.repeat(60));

  // Take all cities (sorted by halal score)
  const cities = enrichedData.cities;

  console.log(`\nProcessing ${cities.length} cities...`);

  // Generate TypeScript content
  let tsContent = `import { City } from '@/types/city'

export const cities: City[] = [
`;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    // Clean up data
    const cleanCity = {
      slug: city.slug,
      name: city.name,
      country: city.country,
      region: city.region || 'Unknown',
      primaryImage: city.primaryImage,
      coordinates: city.coordinates,
      scores: {
        halal: Math.min(city.scores.halal, 100),
        muslimPopulationPercent: Math.min(city.scores.muslimPopulationPercent, 100),
        food: Math.min(city.scores.food, 100),
        community: Math.min(city.scores.community, 100),
        cost: Math.max(Math.min(city.scores.cost, 100), 0),
        internet: Math.min(city.scores.internet, 100),
        safety: Math.min(city.scores.safety, 100),
        overall: Math.min(city.scores.overall, 100),
      },
      stats: {
        muslimPopulation: city.stats.muslimPopulation,
        mosques: city.stats.mosques,
        halalRestaurants: city.stats.halalRestaurants,
        monthlyBudget: city.stats.monthlyBudget,
        internetSpeed: city.stats.internetSpeed,
      },
      features: {
        airportPrayerRoom: city.features.airportPrayerRoom,
        halalHotels: city.features.halalHotels,
        islamicBanks: city.features.islamicBanks,
        islamicSchools: city.features.islamicSchools,
      },
      extended: city.extended,
    };

    // Remove _nomadsData from extended if present
    if (cleanCity.extended && cleanCity.extended._nomadsData) {
      delete cleanCity.extended._nomadsData;
    }

    // Generate city object string
    const cityStr = JSON.stringify(cleanCity, null, 2)
      .replace(/"(\w+)":/g, '$1:')  // Remove quotes from keys
      .replace(/: "([^"]+)"/g, ': "$1"')  // Keep quotes for string values
      .replace(/\n/g, '\n  ');  // Add indentation

    tsContent += `  ${cityStr},\n`;

    if ((i + 1) % 100 === 0) {
      console.log(`  Processed ${i + 1} cities...`);
    }
  }

  tsContent += `]
`;

  // Write to file
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'cities.ts');
  fs.writeFileSync(outputPath, tsContent);

  console.log(`\n✅ Generated ${outputPath}`);
  console.log(`   File size: ${(Buffer.byteLength(tsContent) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total cities: ${cities.length}`);

  // Also create a smaller version with just top 500 cities
  const top500 = cities.slice(0, 500);
  let ts500Content = `import { City } from '@/types/city'

export const cities: City[] = [
`;

  for (const city of top500) {
    const cleanCity = {
      slug: city.slug,
      name: city.name,
      country: city.country,
      region: city.region || 'Unknown',
      primaryImage: city.primaryImage,
      coordinates: city.coordinates,
      scores: {
        halal: Math.min(city.scores.halal, 100),
        muslimPopulationPercent: Math.min(city.scores.muslimPopulationPercent, 100),
        food: Math.min(city.scores.food, 100),
        community: Math.min(city.scores.community, 100),
        cost: Math.max(Math.min(city.scores.cost, 100), 0),
        internet: Math.min(city.scores.internet, 100),
        safety: Math.min(city.scores.safety, 100),
        overall: Math.min(city.scores.overall, 100),
      },
      stats: {
        muslimPopulation: city.stats.muslimPopulation,
        mosques: city.stats.mosques,
        halalRestaurants: city.stats.halalRestaurants,
        monthlyBudget: city.stats.monthlyBudget,
        internetSpeed: city.stats.internetSpeed,
      },
      features: {
        airportPrayerRoom: city.features.airportPrayerRoom,
        halalHotels: city.features.halalHotels,
        islamicBanks: city.features.islamicBanks,
        islamicSchools: city.features.islamicSchools,
      },
      extended: city.extended,
    };

    if (cleanCity.extended && cleanCity.extended._nomadsData) {
      delete cleanCity.extended._nomadsData;
    }

    const cityStr = JSON.stringify(cleanCity, null, 2)
      .replace(/"(\w+)":/g, '$1:')
      .replace(/: "([^"]+)"/g, ': "$1"')
      .replace(/\n/g, '\n  ');

    ts500Content += `  ${cityStr},\n`;
  }

  ts500Content += `]
`;

  const output500Path = path.join(__dirname, 'cities-top500.ts');
  fs.writeFileSync(output500Path, ts500Content);
  console.log(`✅ Also generated top 500 cities version: ${output500Path}`);

  return cities.length;
}

generateCitiesTS();
