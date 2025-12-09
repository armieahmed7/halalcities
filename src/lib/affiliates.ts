// Affiliate Partner Configuration
// These are placeholder affiliate IDs - replace with actual partner IDs when partnerships are established

export const AFFILIATE_PARTNERS = {
  // Hotel Booking Partners
  hotels: {
    booking: {
      name: 'Booking.com',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.booking.com/searchresults.html',
      commission: '4-6%',
      logo: '/affiliates/booking-logo.svg',
      featured: false,
      buildUrl: (city: string, country: string, checkIn?: string, checkOut?: string) => {
        const params = new URLSearchParams({
          ss: `${city}, ${country}`,
          aid: AFFILIATE_PARTNERS.hotels.booking.affiliateId,
          label: 'halalcities-city-page',
          ...(checkIn && { checkin: checkIn }),
          ...(checkOut && { checkout: checkOut }),
        })
        return `${AFFILIATE_PARTNERS.hotels.booking.baseUrl}?${params.toString()}`
      }
    },
    agoda: {
      name: 'Agoda',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.agoda.com/search',
      commission: '5-7%',
      logo: '/affiliates/agoda-logo.svg',
      featured: false,
      buildUrl: (city: string, country: string, checkIn?: string, checkOut?: string) => {
        const params = new URLSearchParams({
          city: city,
          cid: AFFILIATE_PARTNERS.hotels.agoda.affiliateId,
          tag: 'halalcities',
          ...(checkIn && { checkIn }),
          ...(checkOut && { checkOut }),
        })
        return `${AFFILIATE_PARTNERS.hotels.agoda.baseUrl}?${params.toString()}`
      }
    },
    hotelscom: {
      name: 'Hotels.com',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.hotels.com/search.do',
      commission: '4-5%',
      logo: '/affiliates/hotelscom-logo.svg',
      featured: false,
      buildUrl: (city: string, country: string) => {
        const params = new URLSearchParams({
          'q-destination': `${city}, ${country}`,
          'affiliateId': AFFILIATE_PARTNERS.hotels.hotelscom.affiliateId,
        })
        return `${AFFILIATE_PARTNERS.hotels.hotelscom.baseUrl}?${params.toString()}`
      }
    },
    halalBooking: {
      name: 'HalalBooking',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.halalbooking.com/search',
      commission: '8-12%',
      logo: '/affiliates/halalbooking-logo.svg',
      featured: true, // Feature this partner for halal-specific accommodations
      buildUrl: (city: string, country: string) => {
        const params = new URLSearchParams({
          destination: `${city}, ${country}`,
          ref: AFFILIATE_PARTNERS.hotels.halalBooking.affiliateId,
        })
        return `${AFFILIATE_PARTNERS.hotels.halalBooking.baseUrl}?${params.toString()}`
      }
    }
  },

  // Flight Booking Partners
  flights: {
    skyscanner: {
      name: 'Skyscanner',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.skyscanner.com/transport/flights',
      commission: 'CPA $0.20-0.50',
      logo: '/affiliates/skyscanner-logo.svg',
      buildUrl: (destinationCity: string, destinationAirport?: string) => {
        const dest = destinationAirport || destinationCity.toLowerCase().replace(/\s+/g, '-')
        return `${AFFILIATE_PARTNERS.flights.skyscanner.baseUrl}/anywhere/${dest}/?associateid=${AFFILIATE_PARTNERS.flights.skyscanner.affiliateId}`
      }
    },
    kayak: {
      name: 'Kayak',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.kayak.com/flights',
      commission: 'CPA $0.30-0.60',
      logo: '/affiliates/kayak-logo.svg',
      buildUrl: (destinationCity: string) => {
        const dest = destinationCity.toLowerCase().replace(/\s+/g, '-')
        return `${AFFILIATE_PARTNERS.flights.kayak.baseUrl}/${dest}?a=${AFFILIATE_PARTNERS.flights.kayak.affiliateId}`
      }
    },
    momondo: {
      name: 'Momondo',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.momondo.com/flights',
      commission: 'CPA $0.25-0.45',
      logo: '/affiliates/momondo-logo.svg',
      buildUrl: (destinationCity: string) => {
        const dest = destinationCity.toLowerCase().replace(/\s+/g, '-')
        return `${AFFILIATE_PARTNERS.flights.momondo.baseUrl}/${dest}?a=${AFFILIATE_PARTNERS.flights.momondo.affiliateId}`
      }
    }
  },

  // Travel Insurance Partners
  insurance: {
    worldNomads: {
      name: 'World Nomads',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.worldnomads.com/travel-insurance',
      commission: '10-15%',
      logo: '/affiliates/worldnomads-logo.svg',
      buildUrl: (country: string) => {
        return `${AFFILIATE_PARTNERS.insurance.worldNomads.baseUrl}?affiliate=${AFFILIATE_PARTNERS.insurance.worldNomads.affiliateId}&destination=${encodeURIComponent(country)}`
      }
    },
    allianz: {
      name: 'Allianz Travel',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.allianztravelinsurance.com',
      commission: '8-12%',
      logo: '/affiliates/allianz-logo.svg',
      buildUrl: () => {
        return `${AFFILIATE_PARTNERS.insurance.allianz.baseUrl}?aid=${AFFILIATE_PARTNERS.insurance.allianz.affiliateId}`
      }
    }
  },

  // Car Rental Partners
  carRental: {
    rentalcars: {
      name: 'Rentalcars.com',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.rentalcars.com',
      commission: '5-8%',
      logo: '/affiliates/rentalcars-logo.svg',
      buildUrl: (city: string, country: string) => {
        return `${AFFILIATE_PARTNERS.carRental.rentalcars.baseUrl}/search?location=${encodeURIComponent(`${city}, ${country}`)}&affiliateCode=${AFFILIATE_PARTNERS.carRental.rentalcars.affiliateId}`
      }
    },
    discovercars: {
      name: 'Discover Cars',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.discovercars.com',
      commission: '6-10%',
      logo: '/affiliates/discovercars-logo.svg',
      buildUrl: (city: string, country: string) => {
        return `${AFFILIATE_PARTNERS.carRental.discovercars.baseUrl}/search?pickup=${encodeURIComponent(`${city}, ${country}`)}&a_aid=${AFFILIATE_PARTNERS.carRental.discovercars.affiliateId}`
      }
    }
  },

  // Tours & Activities Partners
  activities: {
    getyourguide: {
      name: 'GetYourGuide',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.getyourguide.com',
      commission: '8%',
      logo: '/affiliates/getyourguide-logo.svg',
      buildUrl: (city: string) => {
        const citySlug = city.toLowerCase().replace(/\s+/g, '-')
        return `${AFFILIATE_PARTNERS.activities.getyourguide.baseUrl}/${citySlug}-l123/?partner_id=${AFFILIATE_PARTNERS.activities.getyourguide.affiliateId}`
      }
    },
    viator: {
      name: 'Viator',
      affiliateId: 'halalcities', // Replace with actual affiliate ID
      baseUrl: 'https://www.viator.com',
      commission: '8%',
      logo: '/affiliates/viator-logo.svg',
      buildUrl: (city: string) => {
        const citySlug = city.toLowerCase().replace(/\s+/g, '-')
        return `${AFFILIATE_PARTNERS.activities.viator.baseUrl}/${citySlug}/d123-ttd?pid=${AFFILIATE_PARTNERS.activities.viator.affiliateId}`
      }
    }
  }
}

