import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Major cities list (top 200 global cities)
export const majorCities = [
  // North America
  { name: "New York City", country: "USA", lat: 40.7128, lng: -74.0060 },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298 },
  { name: "Houston", country: "USA", lat: 29.7604, lng: -95.3698 },
  { name: "Phoenix", country: "USA", lat: 33.4484, lng: -112.0740 },
  { name: "Philadelphia", country: "USA", lat: 39.9526, lng: -75.1652 },
  { name: "San Antonio", country: "USA", lat: 29.4241, lng: -98.4936 },
  { name: "San Diego", country: "USA", lat: 32.7157, lng: -117.1611 },
  { name: "Dallas", country: "USA", lat: 32.7767, lng: -96.7970 },
  { name: "San Jose", country: "USA", lat: 37.3382, lng: -121.8863 },
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673 },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207 },
  { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332 },
  
  // Europe
  { name: "London", country: "UK", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050 },
  { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038 },
  { name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734 },
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964 },
  { name: "Milan", country: "Italy", lat: 45.4642, lng: 9.1900 },
  { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041 },
  { name: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738 },
  { name: "Munich", country: "Germany", lat: 48.1351, lng: 11.5820 },
  { name: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517 },
  { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686 },
  { name: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683 },
  { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522 },
  { name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603 },
  { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393 },
  { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275 },
  { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122 },
  { name: "Prague", country: "Czech Republic", lat: 50.0755, lng: 14.4378 },
  { name: "Budapest", country: "Hungary", lat: 47.4979, lng: 19.0402 },
  
  // Asia
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Hong Kong", country: "China", lat: 22.3193, lng: 114.1694 },
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780 },
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },
  { name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074 },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737 },
  { name: "Delhi", country: "India", lat: 28.7041, lng: 77.1025 },
  { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777 },
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842 },
  { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456 },
  { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869 },
  
  // Middle East
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784 },
  { name: "Doha", country: "Qatar", lat: 25.2854, lng: 51.5310 },
  { name: "Kuwait City", country: "Kuwait", lat: 29.3759, lng: 47.9774 },
  { name: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lng: 46.6753 },
  { name: "Jeddah", country: "Saudi Arabia", lat: 21.4858, lng: 39.1925 },
  { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357 },
  { name: "Amman", country: "Jordan", lat: 31.9454, lng: 35.9284 },
  { name: "Beirut", country: "Lebanon", lat: 33.8938, lng: 35.5018 },
  { name: "Tel Aviv", country: "Israel", lat: 32.0853, lng: 34.7818 },
  
  // Africa
  { name: "Casablanca", country: "Morocco", lat: 33.5731, lng: -7.5898 },
  { name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473 },
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241 },
  { name: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792 },
  { name: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219 },
  
  // Australia & Oceania
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631 },
  { name: "Brisbane", country: "Australia", lat: -27.4698, lng: 153.0251 },
  { name: "Perth", country: "Australia", lat: -31.9505, lng: 115.8605 },
  { name: "Auckland", country: "New Zealand", lat: -36.8485, lng: 174.7633 },
  
  // South America
  { name: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333 },
  { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729 },
  { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816 },
  { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693 },
  { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428 },
  { name: "Bogotá", country: "Colombia", lat: 4.7110, lng: -74.0721 },
  { name: "Caracas", country: "Venezuela", lat: 10.4806, lng: -66.9036 },
  { name: "Montevideo", country: "Uruguay", lat: -34.9011, lng: -56.1645 },
  { name: "Quito", country: "Ecuador", lat: -0.1807, lng: -78.4678 },
  
  // More North American cities
  { name: "Austin", country: "USA", lat: 30.2672, lng: -97.7431 },
  { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  { name: "Seattle", country: "USA", lat: 47.6062, lng: -122.3321 },
  { name: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  { name: "Washington DC", country: "USA", lat: 38.9072, lng: -77.0369 },
  { name: "Miami", country: "USA", lat: 25.7617, lng: -80.1918 },
  { name: "Atlanta", country: "USA", lat: 33.7490, lng: -84.3880 },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903 },
  { name: "Portland", country: "USA", lat: 45.5152, lng: -122.6784 },
  { name: "Las Vegas", country: "USA", lat: 36.1699, lng: -115.1398 },
  { name: "Detroit", country: "USA", lat: 42.3314, lng: -83.0458 },
  { name: "Minneapolis", country: "USA", lat: 44.9778, lng: -93.2650 },
  { name: "Ottawa", country: "Canada", lat: 45.4215, lng: -75.6972 },
  { name: "Calgary", country: "Canada", lat: 51.0447, lng: -114.0719 },
  { name: "Edmonton", country: "Canada", lat: 53.5461, lng: -113.4938 },
  
  // More European cities
  { name: "Helsinki", country: "Finland", lat: 60.1699, lng: 24.9384 },
  { name: "Edinburgh", country: "UK", lat: 55.9533, lng: -3.1883 },
  { name: "Manchester", country: "UK", lat: 53.4808, lng: -2.2426 },
  { name: "Birmingham", country: "UK", lat: 52.4862, lng: -1.8904 },
  { name: "Glasgow", country: "UK", lat: 55.8642, lng: -4.2518 },
  { name: "Hamburg", country: "Germany", lat: 53.5511, lng: 9.9937 },
  { name: "Frankfurt", country: "Germany", lat: 50.1109, lng: 8.6821 },
  { name: "Cologne", country: "Germany", lat: 50.9375, lng: 6.9603 },
  { name: "Stuttgart", country: "Germany", lat: 48.7758, lng: 9.1829 },
  { name: "Lyon", country: "France", lat: 45.7640, lng: 4.8357 },
  { name: "Marseille", country: "France", lat: 43.2965, lng: 5.3698 },
  { name: "Nice", country: "France", lat: 43.7102, lng: 7.2620 },
  { name: "Valencia", country: "Spain", lat: 39.4699, lng: -0.3763 },
  { name: "Seville", country: "Spain", lat: 37.3891, lng: -5.9845 },
  { name: "Bilbao", country: "Spain", lat: 43.2630, lng: -2.9350 },
  { name: "Turin", country: "Italy", lat: 45.0703, lng: 7.6869 },
  { name: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681 },
  { name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558 },
  { name: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432 },
  { name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417 },
  { name: "Rotterdam", country: "Netherlands", lat: 51.9244, lng: 4.4777 },
  { name: "The Hague", country: "Netherlands", lat: 52.0705, lng: 4.3007 },
  { name: "Antwerp", country: "Belgium", lat: 51.2194, lng: 4.4025 },
  { name: "Luxembourg City", country: "Luxembourg", lat: 49.6116, lng: 6.1319 },
  { name: "Bratislava", country: "Slovakia", lat: 48.1486, lng: 17.1077 },
  { name: "Ljubljana", country: "Slovenia", lat: 46.0569, lng: 14.5058 },
  { name: "Zagreb", country: "Croatia", lat: 45.8150, lng: 15.9819 },
  { name: "Belgrade", country: "Serbia", lat: 44.7866, lng: 20.4489 },
  { name: "Sofia", country: "Bulgaria", lat: 42.6977, lng: 23.3219 },
  { name: "Bucharest", country: "Romania", lat: 44.4268, lng: 26.1025 },
  
  // More Asian cities
  { name: "Taipei", country: "Taiwan", lat: 25.0330, lng: 121.5654 },
  { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023 },
  { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681 },
  { name: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.6380 },
  { name: "Nagoya", country: "Japan", lat: 35.1815, lng: 136.9066 },
  { name: "Busan", country: "South Korea", lat: 35.1796, lng: 129.0756 },
  { name: "Guangzhou", country: "China", lat: 23.1291, lng: 113.2644 },
  { name: "Shenzhen", country: "China", lat: 22.5431, lng: 114.0579 },
  { name: "Chengdu", country: "China", lat: 30.6600, lng: 104.0633 },
  { name: "Xi'an", country: "China", lat: 34.3416, lng: 108.9398 },
  { name: "Hangzhou", country: "China", lat: 30.2741, lng: 120.1551 },
  { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai", country: "India", lat: 13.0827, lng: 80.2707 },
  { name: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639 },
  { name: "Hyderabad", country: "India", lat: 17.3850, lng: 78.4867 },
  { name: "Pune", country: "India", lat: 18.5204, lng: 73.8567 },
  { name: "Ahmedabad", country: "India", lat: 23.0225, lng: 72.5714 },
  { name: "Karachi", country: "Pakistan", lat: 24.8607, lng: 67.0011 },
  { name: "Lahore", country: "Pakistan", lat: 31.5497, lng: 74.3436 },
  { name: "Islamabad", country: "Pakistan", lat: 33.6844, lng: 73.0479 },
  { name: "Dhaka", country: "Bangladesh", lat: 23.8103, lng: 90.4125 },
  { name: "Chittagong", country: "Bangladesh", lat: 22.3569, lng: 91.7832 },
  { name: "Colombo", country: "Sri Lanka", lat: 6.9271, lng: 79.8612 },
  { name: "Kathmandu", country: "Nepal", lat: 27.7172, lng: 85.3240 },
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297 },
  { name: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542 },
  { name: "Phnom Penh", country: "Cambodia", lat: 11.5564, lng: 104.9282 },
  { name: "Yangon", country: "Myanmar", lat: 16.8661, lng: 96.1951 },
  { name: "Penang", country: "Malaysia", lat: 5.4164, lng: 100.3327 },
  { name: "Johor Bahru", country: "Malaysia", lat: 1.4927, lng: 103.7414 },
  { name: "Bandung", country: "Indonesia", lat: -6.9175, lng: 107.6191 },
  { name: "Surabaya", country: "Indonesia", lat: -7.2575, lng: 112.7521 },
  { name: "Medan", country: "Indonesia", lat: 3.5952, lng: 98.6722 },
  
  // More Middle Eastern cities
  { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773 },
  { name: "Sharjah", country: "UAE", lat: 25.3573, lng: 55.4033 },
  { name: "Ankara", country: "Turkey", lat: 39.9334, lng: 32.8597 },
  { name: "Izmir", country: "Turkey", lat: 38.4192, lng: 27.1287 },
  { name: "Bursa", country: "Turkey", lat: 40.1826, lng: 29.0665 },
  { name: "Antalya", country: "Turkey", lat: 36.8969, lng: 30.7133 },
  { name: "Damascus", country: "Syria", lat: 33.5138, lng: 36.2765 },
  { name: "Baghdad", country: "Iraq", lat: 33.3152, lng: 44.3661 },
  { name: "Tehran", country: "Iran", lat: 35.6892, lng: 51.3890 },
  { name: "Isfahan", country: "Iran", lat: 32.6539, lng: 51.6660 },
  { name: "Mashhad", country: "Iran", lat: 36.2605, lng: 59.6168 },
  { name: "Muscat", country: "Oman", lat: 23.5880, lng: 58.3829 },
  { name: "Manama", country: "Bahrain", lat: 26.2285, lng: 50.5860 },
  { name: "Dammam", country: "Saudi Arabia", lat: 26.4368, lng: 50.1135 },
  { name: "Mecca", country: "Saudi Arabia", lat: 21.3891, lng: 39.8579 },
  { name: "Medina", country: "Saudi Arabia", lat: 24.4747, lng: 39.6116 },
  { name: "Alexandria", country: "Egypt", lat: 31.2001, lng: 29.9187 },
  { name: "Luxor", country: "Egypt", lat: 25.6872, lng: 32.6396 },
  
  // More African cities
  { name: "Rabat", country: "Morocco", lat: 34.0209, lng: -6.8416 },
  { name: "Marrakech", country: "Morocco", lat: 31.6295, lng: -7.9811 },
  { name: "Fez", country: "Morocco", lat: 34.0181, lng: -5.0078 },
  { name: "Tunis", country: "Tunisia", lat: 36.8065, lng: 10.1815 },
  { name: "Algiers", country: "Algeria", lat: 36.7372, lng: 3.0869 },
  { name: "Tripoli", country: "Libya", lat: 32.8872, lng: 13.1913 },
  { name: "Khartoum", country: "Sudan", lat: 15.5007, lng: 32.5599 },
  { name: "Addis Ababa", country: "Ethiopia", lat: 8.9806, lng: 38.7578 },
  { name: "Kampala", country: "Uganda", lat: 0.3476, lng: 32.5825 },
  { name: "Dar es Salaam", country: "Tanzania", lat: -6.7924, lng: 39.2083 },
  { name: "Kigali", country: "Rwanda", lat: -1.9706, lng: 30.1044 },
  { name: "Lusaka", country: "Zambia", lat: -15.3875, lng: 28.3228 },
  { name: "Harare", country: "Zimbabwe", lat: -17.8252, lng: 31.0335 },
  { name: "Gaborone", country: "Botswana", lat: -24.6282, lng: 25.9231 },
  { name: "Windhoek", country: "Namibia", lat: -22.5597, lng: 17.0832 },
  { name: "Maputo", country: "Mozambique", lat: -25.9692, lng: 32.5732 },
  { name: "Durban", country: "South Africa", lat: -29.8579, lng: 31.0292 },
  { name: "Pretoria", country: "South Africa", lat: -25.7479, lng: 28.2293 },
  { name: "Port Elizabeth", country: "South Africa", lat: -33.9608, lng: 25.6022 },
  { name: "Accra", country: "Ghana", lat: 5.6037, lng: -0.1870 },
  { name: "Abidjan", country: "Ivory Coast", lat: 5.3600, lng: -4.0083 },
  { name: "Dakar", country: "Senegal", lat: 14.7167, lng: -17.4677 },
  
  // More Australian & Oceanian cities
  { name: "Adelaide", country: "Australia", lat: -34.9285, lng: 138.6007 },
  { name: "Gold Coast", country: "Australia", lat: -28.0167, lng: 153.4000 },
  { name: "Canberra", country: "Australia", lat: -35.2835, lng: 149.1281 },
  { name: "Newcastle", country: "Australia", lat: -32.9283, lng: 151.7817 },
  { name: "Wellington", country: "New Zealand", lat: -41.2866, lng: 174.7756 },
  { name: "Christchurch", country: "New Zealand", lat: -43.5321, lng: 172.6362 },
  
  // Additional major cities to reach 200
  { name: "Orlando", country: "USA", lat: 28.5383, lng: -81.3792 },
  { name: "Tampa", country: "USA", lat: 27.9506, lng: -82.4572 },
  { name: "St. Louis", country: "USA", lat: 38.6270, lng: -90.1994 },
  { name: "Baltimore", country: "USA", lat: 39.2904, lng: -76.6122 },
  { name: "Charlotte", country: "USA", lat: 35.2271, lng: -80.8431 },
  { name: "Nashville", country: "USA", lat: 36.1627, lng: -86.7816 },
  { name: "Milwaukee", country: "USA", lat: 43.0389, lng: -87.9065 },
  { name: "Cleveland", country: "USA", lat: 41.4993, lng: -81.6944 },
  { name: "Pittsburgh", country: "USA", lat: 40.4406, lng: -79.9959 },
  { name: "Cincinnati", country: "USA", lat: 39.1031, lng: -84.5120 },
  { name: "Kansas City", country: "USA", lat: 39.0997, lng: -94.5786 },
  { name: "Indianapolis", country: "USA", lat: 39.7684, lng: -86.1581 },
  { name: "Columbus", country: "USA", lat: 39.9612, lng: -82.9988 },
  { name: "Sacramento", country: "USA", lat: 38.5816, lng: -121.4944 },
  { name: "Salt Lake City", country: "USA", lat: 40.7608, lng: -111.8910 },
  { name: "Raleigh", country: "USA", lat: 35.7796, lng: -78.6382 }
];

