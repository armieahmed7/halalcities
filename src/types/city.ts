export interface City {
  id: string
  slug: string
  name: string
  country: string
  primaryImage: string
  coordinates: {
    lat: number
    lng: number
  }
  scores: {
    halal: number
    muslimPopulationPercent: number
    food: number
    community: number
    cost: number
    internet: number
    safety: number
    overall: number
  }
  stats: {
    muslimPopulation: number
    mosques: number
    halalRestaurants: number
    monthlyBudget: number
    internetSpeed: number
  }
  prayerTimes?: {
    fajr: string
    dhuhr: string
    asr: string
    maghrib: string
    isha: string
  }
  features: {
    airportPrayerRoom: boolean
    halalHotels: number
    islamicBanks: boolean
    islamicSchools: number
  }
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  neighborhood: string
  address: string
  rating: number
  reviews: number
  priceLevel: number // 1-4 ($ to $$$$)
  certifications: string[]
  features: string[]
  images: string[]
}

export interface Mosque {
  id: string
  name: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
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
}