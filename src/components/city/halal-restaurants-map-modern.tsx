"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from '@/components/ui/button'
import { Utensils, Star, ExternalLink, MapPin, Filter, AlertTriangle } from 'lucide-react'
import { MAPBOX_TOKEN, isMapboxConfigured } from '@/lib/mapbox'

// Set Mapbox token from environment
mapboxgl.accessToken = MAPBOX_TOKEN

interface Restaurant {
  id: string
  name: string
  address: string
  coordinates?: { lat: number; lng: number }
  cuisine?: string
  rating?: number
  priceRange?: string
  isVerified?: boolean
}

interface HalalRestaurantsMapModernProps {
  cityName: string
  latitude: number
  longitude: number
  restaurants?: Restaurant[]
}

const createRestaurantMarker = (restaurant: Restaurant) => {
  const el = document.createElement('div')
  const isVerified = restaurant.isVerified

  el.innerHTML = `
    <div class="restaurant-marker" style="
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, ${isVerified ? '#059669' : '#ea580c'} 0%, ${isVerified ? '#10b981' : '#f97316'} 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
    ">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3Z"/>
        <path d="M16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z"/>
      </svg>
      ${isVerified ? `
        <div style="
          position: absolute;
          top: -2px;
          right: -2px;
          width: 14px;
          height: 14px;
          background: #059669;
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
      ` : ''}
    </div>
  `

  const marker = el.querySelector('.restaurant-marker') as HTMLElement
  marker.addEventListener('mouseenter', () => {
    marker.style.transform = 'scale(1.15)'
    marker.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)'
  })
  marker.addEventListener('mouseleave', () => {
    marker.style.transform = 'scale(1)'
    marker.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.3)'
  })

  return el
}

