import { Mosque } from "@/types/city"

export const istanbulMosques: Mosque[] = [
  {
    id: "1",
    name: "Sultan Ahmed Mosque (Blue Mosque)",
    address: "Sultan Ahmet, Atmeydanı Cd. No:7, 34122 Fatih/İstanbul",
    coordinates: { lat: 41.0054, lng: 28.9768 },
    capacity: 10000,
    features: {
      womensSection: true,
      parking: false,
      wheelchairAccess: true,
      ablutionFacilities: true,
      classes: true
    },
    languages: ["Turkish", "Arabic", "English"],
    jummahTime: "13:00"
  },
  {
    id: "2",
    name: "Süleymaniye Mosque",
    address: "Süleymaniye Mah., Prof. Sıddık Sami Onar Cd. No:1, 34116 Fatih/İstanbul",
    coordinates: { lat: 41.0161, lng: 28.9641 },
    capacity: 5000,
    features: {
      womensSection: true,
      parking: true,
      wheelchairAccess: true,
      ablutionFacilities: true,
      classes: true
    },
    languages: ["Turkish", "Arabic"],
    jummahTime: "13:00"
  },
  {
    id: "3",
    name: "Fatih Mosque",
    address: "Ali Kuşçu, 34083 Fatih/İstanbul",
    coordinates: { lat: 41.0196, lng: 28.9499 },
    capacity: 5000,
    features: {
      womensSection: true,
      parking: true,
      wheelchairAccess: true,
      ablutionFacilities: true,
      classes: true
    },
    languages: ["Turkish", "Arabic", "Urdu"],
    jummahTime: "12:45"
  }
]

export const dubaiMosques: Mosque[] = [
  {
    id: "4",
    name: "Jumeirah Mosque",
    address: "Jumeirah Beach Rd, Jumeirah 1, Dubai",
    coordinates: { lat: 25.2335, lng: 55.2654 },
    capacity: 1500,
    features: {
      womensSection: true,
      parking: true,
      wheelchairAccess: true,
      ablutionFacilities: true,
      classes: true
    },
    languages: ["Arabic", "English"],
    jummahTime: "12:30"
  },
  {
    id: "5",
    name: "Grand Mosque Dubai",
    address: "Ali Bin Abi Talib St, Al Fahidi, Dubai",
    coordinates: { lat: 25.2631, lng: 55.2972 },
    capacity: 1200,
    features: {
      womensSection: true,
      parking: false,
      wheelchairAccess: true,
      ablutionFacilities: true,
      classes: false
    },
    languages: ["Arabic", "English", "Urdu"],
    jummahTime: "12:30"
  }
]

export const mosquesByCity: Record<string, Mosque[]> = {
  istanbul: istanbulMosques,
  dubai: dubaiMosques,
  "kuala-lumpur": [],
  london: [],
  toronto: [],
  cairo: []
}