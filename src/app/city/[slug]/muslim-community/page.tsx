import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cities } from "@/data/cities"
import {
  Users,
  MapPin,
  ChevronRight,
  Building2,
  Utensils,
  Clock,
  Shield,
  Heart,
  Globe,
  Home,
  AlertTriangle,
  CheckCircle2
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

  const title = `Muslim Community in ${city.name}: Neighborhoods & Resources | HalalCities`
  const description = `Connect with the Muslim community in ${city.name}, ${city.country}. Find Muslim neighborhoods, Islamic organizations, community resources, and safety information.`

  return {
    title,
    description,
    keywords: [
      `muslim community ${city.name}`,
      `muslims in ${city.name}`,
      `muslim neighborhoods ${city.name}`,
      `islamic organizations ${city.name}`,
      `muslim expats ${city.name}`,
      `${city.name} muslim community`,
      `muslim population ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://halalcities.com/city/${city.slug}/muslim-community`,
      siteName: "HalalCities",
      locale: "en_US",
      type: "website",
      images: [{ url: city.primaryImage, width: 1200, height: 630, alt: `Muslim community in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [city.primaryImage] },
    alternates: { canonical: `https://halalcities.com/city/${city.slug}/muslim-community` },
    robots: { index: true, follow: true },
  }
}

export default async function MuslimCommunityPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    notFound()
  }

  const ext = city.extended

  const nearbyCities = cities
    .filter(c => c.country === city.country && c.slug !== city.slug)
    .slice(0, 4)

  // Helper function for discrimination score color
  const getDiscriminationColor = (score: number) => {
    if (score <= 3) return "text-green-600 bg-green-50 dark:bg-green-900/20"
    if (score <= 6) return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20"
    return "text-red-600 bg-red-50 dark:bg-red-900/20"
  }

  const getDiscriminationLabel = (score: number) => {
    if (score <= 3) return "Low"
    if (score <= 6) return "Moderate"
    return "High"
  }

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Muslim Community in ${city.name}`,
    "description": `Guide to the Muslim community, neighborhoods, and resources in ${city.name}, ${city.country}`,
    "about": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "Country",
        "name": city.country,
      },
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://halalcities.com" },
      { "@type": "ListItem", "position": 2, "name": city.name, "item": `https://halalcities.com/city/${city.slug}` },
      { "@type": "ListItem", "position": 3, "name": "Muslim Community", "item": `https://halalcities.com/city/${city.slug}/muslim-community` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How many Muslims live in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.demographics.population
            ? `${city.name} has approximately ${ext.demographics.population}, representing ${ext.demographics.percentage}.`
            : `${city.name} has a ${city.scores.muslimPopulationPercent}% Muslim population.`,
        },
      },
      {
        "@type": "Question",
        "name": `Is ${city.name} safe for Muslims?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": city.scores.safety >= 70
            ? `${city.name} has a high safety score of ${city.scores.safety}/100, making it generally safe for Muslims. The city has ${city.stats.mosques}+ mosques and a welcoming community.`
            : `${city.name} has a safety score of ${city.scores.safety}/100. We recommend checking our detailed safety and discrimination information above.`,
        },
      },
      {
        "@type": "Question",
        "name": `Where do Muslims live in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ext?.demographics.areas && ext.demographics.areas.length > 0
            ? `Popular Muslim neighborhoods in ${city.name} include ${ext.demographics.areas.map(a => a.name).join(", ")}. These areas typically have more mosques and halal food options.`
            : `${city.name} has Muslim communities spread throughout the city. Areas with mosques and halal restaurants typically have more Muslim residents.`,
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
          <Image src={city.primaryImage} alt={`Muslim community in ${city.name}`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          <div className="absolute top-4 left-0 right-0">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-white/80 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/city/${city.slug}`} className="hover:text-white">{city.name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Muslim Community</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-medium">Community Guide</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                Muslim Community in {city.name}: Neighborhoods & Resources
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Connect with the Muslim community in {city.name}. Find neighborhoods, organizations, and resources.
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
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="font-semibold">{city.scores.muslimPopulationPercent}%</span>
                  <span className="text-[var(--foreground-muted)]">Muslim Pop.</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold">{city.stats.mosques}+</span>
                  <span className="text-[var(--foreground-muted)]">Mosques</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold">{city.scores.community}/100</span>
                  <span className="text-[var(--foreground-muted)]">Community Score</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold">{city.scores.safety}/100</span>
                  <span className="text-[var(--foreground-muted)]">Safety</span>
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
              {/* Demographics Overview */}
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Muslim Population in {city.name}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">
                      {ext?.demographics.population || `${city.scores.muslimPopulationPercent}%`}
                    </p>
                    <p className="text-sm text-[var(--foreground-muted)]">Muslim Population</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">
                      {ext?.demographics.percentage || `${city.scores.muslimPopulationPercent}%`}
                    </p>
                    <p className="text-sm text-[var(--foreground-muted)]">of Total Population</p>
                  </div>
                </div>

                <p className="text-[var(--foreground-secondary)]">
                  {city.name} has a {city.scores.muslimPopulationPercent >= 50
                    ? "large and vibrant Muslim community"
                    : city.scores.muslimPopulationPercent >= 10
                    ? "significant Muslim community"
                    : "growing Muslim community"} with {city.stats.mosques}+ mosques and {city.stats.halalRestaurants}+ halal restaurants serving the community.
                </p>
              </section>

              {/* Major Ethnicities */}
              {ext?.demographics.majorEthnicities && ext.demographics.majorEthnicities.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Major Muslim Ethnicities
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {ext.demographics.majorEthnicities.map((ethnicity, i) => (
                      <span key={i} className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        {ethnicity}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Muslim-Friendly Neighborhoods */}
              {ext?.demographics.areas && ext.demographics.areas.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-blue-500" />
                    Muslim-Friendly Neighborhoods
                  </h2>
                  <p className="text-[var(--foreground-secondary)] mb-4">
                    These areas in {city.name} have larger Muslim communities, more mosques, and better access to halal food.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ext.demographics.areas.map((area, i) => (
                      <a
                        key={i}
                        href={area.googleMapsUrl || `https://www.google.com/maps/search/${encodeURIComponent(area.name + ' ' + city.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[var(--background-secondary)] rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <div>
                          <span className="font-medium text-[var(--foreground)]">{area.name}</span>
                          {area.description && (
                            <p className="text-xs text-[var(--foreground-muted)]">{area.description}</p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Safety & Discrimination */}
              {ext?.discrimination && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    Safety for Muslims in {city.name}
                  </h2>
                  <p className="text-sm text-[var(--foreground-muted)] mb-4">
                    Discrimination levels (1-10 scale, lower is better)
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className={`rounded-xl p-4 text-center ${getDiscriminationColor(ext.discrimination.hijab)}`}>
                      <p className="text-2xl font-bold">{ext.discrimination.hijab}/10</p>
                      <p className="text-sm font-medium">Hijab</p>
                      <p className="text-xs opacity-75">{getDiscriminationLabel(ext.discrimination.hijab)}</p>
                    </div>
                    <div className={`rounded-xl p-4 text-center ${getDiscriminationColor(ext.discrimination.niqab)}`}>
                      <p className="text-2xl font-bold">{ext.discrimination.niqab}/10</p>
                      <p className="text-sm font-medium">Niqab</p>
                      <p className="text-xs opacity-75">
                        {ext.discrimination.niqabBanned ? "Banned" : getDiscriminationLabel(ext.discrimination.niqab)}
                      </p>
                    </div>
                    <div className={`rounded-xl p-4 text-center ${getDiscriminationColor(ext.discrimination.racism)}`}>
                      <p className="text-2xl font-bold">{ext.discrimination.racism}/10</p>
                      <p className="text-sm font-medium">Racism</p>
                      <p className="text-xs opacity-75">{getDiscriminationLabel(ext.discrimination.racism)}</p>
                    </div>
                    <div className={`rounded-xl p-4 text-center ${getDiscriminationColor(ext.discrimination.islamophobia)}`}>
                      <p className="text-2xl font-bold">{ext.discrimination.islamophobia}/10</p>
                      <p className="text-sm font-medium">Islamophobia</p>
                      <p className="text-xs opacity-75">{getDiscriminationLabel(ext.discrimination.islamophobia)}</p>
                    </div>
                  </div>

                  {ext.discrimination.niqabBanned && (
                    <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-700 dark:text-red-400">Face Covering Ban</p>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          Face coverings (niqab/burqa) are restricted or banned in public spaces in {city.name}.
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Quality of Life for Muslims */}
              {ext?.qualityOfLife && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Quality of Life for Muslims
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <QualityItem label="Safety" score={ext.qualityOfLife.safety} />
                    <QualityItem label="Female Friendly" score={ext.qualityOfLife.femaleFriendly} />
                    <QualityItem label="Racial Tolerance" score={ext.qualityOfLife.racialTolerance} />
                    <QualityItem label="Foreigner Friendly" score={ext.qualityOfLife.friendlyToForeigners} />
                    <QualityItem label="Freedom of Speech" score={ext.qualityOfLife.freedomOfSpeech} />
                    <QualityItem label="English Speaking" score={ext.qualityOfLife.englishSpeaking} />
                  </div>
                </section>
              )}

              {/* Local Organizations */}
              {ext?.religiousInfrastructure.localOrganizations && ext.religiousInfrastructure.localOrganizations.length > 0 && (
                <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Islamic Organizations in {city.name}
                  </h2>
                  <div className="space-y-3">
                    {ext.religiousInfrastructure.localOrganizations.map((org, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] rounded-lg">
                        <Building2 className="w-5 h-5 text-green-600" />
                        <span className="text-[var(--foreground)]">{org}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tips for Muslim Expats */}
              <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800">
                <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  Tips for Muslims Moving to {city.name}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {ext?.demographics.areas && ext.demographics.areas.length > 0
                        ? `Consider living in ${ext.demographics.areas[0].name} or similar Muslim-friendly areas for easier access to mosques and halal food`
                        : "Research neighborhoods with mosques and halal restaurants nearby before choosing where to live"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      Connect with the local mosque community - they often help newcomers find housing and jobs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {city.features.islamicBanks
                        ? "Islamic banking options are available - look into halal mortgage and finance options"
                        : "Research Islamic finance options before moving - conventional banking may be the primary option"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground-secondary)]">
                      {city.features.islamicSchools > 0
                        ? `There are ${city.features.islamicSchools}+ Islamic schools for children - research enrollment requirements early`
                        : "Research Islamic education options for children, including weekend schools at mosques"}
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
                      <span className="font-medium">How many Muslims live in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.demographics.population
                        ? `${city.name} has approximately ${ext.demographics.population}, representing ${ext.demographics.percentage} of the population.`
                        : `${city.name} has approximately ${city.scores.muslimPopulationPercent}% Muslim population.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Is {city.name} safe for Muslims?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {city.scores.safety >= 70
                        ? `${city.name} has a high safety score of ${city.scores.safety}/100, making it generally safe for Muslims. The city has ${city.stats.mosques}+ mosques and an established Muslim community.`
                        : `${city.name} has a safety score of ${city.scores.safety}/100. Check our discrimination index above for detailed safety information for Muslims.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Where do Muslims live in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.demographics.areas && ext.demographics.areas.length > 0
                        ? `Popular Muslim neighborhoods in ${city.name} include ${ext.demographics.areas.map(a => a.name).join(", ")}. These areas have more mosques and halal restaurants.`
                        : `Muslims in ${city.name} live throughout the city. Look for areas near mosques and halal restaurants for more Muslim-friendly neighborhoods.`}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-[var(--background-secondary)] rounded-lg">
                      <span className="font-medium">Can women wear hijab in {city.name}?</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="p-4 text-[var(--foreground-secondary)]">
                      {ext?.discrimination.hijab && ext.discrimination.hijab <= 3
                        ? `Yes, wearing hijab is generally accepted in ${city.name} with low discrimination levels.`
                        : ext?.discrimination.hijab && ext.discrimination.hijab <= 6
                        ? `Wearing hijab in ${city.name} is possible but you may experience some challenges. Our discrimination score is ${ext.discrimination.hijab}/10.`
                        : `Wearing hijab in ${city.name} may face some challenges. Check our discrimination index above for details.`}
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
                  <Link href={`/city/${city.slug}/islamic-schools`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background-secondary)]">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span>Islamic Schools</span>
                  </Link>
                </nav>
              </div>

              {/* Community Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                <h3 className="font-bold text-[var(--foreground)] mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <ScoreBar label="Community Score" score={city.scores.community} color="green" />
                  <ScoreBar label="Safety Score" score={city.scores.safety} color="blue" />
                  <ScoreBar label="Halal Score" score={city.scores.halal} color="purple" />
                </div>
              </div>

              {/* Nearby Cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4">Muslim Communities Nearby</h3>
                  <div className="space-y-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/city/${nearbyCity.slug}/muslim-community`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--background-secondary)]"
                      >
                        <div>
                          <p className="font-medium">{nearbyCity.name}</p>
                          <p className="text-sm text-[var(--foreground-muted)]">{nearbyCity.scores.muslimPopulationPercent}% Muslim</p>
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

// Helper Components
function QualityItem({ label, score }: { label: string; score: number }) {
  const getColor = (s: number) => {
    if (s >= 8) return "text-green-600"
    if (s >= 6) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="flex items-center justify-between p-3 bg-[var(--background-secondary)] rounded-lg">
      <span className="text-sm text-[var(--foreground)]">{label}</span>
      <span className={`font-bold ${getColor(score)}`}>{score}/10</span>
    </div>
  )
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  const colorClasses: Record<string, string> = {
    green: "bg-green-500",
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
        <div className={`h-full ${colorClasses[color]}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}
