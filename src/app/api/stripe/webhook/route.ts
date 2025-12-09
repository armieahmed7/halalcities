import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

// Initialize Stripe lazily to avoid build-time errors when env vars are not available
const getStripeClient = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-11-17.clover',
  })
}

export async function POST(req: NextRequest) {
  const stripe = getStripeClient()
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const body = await req.text()
  const headersList = await headers()
  const sig = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log('Checkout session completed:', session.id)

      // Update user subscription in your database
      const userId = session.metadata?.userId
      const subscriptionId = session.subscription as string

      if (userId && subscriptionId) {
        // TODO: Update user subscription status in Supabase
        console.log(`User ${userId} subscribed with subscription ${subscriptionId}`)
      }
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      console.log('Subscription updated:', subscription.id)

      const userId = subscription.metadata?.userId
      const status = subscription.status
      const priceId = subscription.items.data[0]?.price.id

      if (userId) {
        // TODO: Update user subscription status in Supabase
        console.log(`User ${userId} subscription status: ${status}, price: ${priceId}`)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      console.log('Subscription deleted:', subscription.id)

      const userId = subscription.metadata?.userId

      if (userId) {
        // TODO: Downgrade user to free tier in Supabase
        console.log(`User ${userId} subscription canceled`)
      }
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      console.log('Invoice payment succeeded:', invoice.id)
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      console.log('Invoice payment failed:', invoice.id)

      // TODO: Notify user of failed payment
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
