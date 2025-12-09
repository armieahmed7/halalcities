import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Subscription tier configurations
export const SUBSCRIPTION_TIERS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    priceId: null,
    interval: null,
    features: [
      'Access to all city guides',
      'Basic prayer times',
      'View mosques and restaurants',
      '3 saved cities',
      'Basic filters',
    ],
    limits: {
      savedCities: 3,
      offlineAccess: false,
      advancedFilters: false,
      pdfExport: false,
      prioritySupport: false,
      removeAds: false,
    },
  },
  PRO_MONTHLY: {
    id: 'pro_monthly',
    name: 'Pro',
    price: 4.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
    interval: 'month' as const,
    features: [
      'Everything in Free',
      'Unlimited saved cities',
      'Offline access to city guides',
      'Advanced filters (discrimination scores, internet speed)',
      'Detailed restaurant reviews with photos',
      'Download PDF city guides',
      'Priority customer support',
      'Remove ads',
      'Early access to new features',
    ],
    limits: {
      savedCities: Infinity,
      offlineAccess: true,
      advancedFilters: true,
      pdfExport: true,
      prioritySupport: true,
      removeAds: true,
    },
  },
  PRO_YEARLY: {
    id: 'pro_yearly',
    name: 'Pro',
    price: 39.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
    interval: 'year' as const,
    features: [
      'Everything in Free',
      'Unlimited saved cities',
      'Offline access to city guides',
      'Advanced filters (discrimination scores, internet speed)',
      'Detailed restaurant reviews with photos',
      'Download PDF city guides',
      'Priority customer support',
      'Remove ads',
      'Early access to new features',
      '2 months FREE (save $20/year)',
    ],
    limits: {
      savedCities: Infinity,
      offlineAccess: true,
      advancedFilters: true,
      pdfExport: true,
      prioritySupport: true,
      removeAds: true,
    },
  },
  BUSINESS_MONTHLY: {
    id: 'business_monthly',
    name: 'Business',
    price: 19.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
    interval: 'month' as const,
    features: [
      'Everything in Pro',
      'Team sharing (up to 5 members)',
      'Travel expense tracking',
      'Business trip planner with meeting scheduler',
      'Corporate halal dining recommendations',
      'Invoice generation',
      'API access (1,000 calls/month)',
    ],
    limits: {
      savedCities: Infinity,
      offlineAccess: true,
      advancedFilters: true,
      pdfExport: true,
      prioritySupport: true,
      removeAds: true,
      teamMembers: 5,
      apiCalls: 1000,
    },
  },
}

export type SubscriptionTier = keyof typeof SUBSCRIPTION_TIERS
export type TierConfig = typeof SUBSCRIPTION_TIERS[SubscriptionTier]
