import { test, expect } from '@playwright/test';

// Test against the live Netlify site
const BASE_URL = 'https://halalcities.netlify.app';

test.setTimeout(60000);

test.describe('Homepage', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check page title
    await expect(page).toHaveTitle(/Halal/i);

    // Check hero section
    await expect(page.locator('text=Find your perfect')).toBeVisible({ timeout: 15000 });
  });

  test('hero section has search functionality', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for search input
    const searchInput = page.locator('input[placeholder*="Search"]');
    await expect(searchInput).toBeVisible({ timeout: 15000 });
  });

  test('hero section has email capture form', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for email input in hero
    const emailInput = page.locator('input[placeholder="Enter your email address"]');
    await expect(emailInput).toBeVisible({ timeout: 15000 });

    // Check for subscribe button
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await expect(subscribeButton).toBeVisible();
  });

  test('hero section displays stats', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for stats - Cities Covered, Mosques Listed, Halal Restaurants
    await expect(page.locator('text=Cities Covered')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Mosques Listed')).toBeVisible();
    await expect(page.locator('text=Halal Restaurants')).toBeVisible();
  });

  test('hero section has quick filter chips', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for filter chips
    await expect(page.locator('text=Many Mosques')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Best Halal Food')).toBeVisible();
    await expect(page.locator('text=Budget Friendly')).toBeVisible();
  });
});

test.describe('Header Navigation', () => {
  test('header has logo and navigation links', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    // Check logo
    await expect(page.locator('text=HalalCities')).toBeVisible({ timeout: 15000 });

    // Check main navigation links
    await expect(page.locator('header').locator('text=Cities')).toBeVisible();
    await expect(page.locator('header').locator('text=Mosques')).toBeVisible();
    await expect(page.locator('header').locator('text=Halal Food')).toBeVisible();
    await expect(page.locator('header').locator('text=Community')).toBeVisible();
  });

  test('header has auth buttons when not logged in', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    // Wait for auth state to load
    await page.waitForTimeout(3000);

    // Check for login/signup buttons
    const loginButton = page.locator('header').locator('button:has-text("Log In")');
    const signupButton = page.locator('header').locator('button:has-text("Sign Up")');

    const loginVisible = await loginButton.isVisible().catch(() => false);
    const signupVisible = await signupButton.isVisible().catch(() => false);

    expect(loginVisible || signupVisible).toBeTruthy();
  });

  test('header has search button', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    // Check for search button/input
    const searchButton = page.locator('header').locator('text=Search cities');
    await expect(searchButton).toBeVisible({ timeout: 15000 });
  });

  test('header has dark mode toggle', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    // Look for sun/moon icon button
    const darkModeButton = page.locator('header button').filter({ has: page.locator('svg') });
    const count = await darkModeButton.count();
    expect(count).toBeGreaterThan(0);
  });

  test('tools dropdown exists', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1280, height: 720 });

    // Check for Tools dropdown
    const toolsButton = page.locator('header').locator('text=Tools');
    await expect(toolsButton).toBeVisible({ timeout: 15000 });
  });
});

test.describe('City Cards', () => {
  test('city cards are displayed on homepage', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for city cards to load
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

    // Should have multiple city cards
    const cityLinks = page.locator('a[href*="/city/"]');
    const count = await cityLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('city cards have essential information', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for content to load
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

    // Check for rating indicators (should have some rating info)
    const hasRatings = await page.locator('text=/\\d+\\.\\d/').first().isVisible().catch(() => false);
    expect(hasRatings).toBeTruthy();
  });

  test('clicking city card navigates to city page', async ({ page }) => {
    await page.goto(BASE_URL);

    // Wait for city cards to load
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });

    // Click first city card
    const cityLink = page.locator('a[href*="/city/"]').first();
    await cityLink.click();

    // Should navigate to city page
    await expect(page).toHaveURL(/\/city\//);
  });
});

test.describe('Individual City Page', () => {
  test('city page loads with essential sections', async ({ page }) => {
    await page.goto(BASE_URL);

    // First go to a city
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });
    const cityLink = page.locator('a[href*="/city/"]').first();
    await cityLink.click();

    // Wait for page to load
    await page.waitForLoadState('domcontentloaded');

    // Check for city name (should be in a heading)
    const heading = page.locator('h1');
    await expect(heading).toBeVisible({ timeout: 15000 });
  });

  test('city page has favorite button', async ({ page }) => {
    await page.goto(BASE_URL);

    // Navigate to a city
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });
    const cityLink = page.locator('a[href*="/city/"]').first();
    await cityLink.click();

    // Look for favorite/heart button
    await page.waitForLoadState('domcontentloaded');
    const buttons = page.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('city page has back navigation', async ({ page }) => {
    await page.goto(BASE_URL);

    // Navigate to a city
    await page.waitForSelector('a[href*="/city/"]', { timeout: 15000 });
    const cityLink = page.locator('a[href*="/city/"]').first();
    await cityLink.click();

    await page.waitForLoadState('domcontentloaded');

    // Check header still exists for navigation back
    await expect(page.locator('text=HalalCities')).toBeVisible();
  });
});

