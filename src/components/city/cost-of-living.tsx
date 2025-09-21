import { Card } from "@/components/ui/card"
import { Home, Utensils, Car, Wifi } from "lucide-react"

interface CostOfLivingProps {
  cityName: string
  monthlyBudget: number
}

export function CostOfLiving({ cityName, monthlyBudget }: CostOfLivingProps) {
  // Mock data - in production, this would come from the API
  const costs = {
    accommodation: {
      studio: Math.round(monthlyBudget * 0.4),
      oneBed: Math.round(monthlyBudget * 0.5),
      twoBed: Math.round(monthlyBudget * 0.7),
      shared: Math.round(monthlyBudget * 0.25)
    },
    food: {
      groceries: Math.round(monthlyBudget * 0.15),
      halalMeal: Math.round(monthlyBudget * 0.01),
      coffeeShop: Math.round(monthlyBudget * 0.003),
      familyDinner: Math.round(monthlyBudget * 0.03)
    },
    transport: {
      publicMonthly: Math.round(monthlyBudget * 0.05),
      taxi5km: Math.round(monthlyBudget * 0.005),
      fuel: Math.round(monthlyBudget * 0.001)
    },
    utilities: {
      basic: Math.round(monthlyBudget * 0.08),
      internet: Math.round(monthlyBudget * 0.02),
      mobile: Math.round(monthlyBudget * 0.015)
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <h2 className="text-2xl font-bold mb-4">Cost of Living in {cityName}</h2>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-green-600">${monthlyBudget}</span>
          <span className="text-gray-600">/ month</span>
        </div>
        <p className="text-sm text-gray-600">
          Average budget for a comfortable Muslim lifestyle including halal food and family expenses
        </p>
      </Card>

      {/* Accommodation */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Home className="h-5 w-5 text-green-600" />
          Accommodation
        </h3>
        <div className="space-y-3">
          <CostItem
            label="Studio apartment (city center)"
            cost={costs.accommodation.studio}
            description="Suitable for singles"
          />
          <CostItem
            label="1 bedroom apartment"
            cost={costs.accommodation.oneBed}
            description="Good for couples"
          />
          <CostItem
            label="2 bedroom apartment"
            cost={costs.accommodation.twoBed}
            description="Family-friendly"
          />
          <CostItem
            label="Shared accommodation"
            cost={costs.accommodation.shared}
            description="Budget option"
          />
        </div>
      </Card>

      {/* Food & Dining */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Utensils className="h-5 w-5 text-green-600" />
          Food & Dining (Halal)
        </h3>
        <div className="space-y-3">
          <CostItem
            label="Monthly groceries (family of 4)"
            cost={costs.food.groceries}
            description="Including halal meat"
          />
          <CostItem
            label="Halal restaurant meal"
            cost={costs.food.halalMeal}
            description="Mid-range restaurant"
          />
          <CostItem
            label="Coffee/tea at cafe"
            cost={costs.food.coffeeShop}
            description="Popular chains"
          />
          <CostItem
            label="Family dinner out"
            cost={costs.food.familyDinner}
            description="4 people, nice restaurant"
          />
        </div>
      </Card>

      {/* Transportation */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Car className="h-5 w-5 text-green-600" />
          Transportation
        </h3>
        <div className="space-y-3">
          <CostItem
            label="Public transport (monthly)"
            cost={costs.transport.publicMonthly}
            description="Unlimited pass"
          />
          <CostItem
            label="Taxi (5km trip)"
            cost={costs.transport.taxi5km}
            description="Standard rate"
          />
          <CostItem
            label="Petrol (per liter)"
            cost={costs.transport.fuel}
            description="Current prices"
          />
        </div>
      </Card>

      {/* Utilities */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Wifi className="h-5 w-5 text-green-600" />
          Utilities & Services
        </h3>
        <div className="space-y-3">
          <CostItem
            label="Basic utilities"
            cost={costs.utilities.basic}
            description="Electricity, water, heating"
          />
          <CostItem
            label="Internet (high-speed)"
            cost={costs.utilities.internet}
            description="Fiber connection"
          />
          <CostItem
            label="Mobile plan"
            cost={costs.utilities.mobile}
            description="With data"
          />
        </div>
      </Card>

      {/* Budget Breakdown */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Budget Breakdown</h3>
        <div className="space-y-3">
          <BudgetBar label="Accommodation" percentage={40} amount={monthlyBudget * 0.4} />
          <BudgetBar label="Food & Groceries" percentage={25} amount={monthlyBudget * 0.25} />
          <BudgetBar label="Transportation" percentage={10} amount={monthlyBudget * 0.1} />
          <BudgetBar label="Utilities" percentage={10} amount={monthlyBudget * 0.1} />
          <BudgetBar label="Other Expenses" percentage={15} amount={monthlyBudget * 0.15} />
        </div>
      </Card>
    </div>
  )
}

function CostItem({ label, cost, description }: { label: string; cost: number; description: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">${cost}</p>
      </div>
    </div>
  )
}

function BudgetBar({ label, percentage, amount }: { label: string; percentage: number; amount: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-gray-600">${Math.round(amount)}</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">{percentage}%</div>
    </div>
  )
}