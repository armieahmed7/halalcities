// Premium Features Configuration
// This module defines premium features and access control

import { SUBSCRIPTION_TIERS } from './stripe'

export type PremiumFeature =
  | 'pdf_export'
  | 'trip_planner'
  | 'offline_access'
  | 'priority_support'
  | 'advanced_filters'
  | 'compare_cities'
  | 'custom_lists'
  | 'api_access'

export interface FeatureConfig {
  id: PremiumFeature
  name: string
  description: string
  icon: string
  requiredTier: 'free' | 'pro' | 'business'
  usageLimit?: {
    free: number
    pro: number
    business: number
  }
}

export const PREMIUM_FEATURES: Record<PremiumFeature, FeatureConfig> = {
  pdf_export: {
    id: 'pdf_export',
    name: 'PDF Export',
    description: 'Download city guides as beautifully formatted PDFs',
    icon: 'FileDown',
    requiredTier: 'pro',
    usageLimit: {
      free: 0,
      pro: 10, // per month
      business: -1 // unlimited
    }
  },
  trip_planner: {
    id: 'trip_planner',
    name: 'Advanced Trip Planner',
    description: 'Create detailed itineraries with prayer time integration',
    icon: 'Calendar',
    requiredTier: 'pro',
    usageLimit: {
      free: 1, // one basic trip
      pro: 10, // per month
      business: -1 // unlimited
    }
  },
  offline_access: {
    id: 'offline_access',
    name: 'Offline Access',
    description: 'Access city guides offline while traveling',
    icon: 'WifiOff',
    requiredTier: 'pro'
  },
  priority_support: {
    id: 'priority_support',
    name: 'Priority Support',
    description: '24/7 priority email support',
    icon: 'Headphones',
    requiredTier: 'business'
  },
  advanced_filters: {
    id: 'advanced_filters',
    name: 'Advanced Filters',
    description: 'Filter cities by specific halal requirements',
    icon: 'Filter',
    requiredTier: 'pro'
  },
  compare_cities: {
    id: 'compare_cities',
    name: 'City Comparison',
    description: 'Compare multiple cities side by side',
    icon: 'GitCompare',
    requiredTier: 'free', // Available to all but limited
    usageLimit: {
      free: 2, // compare 2 cities
      pro: 5, // compare 5 cities
      business: 10 // compare 10 cities
    }
  },
  custom_lists: {
    id: 'custom_lists',
    name: 'Custom Lists',
    description: 'Create and share custom lists of places',
    icon: 'List',
    requiredTier: 'pro',
    usageLimit: {
      free: 0,
      pro: 10,
      business: -1
    }
  },
  api_access: {
    id: 'api_access',
    name: 'API Access',
    description: 'Access HalalCities data via API',
    icon: 'Code',
    requiredTier: 'business'
  }
}

// Check if a user has access to a feature
export function hasFeatureAccess(
  feature: PremiumFeature,
  userTier: 'free' | 'pro' | 'business'
): boolean {
  const featureConfig = PREMIUM_FEATURES[feature]
  const tierHierarchy = { free: 0, pro: 1, business: 2 }

  return tierHierarchy[userTier] >= tierHierarchy[featureConfig.requiredTier]
}

// Get remaining usage for a feature
export function getFeatureUsage(
  feature: PremiumFeature,
  userTier: 'free' | 'pro' | 'business',
  currentUsage: number
): { limit: number; remaining: number; unlimited: boolean } {
  const featureConfig = PREMIUM_FEATURES[feature]

  if (!featureConfig.usageLimit) {
    return { limit: -1, remaining: -1, unlimited: true }
  }

  const limit = featureConfig.usageLimit[userTier]

  if (limit === -1) {
    return { limit: -1, remaining: -1, unlimited: true }
  }

  return {
    limit,
    remaining: Math.max(0, limit - currentUsage),
    unlimited: false
  }
}

// Get the upgrade message for a feature
export function getUpgradeMessage(feature: PremiumFeature): string {
  const featureConfig = PREMIUM_FEATURES[feature]

  if (featureConfig.requiredTier === 'pro') {
    return `Upgrade to Pro ($${SUBSCRIPTION_TIERS.PRO_MONTHLY.price}/mo) to unlock ${featureConfig.name}`
  }

  if (featureConfig.requiredTier === 'business') {
    return `Upgrade to Business ($${SUBSCRIPTION_TIERS.BUSINESS_MONTHLY.price}/mo) to unlock ${featureConfig.name}`
  }

  return 'This feature is available on all plans'
}
