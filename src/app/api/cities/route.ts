import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get query parameters
    const search = searchParams.get("search")
    const minHalal = searchParams.get("minHalal")
    const maxBudget = searchParams.get("maxBudget")
    const limit = parseInt(searchParams.get("limit") || "20")
    const offset = parseInt(searchParams.get("offset") || "0")
    
    // Build where clause
    const where: Prisma.CityWhereInput = {}
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    if (minHalal) {
      where.halalScore = { gte: parseInt(minHalal) }
    }
    
    if (maxBudget) {
      where.monthlyBudget = { lte: parseInt(maxBudget) }
    }
    
    // Get total count for pagination
    const total = await prisma.city.count({ where })
    
    // Get cities with pagination
    const cities = await prisma.city.findMany({
      where,
      orderBy: { halalScore: 'desc' },
      take: limit,
      skip: offset,
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
    
    // If no cities found in database, return empty array
    if (cities.length === 0) {
      console.log('No cities found in database')
      return NextResponse.json({
        cities: [],
        total: 0,
        limit,
        offset,
        hasMore: false
      })
    }
    
    // Transform data to match our frontend format
    const transformedCities = cities.map(city => ({
      id: city.id,
      slug: city.slug,
      name: city.name,
      country: city.country,
      primaryImage: city.primaryImage,
      coordinates: {
        lat: city.lat,
        lng: city.lng
      },
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
    
    return NextResponse.json({
      cities: transformedCities,
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    })
  } catch (error) {
    console.error('Error fetching cities:', error)
    return NextResponse.json(
      { error: 'Failed to fetch cities', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}