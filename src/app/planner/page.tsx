"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Plus,
  X,
  Calendar,
  MapPin,
  Clock,
  Plane,
  DollarSign,
  Download,
  Share2,
  ChevronUp,
  ChevronDown,
  Trash2,
  Search
} from "lucide-react"
import { City } from "@/types/city"
import { Button } from "@/components/ui/button"

interface ItineraryCity {
  city: City
  days: number
  notes: string
  order: number
}

const STORAGE_KEY = "halalcities_travel_planner"

export default function TravelPlannerPage() {
  const router = useRouter()
  const [allCities, setAllCities] = useState<City[]>([])
  const [itinerary, setItinerary] = useState<ItineraryCity[]>([])
  const [showCitySelector, setShowCitySelector] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [tripName, setTripName] = useState("My Muslim-Friendly Trip")
  const [startDate, setStartDate] = useState("")

  // Load data on mount
  useEffect(() => {
    fetchCities()
    loadItinerary()
  }, [])

  // Save itinerary when it changes
  useEffect(() => {
    if (!loading) {
      saveItinerary()
    }
  }, [itinerary, tripName, startDate, loading])

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

  const loadItinerary = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        setItinerary(data.itinerary || [])
        setTripName(data.tripName || "My Muslim-Friendly Trip")
        setStartDate(data.startDate || "")
      }
    } catch (error) {
      console.error('Error loading itinerary:', error)
    }
  }

  const saveItinerary = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        itinerary,
        tripName,
        startDate
      }))
    } catch (error) {
      console.error('Error saving itinerary:', error)
    }
  }

  const handleAddCity = (city: City) => {
    if (itinerary.some(item => item.city.slug === city.slug)) {
      return // Already in itinerary
    }

    setItinerary(prev => [
      ...prev,
      {
        city,
        days: 3,
        notes: "",
        order: prev.length
      }
    ])
    setShowCitySelector(false)
    setSearchQuery("")
  }

  const handleRemoveCity = (index: number) => {
    setItinerary(prev => prev.filter((_, i) => i !== index).map((item, i) => ({ ...item, order: i })))
  }

  const handleMoveCity = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === itinerary.length - 1)
    ) {
      return
    }

    const newItinerary = [...itinerary]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    const temp = newItinerary[index]
    newItinerary[index] = newItinerary[targetIndex]
    newItinerary[targetIndex] = temp

    // Update order values
    newItinerary.forEach((item, i) => item.order = i)
    setItinerary(newItinerary)
  }

  const handleUpdateDays = (index: number, days: number) => {
    setItinerary(prev => prev.map((item, i) =>
      i === index ? { ...item, days: Math.max(1, days) } : item
    ))
  }

  const handleUpdateNotes = (index: number, notes: string) => {
    setItinerary(prev => prev.map((item, i) =>
      i === index ? { ...item, notes } : item
    ))
  }

  const handleClearItinerary = () => {
    if (confirm('Are you sure you want to clear your entire itinerary?')) {
      setItinerary([])
      setTripName("My Muslim-Friendly Trip")
      setStartDate("")
    }
  }

  const filteredCities = allCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.country.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 20)

  // Calculate trip stats
  const tripStats = useMemo(() => {
    const totalDays = itinerary.reduce((sum, item) => sum + item.days, 0)
    const totalBudget = itinerary.reduce((sum, item) =>
      sum + (item.city.stats.monthlyBudget / 30 * item.days), 0
    )
    const avgHalalScore = itinerary.length > 0
      ? itinerary.reduce((sum, item) => sum + item.city.scores.halal, 0) / itinerary.length
      : 0
    const countries = new Set(itinerary.map(item => item.city.country)).size

    return { totalDays, totalBudget, avgHalalScore, countries }
  }, [itinerary])

  // Calculate dates for each city
  const cityDates = useMemo(() => {
    if (!startDate) return []

    const result: { dates: { start: Date; end: Date }[]; currentDay: number } = itinerary.reduce(
      (acc, item) => {
        const start = new Date(startDate)
        start.setDate(start.getDate() + acc.currentDay)
        const end = new Date(startDate)
        end.setDate(end.getDate() + acc.currentDay + item.days - 1)
        acc.dates.push({ start, end })
        acc.currentDay += item.days
        return acc
      },
      { dates: [] as { start: Date; end: Date }[], currentDay: 0 }
    )

    return result.dates
  }, [itinerary, startDate])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const handleExport = () => {
    let text = `${tripName}\n`
    text += `${'='.repeat(tripName.length)}\n\n`

    if (startDate) {
      text += `Start Date: ${new Date(startDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}\n\n`
    }

    text += `Total Duration: ${tripStats.totalDays} days\n`
    text += `Estimated Budget: $${Math.round(tripStats.totalBudget).toLocaleString()}\n`
    text += `Countries: ${tripStats.countries}\n`
    text += `Average Halal Score: ${Math.round(tripStats.avgHalalScore)}%\n\n`
    text += `Itinerary:\n${'-'.repeat(40)}\n\n`

    itinerary.forEach((item, index) => {
      text += `${index + 1}. ${item.city.name}, ${item.city.country}\n`
      if (cityDates[index]) {
        text += `   Dates: ${formatDate(cityDates[index].start)} - ${formatDate(cityDates[index].end)}\n`
      }
      text += `   Duration: ${item.days} days\n`
      text += `   Halal Score: ${item.city.scores.halal}%\n`
      text += `   Mosques: ${item.city.stats.mosques.toLocaleString()}\n`
      text += `   Halal Restaurants: ${item.city.stats.halalRestaurants.toLocaleString()}\n`
      if (item.notes) {
        text += `   Notes: ${item.notes}\n`
      }
      text += '\n'
    })

    text += `\nGenerated with HalalCities - https://halalcities.netlify.app\n`

    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${tripName.replace(/\s+/g, '_')}_itinerary.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    const text = `Check out my Muslim-friendly trip: ${tripName}\n\nDestinations:\n${
      itinerary.map((item, i) => `${i + 1}. ${item.city.name}, ${item.city.country} (${item.days} days)`).join('\n')
    }\n\nTotal: ${tripStats.totalDays} days across ${tripStats.countries} countries\n\nPlan your trip at https://halalcities.netlify.app/planner`

    if (navigator.share) {
      try {
        await navigator.share({
          title: tripName,
          text: text,
          url: 'https://halalcities.netlify.app/planner'
        })
      } catch {
        navigator.clipboard.writeText(text)
        alert('Copied to clipboard!')
      }
    } else {
      navigator.clipboard.writeText(text)
      alert('Copied to clipboard!')
    }
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

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="text-3xl font-bold text-[var(--foreground)] bg-transparent border-none outline-none w-full"
                placeholder="Name your trip..."
              />
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                  <Calendar className="w-4 h-4" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{itinerary.length} destinations</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{tripStats.totalDays} days</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                disabled={itinerary.length === 0}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                disabled={itinerary.length === 0}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Itinerary List */}
          <div className="lg:col-span-2 space-y-4">
            {itinerary.length === 0 ? (
              <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-[var(--border)]">
                <div className="text-6xl mb-4">✈️</div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  Start Planning Your Trip
                </h2>
                <p className="text-[var(--foreground-secondary)] mb-6">
                  Add Muslim-friendly cities to build your perfect itinerary
                </p>
                <Button onClick={() => setShowCitySelector(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add First Destination
                </Button>
              </div>
            ) : (
              <>
                {itinerary.map((item, index) => (
                  <div
                    key={item.city.slug}
                    className="bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden"
                  >
                    <div className="flex">
                      {/* City Image */}
                      <div className="relative w-32 h-auto flex-shrink-0">
                        <Image
                          src={item.city.primaryImage}
                          alt={item.city.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                        <div className="absolute top-2 left-2 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <Link
                              href={`/city/${item.city.slug}`}
                              className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                            >
                              {item.city.name}
                            </Link>
                            <p className="text-sm text-[var(--foreground-secondary)]">
                              {item.city.country}
                            </p>
                            {cityDates[index] && (
                              <p className="text-xs text-[var(--foreground-muted)] mt-1">
                                {formatDate(cityDates[index].start)} - {formatDate(cityDates[index].end)}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleMoveCity(index, 'up')}
                              disabled={index === 0}
                              className="p-1.5 text-[var(--foreground-muted)] hover:text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <ChevronUp className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleMoveCity(index, 'down')}
                              disabled={index === itinerary.length - 1}
                              className="p-1.5 text-[var(--foreground-muted)] hover:text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleRemoveCity(index)}
                              className="p-1.5 text-[var(--foreground-muted)] hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-2">
                            <label className="text-xs text-[var(--foreground-muted)]">Days:</label>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleUpdateDays(index, item.days - 1)}
                                disabled={item.days <= 1}
                                className="w-6 h-6 rounded bg-[var(--background-secondary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white disabled:opacity-30 transition-colors text-sm"
                              >
                                -
                              </button>
                              <span className="w-8 text-center font-medium text-[var(--foreground)]">
                                {item.days}
                              </span>
                              <button
                                onClick={() => handleUpdateDays(index, item.days + 1)}
                                className="w-6 h-6 rounded bg-[var(--background-secondary)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white transition-colors text-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-[var(--foreground-secondary)]">
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                              {item.city.scores.halal}% Halal
                            </span>
                            <span>🕌 {item.city.stats.mosques}</span>
                            <span>🍖 {item.city.stats.halalRestaurants}</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <input
                            type="text"
                            value={item.notes}
                            onChange={(e) => handleUpdateNotes(index, e.target.value)}
                            placeholder="Add notes (e.g., Visit Blue Mosque, Try local halal food...)"
                            className="w-full px-3 py-2 text-sm bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add City Button */}
                <button
                  onClick={() => setShowCitySelector(true)}
                  className="w-full py-4 border-2 border-dashed border-[var(--border)] rounded-xl text-[var(--foreground-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Destination
                </button>
              </>
            )}
          </div>

          {/* Sidebar - Trip Summary */}
          <div className="space-y-4">
            {/* Trip Stats */}
            <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6">
              <h3 className="font-semibold text-[var(--foreground)] mb-4">Trip Summary</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Total Duration</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">{tripStats.totalDays} days</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Est. Budget</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">
                    ${Math.round(tripStats.totalBudget).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Countries</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">{tripStats.countries}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--foreground-secondary)]">
                    <span className="text-sm">🕌</span>
                    <span className="text-sm">Avg Halal Score</span>
                  </div>
                  <span className="font-semibold text-green-600">{Math.round(tripStats.avgHalalScore)}%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {itinerary.length > 0 && (
              <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] p-6">
                <h3 className="font-semibold text-[var(--foreground)] mb-4">Quick Actions</h3>

                <div className="space-y-2">
                  <Link
                    href={`/compare?cities=${itinerary.slice(0, 3).map(i => i.city.slug).join(',')}`}
                    className="w-full py-2 px-3 bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 rounded-lg text-sm text-[var(--foreground)] flex items-center gap-2 transition-colors"
                  >
                    <Plane className="w-4 h-4 text-[var(--primary)]" />
                    Compare Destinations
                  </Link>

                  <button
                    onClick={handleClearItinerary}
                    className="w-full py-2 px-3 bg-[var(--background-secondary)] hover:bg-red-500/10 rounded-lg text-sm text-[var(--foreground)] hover:text-red-500 flex items-center gap-2 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Itinerary
                  </button>
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 rounded-xl border border-[var(--primary)]/20 p-6">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">💡 Planning Tips</h3>
              <ul className="text-sm text-[var(--foreground-secondary)] space-y-2">
                <li>• Check prayer times for each city on your trip</li>
                <li>• Research halal food options before arriving</li>
                <li>• Note mosque locations near your accommodations</li>
                <li>• Consider Ramadan dates when planning</li>
                <li>• Look for Muslim-friendly neighborhoods</li>
              </ul>
            </div>
          </div>
        </div>
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
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Add Destination</h3>
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
              {filteredCities.map((city) => {
                const isInItinerary = itinerary.some(item => item.city.slug === city.slug)
                return (
                  <button
                    key={city.slug}
                    onClick={() => !isInItinerary && handleAddCity(city)}
                    className={`w-full flex items-center gap-4 p-4 text-left border-b border-[var(--border)] last:border-b-0 transition-colors ${
                      isInItinerary
                        ? 'opacity-50 cursor-not-allowed bg-[var(--background-secondary)]'
                        : 'hover:bg-[var(--background-secondary)]'
                    }`}
                    disabled={isInItinerary}
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
                      {isInItinerary && (
                        <span className="text-xs text-[var(--foreground-muted)]">Added</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
