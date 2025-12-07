"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Building2, Utensils, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onSearch?: (query: string) => void
  totalCities?: number
  totalMosques?: number
  totalRestaurants?: number
}

export function HeroSection({
  onSearch,
  totalCities = 500,
  totalMosques = 10000,
  totalRestaurants = 50000
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [animatedCities, setAnimatedCities] = useState(0)
  const [animatedMosques, setAnimatedMosques] = useState(0)
  const [animatedRestaurants, setAnimatedRestaurants] = useState(0)

  // Animate numbers on mount
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedCities(Math.floor(totalCities * easeOut))
      setAnimatedMosques(Math.floor(totalMosques * easeOut))
      setAnimatedRestaurants(Math.floor(totalRestaurants * easeOut))

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [totalCities, totalMosques, totalRestaurants])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/70 via-[var(--background)]/50 to-[var(--background)]" />
        <div className="absolute inset-0 bg-dots opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
          </span>
          Trusted by 50,000+ Muslim travelers worldwide
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--foreground)] animate-slide-up">
          Find your perfect{" "}
          <span className="gradient-text">Muslim-friendly</span>
          <br />
          city to live & travel
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in">
          Discover cities with halal food, mosques, and welcoming Muslim communities.
          Your ultimate guide to traveling and living as a Muslim worldwide.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12 animate-slide-up">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[var(--foreground-muted)]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cities, countries, or features..."
              className="w-full pl-12 pr-32 py-4 text-lg bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-xl"
            >
              Explore
            </Button>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          <button className="filter-chip">
            <span>🕌</span> Many Mosques
          </button>
          <button className="filter-chip">
            <span>🍖</span> Best Halal Food
          </button>
          <button className="filter-chip">
            <span>💰</span> Budget Friendly
          </button>
          <button className="filter-chip">
            <span>👨‍👩‍👧‍👦</span> Family Friendly
          </button>
          <button className="filter-chip">
            <span>🛡️</span> Very Safe
          </button>
          <button className="filter-chip">
            <span>📶</span> Fast Internet
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-[var(--foreground)]">
              <MapPin className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-3xl sm:text-4xl font-bold">{animatedCities.toLocaleString()}+</span>
            </div>
            <p className="text-sm text-[var(--foreground-secondary)] mt-1">Cities Covered</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-[var(--foreground)]">
              <Building2 className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-3xl sm:text-4xl font-bold">{animatedMosques.toLocaleString()}+</span>
            </div>
            <p className="text-sm text-[var(--foreground-secondary)] mt-1">Mosques Listed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-[var(--foreground)]">
              <Utensils className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-3xl sm:text-4xl font-bold">{animatedRestaurants.toLocaleString()}+</span>
            </div>
            <p className="text-sm text-[var(--foreground-secondary)] mt-1">Halal Restaurants</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors animate-bounce"
        >
          <span className="text-sm">Explore Cities</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
