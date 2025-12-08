"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Building2, Utensils, ChevronDown, Mail, ArrowRight, Check, Loader2 } from "lucide-react"
import { SearchAutocomplete } from "@/components/search/search-autocomplete"

interface HeroSectionProps {
  onSearch?: (query: string) => void
  totalCities?: number
  totalMosques?: number
  totalRestaurants?: number
}

// Fixed target values for consistent display
const DISPLAY_CITIES = 500
const DISPLAY_MOSQUES = 10000
const DISPLAY_RESTAURANTS = 50000

export function HeroSection({
  onSearch,
  totalCities = DISPLAY_CITIES,
  totalMosques = DISPLAY_MOSQUES,
  totalRestaurants = DISPLAY_RESTAURANTS
}: HeroSectionProps) {
  // Use fixed display values for consistent animation
  const targetCities = totalCities > DISPLAY_CITIES ? totalCities : DISPLAY_CITIES
  const targetMosques = totalMosques > DISPLAY_MOSQUES ? totalMosques : DISPLAY_MOSQUES
  const targetRestaurants = totalRestaurants > DISPLAY_RESTAURANTS ? totalRestaurants : DISPLAY_RESTAURANTS

  const [animatedCities, setAnimatedCities] = useState(0)
  const [animatedMosques, setAnimatedMosques] = useState(0)
  const [animatedRestaurants, setAnimatedRestaurants] = useState(0)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")
  const hasAnimated = useRef(false)

  // Animate numbers once on mount
  useEffect(() => {
    // Only animate once
    if (hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedCities(Math.floor(targetCities * easeOut))
      setAnimatedMosques(Math.floor(targetMosques * easeOut))
      setAnimatedRestaurants(Math.floor(targetRestaurants * easeOut))

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [targetCities, targetMosques, targetRestaurants])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    })
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      } else {
        const data = await response.json()
        setError(data.error || "Failed to subscribe. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
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

        {/* Search Bar with Autocomplete */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up">
          <SearchAutocomplete
            onSearch={onSearch}
            placeholder="Search cities, countries, or features..."
            showTrending={true}
          />
        </div>

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

        {/* Email Capture Section */}
        <div className="mt-16 mb-8 animate-fade-in">
          <div className="max-w-xl mx-auto">
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-emerald-900 dark:text-emerald-100">You&apos;re all set!</p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">Check your inbox for a welcome email.</p>
                </div>
              </div>
            ) : (
              <>
                <p className="text-lg text-[var(--foreground-secondary)] mb-4">
                  Get weekly updates on the best Muslim-friendly cities, travel tips, and exclusive deals.
                </p>
                <form onSubmit={handleEmailSubmit} className="relative">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 text-base bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]"
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 min-w-[160px]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </form>
                <p className="text-xs text-[var(--foreground-muted)] mt-3">
                  Join 50,000+ Muslim travelers. Unsubscribe anytime.
                </p>
              </>
            )}
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
