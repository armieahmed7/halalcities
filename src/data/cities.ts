export const cities = [
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    primaryImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    scores: { halal: 98, muslimPopulationPercent: 98, food: 95, community: 92, cost: 75, internet: 85, safety: 78, overall: 92 },
    stats: { muslimPopulation: 15000000, mosques: 3000, halalRestaurants: 50000, monthlyBudget: 1200, internetSpeed: 45 },
    features: { airportPrayerRoom: true, halalHotels: 500, islamicBanks: true, islamicSchools: 200 }
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    primaryImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    scores: { halal: 99, muslimPopulationPercent: 76, food: 92, community: 88, cost: 45, internet: 95, safety: 95, overall: 90 },
    stats: { muslimPopulation: 2500000, mosques: 800, halalRestaurants: 15000, monthlyBudget: 3500, internetSpeed: 120 },
    features: { airportPrayerRoom: true, halalHotels: 300, islamicBanks: true, islamicSchools: 100 }
  },
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    primaryImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800",
    coordinates: { lat: 3.1390, lng: 101.6869 },
    scores: { halal: 97, muslimPopulationPercent: 61, food: 94, community: 90, cost: 80, internet: 88, safety: 82, overall: 89 },
    stats: { muslimPopulation: 1200000, mosques: 600, halalRestaurants: 20000, monthlyBudget: 1000, internetSpeed: 65 },
    features: { airportPrayerRoom: true, halalHotels: 200, islamicBanks: true, islamicSchools: 80 }
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    primaryImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    scores: { halal: 82, muslimPopulationPercent: 12, food: 88, community: 85, cost: 35, internet: 92, safety: 75, overall: 78 },
    stats: { muslimPopulation: 1100000, mosques: 450, halalRestaurants: 8000, monthlyBudget: 4200, internetSpeed: 85 },
    features: { airportPrayerRoom: true, halalHotels: 150, islamicBanks: true, islamicSchools: 60 }
  },
  {
    slug: "cairo",
    name: "Cairo",
    country: "Egypt",
    primaryImage: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
    coordinates: { lat: 30.0444, lng: 31.2357 },
    scores: { halal: 99, muslimPopulationPercent: 90, food: 90, community: 95, cost: 90, internet: 60, safety: 65, overall: 85 },
    stats: { muslimPopulation: 18000000, mosques: 4000, halalRestaurants: 30000, monthlyBudget: 600, internetSpeed: 25 },
    features: { airportPrayerRoom: true, halalHotels: 400, islamicBanks: true, islamicSchools: 300 }
  },
  {
    slug: "jakarta",
    name: "Jakarta",
    country: "Indonesia",
    primaryImage: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800",
    coordinates: { lat: -6.2088, lng: 106.8456 },
    scores: { halal: 96, muslimPopulationPercent: 85, food: 92, community: 88, cost: 85, internet: 70, safety: 68, overall: 84 },
    stats: { muslimPopulation: 8500000, mosques: 2500, halalRestaurants: 40000, monthlyBudget: 900, internetSpeed: 35 },
    features: { airportPrayerRoom: true, halalHotels: 350, islamicBanks: true, islamicSchools: 250 }
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    primaryImage: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    scores: { halal: 78, muslimPopulationPercent: 8, food: 82, community: 80, cost: 40, internet: 90, safety: 88, overall: 76 },
    stats: { muslimPopulation: 500000, mosques: 120, halalRestaurants: 3000, monthlyBudget: 3800, internetSpeed: 95 },
    features: { airportPrayerRoom: true, halalHotels: 80, islamicBanks: false, islamicSchools: 40 }
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    primaryImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    scores: { halal: 88, muslimPopulationPercent: 14, food: 90, community: 82, cost: 50, internet: 98, safety: 97, overall: 85 },
    stats: { muslimPopulation: 800000, mosques: 70, halalRestaurants: 5000, monthlyBudget: 3200, internetSpeed: 200 },
    features: { airportPrayerRoom: true, halalHotels: 100, islamicBanks: true, islamicSchools: 30 }
  },
  {
    slug: "doha",
    name: "Doha",
    country: "Qatar",
    primaryImage: "https://images.unsplash.com/photo-1548834925-e48f8a27ae24?w=800",
    coordinates: { lat: 25.2854, lng: 51.5310 },
    scores: { halal: 99, muslimPopulationPercent: 77, food: 88, community: 85, cost: 42, internet: 92, safety: 96, overall: 88 },
    stats: { muslimPopulation: 2000000, mosques: 400, halalRestaurants: 6000, monthlyBudget: 3800, internetSpeed: 110 },
    features: { airportPrayerRoom: true, halalHotels: 180, islamicBanks: true, islamicSchools: 50 }
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    primaryImage: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    scores: { halal: 99, muslimPopulationPercent: 99, food: 93, community: 90, cost: 88, internet: 55, safety: 75, overall: 86 },
    stats: { muslimPopulation: 950000, mosques: 200, halalRestaurants: 8000, monthlyBudget: 800, internetSpeed: 20 },
    features: { airportPrayerRoom: true, halalHotels: 250, islamicBanks: true, islamicSchools: 70 }
  },
  {
    slug: "medina",
    name: "Medina",
    country: "Saudi Arabia",
    primaryImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800",
    coordinates: { lat: 24.5247, lng: 39.5692 },
    scores: { halal: 100, muslimPopulationPercent: 100, food: 90, community: 98, cost: 65, internet: 80, safety: 92, overall: 94 },
    stats: { muslimPopulation: 1300000, mosques: 500, halalRestaurants: 12000, monthlyBudget: 1800, internetSpeed: 55 },
    features: { airportPrayerRoom: true, halalHotels: 400, islamicBanks: true, islamicSchools: 150 }
  },
  {
    slug: "mecca",
    name: "Mecca",
    country: "Saudi Arabia",
    primaryImage: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800",
    coordinates: { lat: 21.3891, lng: 39.8579 },
    scores: { halal: 100, muslimPopulationPercent: 100, food: 88, community: 99, cost: 60, internet: 78, safety: 90, overall: 95 },
    stats: { muslimPopulation: 2000000, mosques: 1000, halalRestaurants: 15000, monthlyBudget: 2000, internetSpeed: 50 },
    features: { airportPrayerRoom: true, halalHotels: 600, islamicBanks: true, islamicSchools: 200 }
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    country: "UAE",
    primaryImage: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800",
    coordinates: { lat: 24.4539, lng: 54.3773 },
    scores: { halal: 99, muslimPopulationPercent: 76, food: 90, community: 86, cost: 48, internet: 93, safety: 96, overall: 89 },
    stats: { muslimPopulation: 1800000, mosques: 600, halalRestaurants: 10000, monthlyBudget: 3200, internetSpeed: 115 },
    features: { airportPrayerRoom: true, halalHotels: 250, islamicBanks: true, islamicSchools: 80 }
  },
  {
    slug: "riyadh",
    name: "Riyadh",
    country: "Saudi Arabia",
    primaryImage: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800",
    coordinates: { lat: 24.7136, lng: 46.6753 },
    scores: { halal: 100, muslimPopulationPercent: 93, food: 87, community: 90, cost: 55, internet: 85, safety: 88, overall: 91 },
    stats: { muslimPopulation: 6500000, mosques: 1200, halalRestaurants: 18000, monthlyBudget: 2200, internetSpeed: 70 },
    features: { airportPrayerRoom: true, halalHotels: 350, islamicBanks: true, islamicSchools: 180 }
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    country: "Morocco",
    primaryImage: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800",
    coordinates: { lat: 33.5731, lng: -7.5898 },
    scores: { halal: 99, muslimPopulationPercent: 99, food: 91, community: 88, cost: 82, internet: 60, safety: 70, overall: 84 },
    stats: { muslimPopulation: 3500000, mosques: 350, halalRestaurants: 12000, monthlyBudget: 900, internetSpeed: 30 },
    features: { airportPrayerRoom: true, halalHotels: 180, islamicBanks: true, islamicSchools: 90 }
  },
  {
    slug: "amman",
    name: "Amman",
    country: "Jordan",
    primaryImage: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=800",
    coordinates: { lat: 31.9454, lng: 35.9284 },
    scores: { halal: 98, muslimPopulationPercent: 92, food: 89, community: 91, cost: 78, internet: 65, safety: 80, overall: 86 },
    stats: { muslimPopulation: 3800000, mosques: 450, halalRestaurants: 9000, monthlyBudget: 1100, internetSpeed: 35 },
    features: { airportPrayerRoom: true, halalHotels: 150, islamicBanks: true, islamicSchools: 100 }
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    primaryImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    scores: { halal: 72, muslimPopulationPercent: 10, food: 85, community: 75, cost: 32, internet: 88, safety: 70, overall: 70 },
    stats: { muslimPopulation: 1200000, mosques: 100, halalRestaurants: 4500, monthlyBudget: 4500, internetSpeed: 90 },
    features: { airportPrayerRoom: true, halalHotels: 60, islamicBanks: false, islamicSchools: 25 }
  },
  {
    slug: "new-york",
    name: "New York",
    country: "USA",
    primaryImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    scores: { halal: 75, muslimPopulationPercent: 9, food: 88, community: 82, cost: 28, internet: 92, safety: 72, overall: 74 },
    stats: { muslimPopulation: 800000, mosques: 270, halalRestaurants: 6000, monthlyBudget: 5000, internetSpeed: 100 },
    features: { airportPrayerRoom: true, halalHotels: 90, islamicBanks: false, islamicSchools: 35 }
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    primaryImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    scores: { halal: 70, muslimPopulationPercent: 5, food: 82, community: 68, cost: 88, internet: 78, safety: 72, overall: 74 },
    stats: { muslimPopulation: 600000, mosques: 180, halalRestaurants: 3500, monthlyBudget: 800, internetSpeed: 45 },
    features: { airportPrayerRoom: true, halalHotels: 80, islamicBanks: true, islamicSchools: 25 }
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    country: "India",
    primaryImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    scores: { halal: 82, muslimPopulationPercent: 21, food: 90, community: 85, cost: 85, internet: 65, safety: 62, overall: 78 },
    stats: { muslimPopulation: 4200000, mosques: 800, halalRestaurants: 15000, monthlyBudget: 700, internetSpeed: 40 },
    features: { airportPrayerRoom: true, halalHotels: 120, islamicBanks: false, islamicSchools: 80 }
  }
]
