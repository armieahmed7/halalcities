"use client"

import { useState, useEffect } from "react"
import { Compass, Navigation, MapPin, Info } from "lucide-react"
import { calculateQiblaDirection } from "@/lib/prayer-times"

interface QiblaCompassProps {
  latitude: number
  longitude: number
  cityName?: string
}

export function QiblaCompass({ latitude, longitude, cityName }: QiblaCompassProps) {
  const [qiblaDirection, setQiblaDirection] = useState<number>(0)
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [isSupported, setIsSupported] = useState(true)

  const coordinates = { lat: latitude, lng: longitude }

  // Calculate Qibla direction
  useEffect(() => {
    const direction = calculateQiblaDirection(coordinates)
    setQiblaDirection(Math.round(direction))
  }, [latitude, longitude])

  // Request device orientation permission (iOS 13+)
  const requestPermission = async () => {
    if (typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission()
        setHasPermission(permission === 'granted')
      } catch {
        setHasPermission(false)
      }
    } else {
      // Non-iOS or older browsers
      setHasPermission(true)
    }
  }

  // Listen to device orientation
  useEffect(() => {
    if (hasPermission === false) return

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        // alpha is the compass direction
        // On iOS, we might need to use webkitCompassHeading
        const heading = (event as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading ?? event.alpha
        setDeviceHeading(heading)
      }
    }

    // Check if DeviceOrientationEvent is supported
    if (!window.DeviceOrientationEvent) {
      setIsSupported(false)
      return
    }

    window.addEventListener('deviceorientation', handleOrientation, true)

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true)
    }
  }, [hasPermission])

  // Calculate the rotation needed to point to Qibla
  const qiblaRotation = deviceHeading !== null
    ? qiblaDirection - deviceHeading
    : 0

  // Cardinal direction helper
  const getCardinalDirection = (degrees: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.round(((degrees % 360) + 360) % 360 / 45) % 8
    return directions[index]
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5" />
          <h3 className="font-semibold text-lg">Qibla Direction</h3>
        </div>
        <p className="text-sm opacity-90 mt-1">{cityName}</p>
      </div>

      {/* Compass Display */}
      <div className="p-6 flex flex-col items-center">
        {/* Static Compass with Qibla Indicator */}
        <div className="relative w-64 h-64 mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[var(--border)] bg-[var(--background-secondary)]">
            {/* Cardinal Directions */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-bold text-[var(--foreground)]">N</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold text-[var(--foreground)]">S</span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--foreground)]">W</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--foreground)]">E</span>
          </div>

          {/* Inner Circle */}
          <div className="absolute inset-8 rounded-full bg-[var(--card)] border-2 border-[var(--border)] shadow-inner" />

          {/* Compass Rose */}
          <div
            className="absolute inset-8 transition-transform duration-300"
            style={{
              transform: deviceHeading !== null ? `rotate(${-deviceHeading}deg)` : 'rotate(0deg)'
            }}
          >
            {/* Degree markers */}
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-0 h-full w-px origin-bottom"
                style={{ transform: `translateX(-50%) rotate(${i * 10}deg)` }}
              >
                <div className={`w-px ${i % 9 === 0 ? 'h-3 bg-[var(--foreground)]' : 'h-2 bg-[var(--border)]'}`} />
              </div>
            ))}
          </div>

          {/* Qibla Arrow */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
            style={{
              transform: `rotate(${deviceHeading !== null ? qiblaRotation : qiblaDirection}deg)`
            }}
          >
            <div className="relative">
              {/* Arrow */}
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[80px] border-b-emerald-500" />
              {/* Kaaba Icon */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                  <span className="text-yellow-400 text-xs">🕋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[var(--primary)] border-2 border-white shadow-lg" />
          </div>

          {/* Your position indicator */}
          {deviceHeading !== null && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <Navigation className="w-6 h-6 text-blue-500" />
            </div>
          )}
        </div>

        {/* Direction Info */}
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-[var(--foreground)] mb-1">
            {qiblaDirection}°
          </div>
          <div className="text-lg text-[var(--foreground-secondary)]">
            {getCardinalDirection(qiblaDirection)} from North
          </div>
        </div>

        {/* Distance to Makkah */}
        <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-4">
          <MapPin className="w-4 h-4" />
          <span>
            {Math.round(calculateDistanceToMakkah(coordinates.lat, coordinates.lng)).toLocaleString()} km to Makkah
          </span>
        </div>

        {/* Compass Activation Button */}
        {!isSupported ? (
          <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg">
            <Info className="w-4 h-4" />
            <span>Device compass not supported</span>
          </div>
        ) : hasPermission === null ? (
          <button
            onClick={requestPermission}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Enable Live Compass</span>
          </button>
        ) : hasPermission === false ? (
          <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-lg">
            <Info className="w-4 h-4" />
            <span>Compass permission denied</span>
          </div>
        ) : deviceHeading !== null ? (
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live compass active</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
            <Compass className="w-4 h-4 animate-spin" />
            <span>Calibrating compass...</span>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="border-t border-[var(--border)] p-4 bg-[var(--background-secondary)]">
        <p className="text-xs text-[var(--foreground-muted)] text-center">
          Hold your device flat and point it in the direction of the green arrow to face the Qibla.
        </p>
      </div>
    </div>
  )
}

/**
 * Calculate distance to Makkah using Haversine formula
 */
function calculateDistanceToMakkah(lat: number, lng: number): number {
  const kaabaLat = 21.4225
  const kaabaLng = 39.8262

  const R = 6371 // Earth's radius in km
  const dLat = (kaabaLat - lat) * Math.PI / 180
  const dLng = (kaabaLng - lng) * Math.PI / 180

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

export default QiblaCompass
