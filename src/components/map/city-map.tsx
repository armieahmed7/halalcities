"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { City } from '@/types/city'
import { MAPBOX_TOKEN, isMapboxConfigured } from '@/lib/mapbox'
import { AlertTriangle, ExternalLink } from 'lucide-react'

// Set Mapbox token from environment
mapboxgl.accessToken = MAPBOX_TOKEN

interface CityMapProps {
  cities: City[]
  onCityClick?: (city: City) => void
}

export function CityMap({ cities, onCityClick }: CityMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [mapError, setMapError] = useState(false)

  // Check if Mapbox is configured
  const isConfigured = isMapboxConfigured()

  useEffect(() => {
    if (!mapContainer.current || map.current || !isConfigured) return

    try {
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [0, 20],
        zoom: 2,
        projection: 'mercator'
      })

      map.current.on('error', (e) => {
        console.error('Map error:', e)
        setMapError(true)
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
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
  }, [isConfigured])

  useEffect(() => {
    if (!map.current) return

    // Clear existing markers
    markers.current.forEach(marker => marker.remove())
    markers.current = []

    // Add markers for each city
    cities.forEach(city => {
      // Create custom marker element
      const el = document.createElement('div')
      el.className = 'custom-marker'
      el.style.width = '30px'
      el.style.height = '30px'
      el.style.borderRadius = '50%'
      el.style.cursor = 'pointer'
      el.style.display = 'flex'
      el.style.alignItems = 'center'
      el.style.justifyContent = 'center'
      el.style.fontSize = '16px'
      el.style.fontWeight = 'bold'
      el.style.color = 'white'
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)'
      
      // Color based on halal score
      if (city.scores.halal >= 90) {
        el.style.backgroundColor = '#10b981' // green-500
        el.innerHTML = '🕌'
      } else if (city.scores.halal >= 70) {
        el.style.backgroundColor = '#f59e0b' // amber-500
        el.innerHTML = '🕌'
      } else {
        el.style.backgroundColor = '#6b7280' // gray-500
        el.innerHTML = '•'
      }

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false
      }).setHTML(`
        <div class="p-2">
          <h3 class="font-bold text-lg">${city.name}, ${city.country}</h3>
          <div class="text-sm mt-1">
            <div>🕌 ${city.stats.mosques} mosques</div>
            <div>🍽️ ${city.stats.halalRestaurants} halal restaurants</div>
            <div>💰 $${city.stats.monthlyBudget}/mo</div>
            <div class="mt-1 font-semibold text-green-600">Halal Score: ${city.scores.halal}%</div>
          </div>
        </div>
      `)

      // Add marker to map
      const marker = new mapboxgl.Marker(el)
        .setLngLat([city.coordinates.lng, city.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current!)

      // Add click handler
      el.addEventListener('click', () => {
        if (onCityClick) {
          onCityClick(city)
        }
      })

      markers.current.push(marker)
    })

    // Fit map to show all markers
    if (cities.length > 0) {
      const bounds = new mapboxgl.LngLatBounds()
      cities.forEach(city => {
        bounds.extend([city.coordinates.lng, city.coordinates.lat])
      })
      map.current.fitBounds(bounds, { padding: 50 })
    }
  }, [cities, onCityClick])

  // Show fallback UI if Mapbox is not configured or if there's an error
  if (!isConfigured || mapError) {
    return (
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-8">
        <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Map Unavailable</h4>
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
          Interactive map is currently unavailable. Browse cities from the list below.
        </p>
        <a
          href="https://www.google.com/maps/search/muslim+friendly+cities"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Explore on Google Maps
        </a>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <h4 className="font-semibold text-sm mb-2">Halal Score</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>90%+ Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
            <span>70-89% Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <span>&lt;70% Limited</span>
          </div>
        </div>
      </div>
    </div>
  )
}