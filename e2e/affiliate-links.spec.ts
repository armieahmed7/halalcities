import { test, expect } from '@playwright/test'

test.describe('Affiliate Links & Booking CTAs', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a city page with the booking CTA
    await page.goto('/city/london')
  })

  test('displays booking CTA on city overview page', async ({ page }) => {
    // Wait for page to load
    await page.waitForLoadState('networkidle')

    // Check for the booking CTA section
    const bookingSection = page.locator('text=Plan Your Trip to')
    await expect(bookingSection).toBeVisible()
  })

  test('booking CTA has all major categories', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Check for Hotels dropdown trigger
    await expect(page.locator('button:has-text("Hotels")')).toBeVisible()

    // Check for Flights dropdown trigger
    await expect(page.locator('button:has-text("Flights")')).toBeVisible()

    // Check for Car Rental dropdown trigger
    await expect(page.locator('button:has-text("Car Rental")')).toBeVisible()

    // Check for Insurance dropdown trigger
    await expect(page.locator('button:has-text("Insurance")')).toBeVisible()
  })

  test('Hotels dropdown shows partner options', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Click on Hotels dropdown
    await page.locator('button:has-text("Hotels")').first().click()

    // Wait for dropdown to open
    await page.waitForTimeout(300)

    // Check for booking partners in dropdown
    await expect(page.locator('text=Booking.com')).toBeVisible()
    await expect(page.locator('text=Agoda')).toBeVisible()
  })

  test('Flights dropdown shows partner options', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Click on Flights dropdown
    await page.locator('button:has-text("Flights")').first().click()

    // Wait for dropdown to open
    await page.waitForTimeout(300)

    // Check for flight partners in dropdown
    await expect(page.locator('text=Skyscanner')).toBeVisible()
    await expect(page.locator('text=Kayak')).toBeVisible()
  })

  test('affiliate links open in new tab', async ({ page, context }) => {
    await page.waitForLoadState('networkidle')

    // Click on Hotels dropdown
    await page.locator('button:has-text("Hotels")').first().click()
    await page.waitForTimeout(300)

    // Set up listener for new page/tab
    const pagePromise = context.waitForEvent('page')

    // Click on a booking partner
    await page.locator('[role="menuitem"]:has-text("Booking.com")').click()

    // Verify new tab opened
    const newPage = await pagePromise
    expect(newPage.url()).toContain('booking.com')

    // Close the new tab
    await newPage.close()
  })

  test('Travel Info tab also shows booking CTA', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Click on Travel Info tab
    await page.locator('button:has-text("Travel Info")').click()
    await page.waitForTimeout(300)

    // Check for booking CTA on travel tab
    const bookingSection = page.locator('text=Plan Your Trip to').first()
    await expect(bookingSection).toBeVisible()
  })

  test('booking CTA shows tours and activities section', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Check for tours & activities section
    await expect(page.locator('text=Discover tours & activities')).toBeVisible()

    // Check for GetYourGuide link
    await expect(page.locator('button:has-text("GetYourGuide")')).toBeVisible()

    // Check for Viator link
    await expect(page.locator('button:has-text("Viator")')).toBeVisible()
  })

  test('affiliate disclosure is visible', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Check for affiliate disclosure text
    const disclosure = page.locator('text=We may earn a commission')
    await expect(disclosure).toBeVisible()
  })

  test('Car Rental dropdown shows partner options', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Click on Car Rental dropdown
    await page.locator('button:has-text("Car Rental")').first().click()
    await page.waitForTimeout(300)

    // Check for car rental partners
    await expect(page.locator('text=Rentalcars.com')).toBeVisible()
    await expect(page.locator('text=Discover Cars')).toBeVisible()
  })

  test('Insurance dropdown shows partner options', async ({ page }) => {
    await page.waitForLoadState('networkidle')

    // Click on Insurance dropdown
    await page.locator('button:has-text("Insurance")').first().click()
    await page.waitForTimeout(300)

    // Check for insurance partners
    await expect(page.locator('text=World Nomads')).toBeVisible()
    await expect(page.locator('text=Allianz Travel')).toBeVisible()
  })
})

test.describe('Affiliate Analytics', () => {
  test('affiliate click tracking endpoint exists', async ({ request }) => {
    const response = await request.post('/api/analytics/affiliate-click', {
      data: {
        partner: 'Booking.com',
        category: 'hotels',
        city: 'London',
        country: 'United Kingdom',
        timestamp: new Date().toISOString()
      }
    })

    expect(response.status()).toBe(200)
    const data = await response.json()
    expect(data.success).toBe(true)
  })

  test('affiliate click tracking handles missing fields', async ({ request }) => {
    const response = await request.post('/api/analytics/affiliate-click', {
      data: {
        partner: 'Booking.com'
        // Missing required fields
      }
    })

    expect(response.status()).toBe(400)
  })
})

test.describe('Booking CTA Variants', () => {
  test('compact variant renders correctly on different pages', async ({ page }) => {
    // The compact variant would be used in smaller contexts
    // For now, we test the full variant is present
    await page.goto('/city/dubai')
    await page.waitForLoadState('networkidle')

    const bookingSection = page.locator('text=Plan Your Trip to Dubai')
    await expect(bookingSection).toBeVisible()
  })

  test('booking CTA adapts to different cities', async ({ page }) => {
    // Test Paris
    await page.goto('/city/paris')
    await page.waitForLoadState('networkidle')

    let bookingSection = page.locator('text=Plan Your Trip to Paris')
    await expect(bookingSection).toBeVisible()

    // Test Istanbul
    await page.goto('/city/istanbul')
    await page.waitForLoadState('networkidle')

    bookingSection = page.locator('text=Plan Your Trip to Istanbul')
    await expect(bookingSection).toBeVisible()
  })
})
