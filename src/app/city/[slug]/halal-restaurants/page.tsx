import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import { restaurantsByCity } from "@/data/restaurants"
import { RestaurantCard } from "@/components/city/restaurant-card"
import { HalalRestaurantsMapModern } from "@/components/city/halal-restaurants-map-modern"
import { SubPageNavSidebar, SubPageNavCompact } from "@/components/city/sub-page-nav"
import { Breadcrumb, BreadcrumbSchema } from "@/components/ui/breadcrumb"
import {
  Utensils,
  MapPin,
  Star,
  Clock,
  ChevronRight,
  Search,
  Filter,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all cities
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    return {
      title: "City Not Found | HalalCities",
    }
  }

  const currentYear = new Date().getFullYear()
  const restaurantCount = city.stats.halalRestaurants
  const title = `Best Halal Restaurants in ${city.name}, ${city.country} (${currentYear}) | HalalCities`
  const description = `Discover ${restaurantCount}+ halal restaurants in ${city.name}. Find certified halal food, Muslim-friendly dining options, halal meat shops, and local recommendations for ${city.name}, ${city.country}.`

  return {
    title,
    description,
    keywords: [
      `halal restaurants ${city.name}`,
      `halal food ${city.name}`,
      `where to eat halal ${city.name}`,
      `halal restaurants in ${city.name}`,
      `best halal food ${city.name}`,
      `halal certified restaurants ${city.name}`,
      `muslim food ${city.name}`,
      `halal meat ${city.name}`,
      `${city.name} halal dining`,
      `halal restaurants ${city.country}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/halal-restaurants`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: city.primaryImage,
          width: 1200,
          height: 630,
          alt: `Halal restaurants in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [city.primaryImage],
    },
    alternates: {
      canonical: `https://halalcities.com/city/${city.slug}/halal-restaurants`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function HalalRestaurantsPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const restaurants = restaurantsByCity[city.slug] || []
  const ext = city.extended
  const currentYear = new Date().getFullYear()

  // Get cuisine types from restaurants
  const cuisineTypes = [...new Set(restaurants.map(r => r.cuisine))].slice(0, 6)

  // Get nearby cities (same country, different city)
  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // Generate rating based on food score
  const avgRating = (city.scores.food / 20).toFixed(1) // Convert 0-100 to 0-5 scale

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Halal Restaurants in ${city.name}`,
    "description": `Best halal restaurants and Muslim-friendly dining in ${city.name}, ${city.country}`,
    "numberOfItems": city.stats.halalRestaurants,
    "itemListElement": restaurants.slice(0, 10).map((restaurant, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Restaurant",
        "name": restaurant.name,
        "servesCuisine": restaurant.cuisine,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": restaurant.address,
          "addressLocality": city.name,
          "addressCountry": city.country,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": restaurant.rating,
          "reviewCount": restaurant.reviews,
        },
        "priceRange": "$".repeat(restaurant.priceLevel),
      },
    })),
  }

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://halalcities.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": city.name,
        "item": `https://halalcities.com/city/${city.slug}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Halal Restaurants",
        "item": `https://halalcities.com/city/${city.slug}/halal-restaurants`,
      },
    ],
  }

  // FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many halal restaurants are in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `There are ${city.stats.halalRestaurants}+ halal restaurants in ${city.name}, ${city.country}. This includes certified halal restaurants, Muslim-owned establishments, and restaurants serving halal options.`,
        },
      },
      {
        "@type": "Question",
        "name": `Is halal food easy to find in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": city.scores.food >= 70
            ? `Yes, halal food is readily available in ${city.name} with a food score of ${city.scores.food}/100. The city has a strong halal food scene with many certified restaurants.`
            : city.scores.food >= 40
            ? `Halal food is moderately available in ${city.name} with a food score of ${city.scores.food}/100. You can find halal options but may need to do some research.`
            : `Halal food options are limited in ${city.name} with a food score of ${city.scores.food}/100. We recommend researching restaurants in advance.`,
        },
      },
      {
        "@type": "Question",
        "name": `What types of halal cuisine are available in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": cuisineTypes.length > 0
            ? `${city.name} offers diverse halal cuisine options including ${cuisineTypes.join(", ")}. Many restaurants offer both local and international halal dishes.`
            : `${city.name} offers various halal cuisine options including local dishes and international food. Check individual restaurant listings for specific cuisine types.`,
        },
      },
      {
        "@type": "Question",
        "name": `Are there halal meat shops in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.foodAndDining.halalMeatShops
            ? `Yes, there are ${ext.foodAndDining.halalMeatShops} halal meat shops in ${city.name} where you can purchase fresh halal meat and groceries.`
            : `Yes, there are halal meat shops available in ${city.name}. Look for shops in Muslim-friendly neighborhoods.`,
        },
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <div className="relative h-72 md:h-80 w-full">
          <Image
            src={city.primaryImage}
            alt={`Halal restaurants in ${city.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Breadcrumbs */}
          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white transition-colors">
                  {city.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Halal Restaurants</span>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="w-6 h-6 text-orange-400" />
                    <span className="text-orange-400 font-medium">Halal Food Guide</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    Best Halal Restaurants in {city.name}, {city.country} ({currentYear})
                  </h1>
                  <p className="text-lg text-white/90 max-w-2xl">
                    Discover {city.stats.halalRestaurants}+ halal restaurants, certified halal food, and Muslim-friendly dining options in {city.name}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-white dark:bg-gray-800 border-b border-[var(--border)] sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 overflow-x-auto">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold text-[var(--foreground)]">{city.stats.halalRestaurants}+</span>
                  <span className="text-[var(--foreground-muted)]">Restaurants</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-[var(--foreground)]">{avgRating}</span>
                  <span className="text-[var(--foreground-muted)]">Avg Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="font-semibold text-[var(--foreground)]">{city.scores.food}/100</span>
                  <span className="text-[var(--foreground-muted)]">Food Score</span>
                </div>
                {ext?.foodAndDining.halalMeatShops && (
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-purple-500" />
                    <span className="font-semibold text-[var(--foreground)]">{ext.foodAndDining.halalMeatShops}</span>
                    <span className="text-[var(--foreground-muted)]">Meat Shops</span>
                  </div>
                )}
              </div>
              <Link
                href={`/city/${city.slug}`}
                className="text-sm text-[var(--primary)] hover:underline whitespace-nowrap"
              >
                View City Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Halal Dining in {city.name}
                </h2>
                <p className="text-[var(--foreground-secondary)] mb-4">
                  {city.name} offers a {city.scores.food >= 70 ? "vibrant and diverse" : city.scores.food >= 40 ? "growing" : "developing"} halal food scene
                  with {city.stats.halalRestaurants}+ restaurants serving Muslim-friendly meals.
                  {city.scores.muslimPopulationPercent >= 50
                    ? ` As a city with ${city.scores.muslimPopulationPercent}% Muslim population, halal food is widely available throughout ${city.name}.`
                    : city.scores.muslimPopulationPercent >= 10
                    ? ` With a ${city.scores.muslimPopulationPercent}% Muslim population, you'll find halal options in most areas of ${city.name}.`
                    : ` While the Muslim population is ${city.scores.muslimPopulationPercent}%, the city has dedicated halal restaurants and shops catering to Muslim residents and visitors.`}
                </p>

                {ext?.foodAndDining.favouriteRestaurants && ext.foodAndDining.favouriteRestaurants.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-[var(--foreground)] mb-2">Popular Halal Restaurants</h3>
                    <div className="flex flex-wrap gap-2">
                      {ext.foodAndDining.favouriteRestaurants.map((restaurant, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-sm rounded-full"
                        >
                          {restaurant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <Utensils className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {city.stats.halalRestaurants}+
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Halal Restaurants</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {ext?.foodAndDining.halalMeatShops || "50+"}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Halal Meat Shops</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {city.scores.food}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Food Score</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {city.scores.muslimPopulationPercent}%
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Muslim Population</p>
                </div>
              </section>

              {/* Interactive Map */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Halal Restaurants Map
                </h2>
                <HalalRestaurantsMapModern
                  cityName={city.name}
                  latitude={city.coordinates.lat}
                  longitude={city.coordinates.lng}
                  restaurants={restaurants.map(r => ({
                    id: r.id,
                    name: r.name,
                    address: r.address,
                    cuisine: r.cuisine,
                    rating: r.rating,
                    priceRange: r.priceLevel === 1 ? '$' : r.priceLevel === 2 ? '$$' : r.priceLevel === 3 ? '$$$' : '$$$$',
                    isVerified: r.certifications.some(c => c.toLowerCase().includes('certified'))
                  }))}
                />
              </section>

              {/* Cuisine Categories */}
              {cuisineTypes.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Halal Cuisine Types in {city.name}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {cuisineTypes.map((cuisine, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <span className="font-medium text-[var(--foreground)]">{cuisine}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Restaurant Listings */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[var(--foreground)]">
                    Featured Halal Restaurants
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--background-secondary)] transition-colors">
                      <Filter className="w-4 h-4 text-[var(--foreground-muted)]" />
                    </button>
                    <button className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--background-secondary)] transition-colors">
                      <Search className="w-4 h-4 text-[var(--foreground-muted)]" />
                    </button>
                  </div>
                </div>

                {restaurants.length > 0 ? (
                  <div className="space-y-4">
                    {restaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-[var(--border)]">
                    <Utensils className="w-12 h-12 text-[var(--foreground-muted)] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                      Restaurant Listings Coming Soon
                    </h3>
                    <p className="text-[var(--foreground-secondary)] mb-4">
                      We&apos;re adding detailed restaurant listings for {city.name}. In the meantime, there are {city.stats.halalRestaurants}+ halal restaurants in this city.
                    </p>
                    {ext?.foodAndDining.tripAdvisorUrl && (
                      <a
                        href={ext.foodAndDining.tripAdvisorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
                      >
                        View on TripAdvisor
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </section>

              {/* Tips Section */}
              <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-100 dark:border-orange-800">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Tips for Finding Halal Food in {city.name}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Look for halal certification displayed at the entrance or ask staff about halal options
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {ext?.demographics.areas && ext.demographics.areas.length > 0
                        ? `Visit Muslim-friendly neighborhoods like ${ext.demographics.areas.slice(0, 3).map(a => a.name).join(", ")} for more halal options`
                        : "Visit areas with higher Muslim populations for more halal restaurant options"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {city.scores.muslimPopulationPercent >= 50
                        ? "Most restaurants in the city serve halal food by default"
                        : "Use apps like Zabihah or HalalTrip to find certified halal restaurants"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Middle Eastern, Turkish, Pakistani, and Indonesian restaurants typically serve halal food
                    </span>
                  </li>
                </ul>
              </section>

              {/* FAQ Section */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium text-[var(--foreground)]">
                        How many halal restaurants are in {city.name}?
                      </span>
                      <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)] transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      There are {city.stats.halalRestaurants}+ halal restaurants in {city.name}, {city.country}. This includes certified halal restaurants, Muslim-owned establishments, and restaurants serving halal options.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium text-[var(--foreground)]">
                        Is halal food easy to find in {city.name}?
                      </span>
                      <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)] transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {city.scores.food >= 70
                        ? `Yes, halal food is readily available in ${city.name} with a food score of ${city.scores.food}/100. The city has a strong halal food scene with many certified restaurants.`
                        : city.scores.food >= 40
                        ? `Halal food is moderately available in ${city.name} with a food score of ${city.scores.food}/100. You can find halal options but may need to do some research.`
                        : `Halal food options are limited in ${city.name} with a food score of ${city.scores.food}/100. We recommend researching restaurants in advance.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium text-[var(--foreground)]">
                        Are there halal meat shops in {city.name}?
                      </span>
                      <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)] transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.foodAndDining.halalMeatShops
                        ? `Yes, there are ${ext.foodAndDining.halalMeatShops} halal meat shops in ${city.name} where you can purchase fresh halal meat and groceries.`
                        : `Yes, there are halal meat shops available in ${city.name}. Look for shops in Muslim-friendly neighborhoods.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium text-[var(--foreground)]">
                        What types of halal cuisine are available?
                      </span>
                      <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)] transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {cuisineTypes.length > 0
                        ? `${city.name} offers diverse halal cuisine options including ${cuisineTypes.join(", ")}. Many restaurants offer both local and international halal dishes.`
                        : `${city.name} offers various halal cuisine options including local dishes and international food. Check individual restaurant listings for specific cuisine types.`}
                    </div>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)] sticky top-32">
                <h3 className="font-bold text-[var(--foreground)] mb-4">
                  Explore {city.name}
                </h3>
                <nav className="space-y-2">
                  <Link
                    href={`/city/${city.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-[var(--foreground)]">City Overview</span>
                  </Link>
                  <Link
                    href={`/city/${city.slug}/mosques`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <Building2 className="w-5 h-5 text-green-600" />
                    <span className="text-[var(--foreground)]">Mosques ({city.stats.mosques}+)</span>
                  </Link>
                  <Link
                    href={`/city/${city.slug}/prayer-times`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-[var(--foreground)]">Prayer Times</span>
                  </Link>
                  <Link
                    href={`/city/${city.slug}/islamic-schools`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span className="text-[var(--foreground)]">Islamic Schools</span>
                  </Link>
                  <Link
                    href={`/city/${city.slug}/muslim-community`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-[var(--foreground)]">Muslim Community</span>
                  </Link>
                  <Link
                    href={`/city/${city.slug}/halal-hotels`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  >
                    <Building2 className="w-5 h-5 text-amber-600" />
                    <span className="text-[var(--foreground)]">Halal Hotels ({city.features.halalHotels}+)</span>
                  </Link>
                </nav>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">
                    Halal Food in Nearby Cities
                  </h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/halal-restaurants`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                      >
                        <div>
                          <p className="font-medium text-[var(--foreground)]">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">
                            {nearbyCity.stats.halalRestaurants}+ restaurants
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* City Scores */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h3 className="font-bold text-[var(--foreground)] mb-4">
                  {city.name} Scores
                </h3>
                <div className="space-y-3">
                  <ScoreBar label="Halal Score" score={city.scores.halal} color="green" />
                  <ScoreBar label="Food Score" score={city.scores.food} color="orange" />
                  <ScoreBar label="Safety" score={city.scores.safety} color="blue" />
                  <ScoreBar label="Community" score={city.scores.community} color="purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Helper component for score bars
function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  const colorClasses = {
    green: "bg-green-500",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
  }

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[var(--foreground-muted)]">{label}</span>
        <span className="font-medium text-[var(--foreground)]">{score}/100</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}