// Helper function to track affiliate clicks (for analytics)
export function trackAffiliateClick(
  partner: string,
  category: 'hotels' | 'flights' | 'insurance' | 'carRental' | 'activities',
  city: string,
  country: string
) {
  // This can be integrated with your analytics system (GA4, Mixpanel, etc.)
  if (typeof window !== 'undefined') {
    // Google Analytics 4 event
    if (typeof (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', 'affiliate_click', {
        partner_name: partner,
        category: category,
        city: city,
        country: country,
        timestamp: new Date().toISOString()
      })
    }

    // You can also send to your own analytics endpoint
    fetch('/api/analytics/affiliate-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        partner,
        category,
        city,
        country,
        timestamp: new Date().toISOString()
      })
    }).catch(() => {
      // Silently fail - don't block user experience
    })
  }
}

// Get featured hotel partner for a region
export function getFeaturedHotelPartner(country: string) {
  // For Muslim-majority countries, feature HalalBooking
  const muslimMajorityCountries = [
    'Indonesia', 'Malaysia', 'Turkey', 'Saudi Arabia', 'UAE', 'Egypt',
    'Morocco', 'Tunisia', 'Jordan', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'Pakistan', 'Bangladesh', 'Iran', 'Iraq', 'Algeria', 'Libya', 'Sudan'
  ]

  if (muslimMajorityCountries.includes(country)) {
    return AFFILIATE_PARTNERS.hotels.halalBooking
  }

  return AFFILIATE_PARTNERS.hotels.booking
}
