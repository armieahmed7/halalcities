import { Restaurant } from "@/types/city"
import { Card } from "@/components/ui/card"
import { Star, DollarSign } from "lucide-react"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{restaurant.name}</h3>
            <p className="text-sm text-gray-600">{restaurant.neighborhood} • {restaurant.cuisine}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{restaurant.rating}</span>
              <span className="text-xs text-gray-500">({restaurant.reviews})</span>
            </div>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <DollarSign
                  key={i}
                  className={`h-3 w-3 ${
                    i < restaurant.priceLevel ? "text-green-600" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {restaurant.certifications.map(cert => (
            <span
              key={cert}
              className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
            >
              ✓ {cert}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-1">
          {restaurant.features.map(feature => (
            <span
              key={feature}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}