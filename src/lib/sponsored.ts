// Sponsored Listings Configuration
// This module handles sponsored/featured listings for restaurants, hotels, and businesses

export type SponsoredListingType = 'restaurant' | 'hotel' | 'mosque' | 'business' | 'tour'

export interface SponsoredListing {
  id: string
  type: SponsoredListingType
  businessId: string
  businessName: string
  citySlug: string
  startDate: string
  endDate: string
  tier: 'basic' | 'premium' | 'elite'
  impressions: number
  clicks: number
  isActive: boolean
  metadata?: {
    tagline?: string
    specialOffer?: string
    badgeText?: string
    customImage?: string
  }
}

// Pricing tiers for sponsored listings
export const SPONSORED_TIERS = {
  basic: {
    id: 'basic',
    name: 'Basic Listing',
    price: 29,
    period: 'month',
    features: [
      'Highlighted border',
      'Badge indicator',
      'Priority in search results',
      'Basic analytics'
    ],
    position: 'inline', // Mixed with regular listings
    maxPerCity: 10
  },
  premium: {
    id: 'premium',
    name: 'Premium Listing',
    price: 79,
    period: 'month',
    features: [
      'Everything in Basic',
      'Featured section placement',
      'Custom tagline',
      'Special offer badge',
      'Advanced analytics',
      'Click tracking'
    ],
    position: 'featured', // In dedicated featured section
    maxPerCity: 5
  },
  elite: {
    id: 'elite',
    name: 'Elite Listing',
    price: 199,
    period: 'month',
    features: [
      'Everything in Premium',
      'Top of page placement',
      'Custom promotional banner',
      'Direct booking integration',
      'Priority support',
      'Social media promotion'
    ],
    position: 'hero', // Hero/banner position
    maxPerCity: 2
  }
}

// Demo sponsored listings data (in production, this would come from database)
export const DEMO_SPONSORED_LISTINGS: SponsoredListing[] = [
  {
    id: 'sp-1',
    type: 'restaurant',
    businessId: 'rest-001',
    businessName: 'Dishoom',
    citySlug: 'london',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    tier: 'premium',
    impressions: 15420,
    clicks: 892,
    isActive: true,
    metadata: {
      tagline: 'Award-winning Bombay-inspired cuisine',
      specialOffer: '20% off for HalalCities users',
      badgeText: 'Featured'
    }
  },
  {
    id: 'sp-2',
    type: 'hotel',
    businessId: 'hotel-001',
    businessName: 'The Dorchester',
    citySlug: 'london',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    tier: 'elite',
    impressions: 28340,
    clicks: 1456,
    isActive: true,
    metadata: {
      tagline: 'Halal dining & prayer facilities available',
      specialOffer: 'Complimentary breakfast for Muslim travelers',
      badgeText: 'Halal-Friendly'
    }
  },
  {
    id: 'sp-3',
    type: 'restaurant',
    businessId: 'rest-002',
    businessName: 'Kazan Restaurant',
    citySlug: 'london',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    tier: 'basic',
    impressions: 5230,
    clicks: 312,
    isActive: true,
    metadata: {
      badgeText: 'Sponsored'
    }
  },
  {
    id: 'sp-4',
    type: 'restaurant',
    businessId: 'rest-003',
    businessName: 'Kebab Queen',
    citySlug: 'dubai',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    tier: 'premium',
    impressions: 12000,
    clicks: 780,
    isActive: true,
    metadata: {
      tagline: 'Authentic Middle Eastern flavors',
      specialOffer: 'Free dessert with main course',
      badgeText: 'Featured'
    }
  }
]

// Get sponsored listings for a specific city and type
export function getSponsoredListings(
  citySlug: string,
  type?: SponsoredListingType
): SponsoredListing[] {
  return DEMO_SPONSORED_LISTINGS.filter(listing => {
    const matchesCity = listing.citySlug === citySlug
    const matchesType = !type || listing.type === type
    const isActive = listing.isActive
    const isWithinDateRange = new Date() >= new Date(listing.startDate) &&
                              new Date() <= new Date(listing.endDate)

    return matchesCity && matchesType && isActive && isWithinDateRange
  }).sort((a, b) => {
    // Sort by tier (elite > premium > basic)
    const tierOrder = { elite: 0, premium: 1, basic: 2 }
    return tierOrder[a.tier] - tierOrder[b.tier]
  })
}

// Get elite (hero) listings for a city
export function getEliteListings(citySlug: string): SponsoredListing[] {
  return getSponsoredListings(citySlug).filter(l => l.tier === 'elite')
}

// Get premium (featured section) listings for a city
export function getPremiumListings(citySlug: string, type?: SponsoredListingType): SponsoredListing[] {
  return getSponsoredListings(citySlug, type).filter(l => l.tier === 'premium')
}

// Get basic (inline) listings for a city
export function getBasicListings(citySlug: string, type?: SponsoredListingType): SponsoredListing[] {
  return getSponsoredListings(citySlug, type).filter(l => l.tier === 'basic')
}

// Track impression for a sponsored listing
export async function trackImpression(listingId: string): Promise<void> {
  try {
    await fetch('/api/sponsored/impression', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, timestamp: new Date().toISOString() })
    })
  } catch {
    // Silently fail - don't affect user experience
  }
}

// Track click for a sponsored listing
export async function trackClick(listingId: string): Promise<void> {
  try {
    await fetch('/api/sponsored/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listingId, timestamp: new Date().toISOString() })
    })
  } catch {
    // Silently fail - don't affect user experience
  }
}

// Calculate CTR for a listing
export function calculateCTR(listing: SponsoredListing): number {
  if (listing.impressions === 0) return 0
  return (listing.clicks / listing.impressions) * 100
}

// Calculate estimated revenue from a listing
export function calculateRevenue(listing: SponsoredListing): number {
  const tier = SPONSORED_TIERS[listing.tier]
  const startDate = new Date(listing.startDate)
  const endDate = new Date(listing.endDate)
  const months = Math.ceil((endDate.getTime() - startDate.getTime()) / (30 * 24 * 60 * 60 * 1000))
  return tier.price * months
}
