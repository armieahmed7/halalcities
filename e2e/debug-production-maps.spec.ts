import { test, expect } from '@playwright/test'

// Test against PRODUCTION site
const PROD_URL = 'https://halalcities.netlify.app'

test.describe('Production Map Debug', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`[CONSOLE ERROR]: ${msg.text()}`)
      }
    })

    // Capture page errors
    page.on('pageerror', error => {
      console.log(`[PAGE ERROR]: ${error.message}`)
    })

    // Capture failed requests
    page.on('requestfailed', request => {
      console.log(`[REQUEST FAILED]: ${request.url()} - ${request.failure()?.errorText}`)
    })
  })

  test('Debug London city page map loading', async ({ page }) => {
    console.log('\n========== PRODUCTION MAP DEBUG ==========\n')

    // Navigate to production
    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })

    // Check if page loaded
    const pageTitle = await page.title()
    console.log(`Page title: ${pageTitle}`)

    // Check for Mapbox GL JS script
    const mapboxScript = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script'))
      return scripts.some(s => s.src.includes('mapbox-gl'))
    })
    console.log(`Mapbox GL JS loaded: ${mapboxScript}`)

    // Check for Mapbox CSS
    const mapboxCSS = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      return links.some(l => l.href.includes('mapbox-gl'))
    })
    console.log(`Mapbox CSS loaded: ${mapboxCSS}`)

    // Check for map containers
    const mapContainers = await page.locator('.mapboxgl-map').count()
    console.log(`Mapbox map containers found: ${mapContainers}`)

    // Check for map canvas
    const mapCanvas = await page.locator('.mapboxgl-canvas').count()
    console.log(`Mapbox canvas elements: ${mapCanvas}`)

    // Check for any error messages in the map area
    const mapErrors = await page.evaluate(() => {
      const mapDiv = document.querySelector('[class*="map"]')
      if (mapDiv) {
        return mapDiv.textContent || ''
      }
      return 'No map div found'
    })
    console.log(`Map area content: ${mapErrors.substring(0, 200)}`)

    // Check environment variables exposure
    const envCheck = await page.evaluate(() => {
      // @ts-ignore
      return typeof window.NEXT_PUBLIC_MAPBOX_TOKEN !== 'undefined'
    })
    console.log(`Mapbox token in window: ${envCheck}`)

    // Take screenshot
    await page.screenshot({ path: 'e2e/screenshots/prod-london-map-debug.png', fullPage: false })

    // Check for specific error messages
    const errorTexts = await page.locator('text=/error|failed|missing|undefined/i').allTextContents()
    if (errorTexts.length > 0) {
      console.log(`Error texts found: ${errorTexts.join(', ')}`)
    }
  })

  test('Debug map toggle button error', async ({ page }) => {
    console.log('\n========== MAP TOGGLE DEBUG ==========\n')

    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })

    // Find the Mosques tab
    const mosquesTab = page.locator('button:has-text("Mosques")')
    await mosquesTab.click()
    await page.waitForTimeout(1000)

    // Look for "Show on Map" button
    const showMapButton = page.locator('button:has-text("Show on Map"), button:has-text("Hide Map")')
    const buttonExists = await showMapButton.count()
    console.log(`Show/Hide Map button found: ${buttonExists > 0}`)

    if (buttonExists > 0) {
      // Click to show map
      await showMapButton.first().click()
      console.log('Clicked Show Map button')
      await page.waitForTimeout(2000)

      // Take screenshot after first click
      await page.screenshot({ path: 'e2e/screenshots/prod-map-after-show.png' })

      // Click again to hide/toggle
      console.log('Clicking button again...')
      try {
        await showMapButton.first().click()
        await page.waitForTimeout(1000)
        console.log('Second click successful')
      } catch (error) {
        console.log(`Second click error: ${error}`)
      }

      // Take screenshot after second click
      await page.screenshot({ path: 'e2e/screenshots/prod-map-after-toggle.png' })
    }

    // Check for any React error boundaries
    const errorBoundary = await page.locator('text=/Something went wrong|Error|Unhandled/i').count()
    console.log(`Error boundary messages: ${errorBoundary}`)
  })

  test('Check Mapbox token and initialization', async ({ page }) => {
    console.log('\n========== MAPBOX INIT DEBUG ==========\n')

    // Intercept mapbox API calls
    const mapboxRequests: string[] = []
    page.on('request', request => {
      if (request.url().includes('mapbox')) {
        mapboxRequests.push(request.url())
      }
    })

    page.on('response', response => {
      if (response.url().includes('mapbox')) {
        console.log(`Mapbox response: ${response.url()} - Status: ${response.status()}`)
      }
    })

    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })

    console.log(`Total Mapbox requests: ${mapboxRequests.length}`)
    mapboxRequests.forEach(url => {
      // Check if token is present in URL
      const hasToken = url.includes('access_token=')
      console.log(`  - ${url.substring(0, 100)}... (has token: ${hasToken})`)
    })

    // Check if mapbox-gl is properly initialized
    const mapboxInit = await page.evaluate(() => {
      // @ts-ignore
      return typeof mapboxgl !== 'undefined' ? 'defined' : 'undefined'
    })
    console.log(`mapboxgl global: ${mapboxInit}`)
  })

  test('Check for hydration errors', async ({ page }) => {
    console.log('\n========== HYDRATION DEBUG ==========\n')

    const hydrationErrors: string[] = []

    page.on('console', msg => {
      const text = msg.text()
      if (text.includes('hydration') || text.includes('Hydration') ||
          text.includes('mismatch') || text.includes('did not match')) {
        hydrationErrors.push(text)
      }
    })

    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(3000)

    if (hydrationErrors.length > 0) {
      console.log('Hydration errors found:')
      hydrationErrors.forEach(e => console.log(`  - ${e}`))
    } else {
      console.log('No hydration errors detected')
    }

    // Check for Next.js error overlay
    const nextError = await page.locator('#__next-error').count()
    console.log(`Next.js error overlay: ${nextError > 0 ? 'PRESENT' : 'none'}`)
  })

  test('Comprehensive error collection', async ({ page }) => {
    console.log('\n========== ALL ERRORS ==========\n')

    const allErrors: { type: string; message: string }[] = []

    page.on('console', msg => {
      if (msg.type() === 'error') {
        allErrors.push({ type: 'console', message: msg.text() })
      }
    })

    page.on('pageerror', error => {
      allErrors.push({ type: 'page', message: error.message })
    })

    page.on('requestfailed', request => {
      allErrors.push({ type: 'request', message: `${request.url()} - ${request.failure()?.errorText}` })
    })

    // Visit the page
    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)

    // Click on Mosques tab
    await page.locator('button:has-text("Mosques")').click()
    await page.waitForTimeout(1000)

    // Try to toggle map if button exists
    const mapButton = page.locator('button:has-text("Show on Map"), button:has-text("Map")')
    if (await mapButton.count() > 0) {
      await mapButton.first().click()
      await page.waitForTimeout(2000)

      // Toggle again
      await mapButton.first().click()
      await page.waitForTimeout(1000)
    }

    // Print all collected errors
    console.log(`Total errors collected: ${allErrors.length}`)
    allErrors.forEach((err, i) => {
      console.log(`\n[${i + 1}] ${err.type.toUpperCase()}:`)
      console.log(`    ${err.message.substring(0, 500)}`)
    })

    // Final screenshot
    await page.screenshot({ path: 'e2e/screenshots/prod-final-state.png', fullPage: true })
  })
})

