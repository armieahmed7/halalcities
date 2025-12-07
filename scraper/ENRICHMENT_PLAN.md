# Muslim Data Enrichment Plan

## Overview
Enrich 1370 cities from nomads.com with Muslim-relevant data to populate HalalCities.

## Data Fields to Enrich

### Critical Fields (Must Have)
1. **Muslim Population** - Number and percentage
2. **Mosques** - Count and major mosque names
3. **Halal Restaurants** - Count
4. **Halal Score** - Calculated from other metrics
5. **Primary Image** - City image URL

### Important Fields
6. **Airport Prayer Room** - Boolean + details
7. **Islamic Banks** - Boolean + names
8. **Islamic Schools** - Count + names
9. **Muslim-Friendly Areas/Neighborhoods**
10. **Major Muslim Ethnicities**

### Discrimination Metrics
11. **Hijab Discrimination Score** (1-10)
12. **Niqab Status** (banned/allowed + discrimination)
13. **Islamophobia Score** (1-10)
14. **Racism Score** (1-10)

### Extended Data
15. **Halal Hotels** - Count
16. **Halal Meat Shops** - Count
17. **Qibla Direction** - Degrees from North
18. **Fasting Hours** - Summer/Winter
19. **Local Islamic Organizations**

## Data Sources & Strategy

### 1. Muslim Population Data
**Primary Sources:**
- Pew Research Center Muslim population statistics
- Wikipedia country/city demographics
- World Population Review

**Strategy:**
- Use country-level Muslim % as baseline
- Adjust for major cities (usually higher diversity)
- Cross-reference with mosque density

**API/Search:**
```
Web Search: "[city name] muslim population percentage"
Web Search: "[city name] islamic community demographics"
```

### 2. Mosque Data
**Primary Sources:**
- Salatomatic.com (mosque directory)
- IslamicFinder.org
- Google Maps mosque search

**Strategy:**
- Search for mosque count per city
- Identify 2-5 major mosques for Jummah
- Note if city has Islamic center

**API/Search:**
```
Web Search: "mosques in [city name]"
Web Search: "[city name] islamic center masjid"
```

### 3. Halal Restaurant Data
**Primary Sources:**
- Zabihah.com (halal restaurant directory)
- TripAdvisor halal filter
- HalalTrip.com
- Google Maps halal restaurant search

**Strategy:**
- Get approximate count
- Identify top 3-5 popular halal restaurants
- Note halal certification availability

**API/Search:**
```
Web Search: "halal restaurants [city name]"
Web Search: "[city name] halal food guide"
```

### 4. Airport Prayer Rooms
**Primary Sources:**
- Airport websites
- Muslim travel guides
- MuslimTravelGirl.com

**Strategy:**
- Check main airport(s) for each city
- Note terminal locations if available

**API/Search:**
```
Web Search: "[city name] airport prayer room muslim"
Web Search: "[airport code] mosque prayer facility"
```

### 5. Islamic Banking
**Primary Sources:**
- Country Islamic finance directories
- Bank websites
- IslamicFinanceNews.com

**Strategy:**
- Check if country has Islamic banking
- Note specific banks if available

**API/Search:**
```
Web Search: "islamic bank [city name] [country]"
Web Search: "[country] sharia compliant banking"
```

### 6. Discrimination Scores
**Primary Sources:**
- Pew Research religious freedom reports
- US State Dept religious freedom reports
- HRW country reports
- News articles on hijab/niqab laws

**Strategy:**
- Research country-level policies first
- Check for hijab/niqab bans
- Research recent incidents
- Score 1-10 based on evidence

**API/Search:**
```
Web Search: "[country] hijab ban law"
Web Search: "[city name] islamophobia incidents"
Web Search: "[country] religious freedom muslims"
```

## Implementation Approach

### Phase 1: Batch AI Enrichment (Primary)
Use Claude/AI to generate Muslim-relevant data based on:
- Country context
- City size/population
- Region characteristics
- Known Muslim demographics

This provides baseline data for all 1370 cities quickly.

### Phase 2: Web Search Enrichment (Top 200 Cities)
For the top 200 most important cities:
- Perform web searches for specific data
- Validate and update AI-generated data
- Add specific mosque names, restaurant names

### Phase 3: Manual Verification (Top 50 Cities)
For major Muslim destinations:
- Dubai, Istanbul, Kuala Lumpur, etc.
- Deep research with multiple sources
- Add detailed extended information

## Halal Score Calculation

```javascript
function calculateHalalScore(city) {
  // Weight factors
  const weights = {
    muslimPopPercent: 0.25,    // Higher Muslim % = more infrastructure
    mosqueDensity: 0.20,       // Mosques per 100k population
    halalFoodAvail: 0.20,      // Halal restaurants per 100k
    airportPrayer: 0.05,       // Airport prayer room
    islamicBanking: 0.05,      // Islamic banking available
    discrimination: 0.15,      // Inverse of discrimination score
    safety: 0.10               // General safety
  };

  let score = 0;

  // Muslim population (0-100 scaled)
  score += Math.min(city.muslimPopPercent * 2, 25) * weights.muslimPopPercent * 4;

  // Mosque density (mosques per 100k)
  const mosqueDensity = (city.mosques / city.population) * 100000;
  score += Math.min(mosqueDensity * 5, 100) * weights.mosqueDensity;

  // Halal food availability
  const foodDensity = (city.halalRestaurants / city.population) * 100000;
  score += Math.min(foodDensity * 2, 100) * weights.halalFoodAvail;

  // Airport prayer room (0 or 100)
  score += (city.airportPrayerRoom ? 100 : 0) * weights.airportPrayer;

  // Islamic banking (0 or 100)
  score += (city.islamicBanking ? 100 : 0) * weights.islamicBanking;

  // Discrimination (inverse: 10 = worst, so score = (10 - avg) * 10)
  const avgDiscrim = (city.hijabDiscrim + city.islamophobia) / 2;
  score += ((10 - avgDiscrim) * 10) * weights.discrimination;

  // Safety
  score += city.safetyScore * 10 * weights.safety;

  return Math.round(Math.min(Math.max(score, 0), 100));
}
```

## Output Format

Each enriched city will have:
```typescript
{
  slug: string,
  name: string,
  country: string,
  region: string,
  primaryImage: string,
  coordinates: { lat: number, lng: number },
  scores: {
    halal: number,           // 0-100, calculated
    muslimPopulationPercent: number,
    food: number,
    community: number,
    cost: number,
    internet: number,
    safety: number,
    overall: number
  },
  stats: {
    muslimPopulation: number,
    mosques: number,
    halalRestaurants: number,
    monthlyBudget: number,
    internetSpeed: number
  },
  features: {
    airportPrayerRoom: boolean,
    halalHotels: number,
    islamicBanks: boolean,
    islamicSchools: number
  },
  extended: {
    demographics: {...},
    discrimination: {...},
    airport: {...},
    // ... etc
  }
}
```

## Execution Timeline

1. **Phase 1** (AI Enrichment): ~30 minutes
   - Process all 1370 cities with AI-generated data
   - Base estimates on country/region patterns

2. **Phase 2** (Web Enrichment): ~2-3 hours
   - Search top 200 cities for specific data
   - ~30 seconds per city average

3. **Phase 3** (Validation): ~30 minutes
   - Spot-check data quality
   - Fix obvious errors
   - Update cities.ts

Total: ~3-4 hours for complete dataset
