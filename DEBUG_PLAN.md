# HalalCities Production Debug Plan

## Status: Code Fixes Complete - Awaiting Your Mapbox Token

All code changes have been implemented. The maps will work once you add your own Mapbox token to Netlify.

---

## Issues Identified

### 1. **Mapbox API 403 Errors** (CRITICAL)

**Problem:** Map tiles are returning 403 Forbidden errors in production.

**Root Cause:** All map components are using the Mapbox **default demo token** which is restricted to mapbox.com domains only:
```javascript
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94Ii...'  // This is Mapbox's demo token!
```

**Affected Files:**
- `src/components/map/city-map.tsx`
- `src/components/map/modern-city-map.tsx`
- `src/components/city/location-map-modern.tsx`
- `src/components/city/halal-restaurants-map-modern.tsx`

**Solution:**
1. Create a free Mapbox account at https://account.mapbox.com/auth/signup/
2. Get your own access token from https://account.mapbox.com/access-tokens/
3. Add to Netlify environment variables: `NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token_here`
4. Update code to use environment variable instead of hardcoded token

---

### 2. **Map Toggle Client-Side Error** (HIGH)

**Problem:** Clicking "Show on Map" / "Hide Map" button twice causes a client-side error.

**Likely Causes:**
- Map instance not properly destroyed before re-initialization
- React state update on unmounted component
- Mapbox GL JS cleanup not called in useEffect return

**Affected Component:** `src/components/city/location-map-modern.tsx` (and similar)

**Solution:** Ensure proper cleanup in useEffect:
```javascript
useEffect(() => {
  const map = new mapboxgl.Map(...)

  return () => {
    map.remove()  // Must be called to cleanup
  }
}, [])
```

---

### 3. **Network Timeout Issues** (MEDIUM)

**Problem:** Production pages timing out on network idle.

**Likely Cause:** Failed Mapbox tile requests never complete, preventing `networkidle` state.

**Solution:** Fix the Mapbox token issue first - this should resolve the timeout.

---

## Fix Implementation

### Step 1: Create Mapbox Config File

Create `src/lib/mapbox.ts`:
```typescript
export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

export const MAPBOX_STYLE = 'mapbox://styles/mapbox/light-v11'

// Validate token on load
if (!MAPBOX_TOKEN && typeof window !== 'undefined') {
  console.warn('MAPBOX_TOKEN is not configured. Maps will not work.')
}
```

### Step 2: Update All Map Components

Replace hardcoded token in all map files:
```typescript
import { MAPBOX_TOKEN } from '@/lib/mapbox'

mapboxgl.accessToken = MAPBOX_TOKEN
```

### Step 3: Add Error Handling

Add fallback UI when maps fail to load:
```typescript
const [mapError, setMapError] = useState(false)

// In map initialization
map.on('error', (e) => {
  console.error('Map error:', e)
  setMapError(true)
})

// In render
if (mapError) {
  return <div>Map unavailable. Please try again later.</div>
}
```

### Step 4: Fix Cleanup on Toggle

Ensure map is properly destroyed:
```typescript
useEffect(() => {
  if (!showMap) return

  const map = new mapboxgl.Map({...})
  mapRef.current = map

  return () => {
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }
  }
}, [showMap, ...otherDeps])
```

### Step 5: Add Netlify Environment Variable

In Netlify Dashboard:
1. Go to Site Settings → Environment Variables
2. Add: `NEXT_PUBLIC_MAPBOX_TOKEN` = `pk.eyJ1Ijoi...your_token...`
3. Trigger a new deploy

---

## Verification Steps

After fixing:
1. Run local dev server with token set
2. Verify maps load without 403 errors
3. Toggle map on/off multiple times without errors
4. Deploy to Netlify
5. Run Playwright tests against production

---

## Error Log Summary

```
[CONSOLE ERROR]: Failed to load resource: status 403
Mapbox response: api.mapbox.com/v4/mapbox.mapbox-streets-v8... - Status: 403
```

**Total 403 errors:** 12+ tile requests failing

---

## Priority

1. **P0 - CRITICAL:** Get your own Mapbox token and add to Netlify env vars
2. ~~**P1 - HIGH:** Update code to use environment variable~~ ✅ DONE
3. ~~**P2 - MEDIUM:** Add proper error handling and cleanup~~ ✅ DONE
4. **P3 - LOW:** Add map legend and improve UX

---

## Completed Code Changes

### Files Updated:
- ✅ `src/lib/mapbox.ts` - Created centralized Mapbox configuration
- ✅ `src/components/city/location-map-modern.tsx` - Uses env token + error handling
- ✅ `src/components/city/halal-restaurants-map-modern.tsx` - Uses env token + error handling
- ✅ `src/components/map/city-map.tsx` - Uses env token + error handling
- ✅ `src/components/map/modern-city-map.tsx` - Uses env token + error handling

### What Was Fixed:
1. Replaced hardcoded Mapbox demo token with environment variable
2. Added `isMapboxConfigured()` check before initializing maps
3. Added error state handling with `map.on('error')` listener
4. Added graceful fallback UI showing "Map Unavailable" with link to Google Maps
5. Improved cleanup in useEffect return to properly destroy map instances

---

## Your Next Step

**Add your Mapbox token to Netlify:**
1. Get a free token from https://account.mapbox.com/access-tokens/
2. Go to Netlify → Site Settings → Environment Variables
3. Add: `NEXT_PUBLIC_MAPBOX_TOKEN` = `pk.your_token_here`
4. Trigger a new deploy
