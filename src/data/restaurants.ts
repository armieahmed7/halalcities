import { Restaurant } from "@/types/city"

export const istanbulRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Sultanahmet Köftecisi",
    cuisine: "Turkish",
    neighborhood: "Sultanahmet",
    address: "Divanyolu Cad. No:12, Sultanahmet",
    rating: 4.8,
    reviews: 2347,
    priceLevel: 2,
    certifications: ["Halal Certified", "GIMDES"],
    features: ["No Alcohol", "Family Friendly", "Traditional"],
    images: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"]
  },
  {
    id: "2",
    name: "Hafiz Mustafa 1864",
    cuisine: "Desserts & Cafe",
    neighborhood: "Multiple Locations",
    address: "Various locations across Istanbul",
    rating: 4.9,
    reviews: 5123,
    priceLevel: 2,
    certifications: ["Halal Certified"],
    features: ["Turkish Tea", "Baklava", "Breakfast"],
    images: ["https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80"]
  },
  {
    id: "3",
    name: "Nusr-Et Steakhouse",
    cuisine: "Steakhouse",
    neighborhood: "Etiler",
    address: "Nispetiye Cad. No:87, Etiler",
    rating: 4.5,
    reviews: 3456,
    priceLevel: 4,
    certifications: ["Halal", "Premium Meat"],
    features: ["No Alcohol", "Celebrity Chef", "Upscale"],
    images: ["https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80"]
  },
  {
    id: "4",
    name: "Pandeli",
    cuisine: "Ottoman Cuisine",
    neighborhood: "Eminönü",
    address: "Mısır Çarşısı No:1, Eminönü",
    rating: 4.7,
    reviews: 1890,
    priceLevel: 3,
    certifications: ["Halal"],
    features: ["Historic", "No Alcohol", "Traditional Ottoman"],
    images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"]
  },
  {
    id: "5",
    name: "Karaköy Lokantası",
    cuisine: "Turkish",
    neighborhood: "Karaköy",
    address: "Kemankeş Cad. No:37, Karaköy",
    rating: 4.6,
    reviews: 2145,
    priceLevel: 3,
    certifications: ["Muslim Owned"],
    features: ["No Alcohol", "Modern Turkish", "Business Lunch"],
    images: ["https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80"]
  }
]

export const dubaiRestaurants: Restaurant[] = [
  {
    id: "6",
    name: "Al Fanar Restaurant",
    cuisine: "Emirati",
    neighborhood: "Dubai Festival City",
    address: "Dubai Festival City Mall",
    rating: 4.7,
    reviews: 3210,
    priceLevel: 2,
    certifications: ["Halal Certified", "ESMA"],
    features: ["Traditional Emirati", "No Alcohol", "Cultural Experience"],
    images: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"]
  },
  {
    id: "7",
    name: "Ravi Restaurant",
    cuisine: "Pakistani",
    neighborhood: "Satwa",
    address: "Al Satwa Road, Satwa",
    rating: 4.5,
    reviews: 8945,
    priceLevel: 1,
    certifications: ["Halal"],
    features: ["Budget Friendly", "Authentic", "24/7"],
    images: ["https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"]
  }
]

export const restaurantsByCity: Record<string, Restaurant[]> = {
  istanbul: istanbulRestaurants,
  dubai: dubaiRestaurants,
  "kuala-lumpur": [],
  london: [],
  toronto: [],
  cairo: []
}