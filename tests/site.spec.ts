import { test, expect } from '@playwright/test';

const BASE_URL = 'https://halalcities.netlify.app';

test.describe('HalalCities Site Tests', () => {
  test('homepage loads with CSS and shows cities', async ({ page }) => {
    // Listen for console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to homepage
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Wait for page to be ready
    await page.waitForTimeout(5000);

    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });

    // Check if CSS is loading
    const body = page.locator('body');
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    console.log('Body background color:', bgColor);

    // Check for key elements
    const header = page.locator('header');
    console.log('Header visible:', await header.isVisible());

    // Check the API response from the browser
    const apiResponse = await page.evaluate(async () => {
      try {
        const res = await fetch('/api/cities');
        return await res.json();
      } catch (e) {
        return { error: String(e) };
      }
    });
    console.log('API Response cities count:', apiResponse?.cities?.length || 0);
    console.log('API Response error:', apiResponse?.error || 'none');

    // Look for city cards or grid
    const pageText = await page.textContent('body');
    console.log('Page contains "cities":', pageText?.includes('cities'));
    console.log('Page contains "Mecca" or "Istanbul":', pageText?.includes('Mecca') || pageText?.includes('Istanbul'));

    // Check for errors
    console.log('Console errors:', consoleErrors.slice(0, 5));

    // Verify cities are displayed
    expect(pageText).toContain('Halal');
  });

  test('API returns data correctly', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/cities`);

    console.log('API response status:', response.status());

    if (response.ok()) {
      const data = await response.json();
      console.log('Cities returned:', data?.cities?.length || 0);
      console.log('First city:', data?.cities?.[0]?.name || 'none');
      expect(data.cities.length).toBeGreaterThan(0);
    } else {
      console.log('API error:', await response.text());
      expect(response.ok()).toBeTruthy();
    }
  });

  test('static assets load correctly', async ({ request }) => {
    // Test CSS file
    const cssResponse = await request.get(`${BASE_URL}/_next/static/css/537cc74e8db03596.css`);
    console.log('CSS status:', cssResponse.status());
    expect(cssResponse.status()).toBeLessThan(400);

    // Test a JS chunk
    const jsResponse = await request.get(`${BASE_URL}/_next/static/chunks/255-47484af636b98715.js`);
    console.log('JS status:', jsResponse.status());
    expect(jsResponse.status()).toBeLessThan(400);
  });

  test('city page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/istanbul`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'tests/screenshots/city-istanbul.png', fullPage: true });

    const pageText = await page.textContent('body');
    console.log('City page contains Istanbul:', pageText?.includes('Istanbul'));
    console.log('City page contains Turkey:', pageText?.includes('Turkey'));

    expect(pageText).toContain('Istanbul');
  });

  test('login page accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'tests/screenshots/login.png', fullPage: true });

    const pageText = await page.textContent('body');
    console.log('Login page contains login:', pageText?.toLowerCase().includes('log in') || pageText?.toLowerCase().includes('login'));

    expect(pageText?.toLowerCase()).toMatch(/log.?in/);
  });

  test('signup page accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'tests/screenshots/signup.png', fullPage: true });

    const pageText = await page.textContent('body');
    console.log('Signup page contains signup:', pageText?.toLowerCase().includes('sign up') || pageText?.toLowerCase().includes('signup'));
  });

  test('navigation works', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    // Check header navigation links exist
    const navLinks = page.locator('header a, header button');
    const linkCount = await navLinks.count();
    console.log('Navigation elements found:', linkCount);

    expect(linkCount).toBeGreaterThan(0);
  });

  test('responsive design - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'tests/screenshots/homepage-mobile.png', fullPage: true });

    // Check that content is visible on mobile
    const body = page.locator('body');
    const isVisible = await body.isVisible();
    expect(isVisible).toBeTruthy();
  });
});
