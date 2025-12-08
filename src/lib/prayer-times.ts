/**
 * Prayer Times Calculator
 * Based on astronomical calculations for Islamic prayer times
 * Supports multiple calculation methods (ISNA, MWL, Egypt, Makkah, etc.)
 */

export type CalculationMethod = 'ISNA' | 'MWL' | 'Egypt' | 'Makkah' | 'Karachi' | 'Tehran'

export interface PrayerTimes {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

export interface PrayerTimesResult extends PrayerTimes {
  midnight: string
  date: Date
  method: CalculationMethod
}

interface Coordinates {
  lat: number
  lng: number
}

// Calculation method parameters: [Fajr angle, Isha angle]
const METHODS: Record<CalculationMethod, { fajr: number; isha: number; maghrib?: number }> = {
  ISNA: { fajr: 15, isha: 15 }, // Islamic Society of North America
  MWL: { fajr: 18, isha: 17 }, // Muslim World League
  Egypt: { fajr: 19.5, isha: 17.5 }, // Egyptian General Authority
  Makkah: { fajr: 18.5, isha: 90 }, // Umm al-Qura, Makkah (90 min after Maghrib)
  Karachi: { fajr: 18, isha: 18 }, // University of Islamic Sciences, Karachi
  Tehran: { fajr: 17.7, isha: 14, maghrib: 4.5 } // Institute of Geophysics, Tehran
}

// Asr calculation: Standard (Shafi'i) or Hanafi
export type AsrMethod = 'Standard' | 'Hanafi'

/**
 * Calculate prayer times for a given date and location
 */
export function calculatePrayerTimes(
  coordinates: Coordinates,
  date: Date = new Date(),
  method: CalculationMethod = 'ISNA',
  asrMethod: AsrMethod = 'Standard'
): PrayerTimesResult {
  const { lat, lng } = coordinates
  const params = METHODS[method]

  // Get timezone offset (approximate from longitude)
  const timezone = Math.round(lng / 15)

  // Julian date
  const jd = julianDate(date.getFullYear(), date.getMonth() + 1, date.getDate())

  // Calculate times
  const times = computeTimes(jd, lat, lng, timezone, params, asrMethod)

  return {
    fajr: formatTime(times.fajr),
    sunrise: formatTime(times.sunrise),
    dhuhr: formatTime(times.dhuhr),
    asr: formatTime(times.asr),
    maghrib: formatTime(times.maghrib),
    isha: formatTime(times.isha),
    midnight: formatTime(times.midnight),
    date,
    method
  }
}

/**
 * Calculate Julian Date
 */
function julianDate(year: number, month: number, day: number): number {
  if (month <= 2) {
    year -= 1
    month += 12
  }
  const A = Math.floor(year / 100)
  const B = 2 - A + Math.floor(A / 4)
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5
}

/**
 * Compute all prayer times
 */
function computeTimes(
  jd: number,
  lat: number,
  lng: number,
  timezone: number,
  params: { fajr: number; isha: number; maghrib?: number },
  asrMethod: AsrMethod
) {
  // Sun position
  const D = jd - 2451545.0
  const g = fixAngle(357.529 + 0.98560028 * D)
  const q = fixAngle(280.459 + 0.98564736 * D)
  const L = fixAngle(q + 1.915 * dsin(g) + 0.020 * dsin(2 * g))

  const e = 23.439 - 0.00000036 * D
  const RA = darctan2(dcos(e) * dsin(L), dcos(L)) / 15
  const d = darcsin(dsin(e) * dsin(L)) // Declination
  const EqT = q / 15 - fixHour(RA)

  // Noon time
  const noon = 12 - EqT - lng / 15 + timezone

  // Sun angle calculations
  const sunrise = noon - sunAngleTime(0.833, lat, d) / 15
  const sunset = noon + sunAngleTime(0.833, lat, d) / 15

  // Prayer times
  const fajr = noon - sunAngleTime(params.fajr, lat, d) / 15
  const dhuhr = noon + 1 / 60 // Add 1 minute after noon

  // Asr: Shadow length = object height + shadow at noon (Standard) or 2x (Hanafi)
  const asrFactor = asrMethod === 'Hanafi' ? 2 : 1
  const asrAngle = darctan(1 / (asrFactor + dtan(Math.abs(lat - d))))
  const asr = noon + sunAngleTime(90 - asrAngle, lat, d) / 15

  const maghrib = sunset

  // Isha
  let isha: number
  if (params.isha === 90) {
    // Umm al-Qura: 90 minutes after Maghrib
    isha = maghrib + 1.5
  } else {
    isha = noon + sunAngleTime(params.isha, lat, d) / 15
  }

  // Midnight (between Maghrib and Fajr)
  const midnight = (sunset + (fajr + 24 - sunset) / 2) % 24

  return {
    fajr: fixHour(fajr),
    sunrise: fixHour(sunrise),
    dhuhr: fixHour(dhuhr),
    asr: fixHour(asr),
    maghrib: fixHour(maghrib),
    isha: fixHour(isha),
    midnight: fixHour(midnight)
  }
}

/**
 * Calculate sun angle time
 */
function sunAngleTime(angle: number, lat: number, decl: number): number {
  const cosHA = (dsin(angle) - dsin(lat) * dsin(decl)) / (dcos(lat) * dcos(decl))
  return darccos(cosHA)
}

// Math helpers
function dsin(d: number): number { return Math.sin(d * Math.PI / 180) }
function dcos(d: number): number { return Math.cos(d * Math.PI / 180) }
function dtan(d: number): number { return Math.tan(d * Math.PI / 180) }
function darcsin(x: number): number { return Math.asin(x) * 180 / Math.PI }
function darccos(x: number): number { return Math.acos(x) * 180 / Math.PI }
function darctan(x: number): number { return Math.atan(x) * 180 / Math.PI }
function darctan2(y: number, x: number): number { return Math.atan2(y, x) * 180 / Math.PI }

function fixAngle(a: number): number {
  a = a - 360 * Math.floor(a / 360)
  return a < 0 ? a + 360 : a
}

function fixHour(h: number): number {
  h = h - 24 * Math.floor(h / 24)
  return h < 0 ? h + 24 : h
}

/**
 * Format decimal hours to HH:MM AM/PM
 */
function formatTime(hours: number, format12 = true): string {
  if (isNaN(hours)) return '--:--'

  hours = fixHour(hours)
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)