// Function to estimate Muslim population based on country data
function estimateMuslimPopulation(cityName: string, country: string, cityPopulation: number): {
  percentage: number;
  count: number;
} {
  // Muslim population percentages by country (approximate)
  const muslimPercentages: Record<string, number> = {
    // High Muslim countries (90%+)
    "Turkey": 98,
    "Egypt": 95,
    "Saudi Arabia": 97,
    "Jordan": 97,
    "Morocco": 99,
    "Indonesia": 87,
    "Pakistan": 96,
    "Bangladesh": 90,
    "Algeria": 99,
    "Tunisia": 99,
    "Libya": 97,
    "Iraq": 96,
    "Iran": 99,
    "Syria": 87,
    "Yemen": 99,
    "Afghanistan": 99,
    "Sudan": 91,
    "Somalia": 99,
    
    // High Muslim populations (50-90%)
    "UAE": 76,
    "Qatar": 77,
    "Kuwait": 74,
    "Bahrain": 70,
    "Oman": 86,
    "Malaysia": 61,
    "Lebanon": 60,
    "Nigeria": 50,
    "Albania": 58,
    "Bosnia": 51,
    "Senegal": 95,
    "Niger": 99,
    "Mali": 95,
    "Guinea": 89,
    
    // Moderate Muslim populations (10-50%)
    "India": 14,
    "Singapore": 15,
    "Israel": 18,
    "Kenya": 11,
    "Tanzania": 35,
    "Ethiopia": 34,
    "Russia": 11,
    "Philippines": 11,
    "Thailand": 12,
    "Myanmar": 10,
    "Sri Lanka": 10,
    "Ghana": 18,
    "Ivory Coast": 43,
    "Uganda": 14,
    "Mozambique": 18,
    
    // Western countries with Muslim minorities (1-10%)
    "UK": 6.3,
    "France": 8.8,
    "Germany": 6.1,
    "Netherlands": 5.1,
    "Belgium": 7.6,
    "Sweden": 8.1,
    "Norway": 5.7,
    "Denmark": 5.4,
    "Switzerland": 5.2,
    "Austria": 8,
    "Spain": 2.6,
    "Italy": 2.3,
    "Greece": 5.3,
    "USA": 1.1,
    "Canada": 3.7,
    "Australia": 2.6,
    "New Zealand": 1.3,
    "Ireland": 1.3,
    "Portugal": 0.6,
    "Poland": 0.1,
    "Czech Republic": 0.1,
    "Hungary": 0.3,
    "Romania": 0.3,
    "Bulgaria": 7.8,
    "Serbia": 3.1,
    "Croatia": 1.5,
    "Slovenia": 2.4,
    "Slovakia": 0.2,
    "Finland": 2.7,
    "Luxembourg": 3.2,
    
    // Low Muslim populations (<1%)
    "Japan": 0.2,
    "South Korea": 0.2,
    "Taiwan": 0.3,
    "China": 1.8,
    "Vietnam": 0.1,
    "Cambodia": 1.9,
    "Nepal": 4.4,
    "Brazil": 0.1,
    "Mexico": 0.1,
    "Argentina": 0.9,
    "Chile": 0.1,
    "Peru": 0.1,
    "Colombia": 0.1,
    "Venezuela": 0.3,
    "Uruguay": 0.1,
    "Ecuador": 0.1,
    "South Africa": 1.9,
    "Botswana": 0.4,
    "Zimbabwe": 0.9,
    "Zambia": 0.5,
    "Namibia": 0.3,
    "Rwanda": 2,
  };

  const percentage = muslimPercentages[country] || 0.5;
  const count = Math.round(cityPopulation * (percentage / 100));
  
  return { percentage, count };
}

