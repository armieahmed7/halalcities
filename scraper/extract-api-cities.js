/**
 * Extract city data from the API response
 * This provides the initial list of 1370 cities with basic data
 */

const fs = require('fs');
const path = require('path');

function extractCities() {
  console.log('='.repeat(60));
  console.log('EXTRACTING CITIES FROM API RESPONSE');
  console.log('='.repeat(60));

  const apiData = require('./api-responses.json')[0].data;

  console.log(`\nTotal city slugs: ${apiData.slugs.length}`);
  console.log(`Total cities in data: ${Object.keys(apiData.cities).length}`);

  // Extract cities
  const cities = [];

  for (const key of Object.keys(apiData.cities)) {
    const city = apiData.cities[key];
    cities.push({
      // Basic info
      slug: city.slug,
      shortSlug: city.short_slug,
      name: city.name,
      nameChinese: city.name_chinese,
      country: city.country,
      countryCode: city.country_code,
      countrySlug: city.country_slug,
      state: city.state || null,
      region: city.region,

      // Location
      latitude: parseFloat(city.latitude),
      longitude: parseFloat(city.longitude),
      population: parseInt(city.population) || null,

      // Scores
      totalScore: city.total_score,
      overallScore: city.overall_score,
      costScore: city.cost_score,
      internetScore: city.internet_score,
      likesScore: city.likes_score,
      safetyLevel: city.safety_level,
      rank: city.rank,

      // Cost
      costForNomadUSD: city.cost_for_nomad_in_usd,
      costForExpatUSD: city.cost_for_expat_in_usd,
      costForLocalUSD: city.cost_for_local_in_usd,
      costForFamilyUSD: city.cost_for_family_in_usd,

      // Infrastructure
      internetSpeed: city.internet_speed,

      // Environment
      airQualityNow: city.air_quality_now,
      airQuality: city.air_quality,
      airQualityScore: city.air_quality_score,
      humidity: parseInt(city.humidity) || null,
      temperatureC: parseInt(city.temperatureC) || null,
      temperatureF: parseFloat(city.temperatureF) || null,
      weatherEmoji: city.weather_emoji,

      // Community
      usersCount: city.users_count,
      usersCountEst: city.users_count_est,
      usersCountBeen: city.users_count_been,

      // Growth
      last2YearGrowth: city.last_2_year_growth,

      // Image
      image: city.image,
      imageLastmod: city.image_lastmod
    });
  }

  // Sort by rank
  cities.sort((a, b) => (a.rank || 9999) - (b.rank || 9999));

  // Save to file
  const output = {
    scrapedAt: new Date().toISOString(),
    source: 'nomads.com API',
    totalCities: cities.length,
    cities: cities
  };

  const outputPath = path.join(__dirname, 'nomads-cities-basic.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`\n✅ Extracted ${cities.length} cities`);
  console.log(`✅ Saved to ${outputPath}`);

  // Print sample
  console.log('\n📊 Top 10 cities:');
  cities.slice(0, 10).forEach((city, i) => {
    console.log(`  ${i + 1}. ${city.name}, ${city.country} (Score: ${city.overallScore}, Rank: ${city.rank})`);
  });

  // Save slug list for detailed scraping
  const slugs = cities.map(c => c.slug);
  fs.writeFileSync(
    path.join(__dirname, 'city-slugs.json'),
    JSON.stringify({ totalCities: slugs.length, slugs }, null, 2)
  );
  console.log(`\n✅ Saved ${slugs.length} city slugs for detailed scraping`);

  return cities;
}

extractCities();
