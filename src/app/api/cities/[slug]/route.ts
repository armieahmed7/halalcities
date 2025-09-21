import { NextResponse } from "next/server"
import { cities } from "@/data/cities"
import { restaurantsByCity } from "@/data/restaurants"
import { mosquesByCity } from "@/data/mosques"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)
  
  if (!city) {
    return NextResponse.json(
      { error: "City not found" },
      { status: 404 }
    )
  }
  
  // Enrich city data with additional information
  const enrichedCity = {
    ...city,
    restaurants: {
      count: restaurantsByCity[city.slug]?.length || 0,
      featured: restaurantsByCity[city.slug]?.slice(0, 3) || []
    },
    mosques: {
      count: mosquesByCity[city.slug]?.length || 0,
      featured: mosquesByCity[city.slug]?.slice(0, 3) || []
    },
    community: {
      memberCount: Math.floor(Math.random() * 5000 + 1000),
      onlineNow: Math.floor(Math.random() * 500 + 100),
      nextMeetup: {
        title: "Jummah Prayer & Lunch",
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        attendees: Math.floor(Math.random() * 50 + 10)
      }
    }
  }
  
  return NextResponse.json(enrichedCity)
}