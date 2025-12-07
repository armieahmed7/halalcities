/**
 * Test scraper on a few cities to verify it works
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TEST_CITIES = [
  'bangkok-thailand',
  'lisbon-portugal',
  'dubai-united-arab-emirates',
  'tokyo-japan',
  'new-york-city-ny-united-states'
];

async function scrapeCity(page, slug) {
  const url = `https://nomads.com/${slug}`;

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    await page.waitForTimeout(2000);

    // Get page content
    const text = await page.evaluate(() => document.body.innerText);

    // Parse specific values
    const data = {
      slug: slug,
      url: url,
      scrapedAt: new Date().toISOString(),

      // Scores
      totalScore: parseFloat(text.match(/(\d\.\d{1,2})\/5/)?.[1]) || null,
      reviewCount: parseInt(text.match(/(\d{1,3}(?:,\d{3})*)\s*reviews?/i)?.[1]?.replace(/,/g, '')) || null,
      rank: parseInt(text.match(/#(\d+)/)?.[1]) || null,

      // Quality ratings
      qualityOfLife: text.match(/Quality of Life\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      familyScore: text.match(/Family Score\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      communityScore: text.match(/Community Score\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,

      // Costs
      costs: {
        nomadMonthly: parseInt(text.match(/Nomad[:\s]*\$?([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
        expatMonthly: parseInt(text.match(/Expat[:\s]*\$?([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
        localMonthly: parseInt(text.match(/Local[:\s]*\$?([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
      },

      // Internet
      internetSpeed: parseInt(text.match(/(\d+)\s*Mbps/i)?.[1]) || null,

      // Weather
      temperatureC: parseInt(text.match(/(\d+)°C/)?.[1]) || null,

      // Safety
      safety: {
        overall: text.match(/Overall Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        women: text.match(/Women'?s? Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
        lgbtq: text.match(/LGBTQ\+?\s*Safety\s*[:\-]?\s*(Great|Good|Okay|Bad|Mediocre)/i)?.[1] || null,
      },

      // Demographics
      population: parseInt(text.match(/Population[:\s]*([\d,]+)/i)?.[1]?.replace(/,/g, '')) || null,
    };

    return data;

  } catch (error) {
    console.error(`Error scraping ${slug}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('TESTING CITY SCRAPER');
  console.log('='.repeat(60));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });
  const page = await context.newPage();

  const results = [];

  for (const slug of TEST_CITIES) {
    console.log(`\n📍 Scraping ${slug}...`);
    const data = await scrapeCity(page, slug);

    if (data) {
      results.push(data);
      console.log(`  ✓ Score: ${data.totalScore}/5`);
      console.log(`  ✓ Rank: #${data.rank}`);
      console.log(`  ✓ Nomad cost: $${data.costs.nomadMonthly}/month`);
      console.log(`  ✓ Internet: ${data.internetSpeed} Mbps`);
      console.log(`  ✓ Temperature: ${data.temperatureC}°C`);
      console.log(`  ✓ Safety: ${data.safety.overall}`);
    } else {
      console.log(`  ✗ Failed to scrape`);
    }

    await page.waitForTimeout(2000);
  }

  await browser.close();

  // Save test results
  const outputPath = path.join(__dirname, 'test-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Test results saved to ${outputPath}`);

  console.log('\n' + '='.repeat(60));
  console.log(`SUMMARY: ${results.length}/${TEST_CITIES.length} cities scraped successfully`);
  console.log('='.repeat(60));
}

main().catch(console.error);
