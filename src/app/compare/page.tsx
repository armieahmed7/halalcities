"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, X, Check, Search } from "lucide-react"
import { City } from "@/types/city"

interface ComparisonCategory {
  name: string
  icon: string
  metrics: {
    label: string
    key: string
    format: (city: City) => string | number
    higherIsBetter?: boolean
  }[]
}

const COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    name: "Muslim-Friendly",
    icon: "🕌",
    metrics: [
      { label: "Halal Score", key: "halal", format: (c) => `${c.scores.halal}%`, higherIsBetter: true },
      { label: "Muslim Population", key: "muslimPop", format: (c) => `${c.scores.muslimPopulationPercent}%`, higherIsBetter: true },
      { label: "Mosques", key: "mosques", format: (c) => c.stats.mosques.toLocaleString(), higherIsBetter: true },
      { label: "Halal Restaurants", key: "restaurants", format: (c) => c.stats.halalRestaurants.toLocaleString(), higherIsBetter: true },
      { label: "Airport Prayer Room", key: "airport", format: (c) => c.features.airportPrayerRoom ? "Yes" : "No" },
      { label: "Islamic Banks", key: "banks", format: (c) => c.features.islamicBanks ? "Yes" : "No" },
      { label: "Islamic Schools", key: "schools", format: (c) => c.features.islamicSchools.toString(), higherIsBetter: true },
    ]
  },
  {
    name: "Cost of Living",
    icon: "💰",
    metrics: [
      { label: "Cost Score", key: "cost", format: (c) => `${c.scores.cost}%`, higherIsBetter: true },
      { label: "Monthly Budget", key: "budget", format: (c) => `$${c.stats.monthlyBudget.toLocaleString()}`, higherIsBetter: false },
    ]
  },
  {
    name: "Quality of Life",
    icon: "🏡",
    metrics: [
      { label: "Overall Score", key: "overall", format: (c) => `${c.scores.overall}%`, higherIsBetter: true },
      { label: "Safety Score", key: "safety", format: (c) => `${c.scores.safety}%`, higherIsBetter: true },
      { label: "Internet Speed", key: "internet", format: (c) => `${c.stats.internetSpeed} Mbps`, higherIsBetter: true },
      { label: "Community Score", key: "community", format: (c) => `${c.scores.community}%`, higherIsBetter: true },
    ]
  },
  {
    name: "Discrimination",
    icon: "🛡️",
    metrics: [
      { label: "Hijab Tolerance", key: "hijab", format: (c) => c.extended?.discrimination?.hijab ? `${10 - c.extended.discrimination.hijab}/10` : "N/A", higherIsBetter: true },
      { label: "Niqab Tolerance", key: "niqab", format: (c) => c.extended?.discrimination?.niqab ? `${10 - c.extended.discrimination.niqab}/10` : "N/A", higherIsBetter: true },
      { label: "Islamophobia", key: "islamophobia", format: (c) => c.extended?.discrimination?.islamophobia ? `${10 - c.extended.discrimination.islamophobia}/10` : "N/A", higherIsBetter: true },
    ]
  }
]

function ComparePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [allCities, setAllCities] = useState<City[]>([])
  const [selectedCities, setSelectedCities] = useState<City[]>([])
  const [showCitySelector, setShowCitySelector] = useState(false)
  const [selectorSlot, setSelectorSlot] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  // Fetch all cities
  useEffect(() => {
    fetchCities()
  }, [])

  // Parse URL params for initial cities
  useEffect(() => {
    if (allCities.length === 0) return

    const citySlugs = searchParams.get('cities')?.split(',') || []
    const initialCities = citySlugs
      .map(slug => allCities.find(c => c.slug === slug))
      .filter((c): c is City => c !== undefined)
      .slice(0, 3)

    setSelectedCities(initialCities)
  }, [searchParams, allCities])

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities?limit=1500')
      const data = await response.json()
      setAllCities(data.cities || [])
    } catch (error) {
      console.error('Error fetching cities:', error)
    } finally {
      setLoading(false)
    }
  }

  // Update URL when cities change
  useEffect(() => {
    if (selectedCities.length > 0) {
      const slugs = selectedCities.map(c => c.slug).join(',')
      router.replace(`/compare?cities=${slugs}`, { scroll: false })
    }
  }, [selectedCities, router])

  const handleAddCity = (slot: number) => {
    setSelectorSlot(slot)
    setShowCitySelector(true)
    setSearchQuery("")
  }

  const handleSelectCity = (city: City) => {
    const newCities = [...selectedCities]
    newCities[selectorSlot] = city
    setSelectedCities(newCities)
    setShowCitySelector(false)
  }

  const handleRemoveCity = (index: number) => {
    const newCities = selectedCities.filter((_, i) => i !== index)
    setSelectedCities(newCities)
  }

  const filteredCities = allCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.country.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 20)

  // Determine best value for each metric
  const getBestValue = (metric: ComparisonCategory['metrics'][0]): number | null => {
    if (selectedCities.length < 2) return null

    const values = selectedCities.map((city, index) => {
      const value = metric.format(city)
      if (typeof value === 'string') {
        if (value === 'Yes') return { index, numValue: 1 }
        if (value === 'No') return { index, numValue: 0 }
        if (value === 'N/A') return { index, numValue: -999 }
        const num = parseFloat(value.replace(/[^0-9.-]/g, ''))
        return { index, numValue: isNaN(num) ? 0 : num }
      }
      return { index, numValue: value as number }
    })

    const validValues = values.filter(v => v.numValue !== -999)
    if (validValues.length < 2) return null

    if (metric.higherIsBetter === false) {
      return validValues.reduce((min, v) => v.numValue < min.numValue ? v : min).index
    }
    return validValues.reduce((max, v) => v.numValue > max.numValue ? v : max).index
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="container py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cities
          </Link>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">Compare Cities</h1>
          <p className="text-[var(--foreground-secondary)] mt-2">
            Compare up to 3 Muslim-friendly cities side by side
          </p>
        </div>
      </div>

      {/* City Selection */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[0, 1, 2].map((slot) => (
            <div
              key={slot}
              className={`rounded-xl border-2 border-dashed transition-colors ${
                selectedCities[slot]
                  ? 'border-[var(--border)] bg-[var(--card)]'
                  : 'border-[var(--border)] hover:border-[var(--primary)] cursor-pointer'
              }`}
            >
              {selectedCities[slot] ? (
                <div className="p-4">
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedCities[slot].primaryImage}
                      alt={selectedCities[slot].name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => handleRemoveCity(slot)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-[var(--foreground)]">{selectedCities[slot].name}</h3>
                    <p className="text-sm text-[var(--foreground-secondary)]">{selectedCities[slot].country}</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                        {selectedCities[slot].scores.halal}% Halal
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleAddCity(slot)}
                  className="w-full h-64 flex flex-col items-center justify-center gap-3 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                  <span>Add City {slot + 1}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedCities.length >= 2 && (
          <div className="space-y-6">
            {COMPARISON_CATEGORIES.map((category) => (
              <div key={category.name} className="bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden">
                <div className="px-6 py-4 border-b border-[var(--border)] bg-[var(--background-secondary)]">
                  <h3 className="font-semibold text-[var(--foreground)] flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.name}
                  </h3>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {category.metrics.map((metric) => {
                    const bestIndex = getBestValue(metric)
                    return (
                      <div key={metric.key} className="grid grid-cols-4 items-center">
                        <div className="px-6 py-4 text-sm text-[var(--foreground-secondary)]">
                          {metric.label}
                        </div>
                        {selectedCities.map((city, index) => {
                          const value = metric.format(city)
                          const isBest = bestIndex === index
                          return (
                            <div
                              key={city.slug}
                              className={`px-6 py-4 text-center ${
                                isBest ? 'bg-green-50 dark:bg-green-900/20' : ''
                              }`}
                            >
                              <span className={`font-medium ${
                                isBest ? 'text-green-600 dark:text-green-400' : 'text-[var(--foreground)]'
                              }`}>
                                {value}
                              </span>
                              {isBest && (
                                <Check className="w-4 h-4 text-green-500 inline-block ml-1" />
                              )}
                            </div>
                          )
                        })}
                        {/* Empty cells for missing cities */}
                        {[...Array(3 - selectedCities.length)].map((_, i) => (
                          <div key={i} className="px-6 py-4 text-center text-[var(--foreground-muted)]">
                            -
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCities.length < 2 && (
          <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-[var(--border)]">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Select at least 2 cities to compare
            </h2>
            <p className="text-[var(--foreground-secondary)]">
              Click the + buttons above to add cities
            </p>
          </div>
        )}
      </div>

      {/* City Selector Modal */}
      {showCitySelector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCitySelector(false)}
          />
          <div className="relative bg-[var(--card)] rounded-xl shadow-xl w-full max-w-lg mx-4 max-h-[80vh] flex flex-col">
            <div className="p-4 border-b border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Select a City</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cities..."
                  className="w-full pl-10 pr-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  autoFocus
                />
              </div>
            </div>
            <div className="overflow-y-auto flex-1">
              {filteredCities.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => handleSelectCity(city)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-[var(--background-secondary)] transition-colors text-left border-b border-[var(--border)] last:border-b-0"
                  disabled={selectedCities.some(c => c.slug === city.slug)}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={city.primaryImage}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[var(--foreground)]">{city.name}</div>
                    <div className="text-sm text-[var(--foreground-secondary)]">{city.country}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[var(--primary)]">{city.scores.halal}%</span>
                    {selectedCities.some(c => c.slug === city.slug) && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default function ComparePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]" />
      </div>
    }>
      <ComparePageContent />
    </Suspense>
  )
}
