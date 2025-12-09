"use client"

import Image from "next/image"
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  UtensilsCrossed,
  BadgeCheck,
  ExternalLink,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackAffiliateClick, AFFILIATE_PARTNERS } from "@/lib/affiliates"

interface HotelCardProps {
  hotel: {
    id: string
    name: string
    image: string
    rating: number
    reviewCount: number
    pricePerNight: number
    currency?: string
    location: string
    city: string
    country: string
    amenities: string[]
    isHalalFriendly?: boolean
    halalFeatures?: string[]
    distance?: string
    bookingUrl?: string
  }
  variant?: 'default' | 'featured' | 'compact'
  onFavorite?: (hotelId: string) => void
  isFavorited?: boolean
}

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  parking: Car,
  breakfast: Coffee,
  restaurant: UtensilsCrossed,
}

export function HotelCard({
  hotel,
  variant = 'default',
  onFavorite,
  isFavorited = false
}: HotelCardProps) {
  const handleBookClick = () => {
    const bookingUrl = hotel.bookingUrl ||
      AFFILIATE_PARTNERS.hotels.booking.buildUrl(hotel.city, hotel.country)

    trackAffiliateClick('Booking.com', 'hotels', hotel.city, hotel.country)
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'compact') {
    return (
      <div className="flex gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 dark:text-white truncate">
            {hotel.name}
          </h4>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>{hotel.rating}</span>
            <span className="text-gray-400">({hotel.reviewCount})</span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-emerald-600 font-semibold">
              {hotel.currency || '$'}{hotel.pricePerNight}
              <span className="text-xs text-gray-500 font-normal">/night</span>
            </span>
            <Button size="sm" variant="ghost" onClick={handleBookClick} className="h-7 px-2">
              Book
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'featured') {
    return (
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-700">
        {/* Featured Badge */}
        <div className="absolute top-3 left-3 z-10 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
          <BadgeCheck className="w-3.5 h-3.5" />
          Halal-Friendly
        </div>

        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={() => onFavorite(hotel.id)}
            className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        )}

        {/* Image */}
        <div className="relative h-48 sm:h-56">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-800 px-2 py-1 rounded">
              <Star className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                {hotel.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{hotel.location}</span>
            {hotel.distance && (
              <span className="text-gray-400">• {hotel.distance}</span>
            )}
          </div>

          {/* Halal Features */}
          {hotel.halalFeatures && hotel.halalFeatures.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {hotel.halalFeatures.map((feature, i) => (
                <span
                  key={i}
                  className="text-xs bg-emerald-100 dark:bg-emerald-800/50 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Amenities */}
          <div className="flex gap-3 mb-4">
            {hotel.amenities.slice(0, 4).map((amenity, i) => {
              const IconComponent = amenityIcons[amenity.toLowerCase()]
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400"
                  title={amenity}
                >
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4" />
                  ) : (
                    <span>{amenity}</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-emerald-200 dark:border-emerald-700">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">From</span>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {hotel.currency || '$'}{hotel.pricePerNight}
                <span className="text-sm font-normal text-gray-500">/night</span>
              </div>
            </div>
            <Button
              onClick={handleBookClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Book Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      {/* Favorite Button */}
      {onFavorite && (
        <button
          onClick={() => onFavorite(hotel.id)}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      )}

      {/* Halal Badge */}
      {hotel.isHalalFriendly && (
        <div className="absolute top-3 left-3 z-10 bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          <BadgeCheck className="w-3 h-3" />
          Halal-Friendly
        </div>
      )}

      {/* Image */}
      <div className="relative h-40">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-0.5 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hotel.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="truncate">{hotel.location}</span>
        </div>

        {/* Amenities */}
        <div className="flex gap-2 mb-3">
          {hotel.amenities.slice(0, 4).map((amenity, i) => {
            const IconComponent = amenityIcons[amenity.toLowerCase()]
            return IconComponent ? (
              <span key={i} title={amenity}>
                <IconComponent className="w-4 h-4 text-gray-400" />
              </span>
            ) : null
          })}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {hotel.currency || '$'}{hotel.pricePerNight}
            </span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <Button
            size="sm"
            onClick={handleBookClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            View
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
