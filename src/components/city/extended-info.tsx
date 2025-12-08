"use client"

import { Card } from "@/components/ui/card"
import { ExtendedCityInfo } from "@/types/city"
import {
  Users,
  Shield,
  Plane,
  Hotel,
  Banknote,
  Building2,
  Map,
  Heart,
  Globe,
  AlertTriangle,
  Star,
  MapPin,
  ShoppingBag,
  TreePine,
  GraduationCap,
  Clock
} from "lucide-react"

interface ExtendedInfoProps {
  cityName: string
  extended: ExtendedCityInfo
}

export function ExtendedInfo({ cityName, extended }: ExtendedInfoProps) {
  return (
    <div className="space-y-6">
      {/* Muslim Demographics */}
      <DemographicsSection demographics={extended.demographics} cityName={cityName} />

      {/* Discrimination & Safety */}
      <DiscriminationSection discrimination={extended.discrimination} />

      {/* Airport Info */}
      <AirportSection airport={extended.airport} />

      {/* Hotels */}
      <HotelsSection hotels={extended.hotels} />

      {/* Islamic Finance */}
      <IslamicFinanceSection islamicFinance={extended.islamicFinance} />

      {/* Religious Infrastructure */}
      <ReligiousSection religiousInfrastructure={extended.religiousInfrastructure} />

      {/* Tourism */}
      <TourismSection tourism={extended.tourism} />

      {/* Quality of Life */}
      <QualityOfLifeSection qualityOfLife={extended.qualityOfLife} />

      {/* Practical Info */}
      <PracticalInfoSection practicalInfo={extended.practicalInfo} />
    </div>
  )
}

