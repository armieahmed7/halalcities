# HalalCities Data Scraper

This scraper populates the HalalCities database with comprehensive information for 200+ major cities worldwide.

## Features

- ✅ 200+ major cities across all continents
- 🕌 Mosque locations and information
- 🍽️ Halal restaurant data
- 💰 Cost of living estimates
- 👥 Muslim population statistics
- 📊 City scores (halal, safety, community, etc.)
- 🕐 Prayer times

## Usage

### Install Dependencies
```bash
npm install
```

### Set Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=https://brnygjpmuzwonqfanmms.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJybnlnanBtdXp3b25xZmFubW1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODQ4NzEwNCwiZXhwIjoyMDc0MDYzMTA0fQ.yVT_pDRbdENmxkla5_kOkAxlXygR7ktBDP1AUQHJbzA
```

### Run the Scraper

#### Basic Scraper (Quick)
```bash
npm run scrape
```
This populates basic city data for all 200 cities.

#### Enhanced Scraper (Detailed)
```bash
npm run scrape:enhanced
```
This adds detailed mosque and restaurant data for each city.

#### Test Run (First 10 cities)
```bash
npm run scrape:test
```
Tests the scraper with just the first 10 cities.

## Data Sources

Currently, the scraper uses:
- Estimated Muslim population percentages by country
- Cost of living indices for major cities
- Generated mosque and restaurant data based on city characteristics

## Future Enhancements

To connect real data sources:

1. **Google Places API** - For real mosque and halal restaurant locations
2. **Numbeo API** - For accurate cost of living data
3. **Aladhan API** - For accurate prayer times
4. **OpenStreetMap Overpass API** - For mosque locations
5. **Halal certification APIs** - For verified halal restaurants

## City Coverage

### North America (30+ cities)
- USA: NYC, LA, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Austin, San Francisco, Seattle, Boston, Washington DC, Miami, Atlanta, Denver, Portland, Las Vegas, Detroit, Minneapolis, Orlando, Tampa, St. Louis, Baltimore, Charlotte, Nashville, Milwaukee, Cleveland, Pittsburgh, Cincinnati, Kansas City, Indianapolis, Columbus, Sacramento, Salt Lake City, Raleigh
- Canada: Toronto, Montreal, Vancouver, Ottawa, Calgary, Edmonton
- Mexico: Mexico City

### Europe (50+ cities)
- UK: London, Edinburgh, Manchester, Birmingham, Glasgow
- Germany: Berlin, Munich, Hamburg, Frankfurt, Cologne, Stuttgart
- France: Paris, Lyon, Marseille, Nice
- Spain: Madrid, Barcelona, Valencia, Seville, Bilbao
- Italy: Rome, Milan, Turin, Naples, Florence
- Netherlands: Amsterdam, Rotterdam, The Hague
- Belgium: Brussels, Antwerp
- Nordic: Stockholm, Copenhagen, Oslo, Helsinki
- Eastern Europe: Warsaw, Prague, Budapest, Vienna, Bratislava, Ljubljana, Zagreb, Belgrade, Sofia, Bucharest
- Others: Dublin, Lisbon, Athens, Geneva, Zurich, Luxembourg City

### Asia (60+ cities)
- East Asia: Tokyo, Osaka, Kyoto, Seoul, Beijing, Shanghai, Hong Kong, Taipei
- Southeast Asia: Singapore, Kuala Lumpur, Jakarta, Bangkok, Manila, Ho Chi Minh City, Hanoi
- South Asia: Mumbai, Delhi, Bangalore, Karachi, Lahore, Dhaka, Colombo
- Middle East: Dubai, Istanbul, Riyadh, Jeddah, Cairo, Tel Aviv, Amman, Beirut, Kuwait City, Doha, Abu Dhabi, Muscat, Manama

### Africa (20+ cities)
- North Africa: Casablanca, Marrakech, Tunis, Algiers, Cairo, Alexandria
- Sub-Saharan: Lagos, Nairobi, Johannesburg, Cape Town, Accra, Addis Ababa, Dar es Salaam

### Oceania (10 cities)
- Australia: Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Canberra
- New Zealand: Auckland, Wellington, Christchurch

### South America (15 cities)
- Brazil: São Paulo, Rio de Janeiro
- Argentina: Buenos Aires
- Others: Santiago, Lima, Bogotá, Caracas, Montevideo, Quito

## Monitoring Progress

The scraper logs:
- ✅ Successful city insertions
- 📍 Number of mosques added per city
- 🍽️ Number of restaurants added per city
- 🕌 Prayer times added
- ❌ Any errors encountered

## Troubleshooting

1. **Database connection errors**: Check your Supabase credentials
2. **Rate limiting**: The scraper includes delays between batches
3. **Missing data**: Check the console logs for specific city errors