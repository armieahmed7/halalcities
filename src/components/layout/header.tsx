"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Building2,
  Utensils,
  Users,
  Heart,
  User,
  LogOut,
  Settings,
  Moon,
  Sun,
  Compass,
  Clock,
  GitCompare,
  Plane,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/context/auth-context"

export function Header() {
  const router = useRouter()
  const { user, profile, isLoading, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  const navigation = [
    {
      name: "Cities",
      href: "/",
      icon: MapPin,
      description: "Explore Muslim-friendly cities worldwide"
    },
    {
      name: "Mosques",
      href: "/mosques",
      icon: Building2,
      description: "Find mosques near you"
    },
    {
      name: "Halal Food",
      href: "/restaurants",
      icon: Utensils,
      description: "Discover halal restaurants"
    },
    {
      name: "Community",
      href: "/community",
      icon: Users,
      description: "Connect with Muslim travelers"
    },
  ]

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🕌</span>
          <span className="text-xl font-bold text-[var(--foreground)]">
            Halal<span className="text-[var(--primary)]">Cities</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === item.href
                  ? "text-[var(--primary)] bg-[var(--primary)]/10"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)]"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] rounded-lg transition-colors">
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/planner" className="flex items-center">
                  <Plane className="w-4 h-4 mr-2" />
                  Trip Planner
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/compare" className="flex items-center">
                  <GitCompare className="w-4 h-4 mr-2" />
                  Compare Cities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/favorites" className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Saved Cities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Compass className="w-4 h-4 mr-2" />
                Qibla Finder
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Clock className="w-4 h-4 mr-2" />
                Prayer Times
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--foreground-muted)] bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] rounded-lg transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search cities...</span>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-[var(--border)] bg-[var(--background)] px-1.5 font-mono text-xs text-[var(--foreground-muted)]">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Auth Buttons or User Menu */}
          {isLoading ? (
            <div className="w-8 h-8 flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin text-[var(--foreground-muted)]" />
            </div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 p-1 rounded-full hover:bg-[var(--background-secondary)] transition-colors">
                  {profile?.avatar_url ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={profile.avatar_url}
                        alt={profile.name || "User"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-medium">
                      {(profile?.name || user.email)?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{profile?.name || "User"}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favorites">
                    <Heart className="w-4 h-4 mr-2" />
                    Saved Cities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onClick={async () => {
                    await signOut()
                    router.push('/')
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background-secondary)] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--foreground-secondary)] hover:bg-[var(--background-secondary)]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{item.description}</p>
                </div>
              </Link>
            ))}

            {!user && (
              <div className="pt-4 border-t border-[var(--border)] flex gap-2">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setSearchOpen(false)}>
          <div
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[var(--background)] rounded-xl shadow-2xl border border-[var(--border)] overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
                <Search className="w-5 h-5 text-[var(--foreground-muted)]" />
                <input
                  type="text"
                  placeholder="Search cities, countries, or features..."
                  autoFocus
                  className="flex-1 bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs text-[var(--foreground-muted)] px-2 py-1 rounded border border-[var(--border)]"
                >
                  ESC
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-[var(--foreground-muted)]">
                  Start typing to search...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
