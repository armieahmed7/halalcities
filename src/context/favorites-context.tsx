"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface FavoritesContextType {
  favorites: string[]
  addFavorite: (citySlug: string) => void
  removeFavorite: (citySlug: string) => void
  toggleFavorite: (citySlug: string) => void
  isFavorite: (citySlug: string) => boolean
  clearFavorites: () => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const STORAGE_KEY = "halalcities_favorites"

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setFavorites(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Error loading favorites:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error("Error saving favorites:", error)
      }
    }
  }, [favorites, isLoaded])

  const addFavorite = (citySlug: string) => {
    setFavorites((prev) => {
      if (prev.includes(citySlug)) return prev
      return [...prev, citySlug]
    })
  }

  const removeFavorite = (citySlug: string) => {
    setFavorites((prev) => prev.filter((slug) => slug !== citySlug))
  }

  const toggleFavorite = (citySlug: string) => {
    if (favorites.includes(citySlug)) {
      removeFavorite(citySlug)
    } else {
      addFavorite(citySlug)
    }
  }

  const isFavorite = (citySlug: string) => {
    return favorites.includes(citySlug)
  }

  const clearFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
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