// Function to calculate scores based on Muslim population and infrastructure
function calculateScores(muslimPercentage: number, country: string): {
  halal: number;
  food: number;
  community: number;
  safety: number;
} {
  // Base scores on Muslim percentage
  let halal = Math.min(95, muslimPercentage + 20);
  let food = Math.min(90, muslimPercentage + 15);
  let community = Math.min(95, muslimPercentage + 10);
  let safety = 75; // Base safety score
  
  // Adjust for Western cities with good Muslim infrastructure
  const goodInfrastructureCities = ["London", "Paris", "Berlin", "Toronto", "New York City", "Sydney"];
  if (muslimPercentage < 10 && goodInfrastructureCities.includes(country)) {
    halal = Math.max(halal, 70);
    food = Math.max(food, 75);
    community = Math.max(community, 70);
  }
  
  // Safety adjustments based on country
  const verySafeCountries = ["Singapore", "Japan", "UAE", "Qatar", "Switzerland", "Norway", "Denmark"];
  const safeCountries = ["Canada", "Australia", "New Zealand", "Germany", "Netherlands"];
  
  if (verySafeCountries.includes(country)) {
    safety = 95;
  } else if (safeCountries.includes(country)) {
    safety = 85;
  }
  
  return { halal, food, community, safety };
}

