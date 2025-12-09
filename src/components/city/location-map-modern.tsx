"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from '@/components/ui/button'
import { Building2, Utensils, MapPin, Navigation, ExternalLink, AlertTriangle } from 'lucide-react'
import { MAPBOX_TOKEN, isMapboxConfigured } from '@/lib/mapbox'

// Set Mapbox token from environment
mapboxgl.accessToken = MAPBOX_TOKEN

interface Location {
  id: string
  name: string
  address: string
  coordinates: { lat: number; lng: number }
  type: 'mosque' | 'restaurant' | 'halal-shop'
}

interface LocationMapModernProps {
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

// SVG marker creators
const createMarkerElement = (type: 'mosque' | 'restaurant') => {
  const el = document.createElement('div')
  const colors = type === 'mosque'
    ? { primary: '#059669', secondary: '#10b981' }
    : { primary: '#ea580c', secondary: '#f97316' }

  const icon = type === 'mosque'
    ? `<path d="M12 2L12 4M12 4C8 4 5 8 5 12V20H19V12C19 8 16 4 12 4ZM9 20V16C9 14.9 9.9 14 11 14H13C14.1 14 15 14.9 15 16V20" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/>`
    : `<path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3ZM16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z" fill="white"/>`

  el.innerHTML = `
    <div class="marker-container" style="
      width: ${type === 'mosque' ? '40px' : '36px'};
      height: ${type === 'mosque' ? '40px' : '36px'};
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    ">
      <svg width="${type === 'mosque' ? '20' : '18'}" height="${type === 'mosque' ? '20' : '18'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        ${icon}
      </svg>
    </div>
  `

  const container = el.querySelector('.marker-container') as HTMLElement
  container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.15)'
    container.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)'
  })
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)'
    container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)'
  })

  return el
}

