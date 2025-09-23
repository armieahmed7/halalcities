#!/usr/bin/env node

const http = require('http');

const testEndpoints = [
  { path: '/api/cities', expected: 'cities array' },
  { path: '/api/cities/istanbul', expected: 'city details' },
];

function testAPI(port = 3000) {
  console.log(`Testing API endpoints on http://localhost:${port}...`);
  
  testEndpoints.forEach(({ path, expected }) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          
          if (path === '/api/cities') {
            if (json.cities && Array.isArray(json.cities)) {
              console.log(`✅ ${path}: Success - Found ${json.cities.length} cities`);
              if (json.cities.length > 0) {
                console.log(`   First city: ${json.cities[0].name}`);
              }
            } else {
              console.log(`❌ ${path}: Failed - No cities array found`);
            }
          } else {
            console.log(`✅ ${path}: Success - ${res.statusCode}`);
          }
          
        } catch (e) {
          console.log(`❌ ${path}: Failed to parse JSON - ${e.message}`);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`❌ ${path}: Request failed - ${e.message}`);
    });

    req.end();
  });
}

// Check if server is running
const checkServer = http.request({ hostname: 'localhost', port: 3000, path: '/', method: 'GET' }, (res) => {
  console.log('Server is running, testing API...');
  setTimeout(() => testAPI(), 1000);
});

checkServer.on('error', () => {
  console.log('Server is not running. Please run "npm run dev" first.');
  process.exit(1);
});

checkServer.end();