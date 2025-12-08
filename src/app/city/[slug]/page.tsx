"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cities } from "@/data/cities"
import { restaurantsByCity } from "@/data/restaurants"
import { mosquesByCity } from "@/data/mosques"
import { RestaurantCard } from "@/components/city/restaurant-card"
import { MosqueCard } from "@/components/city/mosque-card"
// import { CommunitySection } from "@/components/city/community-section"
import { CostOfLiving } from "@/components/city/cost-of-living"
import { DigitalNomadGuide } from "@/components/city/digital-nomad-guide"
import { ExtendedInfo } from "@/components/city/extended-info"
import { LocationMap } from "@/components/city/location-map"
import { PrayerTimesWidget } from "@/components/city/prayer-times-widget"
import { QiblaCompass } from "@/components/city/qibla-compass"
import { RamadanGuide } from "@/components/city/ramadan-guide"
import { HalalRestaurantsMap } from "@/components/city/halal-restaurants-map"
import { SubPageNav } from "@/components/city/sub-page-nav"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Filter, MapPin, Users, Shield, Plane, Building2, Utensils, Info, Moon } from "lucide-react"

export default function CityPage() {
  const params = useParams()
  const city = cities.find(c => c.slug === params.slug)
  const [activeTab, setActiveTab] = useState("overview")
  const [showMap, setShowMap] = useState(false)

  if (!city) {
    return <div>City not found</div>
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "prayer", label: "Prayer & Ramadan", icon: Moon },
    { id: "community", label: "Muslim Community", icon: Users },
    { id: "safety", label: "Safety & Discrimination", icon: Shield },
    { id: "halal", label: "Halal Places", icon: Utensils },
    { id: "mosques", label: "Mosques", icon: Building2 },
    { id: "guide", label: "Digital Nomad", icon: MapPin },
    { id: "cost", label: "Cost of Living", icon: MapPin },
    { id: "travel", label: "Travel Info", icon: Plane },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Helper to get score label (currently unused but kept for future use)
  // const getScoreLabel = (score: number) => {
  //   if (score >= 80) return "Great"
  //   if (score >= 60) return "Good"
  //   return "Poor"
  // }

  // Get extended data
  const ext = city.extended

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <Image
          src={city.primaryImage}
          alt={city.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* City Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{city.name}</h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90">{city.country} {city.region && `• ${city.region}`}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 sm:gap-6 mt-3 sm:mt-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-2xl">🕌</span>
                    <div>
                      <p className="text-base sm:text-xl font-bold text-white">{city.stats.mosques}+</p>
                      <p className="text-[10px] sm:text-xs">Mosques</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-2xl">🍖</span>
                    <div>
                      <p className="text-base sm:text-xl font-bold text-white">{city.stats.halalRestaurants}+</p>
                      <p className="text-[10px] sm:text-xs">Halal Places</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-2xl">👥</span>
                    <div>
                      <p className="text-base sm:text-xl font-bold text-white">{city.scores.muslimPopulationPercent}%</p>
                      <p className="text-[10px] sm:text-xs">Muslim Pop.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Halal Score Badge */}
              <div className="text-center hidden sm:block">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ${getScoreColor(city.scores.halal)} flex items-center justify-center`}>
                  <div className="text-white">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">{city.scores.halal}</p>
                    <p className="text-[10px] sm:text-xs">Halal Score</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-3 sm:px-4">
                Join Community
              </Button>
              <Button variant="secondary" className="bg-white/20 backdrop-blur text-white hover:bg-white/30 text-sm sm:text-base px-3 sm:px-4">
                Add to Favorites
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-white dark:bg-gray-800 sticky top-16 z-40 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "text-green-600 border-green-600"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb & Sub-Page Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: city.country, href: `/?country=${encodeURIComponent(city.country)}` },
            { label: city.name }
          ]}
          className="mb-4"
        />
        <SubPageNav
          citySlug={city.slug}
          cityName={city.name}
          stats={{
            mosques: city.stats.mosques,
            halalRestaurants: city.stats.halalRestaurants,
            islamicSchools: city.features.islamicSchools,
            halalHotels: city.features.halalHotels
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Scores */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-32">
              <h3 className="font-semibold text-lg mb-4">City Scores</h3>

              <div className="space-y-4">
                {/* Halal Score */}
                <ScoreBar label="Halal" emoji="🕌" score={city.scores.halal} />

                {/* Food Score */}
                <ScoreBar label="Food" emoji="🍖" score={city.scores.food} />

                {/* Community Score */}
                <ScoreBar label="Community" emoji="👥" score={city.scores.community} />

                {/* Cost Score */}
                <ScoreBar
                  label="Cost"
                  emoji="💰"
                  score={city.scores.cost}
                  subLabel={`$${city.stats.monthlyBudget}/mo`}
                />

                {/* Internet Score */}
                <ScoreBar
                  label="Internet"
                  emoji="🌐"
                  score={city.scores.internet}
                  subLabel={`${city.stats.internetSpeed} Mbps`}
                />

                {/* Safety Score */}
                <ScoreBar label="Safety" emoji="🛡️" score={city.scores.safety} />
              </div>

              {/* Quick Features */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-sm mb-3">Quick Features</h4>
                <div className="space-y-2 text-sm">
                  <FeatureItem
                    available={city.features.airportPrayerRoom}
                    label="Airport Prayer Room"
                  />
                  <FeatureItem
                    available={city.features.islamicBanks}
                    label="Islamic Banking"
                  />
                  <FeatureItem
                    available={city.features.halalHotels > 0}
                    label={`${city.features.halalHotels} Halal Hotels`}
                  />
                  <FeatureItem
                    available={city.features.islamicSchools > 0}
                    label={`${city.features.islamicSchools} Islamic Schools`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Welcome to {city.name}</h2>

                  {ext && (
                    <div className="space-y-4">
                      {/* Muslim Population */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">🕌</div>
                          <div>
                            <p className="text-2xl font-bold text-green-700">{ext.demographics.population}</p>
                            <p className="text-sm text-gray-600">{ext.demographics.percentage}</p>
                          </div>
                        </div>
                      </div>

                      {/* Ethnicities */}
                      {ext.demographics.majorEthnicities.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-2">Major Muslim Ethnicities</p>
                          <div className="flex flex-wrap gap-2">
                            {ext.demographics.majorEthnicities.map((eth, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full">{eth}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Muslim Areas */}
                      {ext.demographics.areas.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-2">Muslim-Friendly Neighborhoods</p>
                          <div className="flex flex-wrap gap-2">
                            {ext.demographics.areas.map((area, i) => (
                              <a
                                key={i}
                                href={area.googleMapsUrl || `https://www.google.com/maps/search/${encodeURIComponent(area.name + ' ' + city.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full hover:bg-green-200 transition-colors"
                              >
                                {area.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Stats */}
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard label="Mosques" value={`${city.stats.mosques}+`} icon="🕌" />
                    <StatCard label="Halal Places" value={`${city.stats.halalRestaurants}+`} icon="🍖" />
                    <StatCard label="Monthly Budget" value={`$${city.stats.monthlyBudget}`} icon="💰" />
                    <StatCard label="Internet" value={`${city.stats.internetSpeed} Mbps`} icon="🌐" />
                  </div>
                </div>

                {/* Extended Info Summary */}
                {ext && (
                  <>
                    {/* Discrimination Quick View */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Safety for Muslims
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <MiniScoreCard
                          label="Hijab"
                          score={ext.discrimination.hijab}
                          inverse
                        />
                        <MiniScoreCard
                          label="Niqab"
                          score={ext.discrimination.niqab}
                          inverse
                          note={ext.discrimination.niqabBanned ? "Banned" : undefined}
                        />
                        <MiniScoreCard
                          label="Racism"
                          score={ext.discrimination.racism}
                          inverse
                        />
                        <MiniScoreCard
                          label="Islamophobia"
                          score={ext.discrimination.islamophobia}
                          inverse
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-3">Lower scores = less discrimination (1-10 scale)</p>
                    </div>

                    {/* Airport Info */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Plane className="h-5 w-5 text-green-600" />
                        Airport Information
                      </h3>
                      <div className={`p-4 rounded-lg ${ext.airport.hasPrayerRoom ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl ${ext.airport.hasPrayerRoom ? '' : 'opacity-50'}`}>🕌</span>
                          <div>
                            <p className="font-medium">
                              {ext.airport.hasPrayerRoom ? 'Prayer Room Available' : 'No Prayer Room'}
                            </p>
                            {ext.airport.prayerRoomDetails && (
                              <p className="text-sm text-gray-600">{ext.airport.prayerRoomDetails}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Food & Dining Preview */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Utensils className="h-5 w-5 text-green-600" />
                        Halal Food Scene
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-orange-600">{ext.foodAndDining.numberOfRestaurants}</p>
                          <p className="text-sm text-gray-600">Halal Restaurants</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-orange-600">{ext.foodAndDining.halalMeatShops}</p>
                          <p className="text-sm text-gray-600">Halal Meat Shops</p>
                        </div>
                      </div>
                      {ext.foodAndDining.favouriteRestaurants.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-2">Popular Halal Restaurants</p>
                          <div className="flex flex-wrap gap-2">
                            {ext.foodAndDining.favouriteRestaurants.map((rest, i) => (
                              <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded">{rest}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <Button
                        variant="outline"
                        className="w-full mt-4"
                        onClick={() => setActiveTab("halal")}
                      >
                        View All Halal Places
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === "prayer" && (
              <div className="space-y-6">
                {/* Prayer Times */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <PrayerTimesWidget
                    latitude={city.coordinates.lat}
                    longitude={city.coordinates.lng}
                    cityName={city.name}
                    variant="full"
                  />
                </div>

                {/* Qibla Direction */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Qibla Direction
                  </h3>
                  <QiblaCompass
                    latitude={city.coordinates.lat}
                    longitude={city.coordinates.lng}
                  />
                </div>

                {/* Ramadan Guide */}
                <RamadanGuide
                  latitude={city.coordinates.lat}
                  longitude={city.coordinates.lng}
                  cityName={city.name}
                  country={city.country}
                />
              </div>
            )}

            {activeTab === "community" && ext && (
              <ExtendedInfo cityName={city.name} extended={ext} />
            )}

            {activeTab === "safety" && ext && (
              <div className="space-y-6">
                {/* Discrimination Section from Extended Info */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Safety & Discrimination Index for Muslims
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">Lower scores indicate less discrimination (1-10 scale)</p>

                  <div className="grid grid-cols-2 gap-4">
                    <DiscriminationCard
                      label="Hijab Discrimination"
                      score={ext.discrimination.hijab}
                      description="How safe is it to wear hijab in public"
                    />
                    <DiscriminationCard
                      label="Niqab Discrimination"
                      score={ext.discrimination.niqab}
                      description={ext.discrimination.niqabBanned ? "Face covering is banned in public" : "How safe is it to wear niqab"}
                      banned={ext.discrimination.niqabBanned}
                    />
                    <DiscriminationCard
                      label="General Racism"
                      score={ext.discrimination.racism}
                      description="Based on World Values Survey"
                    />
                    <DiscriminationCard
                      label="Islamophobia"
                      score={ext.discrimination.islamophobia}
                      description="Level of anti-Muslim sentiment"
                    />
                  </div>
                </div>

                {/* Quality of Life Metrics */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Quality of Life Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <QualityBar label="Safety" score={ext.qualityOfLife.safety} />
                    <QualityBar label="Healthcare" score={ext.qualityOfLife.healthcare} />
                    <QualityBar label="Foreigner Friendly" score={ext.qualityOfLife.friendlyToForeigners} />
                    <QualityBar label="Female Friendly" score={ext.qualityOfLife.femaleFriendly} />
                    <QualityBar label="Racial Tolerance" score={ext.qualityOfLife.racialTolerance} />
                    <QualityBar label="Peace" score={ext.qualityOfLife.peace} />
                    <QualityBar label="Freedom of Speech" score={ext.qualityOfLife.freedomOfSpeech} />
                    <QualityBar label="English Speaking" score={ext.qualityOfLife.englishSpeaking} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "halal" && (
              <div className="space-y-6">
                {ext && (
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Halal Food & Restaurants</h2>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-orange-50 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-orange-600">{ext.foodAndDining.numberOfRestaurants}</p>
                        <p className="text-sm text-gray-600">Halal Restaurants</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-orange-600">{ext.foodAndDining.halalMeatShops}</p>
                        <p className="text-sm text-gray-600">Halal Meat Shops</p>
                      </div>
                    </div>

                    {ext.foodAndDining.favouriteRestaurants.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Popular Restaurants</p>
                        <div className="flex flex-wrap gap-2">
                          {ext.foodAndDining.favouriteRestaurants.map((rest, i) => (
                            <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded">{rest}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {ext.foodAndDining.tripAdvisorUrl && (
                      <a
                        href={ext.foodAndDining.tripAdvisorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:underline"
                      >
                        View on TripAdvisor →
                      </a>
                    )}
                  </div>
                )}

                <div className="flex gap-2 mb-6 overflow-x-auto">
                  <Button size="sm" variant="outline">All</Button>
                  <Button size="sm" variant="outline">Turkish</Button>
                  <Button size="sm" variant="outline">Arab</Button>
                  <Button size="sm" variant="outline">Indian</Button>
                  <Button size="sm" variant="outline">Fast Food</Button>
                  <Button size="sm" variant="outline">Certified</Button>
                </div>

                {/* Interactive Restaurant Map */}
                <HalalRestaurantsMap
                  cityName={city.name}
                  latitude={city.coordinates?.lat || 0}
                  longitude={city.coordinates?.lng || 0}
                />

                <div className="space-y-4">
                  {restaurantsByCity[city.slug]?.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  )) || (
                    <p className="text-gray-600 bg-white rounded-lg p-6 shadow-sm">
                      Restaurant data for {city.name} coming soon...
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "mosques" && (
              <div className="space-y-6">
                {ext && (
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Mosques & Prayer Spaces</h2>
                      <Button variant="outline" size="sm" onClick={() => setShowMap(!showMap)}>
                        {showMap ? 'Hide Map' : 'Show on Map'} 🗺️
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-green-600">{ext.religiousInfrastructure.numberOfMosques}</p>
                        <p className="text-sm text-gray-600">Total Mosques</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-blue-600">{ext.religiousInfrastructure.numberOfIslamicSchools}</p>
                        <p className="text-sm text-gray-600">Islamic Schools</p>
                      </div>
                    </div>

                    {ext.religiousInfrastructure.qiblahDirection && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                        <span className="text-2xl">🧭</span>
                        <div>
                          <p className="font-medium text-sm">Qiblah Direction</p>
                          <p className="text-sm text-gray-600">{ext.religiousInfrastructure.qiblahDirection}</p>
                        </div>
                      </div>
                    )}

                    {ext.religiousInfrastructure.fastingHours && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                        <span className="text-2xl">🌙</span>
                        <div>
                          <p className="font-medium text-sm">Fasting Hours</p>
                          <p className="text-sm text-gray-600">{ext.religiousInfrastructure.fastingHours}</p>
                        </div>
                      </div>
                    )}

                    {ext.religiousInfrastructure.mosquesForJumah.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Popular Mosques for Jummah</p>
                        <ul className="space-y-2">
                          {ext.religiousInfrastructure.mosquesForJumah.map((mosque, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-green-600">●</span>
                              {mosque}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {showMap && (
                  <LocationMap
                    cityName={city.name}
                    cityCoordinates={city.coordinates}
                    mosques={mosquesByCity[city.slug] || []}
                    restaurants={restaurantsByCity[city.slug] || []}
                    activeFilter="mosques"
                  />
                )}

                <div className="flex gap-2 mb-6">
                  <Button size="sm" variant="outline">All</Button>
                  <Button size="sm" variant="outline">Jummah</Button>
                  <Button size="sm" variant="outline">Women&apos;s Section</Button>
                  <Button size="sm" variant="outline">Parking</Button>
                </div>

                <div className="space-y-4">
                  {mosquesByCity[city.slug]?.map((mosque) => (
                    <MosqueCard key={mosque.id} mosque={mosque} />
                  )) || (
                    <p className="text-gray-600 bg-white rounded-lg p-6 shadow-sm">
                      Mosque data for {city.name} coming soon...
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "guide" && (
              <DigitalNomadGuide
                cityName={city.name}
                internetSpeed={city.stats.internetSpeed}
              />
            )}

            {activeTab === "cost" && (
              <CostOfLiving
                cityName={city.name}
                monthlyBudget={city.stats.monthlyBudget}
              />
            )}

            {activeTab === "travel" && ext && (
              <div className="space-y-6">
                {/* Tourism Info */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Tourism & Attractions</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">{ext.tourism.internationalArrivals}</p>
                      <p className="text-sm text-gray-600">International Visitors/year</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-600">{ext.tourism.muslimVisitorArrivals}</p>
                      <p className="text-sm text-gray-600">Muslim Visitors/year</p>
                    </div>
                  </div>

                  {ext.tourism.mainAttractions.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Top Attractions</p>
                      <div className="flex flex-wrap gap-2">
                        {ext.tourism.mainAttractions.map((attr, i) => (
                          <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm rounded">{attr}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {ext.tourism.bestShoppingAreas.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Best Shopping Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {ext.tourism.bestShoppingAreas.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded">{area}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {ext.tourism.famousParks.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Famous Parks</p>
                      <div className="flex flex-wrap gap-2">
                        {ext.tourism.famousParks.map((park, i) => (
                          <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded">{park}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Practical Info */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Practical Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <InfoCard label="Language" value={ext.practicalInfo.language} />
                    <InfoCard label="Region" value={ext.practicalInfo.region} />
                    <InfoCard
                      label="Tap Water"
                      value={ext.practicalInfo.safeTapWater ? 'Safe to drink' : 'Not recommended'}
                      highlight={ext.practicalInfo.safeTapWater}
                    />
                    <InfoCard label="Cashless Society" value={`${ext.practicalInfo.cashlessSociety}/10`} />
                    {ext.practicalInfo.timezone && <InfoCard label="Timezone" value={ext.practicalInfo.timezone} />}
                    {ext.practicalInfo.bestTimeToVisit && <InfoCard label="Best Time to Visit" value={ext.practicalInfo.bestTimeToVisit} />}
                  </div>
                </div>

                {/* Islamic Finance */}
                {(ext.islamicFinance.banks.length > 0 || ext.islamicFinance.insurance.length > 0) && (
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Islamic Finance</h3>
                    {ext.islamicFinance.banks.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Islamic Banks</p>
                        <div className="flex flex-wrap gap-2">
                          {ext.islamicFinance.banks.map((bank, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded">{bank}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {ext.islamicFinance.insurance.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Takaful/Islamic Insurance</p>
                        <div className="flex flex-wrap gap-2">
                          {ext.islamicFinance.insurance.map((ins, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded">{ins}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Hotels */}
                {(ext.hotels.withHalalBreakfast.length > 0 || ext.hotels.withBidet.length > 0) && (
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Muslim-Friendly Hotels</h3>
                    {ext.hotels.withHalalBreakfast.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Hotels with Halal Breakfast</p>
                        <div className="flex flex-wrap gap-2">
                          {ext.hotels.withHalalBreakfast.map((hotel, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded">{hotel}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {ext.hotels.withBidet.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Hotels with Bidet/Shattaf</p>
                        <div className="flex flex-wrap gap-2">
                          {ext.hotels.withBidet.map((hotel, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded">{hotel}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar - Map */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <LocationMap
                cityName={city.name}
                cityCoordinates={city.coordinates}
                mosques={mosquesByCity[city.slug] || []}
                restaurants={restaurantsByCity[city.slug] || []}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Members Section */}
      <div className="bg-white border-t mt-12">
        <div className="container mx-auto py-8">
          <h3 className="text-xl font-semibold mb-4">
            {Math.floor(city.stats.muslimPopulation * 0.001)} members in {city.name} community
          </h3>
          <div className="flex gap-2 flex-wrap">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function ScoreBar({ label, emoji, score, subLabel }: { label: string; emoji: string; score: number; subLabel?: string }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{emoji} {label}</span>
        <span className="text-sm">{score}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getScoreColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      {subLabel && (
        <span className="text-xs text-gray-500">{subLabel}</span>
      )}
    </div>
  )
}

function FeatureItem({ available, label }: { available: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={available ? "text-green-600" : "text-gray-300"}>
        {available ? "✓" : "✗"}
      </span>
      <span className={available ? "" : "text-gray-400"}>{label}</span>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <span className="text-2xl">{icon}</span>
      <p className="text-xl font-bold mt-1">{value}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  )
}

function MiniScoreCard({ label, score, inverse, note }: { label: string; score: number; inverse?: boolean; note?: string }) {
  const getColor = (s: number, inv: boolean) => {
    if (inv) {
      if (s <= 3) return 'bg-green-100 text-green-700'
      if (s <= 6) return 'bg-yellow-100 text-yellow-700'
      return 'bg-red-100 text-red-700'
    }
    if (s >= 7) return 'bg-green-100 text-green-700'
    if (s >= 4) return 'bg-yellow-100 text-yellow-700'
    return 'bg-red-100 text-red-700'
  }

  return (
    <div className={`rounded-lg p-3 text-center ${getColor(score, !!inverse)}`}>
      <p className="text-xl font-bold">{score}/10</p>
      <p className="text-xs font-medium">{label}</p>
      {note && <p className="text-xs opacity-75">{note}</p>}
    </div>
  )
}

function DiscriminationCard({ label, score, description, banned }: { label: string; score: number; description: string; banned?: boolean }) {
  const getColor = (s: number) => {
    if (s <= 3) return 'bg-green-50 border-green-200'
    if (s <= 6) return 'bg-yellow-50 border-yellow-200'
    return 'bg-red-50 border-red-200'
  }

  const getTextColor = (s: number) => {
    if (s <= 3) return 'text-green-600'
    if (s <= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className={`rounded-lg p-4 border ${banned ? 'bg-red-50 border-red-200' : getColor(score)}`}>
      <p className={`text-3xl font-bold ${banned ? 'text-red-600' : getTextColor(score)}`}>{score}/10</p>
      <p className="font-medium text-sm mt-1">{label}</p>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  )
}

function QualityBar({ label, score }: { label: string; score: number }) {
  const getColor = (s: number) => {
    if (s >= 8) return 'bg-green-500'
    if (s >= 6) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="text-gray-500">{score}/10</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${getColor(score)}`} style={{ width: `${score * 10}%` }} />
      </div>
    </div>
  )
}

function InfoCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${highlight ? 'bg-green-50' : 'bg-gray-50'}`}>
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`font-medium text-sm ${highlight ? 'text-green-700' : ''}`}>{value}</p>
    </div>
  )
}
