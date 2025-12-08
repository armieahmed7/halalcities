const { chromium } = require('playwright');
const fs = require('fs');

async function reviewSite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const issues = [];
  const screenshots = [];

  console.log('='.repeat(80));
  console.log('HALAL CITIES SITE REVIEW');
  console.log('='.repeat(80));

  // 1. Test Homepage
  console.log('\n📍 TESTING HOMEPAGE...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshots/01-homepage.png', fullPage: true });
    screenshots.push('01-homepage.png');

    // Check hero section
    const heroTitle = await page.$('h1');
    if (heroTitle) {
      const heroText = await heroTitle.textContent();
      console.log(`✓ Hero title: "${heroText}"`);
    } else {
      issues.push({ page: 'Homepage', issue: 'No h1 title found' });
      console.log('✗ No h1 title found');
    }

    // Check city count in API
    console.log('\n📊 CHECKING API...\n');
    const apiResponse = await page.evaluate(async () => {
      try {
        const res = await fetch('/api/cities');
        const data = await res.json();
        return data;
      } catch (e) {
        return { error: e.message };
      }
    });

    if (apiResponse && apiResponse.cities) {
      console.log(`✓ API returns ${apiResponse.cities.length} cities`);
      if (apiResponse.cities.length !== 100) {
        issues.push({ page: 'API', issue: `Expected 100 cities, got ${apiResponse.cities.length}` });
      }

      // Check for duplicate slugs
      const slugs = apiResponse.cities.map(c => c.slug);
      const uniqueSlugs = [...new Set(slugs)];
      if (slugs.length !== uniqueSlugs.length) {
        issues.push({ page: 'API', issue: `Duplicate city slugs found. Total: ${slugs.length}, Unique: ${uniqueSlugs.length}` });
        console.log(`✗ Duplicate slugs! Total: ${slugs.length}, Unique: ${uniqueSlugs.length}`);
      }

      // List all cities
      console.log('\n📋 ALL CITIES IN DATABASE:\n');
      apiResponse.cities.forEach((city, i) => {
        console.log(`${i + 1}. ${city.name} (${city.country}) - slug: ${city.slug}`);
      });

    } else {
      issues.push({ page: 'API', issue: 'API did not return cities array' });
      console.log('✗ API response issue:', JSON.stringify(apiResponse).slice(0, 200));
    }

    // Check city cards displayed
    await page.waitForTimeout(2000);
    const cityCards = await page.$$('article');
    console.log(`\n✓ City cards displayed on homepage: ${cityCards.length}`);

    if (cityCards.length === 0) {
      issues.push({ page: 'Homepage', issue: 'No city cards displayed' });
    }

    // Check for broken images on homepage
    console.log('\n🖼️ CHECKING IMAGES ON HOMEPAGE...\n');
    const homeImages = await page.$$('img');
    let brokenImages = 0;
    for (const img of homeImages) {
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate(el => el.naturalWidth);
      if (naturalWidth === 0 && src && !src.includes('data:')) {
        brokenImages++;
        if (brokenImages <= 5) {
          console.log(`✗ Broken image: ${src?.slice(0, 80)}...`);
          issues.push({ page: 'Homepage', issue: `Broken image: ${src?.slice(0, 100)}` });
        }
      }
    }
    console.log(`Total images: ${homeImages.length}, Broken: ${brokenImages}`);

    // Test "Load More" functionality
    const loadMoreBtn = await page.$('button:has-text("Load More")');
    if (loadMoreBtn) {
      console.log('\n✓ Load More button present');
      const initialCount = cityCards.length;
      await loadMoreBtn.click();
      await page.waitForTimeout(1500);
      const cityCardsAfter = await page.$$('article');
      console.log(`After Load More: ${cityCardsAfter.length} cards (was ${initialCount})`);

      if (cityCardsAfter.length <= initialCount) {
        issues.push({ page: 'Homepage', issue: 'Load More button does not load more cities' });
      }
    } else {
      issues.push({ page: 'Homepage', issue: 'No Load More button found' });
      console.log('✗ No Load More button found');
    }

  } catch (e) {
    issues.push({ page: 'Homepage', issue: `Error loading homepage: ${e.message}` });
    console.log('✗ Homepage error:', e.message);
  }

  // 2. Test City Detail Pages
  console.log('\n📍 TESTING CITY DETAIL PAGES...\n');

  const testCities = ['new-york', 'london', 'dubai', 'tokyo', 'istanbul', 'paris', 'singapore', 'kuala-lumpur'];

  for (const citySlug of testCities) {
    try {
      console.log(`\n--- Testing ${citySlug} ---`);
      await page.goto(`https://halalcities.netlify.app/city/${citySlug}`, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(2000);

      // Check if page loaded (not 404)
      const pageContent = await page.textContent('body');
      if (pageContent.includes('404') || pageContent.includes('not found') || pageContent.includes('This page could not be found')) {
        issues.push({ page: `City: ${citySlug}`, issue: '404 - City page not found' });
        console.log(`✗ ${citySlug}: 404 error`);
        continue;
      }

      // Check city name
      const cityTitle = await page.$('h1');
      if (cityTitle) {
        const titleText = await cityTitle.textContent();
        console.log(`✓ City title: "${titleText}"`);
      } else {
        issues.push({ page: `City: ${citySlug}`, issue: 'No city title (h1) found' });
        console.log(`✗ No h1 found`);
      }

      // Check for key elements
      const halalScore = await page.$('text=/Halal Score|halal/i');
      if (halalScore) {
        console.log(`  ✓ Halal Score section present`);
      }

      // Check map
      const cityMap = await page.$('iframe[src*="google.com/maps"]');
      if (cityMap) {
        console.log('  ✓ Google Maps embed present');
      } else {
        console.log('  ⚠ No Google Maps embed found');
      }

      // Check for broken images
      const images = await page.$$('img');
      let pageBrokenImages = 0;
      for (const img of images) {
        const src = await img.getAttribute('src');
        const naturalWidth = await img.evaluate(el => el.naturalWidth);
        if (naturalWidth === 0 && src && !src.includes('data:')) {
          pageBrokenImages++;
          if (pageBrokenImages === 1) {
            issues.push({ page: `City: ${citySlug}`, issue: `Broken image(s) on page` });
          }
        }
      }
      if (pageBrokenImages > 0) {
        console.log(`  ✗ ${pageBrokenImages} broken image(s)`);
      }

      // Screenshot first city
      if (citySlug === 'new-york') {
        await page.screenshot({ path: 'screenshots/04-city-newyork.png', fullPage: true });
        screenshots.push('04-city-newyork.png');
      }
      if (citySlug === 'dubai') {
        await page.screenshot({ path: 'screenshots/05-city-dubai.png', fullPage: true });
        screenshots.push('05-city-dubai.png');
      }

    } catch (e) {
      issues.push({ page: `City: ${citySlug}`, issue: e.message });
      console.log(`✗ ${citySlug} error:`, e.message);
    }
  }

  // 3. Test Search
  console.log('\n📍 TESTING SEARCH...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);

    const searchInput = await page.$('input[type="text"], input[type="search"], input[placeholder*="earch"]');
    if (searchInput) {
      console.log('✓ Search input found');

      await searchInput.fill('London');
      await page.waitForTimeout(1500);

      const cityCards = await page.$$('article');
      console.log(`✓ Search "London": ${cityCards.length} results`);

      if (cityCards.length === 0) {
        issues.push({ page: 'Search', issue: 'Search for "London" returns no results' });
      }

      await page.screenshot({ path: 'screenshots/06-search-london.png', fullPage: true });
      screenshots.push('06-search-london.png');

    } else {
      issues.push({ page: 'Search', issue: 'Search input not found' });
      console.log('✗ Search input not found');
    }

  } catch (e) {
    issues.push({ page: 'Search', issue: e.message });
    console.log('✗ Search error:', e.message);
  }

  // 4. Test View Modes
  console.log('\n📍 TESTING VIEW MODES...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Look for view mode buttons
    const allButtons = await page.$$('button');
    let mapBtn = null;
    let tableBtn = null;
    let gridBtn = null;

    for (const btn of allButtons) {
      const text = await btn.textContent();
      if (text.toLowerCase().includes('map')) mapBtn = btn;
      if (text.toLowerCase().includes('table')) tableBtn = btn;
      if (text.toLowerCase().includes('grid')) gridBtn = btn;
    }

    if (mapBtn) {
      console.log('✓ Map view button found');
      await mapBtn.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'screenshots/07-map-view.png', fullPage: true });
      screenshots.push('07-map-view.png');

      const mapContainer = await page.$('[class*="leaflet"], .leaflet-container');
      if (mapContainer) {
        console.log('  ✓ Map loads correctly');
      } else {
        issues.push({ page: 'Map View', issue: 'Map container not rendering' });
        console.log('  ✗ Map container not found');
      }
    } else {
      console.log('⚠ Map view button not found');
    }

    if (tableBtn) {
      console.log('✓ Table view button found');
      await tableBtn.click();
      await page.waitForTimeout(1500);
      await page.screenshot({ path: 'screenshots/08-table-view.png', fullPage: true });
      screenshots.push('08-table-view.png');

      const tableRows = await page.$$('table tbody tr');
      console.log(`  ✓ Table shows ${tableRows.length} rows`);

      if (tableRows.length === 0) {
        issues.push({ page: 'Table View', issue: 'Table view shows no rows' });
      }
    } else {
      console.log('⚠ Table view button not found');
    }

  } catch (e) {
    issues.push({ page: 'View Modes', issue: e.message });
    console.log('✗ View modes error:', e.message);
  }

  // 5. Check for Console Errors
  console.log('\n📍 CHECKING FOR JAVASCRIPT ERRORS...\n');

  const consoleErrors = [];
  const newPage = await context.newPage();
  newPage.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await newPage.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
  await newPage.waitForTimeout(5000);

  if (consoleErrors.length > 0) {
    console.log(`⚠ Found ${consoleErrors.length} console errors:`);
    consoleErrors.slice(0, 10).forEach(err => {
      console.log(`  - ${err.slice(0, 150)}`);
      issues.push({ page: 'Console Errors', issue: err.slice(0, 200) });
    });
  } else {
    console.log('✓ No JavaScript console errors detected');
  }

  await newPage.close();

  // 6. Test Mobile
  console.log('\n📍 TESTING MOBILE VIEW...\n');

  try {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshots/09-mobile-home.png', fullPage: true });
    screenshots.push('09-mobile-home.png');
    console.log('✓ Mobile homepage screenshot taken');

    // Check if cards stack properly
    const mobileCards = await page.$$('article');
    console.log(`  Mobile view shows ${mobileCards.length} cards initially`);

  } catch (e) {
    issues.push({ page: 'Mobile', issue: e.message });
    console.log('✗ Mobile error:', e.message);
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('REVIEW SUMMARY');
  console.log('='.repeat(80));

  console.log(`\n📸 Screenshots saved: ${screenshots.length}`);
  screenshots.forEach(s => console.log(`   - screenshots/${s}`));

  console.log(`\n🐛 ISSUES FOUND: ${issues.length}`);
  console.log('-'.repeat(40));

  // Group issues by page
  const groupedIssues = {};
  issues.forEach(issue => {
    if (!groupedIssues[issue.page]) {
      groupedIssues[issue.page] = [];
    }
    groupedIssues[issue.page].push(issue.issue);
  });

  Object.entries(groupedIssues).forEach(([page, pageIssues]) => {
    console.log(`\n[${page}]`);
    pageIssues.forEach((issue, i) => {
      console.log(`  ${i + 1}. ${issue}`);
    });
  });

  // Save issues to file
  fs.writeFileSync('site-review-issues.json', JSON.stringify(issues, null, 2));
  console.log('\n\n📄 Full issues list saved to site-review-issues.json');

  await browser.close();

  return issues;
}

// Create screenshots directory
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

reviewSite().catch(console.error);
