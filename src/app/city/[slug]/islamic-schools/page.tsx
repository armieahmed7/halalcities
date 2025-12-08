import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import {
  GraduationCap,
  MapPin,
  ChevronRight,
  Users,
  Building2,
  BookOpen,
  Utensils,
  Clock,
  Globe,
  Award,
  Heart
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

  const schoolCount = city.features.islamicSchools || city.extended?.religiousInfrastructure.numberOfIslamicSchools || "Multiple"
  const title = `Islamic Schools in ${city.name}, ${city.country} | HalalCities`
  const description = `Find ${schoolCount} Islamic schools in ${city.name}. Quran classes, Islamic education, madrasas, and Muslim schools for children and adults.`

  return {
    title,
    description,
    keywords: [
      `islamic schools ${city.name}`,
      `muslim schools ${city.name}`,
      `quran classes ${city.name}`,
      `madrasa ${city.name}`,
      `islamic education ${city.name}`,
      `${city.name} islamic schools`,
      `islamic schools ${city.country}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/islamic-schools`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [{ url: city.primaryImage, width: 1200, height: 630, alt: `Islamic schools in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [city.primaryImage] },
    alternates: { canonical: `https://halalcities.com/city/${city.slug}/islamic-schools` },
    robots: { index: true, follow: true },
  }
}

export default async function IslamicSchoolsPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const ext = city.extended
  const schoolCount = ext?.religiousInfrastructure.numberOfIslamicSchools || `${city.features.islamicSchools}+`
  const schoolNames = ext?.religiousInfrastructure.islamicSchoolNames || []

  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Islamic Schools in ${city.name}`,
    "description": `Islamic schools and Quran classes in ${city.name}, ${city.country}`,
    "numberOfItems": city.features.islamicSchools,
    "itemListElement": schoolNames.slice(0, 10).map((school, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "EducationalOrganization",
        "name": school,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressCountry": city.country,
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
      { "@type": "ListItem", "position": 3, "name": "Islamic Schools", "item": `https://halalcities.com/city/${city.slug}/islamic-schools` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many Islamic schools are in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `There are ${schoolCount} Islamic schools in ${city.name}, ${city.country}, offering various levels of Islamic education.`,
        },
      },
      {
        "@type": "Question",
        "name": `What types of Islamic education are available in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${city.name} offers various Islamic education options including Quran memorization (Hifz), Islamic studies, Arabic language classes, and full-time Islamic schools for children.`,
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
          <Image src={city.primaryImage} alt={`Islamic schools in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white">{city.name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Islamic Schools</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <span className="text-purple-400 font-medium">Islamic Education</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Islamic Schools in {city.name}, {city.country}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Find {schoolCount} Islamic schools, Quran classes, and Islamic education centers in {city.name}.
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
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold">{schoolCount}</span>
                  <span className="text-[var(--foreground-muted)]">Islamic Schools</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{city.stats.mosques}+</span>
                  <span className="text-[var(--foreground-muted)]">Mosques</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-blue-500" />
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
              {/* Introduction */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Islamic Education in {city.name}
                </h2>
                <p className="text-[var(--foreground-secondary)] mb-4">
                  {city.name} offers {city.scores.muslimPopulationPercent >= 50
                    ? "a wide range of Islamic education options due to its large Muslim population."
                    : city.scores.muslimPopulationPercent >= 10
                    ? "several Islamic education options for the local Muslim community."
                    : "Islamic education options for Muslim families living in or visiting the city."}
                  {" "}With {schoolCount} Islamic schools, families can find suitable options for Quran education, Islamic studies, and Muslim-friendly schooling.
                </p>
                <p className="text-[var(--foreground-secondary)]">
                  The city has {city.stats.mosques}+ mosques, many of which offer weekend classes, Quran memorization programs, and Islamic lectures.
                </p>
              </section>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <GraduationCap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">{schoolCount}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Islamic Schools</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <Building2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">{city.stats.mosques}+</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Mosques with Classes</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">{city.scores.muslimPopulationPercent}%</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Muslim Population</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <Heart className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600">{city.scores.community}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">Community Score</p>
                </div>
              </section>

              {/* Types of Islamic Education */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Types of Islamic Education Available
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Quran Memorization (Hifz)</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Full-time and part-time Quran memorization programs for students of all ages.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-purple-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Islamic Studies</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Comprehensive Islamic education covering fiqh, hadith, seerah, and more.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Arabic Language</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Classical and modern Arabic language courses for beginners to advanced.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--background-secondary)] rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-orange-600" />
                      <h3 className="font-semibold text-[var(--foreground)]">Full-Time Islamic Schools</h3>
                    </div>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Complete K-12 education with Islamic curriculum and values integration.
                    </p>
                  </div>
                </div>
              </section>

              {/* School Names if available */}
              {schoolNames.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Islamic Schools in {city.name}
                  </h2>
                  <div className="space-y-3">
                    {schoolNames.map((school, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[var(--background-secondary)] rounded-lg">
                        <GraduationCap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--foreground)]">{school}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Local Organizations */}
              {ext?.religiousInfrastructure.localOrganizations && ext.religiousInfrastructure.localOrganizations.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Islamic Organizations in {city.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {ext.religiousInfrastructure.localOrganizations.map((org, i) => (
                      <span key={i} className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        {org}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Tips Section */}
              <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Finding Islamic Education in {city.name}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Contact local mosques - many offer weekend Islamic classes and Quran courses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {ext?.demographics.areas && ext.demographics.areas.length > 0
                        ? `Check Muslim-friendly neighborhoods like ${ext.demographics.areas.slice(0, 2).map(a => a.name).join(", ")} for nearby Islamic schools`
                        : "Look for Islamic schools in areas with higher Muslim populations"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Online Islamic education is also available for those who cannot attend in person
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
                      <span className="font-medium">How many Islamic schools are in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      There are {schoolCount} Islamic schools in {city.name}, {city.country}, offering various levels of Islamic education from Quran classes to full-time schooling.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">What types of Islamic education are available?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {city.name} offers Quran memorization (Hifz) programs, Islamic studies classes, Arabic language courses, and full-time Islamic schools for children. Many mosques also offer weekend classes.
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Are there Quran classes for adults?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      Yes, many mosques and Islamic centers in {city.name} offer Quran classes for adults, including Tajweed (proper recitation) and Quran memorization programs.
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

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Islamic Schools Nearby</h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/islamic-schools`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)]"
                      >
                        <div>
                          <p className="font-medium">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{nearbyCity.features.islamicSchools}+ schools</p>
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
