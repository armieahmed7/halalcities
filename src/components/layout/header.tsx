"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">HalalCities</span>
        </Link>
        
        <nav className="ml-auto flex items-center space-x-6">
          <Link href="/cities" className="text-sm font-medium hover:text-green-600">
            Cities
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-green-600">
            Community
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-600">
            About
          </Link>
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">
            Join HalalCities →
          </Button>
        </nav>
      </div>
    </header>
  )
}