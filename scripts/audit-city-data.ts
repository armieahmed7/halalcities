/**
 * Comprehensive audit of city research data for accuracy
 * This script checks all 100 cities' data for:
 * - Missing required fields
 * - Illogical values (e.g., London with low English proficiency)
 * - Data consistency issues
 */

import { allCityData } from '../src/data/city-research';

interface AuditIssue {
  city: string;
  field: string;
  issue: string;
  severity: 'error' | 'warning' | 'info';
  currentValue?: any;
  suggestedValue?: any;
}

const issues: AuditIssue[] = [];

function addIssue(
  city: string,
  field: string,
  issue: string,
  severity: 'error' | 'warning' | 'info',
  currentValue?: any,
  suggestedValue?: any
) {
  issues.push({ city, field, issue, severity, currentValue, suggestedValue });
}

// Countries where English is native/primary
const englishSpeakingCountries = [
  'United Kingdom',
  'USA',
  'Ireland',
  'Australia',
  'New Zealand',
];

// Countries with known face-covering restrictions
const countriesWithNiqabRestrictions = [
  'France',
  'Belgium',
  'Austria',
  'Denmark',
  'Netherlands', // partial
];

// Run audit
console.log('========== CITY DATA AUDIT ==========\n');
console.log(`Total cities: ${Object.keys(allCityData).length}\n`);

for (const [slug, city] of Object.entries(allCityData)) {
  // Check required fields exist
  if (!city.muslimPopulation) {
    addIssue(city.cityName, 'muslimPopulation', 'Missing muslim population data', 'error');
  }

  if (!city.mosques?.majorMosques || city.mosques.majorMosques.length === 0) {
    addIssue(city.cityName, 'mosques.majorMosques', 'No major mosques listed', 'warning');
  }

  if (!city.muslimNeighborhoods || city.muslimNeighborhoods.length === 0) {
    addIssue(city.cityName, 'muslimNeighborhoods', 'No neighborhoods listed', 'warning');
  }

  // Check safety info
  if (city.safetyInfo) {
    // Check acceptance scores are reasonable (1-10 scale)
    const { hijabAcceptance, niqabAcceptance, beardAcceptance, overallSafety } = city.safetyInfo;

    if (hijabAcceptance < 1 || hijabAcceptance > 10) {
      addIssue(city.cityName, 'safetyInfo.hijabAcceptance', 'Invalid hijab acceptance score', 'error', hijabAcceptance);
    }

    // Niqab acceptance should be low in countries with bans
    if (countriesWithNiqabRestrictions.includes(city.country) && niqabAcceptance > 5) {
      addIssue(
        city.cityName,
        'safetyInfo.niqabAcceptance',
        `${city.country} has niqab restrictions but high acceptance score`,
        'warning',
        niqabAcceptance,
        '2-4'
      );
    }

    // Overall safety should correlate with islamophobia level
    if (city.safetyInfo.islamophobiaLevel === 'high' && overallSafety > 7) {
      addIssue(
        city.cityName,
        'safetyInfo',
        'High islamophobia but high safety score seems inconsistent',
        'info',
        { islamophobiaLevel: city.safetyInfo.islamophobiaLevel, overallSafety }
      );
    }
  }

  // Check for logical issues
  // Istanbul - should be very Muslim-friendly (majority Muslim city)
  if (slug === 'istanbul') {
    if (city.safetyInfo.hijabAcceptance < 9) {
      addIssue(city.cityName, 'safetyInfo.hijabAcceptance', 'Istanbul is majority Muslim, should have very high hijab acceptance', 'warning', city.safetyInfo.hijabAcceptance, 10);
    }
    if (city.muslimPopulation.percentage < 90) {
      addIssue(city.cityName, 'muslimPopulation.percentage', 'Istanbul should be ~99% Muslim', 'info', city.muslimPopulation.percentage);
    }
  }

  // Sarajevo - also majority Muslim
  if (slug === 'sarajevo') {
    if (city.safetyInfo.hijabAcceptance < 8) {
      addIssue(city.cityName, 'safetyInfo.hijabAcceptance', 'Sarajevo is majority Muslim, should have high hijab acceptance', 'warning', city.safetyInfo.hijabAcceptance);
    }
  }

  // Moscow - Check if Russian
  if (slug === 'moscow') {
    if (!city.ethnicBreakdown.some(e => e.group.toLowerCase().includes('tatar') || e.group.toLowerCase().includes('central asian'))) {
      addIssue(city.cityName, 'ethnicBreakdown', 'Moscow should include Tatar and Central Asian Muslims', 'info');
    }
  }

  // Check mosque counts are reasonable
  if (city.mosques) {
    const { totalCount, majorMosques } = city.mosques;
    if (majorMosques.length > totalCount) {
      addIssue(city.cityName, 'mosques', 'Major mosque count exceeds total mosque count', 'error');
    }

    // Very large cities should have many mosques
    if (city.muslimPopulation.estimate > 500000 && totalCount < 50) {
      addIssue(
        city.cityName,
        'mosques.totalCount',
        'Large Muslim population but relatively few mosques',
        'info',
        { population: city.muslimPopulation.estimate, mosques: totalCount }
      );
    }
  }

  // Check halal food
  if (city.halalFood) {
    if (city.halalFood.restaurantCount > 1000 && city.halalFood.topRestaurants.length < 3) {
      addIssue(city.cityName, 'halalFood.topRestaurants', 'Many restaurants but few listed', 'warning');
    }
  }

  // Check neighborhood data consistency
  for (const neighborhood of city.muslimNeighborhoods || []) {
    if (neighborhood.muslimPopulation === 'high' && neighborhood.mosqueCount < 2) {
      addIssue(
        city.cityName,
        `muslimNeighborhoods.${neighborhood.name}`,
        'High Muslim population area with very few mosques',
        'info'
      );
    }

    if (neighborhood.safetyRating > 10 || neighborhood.safetyRating < 1) {
      addIssue(
        city.cityName,
        `muslimNeighborhoods.${neighborhood.name}.safetyRating`,
        'Invalid safety rating (should be 1-10)',
        'error',
        neighborhood.safetyRating
      );
    }
  }

  // Check visitor/expat tips exist
  if (!city.visitorTips || city.visitorTips.length < 3) {
    addIssue(city.cityName, 'visitorTips', 'Few or no visitor tips', 'warning');
  }

  if (!city.expatTips || city.expatTips.length < 3) {
    addIssue(city.cityName, 'expatTips', 'Few or no expat tips', 'warning');
  }
}

