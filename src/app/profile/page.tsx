"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  Globe,
  Languages,
  Utensils,
  Plane,
  Heart,
  Star,
  MapPin,
  Camera,
  Loader2,
  Check,
  Bell,
  Shield,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { useFavorites } from "@/context/favorites-context"

const TRAVEL_STYLES = [
  { value: "budget", label: "Budget Traveler", icon: "💰" },
  { value: "comfort", label: "Comfort Seeker", icon: "🛋️" },
  { value: "luxury", label: "Luxury Traveler", icon: "✨" },
  { value: "adventure", label: "Adventure Explorer", icon: "🎒" },
  { value: "family", label: "Family Traveler", icon: "👨‍👩‍👧‍👦" },
  { value: "solo", label: "Solo Explorer", icon: "🚶" },
  { value: "business", label: "Business Traveler", icon: "💼" },
]

const DIETARY_OPTIONS = [
  "Strictly Halal",
  "Halal Preferred",
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "No Pork",
  "No Alcohol",
  "Kosher",
]

const COMMON_LANGUAGES = [
  "Arabic",
  "English",
  "French",
  "Turkish",
  "Urdu",
  "Malay",
  "Indonesian",
  "Bengali",
  "Spanish",
  "German",
]

export default function ProfilePage() {
  const router = useRouter()
  const { user, profile, isLoading, updateProfile, signOut } = useAuth()
  const { favorites } = useFavorites()

  const [activeTab, setActiveTab] = useState<"profile" | "preferences" | "notifications">("profile")
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  // Form state
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [nationality, setNationality] = useState("")
  const [languages, setLanguages] = useState<string[]>([])
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([])
  const [travelStyle, setTravelStyle] = useState("")
  const [notificationPrefs, setNotificationPrefs] = useState({
    email_updates: true,
    new_city_alerts: true,
    travel_deals: true,
  })

  // Initialize form with profile data
  useEffect(() => {
    if (profile) {
      setName(profile.name || "")
      setBio(profile.bio || "")
      setNationality(profile.nationality || "")
      setLanguages(profile.languages || [])
      setDietaryRestrictions(profile.dietary_restrictions || [])
      setTravelStyle(profile.travel_style || "")
      setNotificationPrefs(profile.notification_preferences || {
        email_updates: true,
        new_city_alerts: true,
        travel_deals: true,
      })
    }
  }, [profile])

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const handleSave = async () => {
    setIsSaving(true)
    setSaveSuccess(false)

    const { error } = await updateProfile({
      name,
      bio,
      nationality,
      languages,
      dietary_restrictions: dietaryRestrictions,
      travel_style: travelStyle,
      notification_preferences: notificationPrefs,
    })

    if (!error) {
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    }

    setIsSaving(false)
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const toggleLanguage = (lang: string) => {
    setLanguages(prev =>
      prev.includes(lang)
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    )
  }

  const toggleDietary = (option: string) => {
    setDietaryRestrictions(prev =>
      prev.includes(option)
        ? prev.filter(d => d !== option)
        : [...prev, option]
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header Banner */}
      <div className="relative h-48 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container max-w-4xl -mt-24 pb-12 px-4">
        {/* Profile Card */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="p-6 pb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[var(--card)] bg-[var(--background-secondary)] overflow-hidden">
                  {profile?.avatar_url ? (
                    <Image
                      src={profile.avatar_url}
                      alt={profile.name || "User"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl font-bold text-[var(--primary)]">
                      {(profile?.name || user.email)?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-[var(--primary)] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-[var(--foreground)]">
                  {profile?.name || "Welcome!"}
                </h1>
                <p className="text-[var(--foreground-secondary)]">{user.email}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-[var(--foreground-muted)]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {favorites.length} saved cities
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    0 reviews
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                >
                  {isSaving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : saveSuccess ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-[var(--border)]">
            <div className="flex">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "profile"
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)] bg-[var(--primary)]/5"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <User className="w-4 h-4 inline mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "preferences"
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)] bg-[var(--primary)]/5"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <Plane className="w-4 h-4 inline mr-2" />
                Travel Preferences
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "notifications"
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)] bg-[var(--primary)]/5"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                <Bell className="w-4 h-4 inline mr-2" />
                Notifications
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Bio
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself and your travel experiences..."
                    rows={3}
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Nationality
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
                    <input
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      placeholder="Where are you from?"
                      className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    <Languages className="w-4 h-4 inline mr-2" />
                    Languages You Speak
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {COMMON_LANGUAGES.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => toggleLanguage(lang)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                          languages.includes(lang)
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--background-secondary)] text-[var(--foreground-secondary)] hover:bg-[var(--background-tertiary)]"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account Security */}
                <div className="pt-6 border-t border-[var(--border)]">
                  <h3 className="text-sm font-medium text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Account Security
                  </h3>
                  <div className="space-y-3">
                    <Link href="/forgot-password">
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6">
                {/* Travel Style */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                    <Plane className="w-4 h-4 inline mr-2" />
                    Travel Style
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {TRAVEL_STYLES.map((style) => (
                      <button
                        key={style.value}
                        onClick={() => setTravelStyle(style.value)}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          travelStyle === style.value
                            ? "border-[var(--primary)] bg-[var(--primary)]/5"
                            : "border-[var(--border)] hover:border-[var(--border-hover)]"
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{style.icon}</span>
                        <span className="text-sm font-medium text-[var(--foreground)]">
                          {style.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dietary Preferences */}
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                    <Utensils className="w-4 h-4 inline mr-2" />
                    Dietary Preferences
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DIETARY_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleDietary(option)}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                          dietaryRestrictions.includes(option)
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--background-secondary)] text-[var(--foreground-secondary)] hover:bg-[var(--background-tertiary)]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Saved Cities Quick Access */}
                <div className="pt-6 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-[var(--foreground)] flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Saved Cities
                    </h3>
                    <Link href="/favorites" className="text-sm text-[var(--primary)] hover:underline">
                      View all
                    </Link>
                  </div>
                  {favorites.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {favorites.slice(0, 5).map((slug) => (
                        <Link
                          key={slug}
                          href={`/city/${slug}`}
                          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[var(--background-secondary)] hover:bg-[var(--primary)]/10 rounded-full transition-colors"
                        >
                          <MapPin className="w-3 h-3" />
                          {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                      ))}
                      {favorites.length > 5 && (
                        <span className="px-3 py-1.5 text-sm text-[var(--foreground-muted)]">
                          +{favorites.length - 5} more
                        </span>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-[var(--foreground-muted)]">
                      No saved cities yet.{" "}
                      <Link href="/" className="text-[var(--primary)] hover:underline">
                        Explore cities
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Control how you receive updates and notifications from HalalCities.
                </p>

                <div className="space-y-4">
                  {/* Email Updates */}
                  <label className="flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">Email Updates</p>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Weekly newsletter with travel tips and new features
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.email_updates}
                      onChange={(e) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          email_updates: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 text-[var(--primary)] rounded focus:ring-[var(--primary)]"
                    />
                  </label>

                  {/* New City Alerts */}
                  <label className="flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">New City Alerts</p>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Get notified when we add new cities matching your preferences
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.new_city_alerts}
                      onChange={(e) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          new_city_alerts: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 text-[var(--primary)] rounded focus:ring-[var(--primary)]"
                    />
                  </label>

                  {/* Travel Deals */}
                  <label className="flex items-center justify-between p-4 bg-[var(--background-secondary)] rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">Travel Deals</p>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        Exclusive deals and discounts from our partners
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationPrefs.travel_deals}
                      onChange={(e) =>
                        setNotificationPrefs((prev) => ({
                          ...prev,
                          travel_deals: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 text-[var(--primary)] rounded focus:ring-[var(--primary)]"
                    />
                  </label>
                </div>

                <div className="pt-6 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--foreground-muted)]">
                    You can unsubscribe from any of these notifications at any time.
                    For more information, see our{" "}
                    <Link href="/privacy" className="text-[var(--primary)] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
