"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import dynamic from 'next/dynamic'
import Image from "next/image"

// Components
import { HeroSection } from "@/components/home/hero-section"
import { FilterBar, ViewMode, SortOption } from "@/components/home/filter-bar"
import { FilterDrawer, FilterState, defaultFilters } from "@/components/home/filter-drawer"
import { CityCard } from "@/components/city/city-card"
import { Button } from "@/components/ui/button"
import { City } from "@/types/city"

// Dynamic imports for map (avoid SSR issues)
const CityMap = dynamic(
  () => import("@/components/map/city-map-leaflet").then((mod) => mod.CityMapLeaflet),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] bg-[var(--background-secondary)] rounded-xl flex items-center justify-center">
        <div className="text-[var(--foreground-muted)]">Loading map...</div>
      </div>
    )
  }
)

export default function HomePage() {
  const router = useRouter()

  // State
  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('overall')
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(12)
  const [favorites, setFavorites] = useState<string[]>([])

  // Fetch cities
  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities')

      if (!response.ok) {
        throw new Error('Failed to fetch cities')
      }

      const data = await response.json()

      if (data && Array.isArray(data.cities)) {
        setCities(data.cities)
      } else {
        setCities([])
      }
    } catch (error) {
      console.error('Error fetching cities:', error)
      setCities([])
    } finally {
      setLoading(false)
    }
  }

  // Get active filter labels
  const activeFilterLabels = useMemo(() => {
    const labels: string[] = []

    if (filters.halalScore[0] > 0 || filters.halalScore[1] < 100) {
      labels.push(`Halal ${filters.halalScore[0]}-${filters.halalScore[1]}`)
    }
    if (filters.mosqueDensity.length > 0) {
      labels.push(...filters.mosqueDensity)
    }
    if (filters.muslimPopulation.length > 0) {
      labels.push(...filters.muslimPopulation)
    }
    if (filters.airportPrayerRoom === true) labels.push('Airport Prayer')
    if (filters.islamicBanks === true) labels.push('Islamic Banks')
    if (filters.budget[0] > 0 || filters.budget[1] < 5000) {
      labels.push(`$${filters.budget[0]}-$${filters.budget[1]}`)
    }
    if (filters.safety.length > 0) {
      labels.push(...filters.safety)
    }
    if (filters.continent.length > 0) {
      labels.push(...filters.continent)
    }
    if (filters.familyFriendly === true) labels.push('Family Friendly')
    if (filters.womenFriendly === true) labels.push('Women Friendly')

    return labels
  }, [filters])

  // Filter and sort cities
  const filteredAndSortedCities = useMemo(() => {
    let result = [...cities]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(city =>
        city.name.toLowerCase().includes(query) ||
        city.country.toLowerCase().includes(query)
      )
    }

    // Apply filters
    // Halal score
    result = result.filter(city =>
      city.scores.halal >= filters.halalScore[0] &&
      city.scores.halal <= filters.halalScore[1]
    )

    // Budget
    result = result.filter(city =>
      city.stats.monthlyBudget >= filters.budget[0] &&
      city.stats.monthlyBudget <= filters.budget[1]
    )

    // Muslim population
    if (filters.muslimPopulation.length > 0 && !filters.muslimPopulation.includes('Any')) {
      result = result.filter(city => {
        const percent = city.scores.muslimPopulationPercent
        if (filters.muslimPopulation.includes('Majority (50%+)') && percent >= 50) return true
        if (filters.muslimPopulation.includes('Significant (20%+)') && percent >= 20) return true
        if (filters.muslimPopulation.includes('Minority (5%+)') && percent >= 5) return true
        return false
      })
    }

    // Safety
    if (filters.safety.length > 0 && !filters.safety.includes('Any')) {
      result = result.filter(city => {
        const score = city.scores.safety
        if (filters.safety.includes('Very Safe (90+)') && score >= 90) return true
        if (filters.safety.includes('Safe (70+)') && score >= 70) return true
        if (filters.safety.includes('Moderate (50+)') && score >= 50) return true
        return false
      })
    }

    // Airport prayer room
    if (filters.airportPrayerRoom === true) {
      result = result.filter(city => city.features.airportPrayerRoom)
    } else if (filters.airportPrayerRoom === false) {
      result = result.filter(city => !city.features.airportPrayerRoom)
    }

    // Islamic banks
    if (filters.islamicBanks === true) {
      result = result.filter(city => city.features.islamicBanks)
    } else if (filters.islamicBanks === false) {
      result = result.filter(city => !city.features.islamicBanks)
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'overall':
          return b.scores.overall - a.scores.overall
        case 'halal':
          return b.scores.halal - a.scores.halal
        case 'cost':
          return a.stats.monthlyBudget - b.stats.monthlyBudget
        case 'safety':
          return b.scores.safety - a.scores.safety
        case 'muslim':
          return b.scores.muslimPopulationPercent - a.scores.muslimPopulationPercent
        case 'internet':
          return b.stats.internetSpeed - a.stats.internetSpeed
        default:
          return 0
      }
    })

    return result
  }, [cities, searchQuery, filters, sortBy])

  // Handlers
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setVisibleCount(12)
  }

  const handleCityClick = (city: City) => {
    router.push(`/city/${city.slug}`)
  }

  const handleFavorite = (cityId: string) => {
    setFavorites(prev =>
      prev.includes(cityId)
        ? prev.filter(id => id !== cityId)
        : [...prev, cityId]
    )
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  const handleClearFilters = () => {
    setFilters(defaultFilters)
    setSearchQuery("")
  }

  const handleResetFilters = () => {
    setFilters(defaultFilters)
  }

  const visibleCities = filteredAndSortedCities.slice(0, visibleCount)
  const hasMore = visibleCount < filteredAndSortedCities.length

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <HeroSection
        onSearch={handleSearch}
        totalCities={cities.length || 500}
        totalMosques={cities.reduce((acc, c) => acc + c.stats.mosques, 0) || 10000}
        totalRestaurants={cities.reduce((acc, c) => acc + c.stats.halalRestaurants, 0) || 50000}
      />

      {/* Filter Bar */}
      <FilterBar
        totalResults={filteredAndSortedCities.length}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        sortBy={sortBy}
        onSortChange={setSortBy}
        activeFilters={activeFilterLabels}
        onClearFilters={handleClearFilters}
        onOpenFilterDrawer={() => setIsFilterDrawerOpen(true)}
      />

      {/* Main Content */}
      <section className="container py-8">
        {loading ? (
          // Loading State
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <div className="h-48 skeleton" />
                <div className="p-4 space-y-3 bg-[var(--card)] border border-[var(--border)] border-t-0 rounded-b-2xl">
                  <div className="h-4 w-2/3 skeleton" />
                  <div className="h-3 w-1/2 skeleton" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 skeleton" />
                    <div className="h-10 skeleton" />
                    <div className="h-10 skeleton" />
                    <div className="h-10 skeleton" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : cities.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🕌</div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
              No cities available
            </h2>
            <p className="text-[var(--foreground-secondary)] mb-6">
              We&apos;re working on adding more Muslim-friendly cities.
              Check back soon!
            </p>
            <Button onClick={fetchCities}>
              Refresh
            </Button>
          </div>
        ) : filteredAndSortedCities.length === 0 ? (
          // No Results
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
              No cities match your filters
            </h2>
            <p className="text-[var(--foreground-secondary)] mb-6">
              Try adjusting your filters or search query
            </p>
            <Button onClick={handleClearFilters}>
              Clear All Filters
            </Button>
          </div>
        ) : viewMode === 'grid' ? (
          // Grid View
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleCities.map((city, index) => (
                <div
                  key={city.slug}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CityCard
                    city={city}
                    onFavorite={handleFavorite}
                    isFavorited={favorites.includes(city.slug)}
                  />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLoadMore}
                  className="px-8"
                >
                  Load More Cities
                  <span className="ml-2 text-[var(--foreground-muted)]">
                    ({filteredAndSortedCities.length - visibleCount} remaining)
                  </span>
                </Button>
              </div>
            )}
          </>
        ) : viewMode === 'map' ? (
          // Map View
          <div className="h-[600px] rounded-xl overflow-hidden border border-[var(--border)]">
            <CityMap
              cities={filteredAndSortedCities}
              onCityClick={handleCityClick}
            />
          </div>
        ) : (
          // Table View
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--foreground)]">City</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Country</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Overall</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Halal</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Safety</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Muslim %</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Cost/mo</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-[var(--foreground)]">Internet</th>
                </tr>
              </thead>
              <tbody>
                {visibleCities.map((city) => (
                  <tr
                    key={city.slug}
                    className="border-b border-[var(--border)] hover:bg-[var(--background-secondary)] cursor-pointer transition-colors"
                    onClick={() => handleCityClick(city)}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                          <Image
                            src={city.primaryImage}
                            alt={city.name}
                            fill
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <span className="font-medium text-[var(--foreground)]">{city.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--foreground-secondary)]">{city.country}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                        city.scores.overall >= 85 ? 'bg-green-100 text-green-700' :
                        city.scores.overall >= 70 ? 'bg-lime-100 text-lime-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {city.scores.overall}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-[var(--foreground)]">{city.scores.halal}</td>
                    <td className="py-3 px-4 text-center text-[var(--foreground)]">{city.scores.safety}</td>
                    <td className="py-3 px-4 text-center text-[var(--foreground)]">{city.scores.muslimPopulationPercent}%</td>
                    <td className="py-3 px-4 text-right text-[var(--foreground)]">${city.stats.monthlyBudget.toLocaleString()}</td>
                    <td className="py-3 px-4 text-center text-[var(--foreground)]">{city.stats.internetSpeed} Mbps</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {hasMore && (
              <div className="text-center mt-8">
                <Button variant="outline" onClick={handleLoadMore}>
                  Load More
                </Button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Category Pills */}
      <section className="container pb-16">
        <div className="border-t border-[var(--border)] pt-8">
          <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4 text-center">
            Popular Categories
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="filter-chip">📊 Top Ranked</button>
            <button className="filter-chip">🕌 Most Mosques</button>
            <button className="filter-chip">🍖 Best Halal Food</button>
            <button className="filter-chip">👨‍👩‍👧‍👦 Family Friendly</button>
            <button className="filter-chip">💼 Business Hubs</button>
            <button className="filter-chip">🏖️ Beach Cities</button>
            <button className="filter-chip">🏔️ Mountain Retreats</button>
            <button className="filter-chip">💰 Budget Friendly</button>
            <button className="filter-chip">📶 Fast Internet</button>
            <button className="filter-chip">🛡️ Very Safe</button>
          </div>
        </div>
      </section>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
        onApply={() => setVisibleCount(12)}
        onReset={handleResetFilters}
      />
    </main>
  )
}
