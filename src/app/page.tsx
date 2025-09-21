"use client"

import { useState } from "react"
import { CityCard } from "@/components/city/city-card"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { Search } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    safe: true,
    halalFood: true,
    mosques: true,
    community: true,
    budget: "all"
  })

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

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Showing {filteredCities.length} cities
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded text-sm">
            <option>Sort by: Halal Score ↓</option>
            <option>Sort by: Cost ↑</option>
            <option>Sort by: Muslim Population ↓</option>
            <option>Sort by: Safety ↓</option>
          </select>
        </div>
      </div>

      {/* City Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredCities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Cities
        </Button>
      </div>

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
