"use client"

import { Sparkles } from "lucide-react"
import { SponsoredListingCard } from "./sponsored-listing-card"
import {
  SponsoredListing,
  SponsoredListingType,
  getEliteListings,
  getPremiumListings,
  getBasicListings
} from "@/lib/sponsored"

interface SponsoredSectionProps {
  citySlug: string
  type?: SponsoredListingType
  variant?: 'hero' | 'featured' | 'mixed'
  title?: string
  showTitle?: boolean
  maxListings?: number
  className?: string
  // Business data lookup function
  getBusinessData?: (businessId: string) => {
    image?: string
    rating?: number
    reviewCount?: number
    address?: string
    cuisine?: string
    priceRange?: string
  } | undefined
}

export function SponsoredSection({
  citySlug,
  type,
  variant = 'mixed',
  title = 'Featured Partners',
  showTitle = true,
  maxListings = 6,
  className = '',
  getBusinessData
}: SponsoredSectionProps) {
  // Get listings based on variant
  let listings: SponsoredListing[] = []

  if (variant === 'hero') {
    listings = getEliteListings(citySlug)
  } else if (variant === 'featured') {
    listings = getPremiumListings(citySlug, type)
  } else {
    // Mixed - get all types
    const elite = getEliteListings(citySlug)
    const premium = getPremiumListings(citySlug, type)
    const basic = getBasicListings(citySlug, type)
    listings = [...elite, ...premium, ...basic]
  }

  // Filter by type if specified
  if (type) {
    listings = listings.filter(l => l.type === type)
  }

  // Limit listings
  listings = listings.slice(0, maxListings)

  // Don't render if no listings
  if (listings.length === 0) {
    return null
  }

  // Hero variant - single large listing
  if (variant === 'hero' && listings.length > 0) {
    const heroListing = listings[0]
    return (
      <div className={className}>
        <SponsoredListingCard
          listing={heroListing}
          variant="hero"
          businessData={getBusinessData?.(heroListing.businessId)}
        />
      </div>
    )
  }

  // Featured variant - grid of featured cards
  if (variant === 'featured') {
    return (
      <div className={className}>
        {showTitle && (
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map(listing => (
            <SponsoredListingCard
              key={listing.id}
              listing={listing}
              variant="featured"
              businessData={getBusinessData?.(listing.businessId)}
            />
          ))}
        </div>
      </div>
    )
  }

  // Mixed variant - elite at top, then featured, then basic inline
  const eliteListings = listings.filter(l => l.tier === 'elite')
  const premiumListings = listings.filter(l => l.tier === 'premium')
  const basicListings = listings.filter(l => l.tier === 'basic')

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Elite/Hero listings */}
      {eliteListings.length > 0 && (
        <div>
          {eliteListings.map(listing => (
            <SponsoredListingCard
              key={listing.id}
              listing={listing}
              variant="hero"
              businessData={getBusinessData?.(listing.businessId)}
            />
          ))}
        </div>
      )}

      {/* Premium/Featured listings */}
      {premiumListings.length > 0 && (
        <div>
          {showTitle && (
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumListings.map(listing => (
              <SponsoredListingCard
                key={listing.id}
                listing={listing}
                variant="featured"
                businessData={getBusinessData?.(listing.businessId)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Basic/Sponsored listings - rendered as a smaller section */}
      {basicListings.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Sponsored
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {basicListings.map(listing => (
              <SponsoredListingCard
                key={listing.id}
                listing={listing}
                variant="default"
                businessData={getBusinessData?.(listing.businessId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SponsoredSection
