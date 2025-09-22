// Prayer time calculation utilities
// In production, you would use an API like Aladhan or Islamic Finder

interface PrayerTimes {
  fajr: string
  sunrise: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

interface Coordinates {
  lat: number
  lng: number
}

// This is a simplified prayer time calculation
// In production, use a proper Islamic prayer time API
export function calculatePrayerTimes(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  coordinates: Coordinates
): PrayerTimes {
  // These are mock times - replace with actual calculation or API call
  const baseHour = 5 // Starting hour for Fajr
  
  return {
    fajr: `${baseHour.toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    sunrise: `${(baseHour + 1).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    dhuhr: `${(baseHour + 7).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    asr: `${(baseHour + 10).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    maghrib: `${(baseHour + 13).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    isha: `${(baseHour + 15).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
  }
}

// Calculate Qibla direction from coordinates
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

// Get next prayer time
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
    const [hours, minutes] = prayer.time.split(':').map(Number)
    const prayerMinutes = hours * 60 + minutes
    
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