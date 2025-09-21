import Link from "next/link"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">HalalCities</span>
            </div>
            <p className="text-sm">
              Find your perfect Muslim-friendly city for travel, work, and living.
            </p>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Cities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/city/istanbul" className="hover:text-white">Istanbul</Link></li>
              <li><Link href="/city/dubai" className="hover:text-white">Dubai</Link></li>
              <li><Link href="/city/kuala-lumpur" className="hover:text-white">Kuala Lumpur</Link></li>
              <li><Link href="/city/london" className="hover:text-white">London</Link></li>
              <li><Link href="/city/toronto" className="hover:text-white">Toronto</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contribute" className="hover:text-white">Contribute Data</Link></li>
              <li><Link href="/api" className="hover:text-white">API</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="hover:text-white">Join Community</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/guidelines" className="hover:text-white">Guidelines</Link></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 HalalCities. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/halal-verification" className="hover:text-white">Halal Verification</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}