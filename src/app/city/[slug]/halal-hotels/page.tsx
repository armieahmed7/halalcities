import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import {
  Hotel,
  MapPin,
  ChevronRight,
  Building2,
  Utensils,
  Clock,
  Users,
  Plane,
  CheckCircle2,
  Coffee,
  Droplets,
  Star
} from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    return { title: "City Not Found | HalalCities" }
  }

  const hotelCount = city.features.halalHotels || "Multiple"
  const title = `Muslim-Friendly Hotels in ${city.name} with Halal Options | HalalCities`
  const description = `Find ${hotelCount} Muslim-friendly hotels in ${city.name}, ${city.country}. Hotels with halal breakfast, prayer facilities, bidet, and near mosques.`

  return {
    title,
    description,
    keywords: [
      `halal hotels ${city.name}`,
      `muslim friendly hotels ${city.name}`,
      `hotels with halal food ${city.name}`,
      `${city.name} halal hotels`,
      `islamic hotels ${city.name}`,
      `halal accommodation ${city.name}`,
      `hotels near mosque ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/halal-hotels`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [{ url: city.primaryImage, width: 1200, height: 630, alt: `Halal hotels in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [city.primaryImage] },
    alternates: { canonical: `https://halalcities.com/city/${city.slug}/halal-hotels` },
    robots: { index: true, follow: true },
  }
}

export default async function HalalHotelsPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const ext = city.extended
  const hotelCount = city.features.halalHotels

  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Muslim-Friendly Hotels in ${city.name}`,
    "description": `Hotels with halal options and Muslim-friendly amenities in ${city.name}, ${city.country}`,
    "numberOfItems": hotelCount,
    "itemListElement": ext?.hotels.withHalalBreakfast.slice(0, 5).map((hotel, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Hotel",
        "name": hotel,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressCountry": city.country,
        },
      },
    })) || [],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://halalcities.com" },
      { "@type": "ListItem", "position": 2, "name": city.name, "item": `https://halalcities.com/city/${city.slug}` },
      { "@type": "ListItem", "position": 3, "name": "Halal Hotels", "item": `https://halalcities.com/city/${city.slug}/halal-hotels` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are there halal-friendly hotels in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": hotelCount > 0
            ? `Yes, there are ${hotelCount}+ Muslim-friendly hotels in ${city.name} offering halal breakfast, prayer facilities, and other amenities for Muslim travelers.`
            : `${city.name} has several hotels that can accommodate Muslim travelers. Look for hotels near mosques and halal restaurants.`,
        },
      },
      {
        "@type": "Question",
        "name": `Do hotels in ${city.name} serve halal breakfast?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.hotels.withHalalBreakfast && ext.hotels.withHalalBreakfast.length > 0
            ? `Yes, several hotels in ${city.name} serve halal breakfast including ${ext.hotels.withHalalBreakfast.slice(0, 3).join(", ")}.`
            : `Many hotels in ${city.name} can arrange halal breakfast upon request. It's best to confirm when booking.`,
        },
      },
      {
        "@type": "Question",
        "name": `Does ${city.name} airport have prayer rooms?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.airport.hasPrayerRoom
            ? `Yes, ${city.name} airport has prayer facilities. ${ext.airport.prayerRoomDetails || "Prayer rooms are available for travelers."}`
            : `Please check with the airport directly about prayer room availability.`,
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-[var(--background)]">
        {/* Hero Section */}
        <div className="relative h-72 md:h-80 w-full">
          <Image src={city.primaryImage} alt={`Halal hotels in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white">{city.name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Halal Hotels</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Hotel className="w-6 h-6 text-amber-400" />
                <span className="text-amber-400 font-medium">Accommodation Guide</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Muslim-Friendly Hotels in {city.name} with Halal Options
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Find {hotelCount > 0 ? `${hotelCount}+` : ""} hotels with halal breakfast, prayer facilities, and Muslim-friendly amenities in {city.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-white dark:bg-gray-800 border-b border-[var(--border)] sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 overflow-x-auto">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2 text-sm">
                  <Hotel className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold">{hotelCount || "Multiple"}</span>
                  <span className="text-[var(--foreground-muted)]">Halal Hotels</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{city.stats.mosques}+</span>
                  <span className="text-[var(--foreground-muted)]">Mosques</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Plane className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold">{ext?.airport.hasPrayerRoom ? "Yes" : "Check"}</span>
                  <span className="text-[var(--foreground-muted)]">Airport Prayer Room</span>
                </div>
              </div>
              <Link href={`/city/${city.slug}`} className="text-sm text-[var(--primary)] hover:underline whitespace-nowrap">
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
                  Finding Muslim-Friendly Hotels in {city.name}
                </h2>
                <p className="text-[var(--foreground-secondary)] mb-4">
                  {city.name} offers {hotelCount > 0 ? `${hotelCount}+` : "various"} hotels that cater to Muslim travelers.
                  {city.scores.muslimPopulationPercent >= 50
                    ? " As a Muslim-majority destination, most hotels accommodate halal requirements by default."
                    : city.scores.muslimPopulationPercent >= 10
                    ? " Many hotels offer halal food options and can accommodate Muslim guests' needs upon request."
                    : " While not all hotels may have halal options by default, many can arrange for Muslim guests' needs with advance notice."}
                </p>
                <p className="text-[var(--foreground-secondary)]">
                  When booking, look for hotels near mosques for convenient prayer access, and confirm halal breakfast availability.
                </p>
              </section>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center">
                  <Hotel className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-amber-600">{hotelCount || "50+"}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Halal Hotels</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <Building2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">{city.stats.mosques}+</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Nearby Mosques</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600">{city.stats.halalRestaurants}+</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Halal Restaurants</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">{city.scores.halal}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Halal Score</p>
                </div>
              </section>

              {/* What to Look For */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Muslim-Friendly Hotel Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[var(--background-secondary)] rounded-lg">
                    <Coffee className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Halal Breakfast</h3>
                      <p className="text-sm text-[var(--foreground-secondary)]">Hotels offering halal-certified breakfast options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[var(--background-secondary)] rounded-lg">
                    <Droplets className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Bidet/Shattaf</h3>
                      <p className="text-sm text-[var(--foreground-secondary)]">Rooms equipped with bidet or handheld shattaf</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[var(--background-secondary)] rounded-lg">
                    <Building2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Near Mosque</h3>
                      <p className="text-sm text-[var(--foreground-secondary)]">Located within walking distance to a mosque</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[var(--background-secondary)] rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">Prayer Facilities</h3>
                      <p className="text-sm text-[var(--foreground-secondary)]">In-hotel prayer room or prayer mat available</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Hotels with Halal Breakfast */}
              {ext?.hotels.withHalalBreakfast && ext.hotels.withHalalBreakfast.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-amber-500" />
                    Hotels with Halal Breakfast
                  </h2>
                  <div className="space-y-3">
                    {ext.hotels.withHalalBreakfast.map((hotel, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                        <Hotel className="w-5 h-5 text-amber-600" />
                        <span className="text-[var(--foreground)]">{hotel}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Hotels with Bidet */}
              {ext?.hotels.withBidet && ext.hotels.withBidet.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    Hotels with Bidet/Shattaf
                  </h2>
                  <div className="space-y-3">
                    {ext.hotels.withBidet.map((hotel, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Hotel className="w-5 h-5 text-blue-600" />
                        <span className="text-[var(--foreground)]">{hotel}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Airport Info */}
              {ext?.airport && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5 text-blue-500" />
                    Airport Prayer Facilities
                  </h2>
                  <div className={`p-4 rounded-lg ${ext.airport.hasPrayerRoom ? "bg-green-50 dark:bg-green-900/20" : "bg-gray-50 dark:bg-gray-700"}`}>
                    <div className="flex items-center gap-3">
                      {ext.airport.hasPrayerRoom ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <Plane className="w-6 h-6 text-gray-400" />
                      )}
                      <div>
                        <p className="font-semibold text-[var(--foreground)]">
                          {ext.airport.hasPrayerRoom ? "Prayer Room Available" : "Check with Airport"}
                        </p>
                        {ext.airport.prayerRoomDetails && (
                          <p className="text-sm text-[var(--foreground-secondary)]">{ext.airport.prayerRoomDetails}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Booking Tips */}
              <section className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-100 dark:border-amber-800">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Tips for Booking Muslim-Friendly Hotels
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Contact the hotel in advance to confirm halal breakfast options and prayer facilities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {ext?.demographics.areas && ext.demographics.areas.length > 0
                        ? `Book hotels in Muslim-friendly areas like ${ext.demographics.areas[0].name} for easier access to mosques and halal food`
                        : "Look for hotels near mosques or in areas with halal restaurants nearby"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Request a room with Qibla direction marked or use our <Link href={`/city/${city.slug}/prayer-times`} className="text-[var(--primary)] hover:underline">prayer times page</Link> for Qibla compass
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Use apps like HalalBooking or filter for &quot;Muslim-friendly&quot; on major booking sites
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
                      <span className="font-medium">Are there halal-friendly hotels in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {hotelCount > 0
                        ? `Yes, there are ${hotelCount}+ Muslim-friendly hotels in ${city.name} offering halal options, prayer facilities, and other amenities.`
                        : `${city.name} has several hotels that can accommodate Muslim travelers. Contact hotels directly to confirm halal options.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Do hotels in {city.name} serve halal breakfast?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.hotels.withHalalBreakfast && ext.hotels.withHalalBreakfast.length > 0
                        ? `Yes, several hotels serve halal breakfast including ${ext.hotels.withHalalBreakfast.slice(0, 3).join(", ")}. See our list above.`
                        : `Many hotels can arrange halal breakfast upon request. Confirm availability when booking.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Does {city.name} airport have prayer rooms?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.airport.hasPrayerRoom
                        ? `Yes, ${city.name} airport has prayer facilities. ${ext.airport.prayerRoomDetails || ""}`
                        : `Please check with the airport directly about prayer room availability.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">How much does a hotel cost in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.costOfLiving.hotelNight
                        ? `Average hotel rates in ${city.name} start from around $${ext.costOfLiving.hotelNight} per night. Muslim-friendly hotels with additional amenities may cost more.`
                        : `Hotel prices vary in ${city.name}. The city has a cost score of ${city.scores.cost}/100. Check booking sites for current rates.`}
                    </div>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Navigation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)] sticky top-32">
                <h3 className="font-bold text-[var(--foreground)] mb-4">Explore {city.name}</h3>
                <nav className="space-y-2">
                  <Link href={`/city/${city.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                    <span>City Overview</span>
                  </Link>
                  <Link href={`/city/${city.slug}/mosques`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Building2 className="w-5 h-5 text-green-600" />
                    <span>Mosques ({city.stats.mosques}+)</span>
                  </Link>
                  <Link href={`/city/${city.slug}/halal-restaurants`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Utensils className="w-5 h-5 text-orange-600" />
                    <span>Halal Restaurants</span>
                  </Link>
                  <Link href={`/city/${city.slug}/prayer-times`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Prayer Times</span>
                  </Link>
                  <Link href={`/city/${city.slug}/muslim-community`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Muslim Community</span>
                  </Link>
                </nav>
              </div>

              {/* Cost Info */}
              {ext?.costOfLiving && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Accommodation Costs</h3>
                  <div className="space-y-3">
                    {ext.costOfLiving.hotelNight && (
                      <div className="flex justify-between items-center p-3 bg-[var(--background-secondary)] rounded-lg">
                        <span className="text-[var(--foreground-muted)]">Hotel/Night</span>
                        <span className="font-semibold">${ext.costOfLiving.hotelNight}</span>
                      </div>
                    )}
                    {ext.costOfLiving.hostelNight && (
                      <div className="flex justify-between items-center p-3 bg-[var(--background-secondary)] rounded-lg">
                        <span className="text-[var(--foreground-muted)]">Hostel/Night</span>
                        <span className="font-semibold">${ext.costOfLiving.hostelNight}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-3 bg-[var(--background-secondary)] rounded-lg">
                      <span className="text-[var(--foreground-muted)]">Monthly Budget</span>
                      <span className="font-semibold">${city.stats.monthlyBudget}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Halal Hotels Nearby</h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/halal-hotels`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)]"
                      >
                        <div>
                          <p className="font-medium">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{nearbyCity.features.halalHotels || "Multiple"} hotels</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
