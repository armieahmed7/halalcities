"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Trash2, GitCompare } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import { CityCard } from "@/components/city/city-card"
import { Button } from "@/components/ui/button"
import { City } from "@/types/city"

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites()
  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFavoriteCities()
  }, [favorites])

  const fetchFavoriteCities = async () => {
    if (favorites.length === 0) {
      setCities([])
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/cities?limit=1500')
      const data = await response.json()
      const favoriteCities = (data.cities || []).filter((city: City) =>
        favorites.includes(city.slug)
      )
      setCities(favoriteCities)
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setLoading(false)
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[var(--foreground)] flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                Saved Cities
              </h1>
              <p className="text-[var(--foreground-secondary)] mt-2">
                {favorites.length} {favorites.length === 1 ? 'city' : 'cities'} saved
              </p>
            </div>
            {cities.length > 0 && (
              <div className="flex items-center gap-3">
                {cities.length >= 2 && (
                  <Link
                    href={`/compare?cities=${cities.slice(0, 3).map(c => c.slug).join(',')}`}
                  >
                    <Button variant="outline" className="flex items-center gap-2">
                      <GitCompare className="w-4 h-4" />
                      Compare
                    </Button>
                  </Link>
                )}
                <Button
                  variant="outline"
                  onClick={clearFavorites}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        {cities.length === 0 ? (
          <div className="text-center py-16 bg-[var(--card)] rounded-xl border border-[var(--border)]">
            <Heart className="w-16 h-16 mx-auto text-[var(--foreground-muted)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              No saved cities yet
            </h2>
            <p className="text-[var(--foreground-secondary)] mb-6">
              Start exploring and save your favorite Muslim-friendly cities
            </p>
            <Link href="/">
              <Button>Explore Cities</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* City Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => (
                <CityCard
                  key={city.slug}
                  city={city}
                  isFavorited={true}
                />
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 bg-[var(--card)] rounded-xl border border-[var(--border)] p-6">
              <h3 className="font-semibold text-[var(--foreground)] mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href={`/compare?cities=${cities.slice(0, 3).map(c => c.slug).join(',')}`}
                  className="p-4 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 transition-colors flex items-center gap-3"
                >
                  <GitCompare className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <div className="font-medium text-[var(--foreground)]">Compare Cities</div>
                    <div className="text-sm text-[var(--foreground-secondary)]">Side by side comparison</div>
                  </div>
                </Link>
                <Link
                  href="/"
                  className="p-4 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 transition-colors flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[var(--foreground)]">Find More Cities</div>
                    <div className="text-sm text-[var(--foreground-secondary)]">Explore 1370+ cities</div>
                  </div>
                </Link>
                <div
                  className="p-4 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 transition-colors flex items-center gap-3 cursor-pointer"
                  onClick={() => {
                    const text = `Check out these Muslim-friendly cities on HalalCities:\n${cities.map(c => `- ${c.name}, ${c.country}`).join('\n')}`
                    navigator.clipboard.writeText(text)
                    alert('Copied to clipboard!')
                  }}
                >
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <div>
                    <div className="font-medium text-[var(--foreground)]">Share List</div>
                    <div className="text-sm text-[var(--foreground-secondary)]">Copy to clipboard</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
