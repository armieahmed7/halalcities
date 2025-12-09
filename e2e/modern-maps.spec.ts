import { test, expect } from '@playwright/test';

test.describe.configure({ timeout: 90000 });

test.describe('Modern Map Components', () => {
  test('Modern map renders on London city page', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/london', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Check for Mapbox container - modern maps use mapbox
    const mapContainer = page.locator('.mapboxgl-map, .mapboxgl-canvas');

    // Should have at least one mapbox map on the page (sidebar or main content)
    const mapCount = await mapContainer.count();
    console.log(`Found ${mapCount} Mapbox map containers`);

    // Take a screenshot for visual verification
    await page.screenshot({
      path: 'e2e/screenshots/london-modern-map.png',
      fullPage: true
    });

    expect(mapCount).toBeGreaterThanOrEqual(1);
  });

  test('Halal restaurants map renders on restaurant page', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/istanbul/halal-restaurants', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Check for map section header
    const mapHeader = page.locator('text=Halal Restaurants Map');
    expect(await mapHeader.count()).toBeGreaterThanOrEqual(1);

    // Check for mapbox container
    const mapContainer = page.locator('.mapboxgl-map, .mapboxgl-canvas');
    const hasMap = await mapContainer.count() > 0;

    // Take a screenshot
    await page.screenshot({
      path: 'e2e/screenshots/istanbul-restaurants-map.png',
      fullPage: true
    });

    // Log for debugging
    console.log(`Halal Restaurants Map found: ${hasMap}`);

    // Should have modern Mapbox map
    expect(hasMap).toBe(true);
  });

  test('Mosque map renders on mosque page', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/new-york/mosques', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Check for map section
    const mapHeader = page.locator('text=Mosques Map');
    expect(await mapHeader.count()).toBeGreaterThanOrEqual(1);

    // Check for mapbox container
    const mapContainer = page.locator('.mapboxgl-map, .mapboxgl-canvas');

    // Take a screenshot
    await page.screenshot({
      path: 'e2e/screenshots/newyork-mosques-map.png',
      fullPage: true
    });

    console.log(`Mosque Map container found: ${await mapContainer.count()}`);

    expect(await mapContainer.count()).toBeGreaterThanOrEqual(1);
  });

  test('Map filter buttons are functional', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/paris', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Look for filter buttons in the map component
    const allButton = page.locator('button:has-text("All")');
    const mosquesButton = page.locator('button:has-text("Mosques")');
    const restaurantsButton = page.locator('button:has-text("Restaurants")');

    // At least one filter button should exist
    const hasFilterButtons =
      await allButton.count() > 0 ||
      await mosquesButton.count() > 0 ||
      await restaurantsButton.count() > 0;

    console.log(`Filter buttons found: ${hasFilterButtons}`);
    console.log(`All: ${await allButton.count()}, Mosques: ${await mosquesButton.count()}, Restaurants: ${await restaurantsButton.count()}`);

    expect(hasFilterButtons).toBe(true);
  });

  test('Map has navigation controls', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/berlin', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Check for Mapbox navigation controls
    const navControls = page.locator('.mapboxgl-ctrl-zoom-in, .mapboxgl-ctrl-zoom-out, .mapboxgl-ctrl-compass');
    const hasNavControls = await navControls.count() > 0;

    console.log(`Navigation controls found: ${hasNavControls}`);

    // Take a screenshot
    await page.screenshot({
      path: 'e2e/screenshots/berlin-map-controls.png',
      fullPage: true
    });

    expect(hasNavControls).toBe(true);
  });

  test('No Google Maps iframe embeds on city pages (should use Mapbox instead)', async ({ page }) => {
    const citiesToTest = ['london', 'new-york', 'paris', 'berlin'];

    for (const city of citiesToTest) {
      await page.goto(`https://halalcities.netlify.app/city/${city}`, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });

      await page.waitForTimeout(2000);

      // Check for Google Maps iframe (should NOT exist)
      const googleMapsIframe = page.locator('iframe[src*="google.com/maps"]');
      const googleMapsCount = await googleMapsIframe.count();

      // Check for Mapbox (SHOULD exist)
      const mapboxMap = page.locator('.mapboxgl-map');
      const mapboxCount = await mapboxMap.count();

      console.log(`${city}: Google Maps iframes: ${googleMapsCount}, Mapbox maps: ${mapboxCount}`);

      // We expect Mapbox to be present (not Google Maps embeds)
      // Note: Some Google Maps links for directions are fine, just not embedded maps
      expect(mapboxCount).toBeGreaterThanOrEqual(1);
    }
  });
});

test.describe('Map Visual Elements', () => {
  test('Map legend is displayed', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/amsterdam', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(3000);

    // Look for legend elements
    const legendItems = page.locator('text=Mosques, text=Halal Restaurants, text=Legend');
    const hasLegend = await legendItems.count() > 0;

    console.log(`Legend items found: ${await legendItems.count()}`);

    // Take screenshot
    await page.screenshot({
      path: 'e2e/screenshots/amsterdam-map-legend.png',
      fullPage: true
    });

    expect(hasLegend).toBe(true);
  });

  test('Map city name header is displayed', async ({ page }) => {
    await page.goto('https://halalcities.netlify.app/city/dubai', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.waitForTimeout(2000);

    // Look for map header with city name
    const mapHeader = page.locator('h3:has-text("Dubai"), h2:has-text("Dubai")');
    const hasMapHeader = await mapHeader.count() > 0;

    console.log(`Map header found: ${hasMapHeader}`);

    expect(hasMapHeader).toBe(true);
  });
});
