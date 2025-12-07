"use client"

import {
  SlidersHorizontal,
  Grid3x3,
  Map,
  BarChart3,
  ChevronDown,
  X,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type ViewMode = 'grid' | 'map' | 'table'
export type SortOption = 'overall' | 'halal' | 'cost' | 'safety' | 'muslim' | 'internet'

interface FilterBarProps {
  totalResults: number
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
  activeFilters: string[]
  onClearFilters: () => void
  onOpenFilterDrawer: () => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'overall', label: 'Overall Score' },
  { value: 'halal', label: 'Halal Score' },
  { value: 'cost', label: 'Cost of Living' },
  { value: 'safety', label: 'Safety' },
  { value: 'muslim', label: 'Muslim Population' },
  { value: 'internet', label: 'Internet Speed' },
]

export function FilterBar({
  totalResults,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
  activeFilters,
  onClearFilters,
  onOpenFilterDrawer
}: FilterBarProps) {
  const currentSort = sortOptions.find(s => s.value === sortBy)

  return (
    <div className="sticky top-16 z-40 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
      <div className="container py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Results Count */}
            <span className="text-sm text-[var(--foreground-secondary)]">
              <span className="font-semibold text-[var(--foreground)]">{totalResults.toLocaleString()}</span> cities
            </span>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="h-4 w-px bg-[var(--border)]" />
                <div className="flex items-center gap-1.5 flex-wrap">
                  {activeFilters.slice(0, 3).map((filter, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full"
                    >
                      {filter}
                    </span>
                  ))}
                  {activeFilters.length > 3 && (
                    <span className="text-xs text-[var(--foreground-muted)]">
                      +{activeFilters.length - 3} more
                    </span>
                  )}
                  <button
                    onClick={onClearFilters}
                    className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Filter Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenFilterDrawer}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilters.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-[var(--primary)] text-white rounded-full">
                  {activeFilters.length}
                </span>
              )}
            </Button>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  Sort: {currentSort?.label}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => onSortChange(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {sortBy === option.value && (
                      <Check className="w-4 h-4 text-[var(--primary)]" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[var(--background-secondary)] rounded-lg p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[var(--background)] text-[var(--foreground)] shadow-sm'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
                title="Grid View"
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewModeChange('map')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'map'
                    ? 'bg-[var(--background)] text-[var(--foreground)] shadow-sm'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
                title="Map View"
              >
                <Map className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewModeChange('table')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'table'
                    ? 'bg-[var(--background)] text-[var(--foreground)] shadow-sm'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
                title="Table View"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
