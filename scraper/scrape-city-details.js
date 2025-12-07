/**
 * Nomads.com Detailed City Scraper
 *
 * Scrapes detailed information from individual city pages.
 * Run after extract-api-cities.js to get the full slug list.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BATCH_SIZE = 50; // Number of cities to scrape per batch
const DELAY_BETWEEN_CITIES = 2000; // 2 seconds between requests
const DELAY_BETWEEN_BATCHES = 5000; // 5 seconds between batches
const MAX_RETRIES = 3;

// Output directories
const OUTPUT_DIR = path.join(__dirname, 'data', 'cities');
const PROGRESS_FILE = path.join(__dirname, 'scrape-progress.json');

async function scrapeCity(page, slug) {
  const url = `https://nomads.com/${slug}`;

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    // Wait for content to load
    await page.waitForTimeout(1500);

    // Extract all city data from the page
    const cityData = await page.evaluate(() => {
      // Helper to extract text from selectors
      const getText = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.textContent.trim() : null;
      };

      // Helper to extract all text matching a pattern
      const extractValue = (label) => {
        // Look for elements containing the label
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          if (el.textContent && el.textContent.includes(label)) {
            // Try to get the value from nearby elements
            const parent = el.parentElement;
            if (parent) {
              const text = parent.textContent;
              // Extract numbers/values
              const match = text.match(new RegExp(label + '[:\\s]*([\\d,.]+[\\w%°$€£]*)'));
              if (match) return match[1];
            }
          }
        }
        return null;
      };

      // Get all data attributes from the page
      const dataFromDOM = {};

      // Try to find JSON-LD or data attributes
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        try {
          const data = JSON.parse(script.textContent);
          Object.assign(dataFromDOM, data);
        } catch (e) {}
      });

      // Get the page title as city name
      const pageTitle = document.title || '';
      const cityName = pageTitle.split(' - ')[0] || pageTitle.split(' | ')[0] || '';

      // Extract key metrics using common patterns on the page
      const extractMetric = (patterns) => {
        for (const pattern of patterns) {
          const elements = document.querySelectorAll('[class*="' + pattern + '"], [data-*="' + pattern + '"]');
          for (const el of elements) {
            const text = el.textContent.trim();
            if (text) return text;
          }
        }
        return null;
      };

      // Collect all visible text and numbers
      const allText = document.body.innerText || '';

      // Parse specific data points using regex patterns
      const parseFromText = (regex, text) => {
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      // Return extracted data
      return {
        pageTitle: cityName,
        fullText: allText.slice(0, 50000), // First 50KB of text for parsing
        url: window.location.href,
        timestamp: new Date().toISOString()
      };
    });

    // Parse the text content for specific values
    const text = cityData.fullText;
    const data = {
      slug: slug,
      name: cityData.pageTitle,
      url: cityData.url,
      scrapedAt: cityData.timestamp,

      // Scores
      totalScore: parseFloat(text.match(/(\d\.\d{1,2})\/5/)?.[1]) || null,
      reviewCount: parseInt(text.match(/(\d{1,3}(?:,\d{3})*)\s*reviews?/i)?.[1]?.replace(/,/g, '')) || null,
      rank: parseInt(text.match(/#(\d+)/)?.[1]) || null,

      // Quality ratings (parse Good/Great/Okay/Bad)
      qualityOfLife: text.match(/Quality of Life\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      familyScore: text.match(/Family Score\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      communityScore: text.match(/Community Score\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      funRating: text.match(/Fun\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,

      // Costs
      costs: {
        nomadMonthly: parseInt(text.match(/Nomad[:\s]*\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        expatMonthly: parseInt(text.match(/Expat[:\s]*\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        localMonthly: parseInt(text.match(/Local[:\s]*\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        familyMonthly: parseInt(text.match(/Family[:\s]*\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        hotelNightly: parseInt(text.match(/Hotel.*?\$?([\d,]+)\/night/i)?.[1]?.replace(/,/g, '')) || null,
        airbnbNightly: parseInt(text.match(/Airbnb.*?\$?([\d,]+)\/night/i)?.[1]?.replace(/,/g, '')) || null,
        studioRent: parseInt(text.match(/1BR.*?\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        coworking: parseInt(text.match(/Coworking.*?\$?([\d,]+)\/month/i)?.[1]?.replace(/,/g, '')) || null,
        homePrice: parseInt(text.match(/Home Price.*?\$?([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
        dinner: parseInt(text.match(/Dinner[:\s]*\$?(\d+)/i)?.[1]) || null,
        coffee: parseInt(text.match(/Coffee[:\s]*\$?(\d+)/i)?.[1]) || null,
        beer: parseInt(text.match(/Beer[:\s]*\$?(\d+)/i)?.[1]) || null,
        mobileData: parseInt(text.match(/Mobile Data.*?\$?(\d+)/i)?.[1]) || null,
        taxi: parseInt(text.match(/Taxi.*?\$?(\d+)/i)?.[1]) || null
      },

      // Internet
      internetSpeed: parseInt(text.match(/(\d+)\s*Mbps/i)?.[1]) || null,
      wifiQuality: text.match(/WiFi\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      workingSpaces: text.match(/Working Spaces\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,

      // Weather
      weather: {
        temperatureC: parseInt(text.match(/(\d+)°C/)?.[1]) || null,
        temperatureF: parseInt(text.match(/(\d+)°F/)?.[1]) || null,
        humidity: parseInt(text.match(/Humidity[:\s]*(\d+)%/i)?.[1]) || null,
        acInBuildings: parseInt(text.match(/AC.*?(\d+)%/i)?.[1]) || null,
        airQualityNow: parseInt(text.match(/Air Quality.*?now.*?(\d+)/i)?.[1]) || null,
        airQualityAnnual: parseInt(text.match(/Air Quality.*?annual.*?(\d+)/i)?.[1]) || null
      },

      // Safety
      safety: {
        overall: text.match(/Overall Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        women: text.match(/Women'?s? Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        lgbtq: text.match(/LGBTQ\+?\s*Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        food: text.match(/Food Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        crime: text.match(/Crime\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        racism: text.match(/Racism\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        traffic: text.match(/Traffic Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null
      },

      // Lifestyle
      lifestyle: {
        nightlife: text.match(/Nightlife\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        walkability: text.match(/Walkability\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        happiness: text.match(/Happiness\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        friendlyToForeigners: text.match(/Friendly to Foreigners\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        freedomOfSpeech: text.match(/Freedom of Speech\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        englishSpeaking: text.match(/English Speaking\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        startupScore: text.match(/Startup Score\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null
      },

      // Demographics
      demographics: {
        population: parseInt(text.match(/Population[:\s]*([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
        gdpPerCapita: parseInt(text.match(/GDP Per Capita[:\s]*\$?([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
        visitorsPerYear: parseInt(text.match(/Visitors.*?Year[:\s]*([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null
      },

      // Infrastructure
      infrastructure: {
        powerGrid: text.match(/Power Grid\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        hospitals: text.match(/Hospitals\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null
      }
    };

    return data;

  } catch (error) {
    console.error(`Error scraping ${slug}:`, error.message);
    return null;
  }
}

async function loadProgress() {
  try {
    if (fs.existsSync(PROGRESS_FILE)) {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
    }
  } catch (e) {}
  return { completed: [], failed: [], lastIndex: 0 };
}

async function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function main() {
  console.log('='.repeat(60));
  console.log('NOMADS.COM DETAILED CITY SCRAPER');
  console.log('='.repeat(60));

  // Load city slugs
  const slugsFile = path.join(__dirname, 'city-slugs.json');
  if (!fs.existsSync(slugsFile)) {
    console.error('❌ city-slugs.json not found. Run extract-api-cities.js first.');
    process.exit(1);
  }

  const { slugs } = JSON.parse(fs.readFileSync(slugsFile, 'utf-8'));
  console.log(`\n📊 Total cities to scrape: ${slugs.length}`);

  // Load progress
  const progress = await loadProgress();
  console.log(`📋 Already completed: ${progress.completed.length}`);
  console.log(`❌ Previously failed: ${progress.failed.length}`);

  // Filter out completed cities
  const remainingSlugs = slugs.filter(s => !progress.completed.includes(s));
  console.log(`📝 Remaining to scrape: ${remainingSlugs.length}`);

  if (remainingSlugs.length === 0) {
    console.log('\n✅ All cities have been scraped!');
    return;
  }

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });

  const page = await context.newPage();

  // Process in batches
  const batches = [];
  for (let i = 0; i < remainingSlugs.length; i += BATCH_SIZE) {
    batches.push(remainingSlugs.slice(i, i + BATCH_SIZE));
  }

  console.log(`\n🔄 Processing ${batches.length} batches of ${BATCH_SIZE} cities each`);

  let totalProcessed = 0;
  let successCount = 0;
  let failCount = 0;

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`\n📦 Batch ${batchIndex + 1}/${batches.length} (${batch.length} cities)`);

    for (let i = 0; i < batch.length; i++) {
      const slug = batch[i];
      totalProcessed++;

      process.stdout.write(`  [${totalProcessed}/${remainingSlugs.length}] ${slug}... `);

      let success = false;
      let data = null;

      for (let retry = 0; retry < MAX_RETRIES; retry++) {
        data = await scrapeCity(page, slug);
        if (data) {
          success = true;
          break;
        }
        console.log(`retry ${retry + 1}...`);
        await page.waitForTimeout(1000);
      }

      if (success && data) {
        // Save individual city file
        const cityFile = path.join(OUTPUT_DIR, `${slug}.json`);
        fs.writeFileSync(cityFile, JSON.stringify(data, null, 2));

        progress.completed.push(slug);
        successCount++;
        console.log('✓');
      } else {
        progress.failed.push(slug);
        failCount++;
        console.log('✗');
      }

      // Save progress periodically
      if (totalProcessed % 10 === 0) {
        await saveProgress(progress);
      }

      // Delay between requests
      await page.waitForTimeout(DELAY_BETWEEN_CITIES);
    }

    // Save progress after each batch
    await saveProgress(progress);

    // Delay between batches
    if (batchIndex < batches.length - 1) {
      console.log(`  ⏳ Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...`);
      await page.waitForTimeout(DELAY_BETWEEN_BATCHES);
    }
  }

  await browser.close();

  // Final summary
  console.log('\n' + '='.repeat(60));
  console.log('SCRAPING COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Successfully scraped: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📁 City files saved to: ${OUTPUT_DIR}`);

  // Save final progress
  await saveProgress(progress);
}

main().catch(console.error);
