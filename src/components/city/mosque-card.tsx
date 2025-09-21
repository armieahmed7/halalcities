import { Mosque } from "@/types/city"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MosqueCardProps {
  mosque: Mosque
}

export function MosqueCard({ mosque }: MosqueCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{mosque.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{mosque.address}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Jummah: {mosque.jummahTime}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>Capacity: {mosque.capacity.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {mosque.features.womensSection && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">✓</span>
              <span>Women&apos;s Section</span>
            </div>
          )}
          {mosque.features.parking && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">✓</span>
              <span>Parking</span>
            </div>
          )}
          {mosque.features.wheelchairAccess && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">✓</span>
              <span>Wheelchair Access</span>
            </div>
          )}
          {mosque.features.classes && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">✓</span>
              <span>Classes</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {mosque.languages.map(lang => (
              <span
                key={lang}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {lang}
              </span>
            ))}
          </div>
          
          <Button size="sm" variant="outline">
            Get Directions
          </Button>
        </div>
      </div>
    </Card>
  )
}