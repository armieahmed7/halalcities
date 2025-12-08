"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ThumbsUp,
  MessageSquare,
  User,
  Calendar,
  MapPin,
  Plus,
  X,
  Loader2,
  Check,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase"
import { User as SupabaseUser } from "@supabase/supabase-js"

interface Review {
  id: string
  user_id: string
  city_slug: string
  rating: number
  title: string | null
  content: string
  pros: string[]
  cons: string[]
  visit_date: string | null
  visit_purpose: string | null
  helpful_count: number
  created_at: string
  user_name?: string
  user_avatar?: string
}

interface CityReviewsProps {
  citySlug: string
  cityName: string
}

const VISIT_PURPOSES = [
  "Tourism",
  "Business",
  "Relocation",
  "Digital Nomad",
  "Family Visit",
  "Studying",
  "Other"
]

export function CityReviews({ citySlug, cityName }: CityReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showWriteReview, setShowWriteReview] = useState(false)
  const [userHasReviewed, setUserHasReviewed] = useState(false)

  // Write review form state
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [pros, setPros] = useState<string[]>([])
  const [cons, setCons] = useState<string[]>([])
  const [newPro, setNewPro] = useState("")
  const [newCon, setNewCon] = useState("")
  const [visitDate, setVisitDate] = useState("")
  const [visitPurpose, setVisitPurpose] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const supabase = createClient()

  const fetchReviews = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('user_reviews')
        .select(`
          *,
          user_profiles:user_id (
            name,
            avatar_url
          )
        `)
        .eq('city_slug', citySlug)
        .order('created_at', { ascending: false })

      if (error) throw error

      const formattedReviews = (data || []).map((review) => ({
        ...review,
        user_name: (review.user_profiles as { name?: string })?.name || 'Anonymous',
        user_avatar: (review.user_profiles as { avatar_url?: string })?.avatar_url || null
      }))

      setReviews(formattedReviews)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setIsLoading(false)
    }
  }, [citySlug, supabase])

  useEffect(() => {
    // Get user
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)

      if (session?.user) {
        // Check if user has already reviewed this city
        const { data } = await supabase
          .from('user_reviews')
          .select('id')
          .eq('user_id', session.user.id)
          .eq('city_slug', citySlug)
          .single()

        setUserHasReviewed(!!data)
      }
    }

    getUser()
    fetchReviews()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [citySlug, supabase, fetchReviews])

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const { error } = await supabase
        .from('user_reviews')
        .insert({
          user_id: user.id,
          city_slug: citySlug,
          rating,
          title: title || null,
          content,
          pros,
          cons,
          visit_date: visitDate || null,
          visit_purpose: visitPurpose || null,
        })

      if (error) throw error

      setSubmitSuccess(true)
      setUserHasReviewed(true)

      // Reset form
      setRating(0)
      setTitle("")
      setContent("")
      setPros([])
      setCons([])
      setVisitDate("")
      setVisitPurpose("")

      // Refresh reviews
      await fetchReviews()

      setTimeout(() => {
        setShowWriteReview(false)
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('Error submitting review:', error)
      setSubmitError("Failed to submit review. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleHelpful = async (reviewId: string) => {
    if (!user) return

    try {
      // Check if user already voted
      const { data: existingVote } = await supabase
        .from('review_helpful_votes')
        .select('id')
        .eq('review_id', reviewId)
        .eq('user_id', user.id)
        .single()

      if (existingVote) {
        // Remove vote
        await supabase
          .from('review_helpful_votes')
          .delete()
          .eq('id', existingVote.id)
      } else {
        // Add vote
        await supabase
          .from('review_helpful_votes')
          .insert({
            review_id: reviewId,
            user_id: user.id
          })
      }

      // Refresh reviews to get updated count
      await fetchReviews()
    } catch (error) {
      console.error('Error voting:', error)
    }
  }

  const addPro = () => {
    if (newPro.trim() && pros.length < 5) {
      setPros([...pros, newPro.trim()])
      setNewPro("")
    }
  }

  const addCon = () => {
    if (newCon.trim() && cons.length < 5) {
      setCons([...cons, newCon.trim()])
      setNewCon("")
    }
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : 0

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: reviews.length > 0
      ? (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
      : 0
  }))

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[var(--primary)]" />
              Community Reviews
            </h2>
            <p className="text-sm text-[var(--foreground-secondary)] mt-1">
              {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'} from the Muslim travel community
            </p>
          </div>

          {user ? (
            userHasReviewed ? (
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                <Check className="w-4 h-4 text-emerald-500" />
                You&apos;ve reviewed this city
              </div>
            ) : (
              <Button
                onClick={() => setShowWriteReview(true)}
                className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Write a Review
              </Button>
            )
          ) : (
            <Link href="/login">
              <Button variant="outline">
                Sign in to review
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Rating Summary */}
      {reviews.length > 0 && (
        <div className="p-6 border-b border-[var(--border)] bg-[var(--background-secondary)]">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--foreground)]">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(averageRating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="flex-1 space-y-2">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm text-[var(--foreground-muted)] w-3">{rating}</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <div className="flex-1 h-2 bg-[var(--background)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-[var(--foreground-muted)] w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Write Review Modal */}
      {showWriteReview && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-[var(--card)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[var(--card)] border-b border-[var(--border)] p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Review {cityName}
              </h3>
              <button
                onClick={() => setShowWriteReview(false)}
                className="p-2 hover:bg-[var(--background-secondary)] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--foreground)]">
                    Thank you for your review!
                  </h4>
                  <p className="text-[var(--foreground-secondary)] mt-2">
                    Your review helps other Muslim travelers.
                  </p>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-600">
                      <AlertCircle className="w-5 h-5" />
                      {submitError}
                    </div>
                  )}

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                      Overall Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoverRating || rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-[var(--foreground-muted)]">
                        {rating === 0 ? "Select a rating" : `${rating} star${rating > 1 ? 's' : ''}`}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Title (optional)
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Summarize your experience"
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Your Review *
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Share your experience about halal food, mosques, Muslim community, safety, and anything else that would help fellow Muslim travelers..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Pros */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Pros (optional)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newPro}
                        onChange={(e) => setNewPro(e.target.value)}
                        placeholder="Add a pro"
                        className="flex-1 px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPro())}
                      />
                      <Button type="button" onClick={addPro} variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pros.map((pro, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
                        >
                          ✓ {pro}
                          <button
                            type="button"
                            onClick={() => setPros(pros.filter((_, i) => i !== index))}
                            className="hover:text-emerald-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cons */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Cons (optional)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newCon}
                        onChange={(e) => setNewCon(e.target.value)}
                        placeholder="Add a con"
                        className="flex-1 px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCon())}
                      />
                      <Button type="button" onClick={addCon} variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cons.map((con, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm"
                        >
                          ✗ {con}
                          <button
                            type="button"
                            onClick={() => setCons(cons.filter((_, i) => i !== index))}
                            className="hover:text-red-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        When did you visit?
                      </label>
                      <input
                        type="month"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Purpose of visit
                      </label>
                      <select
                        value={visitPurpose}
                        onChange={(e) => setVisitPurpose(e.target.value)}
                        className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      >
                        <option value="">Select purpose</option>
                        {VISIT_PURPOSES.map((purpose) => (
                          <option key={purpose} value={purpose}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowWriteReview(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || rating === 0 || !content.trim()}
                      className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Submit Review"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="divide-y divide-[var(--border)]">
        {isLoading ? (
          <div className="p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)] mx-auto" />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-[var(--foreground-muted)] mx-auto mb-3" />
            <p className="text-[var(--foreground-secondary)]">No reviews yet</p>
            <p className="text-sm text-[var(--foreground-muted)] mt-1">
              Be the first to share your experience in {cityName}
            </p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="p-6">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {review.user_avatar ? (
                    <Image
                      src={review.user_avatar}
                      alt={review.user_name || "User"}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-semibold">
                      {(review.user_name || "A").charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-[var(--foreground)]">
                      {review.user_name || "Anonymous"}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[var(--foreground-muted)] mt-1">
                    <span>{new Date(review.created_at).toLocaleDateString()}</span>
                    {review.visit_purpose && (
                      <>
                        <span>•</span>
                        <span>{review.visit_purpose}</span>
                      </>
                    )}
                  </div>

                  {review.title && (
                    <h4 className="font-medium text-[var(--foreground)] mt-3">
                      {review.title}
                    </h4>
                  )}

                  <p className="text-[var(--foreground-secondary)] mt-2 whitespace-pre-wrap">
                    {review.content}
                  </p>

                  {/* Pros & Cons */}
                  {(review.pros.length > 0 || review.cons.length > 0) && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {review.pros.map((pro, i) => (
                        <span
                          key={`pro-${i}`}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded text-xs"
                        >
                          ✓ {pro}
                        </span>
                      ))}
                      {review.cons.map((con, i) => (
                        <span
                          key={`con-${i}`}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs"
                        >
                          ✗ {con}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => handleHelpful(review.id)}
                      disabled={!user}
                      className="flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful_count})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CityReviews
