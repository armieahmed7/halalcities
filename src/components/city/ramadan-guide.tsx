"use client"

import { useState, useMemo } from "react"
import { Moon, Sunrise, Sunset, Calendar, Clock, Info, ChevronLeft, ChevronRight } from "lucide-react"
import { calculatePrayerTimes, CalculationMethod } from "@/lib/prayer-times"

// Prayer calculation methods
const CALCULATION_METHODS: Record<CalculationMethod, { name: string }> = {
  ISNA: { name: 'ISNA (North America)' },
  MWL: { name: 'Muslim World League' },
  Egypt: { name: 'Egyptian Authority' },
  Makkah: { name: 'Umm al-Qura (Makkah)' },
  Karachi: { name: 'Karachi' },
  Tehran: { name: 'Tehran' }
}

interface RamadanGuideProps {
  latitude: number
  longitude: number
  cityName: string
  country: string
}

// Ramadan dates (approximate - should be adjusted based on moon sighting)
const RAMADAN_DATES: Record<number, { start: Date; end: Date }> = {
  2024: {
    start: new Date(2024, 2, 11), // March 11, 2024
    end: new Date(2024, 3, 9),    // April 9, 2024
  },
  2025: {
    start: new Date(2025, 2, 1),  // March 1, 2025
    end: new Date(2025, 2, 30),   // March 30, 2025
  },
  2026: {
    start: new Date(2026, 1, 18), // February 18, 2026
    end: new Date(2026, 2, 19),   // March 19, 2026
  },
  2027: {
    start: new Date(2027, 1, 8),  // February 8, 2027
    end: new Date(2027, 2, 9),    // March 9, 2027
  }
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)
  return `${hours}h ${mins}m`
}

// Parse time string "HH:MM AM/PM" to minutes since midnight
function parseTimeToMinutes(timeStr: string): number {
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  if (!match) return 0
  let hours = parseInt(match[1])
  const minutes = parseInt(match[2])
  const period = match[3].toUpperCase()

  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0

  return hours * 60 + minutes
}

function getDaysDiff(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000
  return Math.round((date2.getTime() - date1.getTime()) / oneDay)
}

