"use client"

import {
  Hotel,
  Plane,
  Car,
  Shield,
  Compass,
  ExternalLink,
  ChevronDown,
  Star,
  BadgeCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  AFFILIATE_PARTNERS,
  trackAffiliateClick,
  getFeaturedHotelPartner
} from "@/lib/affiliates"

interface BookingCTAProps {
  city: string
  country: string
  className?: string
  variant?: 'full' | 'compact' | 'inline'
}

export function BookingCTA({ city, country, className = '', variant = 'full' }: BookingCTAProps) {
  const featuredHotel = getFeaturedHotelPartner(country)

  const handleAffiliateClick = (
    partner: string,
    category: 'hotels' | 'flights' | 'insurance' | 'carRental' | 'activities',
    url: string
  ) => {
    trackAffiliateClick(partner, category, city, country)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAffiliateClick(
            featuredHotel.name,
            'hotels',
            featuredHotel.buildUrl(city, country)
          )}
          className="gap-2"
        >
          <Hotel className="w-4 h-4" />
          Book Hotels
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleAffiliateClick(
            'Skyscanner',
            'flights',
            AFFILIATE_PARTNERS.flights.skyscanner.buildUrl(city)
          )}
          className="gap-2"
        >
          <Plane className="w-4 h-4" />
          Find Flights
        </Button>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`inline-flex gap-2 ${className}`}>
        <a
          href={featuredHotel.buildUrl(city, country)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAffiliateClick(featuredHotel.name, 'hotels', city, country)}
          className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline inline-flex items-center gap-1"
        >
          <Hotel className="w-3.5 h-3.5" />
          Hotels
          <ExternalLink className="w-3 h-3" />
        </a>
        <span className="text-gray-300">|</span>
        <a
          href={AFFILIATE_PARTNERS.flights.skyscanner.buildUrl(city)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAffiliateClick('Skyscanner', 'flights', city, country)}
          className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline inline-flex items-center gap-1"
        >
          <Plane className="w-3.5 h-3.5" />
          Flights
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    )
  }

  // Full variant
  return (
    <div className={`bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Compass className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Plan Your Trip to {city}
        </h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Book Muslim-friendly accommodations, flights, and more for your visit to {city}, {country}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Hotels Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700"
            >
              <span className="flex items-center gap-2">
                <Hotel className="w-4 h-4 text-emerald-600" />
                Hotels
              </span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {/* Featured Partner */}
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                featuredHotel.name,
                'hotels',
                featuredHotel.buildUrl(city, country)
              )}
              className="flex items-center gap-2"
            >
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <span>{featuredHotel.name}</span>
              {featuredHotel.featured && (
                <span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
                  Halal
                </span>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Booking.com',
                'hotels',
                AFFILIATE_PARTNERS.hotels.booking.buildUrl(city, country)
              )}
            >
              Booking.com
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Agoda',
                'hotels',
                AFFILIATE_PARTNERS.hotels.agoda.buildUrl(city, country)
              )}
            >
              Agoda
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Hotels.com',
                'hotels',
                AFFILIATE_PARTNERS.hotels.hotelscom.buildUrl(city, country)
              )}
            >
              Hotels.com
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Flights Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700"
            >
              <span className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-blue-600" />
                Flights
              </span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Skyscanner',
                'flights',
                AFFILIATE_PARTNERS.flights.skyscanner.buildUrl(city)
              )}
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Skyscanner
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Kayak',
                'flights',
                AFFILIATE_PARTNERS.flights.kayak.buildUrl(city)
              )}
            >
              Kayak
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Momondo',
                'flights',
                AFFILIATE_PARTNERS.flights.momondo.buildUrl(city)
              )}
            >
              Momondo
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Car Rental Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700"
            >
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4 text-orange-600" />
                Car Rental
              </span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Rentalcars.com',
                'carRental',
                AFFILIATE_PARTNERS.carRental.rentalcars.buildUrl(city, country)
              )}
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Rentalcars.com
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Discover Cars',
                'carRental',
                AFFILIATE_PARTNERS.carRental.discovercars.buildUrl(city, country)
              )}
            >
              Discover Cars
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Travel Insurance */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-600" />
                Insurance
              </span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'World Nomads',
                'insurance',
                AFFILIATE_PARTNERS.insurance.worldNomads.buildUrl(country)
              )}
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              World Nomads
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAffiliateClick(
                'Allianz Travel',
                'insurance',
                AFFILIATE_PARTNERS.insurance.allianz.buildUrl()
              )}
            >
              Allianz Travel
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tours & Activities */}
      <div className="mt-4 pt-4 border-t border-emerald-200 dark:border-emerald-800">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Discover tours & activities
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAffiliateClick(
              'GetYourGuide',
              'activities',
              AFFILIATE_PARTNERS.activities.getyourguide.buildUrl(city)
            )}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
          >
            GetYourGuide
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleAffiliateClick(
              'Viator',
              'activities',
              AFFILIATE_PARTNERS.activities.viator.buildUrl(city)
            )}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100"
          >
            Viator
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        We may earn a commission from bookings made through these links at no extra cost to you.
      </p>
    </div>
  )
}

export default BookingCTA