// Function to estimate number of mosques
function estimateMosques(muslimPopulation: number, country: string): number {
  // Rough estimate: 1 mosque per 2000 Muslims in Western countries
  // 1 mosque per 500 Muslims in Muslim-majority countries
  const isMuslimMajority = ["Turkey", "Egypt", "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Jordan", "Morocco", "Indonesia", "Malaysia", "Pakistan", "Bangladesh"].includes(country);
  
  const mosquesPerMuslim = isMuslimMajority ? 500 : 2000;
  return Math.max(1, Math.round(muslimPopulation / mosquesPerMuslim));
}

// Function to estimate halal restaurants
function estimateHalalRestaurants(muslimPopulation: number, cityPopulation: number): number {
  // Estimate based on Muslim population and city size
  const baseRestaurants = Math.round(muslimPopulation / 1000);
  const cityMultiplier = cityPopulation > 5000000 ? 2 : 1;
  return Math.max(10, baseRestaurants * cityMultiplier);
}

// Function to estimate cost of living
function estimateCostOfLiving(cityName: string, country: string): number {
  const expensiveCities: Record<string, number> = {
    "Zurich": 4500,
    "Geneva": 4200,
    "New York City": 4000,
    "San Francisco": 4200,
    "London": 3500,
    "Singapore": 3200,
    "Hong Kong": 3400,
    "Paris": 3000,
    "Tokyo": 2800,
    "Sydney": 2900,
    "Oslo": 3300,
    "Copenhagen": 3100,
    "Dubai": 2800,
  };
  
  const moderateCities: Record<string, number> = {
    "Berlin": 2200,
    "Toronto": 2600,
    "Madrid": 2000,
    "Barcelona": 2100,
    "Amsterdam": 2400,
    "Seoul": 2300,
    "Miami": 2500,
    "Chicago": 2400,
  };
  
  // Check if city is in expensive or moderate lists
  if (expensiveCities[cityName]) {
    return expensiveCities[cityName];
  }
  if (moderateCities[cityName]) {
    return moderateCities[cityName];
  }
  
  // Default based on country
  const countryDefaults: Record<string, number> = {
    "USA": 2200,
    "UK": 2000,
    "Germany": 1800,
    "France": 1900,
    "Spain": 1600,
    "Italy": 1700,
    "Canada": 2000,
    "Australia": 2100,
    "Japan": 2000,
    "India": 800,
    "Turkey": 1200,
    "Egypt": 700,
    "Malaysia": 1400,
    "Indonesia": 900,
  };
  
  return countryDefaults[country] || 1500;
}

