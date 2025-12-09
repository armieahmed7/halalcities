"use client"

import { useState } from "react"
import { FileDown, Lock, Loader2, Check, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAuth } from "@/context/auth-context"
import Link from "next/link"

interface PDFExportButtonProps {
  cityName: string
  citySlug: string
  className?: string
}

export function PDFExportButton({ cityName, citySlug, className = '' }: PDFExportButtonProps) {
  const { user, profile } = useAuth()
  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false)

  // Check if user has premium access
  const userTier = profile?.subscription_tier || 'free'
  const hasPDFAccess = userTier === 'pro' || userTier === 'business'

  const handleExport = async () => {
    if (!hasPDFAccess) {
      setShowUpgradeDialog(true)
      return
    }

    setIsExporting(true)
    setExportComplete(false)

    try {
      // Call the PDF generation API
      const response = await fetch('/api/premium/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          citySlug,
          cityName,
          userId: user?.id,
          includeSections: ['overview', 'mosques', 'restaurants', 'prayer-times', 'travel']
        })
      })

      if (!response.ok) {
        throw new Error('PDF generation failed')
      }

      // Get the PDF blob
      const blob = await response.blob()

      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `HalalCities-${cityName.replace(/\s+/g, '-')}-Guide.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      setExportComplete(true)
      setTimeout(() => setExportComplete(false), 3000)
    } catch (error) {
      console.error('PDF export error:', error)
      // Show error toast or message
    } finally {
      setIsExporting(false)
    }
  }

  // Show lock icon if not premium
  if (!hasPDFAccess) {
    return (
      <>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowUpgradeDialog(true)}
          className={`gap-2 ${className}`}
        >
          <Lock className="w-4 h-4" />
          <FileDown className="w-4 h-4" />
          Export PDF
        </Button>

        <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                Premium Feature
              </DialogTitle>
              <DialogDescription>
                PDF export is available for Pro and Business subscribers.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What you&apos;ll get with PDF Export:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Beautifully formatted city guide
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Mosque locations & prayer times
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Halal restaurant directory
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Offline access while traveling
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Link href="/pricing" className="flex-1">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Upgrade to Pro - $4.99/mo
                  </Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      disabled={isExporting}
      className={`gap-2 ${className}`}
    >
      {isExporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating...
        </>
      ) : exportComplete ? (
        <>
          <Check className="w-4 h-4 text-emerald-600" />
          Downloaded!
        </>
      ) : (
        <>
          <FileDown className="w-4 h-4" />
          Export PDF
        </>
      )}
    </Button>
  )
}

export default PDFExportButton
