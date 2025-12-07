import Link from "next/link"
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Building2,
  Utensils,
  Users,
  Heart
} from "lucide-react"

const footerLinks = {
  cities: [
    { name: "Istanbul", href: "/city/istanbul" },
    { name: "Dubai", href: "/city/dubai" },
    { name: "Kuala Lumpur", href: "/city/kuala-lumpur" },
    { name: "London", href: "/city/london" },
    { name: "Toronto", href: "/city/toronto" },
    { name: "Cairo", href: "/city/cairo" },
  ],
  features: [
    { name: "City Explorer", href: "/" },
    { name: "Mosque Finder", href: "/mosques" },
    { name: "Halal Restaurants", href: "/restaurants" },
    { name: "Prayer Times", href: "/prayer-times" },
    { name: "Qibla Direction", href: "/qibla" },
    { name: "Cost Calculator", href: "/calculator" },
  ],
  resources: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Travel Guides", href: "/guides" },
    { name: "API Access", href: "/api" },
    { name: "Contribute Data", href: "/contribute" },
    { name: "Contact Us", href: "/contact" },
  ],
  community: [
    { name: "Join Community", href: "/community" },
    { name: "Events & Meetups", href: "/events" },
    { name: "Success Stories", href: "/stories" },
    { name: "Partner With Us", href: "/partners" },
    { name: "Become Ambassador", href: "/ambassadors" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/halalcities", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/halalcities", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/halalcities", icon: Youtube },
  { name: "LinkedIn", href: "https://linkedin.com/company/halalcities", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      {/* Newsletter Section */}
      <div className="border-b border-[var(--border)]">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
              Stay Updated with HalalCities
            </h3>
            <p className="text-[var(--foreground-secondary)] mb-6">
              Get the latest Muslim-friendly city guides, travel tips, and community updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[var(--foreground-muted)] mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🕌</span>
              <span className="text-xl font-bold text-[var(--foreground)]">
                Halal<span className="text-[var(--primary)]">Cities</span>
              </span>
            </Link>
            <p className="text-[var(--foreground-secondary)] mb-6 max-w-xs">
              Your trusted guide to Muslim-friendly cities worldwide. Find halal food, mosques, and welcoming communities wherever you go.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm text-[var(--foreground-secondary)]">500+ Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm text-[var(--foreground-secondary)]">10K+ Mosques</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm text-[var(--foreground-secondary)]">50K+ Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm text-[var(--foreground-secondary)]">100K+ Users</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Popular Cities</h4>
            <ul className="space-y-2.5">
              {footerLinks.cities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Features</h4>
            <ul className="space-y-2.5">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Community</h4>
            <ul className="space-y-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-[var(--foreground-secondary)]">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for the Muslim Ummah</span>
            </div>

            <p className="text-sm text-[var(--foreground-muted)]">
              © {new Date().getFullYear()} HalalCities. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/halal-verification"
                className="text-[var(--foreground-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                Halal Verification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
