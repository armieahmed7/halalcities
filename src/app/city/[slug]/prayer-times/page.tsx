import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import { PrayerTimesWidget } from "@/components/city/prayer-times-widget"
import { QiblaCompass } from "@/components/city/qibla-compass"
import { RamadanGuide } from "@/components/city/ramadan-guide"
import {
  Clock,
  MapPin,
  ChevronRight,
  Building2,
  Utensils,
  Users,
  Compass,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar
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

  const title = `Prayer Times in ${city.name} - Salah Schedule Today | HalalCities`
  const description = `Accurate prayer times for ${city.name}, ${city.country}. Daily Fajr, Dhuhr, Asr, Maghrib, Isha times. Qibla direction and Ramadan schedule included.`

  return {
    title,
    description,
    keywords: [
      `prayer times ${city.name}`,
      `salah times ${city.name}`,
      `fajr time ${city.name}`,
      `${city.name} prayer times`,
      `namaz time ${city.name}`,
      `isha time ${city.name}`,
      `ramadan times ${city.name}`,
      `qibla direction ${city.name}`,
      `prayer times ${city.country}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/prayer-times`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [{ url: city.primaryImage, width: 1200, height: 630, alt: `Prayer times in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [city.primaryImage] },
    alternates: { canonical: `https://halalcities.com/city/${city.slug}/prayer-times` },
    robots: { index: true, follow: true },
  }
}

export default async function PrayerTimesPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const ext = city.extended

  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Prayer Times in ${city.name}`,
    "description": `Daily prayer times and Qibla direction for ${city.name}, ${city.country}`,
    "about": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "Country",
        "name": city.country,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat,
        "longitude": city.coordinates.lng,
      },
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://halalcities.com" },
      { "@type": "ListItem", "position": 2, "name": city.name, "item": `https://halalcities.com/city/${city.slug}` },
      { "@type": "ListItem", "position": 3, "name": "Prayer Times", "item": `https://halalcities.com/city/${city.slug}/prayer-times` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What time is Fajr in ${city.name} today?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Fajr prayer time in ${city.name} varies throughout the year. Check our live prayer times widget above for today's exact Fajr time.`,
        },
      },
      {
        "@type": "Question",
        "name": `What is the Qibla direction in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.religiousInfrastructure.qiblahDirection
            ? `The Qibla direction in ${city.name} is ${ext.religiousInfrastructure.qiblahDirection}.`
            : `Use our Qibla compass on this page to find the exact direction to Mecca from ${city.name}.`,
        },
      },
      {
        "@type": "Question",
        "name": `What are the fasting hours during Ramadan in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.religiousInfrastructure.fastingHours
            ? `Fasting hours in ${city.name} during Ramadan are approximately ${ext.religiousInfrastructure.fastingHours}. Times vary by date.`
            : `Fasting hours in ${city.name} vary throughout Ramadan. Check our Ramadan guide for specific Suhoor and Iftar times.`,
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
          <Image src={city.primaryImage} alt={`Prayer times in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white">{city.name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Prayer Times</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-medium">Salah Schedule</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Prayer Times in {city.name} - Salah Schedule Today
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Accurate prayer times for {city.name}, {city.country}. Updated daily with Fajr, Dhuhr, Asr, Maghrib, and Isha times.
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
                  <Compass className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold">{ext?.religiousInfrastructure.qiblahDirection?.split(" ")[0] || "View"}</span>
                  <span className="text-[var(--foreground-muted)]">Qibla</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{city.stats.mosques}+</span>
                  <span className="text-[var(--foreground-muted)]">Mosques</span>
                </div>
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

              {/* Prayer Times Guide */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Understanding Prayer Times in {city.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Sunrise className="w-5 h-5 text-indigo-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Fajr (Dawn Prayer)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      The first prayer of the day, performed before sunrise. Time begins at the true dawn.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Sun className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Dhuhr (Noon Prayer)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Midday prayer performed after the sun passes its zenith. Also the time for Friday Jummah.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Sun className="w-5 h-5 text-orange-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Asr (Afternoon Prayer)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Afternoon prayer performed in the late afternoon before sunset.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Sunset className="w-5 h-5 text-red-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Maghrib (Sunset Prayer)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Prayer performed just after sunset. Also the time to break fast during Ramadan.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Moon className="w-5 h-5 text-purple-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Isha (Night Prayer)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      The final prayer of the day, performed after twilight has disappeared and night has begun.
                    </p>
                  </div>
                </div>
              </section>

              {/* Qibla Compass */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-orange-500" />
                  Qibla Direction in {city.name}
                </h2>
                <div className="mb-4">
                  {ext?.religiousInfrastructure.qiblahDirection && (
                    <p className="text-[var(--foreground-secondary)] mb-4">
                      The Qibla direction in {city.name} is <span className="font-semibold text-[var(--foreground)]">{ext.religiousInfrastructure.qiblahDirection}</span> from North.
                    </p>
                  )}
                </div>
                <QiblaCompass latitude={city.coordinates.lat} longitude={city.coordinates.lng} />
              </section>

              {/* Ramadan Guide */}
              <section>
                <RamadanGuide
                  latitude={city.coordinates.lat}
                  longitude={city.coordinates.lng}
                  cityName={city.name}
                  country={city.country}
                />
              </section>

              {/* Fasting Hours Info */}
              {ext?.religiousInfrastructure.fastingHours && (
                <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Ramadan Fasting Hours in {city.name}
                  </h2>
                  <p className="text-[var(--foreground-secondary)]">
                    Approximate fasting hours during Ramadan: <span className="font-semibold text-[var(--foreground)]">{ext.religiousInfrastructure.fastingHours}</span>
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)] mt-2">
                    Note: Fasting hours vary based on the exact date during Ramadan. Check daily times above for accurate schedules.
                  </p>
                </section>
              )}

              {/* FAQ Section */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What time is Fajr in {city.name} today?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Fajr prayer time in {city.name} varies throughout the year based on sunrise. Check our live prayer times widget above for today&apos;s exact Fajr time.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What is the Qibla direction in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.religiousInfrastructure.qiblahDirection
                        ? `The Qibla direction in ${city.name} is ${ext.religiousInfrastructure.qiblahDirection}. Use our compass above for precise direction.`
                        : `Use our Qibla compass on this page to find the exact direction to Mecca from ${city.name}.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">When is Jummah prayer in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Jummah (Friday) prayer in {city.name} is typically held shortly after Dhuhr time. Check our <Link href={`/city/${city.slug}/mosques`} className="text-[var(--primary)] hover:underline">mosques page</Link> for specific Jummah times at different mosques.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What calculation method is used?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Prayer times on this page are calculated using the Islamic Society of North America (ISNA) method. Different mosques may use different calculation methods, so times may vary slightly.
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
                  <Link href={`/city/${city.slug}/islamic-schools`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>Islamic Schools</span>
                  </Link>
                  <Link href={`/city/${city.slug}/muslim-community`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Muslim Community</span>
                  </Link>
                </nav>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Prayer Times Nearby</h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/prayer-times`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)]"
                      >
                        <div>
                          <p className="font-medium">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{nearbyCity.country}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Coordinates Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h3 className="font-bold text-[var(--foreground)] mb-4">Location Data</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Latitude</span>
                    <span className="font-medium">{city.coordinates.lat.toFixed(4)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">Longitude</span>
                    <span className="font-medium">{city.coordinates.lng.toFixed(4)}°</span>
                  </div>
                  {ext?.practicalInfo.timezone && (
                    <div className="flex justify-between">
                      <span className="text-[var(--foreground-muted)]">Timezone</span>
                      <span className="font-medium">{ext.practicalInfo.timezone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
