"use client"

import { useState, useEffect } from "react"
import { Clock, Sun, Sunrise, Sunset, Moon, ChevronDown } from "lucide-react"
import {
  calculatePrayerTimes,
  getNextPrayerTime,
  getCurrentPrayer,
  type CalculationMethod,
  type PrayerTimes
} from "@/lib/prayer-times"

interface PrayerTimesWidgetProps {
  latitude: number
  longitude: number
  cityName: string
  variant?: 'compact' | 'full'
}

const PRAYER_ICONS: Record<string, React.ReactNode> = {
  Fajr: <Sunrise className="w-4 h-4" />,
  Sunrise: <Sun className="w-4 h-4" />,
  Dhuhr: <Sun className="w-4 h-4" />,
  Asr: <Sun className="w-4 h-4" />,
  Maghrib: <Sunset className="w-4 h-4" />,
  Isha: <Moon className="w-4 h-4" />
}

const CALCULATION_METHODS: { value: CalculationMethod; label: string }[] = [
  { value: 'ISNA', label: 'ISNA (North America)' },
  { value: 'MWL', label: 'Muslim World League' },
  { value: 'Egypt', label: 'Egyptian Authority' },
  { value: 'Makkah', label: 'Umm al-Qura (Makkah)' },
  { value: 'Karachi', label: 'Karachi' },
  { value: 'Tehran', label: 'Tehran' }
]

export function PrayerTimesWidget({ latitude, longitude, cityName, variant = 'compact' }: PrayerTimesWidgetProps) {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null)
  const [method, setMethod] = useState<CalculationMethod>('ISNA')
  const [showMethodSelector, setShowMethodSelector] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  const coordinates = { lat: latitude, lng: longitude }
  const compact = variant === 'compact'

  // Calculate prayer times when coordinates or method changes
  useEffect(() => {
    const times = calculatePrayerTimes(coordinates, new Date(), method)
    setPrayerTimes(times)
  }, [latitude, longitude, method])

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  if (!prayerTimes) {
    return (
      <div className="bg-[var(--card)] rounded-xl p-6 animate-pulse">
        <div className="h-6 w-32 bg-[var(--background-secondary)] rounded mb-4" />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-[var(--background-secondary)] rounded" />
          ))}
        </div>
      </div>
    )
  }

  const nextPrayer = getNextPrayerTime(prayerTimes)
  const currentPrayer = getCurrentPrayer(prayerTimes)

  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr, arabic: 'الفجر' },
    { name: 'Sunrise', time: prayerTimes.sunrise, arabic: 'الشروق' },
    { name: 'Dhuhr', time: prayerTimes.dhuhr, arabic: 'الظهر' },
    { name: 'Asr', time: prayerTimes.asr, arabic: 'العصر' },
    { name: 'Maghrib', time: prayerTimes.maghrib, arabic: 'المغرب' },
    { name: 'Isha', time: prayerTimes.isha, arabic: 'العشاء' }
  ]

  if (compact) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--primary)]" />
            <span className="font-medium text-[var(--foreground)]">Prayer Times</span>
          </div>
          <span className="text-xs text-[var(--foreground-muted)]">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        {/* Next Prayer Highlight */}
        <div className="bg-[var(--primary)]/10 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[var(--foreground-muted)]">Next Prayer</span>
              <div className="flex items-center gap-2">
                {PRAYER_ICONS[nextPrayer.name]}
                <span className="font-semibold text-[var(--foreground)]">{nextPrayer.name}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-[var(--primary)]">{nextPrayer.time}</span>
              <div className="text-xs text-[var(--foreground-muted)]">in {nextPrayer.remaining}</div>
            </div>
          </div>
        </div>

        {/* Prayer List */}
        <div className="grid grid-cols-2 gap-2">
          {prayers.filter(p => p.name !== 'Sunrise').map((prayer) => (
            <div
              key={prayer.name}
              className={`flex items-center justify-between p-2 rounded-lg ${
                currentPrayer === prayer.name
                  ? 'bg-[var(--primary)]/5 border border-[var(--primary)]/20'
                  : ''
              }`}
            >
              <span className="text-sm text-[var(--foreground-secondary)]">{prayer.name}</span>
              <span className={`text-sm font-medium ${
                currentPrayer === prayer.name ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'
              }`}>
                {prayer.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Prayer Times</h3>
            <p className="text-sm opacity-90">{cityName}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="text-sm opacity-90">
              {currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {/* Next Prayer Banner */}
      <div className="bg-[var(--primary)]/10 px-4 py-3 border-b border-[var(--border)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--primary)] rounded-lg text-white">
              {PRAYER_ICONS[nextPrayer.name]}
            </div>
            <div>
              <span className="text-xs text-[var(--foreground-muted)]">Next Prayer</span>
              <div className="font-semibold text-[var(--foreground)]">{nextPrayer.name}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-[var(--primary)]">{nextPrayer.time}</div>
            <div className="text-sm text-[var(--foreground-muted)]">in {nextPrayer.remaining}</div>
          </div>
        </div>
      </div>

      {/* Prayer Times List */}
      <div className="p-4">
        <div className="space-y-2">
          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                currentPrayer === prayer.name
                  ? 'bg-[var(--primary)]/10 border border-[var(--primary)]/20'
                  : 'hover:bg-[var(--background-secondary)]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  currentPrayer === prayer.name
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)]'
                }`}>
                  {PRAYER_ICONS[prayer.name]}
                </div>
                <div>
                  <div className={`font-medium ${
                    currentPrayer === prayer.name ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'
                  }`}>
                    {prayer.name}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">{prayer.arabic}</div>
                </div>
              </div>
              <div className={`text-lg font-semibold ${
                currentPrayer === prayer.name ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'
              }`}>
                {prayer.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculation Method Selector */}
      <div className="border-t border-[var(--border)] p-4">
        <div className="relative">
          <button
            onClick={() => setShowMethodSelector(!showMethodSelector)}
            className="flex items-center justify-between w-full px-3 py-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
          >
            <span>Calculation Method: {CALCULATION_METHODS.find(m => m.value === method)?.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showMethodSelector ? 'rotate-180' : ''}`} />
          </button>

          {showMethodSelector && (
            <div className="absolute bottom-full left-0 right-0 mb-1 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden z-10">
              {CALCULATION_METHODS.map((m) => (
                <button
                  key={m.value}
                  onClick={() => {
                    setMethod(m.value)
                    setShowMethodSelector(false)
                  }}
                  className={`w-full px-3 py-2 text-sm text-left hover:bg-[var(--background-secondary)] transition-colors ${
                    method === m.value ? 'text-[var(--primary)] font-medium' : 'text-[var(--foreground)]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrayerTimesWidget
