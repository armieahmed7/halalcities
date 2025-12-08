import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://halalcities.netlify.app';

// Sample cities to test (mix of popular and various regions)
const TEST_CITIES = [
  'dubai',
  'london',
  'istanbul',
  'kuala-lumpur',
  'tokyo',
  'new-york',
  'paris',
  'singapore',
  'cairo',
  'jakarta'
];

// Sub-page types
const SUB_PAGES = [
  'halal-restaurants',
  'mosques',
  'islamic-schools',
  'prayer-times',
  'muslim-community',
  'halal-hotels'
];

test.setTimeout(120000);

// Helper to check if element has readable text color
async function checkTextVisibility(page: Page, selector: string, description: string) {
  const element = page.locator(selector).first();
  if (await element.isVisible().catch(() => false)) {
    const color = await element.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor,
        text: el.textContent?.substring(0, 50)
      };
    }).catch(() => null);
    console.log(`${description}: ${JSON.stringify(color)}`);
    return color;
  }
  return null;
}

// ============================================
// HOMEPAGE TESTS
// ============================================
test.describe('Homepage Comprehensive Tests', () => {
  test('homepage SEO elements', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check title
    const title = await page.title();
    console.log('Page title:', title);
    expect(title.length).toBeGreaterThan(10);

    // Check meta description
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    console.log('Meta description:', metaDescription);
    expect(metaDescription).toBeTruthy();

    // Check H1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible({ timeout: 15000 });
    const h1Text = await h1.textContent();
    console.log('H1:', h1Text);
  });

  test('homepage has proper internal links', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    // Count all internal links
    const internalLinks = await page.locator('a[href^="/"]').all();
    console.log('Internal links count:', internalLinks.length);
    expect(internalLinks.length).toBeGreaterThan(5);

    // Check city links exist
    const cityLinks = await page.locator('a[href^="/city/"]').count();
    console.log('City links on homepage:', cityLinks);
    expect(cityLinks).toBeGreaterThan(0);
  });

  test('homepage stats animation and display', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for animation
    await page.waitForTimeout(3000);

    // Check stats are visible and have values
    const statsSection = page.locator('section').first();
    const statsText = await statsSection.textContent();

    // Should show cities, mosques, restaurants counts
    const hasCitiesCount = /\d+\+/.test(statsText || '');
    console.log('Stats visible:', hasCitiesCount);
    expect(hasCitiesCount).toBeTruthy();
  });
});

// ============================================
// CITY CARD VISIBILITY TESTS
// ============================================
test.describe('City Card Text Visibility', () => {
  test('city card text colors are readable', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

    // Get first city card
    const cityCard = page.locator('a[href*="/city/"]').first();

    // Check text color visibility
    const textColors = await cityCard.evaluate(el => {
      const allText = el.querySelectorAll('*');
      const colors: {element: string, color: string, bg: string, text: string}[] = [];
      allText.forEach(child => {
        const style = window.getComputedStyle(child);
        if (child.textContent && child.textContent.trim().length > 0) {
          colors.push({
            element: child.tagName,
            color: style.color,
            bg: style.backgroundColor,
            text: child.textContent.trim().substring(0, 30)
          });
        }
      });
      return colors;
    });

    console.log('City card text colors:', JSON.stringify(textColors, null, 2));

    // Check for any black text that might be invisible
    const hasBlackText = textColors.some(c =>
      c.color === 'rgb(0, 0, 0)' || c.color === '#000000' || c.color === 'black'
    );
    console.log('Has black text:', hasBlackText);
  });

  test('city names are visible on cards', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

    // Take screenshot of city cards for visual inspection
    const cityCards = page.locator('a[href*="/city/"]');
    const count = await cityCards.count();
    console.log('Number of city cards:', count);

    // Check first few cards
    for (let i = 0; i < Math.min(3, count); i++) {
      const card = cityCards.nth(i);
      const cardText = await card.textContent();
      console.log(`Card ${i + 1} text:`, cardText?.substring(0, 100));

      // Get href to see city slug
      const href = await card.getAttribute('href');
      console.log(`Card ${i + 1} href:`, href);
    }
  });
});

