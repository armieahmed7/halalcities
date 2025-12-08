import { test, expect } from '@playwright/test';

// Increase timeout for all tests
test.setTimeout(60000);

test.describe('Authentication Pages', () => {
  test('login page has Google OAuth button', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');

    // Check for Google sign-in button
    const googleButton = page.locator('button:has-text("Continue with Google")');
    await expect(googleButton).toBeVisible();
  });

  test('signup page has Google OAuth button', async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('domcontentloaded');

    // Check for Google sign-in button
    const googleButton = page.locator('button:has-text("Continue with Google")');
    await expect(googleButton).toBeVisible();
  });

  test('can navigate to forgot password page from login', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');

    // Click forgot password link
    await page.click('text=Forgot password?');

    // Should be on forgot password page
    await expect(page).toHaveURL(/\/forgot-password/);

    // Email input should be visible
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
  });

  test('login page has all form elements', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');

    // Check page title/header
    await expect(page.locator('text=Welcome back')).toBeVisible();

    // Check form elements - use first() to avoid strict mode errors
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();

    // Check for specific submit button by text
    await expect(page.locator('button:has-text("Sign In")')).toBeVisible();

    // Check for Google button
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();

    // Check for Apple button
    await expect(page.locator('button:has-text("Continue with Apple")')).toBeVisible();

    // Check for forgot password link
    await expect(page.locator('text=Forgot password?')).toBeVisible();
  });

  test('signup page renders all elements', async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('domcontentloaded');

    // Check page title/header
    await expect(page.locator('text=Create your account')).toBeVisible();

    // Check form elements - use first() to avoid strict mode errors
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();

    // Check for specific submit button by text
    await expect(page.locator('button:has-text("Create Account")')).toBeVisible();

    // Check for OAuth buttons
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Apple")')).toBeVisible();

    // Check for login link
    await expect(page.locator('a:has-text("Sign in")')).toBeVisible();
  });

  test('login form validates empty fields', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');

    // Try to submit empty form by clicking the Sign In button
    const submitButton = page.locator('button:has-text("Sign In")');
    await submitButton.click();

    // Browser validation should prevent submission
    const emailInput = page.locator('input[type="email"]').first();
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('can navigate from login to signup', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('domcontentloaded');

    // Click sign up link using the exact link text in the form
    await page.locator('a:has-text("Sign up free")').first().click();

    // Should be on signup page
    await expect(page).toHaveURL(/\/signup/);
  });

  test('can navigate from signup to login', async ({ page }) => {
    await page.goto('/signup');
    await page.waitForLoadState('domcontentloaded');

    // Click sign in link
    await page.click('a:has-text("Sign in")');

    // Should be on login page
    await expect(page).toHaveURL(/\/login/);
  });
});
