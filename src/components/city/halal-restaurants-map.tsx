"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Utensils, Star, ExternalLink } from 'lucide-react'

interface HalalRestaurantsMapProps {
  cityName: string
  latitude: number
  longitude: number
}

export function HalalRestaurantsMap({ cityName, latitude, longitude }: HalalRestaurantsMapProps) {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all')

  const cuisines = ['all', 'Turkish', 'Arab', 'Indian', 'Pakistani', 'Malaysian', 'Fast Food']

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Utensils className="h-5 w-5 text-orange-500" />
          Halal Restaurants in {cityName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Find halal-certified and Muslim-friendly restaurants
        </p>
      </div>

      {/* Cuisine Filter */}
      <div className="p-4 border-b flex gap-2 overflow-x-auto">
        {cuisines.map((cuisine) => (
          <Button
            key={cuisine}
            size="sm"
            variant={selectedCuisine === cuisine ? 'default' : 'outline'}
            onClick={() => setSelectedCuisine(cuisine)}
            className="whitespace-nowrap"
          >
            {cuisine === 'all' ? 'All Cuisines' : cuisine}
          </Button>
        ))}
      </div>

      {/* Map */}
      <div className="relative h-80 bg-gray-100">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=halal+restaurants+in+${encodeURIComponent(cityName)}&center=${latitude},${longitude}&zoom=13`}
        />
      </div>

      {/* Quick Links */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://www.google.com/maps/search/halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={`https://www.tripadvisor.com/Search?q=halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
          >
            <Star className="h-4 w-4" />
            View on TripAdvisor
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={`https://www.zabihah.com/search?q=${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
          >
            <Utensils className="h-4 w-4" />
            View on Zabihah
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
