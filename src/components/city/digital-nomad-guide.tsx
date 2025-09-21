import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Coffee, Laptop, Globe, Shield, Heart, MapPin, Clock } from "lucide-react"

interface DigitalNomadGuideProps {
  cityName: string
  internetSpeed: number
}

export function DigitalNomadGuide({ cityName, internetSpeed }: DigitalNomadGuideProps) {
  const workspaces = [
    {
      name: "Istanbul Tech Hub",
      type: "Coworking Space",
      location: "Levent",
      price: "$150/month",
      features: ["High-speed WiFi", "24/7 Access", "Prayer Room", "Halal Cafe"],
      rating: 4.8
    },
    {
      name: "Kolektif House",
      type: "Coworking Space",
      location: "Şişhane",
      price: "$120/month",
      features: ["Meeting Rooms", "Event Space", "Kitchen", "Near Mosque"],
      rating: 4.6
    },
    {
      name: "Workinton",
      type: "Coworking Chain",
      location: "Multiple Locations",
      price: "$200/month",
      features: ["Premium Facilities", "Gym Access", "Parking", "Halal Options"],
      rating: 4.7
    }
  ]

  const cafes = [
    {
      name: "Hafiz Mustafa Digital",
      location: "Sultanahmet",
      wifi: "Excellent",
      noise: "Moderate",
      features: ["Halal", "Traditional Desserts", "Power Outlets"]
    },
    {
      name: "Kronotrop Coffee",
      location: "Cihangir",
      wifi: "Very Good",
      noise: "Quiet",
      features: ["Specialty Coffee", "Laptop Friendly", "No Alcohol"]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Digital Nomad Guide to {cityName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Wifi className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-xl font-semibold">{internetSpeed} Mbps</div>
            <div className="text-sm text-gray-600">Avg Speed</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Coffee className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-xl font-semibold">500+</div>
            <div className="text-sm text-gray-600">Work Cafes</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Laptop className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-xl font-semibold">25+</div>
            <div className="text-sm text-gray-600">Coworking</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Globe className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-xl font-semibold">GMT+3</div>
            <div className="text-sm text-gray-600">Time Zone</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <InfoRow icon={Shield} label="Safety for Remote Workers" value="Very Safe" color="text-green-600" />
          <InfoRow icon={Heart} label="Expat Community" value="Very Active" color="text-green-600" />
          <InfoRow icon={MapPin} label="Best Areas" value="Beşiktaş, Kadıköy, Şişli" />
          <InfoRow icon={Clock} label="Work-Life Balance" value="Excellent" color="text-green-600" />
        </div>
      </Card>

      {/* Coworking Spaces */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Laptop className="h-5 w-5 text-green-600" />
          Top Coworking Spaces
        </h3>
        <div className="space-y-4">
          {workspaces.map((space, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{space.name}</h4>
                  <p className="text-sm text-gray-600">{space.type} • {space.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{space.price}</p>
                  <p className="text-sm">⭐ {space.rating}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {space.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Work-Friendly Cafes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Coffee className="h-5 w-5 text-green-600" />
          Best Cafes for Working
        </h3>
        <div className="space-y-4">
          {cafes.map((cafe, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{cafe.name}</h4>
                  <p className="text-sm text-gray-600">{cafe.location}</p>
                </div>
                <div className="text-right text-sm">
                  <p>WiFi: <span className="font-semibold text-green-600">{cafe.wifi}</span></p>
                  <p>Noise: <span className="font-semibold">{cafe.noise}</span></p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {cafe.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Tips for Muslim Digital Nomads */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Tips for Muslim Digital Nomads</h3>
        <div className="space-y-3">
          <TipItem
            title="Prayer Times & Work"
            description="Many coworking spaces have prayer rooms. Apps like Muslim Pro help track prayer times."
          />
          <TipItem
            title="Halal Food Delivery"
            description="Use Yemeksepeti or Getir for halal food delivery. Filter by 'Helal' tag."
          />
          <TipItem
            title="Friday Prayers"
            description="Plan meetings around Jummah time (usually 12:30-2:00 PM). Most offices understand."
          />
          <TipItem
            title="Networking"
            description="Join Muslim Professionals Istanbul group on Facebook for networking events."
          />
          <TipItem
            title="Banking"
            description="Türkiye Finans, Kuveyt Türk offer Islamic banking with English support."
          />
        </div>
      </Card>

      {/* Resources */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Useful Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start">
            <Globe className="h-4 w-4 mr-2" />
            Istanbul Expat Groups
          </Button>
          <Button variant="outline" className="justify-start">
            <MapPin className="h-4 w-4 mr-2" />
            Neighborhood Guide
          </Button>
          <Button variant="outline" className="justify-start">
            <Shield className="h-4 w-4 mr-2" />
            Visa Information
          </Button>
          <Button variant="outline" className="justify-start">
            <Heart className="h-4 w-4 mr-2" />
            Muslim Community FB
          </Button>
        </div>
      </Card>
    </div>
  )
}

interface InfoRowProps {
  icon: React.ElementType
  label: string
  value: string
  color?: string
}

function InfoRow({ icon: Icon, label, value, color = "text-gray-900" }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-gray-400" />
        <span className="text-sm">{label}</span>
      </div>
      <span className={`text-sm font-medium ${color}`}>{value}</span>
    </div>
  )
}

function TipItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
        ✓
      </div>
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}