  if (format12) {
    const period = h >= 12 ? 'PM' : 'AM'
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
    return `${h12}:${m.toString().padStart(2, '0')} ${period}`
  }

  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
}

/**
 * Calculate Qibla direction from coordinates
 */
export function calculateQiblaDirection(coordinates: Coordinates): number {
  // Kaaba coordinates
  const kaabaLat = 21.4225
  const kaabaLng = 39.8262

  const lat1 = coordinates.lat * Math.PI / 180
  const lat2 = kaabaLat * Math.PI / 180
  const deltaLng = (kaabaLng - coordinates.lng) * Math.PI / 180

  const y = Math.sin(deltaLng) * Math.cos(lat2)
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng)

  const bearing = Math.atan2(y, x) * 180 / Math.PI

  return (bearing + 360) % 360
}

/**
 * Get next prayer time with countdown
 */
export function getNextPrayerTime(prayerTimes: PrayerTimes): { name: string; time: string; remaining: string } {
  const now = new Date()
  const currentTime = now.getHours() * 60 + now.getMinutes()

  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr },
    { name: 'Dhuhr', time: prayerTimes.dhuhr },
    { name: 'Asr', time: prayerTimes.asr },
    { name: 'Maghrib', time: prayerTimes.maghrib },
    { name: 'Isha', time: prayerTimes.isha }
  ]

  for (const prayer of prayers) {
    const prayerMinutes = parseTimeToMinutes(prayer.time)

    if (prayerMinutes > currentTime) {
      const remainingMinutes = prayerMinutes - currentTime
      const remainingHours = Math.floor(remainingMinutes / 60)
      const remainingMins = remainingMinutes % 60

      return {
        name: prayer.name,
        time: prayer.time,
        remaining: remainingHours > 0
          ? `${remainingHours}h ${remainingMins}m`
          : `${remainingMins}m`
      }
    }
  }

  // If all prayers have passed, return Fajr for next day
  return {
    name: 'Fajr',
    time: prayerTimes.fajr,
    remaining: 'Tomorrow'
  }
}

/**
 * Parse time string to minutes since midnight
 */
function parseTimeToMinutes(time: string): number {
  const [timePart, period] = time.split(' ')
  const [h, m] = timePart.split(':').map(Number)
  let hours = h
  if (period === 'PM' && h !== 12) hours += 12
  if (period === 'AM' && h === 12) hours = 0
  return hours * 60 + m
}

/**
 * Get current prayer period
 */
export function getCurrentPrayer(prayerTimes: PrayerTimes): string {
  const now = new Date()
  const currentTime = now.getHours() * 60 + now.getMinutes()

  const fajrTime = parseTimeToMinutes(prayerTimes.fajr)
  const dhuhrTime = parseTimeToMinutes(prayerTimes.dhuhr)
  const asrTime = parseTimeToMinutes(prayerTimes.asr)
  const maghribTime = parseTimeToMinutes(prayerTimes.maghrib)
  const ishaTime = parseTimeToMinutes(prayerTimes.isha)

  if (currentTime < fajrTime) return 'Night'
  if (currentTime < dhuhrTime) return 'Fajr'
  if (currentTime < asrTime) return 'Dhuhr'
  if (currentTime < maghribTime) return 'Asr'
  if (currentTime < ishaTime) return 'Maghrib'
  return 'Isha'
}

/**
 * Calculate Ramadan fasting hours
 */
export function getRamadanFastingHours(
  coordinates: Coordinates,
  year: number = new Date().getFullYear()
): { shortest: number; longest: number; average: number } {
  // Calculate for summer solstice (longest) and winter solstice (shortest)
  const summerSolstice = new Date(year, 5, 21) // June 21
  const winterSolstice = new Date(year, 11, 21) // December 21

  const summerTimes = calculatePrayerTimes(coordinates, summerSolstice)
  const winterTimes = calculatePrayerTimes(coordinates, winterSolstice)

  const summerHours = (parseTimeToMinutes(summerTimes.maghrib) - parseTimeToMinutes(summerTimes.fajr)) / 60
  const winterHours = (parseTimeToMinutes(winterTimes.maghrib) - parseTimeToMinutes(winterTimes.fajr)) / 60

  // In northern hemisphere: summer is longest, winter is shortest
  // In southern hemisphere: opposite
  const longest = Math.max(summerHours, winterHours)
  const shortest = Math.min(summerHours, winterHours)

  return {
    shortest: Math.round(shortest * 10) / 10,
    longest: Math.round(longest * 10) / 10,
    average: Math.round((shortest + longest) / 2 * 10) / 10
  }
}
