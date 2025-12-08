"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { createClient } from "@/lib/supabase"
import { User } from "@supabase/supabase-js"

interface FavoritesContextType {
  favorites: string[]
  addFavorite: (citySlug: string) => void
  removeFavorite: (citySlug: string) => void
  toggleFavorite: (citySlug: string) => void
  isFavorite: (citySlug: string) => boolean
  clearFavorites: () => void
  isLoading: boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const STORAGE_KEY = "halalcities_favorites"

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const supabase = createClient()

  // Get user from Supabase auth
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setAuthLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  // Fetch favorites from Supabase for logged-in users
  const fetchFavoritesFromSupabase = useCallback(async () => {
    if (!user) return []

    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('city_slug')
        .eq('user_id', user.id)
        .order('added_at', { ascending: false })

      if (error) throw error
      return data?.map(f => f.city_slug) || []
    } catch (error) {
      console.error('Error fetching favorites from Supabase:', error)
      return []
    }
  }, [user, supabase])

  // Sync local favorites to Supabase when user logs in
  const syncLocalFavoritesToSupabase = useCallback(async (localFavorites: string[]) => {
    if (!user || localFavorites.length === 0) return

    try {
      // Get existing favorites
      const existingFavorites = await fetchFavoritesFromSupabase()

      // Filter out favorites that already exist
      const newFavorites = localFavorites.filter(slug => !existingFavorites.includes(slug))

      if (newFavorites.length === 0) return

      // Insert new favorites
      const { error } = await supabase
        .from('user_favorites')
        .insert(newFavorites.map(slug => ({
          user_id: user.id,
          city_slug: slug,
        })))

      if (error) throw error
    } catch (error) {
      console.error('Error syncing favorites to Supabase:', error)
    }
  }, [user, supabase, fetchFavoritesFromSupabase])

  // Load favorites
  useEffect(() => {
    const loadFavorites = async () => {
      setIsLoading(true)

      if (user) {
        // User is logged in - fetch from Supabase
        const localFavorites = localStorage.getItem(STORAGE_KEY)

        // If there are local favorites, sync them first
        if (localFavorites) {
          const parsed = JSON.parse(localFavorites)
          if (parsed.length > 0) {
            await syncLocalFavoritesToSupabase(parsed)
            // Clear local storage after syncing
            localStorage.removeItem(STORAGE_KEY)
          }
        }

        // Fetch all favorites from Supabase
        const supabaseFavorites = await fetchFavoritesFromSupabase()
        setFavorites(supabaseFavorites)
      } else if (!authLoading) {
        // User is not logged in - use localStorage
        try {
          const stored = localStorage.getItem(STORAGE_KEY)
          if (stored) {
            setFavorites(JSON.parse(stored))
          }
        } catch (error) {
          console.error("Error loading favorites from localStorage:", error)
        }
      }

      setIsLoaded(true)
      setIsLoading(false)
    }

    if (!authLoading) {
      loadFavorites()
    }
  }, [user, authLoading, fetchFavoritesFromSupabase, syncLocalFavoritesToSupabase])

  // Save favorites to localStorage for non-logged-in users
  useEffect(() => {
    if (isLoaded && !user) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error("Error saving favorites to localStorage:", error)
      }
    }
  }, [favorites, isLoaded, user])

  const addFavorite = useCallback(async (citySlug: string) => {
    // Optimistic update
    setFavorites((prev) => {
      if (prev.includes(citySlug)) return prev
      return [...prev, citySlug]
    })

    if (user) {
      // Save to Supabase
      try {
        const { error } = await supabase
          .from('user_favorites')
          .insert({
            user_id: user.id,
            city_slug: citySlug,
          })

        if (error && error.code !== '23505') { // Ignore unique constraint violations
          throw error
        }
      } catch (error) {
        console.error('Error adding favorite to Supabase:', error)
        // Revert on error
        setFavorites((prev) => prev.filter((slug) => slug !== citySlug))
      }
    }
  }, [user, supabase])

  const removeFavorite = useCallback(async (citySlug: string) => {
    // Optimistic update
    setFavorites((prev) => prev.filter((slug) => slug !== citySlug))

    if (user) {
      // Remove from Supabase
      try {
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('city_slug', citySlug)

        if (error) throw error
      } catch (error) {
        console.error('Error removing favorite from Supabase:', error)
        // Revert on error
        setFavorites((prev) => [...prev, citySlug])
      }
    }
  }, [user, supabase])

  const toggleFavorite = useCallback((citySlug: string) => {
    if (favorites.includes(citySlug)) {
      removeFavorite(citySlug)
    } else {
      addFavorite(citySlug)
    }
  }, [favorites, addFavorite, removeFavorite])

  const isFavorite = useCallback((citySlug: string) => {
    return favorites.includes(citySlug)
  }, [favorites])

  const clearFavorites = useCallback(async () => {
    setFavorites([])

    if (user) {
      try {
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)

        if (error) throw error
      } catch (error) {
        console.error('Error clearing favorites from Supabase:', error)
      }
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [user, supabase])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        isLoading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
