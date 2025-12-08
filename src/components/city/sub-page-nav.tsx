"use client"

import Link from "next/link"
import {
  Utensils,
  Building2,
  GraduationCap,
  Clock,
  Users,
  Hotel,
  ChevronRight
} from "lucide-react"

interface SubPageNavProps {
  citySlug: string
  cityName: string
  stats: {
    mosques: number
    halalRestaurants: number
    islamicSchools?: number
    halalHotels?: number
  }
  currentPage?: string
}

const subPages = [
  {
    id: "halal-restaurants",
    label: "Halal Restaurants",
    shortLabel: "Restaurants",
    icon: Utensils,
    color: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    description: "Find certified halal food"
  },
  {
    id: "mosques",
    label: "Mosques",
    shortLabel: "Mosques",
    icon: Building2,
    color: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    description: "Prayer facilities & Jummah times"
  },
  {
    id: "islamic-schools",
    label: "Islamic Schools",
    shortLabel: "Schools",
    icon: GraduationCap,
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: "Islamic education options"
  },
  {
    id: "prayer-times",
    label: "Prayer Times",
    shortLabel: "Prayer",
    icon: Clock,
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description: "Daily salah schedule"
  },
  {
    id: "muslim-community",
    label: "Muslim Community",
    shortLabel: "Community",
    icon: Users,
    color: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    description: "Demographics & neighborhoods"
  },
  {
    id: "halal-hotels",
    label: "Halal Hotels",
    shortLabel: "Hotels",
    icon: Hotel,
    color: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    description: "Muslim-friendly accommodation"
  }
]

export function SubPageNav({ citySlug, cityName, stats, currentPage }: SubPageNavProps) {
  const getCount = (id: string) => {
    switch (id) {
      case "halal-restaurants":
        return stats.halalRestaurants
      case "mosques":
        return stats.mosques
      case "islamic-schools":
        return stats.islamicSchools || 0
      case "halal-hotels":
        return stats.halalHotels || 0
      default:
        return null
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-[var(--border)]">
      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
        Explore {cityName}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {subPages.map((page) => {
          const Icon = page.icon
          const count = getCount(page.id)
          const isActive = currentPage === page.id

          return (
            <Link
              key={page.id}
              href={`/city/${citySlug}/${page.id}`}
              className={`group flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-200 border ${
                isActive
                  ? "border-[var(--primary)] bg-[var(--primary)]/5"
                  : "border-transparent hover:border-[var(--border)] hover:bg-[var(--background-secondary)]"
              }`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${page.color} flex items-center justify-center mb-2`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${page.iconColor}`} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[var(--foreground)] text-center">
                {page.shortLabel}
              </span>
              {count !== null && count > 0 && (
                <span className="text-[10px] sm:text-xs text-[var(--foreground-muted)] mt-0.5">
                  {count}+
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// Horizontal compact version for sub-pages
export function SubPageNavCompact({ citySlug, cityName, currentPage }: Omit<SubPageNavProps, 'stats'>) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <span className="text-sm text-[var(--foreground-muted)] whitespace-nowrap">More:</span>
      {subPages
        .filter((page) => page.id !== currentPage)
        .map((page) => {
          const Icon = page.icon
          return (
            <Link
              key={page.id}
              href={`/city/${citySlug}/${page.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--background-secondary)] text-sm text-[var(--foreground-secondary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5" />
              {page.shortLabel}
            </Link>
          )
        })}
    </div>
  )
}

// Sidebar version for sub-pages
export function SubPageNavSidebar({ citySlug, cityName, currentPage }: Omit<SubPageNavProps, 'stats'>) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-[var(--border)]">
      <h3 className="text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-3">
        Also in {cityName}
      </h3>
      <div className="space-y-1">
        {subPages.map((page) => {
          const Icon = page.icon
          const isActive = currentPage === page.id

          return (
            <Link
              key={page.id}
              href={`/city/${citySlug}/${page.id}`}
              className={`flex items-center justify-between p-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                  : "hover:bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className="w-4 h-4" />
                <span className="text-sm">{page.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
