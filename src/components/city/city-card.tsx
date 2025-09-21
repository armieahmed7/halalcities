import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { City } from "@/types/city"
import { Users, Utensils } from "lucide-react"

interface CityCardProps {
  city: City
}

export function CityCard({ city }: CityCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`
    return num.toString()
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Link href={`/city/${city.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={city.primaryImage}
            alt={city.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* City name overlay */}
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-xl font-bold">{city.name}</h3>
            <p className="text-sm opacity-90">{city.country}</p>
          </div>

          {/* Cost badge */}
          <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${city.stats.monthlyBudget}/mo
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Key stats */}
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-green-600">🕌</span>
              <span className={getScoreColor(city.scores.halal)}>
                {city.scores.halal}%
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 text-gray-500" />
              <span>{formatNumber(city.stats.muslimPopulation)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Utensils className="h-3 w-3 text-gray-500" />
              <span className={getScoreColor(city.scores.food)}>
                {city.scores.food}
              </span>
            </div>
          </div>

          {/* Score bars */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-16">Halal</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600 transition-all"
                  style={{ width: `${city.scores.halal}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-16">Community</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600 transition-all"
                  style={{ width: `${city.scores.community}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>{city.stats.mosques} mosques</span>
            <span>{city.stats.halalRestaurants} halal places</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}