test.describe('Local vs Production Comparison', () => {
  test('Compare local and production map behavior', async ({ page }) => {
    console.log('\n========== LOCAL vs PRODUCTION ==========\n')

    // Test local first
    console.log('Testing LOCAL...')
    try {
      await page.goto('http://localhost:3000/city/london', { waitUntil: 'networkidle', timeout: 10000 })
      const localMaps = await page.locator('.mapboxgl-map').count()
      console.log(`LOCAL - Mapbox containers: ${localMaps}`)
    } catch (e) {
      console.log('LOCAL - Server not running or error')
    }

    // Test production
    console.log('\nTesting PRODUCTION...')
    await page.goto(`${PROD_URL}/city/london`, { waitUntil: 'networkidle' })
    const prodMaps = await page.locator('.mapboxgl-map').count()
    console.log(`PRODUCTION - Mapbox containers: ${prodMaps}`)

    // Check for map-related divs
    const mapDivs = await page.evaluate(() => {
      const divs = document.querySelectorAll('[class*="map"]')
      return Array.from(divs).map(d => ({
        className: d.className,
        id: d.id,
        childCount: d.children.length
      }))
    })
    console.log('\nMap-related divs in production:')
    mapDivs.forEach(d => console.log(`  - ${d.className} (children: ${d.childCount})`))
  })
})
