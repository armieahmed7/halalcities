import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'

const BASE_URL = 'https://halalcities.netlify.app'

// Page types for city sub-pages
const CITY_SUB_PAGES = [
  'halal-restaurants',
  'mosques',
  'islamic-schools',
  'prayer-times',
  'muslim-community',
  'halal-hotels',
]

// Priority configuration for different page types
const PAGE_PRIORITIES = {
  home: 1.0,
  city: 0.9,
  'halal-restaurants': 0.8,
  mosques: 0.8,
  'prayer-times': 0.8,
  'islamic-schools': 0.7,
  'muslim-community': 0.7,
  'halal-hotels': 0.7,
} as const

// Change frequency configuration
const CHANGE_FREQUENCIES = {
  home: 'daily',
  city: 'weekly',
  'halal-restaurants': 'weekly',
  mosques: 'weekly',
  'prayer-times': 'daily', // Prayer times change daily
  'islamic-schools': 'monthly',
  'muslim-community': 'monthly',
  'halal-hotels': 'weekly',
} as const

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: CHANGE_FREQUENCIES.home,
      priority: PAGE_PRIORITIES.home,
    },
  ]

  // City main pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/city/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: CHANGE_FREQUENCIES.city,
    priority: PAGE_PRIORITIES.city,
  }))

  // City sub-pages (halal-restaurants, mosques, islamic-schools, etc.)
  const citySubPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    CITY_SUB_PAGES.map((pageType) => ({
      url: `${BASE_URL}/city/${city.slug}/${pageType}`,
      lastModified: currentDate,
      changeFrequency: CHANGE_FREQUENCIES[pageType as keyof typeof CHANGE_FREQUENCIES],
      priority: PAGE_PRIORITIES[pageType as keyof typeof PAGE_PRIORITIES],
    }))
  )

  // Combine all pages
  return [...staticPages, ...cityPages, ...citySubPages]
}

// Export sitemap generation info for debugging/logging
export const sitemapInfo = {
  totalCities: cities.length,
  subPagesPerCity: CITY_SUB_PAGES.length,
  totalPages: 1 + cities.length + (cities.length * CITY_SUB_PAGES.length),
  expectedUrls: `${1 + cities.length + (cities.length * CITY_SUB_PAGES.length)} URLs`,
}
