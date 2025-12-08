"use client"

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Utensils, Building2 } from 'lucide-react'

interface Location {
  id: string
  name: string
  address: string
  coordinates: { lat: number; lng: number }
  type: 'mosque' | 'restaurant' | 'halal-shop'
}

interface LocationMapProps {
  cityName: string
  cityCoordinates: { lat: number; lng: number }
  mosques: Array<{
    id: string
    name: string
    address: string
    coordinates: { lat: number; lng: number }
    jummahTime?: string
  }>
  restaurants: Array<{
    id: string
    name: string
    address: string
    coordinates?: { lat: number; lng: number }
    cuisine?: string
  }>
  activeFilter?: 'all' | 'mosques' | 'restaurants'
  onLocationSelect?: (location: Location) => void
}

export function LocationMap({
  cityName,
  cityCoordinates,
  mosques,
  restaurants,
  activeFilter = 'all',
  onLocationSelect
}: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [filter, setFilter] = useState<'all' | 'mosques' | 'restaurants'>(activeFilter)

  // Filter locations based on active filter
  const filteredMosques = filter === 'restaurants' ? [] : mosques
  const filteredRestaurants = filter === 'mosques' ? [] : restaurants.filter(r => r.coordinates)

  const allLocations: Location[] = [
    ...filteredMosques.map(m => ({
      id: m.id,
      name: m.name,
      address: m.address,
      coordinates: m.coordinates,
      type: 'mosque' as const
    })),
    ...filteredRestaurants.map(r => ({
      id: r.id,
      name: r.name,
      address: r.address,
      coordinates: r.coordinates!,
      type: 'restaurant' as const
    }))
  ]

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    onLocationSelect?.(location)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Filter Buttons */}
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-semibold text-lg">Map of {cityName}</h3>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            <MapPin className="h-4 w-4 mr-1" />
            All
          </Button>
          <Button
            size="sm"
            variant={filter === 'mosques' ? 'default' : 'outline'}
            onClick={() => setFilter('mosques')}
          >
            <Building2 className="h-4 w-4 mr-1" />
            Mosques ({mosques.length})
          </Button>
          <Button
            size="sm"
            variant={filter === 'restaurants' ? 'default' : 'outline'}
            onClick={() => setFilter('restaurants')}
          >
            <Utensils className="h-4 w-4 mr-1" />
            Restaurants ({restaurants.filter(r => r.coordinates).length})
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <div ref={mapRef} className="relative h-96 bg-gray-100">
        {/* Placeholder map with location markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="mb-4">
              <iframe
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=mosques+halal+restaurants+in+${encodeURIComponent(cityName)}&center=${cityCoordinates.lat},${cityCoordinates.lng}&zoom=12`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location List */}
      <div className="p-4 border-t max-h-64 overflow-y-auto">
        <div className="text-sm text-gray-500 mb-3">
          Showing {allLocations.length} locations
        </div>
        <div className="space-y-2">
          {allLocations.slice(0, 10).map((location) => (
            <div
              key={location.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedLocation?.id === location.id
                  ? 'border-green-500 bg-green-50'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  location.type === 'mosque' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {location.type === 'mosque' ? <Building2 className="h-4 w-4" /> : <Utensils className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{location.name}</h4>
                  <p className="text-xs text-gray-500">{location.address}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ' ' + location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
          {allLocations.length > 10 && (
            <p className="text-sm text-gray-500 text-center py-2">
              + {allLocations.length - 10} more locations
            </p>
          )}
          {allLocations.length === 0 && (
            <p className="text-sm text-gray-500 text-center py-4">
              No locations found. Data coming soon...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
