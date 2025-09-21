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
import { CommunitySection } from "@/components/city/community-section"
import { CostOfLiving } from "@/components/city/cost-of-living"
import { DigitalNomadGuide } from "@/components/city/digital-nomad-guide"
import { Filter } from "lucide-react"

export default function CityPage() {
  const params = useParams()
  const city = cities.find(c => c.slug === params.slug)
  const [activeTab, setActiveTab] = useState("scores")

  if (!city) {
    return <div>City not found</div>
  }

  const tabs = [
    { id: "scores", label: "Scores" },
    { id: "guide", label: "Digital Nomad Guide" },
    { id: "halal", label: "Halal Places" },
    { id: "mosques", label: "Mosques" },
    { id: "reviews", label: "Reviews" },
    { id: "cost", label: "Cost of Living" },
    { id: "people", label: "People" },
    { id: "chat", label: "Chat" },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Great"
    if (score >= 60) return "Good"
    return "Poor"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={city.primaryImage}
          alt={city.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* City Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-white mb-2">{city.name}</h1>
            <p className="text-xl text-white/90">{city.country}</p>
            
            <div className="flex gap-4 mt-6">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Join the community in {city.name}
              </Button>
              <Button variant="secondary" className="bg-white/20 backdrop-blur text-white hover:bg-white/30">
                Meetup in 27 days
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-white sticky top-16 z-40">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-red-500 border-red-500"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Scores */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Scores</h3>
              
              <div className="space-y-4">
                {/* Halal Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">🕌 Halal</span>
                    <span className="text-sm">{city.scores.halal}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.halal)}`}
                      style={{ width: `${city.scores.halal}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.halal >= 80 ? 'text-green-600' : city.scores.halal >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getScoreLabel(city.scores.halal)}
                  </span>
                </div>

                {/* Food Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">🍖 Food</span>
                    <span className="text-sm">{city.scores.food}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.food)}`}
                      style={{ width: `${city.scores.food}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.food >= 80 ? 'text-green-600' : city.scores.food >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getScoreLabel(city.scores.food)}
                  </span>
                </div>

                {/* Community Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">👥 Community</span>
                    <span className="text-sm">{city.scores.community}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.community)}`}
                      style={{ width: `${city.scores.community}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.community >= 80 ? 'text-green-600' : city.scores.community >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getScoreLabel(city.scores.community)}
                  </span>
                </div>

                {/* Cost Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">💰 Cost</span>
                    <span className="text-sm">{city.scores.cost}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.cost)}`}
                      style={{ width: `${city.scores.cost}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.cost >= 80 ? 'text-green-600' : city.scores.cost >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    Affordable: ${city.stats.monthlyBudget}/mo
                  </span>
                </div>

                {/* Internet Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">🌐 Internet</span>
                    <span className="text-sm">{city.scores.internet}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.internet)}`}
                      style={{ width: `${city.scores.internet}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.internet >= 80 ? 'text-green-600' : city.scores.internet >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {city.stats.internetSpeed} Mbps avg
                  </span>
                </div>

                {/* Safety Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">⚡ Safety</span>
                    <span className="text-sm">{city.scores.safety}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(city.scores.safety)}`}
                      style={{ width: `${city.scores.safety}%` }}
                    />
                  </div>
                  <span className={`text-xs ${city.scores.safety >= 80 ? 'text-green-600' : city.scores.safety >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {getScoreLabel(city.scores.safety)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-6">
            {activeTab === "scores" && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Welcome to {city.name}</h2>
                
                <div className="space-y-6">
                  {/* Key Stats */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">📊 Key Stats</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• {(city.stats.muslimPopulation / 1000000).toFixed(1)}M+ Muslims ({city.scores.muslimPopulationPercent}%)</li>
                      <li>• {city.stats.mosques.toLocaleString()}+ Mosques</li>
                      <li>• {city.stats.halalRestaurants.toLocaleString()}+ Halal Places</li>
                      <li>• ${city.stats.monthlyBudget}/month average budget</li>
                    </ul>
                  </div>

                  {/* Prayer Times */}
                  {city.prayerTimes && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">🕌 Prayer Times Today</h3>
                      <div className="grid grid-cols-5 gap-3">
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600">Fajr</div>
                          <div className="font-semibold">{city.prayerTimes.fajr}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600">Dhuhr</div>
                          <div className="font-semibold">{city.prayerTimes.dhuhr}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600">Asr</div>
                          <div className="font-semibold">{city.prayerTimes.asr}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600">Maghrib</div>
                          <div className="font-semibold">{city.prayerTimes.maghrib}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-600">Isha</div>
                          <div className="font-semibold">{city.prayerTimes.isha}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">✨ Muslim-Friendly Features</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Airport Prayer Room</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>{city.features.halalHotels} Halal Hotels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Islamic Banking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>{city.features.islamicSchools} Islamic Schools</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "halal" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Halal Food & Restaurants</h2>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 mb-6 overflow-x-auto">
                    <Button size="sm" variant="outline">All</Button>
                    <Button size="sm" variant="outline">Turkish</Button>
                    <Button size="sm" variant="outline">Arab</Button>
                    <Button size="sm" variant="outline">Indian</Button>
                    <Button size="sm" variant="outline">Fast Food</Button>
                    <Button size="sm" variant="outline">Certified</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {restaurantsByCity[city.slug]?.map(restaurant => (
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
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Mosques & Prayer Spaces</h2>
                    <Button variant="outline" size="sm">
                      Show on Map 🗺️
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 mb-6">
                    <Button size="sm" variant="outline">All</Button>
                    <Button size="sm" variant="outline">Jummah</Button>
                    <Button size="sm" variant="outline">Women&apos;s Section</Button>
                    <Button size="sm" variant="outline">Parking</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {mosquesByCity[city.slug]?.map(mosque => (
                    <MosqueCard key={mosque.id} mosque={mosque} />
                  )) || (
                    <p className="text-gray-600 bg-white rounded-lg p-6 shadow-sm">
                      Mosque data for {city.name} coming soon...
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "people" && (
              <CommunitySection 
                cityName={city.name} 
                memberCount={Math.floor(city.stats.muslimPopulation * 0.001)}
              />
            )}

            {activeTab === "cost" && (
              <CostOfLiving 
                cityName={city.name}
                monthlyBudget={city.stats.monthlyBudget}
              />
            )}

            {activeTab === "guide" && (
              <DigitalNomadGuide
                cityName={city.name}
                internetSpeed={city.stats.internetSpeed}
              />
            )}
          </div>

          {/* Right Sidebar - Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-4 shadow-sm h-96">
              <div className="bg-gray-200 rounded h-full flex items-center justify-center">
                <p className="text-gray-500">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Members Section */}
      <div className="bg-white border-t mt-12">
        <div className="container mx-auto py-8">
          <h3 className="text-xl font-semibold mb-4">
            {Math.floor(Math.random() * 5000 + 1000)} members in {city.name} community
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