// Print results
console.log('\n========== AUDIT RESULTS ==========\n');

const errors = issues.filter(i => i.severity === 'error');
const warnings = issues.filter(i => i.severity === 'warning');
const infos = issues.filter(i => i.severity === 'info');

console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Info: ${infos.length}`);

if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => {
    console.log(`❌ [${e.city}] ${e.field}: ${e.issue}`);
    if (e.currentValue !== undefined) console.log(`   Current: ${JSON.stringify(e.currentValue)}`);
    if (e.suggestedValue !== undefined) console.log(`   Suggested: ${JSON.stringify(e.suggestedValue)}`);
  });
}

if (warnings.length > 0) {
  console.log('\n--- WARNINGS ---');
  warnings.forEach(w => {
    console.log(`⚠️  [${w.city}] ${w.field}: ${w.issue}`);
    if (w.currentValue !== undefined) console.log(`   Current: ${JSON.stringify(w.currentValue)}`);
    if (w.suggestedValue !== undefined) console.log(`   Suggested: ${JSON.stringify(w.suggestedValue)}`);
  });
}

if (infos.length > 0) {
  console.log('\n--- INFO ---');
  infos.forEach(i => {
    console.log(`ℹ️  [${i.city}] ${i.field}: ${i.issue}`);
    if (i.currentValue !== undefined) console.log(`   Current: ${JSON.stringify(i.currentValue)}`);
  });
}

console.log('\n========== AUDIT COMPLETE ==========');
