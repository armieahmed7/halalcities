import { City } from "@/types/city"

export const cities: City[] = [
  {
    id: "1",
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    primaryImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    scores: {
      halal: 95,
      muslimPopulationPercent: 98,
      food: 92,
      community: 95,
      cost: 45,
      internet: 78,
      safety: 82,
      overall: 91
    },
    stats: {
      muslimPopulation: 15000000,
      mosques: 3500,
      halalRestaurants: 5000,
      monthlyBudget: 1245,
      internetSpeed: 45
    },
    prayerTimes: {
      fajr: "05:42",
      dhuhr: "13:08",
      asr: "16:29",
      maghrib: "19:42",
      isha: "21:05"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 250,
      islamicBanks: true,
      islamicSchools: 85
    }
  },
  {
    id: "2",
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    primaryImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    scores: {
      halal: 98,
      muslimPopulationPercent: 85,
      food: 95,
      community: 88,
      cost: 25,
      internet: 92,
      safety: 95,
      overall: 93
    },
    stats: {
      muslimPopulation: 2800000,
      mosques: 1200,
      halalRestaurants: 3500,
      monthlyBudget: 2890,
      internetSpeed: 95
    },
    prayerTimes: {
      fajr: "05:15",
      dhuhr: "12:25",
      asr: "15:45",
      maghrib: "18:10",
      isha: "19:25"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 400,
      islamicBanks: true,
      islamicSchools: 45
    }
  },
  {
    id: "3",
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    primaryImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    coordinates: { lat: 3.1390, lng: 101.6869 },
    scores: {
      halal: 96,
      muslimPopulationPercent: 65,
      food: 94,
      community: 90,
      cost: 55,
      internet: 85,
      safety: 88,
      overall: 90
    },
    stats: {
      muslimPopulation: 1100000,
      mosques: 850,
      halalRestaurants: 4000,
      monthlyBudget: 1450,
      internetSpeed: 75
    },
    prayerTimes: {
      fajr: "05:55",
      dhuhr: "13:15",
      asr: "16:35",
      maghrib: "19:25",
      isha: "20:35"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 180,
      islamicBanks: true,
      islamicSchools: 35
    }
  },
  {
    id: "4",
    slug: "london",
    name: "London",
    country: "United Kingdom",
    primaryImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    scores: {
      halal: 82,
      muslimPopulationPercent: 15,
      food: 85,
      community: 88,
      cost: 20,
      internet: 90,
      safety: 85,
      overall: 78
    },
    stats: {
      muslimPopulation: 1300000,
      mosques: 450,
      halalRestaurants: 2500,
      monthlyBudget: 3450,
      internetSpeed: 67
    },
    prayerTimes: {
      fajr: "04:45",
      dhuhr: "12:55",
      asr: "16:15",
      maghrib: "19:45",
      isha: "21:15"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 45,
      islamicBanks: true,
      islamicSchools: 25
    }
  },
  {
    id: "5",
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    primaryImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    scores: {
      halal: 85,
      muslimPopulationPercent: 8,
      food: 88,
      community: 85,
      cost: 30,
      internet: 88,
      safety: 92,
      overall: 81
    },
    stats: {
      muslimPopulation: 500000,
      mosques: 150,
      halalRestaurants: 1200,
      monthlyBudget: 2650,
      internetSpeed: 85
    },
    prayerTimes: {
      fajr: "05:30",
      dhuhr: "13:10",
      asr: "16:40",
      maghrib: "19:55",
      isha: "21:25"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 25,
      islamicBanks: true,
      islamicSchools: 18
    }
  },
  {
    id: "6",
    slug: "cairo",
    name: "Cairo",
    country: "Egypt",
    primaryImage: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    coordinates: { lat: 30.0444, lng: 31.2357 },
    scores: {
      halal: 99,
      muslimPopulationPercent: 95,
      food: 90,
      community: 95,
      cost: 75,
      internet: 65,
      safety: 70,
      overall: 85
    },
    stats: {
      muslimPopulation: 18000000,
      mosques: 5000,
      halalRestaurants: 8000,
      monthlyBudget: 750,
      internetSpeed: 25
    },
    prayerTimes: {
      fajr: "04:55",
      dhuhr: "11:55",
      asr: "15:15",
      maghrib: "17:45",
      isha: "19:05"
    },
    features: {
      airportPrayerRoom: true,
      halalHotels: 120,
      islamicBanks: true,
      islamicSchools: 200
    }
  }
]