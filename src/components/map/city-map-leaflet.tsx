"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { City } from '@/types/city'

// Fix for default markers in React-Leaflet
import L from 'leaflet'

// Fix the default icon issue with Leaflet in React
if (typeof window !== 'undefined') {
  // @ts-expect-error - accessing private property for Leaflet fix
  delete L.Icon.Default.prototype._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

interface CityMapProps {
  cities: City[]
  onCityClick?: (city: City) => void
}

export function CityMapLeaflet({ cities, onCityClick }: CityMapProps) {
  // Calculate center based on cities or default to world view
  const center = cities.length > 0
    ? [
        cities.reduce((sum, city) => sum + city.coordinates.lat, 0) / cities.length,
        cities.reduce((sum, city) => sum + city.coordinates.lng, 0) / cities.length,
      ] as [number, number]
    : [20, 0] as [number, number]

  // Create custom icons based on halal score
  const getMarkerIcon = (halalScore: number) => {
    const color = halalScore >= 90 ? '#10b981' : halalScore >= 70 ? '#f59e0b' : '#6b7280'

    // Use simple SVG without emoji to avoid btoa() Unicode issues
    // Design: Colored circle with mosque dome silhouette
    const svgString = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14" fill="${color}" stroke="white" stroke-width="2"/>
      <path d="M15 6 L15 8 M15 8 C12 8 10 11 10 14 L10 20 L20 20 L20 14 C20 11 18 8 15 8 M12 20 L12 16 L14 16 L14 20 M16 20 L16 16 L18 16 L18 20" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    // UTF-8 safe base64 encoding (handles any Unicode characters)
    const svgBase64 = typeof window !== 'undefined'
      ? btoa(unescape(encodeURIComponent(svgString)))
      : '';

    return new Icon({
      iconUrl: `data:image/svg+xml;base64,${svgBase64}`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15],
    })
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={center} 
        zoom={cities.length > 1 ? 3 : 10} 
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {cities.map((city) => (
          <Marker
            key={`${city.slug}-${city.coordinates.lat}-${city.coordinates.lng}`}
            position={[city.coordinates.lat, city.coordinates.lng]}
            icon={getMarkerIcon(city.scores.halal)}
            eventHandlers={{
              click: () => onCityClick?.(city),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{city.name}, {city.country}</h3>
                <div className="text-sm mt-1">
                  <div>🕌 {city.stats.mosques} mosques</div>
                  <div>🍽️ {city.stats.halalRestaurants} halal restaurants</div>
                  <div>💰 ${city.stats.monthlyBudget}/mo</div>
                  <div className="mt-1 font-semibold text-green-600">
                    Halal Score: {city.scores.halal}%
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-[1000]">
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