"use client"

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Mapbox public token (you can replace with your own)
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

interface City {
  id: string
  name: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  scores: {
    halal: number
    overall: number
  }
  stats: {
    mosquesCount: number
    halalRestaurants: number
    monthlyBudget: number
  }
}

interface CityMapProps {
  cities: City[]
  onCityClick?: (city: City) => void
}

export function CityMap({ cities, onCityClick }: CityMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 2,
      projection: 'mercator'
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => {
      map.current?.remove()
    }
  }, [])

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
            <div>🕌 ${city.stats.mosquesCount} mosques</div>
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