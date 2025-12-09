// Mapbox Configuration
// Get your token from https://account.mapbox.com/access-tokens/

export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

export const MAPBOX_STYLE = 'mapbox://styles/mapbox/light-v11'

// Check if token is configured
export const isMapboxConfigured = (): boolean => {
  return Boolean(MAPBOX_TOKEN && MAPBOX_TOKEN.startsWith('pk.'))
}

// Log warning if not configured (only in browser)
if (typeof window !== 'undefined' && !isMapboxConfigured()) {
  console.warn(
    '[HalalCities] Mapbox token is not configured. Maps will not work.\n' +
    'Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.\n' +
    'Get a free token at: https://account.mapbox.com/access-tokens/'
  )
}
