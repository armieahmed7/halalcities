# Nomads.com City Data Scraper - Detailed Plan

## Objective
Scrape comprehensive city data from nomads.com (formerly Nomad List) for all available cities and store in a consumable JSON format.

## Data to Extract Per City

### Basic Info
- City name, slug, country, region
- Coordinates (lat/lng)
- Population, population density
- Overall rank and score

### Scores & Ratings
- Total score (out of 5)
- Quality of life, family score, community score
- Fun rating, happiness index

### Cost of Living
- Nomad cost (monthly)
- Expat cost (monthly)
- Local cost (monthly)
- Family cost (monthly)
- Hotel median, Airbnb median
- 1BR studio rent (center)
- Coworking hot desk cost
- Mobile data cost

### Daily Costs
- Dinner, coffee, beer prices
- Taxi cost per 3km
- Coca-cola price

### Infrastructure
- Internet speed (Mbps)
- Power grid reliability
- Hospital quality
- AC in buildings percentage

### Weather & Environment
- Current temperature
- Humidity
- Air quality (current & annual)
- Climate change vulnerability

### Safety Metrics
- Overall safety
- Women's safety
- LGBTQ+ safety
- Food safety
- Crime level
- Racism level
- Traffic safety

### Demographics
- Gender ratio (male/female)
- Nomad gender ratio
- GDP per capita
- Income level
- Education level
- English speaking level

### Lifestyle
- Walkability
- Nightlife
- Free WiFi availability
- Places to work
- Friendly to foreigners
- Freedom of speech

### Housing
- Median home price
- Foreign land ownership allowed

### Taxation
- Tax on $50k, $100k, $250k income

### Transportation
- Best taxi app
- Best carriers (short-haul, international)

## Technical Approach

### Phase 1: Get City List
1. Load nomads.com homepage
2. Scroll to load all cities (infinite scroll)
3. Extract city slugs and basic info from cards
4. Save city list to JSON

### Phase 2: Scrape Individual Cities
1. For each city slug, navigate to `/city-slug` or `/country/city`
2. Wait for page to fully load
3. Extract all data fields using DOM selectors
4. Handle pagination/tabs if present
5. Save individual city data

### Phase 3: Data Processing
1. Combine all city data into single JSON file
2. Create TypeScript types matching schema
3. Validate data completeness
4. Export in format compatible with HalalCities app

## File Structure
```
scraper/
├── SCRAPING_PLAN.md          # This plan
├── scrape-cities.js          # Main Playwright scraper
├── city-list.json            # List of all city slugs
├── data/
│   └── cities/               # Individual city JSON files
├── nomads-cities.json        # Combined final output
└── types.ts                  # TypeScript definitions
```

## Rate Limiting & Ethics
- Add 2-3 second delays between requests
- Respect robots.txt
- Don't overwhelm the server
- Cache already-scraped cities
- Use headless browser to handle JS-rendered content

## Error Handling
- Retry failed requests up to 3 times
- Log failed cities for manual review
- Continue scraping even if individual cities fail
- Save progress incrementally

## Estimated Time
- ~1500+ cities estimated
- At 3 seconds per city = ~75 minutes
- Running in batches recommended
