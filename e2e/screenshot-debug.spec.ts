import { test, expect } from '@playwright/test';

const BASE_URL = 'https://halalcities.netlify.app';

test('capture city card screenshots and CSS debug', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });
  await page.waitForTimeout(2000);

  // Take full page screenshot
  await page.screenshot({ path: 'test-results/homepage-full.png', fullPage: true });

  // Get city card element and take screenshot
  const cityCard = page.locator('a[href*="/city/"]').first();
  await cityCard.screenshot({ path: 'test-results/city-card.png' });

  // Debug: Get computed styles of city name
  const cityNameStyles = await page.evaluate(() => {
    const cards = document.querySelectorAll('a[href*="/city/"]');
    const results: any[] = [];

    cards.forEach((card, index) => {
      // Find h3 (city name) within the card
      const h3 = card.querySelector('h3');
      if (h3) {
        const computedStyle = window.getComputedStyle(h3);
        results.push({
          cardIndex: index,
          text: h3.textContent,
          color: computedStyle.color,
          backgroundColor: computedStyle.backgroundColor,
          fontSize: computedStyle.fontSize,
          fontWeight: computedStyle.fontWeight,
          textShadow: computedStyle.textShadow,
          classes: h3.className,
          parentClasses: (h3.parentElement?.className || ''),
          grandparentClasses: (h3.parentElement?.parentElement?.className || '')
        });
      }
    });

    return results;
  });

  console.log('City Name Styles:', JSON.stringify(cityNameStyles, null, 2));

  // Also check for any CSS that might override
  const allH3Styles = await page.evaluate(() => {
    const h3s = document.querySelectorAll('h3');
    return Array.from(h3s).slice(0, 5).map(h3 => {
      const style = window.getComputedStyle(h3);
      return {
        text: h3.textContent?.substring(0, 30),
        color: style.color,
        inCard: h3.closest('a[href*="/city/"]') !== null
      };
    });
  });

  console.log('All H3 styles:', JSON.stringify(allH3Styles, null, 2));

  // Check if CSS variable is defined
  const cssVars = await page.evaluate(() => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    return {
      foreground: computedStyle.getPropertyValue('--foreground'),
      card: computedStyle.getPropertyValue('--card'),
      border: computedStyle.getPropertyValue('--border'),
    };
  });

  console.log('CSS Variables:', cssVars);
});

test('check live site vs local', async ({ page }) => {
  // Check deployed site
  await page.goto(BASE_URL);
  await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

  const deployedH3Color = await page.evaluate(() => {
    const card = document.querySelector('a[href*="/city/"]');
    const h3 = card?.querySelector('h3');
    if (h3) {
      return {
        color: window.getComputedStyle(h3).color,
        text: h3.textContent,
        className: h3.className
      };
    }
    return null;
  });

  console.log('Deployed H3 color:', deployedH3Color);
});