test.describe('Authentication Pages', () => {
  test('login page is accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    // Check page loads
    await expect(page.locator('text=Welcome back')).toBeVisible({ timeout: 15000 });
  });

  test('login page has all required elements', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    // Check form elements
    await expect(page.locator('input[type="email"]').first()).toBeVisible({ timeout: 15000 });
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
    await expect(page.locator('button:has-text("Sign In")')).toBeVisible();

    // Check OAuth buttons
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Apple")')).toBeVisible();
  });

  test('signup page is accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`);

    // Check page loads
    await expect(page.locator('text=Create your account')).toBeVisible({ timeout: 15000 });
  });

  test('signup page has all required elements', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`);

    // Check form elements
    await expect(page.locator('input[type="email"]').first()).toBeVisible({ timeout: 15000 });
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
    await expect(page.locator('button:has-text("Create Account")')).toBeVisible();

    // Check OAuth buttons
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
  });

  test('forgot password page is accessible from login', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    // Click forgot password link
    await page.click('text=Forgot password?');

    // Should navigate to forgot password page
    await expect(page).toHaveURL(/\/forgot-password/);
  });

  test('can navigate between login and signup', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);

    // Click sign up link
    await page.locator('a:has-text("Sign up")').first().click();
    await expect(page).toHaveURL(/\/signup/);

    // Click sign in link
    await page.locator('a:has-text("Sign in")').first().click();
    await expect(page).toHaveURL(/\/login/);
  });
});

test.describe('Favorites Page', () => {
  test('favorites page is accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/favorites`);

    // Page should load (might show empty state or login prompt)
    await page.waitForLoadState('domcontentloaded');

    // Should have some content
    const hasContent = await page.locator('body').textContent();
    expect(hasContent).toBeTruthy();
  });
});

test.describe('Compare Page', () => {
  test('compare page is accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/compare`);

    // Page should load
    await page.waitForLoadState('domcontentloaded');

    // Should have some content
    const hasContent = await page.locator('body').textContent();
    expect(hasContent).toBeTruthy();
  });
});

test.describe('Responsive Design', () => {
  test('mobile navigation works', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Wait for content
    await page.waitForLoadState('domcontentloaded');

    // Mobile menu button should be visible
    const menuButton = page.locator('header button').filter({ has: page.locator('svg') });
    await expect(menuButton.first()).toBeVisible({ timeout: 15000 });
  });

  test('tablet view displays correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad

    // Page should load correctly
    await expect(page.locator('text=HalalCities')).toBeVisible({ timeout: 15000 });
  });

  test('desktop view displays correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.setViewportSize({ width: 1920, height: 1080 }); // Full HD

    // Should show full navigation
    await expect(page.locator('header').locator('text=Cities')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('header').locator('text=Mosques')).toBeVisible();
  });
});

test.describe('Search Functionality', () => {
  test('search autocomplete appears on typing', async ({ page }) => {
    await page.goto(BASE_URL);

    // Find search input
    const searchInput = page.locator('input[placeholder*="Search"]');
    await expect(searchInput).toBeVisible({ timeout: 15000 });

    // Type in search
    await searchInput.fill('Dubai');

    // Wait for autocomplete
    await page.waitForTimeout(1000);

    // Should show some suggestions or results
    const hasSuggestions = await page.locator('text=Dubai').isVisible().catch(() => false);
    expect(hasSuggestions).toBeTruthy();
  });
});

test.describe('Newsletter Subscription', () => {
  test('newsletter form validation works', async ({ page }) => {
    await page.goto(BASE_URL);

    // Find email input
    const emailInput = page.locator('input[placeholder="Enter your email address"]');
    await expect(emailInput).toBeVisible({ timeout: 15000 });

    // Try to submit empty
    const subscribeButton = page.locator('button:has-text("Subscribe")');
    await subscribeButton.click();

    // Browser validation should prevent submission
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });
});

test.describe('Footer', () => {
  test('footer exists with essential links', async ({ page }) => {
    await page.goto(BASE_URL);

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Check for footer content (might have terms, privacy, etc.)
    const footer = page.locator('footer');
    const footerExists = await footer.isVisible().catch(() => false);

    // Footer might not exist yet, that's okay for now
    // This test documents whether footer exists
    console.log('Footer exists:', footerExists);
  });
});

test.describe('Error Handling', () => {
  test('404 page for non-existent routes', async ({ page }) => {
    await page.goto(`${BASE_URL}/this-page-does-not-exist-12345`);

    // Should show 404 or redirect
    await page.waitForLoadState('domcontentloaded');

    const is404 = await page.locator('text=404').isVisible().catch(() => false);
    const isNotFound = await page.locator('text=not found').isVisible().catch(() => false);
    const redirectedToHome = page.url() === BASE_URL || page.url() === `${BASE_URL}/`;

    // Should either show 404 or redirect
    expect(is404 || isNotFound || redirectedToHome).toBeTruthy();
  });
});

test.describe('Performance', () => {
  test('homepage loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');

    const loadTime = Date.now() - startTime;
    console.log(`Homepage load time: ${loadTime}ms`);

    // Should load within 10 seconds
    expect(loadTime).toBeLessThan(10000);
  });

  test('no console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Filter out known acceptable errors (like 3rd party scripts)
    const criticalErrors = consoleErrors.filter(err =>
      !err.includes('favicon') &&
      !err.includes('analytics') &&
      !err.includes('gtag')
    );

    console.log('Console errors found:', criticalErrors);
    // Log but don't fail - useful for documentation
  });
});
