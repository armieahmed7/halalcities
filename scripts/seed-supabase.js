const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with service role key for admin access
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const cities = [
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    primaryImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    lat: 41.0082,
    lng: 28.9784,
    halalScore: 95,
    muslimPopulationPercent: 98,
    foodScore: 92,
    communityScore: 95,
    costScore: 45,
    internetScore: 78,
    safetyScore: 82,
    overallScore: 91,
    muslimPopulation: 15000000,
    mosquesCount: 3500,
    halalRestaurants: 5000,
    monthlyBudget: 1245,
    internetSpeed: 45,
    airportPrayerRoom: true,
    halalHotels: 250,
    islamicBanks: true,
    islamicSchools: 85
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    primaryImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    lat: 25.2048,
    lng: 55.2708,
    halalScore: 98,
    muslimPopulationPercent: 85,
    foodScore: 95,
    communityScore: 88,
    costScore: 25,
    internetScore: 92,
    safetyScore: 95,
    overallScore: 93,
    muslimPopulation: 2800000,
    mosquesCount: 1200,
    halalRestaurants: 3500,
    monthlyBudget: 2890,
    internetSpeed: 95,
    airportPrayerRoom: true,
    halalHotels: 400,
    islamicBanks: true,
    islamicSchools: 45
  },
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    primaryImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    lat: 3.1390,
    lng: 101.6869,
    halalScore: 96,
    muslimPopulationPercent: 65,
    foodScore: 94,
    communityScore: 90,
    costScore: 55,
    internetScore: 85,
    safetyScore: 88,
    overallScore: 90,
    muslimPopulation: 1100000,
    mosquesCount: 850,
    halalRestaurants: 4000,
    monthlyBudget: 1450,
    internetSpeed: 75,
    airportPrayerRoom: true,
    halalHotels: 180,
    islamicBanks: true,
    islamicSchools: 35
  }
];

async function seedDatabase() {
  console.log('🌱 Starting database seed...');

  // Insert cities
  for (const city of cities) {
    const { data, error } = await supabase
      .from('City')
      .insert(city)
      .select()
      .single();

    if (error) {
      console.error('Error inserting city:', city.name, error);
    } else {
      console.log('✅ Inserted city:', city.name);
    }
  }

  console.log('✨ Database seeding complete!');
}

// Run the seed function
seedDatabase().catch(console.error);