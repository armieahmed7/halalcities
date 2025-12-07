/**
 * Combine API data with any scraped enhancements
 * Creates the final comprehensive city dataset
 */

const fs = require('fs');
const path = require('path');

function combineData() {
  console.log('='.repeat(60));
  console.log('COMBINING CITY DATA');
  console.log('='.repeat(60));

  // Load API data (comprehensive base data)
  const apiData = require('./api-responses.json')[0].data;
  const cities = Object.values(apiData.cities);

  console.log(`\n📊 Processing ${cities.length} cities from API`);

  // Transform to our final format
  const finalCities = cities.map(city => ({
    // Identifiers
    slug: city.slug,
    shortSlug: city.short_slug,
    name: city.name,
    nameChinese: city.name_chinese || null,

    // Location
    country: city.country,
    countryCode: city.country_code,
    countrySlug: city.country_slug,
    state: city.state || null,
    region: city.region,
    latitude: parseFloat(city.latitude),
    longitude: parseFloat(city.longitude),
    population: parseInt(city.population) || null,

    // Rankings & Scores
    rank: city.rank,
    totalScore: city.total_score,
    overallScore: city.overall_score,
    costScore: city.cost_score,
    internetScore: city.internet_score,
    likesScore: city.likes_score,
    safetyLevel: city.safety_level,

    // Cost of Living (USD)
    costs: {
      nomadMonthly: Math.round(city.cost_for_nomad_in_usd),
      expatMonthly: Math.round(city.cost_for_expat_in_usd),
      localMonthly: Math.round(city.cost_for_local_in_usd),
      familyMonthly: Math.round(city.cost_for_family_in_usd),
    },

    // Internet & Infrastructure
    internetSpeed: city.internet_speed,

    // Weather & Environment
    weather: {
      temperatureC: parseInt(city.temperatureC) || null,
      temperatureF: parseFloat(city.temperatureF) || null,
      humidity: parseInt(city.humidity) || null,
      weatherEmoji: city.weather_emoji,
      airQualityNow: city.air_quality_now,
      airQualityScore: city.air_quality_score,
    },

    // Community
    community: {
      usersCount: city.users_count,
      usersCountEstimate: city.users_count_est,
      usersBeenCount: city.users_count_been,
      usersBeenEstimate: city.users_count_been_est,
      last2YearGrowth: city.last_2_year_growth,
    },

    // Media
    image: city.image,
    imageLastmod: city.image_lastmod,
  }));

  // Sort by rank
  finalCities.sort((a, b) => (a.rank || 9999) - (b.rank || 9999));

  // Create output
  const output = {
    metadata: {
      source: 'nomads.com',
      scrapedAt: new Date().toISOString(),
      totalCities: finalCities.length,
      dataFields: [
        'slug', 'name', 'country', 'region', 'coordinates',
        'rank', 'scores', 'costs', 'internetSpeed', 'weather',
        'community', 'image'
      ]
    },
    cities: finalCities
  };

  // Save full data
  const outputPath = path.join(__dirname, 'nomads-cities-full.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`✅ Saved full dataset to ${outputPath}`);

  // Create a compact version for smaller file size
  const compactCities = finalCities.map(city => ({
    slug: city.slug,
    name: city.name,
    country: city.country,
    region: city.region,
    rank: city.rank,
    score: city.overallScore,
    costNomad: city.costs.nomadMonthly,
    costLocal: city.costs.localMonthly,
    internet: city.internetSpeed,
    lat: city.latitude,
    lng: city.longitude,
    pop: city.population,
    image: city.image
  }));

  const compactOutput = {
    source: 'nomads.com',
    scrapedAt: new Date().toISOString(),
    count: compactCities.length,
    cities: compactCities
  };

  const compactPath = path.join(__dirname, 'nomads-cities-compact.json');
  fs.writeFileSync(compactPath, JSON.stringify(compactOutput, null, 2));
  console.log(`✅ Saved compact dataset to ${compactPath}`);

  // Print statistics
  console.log('\n📊 DATA STATISTICS:');
  console.log('='.repeat(40));

  // By region
  const byRegion = {};
  finalCities.forEach(city => {
    byRegion[city.region] = (byRegion[city.region] || 0) + 1;
  });
  console.log('\nCities by Region:');
  Object.entries(byRegion).sort((a, b) => b[1] - a[1]).forEach(([region, count]) => {
    console.log(`  ${region}: ${count}`);
  });

  // Top 20 cities
  console.log('\n🏆 Top 20 Cities:');
  finalCities.slice(0, 20).forEach((city, i) => {
    console.log(`  ${i + 1}. ${city.name}, ${city.country} (Score: ${city.overallScore?.toFixed(2)}, $${city.costs.nomadMonthly}/mo)`);
  });

  // Cost statistics
  const costs = finalCities.map(c => c.costs.nomadMonthly).filter(c => c);
  const avgCost = costs.reduce((a, b) => a + b, 0) / costs.length;
  const minCost = Math.min(...costs);
  const maxCost = Math.max(...costs);

  console.log('\n💰 Cost Statistics (Nomad Monthly):');
  console.log(`  Average: $${Math.round(avgCost)}`);
  console.log(`  Min: $${minCost}`);
  console.log(`  Max: $${maxCost}`);

  // Cheapest cities
  const cheapest = finalCities.filter(c => c.costs.nomadMonthly).sort((a, b) => a.costs.nomadMonthly - b.costs.nomadMonthly);
  console.log('\n💵 Cheapest Cities (Nomad):');
  cheapest.slice(0, 10).forEach((city, i) => {
    console.log(`  ${i + 1}. ${city.name}, ${city.country}: $${city.costs.nomadMonthly}/mo`);
  });

  // Most expensive
  console.log('\n💎 Most Expensive Cities (Nomad):');
  cheapest.slice(-10).reverse().forEach((city, i) => {
    console.log(`  ${i + 1}. ${city.name}, ${city.country}: $${city.costs.nomadMonthly}/mo`);
  });

  console.log('\n' + '='.repeat(60));
  console.log('DATA PROCESSING COMPLETE');
  console.log('='.repeat(60));

  return output;
}

combineData();