// ============================================
// CITY MAIN PAGE TESTS
// ============================================
test.describe('City Main Page Tests', () => {
  for (const city of TEST_CITIES.slice(0, 3)) {
    test(`city page loads: ${city}`, async ({ page }) => {
      const response = await page.goto(`${BASE_URL}/city/${city}`);

      // Check response status
      console.log(`${city} page status:`, response?.status());

      if (response?.status() === 200) {
        // Check H1
        const h1 = page.locator('h1');
        await expect(h1).toBeVisible({ timeout: 15000 });
        const h1Text = await h1.textContent();
        console.log(`${city} H1:`, h1Text);

        // Check for essential sections
        const hasStats = await page.locator('text=/mosque|restaurant|halal/i').first().isVisible().catch(() => false);
        console.log(`${city} has stats:`, hasStats);

        // Check for internal links to sub-pages
        const subPageLinks = await page.locator('a[href*="/city/' + city + '/"]').count();
        console.log(`${city} sub-page links:`, subPageLinks);
      } else if (response?.status() === 404) {
        console.log(`${city} page not found - may need different slug`);
      }
    });
  }

  test('city page has breadcrumbs or navigation', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/dubai`);

    // Check for breadcrumbs or back navigation
    const hasBreadcrumbs = await page.locator('nav[aria-label*="breadcrumb"], .breadcrumb').isVisible().catch(() => false);
    const hasBackLink = await page.locator('a[href="/"]').isVisible().catch(() => false);

    console.log('Has breadcrumbs:', hasBreadcrumbs);
    console.log('Has back link:', hasBackLink);
  });
});

// ============================================
// SUB-PAGE TESTS (Programmatic SEO Pages)
// ============================================
test.describe('Programmatic SEO Sub-Pages', () => {
  const testCity = 'dubai';

  for (const subPage of SUB_PAGES) {
    test(`${subPage} page loads for ${testCity}`, async ({ page }) => {
      const url = `${BASE_URL}/city/${testCity}/${subPage}`;
      console.log('Testing URL:', url);

      const response = await page.goto(url);
      console.log(`${subPage} status:`, response?.status());

      if (response?.status() === 200) {
        // Check H1 exists and contains city name
        const h1 = page.locator('h1');
        await expect(h1).toBeVisible({ timeout: 15000 });
        const h1Text = await h1.textContent();
        console.log(`${subPage} H1:`, h1Text);

        // H1 should contain city name or relevant keyword
        const h1Lower = h1Text?.toLowerCase() || '';
        const hasRelevantContent =
          h1Lower.includes('dubai') ||
          h1Lower.includes(subPage.replace(/-/g, ' ').replace('halal ', ''));
        expect(hasRelevantContent).toBeTruthy();

        // Check meta title
        const title = await page.title();
        console.log(`${subPage} title:`, title);
        expect(title.length).toBeGreaterThan(10);

        // Check for JSON-LD schema
        const jsonLd = await page.locator('script[type="application/ld+json"]').count();
        console.log(`${subPage} JSON-LD scripts:`, jsonLd);

        // Check for internal links
        const internalLinks = await page.locator('a[href^="/city/"]').count();
        console.log(`${subPage} internal links:`, internalLinks);
      }
    });
  }

  test('sub-pages have inter-linking to other sub-pages', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/dubai/halal-restaurants`);

    // Should link to other sub-pages
    const linkToMosques = await page.locator('a[href*="/mosques"]').count();
    const linkToPrayerTimes = await page.locator('a[href*="/prayer-times"]').count();
    const linkToHotels = await page.locator('a[href*="/halal-hotels"]').count();

    console.log('Links to mosques:', linkToMosques);
    console.log('Links to prayer-times:', linkToPrayerTimes);
    console.log('Links to hotels:', linkToHotels);

    // Should have at least some cross-links
    const totalCrossLinks = linkToMosques + linkToPrayerTimes + linkToHotels;
    console.log('Total cross-links:', totalCrossLinks);
  });

  test('sub-pages have breadcrumb navigation', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/dubai/mosques`);

    // Check for link back to city page
    const linkToCity = await page.locator('a[href="/city/dubai"]').count();
    const linkToHome = await page.locator('a[href="/"]').count();

    console.log('Links to city page:', linkToCity);
    console.log('Links to home:', linkToHome);
  });
});

// ============================================
// SITEMAP AND ROBOTS TESTS
// ============================================
test.describe('SEO Infrastructure', () => {
  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/sitemap.xml`);
    console.log('Sitemap status:', response?.status());

    if (response?.status() === 200) {
      const content = await page.content();
      const hasUrls = content.includes('<url>') || content.includes('<loc>');
      console.log('Sitemap has URLs:', hasUrls);

      // Count approximate URLs
      const urlMatches = content.match(/<loc>/g);
      console.log('Approximate URL count:', urlMatches?.length || 0);
    }
  });

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/robots.txt`);
    console.log('Robots.txt status:', response?.status());

    if (response?.status() === 200) {
      const content = await page.content();
      const hasSitemap = content.toLowerCase().includes('sitemap');
      console.log('Robots.txt references sitemap:', hasSitemap);
    }
  });
});

// ============================================
// NAVIGATION AND INTER-LINKING TESTS
// ============================================
test.describe('Navigation and Inter-linking', () => {
  test('header navigation works on all pages', async ({ page }) => {
    const pagesToTest = [
      BASE_URL,
      `${BASE_URL}/city/dubai`,
      `${BASE_URL}/city/dubai/halal-restaurants`,
      `${BASE_URL}/login`,
      `${BASE_URL}/favorites`
    ];

    for (const url of pagesToTest) {
      await page.goto(url);
      const headerVisible = await page.locator('header').isVisible().catch(() => false);
      const logoVisible = await page.locator('text=HalalCities').first().isVisible().catch(() => false);
      console.log(`${url} - Header: ${headerVisible}, Logo: ${logoVisible}`);
    }
  });

  test('city page links to all sub-pages', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/dubai`);
    await page.waitForLoadState('domcontentloaded');

    // Check for links to each sub-page type
    for (const subPage of SUB_PAGES) {
      const linkExists = await page.locator(`a[href*="${subPage}"]`).count();
      console.log(`Link to ${subPage}:`, linkExists);
    }
  });

  test('footer has consistent links', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    const footer = page.locator('footer');
    const footerExists = await footer.isVisible().catch(() => false);
    console.log('Footer exists:', footerExists);

    if (footerExists) {
      const footerLinks = await footer.locator('a').count();
      console.log('Footer link count:', footerLinks);
    }
  });
});

