// Comprehensive City Type for Halal Cities
// Based on CSV template with 100+ fields

export interface MuslimArea {
  name: string
  googleMapsUrl?: string
  description?: string
}

export interface DiscriminationScores {
  hijab: number // 1-10, lower is better (less discrimination)
  niqab: number // 1-10, includes info if banned
  niqabBanned: boolean
  racism: number // 1-10, World Values Survey
  islamophobia: number // 1-10
}

export interface HalalScores {
  overall: number // Main halal score 0-100
  prayerAccessibility: number // 1-10 based on mosques per sq ft
  foodPrevalence: number // 1-10 based on restaurants per sq ft
}

export interface MuslimDemographics {
  percentage: string // e.g., "6-7% of population"
  population: string // e.g., "1.2M Muslims"
  majorEthnicities: string[] // e.g., ["Bangladeshi", "Pakistani"]
  areas: MuslimArea[] // Major Muslim neighborhoods
}

export interface Airport {
  hasPrayerRoom: boolean
  prayerRoomDetails?: string // e.g., "Terminal 4 at JFK"
}

export interface HotelInfo {
  withHalalBreakfast: string[] // Hotel names
  withBidet: string[] // Hotel names
  withHalalOptions: string[] // Hotels with 5+ halal restaurants and mosque within 1km
}

export interface IslamicFinance {
  banks: string[] // Bank names
  insurance: string[] // Insurance company names
}

export interface FoodAndDining {
  numberOfRestaurants: string // e.g., "1000+"
  halalMeatShops: string // e.g., "100+"
  favouriteRestaurants: string[]
  featuredRestaurants: string[]
  tripAdvisorUrl?: string
}

export interface ReligiousInfrastructure {
  numberOfMosques: string // e.g., "285+"
  mosquesForJumah: string[] // Major mosques
  qiblahDirection: string // e.g., "58 degrees from North"
  salahTimings?: string // Description
  fastingHours?: string // e.g., "4am-8pm (Summer)"
  localOrganizations: string[]
  numberOfIslamicSchools: string
  islamicSchoolNames: string[]
}

export interface Tourism {
  internationalArrivals: string // e.g., "10.5M+"
  muslimVisitorArrivals: string // e.g., "1M+"
  mainAttractions: string[]
  bestShoppingAreas: string[]
  fleaMarkets: string[]
  famousParks: string[]
}

export interface DigitalNomadInfo {
  internetSpeed: number // Mbps
  freeWifiAvailability: number // 1-10
  placesToWorkFrom: string[]
  bestCoworkingSpace?: string
  bestCoffeePlace?: string
  bestTaxiApp?: string
}

export interface CostOfLivingDetails {
  monthlyBudgetExpat?: number
  monthlyBudgetFamily?: number
  monthlyBudgetLocal?: number
  studioRentCenter?: number
  coworkingDaily?: number
  hotelNight?: number
  hostelNight?: number
  dinnerCost?: number
  cocaCola?: number
  coffee?: number
  petrolPerLiter?: number
}

export interface QualityOfLife {
  safety: number // 1-10
  airQuality: number // 1-10
  healthcare: number // 1-10
  happiness: number // 1-10
  walkability: number // 1-10
  peace: number // 1-10
  trafficSafety: number // 1-10
  friendlyToForeigners: number // 1-10
  englishSpeaking: number // 1-10
  freedomOfSpeech: number // 1-10
  racialTolerance: number // 1-10
  femaleFriendly: number // 1-10
  acOrHeating?: boolean
}

export interface PracticalInfo {
  language: string
  region: string
  country: string
  timezone?: string
  atmWithdrawalLimit?: string
  tippingCustom?: string
  cashlessSociety: number // 1-10
  safeTapWater: boolean
  requiredVaccines?: string[]
  freeEducation?: boolean
  freeHealthcare?: boolean
  bestTimeToVisit?: string
}

export interface Travel {
  averageTripDuration?: string
  powerOutletType?: string
  bestLongHaulCarrier?: string
  bestShortHaulCarrier?: string
  bestHospital?: string
  onlineElectronicsShop?: string
  apartmentListings?: string
}

export interface PrayerTimes {
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

export interface Coordinates {
  lat: number
  lng: number
}

// Extended City Information from CSV
export interface ExtendedCityInfo {
  demographics: MuslimDemographics
  discrimination: DiscriminationScores
  airport: Airport
  hotels: HotelInfo
  islamicFinance: IslamicFinance
  foodAndDining: FoodAndDining
  religiousInfrastructure: ReligiousInfrastructure
  tourism: Tourism
  digitalNomad: DigitalNomadInfo
  costOfLiving: CostOfLivingDetails
  qualityOfLife: QualityOfLife
  practicalInfo: PracticalInfo
  travel: Travel
  prayerTimes?: PrayerTimes
  expert?: string // Local expert/contributor
}

// Main City Interface
export interface City {
  // Basic Info
  id?: string // Optional ID, defaults to slug
  slug: string
  name: string
  country: string
  region?: string
  primaryImage: string
  coordinates: Coordinates
  population?: string

  // Scores (displayed in sidebar)
  scores: {
    halal: number // Main halal score 0-100
    muslimPopulationPercent: number
    food: number
    community: number
    cost: number
    internet: number
    safety: number
    overall: number
  }

  // Stats (existing structure preserved)
  stats: {
    muslimPopulation: number
    mosques: number
    halalRestaurants: number
    monthlyBudget: number
    internetSpeed: number
  }

  // Features (existing structure preserved)
  features: {
    airportPrayerRoom: boolean
    halalHotels: number
    islamicBanks: boolean
    islamicSchools: number
  }

  // Prayer times (optional)
  prayerTimes?: PrayerTimes

  // NEW: Extended Information from CSV
  extended?: ExtendedCityInfo
}

// Restaurant with coordinates for map display
export interface Restaurant {
  id: string
  name: string
  cuisine: string
  neighborhood: string
  address: string
  coordinates?: Coordinates
  rating: number
  reviews: number
  priceLevel: number // 1-4
  certifications: string[]
  features: string[]
  images: string[]
  phone?: string
  website?: string
  openingHours?: string
}

// Mosque with full details for map display
export interface Mosque {
  id: string
  name: string
  address: string
  coordinates: Coordinates
  capacity: number
  features: {
    womensSection: boolean
    parking: boolean
    wheelchairAccess: boolean
    ablutionFacilities: boolean
    classes: boolean
  }
  languages: string[]
  jummahTime: string
  phone?: string
  website?: string
  images?: string[]
}

// For map display
export interface MapLocation {
  id: string
  name: string
  type: 'mosque' | 'restaurant' | 'halal-shop' | 'islamic-school'
  coordinates: Coordinates
  address: string
  details?: Record<string, unknown>
}

// Helper type for city data from CSV
export type CitySlug = string
