#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying environment variables...\n');

const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'DATABASE_URL',
];

const optionalEnvVars = [
  'SUPABASE_SERVICE_ROLE_KEY',
  'DIRECT_URL',
];

// Check different env files
const envFiles = ['.env', '.env.local', '.env.production'];
const foundVars = new Set();

envFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`Found ${file}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key] = trimmed.split('=');
        foundVars.add(key.trim());
      }
    });
  }
});

console.log('\n📋 Environment Variables Status:\n');

// Check required vars
let allRequiredPresent = true;
requiredEnvVars.forEach(varName => {
  if (foundVars.has(varName)) {
    console.log(`✅ ${varName} - Found`);
  } else {
    console.log(`❌ ${varName} - Missing (REQUIRED)`);
    allRequiredPresent = false;
  }
});

console.log('\nOptional variables:');
optionalEnvVars.forEach(varName => {
  if (foundVars.has(varName)) {
    console.log(`✅ ${varName} - Found`);
  } else {
    console.log(`⚠️  ${varName} - Missing (optional)`);
  }
});

// Check if DATABASE_URL format is correct
if (foundVars.has('DATABASE_URL')) {
  console.log('\n🔗 Checking DATABASE_URL format...');
  const envContent = fs.readFileSync('.env.local', 'utf8').split('\n').find(line => line.startsWith('DATABASE_URL='));
  if (envContent && envContent.includes('db.brnygjpmuzwonqfanmms.supabase.co')) {
    console.log('✅ DATABASE_URL appears to be correctly formatted for Supabase');
  }
}

if (allRequiredPresent) {
  console.log('\n✅ All required environment variables are present!');
} else {
  console.log('\n❌ Some required environment variables are missing!');
  process.exit(1);
}