// ============================================
// 404 AND ERROR HANDLING TESTS
// ============================================
test.describe('Error Handling', () => {
  test('404 for non-existent city', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/city/this-city-does-not-exist-12345`);
    console.log('Non-existent city status:', response?.status());

    // Should either 404 or redirect
    const is404 = response?.status() === 404;
    const shows404Page = await page.locator('text=404').isVisible().catch(() => false);
    const showsNotFound = await page.locator('text=/not found/i').isVisible().catch(() => false);

    console.log('Is 404 response:', is404);
    console.log('Shows 404 page:', shows404Page);
    console.log('Shows not found:', showsNotFound);
  });

  test('404 for non-existent sub-page', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/city/dubai/non-existent-page`);
    console.log('Non-existent sub-page status:', response?.status());
  });
});

// ============================================
// PERFORMANCE TESTS
// ============================================
test.describe('Performance', () => {
  test('homepage performance metrics', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const domContentLoaded = Date.now() - startTime;

    await page.waitForLoadState('load');
    const fullLoad = Date.now() - startTime;

    console.log('DOM Content Loaded:', domContentLoaded, 'ms');
    console.log('Full Load:', fullLoad, 'ms');

    expect(domContentLoaded).toBeLessThan(10000);
  });

  test('sub-page performance', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(`${BASE_URL}/city/dubai/halal-restaurants`);
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;

    console.log('Sub-page load time:', loadTime, 'ms');
    expect(loadTime).toBeLessThan(10000);
  });
});

