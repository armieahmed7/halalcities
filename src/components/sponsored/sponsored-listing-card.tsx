"use client"

import { useEffect } from "react"
import Image from "next/image"
import {
  Star,
  MapPin,
  BadgeCheck,
  ExternalLink,
  Sparkles,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SponsoredListing,
  trackImpression,
  trackClick
} from "@/lib/sponsored"

interface SponsoredListingCardProps {
  listing: SponsoredListing
  businessData?: {
    image?: string
    rating?: number
    reviewCount?: number
    address?: string
    cuisine?: string
    priceRange?: string
  }
  variant?: 'default' | 'featured' | 'hero'
  onClick?: () => void
}

export function SponsoredListingCard({
  listing,
  businessData,
  variant = 'default',
  onClick
}: SponsoredListingCardProps) {
  // Track impression when component mounts
  useEffect(() => {
    trackImpression(listing.id)
  }, [listing.id])

  const handleClick = () => {
    trackClick(listing.id)
    onClick?.()
  }

  // Hero variant - Large banner at top of page
  if (variant === 'hero' || listing.tier === 'elite') {
    return (
      <div
        className="relative bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl overflow-hidden cursor-pointer group"
        onClick={handleClick}
      >
        {/* Background Image */}
        {businessData?.image && (
          <div className="absolute inset-0">
            <Image
              src={businessData.image}
              alt={listing.businessName}
              fill
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative p-6 sm:p-8">
          {/* Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            {listing.metadata?.badgeText || 'Elite Partner'}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Logo/Image */}
            {businessData?.image && (
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-white flex-shrink-0">
                <Image
                  src={businessData.image}
                  alt={listing.businessName}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {listing.businessName}
              </h3>

              {listing.metadata?.tagline && (
                <p className="text-white/90 text-lg mb-3">
                  {listing.metadata.tagline}
                </p>
              )}

              {businessData?.address && (
                <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {businessData.address}
                </div>
              )}

              {listing.metadata?.specialOffer && (
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                  <Tag className="w-4 h-4" />
                  {listing.metadata.specialOffer}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {businessData?.rating && (
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur px-3 py-2 rounded-lg">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-bold text-lg">{businessData.rating}</span>
                  {businessData.reviewCount && (
                    <span className="text-white/70 text-sm">({businessData.reviewCount})</span>
                  )}
                </div>
              )}

              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-white/90"
              >
                View Details
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Featured variant - Medium sized card in featured section
  if (variant === 'featured' || listing.tier === 'premium') {
    return (
      <div
        className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-700 hover:shadow-lg transition-shadow cursor-pointer group"
        onClick={handleClick}
      >
        {/* Featured Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          <BadgeCheck className="w-3.5 h-3.5" />
          {listing.metadata?.badgeText || 'Featured'}
        </div>

        {/* Image */}
        {businessData?.image && (
          <div className="relative h-40 bg-gray-100">
            <Image
              src={businessData.image}
              alt={listing.businessName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Rating on image */}
            {businessData.rating && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur px-2 py-1 rounded">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{businessData.rating}</span>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
            {listing.businessName}
          </h4>

          {listing.metadata?.tagline && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
              {listing.metadata.tagline}
            </p>
          )}

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
            {businessData?.cuisine && (
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                {businessData.cuisine}
              </span>
            )}
            {businessData?.priceRange && (
              <span className="text-emerald-600 font-medium">{businessData.priceRange}</span>
            )}
          </div>

          {listing.metadata?.specialOffer && (
            <div className="flex items-center gap-1.5 text-amber-600 text-sm font-medium mb-3">
              <Tag className="w-3.5 h-3.5" />
              {listing.metadata.specialOffer}
            </div>
          )}

          <Button
            size="sm"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            View Details
          </Button>
        </div>
      </div>
    )
  }

  // Default/Basic variant - Subtle highlighting
  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      {/* Sponsored indicator */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/50 px-2 py-0.5 rounded">
        <Sparkles className="w-3 h-3" />
        {listing.metadata?.badgeText || 'Sponsored'}
      </div>

      <div className="flex gap-3 p-3">
        {/* Image */}
        {businessData?.image && (
          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={businessData.image}
              alt={listing.businessName}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white truncate">
            {listing.businessName}
          </h4>

          {businessData?.address && (
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mb-1">
              {businessData.address}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm">
            {businessData?.rating && (
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{businessData.rating}</span>
              </div>
            )}
            {businessData?.cuisine && (
              <span className="text-gray-400">•</span>
            )}
            {businessData?.cuisine && (
              <span className="text-gray-600 dark:text-gray-400">{businessData.cuisine}</span>
            )}
          </div>

          {listing.metadata?.specialOffer && (
            <div className="flex items-center gap-1 text-amber-600 text-xs mt-1">
              <Tag className="w-3 h-3" />
              <span className="truncate">{listing.metadata.specialOffer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SponsoredListingCard
