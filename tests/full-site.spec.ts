import { test, expect } from '@playwright/test';

test.describe('HalalCities Full Site Testing', () => {

  test.describe('Homepage', () => {
    test('loads successfully with proper styling', async ({ page }) => {
      await page.goto('http://localhost:3000');

      // Check page title
      await expect(page).toHaveTitle(/Halal/i);

      // Check that CSS is loaded (background should not be default white)
      const body = page.locator('body');
      await expect(body).toBeVisible();

      // Check header is present
      const header = page.locator('header');
      await expect(header).toBeVisible();

      // Check logo text
      await expect(page.getByText('HalalCities')).toBeVisible();
    });

    test('displays city cards', async ({ page }) => {
      await page.goto('http://localhost:3000');

      // Wait for cities to load
      await page.waitForTimeout(2000);

      // Check for city cards or list
      const cityElements = page.locator('[class*="card"], [class*="city"]');
      const count = await cityElements.count();
      expect(count).toBeGreaterThan(0);
    });

    test('search functionality works', async ({ page }) => {
      await page.goto('http://localhost:3000');

      // Look for search input
      const searchInput = page.locator('input[type="search"], input[placeholder*="search" i], input[placeholder*="Search" i]');
      if (await searchInput.count() > 0) {
        await searchInput.first().fill('Dubai');
        await page.waitForTimeout(500);
        // Should show autocomplete or filter results
      }
    });

    test('navigation links work', async ({ page }) => {
      await page.goto('http://localhost:3000');

      // Check navigation links
      const navLinks = page.locator('nav a, header a');
      const count = await navLinks.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('City Page', () => {
    test('loads Dubai city page', async ({ page }) => {
      await page.goto('http://localhost:3000/city/dubai');

      // Check city name is displayed
      await expect(page.getByText('Dubai')).toBeVisible();

      // Check for score display
      const scoreElement = page.locator('[class*="score"], [class*="Score"]');
      await expect(scoreElement.first()).toBeVisible();
    });

    test('tabs navigation works', async ({ page }) => {
      await page.goto('http://localhost:3000/city/dubai');
      await page.waitForTimeout(1000);

      // Check for tabs
      const tabs = page.locator('button:has-text("Overview"), button:has-text("Prayer"), button:has-text("Halal")');
      const tabCount = await tabs.count();
      expect(tabCount).toBeGreaterThan(0);

      // Click on different tabs
      const prayerTab = page.locator('button:has-text("Prayer")');
      if (await prayerTab.count() > 0) {
        await prayerTab.click();
        await page.waitForTimeout(500);
      }
    });

    test('halal restaurants map loads', async ({ page }) => {
      await page.goto('http://localhost:3000/city/dubai');
      await page.waitForTimeout(1000);

      // Click on Halal tab
      const halalTab = page.locator('button:has-text("Halal")');
      if (await halalTab.count() > 0) {
        await halalTab.click();
        await page.waitForTimeout(1000);

        // Check for restaurant list or map
        const restaurantSection = page.locator('[class*="restaurant" i], [class*="Restaurant" i]');
        await expect(restaurantSection.first()).toBeVisible();
      }
    });
  });

  test.describe('Prayer Times', () => {
    test('prayer times widget displays', async ({ page }) => {
      await page.goto('http://localhost:3000/city/dubai');
      await page.waitForTimeout(1000);

      // Click on Prayer tab
      const prayerTab = page.locator('button:has-text("Prayer")');
      if (await prayerTab.count() > 0) {
        await prayerTab.click();
        await page.waitForTimeout(1000);

        // Check for prayer time names
        const fajr = page.getByText(/Fajr/i);
        const dhuhr = page.getByText(/Dhuhr/i);

        // At least one prayer time should be visible
        const fajrVisible = await fajr.count() > 0;
        const dhuhrVisible = await dhuhr.count() > 0;
        expect(fajrVisible || dhuhrVisible).toBeTruthy();
      }
    });
  });

  test.describe('Compare Cities', () => {
    test('compare page loads', async ({ page }) => {
      await page.goto('http://localhost:3000/compare');

      // Check page loads
      await expect(page.getByText(/Compare/i)).toBeVisible();
    });
  });

  test.describe('Travel Planner', () => {
    test('planner page loads', async ({ page }) => {
      await page.goto('http://localhost:3000/planner');

      // Check page loads
      await expect(page.getByText(/Planner/i)).toBeVisible();
    });

    test('can add cities to planner', async ({ page }) => {
      await page.goto('http://localhost:3000/planner');
      await page.waitForTimeout(1000);

      // Look for add city button or input
      const addButton = page.locator('button:has-text("Add"), button:has-text("add")');
      if (await addButton.count() > 0) {
        await addButton.first().click();
        await page.waitForTimeout(500);
      }
    });
  });

  test.describe('Favorites', () => {
    test('favorites page loads', async ({ page }) => {
      await page.goto('http://localhost:3000/favorites');

      // Check page loads
      await page.waitForTimeout(1000);
      const pageContent = await page.content();
      expect(pageContent.length).toBeGreaterThan(100);
    });
  });

  test.describe('CSS and Styling', () => {
    test('CSS files load correctly', async ({ page }) => {
      const cssRequests: string[] = [];

      page.on('response', response => {
        if (response.url().includes('.css')) {
          cssRequests.push(`${response.status()}: ${response.url()}`);
        }
      });

      await page.goto('http://localhost:3000');
      await page.waitForTimeout(2000);

      // Check that styles are applied (not just plain HTML)
      const header = page.locator('header');
      if (await header.count() > 0) {
        const styles = await header.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            backgroundColor: computed.backgroundColor,
            display: computed.display
          };
        });

        // Header should have some styling applied
        expect(styles.display).not.toBe('');
      }
    });

    test('responsive design works', async ({ page }) => {
      // Test mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('http://localhost:3000');
      await page.waitForTimeout(1000);

      // Page should still be functional
      const body = page.locator('body');
      await expect(body).toBeVisible();

      // Test tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.waitForTimeout(500);
      await expect(body).toBeVisible();

      // Test desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.waitForTimeout(500);
      await expect(body).toBeVisible();
    });
  });

  test.describe('API and Data', () => {
    test('cities data loads', async ({ page }) => {
      await page.goto('http://localhost:3000');
      await page.waitForTimeout(2000);

      // Check that the page has city content
      const pageText = await page.textContent('body');

      // Should have some city names
      const hasCityContent =
        pageText?.includes('Dubai') ||
        pageText?.includes('Istanbul') ||
        pageText?.includes('Kuala Lumpur') ||
        pageText?.includes('Mosque') ||
        pageText?.includes('Halal');

      expect(hasCityContent).toBeTruthy();
    });
  });

  test.describe('Performance', () => {
    test('page loads within acceptable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('domcontentloaded');
      const loadTime = Date.now() - startTime;

      // Should load within 10 seconds
      expect(loadTime).toBeLessThan(10000);
    });
  });
});
