// Muslim Community Data for Top 100 US & European Cities
// This data enhances city pages with detailed Muslim community information

// Import types and utilities from city research
import { allCityData, getCityData, getCitiesByCountry, getCitiesByMuslimPopulation, searchCities, cityStats } from './city-research';

export interface MosqueInfo {
  name: string;
  address: string;
  type: 'masjid' | 'islamic-center' | 'musalla' | 'converted';
  size: 'small' | 'medium' | 'large' | 'mega';
  ethnicFocus?: string;
  languages: string[];
  hasWomensSection: boolean;
  jummahTimes?: string[];
  website?: string;
  established?: number;
  features?: string[];
}

export interface RestaurantRecommendation {
  name: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  neighborhood: string;
  specialty?: string;
  rating?: number;
  halalCertified: boolean;
}

export interface NeighborhoodInfo {
  name: string;
  muslimPopulation: 'high' | 'medium' | 'low';
  dominantEthnicities: string[];
  mosqueCount: number;
  halalRestaurantCount: number;
  description: string;
  safetyRating: number; // 1-10
  affordability: 'affordable' | 'moderate' | 'expensive';
  publicTransport: 'excellent' | 'good' | 'limited';
}

export interface IslamicSchoolInfo {
  name: string;
  grades: string;
  type: 'full-time' | 'weekend' | 'hifz' | 'arabic';
  accredited: boolean;
  website?: string;
}

export interface AirportPrayerInfo {
  airportCode: string;
  hasPrayerRoom: boolean;
  location?: string;
  is24Hours: boolean;
  hasWuduFacility: boolean;
  halalFoodOptions?: string[];
}

export interface CityMuslimCommunityData {
  citySlug: string;
  cityName: string;
  country: string;
  lastUpdated: string;

  // Population & Demographics
  muslimPopulation: {
    estimate: number;
    percentage: number;
    yearEstimate: number;
    source: string;
    trend: 'growing' | 'stable' | 'declining';
  };

  ethnicBreakdown: {
    group: string;
    percentage: number;
    countries: string[];
  }[];

  // Mosques & Prayer
  mosques: {
    totalCount: number;
    majorMosques: MosqueInfo[];
    jummahInfo: string;
    eidLocations: string[];
    qiblaDirection: number; // degrees from North
  };

  // Halal Food
  halalFood: {
    restaurantCount: number;
    topRestaurants: RestaurantRecommendation[];
    halalGroceryStores: string[];
    halalNeighborhoods: string[];
    bestCuisines: string[];
    foodDeliveryApps: string[];
  };

  // Neighborhoods
  muslimNeighborhoods: NeighborhoodInfo[];

  // Education
  islamicEducation: {
    fullTimeSchools: IslamicSchoolInfo[];
    weekendPrograms: string[];
    hifzPrograms: string[];
    universitiesWithMSA: string[];
  };

  // Travel Info
  travelInfo: {
    airport: AirportPrayerInfo;
    recommendedHotels: string[];
    touristMosques: string[];
    muslimTourOperators?: string[];
  };

  // Community Resources
  communityResources: {
    islamicCenters: string[];
    advocacyOrgs: string[];
    charities: string[];
    socialGroups: string[];
    converts: string[];
  };

  // Safety & Acceptance
  safetyInfo: {
    overallSafety: number; // 1-10
    hijabAcceptance: number; // 1-10
    niqabAcceptance: number; // 1-10
    beardAcceptance: number; // 1-10
    islamophobiaLevel: 'low' | 'moderate' | 'high';
    recentIncidents?: string;
    legalProtections: string[];
  };

  // Islamic Services
  islamicServices: {
    hasIslamicBanking: boolean;
    islamicBanks?: string[];
    muslimDoctors: boolean;
    halalCatering: string[];
    muslimFuneralServices: string[];
    muslimCemeteries?: string[];
  };

  // Prayer Times Info
  prayerTimesInfo: {
    fajrRange: string; // e.g., "4:30 AM (summer) - 6:45 AM (winter)"
    ramadanFastingHours: string; // e.g., "14-18 hours"
    calculationMethod: string;
  };

  // Unique Features
  uniqueFeatures: string[];

  // Tips for Visitors
  visitorTips: string[];

  // Tips for Expats
  expatTips: string[];
}

// Export the populated city data from research
export const muslimCommunityData: Record<string, CityMuslimCommunityData> = allCityData;

// Helper function to get city data by slug
export function getCityMuslimData(citySlug: string): CityMuslimCommunityData | undefined {
  return muslimCommunityData[citySlug];
}

// Re-export city research utilities for convenience
export { getCityData, getCitiesByCountry, getCitiesByMuslimPopulation, searchCities, cityStats };

// US Tier 1 Cities (15 major cities)
export const US_TIER1_CITIES = [
  'new-york',
  'los-angeles',
  'chicago',
  'houston',
  'detroit', // includes Dearborn
  'dallas',
  'philadelphia',
  'atlanta',
  'washington-dc',
  'san-francisco',
  'boston',
  'phoenix',
  'seattle',
  'minneapolis',
  'san-diego'
];

// US Tier 2 Cities (20 cities)
export const US_TIER2_CITIES = [
  'miami',
  'denver',
  'las-vegas',
  'orlando',
  'austin',
  'san-antonio',
  'portland',
  'charlotte',
  'nashville',
  'indianapolis',
  'columbus',
  'cleveland',
  'st-louis',
  'baltimore',
  'tampa',
  'raleigh',
  'kansas-city',
  'milwaukee',
  'sacramento',
  'pittsburgh'
];

// US Tier 3 Cities (15 cities)
export const US_TIER3_CITIES = [
  'new-orleans',
  'salt-lake-city',
  'honolulu',
  'albuquerque',
  'tucson',
  'oklahoma-city',
  'louisville',
  'memphis',
  'richmond',
  'hartford',
  'providence',
  'buffalo',
  'rochester',
  'cincinnati',
  'jacksonville'
];

// UK Cities (10)
export const UK_CITIES = [
  'london',
  'birmingham',
  'manchester',
  'bradford',
  'leeds',
  'leicester',
  'glasgow',
  'edinburgh',
  'liverpool',
  'cardiff'
];

// France Cities (8)
export const FRANCE_CITIES = [
  'paris',
  'marseille',
  'lyon',
  'toulouse',
  'nice',
  'strasbourg',
  'lille',
  'bordeaux'
];

// Germany Cities (8)
export const GERMANY_CITIES = [
  'berlin',
  'munich',
  'frankfurt',
  'hamburg',
  'cologne',
  'dusseldorf',
  'stuttgart',
  'dortmund'
];

// Other European Cities (24)
export const OTHER_EUROPE_CITIES = [
  'amsterdam',
  'rotterdam',
  'brussels',
  'antwerp',
  'stockholm',
  'malmo',
  'copenhagen',
  'oslo',
  'helsinki',
  'madrid',
  'barcelona',
  'rome',
  'milan',
  'lisbon',
  'athens',
  'vienna',
  'zurich',
  'istanbul',
  'warsaw',
  'prague',
  'budapest',
  'sarajevo',
  'dublin',
  'moscow'
];

// All cities combined
export const ALL_TOP_CITIES = [
  ...US_TIER1_CITIES,
  ...US_TIER2_CITIES,
  ...US_TIER3_CITIES,
  ...UK_CITIES,
  ...FRANCE_CITIES,
  ...GERMANY_CITIES,
  ...OTHER_EUROPE_CITIES
];
