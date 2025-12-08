# HalalCities - Complete Feature List

## Overview
HalalCities is a comprehensive platform for Muslim travelers and digital nomads to discover Muslim-friendly cities worldwide. The platform provides detailed information about halal food, mosques, prayer times, safety metrics, and community resources.

**Live Site:** https://halalcities.netlify.app

---

## Core Features

### 1. City Explorer
- **1,370+ Cities Database**: Comprehensive coverage of cities worldwide with Muslim-friendly information
- **City Cards**: Visual cards showing key stats (Halal Score, mosques, restaurants, Muslim population %)
- **Multiple View Options**: Grid view, list view, and map view for browsing cities
- **Sorting Options**: Sort by Overall Score, Halal Score, Safety, Cost, or alphabetically
- **Filter Tags**: Quick filters for Many Mosques, Best Halal Food, Budget Friendly, Family Friendly, Very Safe, Fast Internet

### 2. Advanced Search & Filtering
- **Autocomplete Search**: Real-time city search with autocomplete suggestions
- **Multi-criteria Filters**: Filter by region, halal score range, budget, safety level
- **Smart Suggestions**: Popular cities and trending destinations

### 3. City Detail Pages
Each city page includes comprehensive information organized in tabs:

#### Overview Tab
- Hero image with city name, country, and region
- Quick stats (Mosques count, Halal restaurants, Muslim population %)
- Halal Score badge (0-100)
- Muslim demographics (population, percentage, major ethnicities)
- Muslim-friendly neighborhoods with Google Maps links
- Safety for Muslims index (Hijab, Niqab, Racism, Islamophobia scores)
- Airport prayer room information
- Halal food scene preview

#### Prayer & Ramadan Tab
- **Real-time Prayer Times**: Accurate prayer times calculated for the city's coordinates
  - Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha times
  - Multiple calculation methods supported
  - Automatic timezone detection
- **Interactive Qibla Compass**:
  - Shows exact Qibla direction in degrees
  - Live compass mode using device sensors (mobile)
  - Distance to Makkah displayed
  - Cardinal direction indicator
- **Ramadan Guide**:
  - Fasting hours for the city
  - Suhoor and Iftar times
  - Ramadan-specific tips for the location

#### Muslim Community Tab
- Community size and demographics
- Cultural organizations and centers
- Events and meetup information
- Local Muslim businesses

#### Safety & Discrimination Tab
- **Discrimination Index** (1-10 scale, lower is better):
  - Hijab discrimination level
  - Niqab discrimination level (includes ban information)
  - General racism index
  - Islamophobia level
- **Quality of Life Metrics** (1-10 scale):
  - Safety score
  - Healthcare quality
  - Foreigner friendliness
  - Female friendliness
  - Racial tolerance
  - Peace index
  - Freedom of speech
  - English speaking level

#### Halal Places Tab
- **Interactive Restaurant Map**:
  - List and map view toggle
  - Restaurant markers with info windows
  - Filter by cuisine type (Turkish, Arab, Indian, Fast Food)
  - Filter by certification status
  - Vegetarian/vegan options filter
- **Restaurant Cards** showing:
  - Name, cuisine type, rating
  - Price level ($, $$, $$$)
  - Distance from city center
  - Opening hours
  - Halal certification badge
  - "Get Directions" button linking to Google Maps
- Halal meat shops count
- TripAdvisor integration links

#### Mosques Tab
- Total mosque count
- Islamic schools count
- Popular mosques for Jummah prayer
- Interactive map with mosque locations
- Filters: All, Jummah, Women's Section, Parking
- Qibla direction information
- Fasting hours during Ramadan

#### Digital Nomad Tab
- Internet speed information
- Coworking spaces
- Best cafes for working
- Digital infrastructure rating

#### Cost of Living Tab
- Monthly budget estimate
- Accommodation costs
- Food costs
- Transportation costs
- Comparison with other cities

#### Travel Info Tab
- **Tourism Statistics**:
  - International visitor arrivals
  - Muslim visitor arrivals