function DemographicsSection({ demographics, cityName }: { demographics: ExtendedCityInfo['demographics'], cityName: string }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-green-600" />
        Muslim Community in {cityName}
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600">{demographics.population}</p>
            <p className="text-sm text-gray-600">{demographics.percentage}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Major Ethnicities</p>
            <div className="flex flex-wrap gap-1">
              {demographics.majorEthnicities.map((eth, i) => (
                <span key={i} className="px-2 py-1 bg-white text-xs rounded border">{eth}</span>
              ))}
            </div>
          </div>
        </div>

        {demographics.areas.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Muslim-Friendly Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {demographics.areas.map((area, i) => (
                <a
                  key={i}
                  href={area.googleMapsUrl || `https://www.google.com/maps/search/${encodeURIComponent(area.name + ' ' + cityName)}`}
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
    </Card>
  )
}

function DiscriminationSection({ discrimination }: { discrimination: ExtendedCityInfo['discrimination'] }) {
  const getScoreColor = (score: number, inverse = false) => {
    if (inverse) {
      if (score <= 3) return 'text-green-600 bg-green-100'
      if (score <= 6) return 'text-yellow-600 bg-yellow-100'
      return 'text-red-600 bg-red-100'
    }
    if (score >= 7) return 'text-green-600 bg-green-100'
    if (score >= 4) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getLabel = (score: number) => {
    if (score <= 3) return 'Low'
    if (score <= 6) return 'Moderate'
    return 'High'
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5 text-green-600" />
        Safety & Discrimination Index
      </h3>
      <p className="text-sm text-gray-500 mb-4">Lower scores indicate less discrimination (1-10 scale)</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`rounded-lg p-4 text-center ${getScoreColor(discrimination.hijab, true)}`}>
          <p className="text-2xl font-bold">{discrimination.hijab}/10</p>
          <p className="text-sm font-medium">Hijab</p>
          <p className="text-xs">{getLabel(discrimination.hijab)} Discrimination</p>
        </div>
        <div className={`rounded-lg p-4 text-center ${getScoreColor(discrimination.niqab, true)}`}>
          <p className="text-2xl font-bold">{discrimination.niqab}/10</p>
          <p className="text-sm font-medium">Niqab</p>
          <p className="text-xs">
            {discrimination.niqabBanned ? 'Banned in public' : getLabel(discrimination.niqab) + ' Discrimination'}
          </p>
        </div>
        <div className={`rounded-lg p-4 text-center ${getScoreColor(discrimination.racism, true)}`}>
          <p className="text-2xl font-bold">{discrimination.racism}/10</p>
          <p className="text-sm font-medium">Racism</p>
          <p className="text-xs">{getLabel(discrimination.racism)} Level</p>
        </div>
        <div className={`rounded-lg p-4 text-center ${getScoreColor(discrimination.islamophobia, true)}`}>
          <p className="text-2xl font-bold">{discrimination.islamophobia}/10</p>
          <p className="text-sm font-medium">Islamophobia</p>
          <p className="text-xs">{getLabel(discrimination.islamophobia)} Level</p>
        </div>
      </div>
      {discrimination.niqabBanned && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-700">Note: Niqab/face covering is banned in public spaces in this city/country.</p>
        </div>
      )}
    </Card>
  )
}

function AirportSection({ airport }: { airport: ExtendedCityInfo['airport'] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Plane className="h-5 w-5 text-green-600" />
        Airport Facilities
      </h3>
      <div className={`p-4 rounded-lg ${airport.hasPrayerRoom ? 'bg-green-50' : 'bg-gray-50'}`}>
        <div className="flex items-center gap-2 mb-2">
          {airport.hasPrayerRoom ? (
            <>
              <span className="text-green-600 text-xl">&#10003;</span>
              <span className="font-medium">Prayer Room Available</span>
            </>
          ) : (
            <>
              <span className="text-gray-400 text-xl">&#10007;</span>
              <span className="font-medium text-gray-500">No Prayer Room</span>
            </>
          )}
        </div>
        {airport.prayerRoomDetails && (
          <p className="text-sm text-gray-600">{airport.prayerRoomDetails}</p>
        )}
      </div>
    </Card>
  )
}

function HotelsSection({ hotels }: { hotels: ExtendedCityInfo['hotels'] }) {
  const hasAny = hotels.withHalalBreakfast.length > 0 || hotels.withBidet.length > 0 || hotels.withHalalOptions.length > 0

  if (!hasAny) return null

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Hotel className="h-5 w-5 text-green-600" />
        Muslim-Friendly Hotels
      </h3>
      <div className="space-y-4">
        {hotels.withHalalBreakfast.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Hotels with Halal Breakfast</p>
            <div className="flex flex-wrap gap-2">
              {hotels.withHalalBreakfast.map((hotel, i) => (
                <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded">{hotel}</span>
              ))}
            </div>
          </div>
        )}
        {hotels.withBidet.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Hotels with Bidet/Shattaf</p>
            <div className="flex flex-wrap gap-2">
              {hotels.withBidet.map((hotel, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded">{hotel}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

function IslamicFinanceSection({ islamicFinance }: { islamicFinance: ExtendedCityInfo['islamicFinance'] }) {
  const hasAny = islamicFinance.banks.length > 0 || islamicFinance.insurance.length > 0

  if (!hasAny) return null

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Banknote className="h-5 w-5 text-green-600" />
        Islamic Finance
      </h3>
      <div className="space-y-4">
        {islamicFinance.banks.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Islamic Banks</p>
            <div className="flex flex-wrap gap-2">
              {islamicFinance.banks.map((bank, i) => (
                <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded">{bank}</span>
              ))}
            </div>
          </div>
        )}
        {islamicFinance.insurance.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Takaful/Islamic Insurance</p>
            <div className="flex flex-wrap gap-2">
              {islamicFinance.insurance.map((ins, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded">{ins}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

function ReligiousSection({ religiousInfrastructure }: { religiousInfrastructure: ExtendedCityInfo['religiousInfrastructure'] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Building2 className="h-5 w-5 text-green-600" />
        Religious Infrastructure
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{religiousInfrastructure.numberOfMosques}</p>
            <p className="text-sm text-gray-600">Mosques</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{religiousInfrastructure.numberOfIslamicSchools}</p>
            <p className="text-sm text-gray-600">Islamic Schools</p>
          </div>
        </div>

        {religiousInfrastructure.qiblahDirection && (
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <span className="text-2xl">🧭</span>
            <div>
              <p className="font-medium text-sm">Qiblah Direction</p>
              <p className="text-sm text-gray-600">{religiousInfrastructure.qiblahDirection}</p>
            </div>
          </div>
        )}

        {religiousInfrastructure.fastingHours && (
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <Clock className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-sm">Fasting Hours</p>
              <p className="text-sm text-gray-600">{religiousInfrastructure.fastingHours}</p>
            </div>
          </div>
        )}

        {religiousInfrastructure.mosquesForJumah.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Popular Mosques for Jummah</p>
            <ul className="space-y-2">
              {religiousInfrastructure.mosquesForJumah.map((mosque, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600">&#8226;</span>
                  <span className="text-sm">{mosque}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {religiousInfrastructure.islamicSchoolNames.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Islamic Schools
            </p>
            <div className="flex flex-wrap gap-2">
              {religiousInfrastructure.islamicSchoolNames.map((school, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded">{school}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

function TourismSection({ tourism }: { tourism: ExtendedCityInfo['tourism'] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Map className="h-5 w-5 text-green-600" />
        Tourism & Attractions
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{tourism.internationalArrivals}</p>
            <p className="text-sm text-gray-600">International Visitors/year</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{tourism.muslimVisitorArrivals}</p>
            <p className="text-sm text-gray-600">Muslim Visitors/year</p>
          </div>
        </div>

        {tourism.mainAttractions.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2 flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Top Attractions
            </p>
            <div className="flex flex-wrap gap-2">
              {tourism.mainAttractions.map((attr, i) => (
                <span key={i} className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm rounded">{attr}</span>
              ))}
            </div>
          </div>
        )}

        {tourism.bestShoppingAreas.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-purple-500" />
              Best Shopping Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {tourism.bestShoppingAreas.map((area, i) => (
                <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded">{area}</span>
              ))}
            </div>
          </div>
        )}

        {tourism.famousParks.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2 flex items-center gap-2">
              <TreePine className="h-4 w-4 text-green-500" />
              Famous Parks
            </p>
            <div className="flex flex-wrap gap-2">
              {tourism.famousParks.map((park, i) => (
                <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded">{park}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

function QualityOfLifeSection({ qualityOfLife }: { qualityOfLife: ExtendedCityInfo['qualityOfLife'] }) {
  const metrics = [
    { label: 'Safety', value: qualityOfLife.safety, icon: Shield },
    { label: 'Air Quality', value: qualityOfLife.airQuality, icon: Globe },
    { label: 'Healthcare', value: qualityOfLife.healthcare, icon: Heart },
    { label: 'Happiness', value: qualityOfLife.happiness, icon: Heart },
    { label: 'Walkability', value: qualityOfLife.walkability, icon: MapPin },
    { label: 'Peace', value: qualityOfLife.peace, icon: Shield },
    { label: 'Traffic Safety', value: qualityOfLife.trafficSafety, icon: Shield },
    { label: 'Foreigner Friendly', value: qualityOfLife.friendlyToForeigners, icon: Users },
    { label: 'English Speaking', value: qualityOfLife.englishSpeaking, icon: Globe },
    { label: 'Free Speech', value: qualityOfLife.freedomOfSpeech, icon: Globe },
    { label: 'Racial Tolerance', value: qualityOfLife.racialTolerance, icon: Users },
    { label: 'Female Friendly', value: qualityOfLife.femaleFriendly, icon: Heart },
  ]

  const getBarColor = (score: number) => {
    if (score >= 8) return 'bg-green-500'
    if (score >= 6) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Heart className="h-5 w-5 text-green-600" />
        Quality of Life
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{metric.label}</span>
              <span className="text-gray-500">{metric.value}/10</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getBarColor(metric.value)} transition-all`}
                style={{ width: `${metric.value * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function PracticalInfoSection({ practicalInfo }: { practicalInfo: ExtendedCityInfo['practicalInfo'] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Globe className="h-5 w-5 text-green-600" />
        Practical Information
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <InfoItem label="Language" value={practicalInfo.language} />
        <InfoItem label="Region" value={practicalInfo.region} />
        <InfoItem label="Country" value={practicalInfo.country} />
        <InfoItem
          label="Tap Water"
          value={practicalInfo.safeTapWater ? 'Safe to drink' : 'Not recommended'}
          highlight={practicalInfo.safeTapWater}
        />
        <InfoItem
          label="Cashless Society"
          value={`${practicalInfo.cashlessSociety}/10`}
        />
        {practicalInfo.timezone && <InfoItem label="Timezone" value={practicalInfo.timezone} />}
        {practicalInfo.tippingCustom && <InfoItem label="Tipping" value={practicalInfo.tippingCustom} />}
        {practicalInfo.bestTimeToVisit && <InfoItem label="Best Time to Visit" value={practicalInfo.bestTimeToVisit} />}
      </div>
    </Card>
  )
}

function InfoItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-3 rounded-lg ${highlight ? 'bg-green-50' : 'bg-gray-50'}`}>
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`font-medium text-sm ${highlight ? 'text-green-700' : ''}`}>{value}</p>
    </div>
  )
}