export function HalalRestaurantsMapModern({
  cityName,
  latitude,
  longitude,
  restaurants = []
}: HalalRestaurantsMapModernProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all')
  const [isLoaded, setIsLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  // Check if Mapbox is configured
  const isConfigured = isMapboxConfigured()

  const cuisines = ['all', 'Turkish', 'Arab', 'Indian', 'Pakistani', 'Malaysian', 'Fast Food', 'Mediterranean']

  const filteredRestaurants = selectedCuisine === 'all'
    ? restaurants
    : restaurants.filter(r => r.cuisine?.toLowerCase().includes(selectedCuisine.toLowerCase()))

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current || !isConfigured) return

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: 13,
        pitch: 30,
        antialias: true
      })

      map.current.on('error', (e) => {
        console.error('Map error:', e)
        setMapError(true)
      })

      map.current.addControl(
        new mapboxgl.NavigationControl({ visualizePitch: true }),
        'top-right'
      )

      map.current.on('load', () => {
        setIsLoaded(true)

        // Add 3D buildings
        const layers = map.current?.getStyle()?.layers
        if (layers) {
          const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout?.['text-field']
          )?.id

          map.current?.addLayer(
            {
              id: '3d-buildings',
              source: 'composite',
              'source-layer': 'building',
              filter: ['==', 'extrude', 'true'],
              type: 'fill-extrusion',
              minzoom: 14,
              paint: {
                'fill-extrusion-color': '#e5e7eb',
                'fill-extrusion-height': [
                  'interpolate', ['linear'], ['zoom'],
                  14, 0,
                  14.05, ['get', 'height']
                ],
                'fill-extrusion-base': [
                  'interpolate', ['linear'], ['zoom'],
                  14, 0,
                  14.05, ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.5
              }
            },
            labelLayerId
          )
        }
      })
    } catch (e) {
      console.error('Failed to initialize map:', e)
      setMapError(true)
    }

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [latitude, longitude, isConfigured])

  // Add markers
  useEffect(() => {
    if (!map.current || !isLoaded) return

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    // Add restaurant markers
    filteredRestaurants.filter(r => r.coordinates).forEach(restaurant => {
      const el = createRestaurantMarker(restaurant)

      const ratingStars = restaurant.rating
        ? '⭐'.repeat(Math.round(restaurant.rating))
        : ''

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: true })
        .setHTML(`
          <div style="padding: 14px; min-width: 200px;">
            <div style="display: flex; align-items: start; gap: 10px; margin-bottom: 10px;">
              <div style="
                width: 36px;
                height: 36px;
                background: linear-gradient(135deg, ${restaurant.isVerified ? '#059669' : '#f97316'} 0%, ${restaurant.isVerified ? '#10b981' : '#fb923c'} 100%);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3ZM16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z"/>
                </svg>
              </div>
              <div style="flex: 1; min-width: 0;">
                <h3 style="font-weight: 600; font-size: 14px; color: #1f2937; margin: 0; line-height: 1.3;">${restaurant.name}</h3>
                ${restaurant.cuisine ? `<span style="font-size: 11px; color: #f97316; display: block; margin-top: 2px;">${restaurant.cuisine}</span>` : ''}
              </div>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">${restaurant.address}</p>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
              ${restaurant.rating ? `<span style="font-size: 12px; color: #f59e0b;">${ratingStars} ${restaurant.rating}</span>` : ''}
              ${restaurant.priceRange ? `<span style="font-size: 11px; color: #6b7280; background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">${restaurant.priceRange}</span>` : ''}
              ${restaurant.isVerified ? `<span style="font-size: 10px; color: #059669; background: #d1fae5; padding: 2px 6px; border-radius: 4px; font-weight: 500;">✓ Halal Verified</span>` : ''}
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates!.lat},${restaurant.coordinates!.lng}"
               target="_blank"
               rel="noopener noreferrer"
               style="
                 display: inline-flex;
                 align-items: center;
                 gap: 6px;
                 padding: 8px 12px;
                 background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
                 color: white;
                 border-radius: 6px;
                 font-size: 12px;
                 font-weight: 500;
                 text-decoration: none;
                 box-shadow: 0 2px 4px rgba(249, 115, 22, 0.3);
               ">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>
              Get Directions
            </a>
          </div>
        `)

      const marker = new mapboxgl.Marker(el)
        .setLngLat([restaurant.coordinates!.lng, restaurant.coordinates!.lat])
        .setPopup(popup)
        .addTo(map.current!)

      markersRef.current.push(marker)
    })

    // Fit bounds to show all markers
    if (filteredRestaurants.filter(r => r.coordinates).length > 0) {
      const bounds = new mapboxgl.LngLatBounds()
      filteredRestaurants.filter(r => r.coordinates).forEach(r => {
        bounds.extend([r.coordinates!.lng, r.coordinates!.lat])
      })
      map.current?.fitBounds(bounds, { padding: 60, maxZoom: 15 })
    }
  }, [filteredRestaurants, isLoaded])

  const restaurantsWithCoords = restaurants.filter(r => r.coordinates)

  // Show fallback UI if Mapbox is not configured or if there's an error
  if (!isConfigured || mapError) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
          <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
              <Utensils className="h-4 w-4 text-white" />
            </div>
            Halal Restaurants in {cityName}
          </h3>
        </div>
        <div className="h-64 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
          <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Map Unavailable</h4>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
            Interactive map is currently unavailable. Please use the links below to find restaurants.
          </p>
          <a
            href={`https://www.google.com/maps/search/halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Find Halal Restaurants on Google Maps
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
        <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
            <Utensils className="h-4 w-4 text-white" />
          </div>
          Halal Restaurants in {cityName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Find halal-certified and Muslim-friendly restaurants
        </p>
      </div>

      {/* Cuisine Filter */}
      <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Cuisine</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {cuisines.map((cuisine) => (
            <Button
              key={cuisine}
              size="sm"
              variant={selectedCuisine === cuisine ? 'default' : 'outline'}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`whitespace-nowrap ${
                selectedCuisine === cuisine
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'hover:bg-orange-50 hover:border-orange-300'
              }`}
            >
              {cuisine === 'all' ? 'All Cuisines' : cuisine}
            </Button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div ref={mapContainer} className="h-80 w-full" />

      {/* Stats & Quick Links */}
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{restaurantsWithCoords.length}</div>
              <div className="text-xs text-gray-500">On Map</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {restaurants.filter(r => r.isVerified).length}
              </div>
              <div className="text-xs text-gray-500">Verified</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600" />
              Halal Verified
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600" />
              Reported Halal
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`https://www.google.com/maps/search/halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-gray-700 dark:text-gray-300"
          >
            <MapPin className="h-4 w-4 text-emerald-600" />
            Open in Google Maps
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </a>
          <a
            href={`https://www.tripadvisor.com/Search?q=halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-gray-700 dark:text-gray-300"
          >
            <Star className="h-4 w-4 text-amber-500" />
            View on TripAdvisor
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </a>
          <a
            href={`https://www.zabihah.com/search?q=${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-gray-700 dark:text-gray-300"
          >
            <Utensils className="h-4 w-4 text-orange-500" />
            View on Zabihah
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Custom popup styles */}
      <style jsx global>{`
        .mapboxgl-popup-content {
          padding: 0 !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
        }
        .mapboxgl-popup-close-button {
          font-size: 18px;
          padding: 6px 10px;
          color: #6b7280;
        }
        .mapboxgl-popup-close-button:hover {
          background: #f3f4f6;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}
