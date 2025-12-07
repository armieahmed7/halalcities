export const mosquesByCity: Record<string, Array<{
  name: string
  address: string
  coordinates: { lat: number; lng: number }
  capacity: number
  features: {
    womensSection: boolean
    parking: boolean
    wheelchairAccess: boolean
    ablutionFacilities: boolean
    classes: boolean
  }
  languages: string[]
  jummahTime: string
}>> = {
  istanbul: [
    { name: "Sultan Ahmed Mosque (Blue Mosque)", address: "Sultan Ahmet, Atmeydanı Cd. No:7", coordinates: { lat: 41.0054, lng: 28.9768 }, capacity: 10000, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Turkish", "Arabic", "English"], jummahTime: "13:15" },
    { name: "Suleymaniye Mosque", address: "Süleymaniye Mh., Prof. Sıddık Sami Onar Cd. No:1", coordinates: { lat: 41.0162, lng: 28.9639 }, capacity: 5000, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Turkish", "Arabic"], jummahTime: "13:15" },
  ],
  dubai: [
    { name: "Jumeirah Grand Mosque", address: "Jumeirah Beach Road", coordinates: { lat: 25.2334, lng: 55.2654 }, capacity: 1200, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Arabic", "English"], jummahTime: "12:30" },
  ],
  "kuala-lumpur": [
    { name: "Masjid Negara (National Mosque)", address: "Jalan Perdana", coordinates: { lat: 3.1418, lng: 101.6918 }, capacity: 15000, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Malay", "Arabic", "English"], jummahTime: "13:00" },
  ],
  london: [
    { name: "London Central Mosque", address: "146 Park Road, Regent's Park", coordinates: { lat: 51.5279, lng: -0.1556 }, capacity: 5000, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Arabic", "English", "Urdu"], jummahTime: "13:30" },
  ],
  cairo: [
    { name: "Al-Azhar Mosque", address: "El-Azhar St, El-Darb El-Ahmar", coordinates: { lat: 30.0459, lng: 31.2626 }, capacity: 20000, features: { womensSection: true, parking: true, wheelchairAccess: true, ablutionFacilities: true, classes: true }, languages: ["Arabic"], jummahTime: "12:15" },
  ]
}
