// Utility to get detailed research data for a city
import { CityMuslimCommunityData } from '../muslim-community-data';
import { allCityData } from './index';

/**
 * Get detailed Muslim community research data for a city by slug
 * Returns undefined if no research data exists for the city
 */
export function getCityResearch(citySlug: string): CityMuslimCommunityData | undefined {
  return allCityData[citySlug];
}

/**
 * Check if detailed research data exists for a city
 */
export function hasResearchData(citySlug: string): boolean {
  return citySlug in allCityData;
}

/**
 * Get all city slugs that have research data
 */
export function getResearchedCitySlugs(): string[] {
  return Object.keys(allCityData);
}

/**
 * Get research data for multiple cities
 */
export function getCitiesResearch(citySlugs: string[]): Record<string, CityMuslimCommunityData> {
  const result: Record<string, CityMuslimCommunityData> = {};
  for (const slug of citySlugs) {
    const data = allCityData[slug];
    if (data) {
      result[slug] = data;
    }
  }
  return result;
}

export { allCityData };
