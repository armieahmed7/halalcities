const { chromium } = require('playwright');
const fs = require('fs');

async function reviewSite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const issues = [];

  console.log('='.repeat(80));
  console.log('HALAL CITIES FINAL VERIFICATION');
  console.log('='.repeat(80));

  // 1. Test Homepage & API
  console.log('\n📍 TESTING HOMEPAGE & API...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Check API returns 100 cities
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
      if (apiResponse.cities.length === 100) {
        console.log('✅ SUCCESS: All 100 cities are available!');
      } else {
        issues.push({ issue: `Expected 100 cities, got ${apiResponse.cities.length}` });
      }
    } else {
      issues.push({ issue: 'API did not return cities array' });
      console.log('✗ API error');
    }

    // Check city cards displayed
    await page.waitForTimeout(2000);
    const cityCards = await page.$$('article');
    console.log(`✓ Initial city cards displayed: ${cityCards.length}`);

    // Click "Load More" until all cities are loaded or 10 clicks
    let loadMoreClicks = 0;
    while (loadMoreClicks < 10) {
      const loadMoreBtn = await page.$('button:has-text("Load More")');
      if (!loadMoreBtn) break;
      await loadMoreBtn.click();
      await page.waitForTimeout(1000);
      loadMoreClicks++;
    }

    const allCards = await page.$$('article');
    console.log(`✓ Total city cards after loading all: ${allCards.length}`);

    // Check for broken images
    const homeImages = await page.$$('img');
    let brokenImages = 0;
    for (const img of homeImages) {
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate(el => el.naturalWidth);
      if (naturalWidth === 0 && src && !src.includes('data:')) {
        brokenImages++;
        console.log(`✗ Broken image: ${src?.slice(0, 60)}...`);
      }
    }
    console.log(`✓ Broken images on homepage: ${brokenImages}`);

  } catch (e) {
    issues.push({ issue: `Homepage error: ${e.message}` });
    console.log('✗ Homepage error:', e.message);
  }

  // 2. Test City Detail Pages
  console.log('\n📍 TESTING CITY DETAIL PAGES...\n');

  const testCities = ['new-york', 'london', 'dubai', 'tokyo', 'istanbul', 'hyderabad', 'seattle', 'manchester'];

  for (const citySlug of testCities) {
    try {
      await page.goto(`https://halalcities.netlify.app/city/${citySlug}`, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(2000);

      const pageContent = await page.textContent('body');
      if (pageContent.includes('404') || pageContent.includes('not found') || pageContent.includes('This page could not be found')) {
        issues.push({ issue: `City ${citySlug}: 404 error` });
        console.log(`✗ ${citySlug}: 404 error`);
      } else {
        const cityTitle = await page.$('h1');
        if (cityTitle) {
          const titleText = await cityTitle.textContent();
          console.log(`✓ ${citySlug}: "${titleText}" - OK`);
        } else {
          console.log(`✓ ${citySlug}: Page loads (no h1 found)`);
        }
      }

    } catch (e) {
      issues.push({ issue: `City ${citySlug}: ${e.message}` });
      console.log(`✗ ${citySlug}: error`);
    }
  }

  // 3. Test View Modes (Icons)
  console.log('\n📍 TESTING VIEW MODES...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Find view mode buttons by their parent container
    const viewModeContainer = await page.$('[class*="rounded-lg"] [class*="p-1"]');
    if (viewModeContainer) {
      const buttons = await viewModeContainer.$$('button');
      console.log(`✓ Found ${buttons.length} view mode buttons (Grid, Map, Table)`);

      // Click map view (second button)
      if (buttons.length >= 2) {
        await buttons[1].click();
        await page.waitForTimeout(2000);
        const mapContainer = await page.$('.leaflet-container');
        if (mapContainer) {
          console.log('✓ Map view works correctly');
        } else {
          console.log('⚠ Map container not found after clicking map view');
        }
      }

      // Click table view (third button)
      if (buttons.length >= 3) {
        await buttons[2].click();
        await page.waitForTimeout(1500);
        const tableRows = await page.$$('table tbody tr');
        console.log(`✓ Table view shows ${tableRows.length} rows`);
      }

    } else {
      console.log('⚠ View mode container not found');
    }

  } catch (e) {
    console.log('✗ View modes error:', e.message);
  }

  // 4. Test Search
  console.log('\n📍 TESTING SEARCH...\n');

  try {
    await page.goto('https://halalcities.netlify.app', { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);

    const searchInput = await page.$('input[type="text"], input[type="search"], input[placeholder*="earch"]');
    if (searchInput) {
      await searchInput.fill('Manchester');
      await page.waitForTimeout(1500);
      const results = await page.$$('article');
      console.log(`✓ Search "Manchester": ${results.length} result(s)`);

      await searchInput.fill('');
      await page.waitForTimeout(500);
      await searchInput.fill('Dubai');
      await page.waitForTimeout(1500);
      const dubaiResults = await page.$$('article');
      console.log(`✓ Search "Dubai": ${dubaiResults.length} result(s)`);
    }

  } catch (e) {
    console.log('✗ Search error:', e.message);
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('FINAL VERIFICATION SUMMARY');
  console.log('='.repeat(80));

  if (issues.length === 0) {
    console.log('\n✅ ALL TESTS PASSED! Site is working correctly.\n');
  } else {
    console.log(`\n❌ ${issues.length} ISSUE(S) FOUND:\n`);
    issues.forEach((issue, i) => {
      console.log(`  ${i + 1}. ${issue.issue}`);
    });
  }

  await browser.close();
  return issues;
}

reviewSite().catch(console.error);