// ============================================
// MOBILE RESPONSIVENESS TESTS
// ============================================
test.describe('Mobile Responsiveness', () => {
  test('city page mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/city/dubai`);

    // Check content is visible
    const h1Visible = await page.locator('h1').isVisible().catch(() => false);
    console.log('H1 visible on mobile:', h1Visible);

    // Check for horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.body.scrollWidth > document.body.clientWidth;
    });
    console.log('Has horizontal overflow:', hasOverflow);
  });

  test('sub-page mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/city/dubai/mosques`);

    const h1Visible = await page.locator('h1').isVisible().catch(() => false);
    console.log('Sub-page H1 visible on mobile:', h1Visible);
  });
});

// ============================================
// ACCESSIBILITY TESTS
// ============================================
test.describe('Basic Accessibility', () => {
  test('images have alt text', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    const images = await page.locator('img').all();
    let imagesWithAlt = 0;
    let imagesWithoutAlt = 0;

    for (const img of images) {
      const alt = await img.getAttribute('alt');
      if (alt && alt.trim().length > 0) {
        imagesWithAlt++;
      } else {
        imagesWithoutAlt++;
        const src = await img.getAttribute('src');
        console.log('Image without alt:', src?.substring(0, 50));
      }
    }

    console.log('Images with alt:', imagesWithAlt);
    console.log('Images without alt:', imagesWithoutAlt);
  });

  test('links have descriptive text', async ({ page }) => {
    await page.goto(BASE_URL);

    const links = await page.locator('a').all();
    let emptyLinks = 0;

    for (const link of links.slice(0, 50)) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      if ((!text || text.trim().length === 0) && !ariaLabel) {
        emptyLinks++;
        const href = await link.getAttribute('href');
        console.log('Empty link:', href);
      }
    }

    console.log('Empty links found:', emptyLinks);
  });
});

// ============================================
// CONTENT QUALITY TESTS
// ============================================
test.describe('Content Quality', () => {
  test('city pages have unique content', async ({ page }) => {
    const cities = ['dubai', 'london', 'istanbul'];
    const h1Texts: string[] = [];

    for (const city of cities) {
      await page.goto(`${BASE_URL}/city/${city}`);
      const h1 = await page.locator('h1').textContent().catch(() => '');
      h1Texts.push(h1 || '');
      console.log(`${city} H1:`, h1);
    }

    // All H1s should be different
    const uniqueH1s = new Set(h1Texts);
    console.log('Unique H1 count:', uniqueH1s.size);
    expect(uniqueH1s.size).toBe(cities.length);
  });

  test('sub-pages have unique meta descriptions', async ({ page }) => {
    const descriptions: string[] = [];

    for (const subPage of SUB_PAGES) {
      await page.goto(`${BASE_URL}/city/dubai/${subPage}`);
      const desc = await page.getAttribute('meta[name="description"]', 'content');
      descriptions.push(desc || '');
      console.log(`${subPage} description:`, desc?.substring(0, 80));
    }

    // All descriptions should be different
    const uniqueDescs = new Set(descriptions);
    console.log('Unique description count:', uniqueDescs.size);
  });
});

// ============================================
// SCHEMA MARKUP TESTS
// ============================================
test.describe('Schema Markup', () => {
  test('homepage has organization schema', async ({ page }) => {
    await page.goto(BASE_URL);

    const schemas = await page.locator('script[type="application/ld+json"]').all();
    console.log('Schema scripts on homepage:', schemas.length);

    for (const schema of schemas) {
      const content = await schema.textContent();
      try {
        const parsed = JSON.parse(content || '{}');
        console.log('Schema type:', parsed['@type']);
      } catch {
        console.log('Invalid JSON-LD');
      }
    }
  });

  test('sub-pages have appropriate schema', async ({ page }) => {
    await page.goto(`${BASE_URL}/city/dubai/halal-restaurants`);

    const schemas = await page.locator('script[type="application/ld+json"]').all();
    console.log('Schema scripts on restaurants page:', schemas.length);

    for (const schema of schemas) {
      const content = await schema.textContent();
      try {
        const parsed = JSON.parse(content || '{}');
        console.log('Restaurant page schema type:', parsed['@type']);
      } catch {
        console.log('Invalid JSON-LD');
      }
    }
  });
});
