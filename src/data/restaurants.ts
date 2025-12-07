export const restaurantsByCity: Record<string, Array<{
  id: string
  name: string
  cuisine: string
  neighborhood: string
  address: string
  rating: number
  reviews: number
  priceLevel: number
  certifications: string[]
  features: string[]
  images: string[]
}>> = {
  istanbul: [
    { id: "ist-1", name: "Sultanahmet Fish House", cuisine: "Seafood", neighborhood: "Sultanahmet", address: "123 Blue Mosque St", rating: 4.7, reviews: 1250, priceLevel: 3, certifications: ["Halal Certified"], features: ["Dine-in", "Sea View"], images: [] },
    { id: "ist-2", name: "Kebapci Iskender", cuisine: "Turkish", neighborhood: "Beyoglu", address: "45 Istiklal Ave", rating: 4.8, reviews: 2100, priceLevel: 2, certifications: ["Halal Certified"], features: ["Dine-in", "Takeaway"], images: [] },
  ],
  dubai: [
    { id: "dub-1", name: "Al Mahara", cuisine: "Fine Dining", neighborhood: "Burj Al Arab", address: "Burj Al Arab Hotel", rating: 4.9, reviews: 890, priceLevel: 4, certifications: ["Halal Certified"], features: ["Fine Dining", "Aquarium View"], images: [] },
    { id: "dub-2", name: "Ravi Restaurant", cuisine: "Pakistani", neighborhood: "Al Satwa", address: "Al Satwa Rd", rating: 4.5, reviews: 3200, priceLevel: 1, certifications: ["Halal Certified"], features: ["Dine-in", "Takeaway", "24 Hours"], images: [] },
  ],
  "kuala-lumpur": [
    { id: "kl-1", name: "Rebung Chef Ismail", cuisine: "Malaysian", neighborhood: "Bangsar", address: "Lorong Maarof", rating: 4.6, reviews: 1800, priceLevel: 3, certifications: ["JAKIM Halal"], features: ["Buffet", "Traditional"], images: [] },
  ],
  london: [
    { id: "lon-1", name: "Tayyabs", cuisine: "Pakistani", neighborhood: "Whitechapel", address: "83-89 Fieldgate St", rating: 4.4, reviews: 4500, priceLevel: 2, certifications: ["HMC Certified"], features: ["Dine-in", "BYO"], images: [] },
  ],
  cairo: [
    { id: "cai-1", name: "Abou El Sid", cuisine: "Egyptian", neighborhood: "Zamalek", address: "157 26th July St", rating: 4.5, reviews: 2300, priceLevel: 3, certifications: ["Halal"], features: ["Traditional", "Shisha"], images: [] },
  ]
}