export function RamadanGuide({
  latitude,
  longitude,
  cityName,
  country
}: RamadanGuideProps) {
  const [method, setMethod] = useState<CalculationMethod>("ISNA")
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedDay, setSelectedDay] = useState(1)

  const currentYear = new Date().getFullYear()
  const availableYears = Object.keys(RAMADAN_DATES).map(Number).filter(y => y >= currentYear)

  const ramadanDates = RAMADAN_DATES[selectedYear]
  const totalDays = ramadanDates ? getDaysDiff(ramadanDates.start, ramadanDates.end) + 1 : 30

  // Calculate the selected date
  const selectedDate = useMemo(() => {
    if (!ramadanDates) return new Date()
    const date = new Date(ramadanDates.start)
    date.setDate(date.getDate() + selectedDay - 1)
    return date
  }, [ramadanDates, selectedDay])

  // Calculate prayer times for selected date
  const prayerTimes = useMemo(() => {
    return calculatePrayerTimes({ lat: latitude, lng: longitude }, selectedDate, method)
  }, [latitude, longitude, selectedDate, method])

  // Calculate fasting duration (in minutes)
  const fastingDuration = useMemo(() => {
    if (!prayerTimes.fajr || !prayerTimes.maghrib) return 0
    return parseTimeToMinutes(prayerTimes.maghrib) - parseTimeToMinutes(prayerTimes.fajr)
  }, [prayerTimes])

  // Calculate Suhoor end time (same as Fajr) - returns time string
  const suhoorEnd = prayerTimes.fajr

  // Calculate Iftar time (same as Maghrib) - returns time string
  const iftarTime = prayerTimes.maghrib

  // Check if currently in Ramadan
  const isRamadan = useMemo(() => {
    const today = new Date()
    const currentRamadan = RAMADAN_DATES[currentYear]
    if (!currentRamadan) return false
    return today >= currentRamadan.start && today <= currentRamadan.end
  }, [currentYear])

  // Days until Ramadan
  const daysUntilRamadan = useMemo(() => {
    const today = new Date()
    const nextRamadan = RAMADAN_DATES[currentYear] || RAMADAN_DATES[currentYear + 1]
    if (!nextRamadan) return null
    if (today > nextRamadan.end) {
      const followingYear = RAMADAN_DATES[currentYear + 1]
      if (!followingYear) return null
      return getDaysDiff(today, followingYear.start)
    }
    if (today < nextRamadan.start) {
      return getDaysDiff(today, nextRamadan.start)
    }
    return 0
  }, [currentYear])

  // Generate fasting schedule for the entire month
  const fastingSchedule = useMemo(() => {
    if (!ramadanDates) return []

    const schedule = []
    const current = new Date(ramadanDates.start)

    while (current <= ramadanDates.end) {
      const times = calculatePrayerTimes({ lat: latitude, lng: longitude }, new Date(current), method)
      const duration = times.fajr && times.maghrib
        ? (parseTimeToMinutes(times.maghrib) - parseTimeToMinutes(times.fajr))
        : 0

      schedule.push({
        day: schedule.length + 1,
        date: new Date(current),
        suhoor: times.fajr,
        iftar: times.maghrib,
        duration
      })

      current.setDate(current.getDate() + 1)
    }

    return schedule
  }, [ramadanDates, latitude, longitude, method])

  // Stats for the month
  const monthStats = useMemo(() => {
    if (fastingSchedule.length === 0) return null

    const durations = fastingSchedule.map(d => d.duration).filter(d => d > 0)
    const shortest = Math.min(...durations)
    const longest = Math.max(...durations)
    const average = durations.reduce((a, b) => a + b, 0) / durations.length

    return { shortest, longest, average }
  }, [fastingSchedule])

  const handlePrevDay = () => {
    setSelectedDay(prev => Math.max(1, prev - 1))
  }

  const handleNextDay = () => {
    setSelectedDay(prev => Math.min(totalDays, prev + 1))
  }

  return (
    <div className="bg-[var(--card)] rounded-xl border border-[var(--border)] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Moon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Ramadan Guide</h3>
              <p className="text-white/80 text-sm">{cityName}, {country}</p>
            </div>
          </div>
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(Number(e.target.value))
              setSelectedDay(1)
            }}
            className="px-3 py-1.5 bg-white/20 border border-white/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {availableYears.map(year => (
              <option key={year} value={year} className="text-gray-900">
                Ramadan {year}
              </option>
            ))}
          </select>
        </div>

        {/* Countdown or Status */}
        <div className="bg-white/10 rounded-lg p-4">
          {isRamadan ? (
            <div className="flex items-center gap-2 text-yellow-200">
              <Moon className="w-5 h-5" />
              <span className="font-medium">Ramadan Mubarak! We are currently in the blessed month.</span>
            </div>
          ) : daysUntilRamadan !== null && daysUntilRamadan > 0 ? (
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                <span className="font-bold text-2xl">{daysUntilRamadan}</span>
                <span className="ml-2 text-white/80">days until Ramadan {currentYear}</span>
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Day Selector */}
      <div className="border-b border-[var(--border)] p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevDay}
            disabled={selectedDay === 1}
            className="p-2 rounded-lg hover:bg-[var(--background-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
          </button>

          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--foreground)]">
              Day {selectedDay}
            </div>
            <div className="text-sm text-[var(--foreground-secondary)]">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          <button
            onClick={handleNextDay}
            disabled={selectedDay === totalDays}
            className="p-2 rounded-lg hover:bg-[var(--background-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
          </button>
        </div>

        {/* Day Progress Bar */}
        <div className="mt-4">
          <div className="h-2 bg-[var(--background-secondary)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${(selectedDay / totalDays) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-[var(--foreground-muted)] mt-1">
            <span>Day 1</span>
            <span>Day {totalDays}</span>
          </div>
        </div>
      </div>

      {/* Main Times Display */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Suhoor */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 border border-indigo-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-indigo-500/20 rounded-lg">
                <Sunrise className="w-4 h-4 text-indigo-500" />
              </div>
              <span className="text-sm font-medium text-[var(--foreground-secondary)]">Suhoor Ends</span>
            </div>
            <div className="text-3xl font-bold text-[var(--foreground)]">
              {suhoorEnd || '--:--'}
            </div>
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Stop eating before Fajr adhan
            </p>
          </div>

          {/* Iftar */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-amber-500/20 rounded-lg">
                <Sunset className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-sm font-medium text-[var(--foreground-secondary)]">Iftar Time</span>
            </div>
            <div className="text-3xl font-bold text-[var(--foreground)]">
              {iftarTime || '--:--'}
            </div>
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Break fast at Maghrib adhan
            </p>
          </div>
        </div>

        {/* Fasting Duration */}
        <div className="bg-[var(--background-secondary)] rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[var(--primary)]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-sm text-[var(--foreground-secondary)]">Fasting Duration</div>
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  {fastingDuration > 0 ? formatDuration(fastingDuration) : '--'}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[var(--foreground-muted)]">From Fajr to Maghrib</div>
            </div>
          </div>
        </div>

        {/* Method Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[var(--foreground-secondary)] mb-2">
            Calculation Method
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as CalculationMethod)}
            className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            {Object.entries(CALCULATION_METHODS).map(([key, config]) => (
              <option key={key} value={key}>
                {config.name}
              </option>
            ))}
          </select>
        </div>

        {/* Month Statistics */}
        {monthStats && (
          <div className="bg-[var(--background-secondary)] rounded-xl p-4">
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Ramadan {selectedYear} Statistics
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-500">
                  {formatDuration(monthStats.shortest)}
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">Shortest Fast</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[var(--primary)]">
                  {formatDuration(monthStats.average)}
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">Average</div>
              </div>
              <div>
                <div className="text-lg font-bold text-amber-500">
                  {formatDuration(monthStats.longest)}
                </div>
                <div className="text-xs text-[var(--foreground-muted)]">Longest Fast</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full Schedule Toggle */}
      <details className="border-t border-[var(--border)]">
        <summary className="px-6 py-4 cursor-pointer text-[var(--foreground)] font-medium hover:bg-[var(--background-secondary)] transition-colors">
          View Full Ramadan Schedule
        </summary>
        <div className="px-6 pb-6">
          <div className="max-h-[300px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-[var(--card)]">
                <tr className="text-left text-[var(--foreground-muted)] border-b border-[var(--border)]">
                  <th className="py-2 font-medium">Day</th>
                  <th className="py-2 font-medium">Date</th>
                  <th className="py-2 font-medium">Suhoor</th>
                  <th className="py-2 font-medium">Iftar</th>
                  <th className="py-2 font-medium text-right">Duration</th>
                </tr>
              </thead>
              <tbody>
                {fastingSchedule.map((day) => (
                  <tr
                    key={day.day}
                    className={`border-b border-[var(--border)] ${
                      day.day === selectedDay ? 'bg-[var(--primary)]/10' : ''
                    }`}
                    onClick={() => setSelectedDay(day.day)}
                  >
                    <td className="py-2 font-medium text-[var(--foreground)]">{day.day}</td>
                    <td className="py-2 text-[var(--foreground-secondary)]">
                      {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className="py-2 text-[var(--foreground)]">
                      {day.suhoor || '--'}
                    </td>
                    <td className="py-2 text-[var(--foreground)]">
                      {day.iftar || '--'}
                    </td>
                    <td className="py-2 text-right text-[var(--foreground-secondary)]">
                      {day.duration > 0 ? formatDuration(day.duration) : '--'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </div>
  )
}

export default RamadanGuide
