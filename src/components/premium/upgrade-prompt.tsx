"use client"

import Link from "next/link"
import {
  Crown,
  Check,
  Sparkles,
  FileDown,
  Calendar,
  WifiOff,
  Filter,
  GitCompare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface UpgradePromptProps {
  isOpen: boolean
  onClose: () => void
  feature?: string
  variant?: 'dialog' | 'inline' | 'banner'
}

const PRO_FEATURES = [
  { icon: FileDown, text: 'PDF Export - Download city guides' },
  { icon: Calendar, text: 'Advanced Trip Planner' },
  { icon: WifiOff, text: 'Offline Access' },
  { icon: Filter, text: 'Advanced Filters' },
  { icon: GitCompare, text: 'Compare up to 5 cities' },
  { icon: Sparkles, text: 'Ad-free experience' },
]

export function UpgradePrompt({
  isOpen,
  onClose,
  feature,
  variant = 'dialog'
}: UpgradePromptProps) {
  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-yellow-300" />
            <p className="text-sm font-medium">
              {feature
                ? `Unlock ${feature} with Pro`
                : 'Upgrade to Pro for premium features'}
            </p>
          </div>
          <Link href="/pricing">
            <Button size="sm" className="bg-white text-emerald-600 hover:bg-white/90">
              Upgrade Now
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-yellow-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {feature ? `Unlock ${feature}` : 'Upgrade to Pro'}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Get access to premium features and support the Muslim travel community.
        </p>

        <ul className="space-y-2 mb-4">
          {PRO_FEATURES.slice(0, 4).map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <Check className="w-4 h-4 text-emerald-600" />
              {item.text}
            </li>
          ))}
        </ul>

        <Link href="/pricing">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            Upgrade to Pro - $4.99/mo
          </Button>
        </Link>
      </div>
    )
  }

  // Dialog variant
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Crown className="w-6 h-6 text-yellow-500" />
            {feature ? `Unlock ${feature}` : 'Upgrade to HalalCities Pro'}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Hero section */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white mb-6">
            <div className="text-center">
              <p className="text-emerald-100 text-sm mb-1">Pro Plan</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-emerald-200">/month</span>
              </div>
              <p className="text-emerald-100 text-sm mt-2">
                or $39.99/year (save 33%)
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Everything in Pro:
            </h4>
            {PRO_FEATURES.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Link href="/pricing" className="block">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Upgrade to Pro
              </Button>
            </Link>
            <button
              onClick={onClose}
              className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Maybe later
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                Secure payment
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                Money-back guarantee
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UpgradePrompt
