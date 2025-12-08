"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, MapPin, TrendingUp, Clock, X, ArrowRight } from "lucide-react"
import { City } from "@/types/city"

interface SearchAutocompleteProps {
  onSearch?: (query: string) => void
  placeholder?: string
  className?: string
  showTrending?: boolean
}

// Popular searches for quick access
const TRENDING_SEARCHES = [
  "Istanbul",
  "Dubai",
  "Kuala Lumpur",
  "Jakarta",
  "Cairo",
  "Marrakech",
  "London",
  "Singapore"
]

export function SearchAutocomplete({
  onSearch,
  placeholder = "Search cities, countries, or features...",
  className = "",
  showTrending = true
}: SearchAutocompleteProps) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [cities, setCities] = useState<City[]>([])
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)

  // Load cities on mount
  useEffect(() => {
    fetchCities()
    loadRecentSearches()
  }, [])

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const fetchCities = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/cities?limit=1500')
      const data = await response.json()
      setCities(data.cities || [])
    } catch (error) {
      console.error('Error fetching cities:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadRecentSearches = () => {
    try {
      const stored = localStorage.getItem('halalcities_recent_searches')
      if (stored) {
        setRecentSearches(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading recent searches:', error)
    }
  }

  const saveRecentSearch = (search: string) => {
    try {
      const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('halalcities_recent_searches', JSON.stringify(updated))
    } catch (error) {
      console.error('Error saving recent search:', error)
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('halalcities_recent_searches')
  }

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      return
    }

    const q = query.toLowerCase()
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(q) ||
      city.country.toLowerCase().includes(q) ||
      city.slug.includes(q)
    ).slice(0, 8)

    setSuggestions(filtered)
    setSelectedIndex(-1)
  }, [query, cities])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsOpen(true)
  }

  const handleCitySelect = useCallback((city: City) => {
    saveRecentSearch(city.name)
    setQuery("")
    setIsOpen(false)
    router.push(`/city/${city.slug}`)
  }, [router])

  const handleSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery)
      onSearch?.(searchQuery)
      setIsOpen(false)
    }
  }, [onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      handleCitySelect(suggestions[selectedIndex])
    } else {
      handleSearch(query)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, -1))
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleTrendingClick = (search: string) => {
    setQuery(search)
    const city = cities.find(c => c.name.toLowerCase() === search.toLowerCase())
    if (city) {
      handleCitySelect(city)
    } else {
      handleSearch(search)
    }
  }

  const showDropdown = isOpen && (
    query.length >= 2 ||
    (query.length === 0 && (recentSearches.length > 0 || showTrending))
  )

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[var(--foreground-muted)]">
          <Search className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-12 pr-32 py-4 text-lg bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              inputRef.current?.focus()
            }}
            className="absolute right-24 top-1/2 -translate-y-1/2 p-1.5 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-xl transition-colors flex items-center gap-2"
        >
          Explore
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
          {/* Search results */}
          {suggestions.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                Cities
              </div>
              {suggestions.map((city, index) => (
                <button
                  key={city.slug}
                  onClick={() => handleCitySelect(city)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                    index === selectedIndex
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "hover:bg-[var(--background-secondary)]"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={city.primaryImage}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[var(--foreground)]">
                      {highlightMatch(city.name, query)}
                    </div>
                    <div className="text-sm text-[var(--foreground-secondary)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {highlightMatch(city.country, query)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full font-medium">
                      {city.scores.halal}% Halal
                    </span>
                    <div className="flex items-center gap-1 text-[var(--foreground-secondary)]">
                      <TrendingUp className="w-3 h-3" />
                      {city.scores.overall}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {query.length >= 2 && suggestions.length === 0 && !isLoading && (
            <div className="p-6 text-center">
              <div className="text-4xl mb-2">🔍</div>
              <p className="text-[var(--foreground-secondary)]">
                No cities found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                Try a different search term
              </p>
            </div>
          )}

          {/* Recent searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div className="p-2 border-b border-[var(--border)]">
              <div className="px-3 py-1.5 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  Recent Searches
                </span>
                <button
                  onClick={clearRecentSearches}
                  className="text-[var(--foreground-muted)] hover:text-red-500 transition-colors"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-2 px-3 py-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrendingClick(search)}
                    className="px-3 py-1.5 bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 text-[var(--foreground)] text-sm rounded-full transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trending searches */}
          {query.length === 0 && showTrending && (
            <div className="p-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" />
                Trending Cities
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-3 py-2">
                {TRENDING_SEARCHES.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrendingClick(search)}
                    className="px-3 py-2 bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 text-[var(--foreground)] text-sm rounded-lg transition-colors text-left flex items-center gap-2"
                  >
                    <span className="text-lg">🌍</span>
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[var(--primary)] mx-auto" />
              <p className="text-sm text-[var(--foreground-muted)] mt-2">Loading cities...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Helper function to highlight matching text
function highlightMatch(text: string, query: string) {
  if (!query || query.length < 2) return text

  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="bg-[var(--primary)]/20 text-[var(--primary)] font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}

function escapeRegex(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default SearchAutocomplete
