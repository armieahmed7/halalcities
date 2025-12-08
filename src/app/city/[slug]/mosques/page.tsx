import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import { mosquesByCity } from "@/data/mosques"
import { MosqueCard } from "@/components/city/mosque-card"
import { LocationMap } from "@/components/city/location-map"
import { QiblaCompass } from "@/components/city/qibla-compass"
import { PrayerTimesWidget } from "@/components/city/prayer-times-widget"
import {
  Building2,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  Compass,
  Car,
  Accessibility,
  BookOpen,
  Utensils,
  Moon
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

  const currentYear = new Date().getFullYear()
  const mosqueCount = city.stats.mosques
  const title = `Mosques in ${city.name}: Complete Masjid Guide (${currentYear}) | HalalCities`
  const description = `Find ${mosqueCount}+ mosques in ${city.name}, ${city.country}. Jummah prayer times, women's sections, parking info, and complete masjid directory.`

  return {
    title,
    description,
    keywords: [
      `mosques in ${city.name}`,
      `masjid ${city.name}`,
      `jummah prayer ${city.name}`,
      `prayer rooms ${city.name}`,
      `islamic centers ${city.name}`,
      `${city.name} mosques`,
      `friday prayer ${city.name}`,
      `muslim prayer ${city.name}`,
      `mosques ${city.country}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/mosques`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [{ url: city.primaryImage, width: 1200, height: 630, alt: `Mosques in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [city.primaryImage] },
    alternates: { canonical: `https://halalcities.com/city/${city.slug}/mosques` },
    robots: { index: true, follow: true },
  }
}

export default async function MosquesPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const mosques = mosquesByCity[city.slug] || []
  const ext = city.extended
  const currentYear = new Date().getFullYear()

  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Mosques in ${city.name}`,
    "description": `Complete guide to mosques and prayer facilities in ${city.name}, ${city.country}`,
    "numberOfItems": city.stats.mosques,
    "itemListElement": mosques.slice(0, 10).map((mosque, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Mosque",
        "name": mosque.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": mosque.address,
          "addressLocality": city.name,
          "addressCountry": city.country,
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": mosque.coordinates.lat,
          "longitude": mosque.coordinates.lng,
        },
      },
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://halalcities.com" },
      { "@type": "ListItem", "position": 2, "name": city.name, "item": `https://halalcities.com/city/${city.slug}` },
      { "@type": "ListItem", "position": 3, "name": "Mosques", "item": `https://halalcities.com/city/${city.slug}/mosques` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many mosques are in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `There are ${city.stats.mosques}+ mosques in ${city.name}, ${city.country}, including large jama masjids, neighborhood mosques, and prayer rooms.`,
        },
      },
      {
        "@type": "Question",
        "name": `What is the Qibla direction in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.religiousInfrastructure.qiblahDirection
            ? `The Qibla direction in ${city.name} is ${ext.religiousInfrastructure.qiblahDirection}.`
            : `The Qibla direction in ${city.name} can be determined using our Qibla compass tool on this page.`,
        },
      },
      {
        "@type": "Question",
        "name": `What time is Jummah prayer in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Jummah prayer times vary by mosque in ${city.name}. Most mosques hold Jummah around 12:30-1:30 PM. Check individual mosque listings for exact times.`,
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
          <Image src={city.primaryImage} alt={`Mosques in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white">{city.name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Mosques</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-medium">Mosque Directory</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Mosques in {city.name}: Complete Masjid Guide ({currentYear})
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Find {city.stats.mosques}+ mosques in {city.name}. Jummah times, prayer facilities, and community information.
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
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{city.stats.mosques}+</span>
                  <span className="text-[var(--foreground-muted)]">Mosques</span>
                </div>
                {ext?.religiousInfrastructure.numberOfIslamicSchools && (
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold">{ext.religiousInfrastructure.numberOfIslamicSchools}</span>
                    <span className="text-[var(--foreground-muted)]">Islamic Schools</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold">{city.scores.muslimPopulationPercent}%</span>
                  <span className="text-[var(--foreground-muted)]">Muslim Pop.</span>
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
              {/* Prayer Times Widget */}
              <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-[var(--border)] overflow-hidden">
                <PrayerTimesWidget
                  latitude={city.coordinates.lat}
                  longitude={city.coordinates.lng}
                  cityName={city.name}
                  variant="full"
                />
              </section>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <Building2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">{city.stats.mosques}+</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Total Mosques</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">
                    {ext?.religiousInfrastructure.numberOfIslamicSchools || city.features.islamicSchools}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Islamic Schools</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">{city.scores.muslimPopulationPercent}%</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Muslim Population</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <Compass className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-orange-600">
                    {ext?.religiousInfrastructure.qiblahDirection?.split(" ")[0] || "View"}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">Qibla Direction</p>
                </div>
              </section>

              {/* Qibla Compass */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-orange-500" />
                  Qibla Direction in {city.name}
                </h2>
                <QiblaCompass latitude={city.coordinates.lat} longitude={city.coordinates.lng} />
              </section>

              {/* Map */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-500" />
                  Mosques Map
                </h2>
                <LocationMap
                  cityName={city.name}
                  cityCoordinates={city.coordinates}
                  mosques={mosques}
                  restaurants={[]}
                  activeFilter="mosques"
                />
              </section>

              {/* Popular Mosques for Jummah */}
              {ext?.religiousInfrastructure.mosquesForJumah && ext.religiousInfrastructure.mosquesForJumah.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Popular Mosques for Jummah Prayer
                  </h2>
                  <ul className="space-y-3">
                    {ext.religiousInfrastructure.mosquesForJumah.map((mosque, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                        <Building2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--foreground)]">{mosque}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Mosque Features */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Mosque Features to Look For
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-[var(--foreground)]">Women&apos;s Section</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <Car className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-[var(--foreground)]">Parking Available</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <Accessibility className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-[var(--foreground)]">Wheelchair Access</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <BookOpen className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-[var(--foreground)]">Islamic Classes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm text-[var(--foreground)]">Ablution Facilities</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-[var(--foreground)]">Jummah Prayer</span>
                  </div>
                </div>
              </section>

              {/* Mosque Listings */}
              <section>
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                  Featured Mosques in {city.name}
                </h2>

                {mosques.length > 0 ? (
                  <div className="space-y-4">
                    {mosques.map((mosque) => (
                      <MosqueCard key={mosque.id} mosque={mosque} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-[var(--border)]">
                    <Building2 className="w-12 h-12 text-[var(--foreground-muted)] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                      Mosque Listings Coming Soon
                    </h3>
                    <p className="text-[var(--foreground-secondary)]">
                      We&apos;re adding detailed mosque listings for {city.name}. There are {city.stats.mosques}+ mosques in this city.
                    </p>
                  </div>
                )}
              </section>

              {/* FAQ Section */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">How many mosques are in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      There are {city.stats.mosques}+ mosques in {city.name}, {city.country}, including large jama masjids, neighborhood mosques, and prayer rooms.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What is the Qibla direction in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.religiousInfrastructure.qiblahDirection
                        ? `The Qibla direction in ${city.name} is ${ext.religiousInfrastructure.qiblahDirection}.`
                        : `Use our Qibla compass above to find the exact direction to Mecca from ${city.name}.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What time is Jummah prayer in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Jummah prayer times vary by mosque in {city.name}. Most mosques hold Jummah around 12:30-1:30 PM local time. Check individual mosque listings for exact times.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Are there mosques with women&apos;s sections?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Yes, many mosques in {city.name} have dedicated women&apos;s prayer sections. Look for the &quot;Women&apos;s Section&quot; feature in our mosque listings.
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
                  <Link href={`/city/${city.slug}/halal-restaurants`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Utensils className="w-5 h-5 text-orange-600" />
                    <span>Halal Restaurants ({city.stats.halalRestaurants}+)</span>
                  </Link>
                  <Link href={`/city/${city.slug}/prayer-times`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Prayer Times</span>
                  </Link>
                  <Link href={`/city/${city.slug}/islamic-schools`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <span>Islamic Schools</span>
                  </Link>
                  <Link href={`/city/${city.slug}/muslim-community`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Muslim Community</span>
                  </Link>
                </nav>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Mosques in Nearby Cities</h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/mosques`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)]"
                      >
                        <div>
                          <p className="font-medium">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{nearbyCity.stats.mosques}+ mosques</p>
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