export function LocationMapModern({
  cityName,
  cityCoordinates,
  mosques,
  restaurants,
  activeFilter = 'all',
  onLocationSelect
}: LocationMapModernProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const [filter, setFilter] = useState<'all' | 'mosques' | 'restaurants'>(activeFilter)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  // Check if Mapbox is configured
  const isConfigured = isMapboxConfigured()

  // Filter locations
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

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current || !isConfigured) return

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [cityCoordinates.lng, cityCoordinates.lat],
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
  }, [cityCoordinates, isConfigured])

  // Add markers
  useEffect(() => {
    if (!map.current || !isLoaded) return

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    // Add mosque markers
    if (filter === 'all' || filter === 'mosques') {
      mosques.forEach(mosque => {
        const el = createMarkerElement('mosque')

        const popup = new mapboxgl.Popup({ offset: 25, closeButton: true })
          .setHTML(`
            <div style="padding: 12px; min-width: 180px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L12 4M12 4C8 4 5 8 5 12V20H19V12C19 8 16 4 12 4Z" stroke="white" stroke-width="2"/></svg>
                </div>
                <h3 style="font-weight: 600; font-size: 13px; margin: 0;">${mosque.name}</h3>
              </div>
              <p style="font-size: 11px; color: #6b7280; margin: 0 0 6px 0;">${mosque.address}</p>
              ${mosque.jummahTime ? `<p style="font-size: 10px; color: #059669; margin: 0;">Jummah: ${mosque.jummahTime}</p>` : ''}
              <a href="https://www.google.com/maps/dir/?api=1&destination=${mosque.coordinates.lat},${mosque.coordinates.lng}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-size: 11px; color: #059669; text-decoration: none;">Get Directions →</a>
            </div>
          `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([mosque.coordinates.lng, mosque.coordinates.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => {
          const loc: Location = {
            id: mosque.id,
            name: mosque.name,
            address: mosque.address,
            coordinates: mosque.coordinates,
            type: 'mosque'
          }
          setSelectedLocation(loc)
          onLocationSelect?.(loc)
        })

        markersRef.current.push(marker)
      })
    }

    // Add restaurant markers
    if (filter === 'all' || filter === 'restaurants') {
      restaurants.filter(r => r.coordinates).forEach(restaurant => {
        const el = createMarkerElement('restaurant')

        const popup = new mapboxgl.Popup({ offset: 25, closeButton: true })
          .setHTML(`
            <div style="padding: 12px; min-width: 180px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="width: 28px; height: 28px; background: #f97316; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3ZM16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z"/></svg>
                </div>
                <div>
                  <h3 style="font-weight: 600; font-size: 13px; margin: 0;">${restaurant.name}</h3>
                  ${restaurant.cuisine ? `<span style="font-size: 10px; color: #f97316;">${restaurant.cuisine}</span>` : ''}
                </div>
              </div>
              <p style="font-size: 11px; color: #6b7280; margin: 0 0 6px 0;">${restaurant.address}</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates!.lat},${restaurant.coordinates!.lng}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-size: 11px; color: #f97316; text-decoration: none;">Get Directions →</a>
            </div>
          `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([restaurant.coordinates!.lng, restaurant.coordinates!.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => {
          const loc: Location = {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            coordinates: restaurant.coordinates!,
            type: 'restaurant'
          }
          setSelectedLocation(loc)
          onLocationSelect?.(loc)
        })

        markersRef.current.push(marker)
      })
    }
  }, [filter, mosques, restaurants, isLoaded, onLocationSelect])

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    onLocationSelect?.(location)
    map.current?.flyTo({
      center: [location.coordinates.lng, location.coordinates.lat],
      zoom: 16,
      pitch: 45,
      duration: 1000
    })
  }

  // Show fallback UI if Mapbox is not configured or if there's an error
  if (!isConfigured || mapError) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
            <MapPin className="h-5 w-5 text-emerald-600" />
            Map of {cityName}
          </h3>
        </div>
        <div className="h-64 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
          <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Map Unavailable</h4>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-4">
            Interactive map is currently unavailable. Please use the links below to view locations.
          </p>
          <a
            href={`https://www.google.com/maps/search/mosques+halal+restaurants+${encodeURIComponent(cityName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Filter Buttons */}
      <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
          <MapPin className="h-5 w-5 text-emerald-600" />
          Map of {cityName}
        </h3>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            <MapPin className="h-4 w-4 mr-1" />
            All
          </Button>
          <Button
            size="sm"
            variant={filter === 'mosques' ? 'default' : 'outline'}
            onClick={() => setFilter('mosques')}
            className={filter === 'mosques' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            <Building2 className="h-4 w-4 mr-1" />
            Mosques ({mosques.length})
          </Button>
          <Button
            size="sm"
            variant={filter === 'restaurants' ? 'default' : 'outline'}
            onClick={() => setFilter('restaurants')}
            className={filter === 'restaurants' ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            <Utensils className="h-4 w-4 mr-1" />
            Restaurants ({restaurants.filter(r => r.coordinates).length})
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <div ref={mapContainer} className="h-96 w-full" />

      {/* Location List */}
      <div className="p-4 border-t dark:border-gray-700 max-h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center justify-between">
          <span>Showing {allLocations.length} locations</span>
          {allLocations.length > 0 && (
            <a
              href={`https://www.google.com/maps/search/mosques+halal+restaurants+${encodeURIComponent(cityName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-xs"
            >
              Open in Google Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
        <div className="space-y-2">
          {allLocations.slice(0, 10).map((location) => (
            <div
              key={location.id}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                selectedLocation?.id === location.id
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm'
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm ${
                  location.type === 'mosque'
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white'
                    : 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
                }`}>
                  {location.type === 'mosque' ? <Building2 className="h-4 w-4" /> : <Utensils className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">{location.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{location.address}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Navigation className="h-3 w-3" />
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
            <p className="text-sm text-gray-500 text-center py-6">
              No locations found with coordinates. View on Google Maps for more options.
            </p>
          )}
        </div>
      </div>

      {/* Custom popup styles */}
      <style jsx global>{`
        .mapboxgl-popup-content {
          padding: 0 !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .mapboxgl-popup-close-button {
          font-size: 16px;
          padding: 4px 8px;
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
