// City Research Index - Aggregates all Muslim community data for 100 cities
// This file exports all city data from regional research files

import { CityMuslimCommunityData } from '../muslim-community-data';

// Import US Cities
import { usTier1CitiesData } from './us-tier1-cities';
import { usTier2CitiesData } from './us-tier2-cities';
import { usTier3CitiesData } from './us-tier3-cities';

// Import UK Cities
import { ukCitiesData } from './uk-cities';

// Import European Cities
import { franceCitiesData } from './france-cities';
import { germanyCitiesData } from './germany-cities';
import { beneluxNordicCitiesData } from './benelux-nordic-cities';
import { southernEuropeCitiesData } from './southern-europe-cities';
import { centralEasternEuropeCitiesData } from './central-eastern-europe-cities';

// Aggregate all city data into a single record
export const allCityData: Record<string, CityMuslimCommunityData> = {
  // US Tier 1 Cities (15)
  ...usTier1CitiesData,

  // US Tier 2 Cities (20)
  ...usTier2CitiesData,

  // US Tier 3 Cities (15)
  ...usTier3CitiesData,

  // UK Cities (10)
  ...ukCitiesData,

  // France Cities (8)
  ...franceCitiesData,

  // Germany Cities (8)
  ...germanyCitiesData,

  // Benelux & Nordic Cities (9)
  ...beneluxNordicCitiesData,

  // Southern Europe Cities (6)
  ...southernEuropeCitiesData,

  // Central & Eastern Europe Cities (9)
  ...centralEasternEuropeCitiesData,
};

// Helper function to get city data by slug
export function getCityData(citySlug: string): CityMuslimCommunityData | undefined {
  return allCityData[citySlug];
}

// Helper function to get all cities in a country
export function getCitiesByCountry(country: string): CityMuslimCommunityData[] {
  return Object.values(allCityData).filter(city => city.country === country);
}

// Helper function to get cities sorted by Muslim population
export function getCitiesByMuslimPopulation(): CityMuslimCommunityData[] {
  return Object.values(allCityData).sort(
    (a, b) => b.muslimPopulation.estimate - a.muslimPopulation.estimate
  );
}

// Helper function to search cities
export function searchCities(query: string): CityMuslimCommunityData[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(allCityData).filter(
    city =>
      city.cityName.toLowerCase().includes(lowerQuery) ||
      city.country.toLowerCase().includes(lowerQuery)
  );
}

// Statistics
export const cityStats = {
  totalCities: Object.keys(allCityData).length,
  usCities: Object.values(allCityData).filter(c => c.country === 'USA').length,
  ukCities: Object.values(allCityData).filter(c => c.country === 'United Kingdom').length,
  europeanCities: Object.values(allCityData).filter(
    c => !['USA', 'United Kingdom'].includes(c.country)
  ).length,

  // Get total Muslim population covered
  get totalMuslimPopulation() {
    return Object.values(allCityData).reduce(
      (sum, city) => sum + city.muslimPopulation.estimate,
      0
    );
  },

  // Get total mosques
  get totalMosques() {
    return Object.values(allCityData).reduce(
      (sum, city) => sum + city.mosques.totalCount,
      0
    );
  },

  // Get total halal restaurants
  get totalHalalRestaurants() {
    return Object.values(allCityData).reduce(
      (sum, city) => sum + city.halalFood.restaurantCount,
      0
    );
  },
};

// Re-export individual city data files for direct imports
export { usTier1CitiesData } from './us-tier1-cities';
export { usTier2CitiesData } from './us-tier2-cities';
export { usTier3CitiesData } from './us-tier3-cities';
export { ukCitiesData } from './uk-cities';
export { franceCitiesData } from './france-cities';
export { germanyCitiesData } from './germany-cities';
export { beneluxNordicCitiesData } from './benelux-nordic-cities';
export { southernEuropeCitiesData } from './southern-europe-cities';
export { centralEasternEuropeCitiesData } from './central-eastern-europe-cities';

export default allCityData;
