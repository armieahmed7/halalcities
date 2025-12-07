/**
 * Generate cities.ts file from enriched data - Version 2
 * Proper TypeScript formatting
 */

const fs = require('fs');
const path = require('path');

const enrichedData = require('./halal-cities-enriched.json');

function stringifyValue(value, indent = 0) {
  const pad = '  '.repeat(indent);

  if (value === null || value === undefined) {
    return 'null';
  }

  if (typeof value === 'boolean') {
    return value.toString();
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  if (typeof value === 'string') {
    // Escape quotes and special characters
    return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]';
    }
    if (value.every(v => typeof v === 'string')) {
      // Array of strings - inline if short
      const items = value.map(v => stringifyValue(v));
      if (items.join(', ').length < 60) {
        return `[${items.join(', ')}]`;
      }
    }
    const items = value.map(v => `${pad}  ${stringifyValue(v, indent + 1)}`);
    return `[\n${items.join(',\n')}\n${pad}]`;
  }

  if (typeof value === 'object') {
    // Filter out both undefined and null values (optional fields)
    const entries = Object.entries(value).filter(([_, v]) => v !== undefined && v !== null);
    if (entries.length === 0) {
      return '{}';
    }

    const items = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`;
      return `${pad}  ${key}: ${stringifyValue(v, indent + 1)}`;
    });

    return `{\n${items.join(',\n')}\n${pad}}`;
  }

  return String(value);
}

function generateCitiesTS() {
  console.log('='.repeat(60));
  console.log('GENERATING cities.ts (v2)');
  console.log('='.repeat(60));

  const cities = enrichedData.cities;
  console.log(`\nProcessing ${cities.length} cities...`);

  let tsContent = `import { City } from '@/types/city'

export const cities: City[] = [\n`;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    // Remove _nomadsData
    if (city._nomadsData) {
      delete city._nomadsData;
    }
    if (city.extended && city.extended._nomadsData) {
      delete city.extended._nomadsData;
    }

    // Clean up scores to ensure they're in valid range
    city.scores.halal = Math.min(Math.max(city.scores.halal, 0), 100);
    city.scores.muslimPopulationPercent = Math.min(Math.max(city.scores.muslimPopulationPercent, 0), 100);
    city.scores.food = Math.min(Math.max(city.scores.food, 0), 100);
    city.scores.community = Math.min(Math.max(city.scores.community, 0), 100);
    city.scores.cost = Math.min(Math.max(city.scores.cost, 0), 100);
    city.scores.internet = Math.min(Math.max(city.scores.internet, 0), 100);
    city.scores.safety = Math.min(Math.max(city.scores.safety, 0), 100);
    city.scores.overall = Math.min(Math.max(city.scores.overall, 0), 100);

    // Generate city object string
    tsContent += `  ${stringifyValue(city, 1)},\n`;

    if ((i + 1) % 200 === 0) {
      console.log(`  Processed ${i + 1} cities...`);
    }
  }

  tsContent += `]
`;

  // Write to file
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'cities.ts');
  fs.writeFileSync(outputPath, tsContent);

  const fileSizeMB = (Buffer.byteLength(tsContent) / 1024 / 1024).toFixed(2);
  console.log(`\n✅ Generated ${outputPath}`);
  console.log(`   File size: ${fileSizeMB} MB`);
  console.log(`   Total cities: ${cities.length}`);

  return cities.length;
}

generateCitiesTS();
