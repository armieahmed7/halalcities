const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Taking screenshots...');

  // Screenshot city page
  await page.goto('https://halalcities.netlify.app/city/new-york', { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'screenshots/city-new-york.png', fullPage: true });
  console.log('✓ Saved city-new-york.png');

  // Get the actual text content
  const bodyText = await page.textContent('body');
  console.log('\nPage content preview:');
  console.log(bodyText.slice(0, 500));

  // Check for h1
  const h1 = await page.$('h1');
  if (h1) {
    const h1Text = await h1.textContent();
    console.log('\nH1 text:', h1Text);
  }

  await browser.close();
}

takeScreenshots().catch(console.error);
