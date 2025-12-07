"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronUp, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface FilterState {
  // Muslim-specific filters
  halalScore: [number, number]
  mosqueDensity: string[]
  muslimPopulation: string[]
  airportPrayerRoom: boolean | null
  islamicBanks: boolean | null
  halalHotels: boolean | null

  // General filters
  budget: [number, number]
  safety: string[]
  internet: string[]
  weather: string[]
  continent: string[]
  visaFree: string[]

  // Lifestyle filters
  familyFriendly: boolean | null
  womenFriendly: boolean | null
  lgbtqFriendly: boolean | null
  nightlife: boolean | null
  outdoorActivities: boolean | null
}

interface FilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onApply: () => void
  onReset: () => void
}

const defaultFilters: FilterState = {
  halalScore: [0, 100],
  mosqueDensity: [],
  muslimPopulation: [],
  airportPrayerRoom: null,
  islamicBanks: null,
  halalHotels: null,
  budget: [0, 5000],
  safety: [],
  internet: [],
  weather: [],
  continent: [],
  visaFree: [],
  familyFriendly: null,
  womenFriendly: null,
  lgbtqFriendly: null,
  nightlife: null,
  outdoorActivities: null,
}

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  onApply,
  onReset
}: FilterDrawerProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'muslim',
    'budget',
    'general'
  ])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const current = filters[key] as string[]
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]
    updateFilter(key, updated as FilterState[typeof key])
  }

  const toggleBooleanFilter = (key: keyof FilterState) => {
    const current = filters[key] as boolean | null
    const next = current === null ? true : current === true ? false : null
    updateFilter(key, next as FilterState[typeof key])
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[var(--background)] shadow-2xl overflow-hidden flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <div>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Filters</h2>
            <p className="text-sm text-[var(--foreground-muted)]">Refine your search</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--background-secondary)] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {/* Muslim-Specific Filters */}
          <FilterSection
            title="Muslim Features"
            icon="🕌"
            isExpanded={expandedSections.includes('muslim')}
            onToggle={() => toggleSection('muslim')}
          >
            {/* Halal Score Range */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-[var(--foreground)]">
                Halal Score: {filters.halalScore[0]} - {filters.halalScore[1]}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.halalScore[0]}
                  onChange={(e) => updateFilter('halalScore', [parseInt(e.target.value), filters.halalScore[1]])}
                  className="flex-1 accent-[var(--primary)]"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.halalScore[1]}
                  onChange={(e) => updateFilter('halalScore', [filters.halalScore[0], parseInt(e.target.value)])}
                  className="flex-1 accent-[var(--primary)]"
                />
              </div>
            </div>

            {/* Mosque Density */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Mosque Availability</label>
              <div className="flex flex-wrap gap-2">
                {['Many (100+)', 'Some (50+)', 'Few (10+)', 'Any'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.mosqueDensity.includes(option)}
                    onClick={() => toggleArrayFilter('mosqueDensity', option)}
                  />
                ))}
              </div>
            </div>

            {/* Muslim Population */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Muslim Population</label>
              <div className="flex flex-wrap gap-2">
                {['Majority (50%+)', 'Significant (20%+)', 'Minority (5%+)', 'Any'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.muslimPopulation.includes(option)}
                    onClick={() => toggleArrayFilter('muslimPopulation', option)}
                  />
                ))}
              </div>
            </div>

            {/* Boolean Filters */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Facilities</label>
              <div className="space-y-2">
                <BooleanFilter
                  label="Airport Prayer Room"
                  value={filters.airportPrayerRoom}
                  onChange={() => toggleBooleanFilter('airportPrayerRoom')}
                />
                <BooleanFilter
                  label="Islamic Banks"
                  value={filters.islamicBanks}
                  onChange={() => toggleBooleanFilter('islamicBanks')}
                />
                <BooleanFilter
                  label="Halal Hotels Available"
                  value={filters.halalHotels}
                  onChange={() => toggleBooleanFilter('halalHotels')}
                />
              </div>
            </div>
          </FilterSection>

          {/* Budget Filter */}
          <FilterSection
            title="Budget"
            icon="💰"
            isExpanded={expandedSections.includes('budget')}
            onToggle={() => toggleSection('budget')}
          >
            <div className="space-y-3">
              <label className="text-sm font-medium text-[var(--foreground)]">
                Monthly Budget: ${filters.budget[0].toLocaleString()} - ${filters.budget[1].toLocaleString()}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.budget[0]}
                  onChange={(e) => updateFilter('budget', [parseInt(e.target.value), filters.budget[1]])}
                  className="flex-1 accent-[var(--primary)]"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.budget[1]}
                  onChange={(e) => updateFilter('budget', [filters.budget[0], parseInt(e.target.value)])}
                  className="flex-1 accent-[var(--primary)]"
                />
              </div>
            </div>
          </FilterSection>

          {/* General Filters */}
          <FilterSection
            title="General"
            icon="⚙️"
            isExpanded={expandedSections.includes('general')}
            onToggle={() => toggleSection('general')}
          >
            {/* Safety */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Safety Level</label>
              <div className="flex flex-wrap gap-2">
                {['Very Safe (90+)', 'Safe (70+)', 'Moderate (50+)', 'Any'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.safety.includes(option)}
                    onClick={() => toggleArrayFilter('safety', option)}
                  />
                ))}
              </div>
            </div>

            {/* Internet */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Internet Speed</label>
              <div className="flex flex-wrap gap-2">
                {['Fast (50+ Mbps)', 'Good (25+ Mbps)', 'Basic (10+ Mbps)', 'Any'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.internet.includes(option)}
                    onClick={() => toggleArrayFilter('internet', option)}
                  />
                ))}
              </div>
            </div>

            {/* Continent */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Region</label>
              <div className="flex flex-wrap gap-2">
                {['Middle East', 'Southeast Asia', 'Europe', 'North America', 'Africa', 'South Asia'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.continent.includes(option)}
                    onClick={() => toggleArrayFilter('continent', option)}
                  />
                ))}
              </div>
            </div>

            {/* Weather */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Climate</label>
              <div className="flex flex-wrap gap-2">
                {['Hot (30°C+)', 'Warm (20-30°C)', 'Mild (10-20°C)', 'Cold (<10°C)'].map((option) => (
                  <FilterChip
                    key={option}
                    label={option}
                    isActive={filters.weather.includes(option)}
                    onClick={() => toggleArrayFilter('weather', option)}
                  />
                ))}
              </div>
            </div>
          </FilterSection>

          {/* Lifestyle Filters */}
          <FilterSection
            title="Lifestyle"
            icon="🌟"
            isExpanded={expandedSections.includes('lifestyle')}
            onToggle={() => toggleSection('lifestyle')}
          >
            <div className="space-y-2">
              <BooleanFilter
                label="Family Friendly"
                value={filters.familyFriendly}
                onChange={() => toggleBooleanFilter('familyFriendly')}
              />
              <BooleanFilter
                label="Women Friendly"
                value={filters.womenFriendly}
                onChange={() => toggleBooleanFilter('womenFriendly')}
              />
              <BooleanFilter
                label="Outdoor Activities"
                value={filters.outdoorActivities}
                onChange={() => toggleBooleanFilter('outdoorActivities')}
              />
            </div>
          </FilterSection>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--background)]">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="flex-1 flex items-center gap-2"
              onClick={onReset}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
              onClick={() => {
                onApply()
                onClose()
              }}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

// Helper Components

function FilterSection({
  title,
  icon,
  isExpanded,
  onToggle,
  children
}: {
  title: string
  icon: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="font-medium text-[var(--foreground)]">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-[var(--foreground-muted)]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[var(--foreground-muted)]" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 space-y-4 bg-[var(--background)]">
          {children}
        </div>
      )}
    </div>
  )
}

function FilterChip({
  label,
  isActive,
  onClick
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
        isActive
          ? 'bg-[var(--primary)] border-[var(--primary)] text-white'
          : 'bg-[var(--background)] border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
      }`}
    >
      {label}
    </button>
  )
}

function BooleanFilter({
  label,
  value,
  onChange
}: {
  label: string
  value: boolean | null
  onChange: () => void
}) {
  return (
    <button
      onClick={onChange}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
    >
      <span className="text-sm text-[var(--foreground)]">{label}</span>
      <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
        value === true
          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
          : value === false
          ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
          : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)]'
      }`}>
        {value === true ? '✓' : value === false ? '✗' : '—'}
      </div>
    </button>
  )
}

export { defaultFilters }
export default FilterDrawer