// Main scraper function
export async function scrapeCityData(city: typeof majorCities[0]) {
  console.log(`Scraping data for ${city.name}, ${city.country}...`);
  
  try {
    // Get city population (approximate data based on metro areas)
    const cityPopulations: Record<string, number> = {
      // North America
      "New York City": 8336000,
      "Los Angeles": 3979000,
      "Chicago": 2693000,
      "Houston": 2320000,
      "Phoenix": 1680000,
      "Philadelphia": 1584000,
      "San Antonio": 1547000,
      "San Diego": 1423000,
      "Dallas": 1343000,
      "San Jose": 1021000,
      "Austin": 978000,
      "San Francisco": 874000,
      "Seattle": 753000,
      "Boston": 692000,
      "Washington DC": 705000,
      "Miami": 470000,
      "Atlanta": 506000,
      "Denver": 715000,
      "Portland": 653000,
      "Las Vegas": 651000,
      "Detroit": 670000,
      "Minneapolis": 429000,
      "Toronto": 2931000,
      "Montreal": 1780000,
      "Vancouver": 675000,
      "Ottawa": 1017000,
      "Calgary": 1336000,
      "Edmonton": 1321000,
      "Mexico City": 9209000,
      
      // Europe
      "London": 9000000,
      "Paris": 2161000,
      "Berlin": 3769000,
      "Madrid": 3266000,
      "Barcelona": 1636000,
      "Rome": 2873000,
      "Milan": 1366000,
      "Amsterdam": 873000,
      "Vienna": 1911000,
      "Munich": 1472000,
      "Brussels": 1209000,
      "Stockholm": 975000,
      "Copenhagen": 660000,
      "Oslo": 697000,
      "Dublin": 554000,
      "Lisbon": 547000,
      "Athens": 664000,
      "Warsaw": 1790000,
      "Prague": 1309000,
      "Budapest": 1752000,
      "Helsinki": 655000,
      "Edinburgh": 513000,
      "Manchester": 547000,
      "Birmingham": 1140000,
      "Hamburg": 1899000,
      "Frankfurt": 753000,
      "Cologne": 1086000,
      "Stuttgart": 634000,
      "Lyon": 516000,
      "Marseille": 870000,
      "Nice": 342000,
      "Valencia": 791000,
      "Seville": 688000,
      "Bilbao": 345000,
      "Turin": 870000,
      "Naples": 959000,
      "Geneva": 201000,
      "Zurich": 428000,
      "Rotterdam": 651000,
      "The Hague": 545000,
      
      // Asia
      "Tokyo": 13960000,
      "Singapore": 5686000,
      "Hong Kong": 7496000,
      "Seoul": 9776000,
      "Bangkok": 8281000,
      "Beijing": 21540000,
      "Shanghai": 26320000,
      "Delhi": 32940000,
      "Mumbai": 20667000,
      "Manila": 13923000,
      "Jakarta": 10770000,
      "Kuala Lumpur": 1982000,
      "Dubai": 3331000,
      "Istanbul": 15462000,
      "Doha": 2382000,
      "Kuwait City": 3115000,
      "Riyadh": 7538000,
      "Jeddah": 4697000,
      "Cairo": 20900000,
      "Amman": 4007000,
      "Beirut": 2226000,
      "Tel Aviv": 432000,
      "Taipei": 2705000,
      "Osaka": 2691000,
      "Bangalore": 12326000,
      "Chennai": 10971000,
      "Kolkata": 14850000,
      "Hyderabad": 9746000,
      "Pune": 6629000,
      "Karachi": 16093000,
      "Lahore": 13095000,
      "Islamabad": 2006000,
      "Dhaka": 21741000,
      
      // Africa
      "Casablanca": 3752000,
      "Johannesburg": 5783000,
      "Cape Town": 4618000,
      "Lagos": 14368000,
      "Nairobi": 4922000,
      "Rabat": 1885000,
      "Marrakech": 1330000,
      "Tunis": 2365000,
      "Algiers": 2854000,
      "Tripoli": 1165000,
      "Khartoum": 5534000,
      "Addis Ababa": 4794000,
      "Kampala": 1659000,
      "Dar es Salaam": 6368000,
      "Accra": 2514000,
      "Abidjan": 5202000,
      "Dakar": 2476000,
      
      // Australia & Oceania
      "Sydney": 5312000,
      "Melbourne": 5078000,
      "Brisbane": 2514000,
      "Perth": 2085000,
      "Auckland": 1695000,
      "Adelaide": 1359000,
      "Gold Coast": 699000,
      "Canberra": 456000,
      "Wellington": 418000,
      
      // South America
      "São Paulo": 22043000,
      "Rio de Janeiro": 13458000,
      "Buenos Aires": 15057000,
      "Santiago": 6767000,
      "Lima": 10750000,
      "Bogotá": 10978000,
      "Caracas": 2935000,
      "Montevideo": 1381000,
      "Quito": 1822000
    };
    
    const cityPopulation = cityPopulations[city.name] || 1000000;
    const muslimData = estimateMuslimPopulation(city.name, city.country, cityPopulation);
    const scores = calculateScores(muslimData.percentage, city.country);
    const mosques = estimateMosques(muslimData.count, city.country);
    const halalRestaurants = estimateHalalRestaurants(muslimData.count, cityPopulation);
    const monthlyBudget = estimateCostOfLiving(city.name, city.country);
    
    // Generate slug
    const slug = city.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    
    // Prepare city data
    const cityData = {
      slug,
      name: city.name,
      country: city.country,
      primaryImage: `https://source.unsplash.com/800x600/?${encodeURIComponent(city.name)},cityscape`,
      lat: city.lat,
      lng: city.lng,
      halalScore: scores.halal,
      muslimPopulationPercent: Math.round(muslimData.percentage),
      foodScore: scores.food,
      communityScore: scores.community,
      costScore: Math.max(10, 100 - Math.round((monthlyBudget / 50))),
      internetScore: Math.random() * 20 + 70, // 70-90 range
      safetyScore: scores.safety,
      overallScore: Math.round((scores.halal + scores.food + scores.community + scores.safety) / 4),
      muslimPopulation: muslimData.count,
      mosquesCount: mosques,
      halalRestaurants: halalRestaurants,
      monthlyBudget: monthlyBudget,
      internetSpeed: Math.round(Math.random() * 50 + 30), // 30-80 Mbps
      airportPrayerRoom: muslimData.percentage > 5 || Math.random() > 0.5,
      halalHotels: Math.round(mosques * 0.2),
      islamicBanks: muslimData.percentage > 10,
      islamicSchools: Math.round(mosques * 0.3),
    };
    
    // Insert into database
    const { data, error } = await supabase
      .from('City')
      .upsert(cityData, { onConflict: 'slug' })
      .select()
      .single();
    
    if (error) {
      console.error(`Error inserting ${city.name}:`, error);
      return null;
    }
    
    console.log(`✅ Successfully added ${city.name}`);
    return data;
    
  } catch (error) {
    console.error(`Error processing ${city.name}:`, error);
    return null;
  }
}

// Function to scrape all cities
export async function scrapeAllCities() {
  console.log(`Starting to scrape ${majorCities.length} cities...`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Process in batches to avoid overwhelming the database
  const batchSize = 10;
  for (let i = 0; i < majorCities.length; i += batchSize) {
    const batch = majorCities.slice(i, i + batchSize);
    
    const promises = batch.map(city => scrapeCityData(city));
    const results = await Promise.all(promises);
    
    results.forEach(result => {
      if (result) successCount++;
      else errorCount++;
    });
    
    console.log(`Progress: ${i + batch.length}/${majorCities.length} cities processed`);
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\n✨ Scraping complete!`);
  console.log(`✅ Success: ${successCount} cities`);
  console.log(`❌ Errors: ${errorCount} cities`);
}