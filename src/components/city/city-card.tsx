"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { City } from "@/types/city"
import {
  Heart,
  MapPin,
  Wifi,
  Shield,
  Users,
  Building2,
  Utensils,
  Star,
  TrendingUp,
  Check
} from "lucide-react"

interface CityCardProps {
  city: City
  onFavorite?: (cityId: string) => void
  isFavorited?: boolean
}

export function CityCard({ city, onFavorite, isFavorited = false }: CityCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${Math.floor(num / 1000)}k`
    return num.toString()
  }

  const formatCurrency = (num: number) => {
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}k`
    return `$${num}`
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onFavorite?.(city.id)
  }

  return (
    <Link href={`/city/${city.slug}`}>
      <article
        className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--border-hover)] hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton" />
          )}

          <Image
            src={city.primaryImage}
            alt={city.name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top Actions */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {/* Favorite Button */}
            <button
              onClick={handleFavorite}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                isFavorited
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Overall Score Badge */}
          <div className="absolute top-3 left-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm font-semibold text-sm ${
              city.scores.overall >= 85
                ? "bg-green-500/90 text-white"
                : city.scores.overall >= 70
                ? "bg-lime-500/90 text-white"
                : city.scores.overall >= 50
                ? "bg-amber-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}>
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{city.scores.overall}</span>
            </div>
          </div>

          {/* City Name & Country */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-0.5">{city.name}</h3>
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{city.country}</span>
                </div>
              </div>
              {/* Monthly Cost Badge */}
              <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
                {formatCurrency(city.stats.monthlyBudget)}/mo
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4">
          {/* Key Metrics Grid - Nomads Style */}
          <div className="grid grid-cols-2 gap-3">
            {/* Halal Score */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="text-base">🕌</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{city.scores.halal}</div>
                <div className="text-xs text-[var(--foreground-muted)]">Halal Score</div>
              </div>
            </div>

            {/* Muslim Population */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{city.scores.muslimPopulationPercent}%</div>
                <div className="text-xs text-[var(--foreground-muted)]">Muslim Pop</div>
              </div>
            </div>

            {/* Safety */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{city.scores.safety}</div>
                <div className="text-xs text-[var(--foreground-muted)]">Safety</div>
              </div>
            </div>

            {/* Internet */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <Wifi className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{city.stats.internetSpeed} Mbps</div>
                <div className="text-xs text-[var(--foreground-muted)]">Internet</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--border)]" />

          {/* Bottom Stats */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[var(--foreground-secondary)]">
                <Building2 className="w-3.5 h-3.5" />
                <span>{formatNumber(city.stats.mosques)} mosques</span>
              </div>
              <div className="flex items-center gap-1 text-[var(--foreground-secondary)]">
                <Utensils className="w-3.5 h-3.5" />
                <span>{formatNumber(city.stats.halalRestaurants)} halal</span>
              </div>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1.5">
            {city.features.airportPrayerRoom && (
              <span className="metric-pill">
                <Check className="w-3 h-3 text-green-500" />
                Airport Prayer
              </span>
            )}
            {city.features.islamicBanks && (
              <span className="metric-pill">
                <Check className="w-3 h-3 text-green-500" />
                Islamic Banks
              </span>
            )}
            {city.scores.community >= 80 && (
              <span className="metric-pill">
                <Star className="w-3 h-3 text-amber-500" />
                Strong Community
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default CityCard
