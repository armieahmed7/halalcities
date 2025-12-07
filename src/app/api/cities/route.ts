import { NextResponse } from "next/server"
import { cities } from "@/data/cities"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get query parameters
    const search = searchParams.get("search")?.toLowerCase()
    const minHalal = searchParams.get("minHalal")
    const maxBudget = searchParams.get("maxBudget")
    const limit = parseInt(searchParams.get("limit") || "200") // Default to 200 to get all cities
    const offset = parseInt(searchParams.get("offset") || "0")

    // Start with all cities
    let filteredCities = [...cities]

    // Apply search filter
    if (search) {
      filteredCities = filteredCities.filter(city =>
        city.name.toLowerCase().includes(search) ||
        city.country.toLowerCase().includes(search)
      )
    }

    // Apply halal score filter
    if (minHalal) {
      const minHalalScore = parseInt(minHalal)
      filteredCities = filteredCities.filter(city => city.scores.halal >= minHalalScore)
    }

    // Apply budget filter
    if (maxBudget) {
      const maxBudgetNum = parseInt(maxBudget)
      filteredCities = filteredCities.filter(city => city.stats.monthlyBudget <= maxBudgetNum)
    }

    // Sort by overall score (descending)
    filteredCities.sort((a, b) => b.scores.overall - a.scores.overall)

    // Get total count before pagination
    const total = filteredCities.length

    // Apply pagination
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
    return NextResponse.json(
      { error: 'Failed to fetch cities', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
