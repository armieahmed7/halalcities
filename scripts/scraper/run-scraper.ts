import dotenv from 'dotenv';
import path from 'path';
import { majorCities, scrapeAllCities } from './city-scraper';
import { scrapeEnhancedCityData } from './enhanced-scraper';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

// Verify environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing required environment variables!');
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
  process.exit(1);
}

// Main execution function
async function main() {
  console.log('🌍 HalalCities Data Scraper');
  console.log('==========================');
  console.log(`📍 Target: ${majorCities.length} cities`);
  console.log(`🔗 Supabase URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`);
  console.log('');
  
  const args = process.argv.slice(2);
  const useEnhanced = args.includes('--enhanced');
  const limit = args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : undefined;
  
  if (useEnhanced) {
    console.log('🚀 Using enhanced scraper with detailed data...');
    await runEnhancedScraper(limit);
  } else {
    console.log('🚀 Using basic scraper...');
    await scrapeAllCities();
  }
}

// Run enhanced scraper
async function runEnhancedScraper(limit?: number) {
  const citiesToProcess = limit ? majorCities.slice(0, limit) : majorCities;
  console.log(`Processing ${citiesToProcess.length} cities...`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Process in smaller batches for enhanced data
  const batchSize = 5;
  
  for (let i = 0; i < citiesToProcess.length; i += batchSize) {
    const batch = citiesToProcess.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(citiesToProcess.length / batchSize)}`);
    
    const promises = batch.map(city => 
      scrapeEnhancedCityData({
        ...city,
        population: getPopulationForCity(city.name)
      })
    );
    
    const results = await Promise.all(promises);
    
    results.forEach(result => {
      if (result) successCount++;
      else errorCount++;
    });
    
    console.log(`Progress: ${i + batch.length}/${citiesToProcess.length} cities`);
    
    // Longer delay between batches for enhanced scraping
    if (i + batchSize < citiesToProcess.length) {
      console.log('⏳ Waiting before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('\n✨ Scraping complete!');
  console.log(`✅ Success: ${successCount} cities`);
  console.log(`❌ Errors: ${errorCount} cities`);
}

// Get population for a city (helper function)
function getPopulationForCity(cityName: string): number {
  const populations: Record<string, number> = {
    "New York City": 8336000,
    "London": 9000000,
    "Paris": 2161000,
    "Tokyo": 13960000,
    "Dubai": 3331000,
    "Istanbul": 15462000,
    "Singapore": 5686000,
    "Sydney": 5312000,
    "Toronto": 2931000,
    "Berlin": 3769000,
    "Madrid": 3266000,
    "Rome": 2873000,
    "Bangkok": 8281000,
    "Mumbai": 20667000,
    "Cairo": 20900000,
    "Lagos": 14368000,
    "São Paulo": 22043000,
    // Add more as needed
  };
  
  return populations[cityName] || 1000000;
}

// Run the scraper
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});