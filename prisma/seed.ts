import { PrismaClient } from '@prisma/client'
import { cities } from '../src/data/cities'
import { restaurantsByCity } from '../src/data/restaurants'
import { mosquesByCity } from '../src/data/mosques'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Seed cities
  for (const city of cities) {
    const createdCity = await prisma.city.create({
      data: {
        slug: city.slug,
        name: city.name,
        country: city.country,
        primaryImage: city.primaryImage,
        lat: city.coordinates.lat,
        lng: city.coordinates.lng,
        halalScore: city.scores.halal,
        muslimPopulationPercent: city.scores.muslimPopulationPercent,
        foodScore: city.scores.food,
        communityScore: city.scores.community,
        costScore: city.scores.cost,
        internetScore: city.scores.internet,
        safetyScore: city.scores.safety,
        overallScore: city.scores.overall,
        muslimPopulation: city.stats.muslimPopulation,
        mosquesCount: city.stats.mosques,
        halalRestaurants: city.stats.halalRestaurants,
        monthlyBudget: city.stats.monthlyBudget,
        internetSpeed: city.stats.internetSpeed,
        airportPrayerRoom: city.features.airportPrayerRoom,
        halalHotels: city.features.halalHotels,
        islamicBanks: city.features.islamicBanks,
        islamicSchools: city.features.islamicSchools,
      },
    })

    console.log(`✅ Created city: ${city.name}`)

    // Seed restaurants for this city
    const restaurants = restaurantsByCity[city.slug] || []
    for (const restaurant of restaurants) {
      await prisma.restaurant.create({
        data: {
          name: restaurant.name,
          cuisine: restaurant.cuisine,
          neighborhood: restaurant.neighborhood,
          address: restaurant.address,
          rating: restaurant.rating,
          reviewCount: restaurant.reviews,
          priceLevel: restaurant.priceLevel,
          certifications: restaurant.certifications,
          features: restaurant.features,
          images: restaurant.images,
          cityId: createdCity.id,
        },
      })
    }
    console.log(`  📍 Added ${restaurants.length} restaurants`)

    // Seed mosques for this city
    const mosques = mosquesByCity[city.slug] || []
    for (const mosque of mosques) {
      await prisma.mosque.create({
        data: {
          name: mosque.name,
          address: mosque.address,
          lat: mosque.coordinates.lat,
          lng: mosque.coordinates.lng,
          capacity: mosque.capacity,
          womensSection: mosque.features.womensSection,
          parking: mosque.features.parking,
          wheelchairAccess: mosque.features.wheelchairAccess,
          ablutionFacilities: mosque.features.ablutionFacilities,
          classes: mosque.features.classes,
          languages: mosque.languages,
          jummahTime: mosque.jummahTime,
          cityId: createdCity.id,
        },
      })
    }
    console.log(`  🕌 Added ${mosques.length} mosques`)
  }

  console.log('✨ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })