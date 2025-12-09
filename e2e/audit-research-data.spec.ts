import { test, expect } from '@playwright/test';

test.describe.configure({ timeout: 60000 });

test('Audit London muslim-community page', async ({ page }) => {
  await page.goto('https://halalcities.netlify.app/city/london/muslim-community', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });

  // Wait a bit for hydration
  await page.waitForTimeout(3000);

  // Take a screenshot for review
  await page.screenshot({
    path: 'e2e/screenshots/london-muslim-community.png',
    fullPage: true
  });

  // Get all text content for analysis
  const content = await page.content();

  console.log('\n========== LONDON PAGE AUDIT ==========');

  // Check for NEW research data sections
  const checks = [
    { selector: 'text=Muslim Community Ethnic Breakdown', desc: 'Ethnic breakdown section (NEW)' },
    { selector: 'text=South Asian', desc: 'South Asian ethnicity data' },
    { selector: 'text=45%', desc: 'South Asian 45% percentage' },
    { selector: 'text=Muslim-Friendly Neighborhoods in London', desc: 'Detailed neighborhoods (NEW)' },
    { selector: 'text=Whitechapel/Tower Hamlets', desc: 'Tower Hamlets neighborhood' },
    { selector: 'text=Major Mosques in London', desc: 'Major mosques section (NEW)' },
    { selector: 'text=London Central Mosque', desc: 'Central Mosque name' },
    { selector: 'text=146 Park Rd', desc: 'Central Mosque address' },
    { selector: 'text=Airport Prayer Facilities', desc: 'Airport section (NEW)' },
    { selector: 'text=LHR', desc: 'Airport code' },
    { selector: 'text=Islamic Education in London', desc: 'Education section (NEW)' },
    { selector: 'text=Tips for Muslim Visitors to London', desc: 'Visitor tips (NEW)' },
    { selector: 'text=What Makes London Special', desc: 'Unique features (NEW)' },
    { selector: 'text=462', desc: 'Correct mosque count (462)' },
    { selector: 'text=Al Rayan Bank', desc: 'Islamic bank name' },
  ];

  for (const check of checks) {
    const found = await page.locator(check.selector).count();
    console.log(`${found > 0 ? '✓' : '✗'} ${check.desc}: ${found > 0 ? 'FOUND' : 'NOT FOUND'}`);
  }

  // Check for the problematic OLD data that shouldn't be there
  console.log('\n--- Checking for problematic OLD data ---');

  // English Speaking 5/10 is wrong for London
  const englishCheck = content.includes('English Speaking') && content.includes('5/10');
  console.log(`${englishCheck ? '❌ BAD' : '✓ OK'} English Speaking 5/10: ${englishCheck ? 'FOUND (WRONG!)' : 'Not showing'}`);

  // Check for Quality of Life section (old data)
  const qualitySection = await page.locator('text=Quality of Life for Muslims').count();
  console.log(`${qualitySection > 0 ? '⚠️ OLD' : '✓ OK'} Quality of Life section (old data): ${qualitySection > 0 ? 'FOUND' : 'Not showing'}`);

  // Check safety scores - new data has hijabAcceptance: 9
  const discriminationSection = await page.locator('text=Safety for Muslims in London').count();
  console.log(`Discrimination section: ${discriminationSection > 0 ? 'FOUND' : 'Not showing'}`);

  // Look for the hijab score
  const hijabScore = await page.locator('text=4/10').count();
  console.log(`Hijab 4/10 (OLD wrong score): ${hijabScore > 0 ? '❌ FOUND - showing old data' : '✓ Not showing'}`);
});

test('Check Netlify deployment status', async ({ page }) => {
  // Check if the site is responding
  const response = await page.goto('https://halalcities.netlify.app/', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  console.log('\n========== DEPLOYMENT STATUS ==========');
  console.log(`Site status: ${response?.status()}`);
  console.log(`Site responding: ${response?.ok() ? 'YES' : 'NO'}`);
});

test('Debug: Compare London data sources', async ({ page }) => {
  await page.goto('https://halalcities.netlify.app/city/london/muslim-community', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });

  await page.waitForTimeout(2000);

  console.log('\n========== DATA SOURCE ANALYSIS ==========');

  // Check which population data is shown
  const content = await page.content();

  // New research data: 1.3M Muslims, 15%
  // Check if the correct population is showing
  if (content.includes('1.3M Muslims') || content.includes('1,300,000')) {
    console.log('✓ Population: Showing NEW research data (1.3M)');
  } else {
    console.log('✗ Population: NOT showing new research data');
  }

  // Check for mosque count (should be 462 from new data, not 441 from old)
  if (content.includes('462')) {
    console.log('✓ Mosque count: Showing NEW research data (462)');
  } else if (content.includes('441')) {
    console.log('✗ Mosque count: Showing OLD data (441)');
  } else {
    console.log('? Mosque count: Unknown');
  }

  // Save content for manual inspection
  const fs = require('fs');
  fs.writeFileSync('e2e/screenshots/london-page-content.html', content);
  console.log('\nPage HTML saved to e2e/screenshots/london-page-content.html');
});
