"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from '@/components/ui/button'
import { Building2, Utensils, MapPin, Navigation, Layers, X, ChevronRight } from 'lucide-react'

// Mapbox public token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

interface Mosque {
  id: string
  name: string
  address: string
  coordinates: { lat: number; lng: number }
  jummahTime?: string
  capacity?: string
}

interface Restaurant {
  id: string
  name: string
  address: string
  coordinates?: { lat: number; lng: number }
  cuisine?: string
  rating?: number
  priceRange?: string
}

interface Neighborhood {
  name: string
  description: string
  coordinates?: { lat: number; lng: number }
  muslimPopulation?: string
}

interface ModernCityMapProps {
  cityName: string
  cityCoordinates: { lat: number; lng: number }
  mosques?: Mosque[]
  restaurants?: Restaurant[]
  neighborhoods?: Neighborhood[]
  halalScore?: number
  className?: string
}

type FilterType = 'all' | 'mosques' | 'restaurants' | 'neighborhoods'

// Custom SVG icons for markers
const createMosqueMarker = () => {
  const el = document.createElement('div')
  el.className = 'mosque-marker'
  el.innerHTML = `
    <div style="
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    ">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L12 4" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 4C8 4 5 8 5 12V20H19V12C19 8 16 4 12 4Z" fill="white" fill-opacity="0.3" stroke="white" stroke-width="1.5"/>
        <path d="M9 20V16C9 14.9 9.9 14 11 14H13C14.1 14 15 14.9 15 16V20" stroke="white" stroke-width="1.5"/>
        <circle cx="12" cy="9" r="2" fill="white" fill-opacity="0.5"/>
      </svg>
    </div>
  `
  el.querySelector('div')?.addEventListener('mouseenter', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1.15)'
  })
  el.querySelector('div')?.addEventListener('mouseleave', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1)'
  })
  return el
}

const createRestaurantMarker = () => {
  const el = document.createElement('div')
  el.className = 'restaurant-marker'
  el.innerHTML = `
    <div style="
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(234, 88, 12, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3Z" fill="white"/>
        <path d="M16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z" fill="white"/>
      </svg>
    </div>
  `
  el.querySelector('div')?.addEventListener('mouseenter', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1.15)'
  })
  el.querySelector('div')?.addEventListener('mouseleave', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1)'
  })
  return el
}

const createNeighborhoodMarker = () => {
  const el = document.createElement('div')
  el.className = 'neighborhood-marker'
  el.innerHTML = `
    <div style="
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
      </svg>
    </div>
  `
  el.querySelector('div')?.addEventListener('mouseenter', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1.15)'
  })
  el.querySelector('div')?.addEventListener('mouseleave', (e) => {
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(1)'
  })
  return el
}

