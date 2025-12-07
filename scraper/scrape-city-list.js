/**
 * Nomads.com City List Scraper
 *
 * Phase 1: Extract all city slugs from the homepage
 * This script scrolls through the infinite-scroll city grid
 * and collects all city URLs/slugs.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeCityList() {
  console.log('='.repeat(60));
  console.log('NOMADS.COM CITY LIST SCRAPER');
  console.log('='.repeat(60));

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  console.log('\n📍 Loading nomads.com...');

  try {
    await page.goto('https://nomads.com/', {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    console.log('✓ Page loaded');

    // Wait for city cards to appear
    await page.waitForSelector('a[href*="/"]', { timeout: 10000 });

    // Scroll to load all cities (infinite scroll)
    console.log('\n📜 Scrolling to load all cities...');

    let previousHeight = 0;
    let currentHeight = await page.evaluate(() => document.body.scrollHeight);
    let scrollAttempts = 0;
    const maxScrollAttempts = 100; // Safety limit

    while (previousHeight !== currentHeight && scrollAttempts < maxScrollAttempts) {
      previousHeight = currentHeight;

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(2000); // Wait for content to load

      currentHeight = await page.evaluate(() => document.body.scrollHeight);
      scrollAttempts++;

      // Count current cities
      const cityCount = await page.evaluate(() => {
        // Look for city card links - they typically have city slugs
        const links = document.querySelectorAll('a[href^="/"]');
        const cityLinks = Array.from(links).filter(a => {
          const href = a.getAttribute('href');
          // Filter out non-city links
          return href &&
                 !href.includes('/login') &&
                 !href.includes('/signup') &&
                 !href.includes('/pricing') &&
                 !href.includes('/about') &&
                 !href.includes('/api') &&
                 !href.includes('/settings') &&
                 !href.includes('/chat') &&
                 !href.includes('/trips') &&
                 !href.includes('/network') &&
                 !href.includes('/community') &&
                 !href.includes('/forum') &&
                 !href.includes('.') &&
                 href.length > 1 &&
                 href.split('/').filter(p => p).length <= 2;
        });
        return cityLinks.length;
      });

      console.log(`  Scroll ${scrollAttempts}: ${cityCount} potential city links found`);
    }

    console.log(`\n✓ Scrolling complete after ${scrollAttempts} attempts`);

    // Extract city data from the page
    console.log('\n📊 Extracting city information...');

    const cities = await page.evaluate(() => {
      const cityData = [];
      const seenSlugs = new Set();

      // Find all links that could be city pages
      const links = document.querySelectorAll('a[href^="/"]');

      links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Filter criteria for city links
        const isNotUtility =
          !href.includes('/login') &&
          !href.includes('/signup') &&
          !href.includes('/pricing') &&
          !href.includes('/about') &&
          !href.includes('/api') &&
          !href.includes('/settings') &&
          !href.includes('/chat') &&
          !href.includes('/trips') &&
          !href.includes('/network') &&
          !href.includes('/community') &&
          !href.includes('/forum') &&
          !href.includes('/privacy') &&
          !href.includes('/terms') &&
          !href.includes('/faq') &&
          !href.includes('/help') &&
          !href.includes('/scores') &&
          !href.includes('/climate') &&
          !href.includes('/cost') &&
          !href.includes('/fire') &&
          !href.includes('/rankings') &&
          !href.includes('/blog') &&
          !href.includes('.') &&
          href.length > 1;

        if (!isNotUtility) return;

        const parts = href.split('/').filter(p => p);

        // City URLs are typically /city-slug or /country/city-slug
        if (parts.length === 0 || parts.length > 2) return;

        const slug = parts[parts.length - 1];

        // Skip if we've already seen this slug
        if (seenSlugs.has(slug)) return;
        seenSlugs.add(slug);

        // Try to get city name from the link text or nearby elements
        let cityName = link.textContent?.trim() || '';

        // Clean up city name
        if (cityName.length > 50) {
          cityName = slug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        }

        if (!cityName || cityName.length < 2) {
          cityName = slug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
        }

        cityData.push({
          slug: slug,
          url: href,
          name: cityName,
          country: parts.length === 2 ? parts[0] : null
        });
      });

      return cityData;
    });

    console.log(`✓ Found ${cities.length} potential cities`);

    // Filter and dedupe
    const uniqueCities = [];
    const seen = new Set();

    for (const city of cities) {
      if (!seen.has(city.slug) && city.slug.length > 1) {
        seen.add(city.slug);
        uniqueCities.push(city);
      }
    }

    console.log(`✓ After deduplication: ${uniqueCities.length} unique cities`);

    // Save the city list
    const outputPath = path.join(__dirname, 'city-list.json');
    fs.writeFileSync(outputPath, JSON.stringify({
      scrapedAt: new Date().toISOString(),
      totalCities: uniqueCities.length,
      cities: uniqueCities
    }, null, 2));

    console.log(`\n✅ City list saved to ${outputPath}`);

    // Also take a screenshot for debugging
    await page.screenshot({
      path: path.join(__dirname, 'homepage-screenshot.png'),
      fullPage: false
    });
    console.log('✓ Screenshot saved');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

// Alternative approach: Get cities from the API if available
async function scrapeCitiesFromAPI() {
  console.log('\n📍 Attempting to fetch from API...');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Try to intercept network requests for city data
    const cityData = [];

    page.on('response', async response => {
      const url = response.url();
      if (url.includes('api') || url.includes('cities') || url.includes('places')) {
        try {
          const json = await response.json();
          console.log('Found API response:', url.slice(0, 100));
          if (json.cities || json.places || Array.isArray(json)) {
            cityData.push({ url, data: json });
          }
        } catch (e) {
          // Not JSON, skip
        }
      }
    });

    await page.goto('https://nomads.com/', { waitUntil: 'networkidle' });

    // Scroll a few times to trigger API calls
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(2000);
    }

    if (cityData.length > 0) {
      fs.writeFileSync(
        path.join(__dirname, 'api-responses.json'),
        JSON.stringify(cityData, null, 2)
      );
      console.log(`✓ Captured ${cityData.length} API responses`);
    }

  } catch (error) {
    console.error('API scraping error:', error.message);
  } finally {
    await browser.close();
  }
}

// Run both approaches
async function main() {
  await scrapeCityList();
  await scrapeCitiesFromAPI();
}

main().catch(console.error);
