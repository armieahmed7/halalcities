import { test, expect } from '@playwright/test';

test.describe.configure({ timeout: 90000 });

// Test cities that have research data - sample from each region
const CITIES_TO_AUDIT = [
  { slug: 'london', name: 'London', country: 'UK' },
  { slug: 'new-york', name: 'New York', country: 'USA' },
  { slug: 'paris', name: 'Paris', country: 'France' },
  { slug: 'berlin', name: 'Berlin', country: 'Germany' },
  { slug: 'istanbul', name: 'Istanbul', country: 'Turkey' },
  { slug: 'amsterdam', name: 'Amsterdam', country: 'Netherlands' },
  { slug: 'detroit', name: 'Detroit', country: 'USA' },
  { slug: 'birmingham', name: 'Birmingham', country: 'UK' },
];

test.describe('Comprehensive Muslim Community Page Audit', () => {
  for (const city of CITIES_TO_AUDIT) {
    test(`Audit ${city.name} (${city.country}) muslim-community page`, async ({ page }) => {
      await page.goto(`https://halalcities.netlify.app/city/${city.slug}/muslim-community`, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });

      await page.waitForTimeout(2000);

      console.log(`\n========== ${city.name.toUpperCase()} (${city.country}) AUDIT ==========`);

      // Check for NEW research data sections (should all be present)
      const newSections = [
        { selector: 'text=Muslim Community Ethnic Breakdown', name: 'Ethnic Breakdown' },
        { selector: 'text=Muslim-Friendly Neighborhoods in', name: 'Neighborhoods' },
        { selector: 'text=Major Mosques in', name: 'Major Mosques' },
        { selector: 'text=Airport Prayer Facilities', name: 'Airport Info' },
        { selector: 'text=What Makes', name: 'Unique Features' },
        { selector: 'text=Tips for Muslim Visitors', name: 'Visitor Tips' },
      ];

      console.log('\n--- New Research Sections ---');
      let newSectionsFound = 0;
      for (const section of newSections) {
        const found = await page.locator(section.selector).count();
        console.log(`${found > 0 ? '✓' : '✗'} ${section.name}: ${found > 0 ? 'FOUND' : 'MISSING'}`);
        if (found > 0) newSectionsFound++;
      }

      // Check for REMOVED old problematic sections
      console.log('\n--- Old Sections (should be removed) ---');
      const oldSections = [
        { selector: 'text=Quality of Life for Muslims', name: 'Quality of Life' },
        { selector: 'text=English Speaking', name: 'English Speaking score' },
      ];

      for (const section of oldSections) {
        const found = await page.locator(section.selector).count();
        console.log(`${found === 0 ? '✓' : '❌'} ${section.name}: ${found === 0 ? 'REMOVED (good)' : 'STILL PRESENT (bad)'}`);
      }

      // Check for NEW Safety & Acceptance section
      console.log('\n--- Safety Section ---');
      const newSafetySection = await page.locator('text=Safety & Acceptance in').count();
      const oldSafetySection = await page.locator('text=Safety for Muslims in').count();
      const acceptanceLevels = await page.locator('text=Acceptance levels').count();

      if (newSafetySection > 0 && acceptanceLevels > 0) {
        console.log('✓ Using NEW research-based safety section');
      } else if (oldSafetySection > 0) {
        console.log('⚠️ Using OLD discrimination-based safety section (no research data)');
      } else {
        console.log('✗ No safety section found');
      }

      // Summary
      console.log('\n--- Summary ---');
      console.log(`New sections found: ${newSectionsFound}/${newSections.length}`);

      // Verify minimum sections exist
      expect(newSectionsFound).toBeGreaterThanOrEqual(4);
    });
  }
});

test('Verify London shows correct acceptance scores', async ({ page }) => {
  await page.goto('https://halalcities.netlify.app/city/london/muslim-community', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.waitForTimeout(2000);

  console.log('\n========== LONDON SCORE VERIFICATION ==========');

  // London should show 9/10 hijab acceptance, not 4/10
  const content = await page.content();

  // Check for correct scores
  const scoreChecks = [
    { term: '9/10', desc: 'Hijab Acceptance 9/10', shouldFind: true },
    { term: '7/10', desc: 'Niqab Acceptance 7/10', shouldFind: true },
    { term: 'Acceptance levels', desc: 'New acceptance section', shouldFind: true },
    { term: 'Quality of Life for Muslims', desc: 'Old QoL section', shouldFind: false },
    { term: 'English Speaking', desc: 'English Speaking irrelevant metric', shouldFind: false },
  ];

  for (const check of scoreChecks) {
    const found = content.includes(check.term);
    const pass = found === check.shouldFind;
    console.log(`${pass ? '✓' : '❌'} ${check.desc}: ${found ? 'FOUND' : 'NOT FOUND'} ${pass ? '' : '(WRONG!)'}`);
  }
});

test('Verify Istanbul shows high Muslim-friendliness', async ({ page }) => {
  await page.goto('https://halalcities.netlify.app/city/istanbul/muslim-community', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.waitForTimeout(2000);

  console.log('\n========== ISTANBUL SCORE VERIFICATION ==========');

  const content = await page.content();

  // Istanbul should have very high acceptance (majority Muslim city)
  const checks = [
    { term: '10/10', desc: 'Perfect acceptance score', shouldFind: true },
    { term: 'low', desc: 'Low islamophobia level', shouldFind: true },
  ];

  for (const check of checks) {
    const found = content.toLowerCase().includes(check.term.toLowerCase());
    console.log(`${found === check.shouldFind ? '✓' : '⚠️'} ${check.desc}: ${found ? 'FOUND' : 'NOT FOUND'}`);
  }
});

test('Take screenshots of key cities', async ({ page }) => {
  const cities = ['london', 'new-york', 'paris', 'istanbul'];

  for (const city of cities) {
    await page.goto(`https://halalcities.netlify.app/city/${city}/muslim-community`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: `e2e/screenshots/${city}-muslim-community.png`,
      fullPage: true
    });
    console.log(`📸 Screenshot saved: ${city}-muslim-community.png`);
  }
});