export function ModernCityMap({
  cityName,
  cityCoordinates,
  mosques = [],
  restaurants = [],
  neighborhoods = [],
  halalScore,
  className = ''
}: ModernCityMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedItem, setSelectedItem] = useState<{
    type: 'mosque' | 'restaurant' | 'neighborhood'
    data: Mosque | Restaurant | Neighborhood
  } | null>(null)
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite' | 'dark'>('streets')
  const [isLoaded, setIsLoaded] = useState(false)

  const getMapStyleUrl = useCallback((style: 'streets' | 'satellite' | 'dark') => {
    switch (style) {
      case 'satellite':
        return 'mapbox://styles/mapbox/satellite-streets-v12'
      case 'dark':
        return 'mapbox://styles/mapbox/dark-v11'
      default:
        return 'mapbox://styles/mapbox/light-v11'
    }
  }, [])

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: getMapStyleUrl(mapStyle),
      center: [cityCoordinates.lng, cityCoordinates.lat],
      zoom: 12,
      pitch: 45,
      bearing: -17.6,
      antialias: true
    })

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'top-right'
    )

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')

    // Add geolocate control
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showUserHeading: true
      }),
      'top-right'
    )

    // Add 3D buildings on load
    map.current.on('load', () => {
      setIsLoaded(true)

      // Add 3D building layer
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
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          },
          labelLayerId
        )
      }
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [cityCoordinates, getMapStyleUrl, mapStyle])

  // Handle style changes
  useEffect(() => {
    if (map.current && isLoaded) {
      map.current.setStyle(getMapStyleUrl(mapStyle))
    }
  }, [mapStyle, getMapStyleUrl, isLoaded])

  // Add markers based on filter
  useEffect(() => {
    if (!map.current || !isLoaded) return

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    // Add mosque markers
    if (filter === 'all' || filter === 'mosques') {
      mosques.forEach(mosque => {
        const el = createMosqueMarker()

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          className: 'modern-popup'
        }).setHTML(`
          <div style="padding: 12px; min-width: 200px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 32px; height: 32px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L12 4M12 4C8 4 5 8 5 12V20H19V12C19 8 16 4 12 4ZM9 20V16C9 14.9 9.9 14 11 14H13C14.1 14 15 14.9 15 16V20"/>
                </svg>
              </div>
              <h3 style="font-weight: 600; font-size: 14px; color: #1f2937; margin: 0;">${mosque.name}</h3>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">${mosque.address}</p>
            ${mosque.jummahTime ? `<p style="font-size: 11px; color: #059669; margin: 0;">Jummah: ${mosque.jummahTime}</p>` : ''}
            <a href="https://www.google.com/maps/dir/?api=1&destination=${mosque.coordinates.lat},${mosque.coordinates.lng}"
               target="_blank"
               rel="noopener noreferrer"
               style="display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-size: 12px; color: #059669; text-decoration: none;">
              Get Directions →
            </a>
          </div>
        `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([mosque.coordinates.lng, mosque.coordinates.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => {
          setSelectedItem({ type: 'mosque', data: mosque })
        })

        markersRef.current.push(marker)
      })
    }

    // Add restaurant markers
    if (filter === 'all' || filter === 'restaurants') {
      restaurants.filter(r => r.coordinates).forEach(restaurant => {
        const el = createRestaurantMarker()

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          className: 'modern-popup'
        }).setHTML(`
          <div style="padding: 12px; min-width: 200px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 32px; height: 32px; background: #f97316; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M3 2V11C3 12.1 3.9 13 5 13H6V22H8V13H9C10.1 13 11 12.1 11 11V2H9V8H8V2H6V8H5V2H3ZM16 6V14H18V22H20V2C17.79 2 16 3.79 16 6Z"/>
                </svg>
              </div>
              <div>
                <h3 style="font-weight: 600; font-size: 14px; color: #1f2937; margin: 0;">${restaurant.name}</h3>
                ${restaurant.cuisine ? `<span style="font-size: 11px; color: #f97316;">${restaurant.cuisine}</span>` : ''}
              </div>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">${restaurant.address}</p>
            ${restaurant.rating ? `<p style="font-size: 11px; color: #f59e0b; margin: 0;">⭐ ${restaurant.rating}/5 ${restaurant.priceRange || ''}</p>` : ''}
            <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates!.lat},${restaurant.coordinates!.lng}"
               target="_blank"
               rel="noopener noreferrer"
               style="display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-size: 12px; color: #f97316; text-decoration: none;">
              Get Directions →
            </a>
          </div>
        `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([restaurant.coordinates!.lng, restaurant.coordinates!.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => {
          setSelectedItem({ type: 'restaurant', data: restaurant })
        })

        markersRef.current.push(marker)
      })
    }

    // Add neighborhood markers
    if (filter === 'all' || filter === 'neighborhoods') {
      neighborhoods.filter(n => n.coordinates).forEach(neighborhood => {
        const el = createNeighborhoodMarker()

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          className: 'modern-popup'
        }).setHTML(`
          <div style="padding: 12px; min-width: 200px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 32px; height: 32px; background: #8b5cf6; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                </svg>
              </div>
              <h3 style="font-weight: 600; font-size: 14px; color: #1f2937; margin: 0;">${neighborhood.name}</h3>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">${neighborhood.description}</p>
            ${neighborhood.muslimPopulation ? `<p style="font-size: 11px; color: #8b5cf6; margin: 0;">Muslim Population: ${neighborhood.muslimPopulation}</p>` : ''}
          </div>
        `)

        const marker = new mapboxgl.Marker(el)
          .setLngLat([neighborhood.coordinates!.lng, neighborhood.coordinates!.lat])
          .setPopup(popup)
          .addTo(map.current!)

        el.addEventListener('click', () => {
          setSelectedItem({ type: 'neighborhood', data: neighborhood })
        })

        markersRef.current.push(marker)
      })
    }
  }, [filter, mosques, restaurants, neighborhoods, isLoaded])

  const flyToLocation = (coordinates: { lat: number; lng: number }) => {
    map.current?.flyTo({
      center: [coordinates.lng, coordinates.lat],
      zoom: 16,
      pitch: 60,
      bearing: Math.random() * 180 - 90,
      duration: 2000
    })
  }

  const resetView = () => {
    map.current?.flyTo({
      center: [cityCoordinates.lng, cityCoordinates.lat],
      zoom: 12,
      pitch: 45,
      bearing: -17.6,
      duration: 1500
    })
    setSelectedItem(null)
  }

  const mosquesWithCoords = mosques.filter(m => m.coordinates)
  const restaurantsWithCoords = restaurants.filter(r => r.coordinates)
  const neighborhoodsWithCoords = neighborhoods.filter(n => n.coordinates)

  return (
    <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-white/95 to-white/0 pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <div>
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-emerald-600" />
              {cityName}
            </h3>
            {halalScore && (
              <p className="text-sm text-emerald-600 font-medium">
                Halal Score: {halalScore}%
              </p>
            )}
          </div>

          {/* Map Style Toggle */}
          <div className="flex gap-1 bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setMapStyle('streets')}
              className={`p-2 rounded-md transition-colors ${
                mapStyle === 'streets' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-500 hover:text-gray-700'
              }`}
              title="Street Map"
            >
              <Layers className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMapStyle('satellite')}
              className={`p-2 rounded-md transition-colors ${
                mapStyle === 'satellite' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-500 hover:text-gray-700'
              }`}
              title="Satellite"
            >
              <MapPin className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMapStyle('dark')}
              className={`p-2 rounded-md transition-colors ${
                mapStyle === 'dark' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-500 hover:text-gray-700'
              }`}
              title="Dark Mode"
            >
              <Navigation className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="absolute top-20 left-4 z-10 flex flex-col gap-2">
        <Button
          size="sm"
          variant={filter === 'all' ? 'default' : 'secondary'}
          onClick={() => setFilter('all')}
          className={`shadow-md ${filter === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-white/90 hover:bg-white'}`}
        >
          <MapPin className="h-4 w-4 mr-1" />
          All
        </Button>
        {mosquesWithCoords.length > 0 && (
          <Button
            size="sm"
            variant={filter === 'mosques' ? 'default' : 'secondary'}
            onClick={() => setFilter('mosques')}
            className={`shadow-md ${filter === 'mosques' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-white/90 hover:bg-white'}`}
          >
            <Building2 className="h-4 w-4 mr-1" />
            Mosques ({mosquesWithCoords.length})
          </Button>
        )}
        {restaurantsWithCoords.length > 0 && (
          <Button
            size="sm"
            variant={filter === 'restaurants' ? 'default' : 'secondary'}
            onClick={() => setFilter('restaurants')}
            className={`shadow-md ${filter === 'restaurants' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/90 hover:bg-white'}`}
          >
            <Utensils className="h-4 w-4 mr-1" />
            Restaurants ({restaurantsWithCoords.length})
          </Button>
        )}
        {neighborhoodsWithCoords.length > 0 && (
          <Button
            size="sm"
            variant={filter === 'neighborhoods' ? 'default' : 'secondary'}
            onClick={() => setFilter('neighborhoods')}
            className={`shadow-md ${filter === 'neighborhoods' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-white/90 hover:bg-white'}`}
          >
            <MapPin className="h-4 w-4 mr-1" />
            Neighborhoods ({neighborhoodsWithCoords.length})
          </Button>
        )}
      </div>

      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-[500px]" />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg">
        <h4 className="font-semibold text-xs mb-2 text-gray-700">Legend</h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500" />
            <span className="text-gray-600">Mosques</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-600 to-orange-500" />
            <span className="text-gray-600">Halal Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-purple-500" />
            <span className="text-gray-600">Muslim Neighborhoods</span>
          </div>
        </div>
      </div>

      {/* Selected Item Panel */}
      {selectedItem && (
        <div className="absolute bottom-4 right-4 z-10 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-in slide-in-from-right">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>

          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              selectedItem.type === 'mosque' ? 'bg-emerald-100 text-emerald-600' :
              selectedItem.type === 'restaurant' ? 'bg-orange-100 text-orange-600' :
              'bg-purple-100 text-purple-600'
            }`}>
              {selectedItem.type === 'mosque' && <Building2 className="h-5 w-5" />}
              {selectedItem.type === 'restaurant' && <Utensils className="h-5 w-5" />}
              {selectedItem.type === 'neighborhood' && <MapPin className="h-5 w-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 truncate">
                {selectedItem.data.name}
              </h4>
              {'address' in selectedItem.data && (
                <p className="text-xs text-gray-500 mt-1">{selectedItem.data.address}</p>
              )}
              {'description' in selectedItem.data && (
                <p className="text-xs text-gray-500 mt-1">{selectedItem.data.description}</p>
              )}
              {'cuisine' in selectedItem.data && selectedItem.data.cuisine && (
                <span className="inline-block mt-1 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                  {selectedItem.data.cuisine}
                </span>
              )}
            </div>
          </div>

          {'coordinates' in selectedItem.data && selectedItem.data.coordinates && (
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
                onClick={() => flyToLocation(selectedItem.data.coordinates as { lat: number; lng: number })}
              >
                <Navigation className="h-3 w-3 mr-1" />
                Focus
              </Button>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${(selectedItem.data.coordinates as { lat: number; lng: number }).lat},${(selectedItem.data.coordinates as { lat: number; lng: number }).lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="sm" className="w-full text-xs bg-emerald-600 hover:bg-emerald-700">
                  Directions
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Reset View Button */}
      <button
        onClick={resetView}
        className="absolute bottom-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-colors"
        title="Reset View"
        style={{ display: selectedItem ? 'none' : 'block' }}
      >
        <Navigation className="h-4 w-4 text-gray-600" />
      </button>

      {/* Custom Styles */}
      <style jsx global>{`
        .mapboxgl-popup-content {
          padding: 0 !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .mapboxgl-popup-close-button {
          font-size: 18px;
          padding: 4px 8px;
          color: #6b7280;
        }
        .mapboxgl-popup-close-button:hover {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .mapboxgl-ctrl-group {
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }
        .mapboxgl-ctrl-group button {
          width: 36px !important;
          height: 36px !important;
        }
      `}</style>
    </div>
  )
}