- **Attractions**: Top tourist attractions
- **Shopping Areas**: Best shopping destinations
- **Famous Parks**: Green spaces and recreation
- **Practical Information**:
  - Local language
  - Region/timezone
  - Tap water safety
  - Cashless society rating
  - Best time to visit
- **Islamic Finance**:
  - Islamic banks available
  - Takaful/Islamic insurance providers
- **Muslim-Friendly Hotels**:
  - Hotels with halal breakfast
  - Hotels with bidet/shattaf

### 4. City Scores System
Each city has multiple scores (0-100%):
- **Halal Score**: Overall Muslim-friendliness rating
- **Food Score**: Availability and quality of halal food
- **Community Score**: Strength of Muslim community
- **Cost Score**: Affordability rating
- **Internet Score**: Quality of internet connectivity
- **Safety Score**: General safety rating

### 5. City Comparison Tool
- Compare up to 3 cities side by side
- Visual comparison of all scores
- Feature-by-feature comparison
- Add/remove cities easily
- Share comparison results

### 6. Travel Planner
- **Multi-city Itinerary Builder**:
  - Add multiple cities to your trip
  - Set number of days per city
  - Drag-and-drop reordering
  - Remove cities from plan
- **Trip Statistics**:
  - Total trip duration
  - Combined budget estimate
  - Average halal score across destinations
- **Date Planning**:
  - Set start date
  - Automatic date calculation for each city
- **Export & Share**: Save or share your itinerary
- **LocalStorage Persistence**: Your plans are saved automatically

### 7. Favorites System
- Save favorite cities for quick access
- Persistent storage using localStorage
- Quick add/remove from any city card
- Dedicated favorites page

### 8. Prayer Times Calculator
- Standalone prayer times feature
- Location-based calculation
- Multiple calculation methods
- Hijri date display

### 9. Qibla Direction Finder
- Accurate Qibla calculation from any location
- Compass integration for mobile devices
- Distance to Kaaba display

---

## Technical Features

### Frontend
- **Framework**: Next.js 15.5.7 with App Router
- **UI Components**: Custom components with Tailwind CSS
- **State Management**: React hooks (useState, useEffect, useMemo)
- **Styling**: CSS Variables for theming, responsive design
- **Icons**: Lucide React icons

### Performance
- Server-side rendering (SSR)
- Image optimization with Next.js Image
- Lazy loading for city cards
- Skeleton loading states

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop full-feature experience
- Sticky navigation and sidebars

### Dark Mode
- System preference detection
- Manual toggle in header
- Persistent preference storage

---

## Data Coverage

### Cities
- **Total Cities**: 1,370+
- **Regions Covered**:
  - Middle East
  - Southeast Asia
  - Europe
  - North America
  - Africa
  - Central Asia
  - South Asia
  - Oceania

### Statistics
- **Mosques Listed**: 10K+
- **Halal Restaurants**: 50K+
- **User Community**: 100K+

---

## Navigation Structure

### Main Navigation
- Cities (Homepage)
- Mosques
- Halal Food
- Community
- Tools (Dropdown):
  - Trip Planner
  - Compare Cities
  - Saved Cities
  - Qibla Finder
  - Prayer Times

### User Features
- Log In
- Sign Up Free
- User Profile (when logged in)
- Settings

---

## Deployment

- **Hosting**: Netlify
- **Domain**: halalcities.netlify.app
- **Build**: Automated CI/CD from GitHub
- **Runtime**: Next.js with Netlify plugin

---

## Future Roadmap

1. User authentication and profiles
2. User reviews and ratings
3. Community forums
4. Mobile app (iOS/Android)
5. Offline mode for travelers
6. Integration with booking platforms
7. Halal certification verification system
8. Multi-language support (Arabic, Malay, Turkish, etc.)
9. Push notifications for prayer times
10. Integration with Muslim travel agencies

---

## Contributing

This project is open for contributions. Key areas:
- Adding new cities
- Updating city information
- Improving translations
- Bug fixes and feature requests

---

*Made with ❤️ for the Muslim Ummah*
