"use client"

import Link from "next/link"
import { Home, Search, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-[var(--primary)] opacity-20 select-none">
            404
          </div>
          <div className="text-6xl -mt-16 mb-4">
            🕌
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-[var(--foreground-secondary)] mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          It might have been moved or doesn&apos;t exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/#search"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] hover:bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold rounded-xl transition-colors"
          >
            <Search className="w-5 h-5" />
            Search Cities
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--foreground-muted)] mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Browse Cities
            </Link>
            <span className="text-[var(--foreground-muted)]">•</span>
            <Link
              href="/favorites"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              My Favorites
            </Link>
            <span className="text-[var(--foreground-muted)]">•</span>
            <Link
              href="/compare"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Compare Cities
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
