"use client"

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SUBSCRIPTION_TIERS } from '@/lib/stripe'
import {
  Check,
  X,
  Zap,
  Building2,
  MapPin,
  Download,
  Shield,
  Users,
  Star,
  Sparkles,
  Crown,
  Briefcase,
  ChevronRight
} from 'lucide-react'

function PricingContent() {
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month')
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const searchParams = useSearchParams()

  const success = searchParams.get('success')
  const canceled = searchParams.get('canceled')

  const handleSubscribe = async (priceId: string | null, tierId: string) => {
    if (!priceId) {
      // Free tier, no payment needed
      window.location.href = '/signup'
      return
    }

    setIsLoading(tierId)

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/pricing?success=true`,
          cancelUrl: `${window.location.origin}/pricing?canceled=true`,
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        console.error('Checkout error:', error)
        alert('Something went wrong. Please try again.')
        return
      }

      // Redirect to Stripe Checkout
      window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(null)
    }
  }

  const proPrice = billingInterval === 'month'
    ? SUBSCRIPTION_TIERS.PRO_MONTHLY
    : SUBSCRIPTION_TIERS.PRO_YEARLY

  const yearlyDiscount = Math.round(
    ((SUBSCRIPTION_TIERS.PRO_MONTHLY.price * 12 - SUBSCRIPTION_TIERS.PRO_YEARLY.price) /
    (SUBSCRIPTION_TIERS.PRO_MONTHLY.price * 12)) * 100
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Success/Cancel Messages */}
      {success && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <Check className="h-5 w-5" />
          Payment successful! Welcome to HalalCities Pro.
        </div>
      )}
      {canceled && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <X className="h-5 w-5" />
          Payment canceled. No charges were made.
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-6 w-6 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
            Special Launch Pricing
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Travel the World with <span className="text-emerald-600">Confidence</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your Muslim travel journey. Access 1,370+ cities, prayer times, and halal restaurants worldwide.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingInterval === 'month' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingInterval(billingInterval === 'month' ? 'year' : 'month')}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              billingInterval === 'year' ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                billingInterval === 'year' ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingInterval === 'year' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Yearly
            <span className="ml-2 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
              Save {yearlyDiscount}%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Free</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">For casual travelers</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/forever</span>
              </div>
            </div>

            <Button
              onClick={() => handleSubscribe(null, 'free')}
              variant="outline"
              className="w-full mb-6 h-12"
            >
              Get Started Free
            </Button>

            <ul className="space-y-3">
              {SUBSCRIPTION_TIERS.FREE.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier - Most Popular */}
          <div className="relative bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 rounded-2xl shadow-xl border-2 border-emerald-500 p-8 transform md:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Star className="h-4 w-4" />
                Most Popular
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pro</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">For frequent travelers</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${billingInterval === 'month' ? '4.99' : '39.99'}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  /{billingInterval === 'month' ? 'month' : 'year'}
                </span>
              </div>
              {billingInterval === 'year' && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                  That&apos;s just $3.33/month - Save ${(4.99 * 12 - 39.99).toFixed(2)}/year
                </p>
              )}
            </div>

            <Button
              onClick={() => handleSubscribe(proPrice.priceId || null, proPrice.id)}
              disabled={isLoading === proPrice.id}
              className="w-full mb-6 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
            >
              {isLoading === proPrice.id ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  Upgrade to Pro
                  <ChevronRight className="h-5 w-5 ml-1" />
                </>
              )}
            </Button>

            <ul className="space-y-3">
              {proPrice.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Tier */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Business</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">For teams & corporates</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$19.99</span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
              </div>
            </div>

            <Button
              onClick={() => handleSubscribe(SUBSCRIPTION_TIERS.BUSINESS_MONTHLY.priceId || null, 'business_monthly')}
              disabled={isLoading === 'business_monthly'}
              variant="outline"
              className="w-full mb-6 h-12 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              {isLoading === 'business_monthly' ? (
                <div className="animate-spin h-5 w-5 border-2 border-purple-500 border-t-transparent rounded-full" />
              ) : (
                'Contact Sales'
              )}
            </Button>

            <ul className="space-y-3">
              {SUBSCRIPTION_TIERS.BUSINESS_MONTHLY.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Check className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Compare Plans
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-purple-600 dark:text-purple-400">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      Saved Cities
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">3</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">Unlimited</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Download className="h-4 w-4 text-gray-400" />
                      Offline Access
                    </td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-purple-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Download className="h-4 w-4 text-gray-400" />
                      PDF City Guides
                    </td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-purple-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-400" />
                      Remove Ads
                    </td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-purple-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      Team Members
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">1</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">1</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">Up to 5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-400" />
                      API Access
                    </td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">1,000/mo</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      Priority Support
                    </td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-emerald-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-purple-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes! You can cancel your subscription at any time. You&apos;ll continue to have access until the end of your billing period.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is my payment secure?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Absolutely. We use Stripe for payment processing, which is PCI-DSS Level 1 certified - the highest level of security.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer refunds?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes, we offer a 7-day money-back guarantee. If you&apos;re not satisfied, contact us for a full refund.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I upgrade or downgrade?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes! You can change your plan anytime from your account settings. Changes take effect immediately.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to travel with peace of mind?
            </h2>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join thousands of Muslim travelers who use HalalCities to find halal food, prayer spaces, and community wherever they go.
            </p>
            <Button
              onClick={() => handleSubscribe(proPrice.priceId || null, proPrice.id)}
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 h-14 px-8 text-lg font-semibold"
            >
              Start Your Free Trial
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full" />
    </div>
  )
}

export default function PricingPage() {
  return (
    <Suspense fallback={<PricingLoading />}>
      <PricingContent />
    </Suspense>
  )
}
