"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { CityCard } from "@/components/city/city-card"
import { CityMap } from "@/components/map/city-map"
import { Button } from "@/components/ui/button"
import { Search, Map, Grid3x3 } from "lucide-react"
import { City } from "@/types/city"

export default function HomePage() {
  const router = useRouter()
  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')
  const [filters, setFilters] = useState({
    safe: true,
    halalFood: true,
    mosques: true,
    community: true,
    budget: "all"
  })
  const [sortBy, setSortBy] = useState("halal")

  // Fetch cities from API
  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities')
      const data = await response.json()
      
      if (!response.ok) {
        console.error('API Error:', data)
        throw new Error(data.error || 'Failed to fetch cities')
      }
      
      console.log('Fetched data:', data)
      setCities(data.cities || [])
      
      if (data.usingMockData) {
        console.log('Using mock data')
      }
    } catch (error) {
      console.error('Error fetching cities:', error)
      setCities([])
    } finally {
      setLoading(false)
    }
  }

  // Filter cities based on search and filters
  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         city.country.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesBudget = filters.budget === "all" || 
                         (filters.budget === "1k" && city.stats.monthlyBudget < 1000) ||
                         (filters.budget === "2k" && city.stats.monthlyBudget < 2000) ||
                         (filters.budget === "3k" && city.stats.monthlyBudget < 3000)
    
    return matchesSearch && matchesBudget
  })

  // Sort cities
  const sortedCities = [...filteredCities].sort((a, b) => {
    switch (sortBy) {
      case 'halal':
        return b.scores.halal - a.scores.halal
      case 'cost':
        return a.stats.monthlyBudget - b.stats.monthlyBudget
      case 'muslim':
        return b.scores.muslimPopulationPercent - a.scores.muslimPopulationPercent
      case 'safety':
        return b.scores.safety - a.scores.safety
      default:
        return 0
    }
  })

  const handleCityClick = (city: City) => {
    router.push(`/city/${city.slug}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          🕌 Find your perfect Muslim-friendly city
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover cities with halal food, mosques, and welcoming Muslim communities
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.safe}
              onChange={(e) => setFilters({...filters, safe: e.target.checked})}
              className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-sm">✅ Safe</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.halalFood}
              onChange={(e) => setFilters({...filters, halalFood: e.target.checked})}
              className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-sm">🍖 Halal Food</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.mosques}
              onChange={(e) => setFilters({...filters, mosques: e.target.checked})}
              className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-sm">🕌 Mosques</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.community}
              onChange={(e) => setFilters({...filters, community: e.target.checked})}
              className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <span className="text-sm">👥 Community</span>
          </label>
          
          <div className="border-l pl-3 ml-3">
            <select
              value={filters.budget}
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
              className="px-3 py-1 border border-gray-300 rounded text-sm"
            >
              <option value="all">Any budget</option>
              <option value="1k">&lt; $1k/mo</option>
              <option value="2k">&lt; $2k/mo</option>
              <option value="3k">&lt; $3k/mo</option>
            </select>
          </div>
        </div>

        {/* View Toggle and Sort Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing {sortedCities.length} cities
            </div>
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="gap-2"
              >
                <Grid3x3 className="h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="gap-2"
              >
                <Map className="h-4 w-4" />
                Map
              </Button>
            </div>
          </div>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="halal">Sort by: Halal Score ↓</option>
            <option value="cost">Sort by: Cost ↑</option>
            <option value="muslim">Sort by: Muslim Population ↓</option>
            <option value="safety">Sort by: Safety ↓</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          <p className="mt-4 text-gray-600">Loading cities...</p>
        </div>
      ) : cities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No cities available at the moment.</p>
          <p className="text-sm text-gray-500">Please check your connection or try refreshing the page.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <>
          {/* City Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedCities.slice(0, 18).map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>

          {/* Load More */}
          {sortedCities.length > 18 && (
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Cities
              </Button>
            </div>
          )}
        </>
      ) : (
        /* Map View */
        <div className="h-[600px] mb-12">
          <CityMap 
            cities={sortedCities} 
            onCityClick={handleCityClick}
          />
        </div>
      )}

      {/* Category Pills */}
      <div className="mt-16 border-t pt-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" size="sm">📊 Top Ranked</Button>
          <Button variant="outline" size="sm">🕌 Most Mosques</Button>
          <Button variant="outline" size="sm">🍖 Best Halal Food</Button>
          <Button variant="outline" size="sm">👨‍👩‍👧‍👦 Family Friendly</Button>
          <Button variant="outline" size="sm">💼 Business Hubs</Button>
          <Button variant="outline" size="sm">🏖️ Vacation</Button>
        </div>
      </div>
    </div>
  )
}