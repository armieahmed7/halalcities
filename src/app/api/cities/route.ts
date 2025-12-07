import { NextResponse } from "next/server"

// Mock data for initial display when database is not configured
const mockCities = [
  {
    id: "istanbul",
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
    id: "dubai",
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
    id: "kuala-lumpur",
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
    id: "london",
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
    id: "cairo",
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
    id: "jakarta",
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
    id: "toronto",
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
    id: "singapore",
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
    id: "doha",
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
    id: "marrakech",
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
    id: "medina",
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
    id: "mecca",
    slug: "mecca",
    name: "Mecca",
    country: "Saudi Arabia",
    primaryImage: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800",
    coordinates: { lat: 21.3891, lng: 39.8579 },
    scores: { halal: 100, muslimPopulationPercent: 100, food: 88, community: 99, cost: 60, internet: 78, safety: 90, overall: 95 },
    stats: { muslimPopulation: 2000000, mosques: 1000, halalRestaurants: 15000, monthlyBudget: 2000, internetSpeed: 50 },
    features: { airportPrayerRoom: true, halalHotels: 600, islamicBanks: true, islamicSchools: 200 }
  }
]

// Try to use database if available, otherwise use mock data
async function getCitiesFromDatabase() {
  try {
    // Dynamic import to avoid build errors if DATABASE_URL is not set
    const { default: prisma } = await import("@/lib/prisma")
    const cities = await prisma.city.findMany({
      orderBy: { halalScore: 'desc' },
      take: 50,
      include: {
        _count: {
          select: {
            restaurants: true,
            mosques: true,
            reviews: true
          }
        }
      }
    })

    if (cities.length === 0) {
      return null // No data, use mock
    }

    return cities.map(city => ({
      id: city.id,
      slug: city.slug,
      name: city.name,
      country: city.country,
      primaryImage: city.primaryImage,
      coordinates: { lat: city.lat, lng: city.lng },
      scores: {
        halal: city.halalScore,
        muslimPopulationPercent: city.muslimPopulationPercent,
        food: city.foodScore,
        community: city.communityScore,
        cost: city.costScore,
        internet: city.internetScore,
        safety: city.safetyScore,
        overall: city.overallScore
      },
      stats: {
        muslimPopulation: city.muslimPopulation,
        mosques: city.mosquesCount,
        halalRestaurants: city.halalRestaurants,
        monthlyBudget: city.monthlyBudget,
        internetSpeed: city.internetSpeed
      },
      features: {
        airportPrayerRoom: city.airportPrayerRoom,
        halalHotels: city.halalHotels,
        islamicBanks: city.islamicBanks,
        islamicSchools: city.islamicSchools
      }
    }))
  } catch (error) {
    console.log('Database not available, using mock data:', error instanceof Error ? error.message : 'Unknown error')
    return null
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get query parameters
    const search = searchParams.get("search")
    const minHalal = searchParams.get("minHalal")
    const maxBudget = searchParams.get("maxBudget")
    const limit = parseInt(searchParams.get("limit") || "50")
    const offset = parseInt(searchParams.get("offset") || "0")

    // Try database first, fall back to mock data
    let cities = await getCitiesFromDatabase()

    if (!cities) {
      console.log('Using mock city data')
      cities = mockCities
    }

    // Apply filters to the data
    let filteredCities = [...cities]

    if (search) {
      const query = search.toLowerCase()
      filteredCities = filteredCities.filter(city =>
        city.name.toLowerCase().includes(query) ||
        city.country.toLowerCase().includes(query)
      )
    }

    if (minHalal) {
      filteredCities = filteredCities.filter(city => city.scores.halal >= parseInt(minHalal))
    }

    if (maxBudget) {
      filteredCities = filteredCities.filter(city => city.stats.monthlyBudget <= parseInt(maxBudget))
    }

    // Apply pagination
    const total = filteredCities.length
    const paginatedCities = filteredCities.slice(offset, offset + limit)

    return NextResponse.json({
      cities: paginatedCities,
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    })
  } catch (error) {
    console.error('Error fetching cities:', error)
    // Even on error, return mock data so the site works
    return NextResponse.json({
      cities: mockCities,
      total: mockCities.length,
      limit: 50,
      offset: 0,
      hasMore: false
    })
  }
}
