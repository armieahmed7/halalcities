// US Tier 2 Cities Muslim Community Research Data
// Research compiled December 2024

import { CityMuslimCommunityData } from '../muslim-community-data';

export const miamiData: CityMuslimCommunityData = {
  citySlug: 'miami',
  cityName: 'Miami',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 70000,
    percentage: 1.5,
    yearEstimate: 2024,
    source: 'Pew Research Center',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 35, countries: ['Lebanon', 'Palestine', 'Syria', 'Egypt'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Nigeria'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'Latin American converts'] },
  ],

  mosques: {
    totalCount: 40,
    majorMosques: [
      {
        name: 'Masjid Miami Gardens',
        address: '305 NW 183rd St, Miami Gardens, FL 33055',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Islamic education', 'Quran classes', 'Youth programs'],
      },
      {
        name: 'Greater Miami Islamic Center',
        address: '5100 NW 72nd Ave, Miami, FL 33166',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Educational services', 'Cultural programs'],
      },
      {
        name: 'Darul Uloom Institute',
        address: '3050 NW 36th St, Miami, FL 33142',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Islamic educational institution', 'Prayer spaces'],
      },
    ],
    jummahInfo: 'Multiple Jummah options across South Florida',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 55,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [
      { name: 'Juicy Gyros', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Miami', specialty: 'Gyros', halalCertified: true },
      { name: 'Takhesh Grill', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Miami', specialty: 'Grilled meats', halalCertified: true },
      { name: 'Aladdin Mediterranean Restaurant', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Miami', specialty: 'Mixed grill', halalCertified: true },
      { name: 'Saffron Grill', cuisine: 'South Asian', priceRange: '$$', neighborhood: 'Miami', specialty: 'Indian/Pakistani', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets in South Florida'],
    halalNeighborhoods: ['Downtown Miami', 'Miami Beach', 'Coral Gables', 'Little Havana'],
    bestCuisines: ['Mediterranean', 'Middle Eastern', 'South Asian', 'Caribbean'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Miami Gardens',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African American', 'Caribbean'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'Home to Masjid Miami Gardens, serving Muslims in north Miami',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Various Islamic schools', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['University of Miami', 'FIU', 'Miami Dade College'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MIA',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['South Beach hotels', 'Downtown Miami hotels'],
    touristMosques: ['Masjid Miami Gardens'],
  },

  communityResources: {
    islamicCenters: ['South Florida Muslim Federation', 'SoFlo Muslims'],
    advocacyOrgs: ['CAIR-Florida'],
    charities: ['Islamic Relief USA'],
    socialGroups: ['SoFlo Muslims community hub'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Florida Civil Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '5:15 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '12-14 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Third largest Muslim population in Florida',
    '40+ Islamic centers across South Florida',
    'SoFlo Muslims community hub connecting resources',
    'Diverse international Muslim community',
    'Community iftars during Ramadan at most mosques',
  ],

  visitorTips: [
    'South Florida has diverse halal options',
    'Many areas have Middle Eastern and South Asian restaurants',
    'Beach culture is family-friendly',
    'A car is helpful for getting around',
  ],

  expatTips: [
    'Miami offers diverse Muslim community',
    'Various neighborhoods have Muslim amenities',
    'Warm weather year-round',
    'Connect with SoFlo Muslims for community resources',
  ],
};

export const denverData: CityMuslimCommunityData = {
  citySlug: 'denver',
  cityName: 'Denver',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 70000,
    percentage: 2.4,
    yearEstimate: 2024,
    source: 'Colorado Muslim Society estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Syria', 'Egypt'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Somali', percentage: 15, countries: ['Somalia'] },
    { group: 'Ethiopian', percentage: 10, countries: ['Ethiopia'] },
    { group: 'Bosnian', percentage: 10, countries: ['Bosnia'] },
    { group: 'Other', percentage: 10, countries: ['African American', 'Convert'] },
  ],

  mosques: {
    totalCount: 14,
    majorMosques: [
      {
        name: 'Colorado Muslim Society (Masjid Abu-Bakr)',
        address: 'Parker Road, Aurora, CO',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM', '1:30 PM'],
        established: 1964,
        features: ['Largest mosque in Colorado', 'Community center', 'Large dome and minaret'],
      },
      {
        name: 'Downtown Denver Islamic Center (Masjid Al-Shuhada)',
        address: 'Downtown Denver',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Downtown location', 'Spiritual and humanitarian food programs'],
      },
      {
        name: 'Rocky Mountain Islamic Center (RMIC)',
        address: 'Lakewood, CO',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves Lakewood, Littleton, Denver, Golden'],
      },
      {
        name: 'CMCC (Colorado Muslim Community Center)',
        address: 'Aurora, CO',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Prayer halls', 'Classroom spaces', 'Diverse programs'],
      },
    ],
    jummahInfo: 'Most mosques in Aurora and southeast Denver metro area',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 40,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Pita Fresh', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Denver', specialty: 'Shawarma sandwiches', halalCertified: true },
      { name: "Dave's Hot Chicken", cuisine: 'American', priceRange: '$$', neighborhood: 'Denver', specialty: 'Nashville hot chicken', halalCertified: true },
      { name: 'Ali Baba Grill', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Denver', specialty: 'Middle Eastern dishes', halalCertified: true },
    ],
    halalGroceryStores: ['Middle Eastern grocery stores near Masjid Abu-Bakr'],
    halalNeighborhoods: ['Aurora', 'Southeast Denver'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Somali', 'Ethiopian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Aurora',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali', 'Ethiopian', 'Arab', 'South Asian'],
      mosqueCount: 6,
      halalRestaurantCount: 40,
      description: 'Home to Colorado Muslim Society and most mosques',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Various Islamic schools', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['University of Colorado Denver', 'University of Denver'],
  },

  travelInfo: {
    airport: {
      airportCode: 'DEN',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels near Aurora', 'Downtown Denver hotels'],
    touristMosques: ['Colorado Muslim Society'],
  },

  communityResources: {
    islamicCenters: ['Colorado Muslim Society'],
    advocacyOrgs: ['CAIR-Colorado'],
    charities: ['Islamic Relief USA'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Colorado Anti-Discrimination Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Colorado Muslim Society - serving since 1964',
    'Diverse Muslim community from 50+ countries',
    'Growing refugee community',
    'Active downtown Islamic center',
  ],

  visitorTips: [
    'Most halal restaurants are in Aurora area',
    'Colorado Muslim Society is worth visiting',
    'Altitude can affect visitors - take it easy',
    'Weather varies greatly - check forecasts',
  ],

  expatTips: [
    'Aurora has the strongest Muslim infrastructure',
    'More affordable than coastal cities',
    'Growing job market',
    'Active outdoor culture',
  ],
};

export const lasVegasData: CityMuslimCommunityData = {
  citySlug: 'las-vegas',
  cityName: 'Las Vegas',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 15000,
    percentage: 0.7,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Egypt', 'Lebanon'] },
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Turkey', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 5,
    majorMosques: [
      {
        name: 'Islamic Society of Nevada (ISN)',
        address: 'Las Vegas, NV',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Large prayer hall', 'Educational programs', 'Community events'],
      },
      {
        name: 'Masjid Ibrahim',
        address: '3788 North Jones Blvd, Las Vegas, NV',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Daily prayers', 'Educational programs', 'Community outreach'],
      },
      {
        name: 'Jamia Masjid',
        address: '4730 E Desert Inn Rd, Las Vegas, NV',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'South Asian',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Daily prayers', 'Weekly lectures'],
      },
      {
        name: 'Masjid As-Sabur',
        address: '711 Morgan Ave, Las Vegas, NV',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Traditional Sunni', 'Islamic education for children'],
      },
    ],
    jummahInfo: 'Five mosques serving the Las Vegas community',
    eidLocations: ['Large mosques', 'Convention venues'],
    qiblaDirection: 33,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Maza Halal', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Las Vegas', specialty: 'Turkish cuisine', halalCertified: true },
      { name: 'Baladie Café', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Las Vegas', specialty: 'Kebabs and meze', halalCertified: true },
      { name: 'Istanbul Mediterranean', cuisine: 'Turkish/Mediterranean', priceRange: '$$', neighborhood: 'The Strip', specialty: 'Turkish/Mediterranean', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Henderson', 'Summerlin'],
    bestCuisines: ['Mediterranean', 'Turkish', 'Pakistani', 'Indian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Henderson',
      muslimPopulation: 'low',
      dominantEthnicities: ['Mixed'],
      mosqueCount: 1,
      halalRestaurantCount: 15,
      description: 'Family-friendly suburb with some Muslim presence',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Islamic Society of Nevada programs'],
    hifzPrograms: ['Limited availability'],
    universitiesWithMSA: ['UNLV', 'CSN'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LAS',
      hasPrayerRoom: true,
      location: 'Multi-faith rooms in various terminals',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels that accommodate halal dietary needs with advance notice'],
    touristMosques: ['Islamic Society of Nevada'],
  },

  communityResources: {
    islamicCenters: ['Islamic Society of Nevada'],
    advocacyOrgs: ['CAIR-Nevada'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Muslim community groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Nevada civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Limited options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Growing Muslim community despite "Sin City" reputation',
    'Strong community outreach efforts',
    'Mediterranean halal options on The Strip',
    'Family-friendly areas available away from casinos',
  ],

  visitorTips: [
    'Halal food available even on The Strip',
    'Multi-faith prayer rooms at airport',
    'Many hotels can accommodate halal needs with notice',
    'Family areas exist away from casino floors',
  ],

  expatTips: [
    'Smaller but tight-knit Muslim community',
    'Henderson and Summerlin more family-friendly',
    'No state income tax',
    'Growing job market',
  ],
};

export const orlandoData: CityMuslimCommunityData = {
  citySlug: 'orlando',
  cityName: 'Orlando',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 1.8,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Lebanon', 'Syria'] },
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Sudan'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Islamic Center of Orlando (ICO)',
        address: 'Near Disney World, Orlando, FL',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1987,
        features: ['Largest masjid in Central Florida', 'New 3,000 capacity building (2024)', 'Minutes from theme parks'],
      },
      {
        name: 'Al-Bukhari Islamic Center',
        address: '8009 S Orange Avenue, Orlando, FL 32809',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2017,
        features: ['Weekend Islamic School', 'Quran instruction', 'Islamic History classes'],
      },
      {
        name: 'Islamic Society of Central Florida (ISCF)',
        address: 'Orlando, FL',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Comprehensive community services', 'Interfaith initiatives'],
      },
      {
        name: 'Masjid Al-Haq',
        address: '545 W. Central Road, Orlando, FL 32801',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Downtown location', 'Serves working professionals'],
      },
    ],
    jummahInfo: 'Multiple options throughout Central Florida',
    eidLocations: ['Florida State Fairgrounds (5,000+ attendees)', 'Large mosques'],
    qiblaDirection: 56,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Various halal restaurants', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Near ICO', specialty: 'Various', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Near International Drive', 'Near ICO'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Indian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near Islamic Center of Orlando',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'Area around the largest mosque in Central Florida',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'ICO Islamic School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Al-Bukhari Weekend Islamic School', 'Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['UCF', 'Valencia College'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MCO',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels near International Drive', 'Hotels with halal-friendly options'],
    touristMosques: ['Islamic Center of Orlando - minutes from Disney'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Orlando', 'ISCF'],
    advocacyOrgs: ['CAIR-Florida'],
    charities: ['Islamic Relief USA'],
    socialGroups: ['Eid Orlando community partnership'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Florida Civil Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '5:00 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '12-14 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICO new masjid (2024) - triple capacity to 3,000',
    'Eid Orlando - largest indoor Eid in Florida (5,000+ attendees)',
    'Convenient for Muslim tourists visiting theme parks',
    'ICO Open House every Wednesday',
    'Growing Muslim community',
  ],

  visitorTips: [
    'ICO is minutes from Disney World - great for Muslim tourists',
    'Several halal restaurants near the theme parks',
    'Many hotels can accommodate halal dietary needs',
    'Visit ICO Open House on Wednesdays',
  ],

  expatTips: [
    'Strong Islamic schools available',
    'Growing job market especially in tourism and tech',
    'Family-friendly city',
    'More affordable than Miami',
  ],
};

export const austinData: CityMuslimCommunityData = {
  citySlug: 'austin',
  cityName: 'Austin',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 2.2,
    yearEstimate: 2024,
    source: 'Local community estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 40, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt', 'Syria'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Nigeria'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Islamic Center of Greater Austin (ICGA)',
        address: '5110 Manor Rd., Austin, TX 78723',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Community center', 'Halal restaurant directory'],
      },
      {
        name: 'Nueces Mosque',
        address: 'Downtown Austin',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic (students)',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves UT Austin students', 'Downtown location', 'Halaqas', 'Events'],
      },
      {
        name: 'EACI (East Austin Community of Al-Islam)',
        address: '3701 E. MLK Jr. Blvd. Austin, TX 78721',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['East Austin location', 'Community events'],
      },
      {
        name: 'Georgetown Islamic Center (GIC)',
        address: 'Georgetown, TX',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2018,
        features: ['6.5 acre property', '$2.4 million facility'],
      },
    ],
    jummahInfo: 'Multiple options throughout Austin metro area',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 45,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Halal on Fire', cuisine: 'Middle Eastern/Turkish', priceRange: '$$', neighborhood: 'North Austin', specialty: 'Shawarma, grilled meats', halalCertified: true },
      { name: 'Mad Dogs', cuisine: 'American', priceRange: '$', neighborhood: 'Various', specialty: 'Halal hot dogs, burgers, Texas BBQ', halalCertified: true },
      { name: 'Halal Bros', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Middle Eastern', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['North Austin', 'Round Rock', 'Pflugerville'],
    bestCuisines: ['Middle Eastern', 'Turkish', 'Pakistani', 'Indian', 'Texas BBQ'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'North Austin',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 30,
      description: 'Growing Muslim community with halal options',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Various Islamic schools', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['UT Austin', 'Texas State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'AUS',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'North Austin hotels'],
    touristMosques: ['Islamic Center of Greater Austin'],
  },

  communityResources: {
    islamicCenters: ['ATX Muslims community', 'ICGA'],
    advocacyOrgs: ['CAIR-Texas Austin'],
    charities: ['Islamic Relief USA'],
    socialGroups: ['ATX Muslims community hub'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Texas employment laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ATX Muslims - comprehensive community resource hub',
    'Growing tech industry Muslim professionals',
    'Unique halal Texas BBQ options',
    'Nueces Mosque serves UT Austin students',
    'Diverse halal cuisine including Mexican and Portuguese',
  ],

  visitorTips: [
    'ATXMuslims.com has restaurant recommendations',
    'Many halal options in North Austin',
    'Summers are very hot',
    'Live music capital - many family-friendly options',
  ],

  expatTips: [
    'Booming tech job market',
    'Growing Muslim community',
    'More affordable than California (but rising)',
    'Join ATX Muslims for community connections',
  ],
};

// Continue with more cities...
export const portlandData: CityMuslimCommunityData = {
  citySlug: 'portland',
  cityName: 'Portland',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 40000,
    percentage: 1.6,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Iraq', 'Syria', 'Lebanon'] },
    { group: 'African', percentage: 25, countries: ['Somalia', 'Sudan'] },
    { group: 'South Asian', percentage: 20, countries: ['Pakistan', 'India'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Bosnian', 'converts'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Masjed Assaber',
        address: '10323 SW 43rd Avenue, Portland, OR',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest Islamic center in Portland metro', 'Various activities'],
      },
      {
        name: 'Muslim Community Center of Portland',
        address: 'Portland, OR',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1973,
        features: ['Trailblazer of Islamic community in Oregon'],
      },
      {
        name: 'Portland Rizwan Mosque',
        address: 'Southwest Portland',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Ahmadiyya',
        languages: ['English', 'Arabic', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['First and oldest mosque in Portland'],
      },
    ],
    jummahInfo: 'Multiple options throughout Portland metro',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 23,
  },

  halalFood: {
    restaurantCount: 60,
    topRestaurants: [
      { name: 'DarSalam', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Multiple locations', specialty: 'Kabobs, authentic entrees', halalCertified: true },
      { name: 'Noah Halal (Food Truck)', cuisine: 'Greek/Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Greek and Middle Eastern', halalCertified: true },
    ],
    halalGroceryStores: ['Halal Meat & Mediterranean Foods'],
    halalNeighborhoods: ['Beaverton', 'Southeast Portland'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Southeast Asian', 'Somali'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Beaverton',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 4,
      halalRestaurantCount: 20,
      description: 'Good concentration of Muslims in Beaverton area',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Muslim Educational Trust', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Muslim Educational Trust weekend Islamic school'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Portland State University', 'University of Oregon'],
  },

  travelInfo: {
    airport: {
      airportCode: 'PDX',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown Portland hotels', 'Beaverton hotels'],
    touristMosques: ['Masjed Assaber'],
  },

  communityResources: {
    islamicCenters: ['Muslim Educational Trust', 'Muslim Community Center of Portland'],
    advocacyOrgs: ['CAIR-Oregon'],
    charities: ['Islamic Relief USA'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 7,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['Oregon civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Portland Rizwan Mosque - first and oldest in Portland',
    'Muslim Educational Trust - since 1993',
    'Progressive city very accepting of Muslims',
    'DarSalam restaurant chain popular',
  ],

  visitorTips: [
    'Portland is very welcoming to Muslims',
    'DarSalam has multiple locations',
    'Rain is common - bring layers',
    'Public transit is good',
  ],

  expatTips: [
    'Beaverton has good Muslim infrastructure',
    'Very progressive city',
    'Housing prices high',
    'Tech job market growing',
  ],
};

// Charlotte, NC
export const charlotteData: CityMuslimCommunityData = {
  citySlug: 'charlotte',
  cityName: 'Charlotte',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 1.8,
    yearEstimate: 2024,
    source: 'Islamic Center of Charlotte estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Lebanon', 'Palestine', 'Syria', 'Egypt'] },
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Sudan'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Islamic Center of Charlotte',
        address: 'Progress Lane, Charlotte, NC',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Charlotte Islamic Academy', 'Al-Nour Community Center (2020)', 'Cricket field'],
      },
      {
        name: 'Pillars Mosque (MCC)',
        address: 'Charlotte, NC',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2018,
        features: ['Spiritual growth', 'Education', 'Fellowship'],
      },
      {
        name: 'Islamic Society of Greater Charlotte',
        address: 'Charlotte, NC',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['20+ countries represented', 'Interfaith dialogues'],
      },
    ],
    jummahInfo: 'At least a dozen places for Friday prayer',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 55,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Curry Gate', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Charlotte', specialty: 'Curries, tandoori, biryani', halalCertified: true },
    ],
    halalGroceryStores: ['Several halal markets throughout Charlotte'],
    halalNeighborhoods: ['Near Islamic Center of Charlotte', 'University area'],
    bestCuisines: ['Indian', 'Middle Eastern', 'Pakistani'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near ICC/Al-Nour Community Center',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 3,
      halalRestaurantCount: 25,
      description: 'Area around Islamic Center of Charlotte with 20 acres',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Charlotte Islamic Academy', grades: 'Pre-K - 12', type: 'full-time', accredited: true, website: '5500 North Tryon Street' },
    ],
    weekendPrograms: ['Mosque-based weekend schools'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['UNC Charlotte', 'Queens University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CLT',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels near University area'],
    touristMosques: ['Islamic Center of Charlotte'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Charlotte', 'Islamic Society of Greater Charlotte'],
    advocacyOrgs: ['Local Muslim organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['North Carolina civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Islamic cemetery in Charlotte'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Al-Nour Community Center (2020) - modern 4.2 acre facility',
    'Charlotte Islamic Academy since 1994',
    '50,000+ Muslims in metro area',
    'Community grew from 1,000 in 1988 to 50,000+ today',
  ],

  visitorTips: [
    'Growing Muslim community',
    'Good halal dining options',
    'Visit Al-Nour Community Center',
  ],

  expatTips: [
    'Growing job market especially in banking/finance',
    'More affordable than Northeast cities',
    'Strong Islamic schools',
  ],
};

// Nashville, TN
export const nashvilleData: CityMuslimCommunityData = {
  citySlug: 'nashville',
  cityName: 'Nashville',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 30000,
    percentage: 1.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt', 'Iraq'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Kurdish', percentage: 15, countries: ['Kurdistan'] },
    { group: 'Somali', percentage: 15, countries: ['Somalia'] },
    { group: 'Other', percentage: 15, countries: ['75+ countries represented'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Center of Nashville (ICN)',
        address: '12 South neighborhood, Nashville, TN',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1978,
        features: ['40+ nationalities', 'Second campus in Bellevue', 'Donation from Yusuf Islam (Cat Stevens)'],
      },
      {
        name: 'Salahadeen Center of Nashville',
        address: 'Nashville, TN',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1998,
        features: ['Youth programs', 'Community services'],
      },
      {
        name: 'Islamic Center of Tennessee',
        address: '5400 Bell Forge Ln E, Antioch, TN 37013',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves diverse community'],
      },
      {
        name: 'Al-Huda Islamic Center',
        address: 'Hermitage, Nashville, TN',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2013,
        features: ['First mosque in Hermitage', 'Near BNA airport'],
      },
    ],
    jummahInfo: 'Multiple options throughout Nashville',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 52,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [],
    halalGroceryStores: ['Halal-certified butchers', 'Ethnic grocery stores'],
    halalNeighborhoods: ['Antioch', 'Near universities'],
    bestCuisines: ['Middle Eastern', 'South Asian', 'Kurdish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub', 'Zabihah app'],
  },

  muslimNeighborhoods: [
    {
      name: 'Antioch',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Kurdish', 'Arab', 'South Asian'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'Growing Muslim community area',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available at mosques'],
    universitiesWithMSA: ['Vanderbilt University', 'University of Tennessee'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BNA',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown Nashville hotels'],
    touristMosques: ['Islamic Center of Nashville'],
  },

  communityResources: {
    islamicCenters: ['ICN', 'Salahadeen Center'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Tennessee civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICN founded 1978 - one of oldest in Tennessee',
    '75+ countries represented',
    'Growing Kurdish community',
    'ICN received donation from Yusuf Islam (Cat Stevens)',
  ],

  visitorTips: [
    'Use Zabihah app for halal restaurants',
    'Music city with diverse culture',
    'ICN convenient near downtown',
  ],

  expatTips: [
    'Growing job market',
    'More affordable than coastal cities',
    'Kurdish community well-established',
  ],
};

// Indianapolis, IN
export const indianapolisData: CityMuslimCommunityData = {
  citySlug: 'indianapolis',
  cityName: 'Indianapolis',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Iraq', 'Syria', 'Lebanon'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India'] },
    { group: 'Somali', percentage: 15, countries: ['Somalia'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Afghanistan', 'Eritrea', 'Syria refugees'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Islamic Center of Indianapolis (Masjid Al-Fajr)',
        address: 'Indianapolis, IN',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest mosque in city', 'Educational programs'],
      },
      {
        name: 'Nur-Allah Islamic Center',
        address: 'Indianapolis, IN',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1960,
        features: ['Civil rights advocacy', 'Interfaith unity since 1960s'],
      },
      {
        name: 'Al-Huda Foundation',
        address: 'Northeast Indianapolis, IN',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves northeast side'],
      },
    ],
    jummahInfo: 'Over a dozen mosques with Friday congregational prayers',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 52,
  },

  halalFood: {
    restaurantCount: 60,
    topRestaurants: [
      { name: 'Chapati', cuisine: 'Indian', priceRange: '$', neighborhood: 'Indianapolis', specialty: 'Indian cuisine', halalCertified: true },
      { name: 'Sahara Restaurant', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Indianapolis', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Jerusalem Café', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Indianapolis', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Hyderabad House', cuisine: 'Indian', priceRange: '$$', neighborhood: '8840 N Michigan Rd', specialty: 'Hyderabadi cuisine', halalCertified: true },
      { name: 'AlBasha Restaurant', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Fishers', specialty: 'Mediterranean', halalCertified: true },
    ],
    halalGroceryStores: ['Cedar Halal Market', 'Al-Khalil Grocery', 'Jerusalem International Market'],
    halalNeighborhoods: ['Downtown', 'Northeast Indianapolis'],
    bestCuisines: ['Middle Eastern', 'Indian', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Northeast Indianapolis',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 4,
      halalRestaurantCount: 20,
      description: 'Growing Muslim community',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Indiana University', 'Butler University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'IND',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['Islamic Center of Indianapolis'],
  },

  communityResources: {
    islamicCenters: ['ICI', 'Nur-Allah Islamic Center'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim professional networks'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Indiana civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Nur-Allah Islamic Center - civil rights advocacy since 1960s',
    'Growing refugee community',
    'Expanding halal market options',
    '21st century growth significant',
  ],

  visitorTips: [
    'Growing halal dining options',
    'Affordable Midwest city',
    'Good convention city',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Growing job market',
    'Strong community organizations',
  ],
};

// Columbus, OH
export const columbusData: CityMuslimCommunityData = {
  citySlug: 'columbus',
  cityName: 'Columbus',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 100000,
    percentage: 4.5,
    yearEstimate: 2024,
    source: 'CAIR Ohio estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Somali', percentage: 50, countries: ['Somalia'] },
    { group: 'Arab', percentage: 20, countries: ['Palestine', 'Egypt', 'Yemen'] },
    { group: 'South Asian', percentage: 15, countries: ['Pakistan', 'India'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Bosnia'] },
  ],

  mosques: {
    totalCount: 20,
    majorMosques: [
      {
        name: 'Noor Islamic Cultural Center',
        address: 'North Columbus, OH',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['One of largest mosques in US', 'Community center', 'Hub for Islamic activities'],
      },
      {
        name: 'Islamic Center of Columbus',
        address: 'Columbus, OH',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Arab/African American',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1969,
        features: ['First mosque in Columbus'],
      },
      {
        name: 'Abubakar As-Saddique Islamic Center',
        address: 'Columbus, OH',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Somali',
        languages: ['Somali', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['30,000+ sq ft', '10 acres', '7,000 weekly worshippers', 'Serves Somali community'],
      },
    ],
    jummahInfo: 'About 20 mosques serving Columbus area',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 54,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [],
    halalGroceryStores: ['Many Somali-owned halal meat markets'],
    halalNeighborhoods: ['Northland', 'Hilliard'],
    bestCuisines: ['Somali', 'Middle Eastern', 'Indian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Northland',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali'],
      mosqueCount: 5,
      halalRestaurantCount: 50,
      description: 'Largest concentration of Somali immigrants',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Noor Islamic Academy', grades: 'K-12', type: 'full-time', accredited: true },
      { name: 'Central Ohio Islamic School', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Multiple mosque programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Ohio State University', 'Capital University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CMH',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'Near Noor Center'],
    touristMosques: ['Noor Islamic Cultural Center'],
  },

  communityResources: {
    islamicCenters: ['Noor Islamic Cultural Center', 'Somali Community Association of Ohio'],
    advocacyOrgs: ['CAIR-Ohio'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Ohio civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Second largest Somali population in US (60,000+)',
    'Noor Islamic Cultural Center - one of largest mosques in US',
    'About 100,000 Muslims in Greater Columbus',
    'Abubakar As-Saddique - 7,000 weekly worshippers',
  ],

  visitorTips: [
    'Extensive Somali cuisine available',
    'Noor Center worth visiting',
    'Very diverse Muslim community',
  ],

  expatTips: [
    'Strong Somali community support network',
    'Affordable Midwest city',
    'Growing job market',
    'Excellent Islamic schools',
  ],
};

// Cleveland, OH
export const clevelandData: CityMuslimCommunityData = {
  citySlug: 'cleveland',
  cityName: 'Cleveland',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 40000,
    percentage: 2.0,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 40, countries: ['Palestine', 'Lebanon', 'Yemen'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Turkey', 'Bosnia'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Islamic Center of Cleveland',
        address: '6055 W 130th St, Cleveland, OH 44130',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Largest mosque in Cleveland area', 'Educational programs'],
      },
      {
        name: 'Cleveland Mosque',
        address: 'Cleveland, OH',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1937,
        features: ['One of oldest mosques in Cleveland', 'Community center'],
      },
      {
        name: 'Masjid Bilal',
        address: '7401 Euclid Ave, Cleveland, OH',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1983,
        features: ['Second newly built mosque in US (1983)'],
      },
    ],
    jummahInfo: 'Multiple options throughout Greater Cleveland',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 55,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [
      { name: "Aladdin's Eatery", cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Cleveland', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Taza Grill', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Cleveland', specialty: 'Mediterranean', halalCertified: true },
      { name: "Sittoo's Pita & Salads", cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Cleveland', specialty: 'Pitas and salads', halalCertified: true },
    ],
    halalGroceryStores: ["Rumi's Market", 'HolyLand Supermarket'],
    halalNeighborhoods: ['Northwest Cleveland', 'Lakewood'],
    bestCuisines: ['Middle Eastern', 'South Asian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Northwest Cleveland/Lakewood',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 5,
      halalRestaurantCount: 20,
      description: 'Larger Muslim concentration on west side',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al Ihsan School of Excellence', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Case Western Reserve', 'Cleveland State'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CLE',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['Islamic Center of Cleveland'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Cleveland', 'Islamic Society of Akron and Kent'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Ohio civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Cleveland Mosque - established 1937',
    'Masjid Bilal - second newly built mosque in US',
    'Al Ihsan School - only K-12 Islamic school in Cleveland',
    'Strong Arab community presence',
  ],

  visitorTips: [
    'West side has more Muslim amenities',
    'Good Middle Eastern food scene',
    'Affordable city',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Strong healthcare sector jobs',
    'Established Arab community',
  ],
};

// St. Louis, MO
export const stLouisData: CityMuslimCommunityData = {
  citySlug: 'st-louis',
  cityName: 'St. Louis',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 1.8,
    yearEstimate: 2024,
    source: 'Islamic Foundation of Greater St. Louis',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Bosnian', percentage: 35, countries: ['Bosnia'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Syria', 'Iraq'] },
    { group: 'South Asian', percentage: 20, countries: ['Pakistan', 'India'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Somalia'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'St. Louis Islamic Center (Nur Mosque)',
        address: 'South St. Louis County',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Bosnian',
        languages: ['Bosnian', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2010,
        features: ['$1.5 million facility', 'Opened 2017', 'Part of ICNAB'],
      },
      {
        name: 'Bosnian Islamic Center of St. Louis',
        address: '3125 Lemay Ferry Road, South County',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Bosnian',
        languages: ['Bosnian', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves large Bosnian community', 'Cultural events'],
      },
      {
        name: 'Islamic Foundation of Greater St. Louis',
        address: 'St. Louis, MO',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Annual interfaith iftar', 'Community outreach'],
      },
    ],
    jummahInfo: 'Multiple options throughout St. Louis',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 52,
  },

  halalFood: {
    restaurantCount: 60,
    topRestaurants: [],
    halalGroceryStores: ['Top 10 halal grocery stores available'],
    halalNeighborhoods: ['South St. Louis', 'South County'],
    bestCuisines: ['Bosnian', 'Middle Eastern', 'South Asian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'South St. Louis/Bevo Mill',
      muslimPopulation: 'high',
      dominantEthnicities: ['Bosnian'],
      mosqueCount: 4,
      halalRestaurantCount: 25,
      description: 'Large Bosnian Muslim community',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Washington University', 'St. Louis University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'STL',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['St. Louis Islamic Center'],
  },

  communityResources: {
    islamicCenters: ['Islamic Foundation of Greater St. Louis', 'Darulquran Foundation'],
    advocacyOrgs: ['CAIR-St. Louis'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Missouri civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'One of largest Bosnian communities in US',
    'St. Louis Islamic Center - Nur Mosque opened 2017',
    'Annual interfaith iftar during Ramadan',
    'Strong community organizations',
  ],

  visitorTips: [
    'Try Bosnian Muslim cuisine',
    'South St. Louis has Bosnian restaurants',
    'Affordable city to visit',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Strong Bosnian community network',
    'Growing job market',
  ],
};

// Baltimore, MD
export const baltimoreData: CityMuslimCommunityData = {
  citySlug: 'baltimore',
  cityName: 'Baltimore',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 3.0,
    yearEstimate: 2024,
    source: 'Pew Research Center',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'African American', percentage: 35, countries: ['USA'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt', 'Yemen'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Ethiopia'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 20,
    majorMosques: [
      {
        name: 'Dar Al-Taqwa Islamic Center',
        address: 'Howard County, MD',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1992,
        features: ['2 Jumuah prayers', 'Weekend school', 'Summer camp', 'Weddings', 'Funeral services'],
      },
      {
        name: 'Muslim Community Cultural Center of Baltimore',
        address: 'Baltimore, MD 21216',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community center'],
      },
    ],
    jummahInfo: 'Multiple options throughout Baltimore metro',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Zaatar Mediterranean Cuisine', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: '1019 S Charles St', specialty: 'Mediterranean', halalCertified: true },
      { name: 'Maiwand Grill', cuisine: 'Afghan', priceRange: '$$', neighborhood: '324 W Baltimore St', specialty: 'Afghan cuisine', halalCertified: true },
      { name: 'Villagio Cafe', cuisine: 'Persian', priceRange: '$$', neighborhood: '6805 York Rd', specialty: 'Persian', halalCertified: true },
      { name: 'The Helmand', cuisine: 'Afghan', priceRange: '$$$', neighborhood: '806 N Charles St', specialty: 'Afghan cuisine', halalCertified: true },
      { name: 'Mehfil Karahi & Kabab', cuisine: 'South Asian', priceRange: '$$', neighborhood: 'Baltimore', specialty: '100% halal-certified', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Various neighborhoods', 'Silver Spring nearby'],
    bestCuisines: ['Middle Eastern', 'Afghan', 'South Asian', 'Persian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Various areas throughout Baltimore',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African American', 'Arab', 'South Asian'],
      mosqueCount: 5,
      halalRestaurantCount: 30,
      description: 'Muslims distributed throughout various neighborhoods',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Dar Al-Taqwa weekend school'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Johns Hopkins', 'University of Maryland Baltimore'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BWI',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Inner Harbor hotels'],
    touristMosques: ['Dar Al-Taqwa'],
  },

  communityResources: {
    islamicCenters: ['Dar Al-Taqwa', 'Muslim Community Cultural Center'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Maryland civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Maryland has ~3% Muslim population',
    'Excellent halal dining density',
    'Near DC metro Muslim resources',
    'Dar Al-Taqwa comprehensive services',
  ],

  visitorTips: [
    'Good halal dining options',
    'Near DC for additional Muslim resources',
    'Use Zabihah/HalalTrip apps',
  ],

  expatTips: [
    'Access to DC job market',
    'Strong Muslim organizations',
    'Moderate cost of living',
  ],
};

// Tampa, FL
export const tampaData: CityMuslimCommunityData = {
  citySlug: 'tampa',
  cityName: 'Tampa',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 36000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 35, countries: ['Palestine', 'Syria', 'Egypt', 'Yemen'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Turkey', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Islamic Society of Tampa Bay (ISTABA)',
        address: 'Tampa, FL',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 2004,
        features: ['One of largest mosques in nation', 'Full-time Islamic school', 'Day care', 'Funeral services'],
      },
      {
        name: 'Masjid Darul Uloom',
        address: 'Tampa, FL',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Islamic education for children and adults'],
      },
      {
        name: 'ICT Mosque Tampa',
        address: 'Tampa, FL',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Daily prayers', 'Friday sermons'],
      },
    ],
    jummahInfo: 'Multiple options throughout Tampa Bay',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 55,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'The Fryer House (Food Truck)', cuisine: 'Fusion', priceRange: '$$', neighborhood: 'Various', specialty: 'Halal hot chicken fusion', halalCertified: true },
    ],
    halalGroceryStores: ['Arab grocery stores', 'Turkish grocery stores', "Musa's halal slaughterhouse"],
    halalNeighborhoods: ['Temple Terrace', 'Busch Boulevard/56th Street area'],
    bestCuisines: ['Middle Eastern', 'Yemeni', 'South Asian', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Temple Terrace/New Tampa',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 5,
      halalRestaurantCount: 40,
      description: '70% Muslim-owned businesses, called "the new Dearborn"',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Universal Academy', grades: 'K-12', type: 'full-time', accredited: true },
      { name: 'American Youth Academy', grades: 'K-12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of South Florida', 'University of Tampa'],
  },

  travelInfo: {
    airport: {
      airportCode: 'TPA',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Near Temple Terrace', 'Downtown Tampa'],
    touristMosques: ['ISTABA'],
  },

  communityResources: {
    islamicCenters: ['ISTABA', 'ICT'],
    advocacyOrgs: ['CAIR-Florida'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Florida Civil Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '5:00 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '12-14 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Temple Terrace - "the new Dearborn"',
    '70% Muslim-owned businesses in Temple Terrace area',
    '4 Islamic schools with 2,000+ students',
    'ISTABA - one of largest mosques in nation',
    '500,000+ Muslims in Florida',
  ],

  visitorTips: [
    'Temple Terrace area is Muslim-friendly hub',
    'Busch Boulevard/56th Street has halal restaurants',
    'Near Busch Gardens theme park',
  ],

  expatTips: [
    'Temple Terrace has dense Muslim infrastructure',
    'Excellent Islamic schools',
    'Growing job market',
    'Warm weather year-round',
  ],
};

// Continue with more cities...

// Raleigh-Durham, NC
export const raleighData: CityMuslimCommunityData = {
  citySlug: 'raleigh',
  cityName: 'Raleigh-Durham',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 30000,
    percentage: 1.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Lebanon', 'Syria', 'Palestine'] },
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Association of Raleigh',
        address: 'Raleigh, NC',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Central mosque for Triangle', 'School', 'Community center'],
      },
      {
        name: 'Al Huda Islamic Center',
        address: 'North Duke Street, Durham, NC',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Pakistani',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Quran classes', 'Cultural events'],
      },
      {
        name: 'North Durham Masjid',
        address: 'North Durham, NC',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves expanding Muslim community in north Durham'],
      },
    ],
    jummahInfo: 'Multiple mosques in Raleigh, Durham, and Chapel Hill',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 56,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [],
    halalGroceryStores: ['Halal butcher shops', 'Ethnic grocery stores'],
    halalNeighborhoods: ['Near Research Triangle Park', 'Near universities'],
    bestCuisines: ['Middle Eastern', 'Mediterranean', 'South Asian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub', 'Zabihah'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near Research Triangle',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 20,
      description: 'Academic and tech hub with Muslim professionals',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['IAR weekend programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Duke University', 'UNC Chapel Hill', 'NC State'],
  },

  travelInfo: {
    airport: {
      airportCode: 'RDU',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Research Triangle hotels'],
    touristMosques: ['Islamic Association of Raleigh'],
  },

  communityResources: {
    islamicCenters: ['IAR', 'Al Huda'],
    advocacyOrgs: ['Triangle Muslim Aid'],
    charities: ['Triangle Muslim Aid'],
    socialGroups: ['Muslim Women\'s Association of Raleigh'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['North Carolina civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Strong academic community presence',
    'Drawn by renowned universities (Duke, UNC, NC State)',
    '10,000+ Muslims in Durham alone',
    'Growing tech industry attracting Muslim professionals',
  ],

  visitorTips: [
    'Good university towns to visit',
    'Use Zabihah.com for halal options',
    'Growing halal food scene',
  ],

  expatTips: [
    'Research Triangle has excellent job opportunities',
    'Strong university MSAs',
    'Good for Muslim families',
  ],
};

// Kansas City, MO
export const kansasCityData: CityMuslimCommunityData = {
  citySlug: 'kansas-city',
  cityName: 'Kansas City',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India'] },
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Syria', 'Egypt'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Somalia', 'Turkey'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Society of Greater Kansas City',
        address: '99th and James A. Reed Road',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Full-time Islamic school', 'Day care', 'Pre-school', 'Funeral services', 'Youth programs'],
      },
      {
        name: 'Islamic Center of Johnson County',
        address: 'Johnson County, KS',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Serves Johnson County suburbs'],
      },
    ],
    jummahInfo: 'Multiple options in Kansas City metro',
    eidLocations: ['ISGKC gym - 400+ attendees', 'Large mosques'],
    qiblaDirection: 48,
  },

  halalFood: {
    restaurantCount: 40,
    topRestaurants: [
      { name: 'KC Smoke Burgers', cuisine: 'American', priceRange: '$$', neighborhood: 'Kansas City', specialty: 'Halal burgers', halalCertified: true },
      { name: 'Holy Land Cafe', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Kansas City', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Jerusalem Cafe', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Kansas City', specialty: 'Middle Eastern', halalCertified: true },
      { name: "Habibi's Kebab Restaurant", cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Downtown', specialty: 'Kebabs', halalCertified: true },
    ],
    halalGroceryStores: ['Shahrazad Market', 'Olive Cafe'],
    halalNeighborhoods: ['Near ISGKC', 'Johnson County'],
    bestCuisines: ['Middle Eastern', 'Mediterranean', 'Indian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near ISGKC',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'Area around main Islamic center',
      safetyRating: 8,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'ISGKC Full-time Islamic School', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Kansas', 'UMKC'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MCI',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['ISGKC'],
  },

  communityResources: {
    islamicCenters: ['ISGKC', 'Islamic Center of Johnson County'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities', 'Gaza fundraisers'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Missouri civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ISGKC - sprawling campus with school and mosque',
    'Community iftars for 400+ during Ramadan',
    'Diverse congregation from many countries',
    'Strong community support for Gaza',
  ],

  visitorTips: [
    'Shahrazad Market for halal groceries',
    'BBQ capital - some halal options',
    'Affordable city',
  ],

  expatTips: [
    'Very affordable cost of living',
    'ISGKC has comprehensive Islamic school',
    'Growing job market',
  ],
};

// Milwaukee, WI
export const milwaukeeData: CityMuslimCommunityData = {
  citySlug: 'milwaukee',
  cityName: 'Milwaukee',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 20000,
    percentage: 1.3,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Bosnian', percentage: 20, countries: ['Bosnia'] },
    { group: 'Somali', percentage: 20, countries: ['Somalia'] },
    { group: 'Rohingya', percentage: 10, countries: ['Myanmar'] },
    { group: 'Syrian', percentage: 15, countries: ['Syria'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Pakistan', 'India'] },
  ],

  mosques: {
    totalCount: 8,
    majorMosques: [
      {
        name: 'Islamic Society of Milwaukee',
        address: '4707 S. 13th St., Milwaukee',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Bosnian', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1976,
        features: ['Largest Islamic organization in Wisconsin', 'Serves 3,000+ families', 'Three mosque locations'],
      },
      {
        name: 'Masjid Al-Huda',
        address: 'Northwest Milwaukee',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Youth programs', 'Large Eid celebrations'],
      },
      {
        name: 'Islamic Dawah Center',
        address: 'North side Milwaukee',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community outreach'],
      },
    ],
    jummahInfo: 'Multiple options throughout Milwaukee',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 50,
  },

  halalFood: {
    restaurantCount: 46,
    topRestaurants: [
      { name: 'Burger Hub', cuisine: 'American', priceRange: '$', neighborhood: '6231 S. 27th St, Greenfield', specialty: 'Halal burgers', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['South side', 'North side'],
    bestCuisines: ['Middle Eastern', 'Bosnian', 'Somali', 'American'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'South Milwaukee',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Bosnian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'ISM main mosque and community',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Salam School', grades: 'K-12', type: 'full-time', accredited: true },
      { name: 'Clara Muhammad School', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ISM weekend school'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['UW-Milwaukee', 'Marquette University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MKE',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['ISM main mosque'],
  },

  communityResources: {
    islamicCenters: ['ISM', 'Islamic Resource Center'],
    advocacyOrgs: ['Muslim Women\'s Coalition'],
    charities: ['Local charities'],
    socialGroups: ['Eat Halal Milwaukee'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Wisconsin civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ISM - serving since 1976 with 3,000+ families',
    'Clara Muhammad School - first Islamic school in Milwaukee (1972)',
    'Eat Halal Milwaukee - 46 halal restaurants',
    'Milwaukee Halal Restaurant Week annually',
    'Diverse refugee communities (Bosnian, Somali, Rohingya, Syrian)',
  ],

  visitorTips: [
    'Check Eat Halal Milwaukee for restaurants',
    'ISM has multiple locations',
    'Milwaukee Halal Restaurant Week in July',
  ],

  expatTips: [
    'Affordable cost of living',
    'Strong Islamic schools (K-12)',
    'Diverse Muslim community',
    'Muslim senior center available',
  ],
};

// Sacramento, CA
export const sacramentoData: CityMuslimCommunityData = {
  citySlug: 'sacramento',
  cityName: 'Sacramento',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 40000,
    percentage: 1.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Yemen', 'Egypt'] },
    { group: 'Afghan', percentage: 15, countries: ['Afghanistan'] },
    { group: 'African', percentage: 15, countries: ['Somalia', 'Ethiopia'] },
    { group: 'Other', percentage: 15, countries: ['Turkey', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'SALAM Islamic Center',
        address: 'Sacramento, CA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Sacramento Area League of Associated Muslims'],
      },
      {
        name: 'Islamic Center of Sacramento',
        address: 'Sacramento, CA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Oldest mosque on West Coast', 'Living history'],
      },
      {
        name: 'Masjid Annur Islamic Center',
        address: 'Sacramento, CA',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community services'],
      },
    ],
    jummahInfo: 'Multiple options throughout Sacramento',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 35,
  },

  halalFood: {
    restaurantCount: 60,
    topRestaurants: [
      { name: 'Darbar Halal Restaurant', cuisine: 'Indian', priceRange: '$$', neighborhood: '3022 Stockton Blvd', specialty: 'Indian cuisine', halalCertified: true },
      { name: "Shah's Halal Food", cuisine: 'Middle Eastern', priceRange: '$', neighborhood: '3000 W Capitol Ave, West Sacramento', specialty: 'Street food', halalCertified: true },
      { name: 'Orange Oven', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: '2790 Stockton Blvd', specialty: 'Community gathering spot', halalCertified: true },
      { name: 'Caravan Uzbek Cuisine', cuisine: 'Uzbek', priceRange: '$$', neighborhood: 'Sacramento', specialty: 'Uzbek halal', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Stockton Blvd area', 'Downtown'],
    bestCuisines: ['Indian', 'Middle Eastern', 'Turkish', 'Uzbek', 'Pakistani'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Stockton Boulevard area',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 25,
      description: 'Growing halal food corridor',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['UC Davis', 'Sacramento State'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SMF',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels'],
    touristMosques: ['Islamic Center of Sacramento'],
  },

  communityResources: {
    islamicCenters: ['SALAM', 'Islamic Center of Sacramento'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['California civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Oldest mosque and Islamic Center on West Coast',
    '60+ halal restaurants in metro area',
    'Growing refugee and immigrant community',
    'Diverse halal cuisine from around world',
  ],

  visitorTips: [
    'Stockton Blvd has many halal options',
    'State capital - good for business visits',
    'Orange Oven popular gathering spot',
  ],

  expatTips: [
    'More affordable than Bay Area',
    'Growing job market',
    'Near UC Davis',
    'Diverse Muslim community',
  ],
};

// Pittsburgh, PA
export const pittsburghData: CityMuslimCommunityData = {
  citySlug: 'pittsburgh',
  cityName: 'Pittsburgh',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 1.1,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Lebanon', 'Syria'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Turkey', 'Uzbek', 'converts'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Center of Pittsburgh',
        address: '4100 Bigelow Blvd, North Oakland',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1989,
        features: ['600-700 Friday attendees', 'Serves Western PA, Eastern OH, Northern WV', 'Youth center', 'Convert support'],
      },
      {
        name: 'Light of the Age Mosque',
        address: '1320 Boyle St, Pittsburgh',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community services'],
      },
      {
        name: 'Muslim Association of Greater Pittsburgh (MAP)',
        address: 'North Hills area',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2010,
        features: ['Serves North Hills families'],
      },
    ],
    jummahInfo: 'Multiple options throughout Pittsburgh',
    eidLocations: ['Large mosques'],
    qiblaDirection: 57,
  },

  halalFood: {
    restaurantCount: 40,
    topRestaurants: [
      { name: "Grandma B's", cuisine: 'American', priceRange: '$', neighborhood: 'Pittsburgh', specialty: 'Home cooking', halalCertified: true },
      { name: 'Lahore Spice', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Pittsburgh', specialty: 'Pakistani', halalCertified: true },
      { name: 'Piyola', cuisine: 'Uzbek', priceRange: '$$', neighborhood: 'Pittsburgh', specialty: 'Uzbek halal (opened 2024)', halalCertified: true },
      { name: 'Shahs Halal', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: '412 Semple St', specialty: 'Street food', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Oakland', 'East Liberty'],
    bestCuisines: ['Middle Eastern', 'South Asian', 'Uzbek', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Oakland',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'University area with student Muslim population',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['ICP Sunday school'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Carnegie Mellon University', 'University of Pittsburgh'],
  },

  travelInfo: {
    airport: {
      airportCode: 'PIT',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'Oakland hotels'],
    touristMosques: ['Islamic Center of Pittsburgh'],
  },

  communityResources: {
    islamicCenters: ['ICP', 'MAP'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support through ICP'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Pennsylvania civil rights laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICP - one of biggest mosques in Pittsburgh',
    'Strong university student Muslim presence',
    'Piyola restaurant - new Uzbek halal (2024)',
    'Serves tri-state area (PA, OH, WV)',
  ],

  visitorTips: [
    'Oakland area near universities has halal options',
    'ICP located in North Oakland',
    'Affordable city to visit',
  ],

  expatTips: [
    'Affordable cost of living',
    'Strong university research jobs',
    'Growing tech sector',
  ],
};

// San Antonio, TX
export const sanAntonioData: CityMuslimCommunityData = {
  citySlug: 'san-antonio',
  cityName: 'San Antonio',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 30000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Lebanon', 'Syria'] },
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Hispanic converts', percentage: 15, countries: ['Mexico', 'USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Center of San Antonio (ICSA)',
        address: '8638 Fairhaven, San Antonio, TX 78229',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1993,
        features: ['First center of its kind in San Antonio', 'Serves diverse community'],
      },
      {
        name: 'Northside Islamic Center of San Antonio (NICSA)',
        address: 'North San Antonio, TX',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2019,
        features: ['7.25 acre property for future masjid', 'Serves northern San Antonio'],
      },
      {
        name: 'Muslim Center of San Antonio',
        address: '10915 FM-1560, Helotes, TX 78023',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Comprehensive prayer schedules', 'Community hub'],
      },
    ],
    jummahInfo: 'Multiple options throughout San Antonio',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 44,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [
      { name: 'Azro', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'San Antonio', specialty: 'Afghan cuisine', halalCertified: true },
      { name: "Mighty Mo's", cuisine: 'American', priceRange: '$', neighborhood: 'San Antonio', specialty: 'Burgers', halalCertified: true },
      { name: 'Kababchi Grill', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'San Antonio', specialty: 'Kababs', halalCertified: true },
      { name: 'Abu Omar Halal', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'San Antonio', specialty: 'Middle Eastern', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets'],
    halalNeighborhoods: ['Near ICSA', 'North San Antonio'],
    bestCuisines: ['Middle Eastern', 'Afghan', 'South Asian', 'Mexican halal'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub', 'Zabihah'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near ICSA',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'Area around main Islamic center',
      safetyRating: 8,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['UTSA', 'Trinity University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SAT',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['River Walk hotels'],
    touristMosques: ['ICSA'],
  },

  communityResources: {
    islamicCenters: ['ICSA', 'NICSA', 'Muslim Center of San Antonio'],
    advocacyOrgs: ['Local organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community outreach programs'],
    converts: ['Convert support available'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Texas employment laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
  },

  prayerTimesInfo: {
    fajrRange: '5:00 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICSA - first of its kind in San Antonio (1993)',
    'Growing Muslim community with outreach programs',
    'NICSA building new masjid on 7.25 acres',
    'Military city with Muslim servicemembers',
  ],

  visitorTips: [
    'Use Zabihah for halal restaurants',
    'River Walk tourist area',
    'Alamo and other historic sites',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Growing community',
    'No state income tax',
    'Military-friendly city',
  ],
};

// US Tier 3 Cities

// New Orleans, LA
export const newOrleansData: CityMuslimCommunityData = {
  citySlug: 'new-orleans',
  cityName: 'New Orleans',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 15000, percentage: 1.2, yearEstimate: 2024, source: 'Local estimates', trend: 'stable' },
  ethnicBreakdown: [
    { group: 'African American', percentage: 35, countries: ['USA'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Lebanon'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India'] },
    { group: 'Other', percentage: 15, countries: ['Indonesia', 'converts'] },
  ],
  mosques: {
    totalCount: 5,
    majorMosques: [
      { name: 'Masjid Al-Salam', address: 'New Orleans, LA', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community center'] },
    ],
    jummahInfo: 'Multiple options available', eidLocations: ['Large mosques'], qiblaDirection: 48,
  },
  halalFood: { restaurantCount: 30, topRestaurants: [], halalGroceryStores: ['Local halal markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'South Asian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'low', dominantEthnicities: ['Mixed'], mosqueCount: 2, halalRestaurantCount: 10, description: 'Small but growing community', safetyRating: 6, affordability: 'moderate', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Limited'], universitiesWithMSA: ['Tulane', 'Loyola'] },
  travelInfo: { airport: { airportCode: 'MSY', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['French Quarter hotels'], touristMosques: ['Masjid Al-Salam'] },
  communityResources: { islamicCenters: ['Local centers'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 6, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'low', legalProtections: ['Louisiana laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '5:00 AM - 6:15 AM', ramadanFastingHours: '13-15 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Jazz city with small Muslim community', 'Growing halal food scene', 'Unique Southern culture'],
  visitorTips: ['Halal options available but limited', 'Famous for tourism', 'Use Zabihah for restaurants'],
  expatTips: ['Small community', 'Unique culture', 'Affordable cost of living'],
};

// Salt Lake City, UT
export const saltLakeCityData: CityMuslimCommunityData = {
  citySlug: 'salt-lake-city',
  cityName: 'Salt Lake City',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 15000, percentage: 1.2, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Iraq'] },
    { group: 'African', percentage: 25, countries: ['Somalia', 'Sudan'] },
    { group: 'Other', percentage: 20, countries: ['Bosnia', 'converts'] },
  ],
  mosques: {
    totalCount: 6,
    majorMosques: [
      { name: 'Islamic Society of Greater Salt Lake', address: 'Salt Lake City, UT', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Main mosque for SLC'] },
    ],
    jummahInfo: 'Multiple options', eidLocations: ['Large mosques'], qiblaDirection: 35,
  },
  halalFood: { restaurantCount: 40, topRestaurants: [], halalGroceryStores: ['Various halal markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Pakistani'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['South Asian', 'Arab'], mosqueCount: 3, halalRestaurantCount: 15, description: 'Growing refugee community', safetyRating: 8, affordability: 'moderate', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Utah'] },
  travelInfo: { airport: { airportCode: 'SLC', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['Islamic Society'] },
  communityResources: { islamicCenters: ['Islamic Society of Greater Salt Lake'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 8, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['Utah laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:00 AM - 6:00 AM', ramadanFastingHours: '15-18 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Growing refugee community', 'Predominantly LDS region but welcoming', 'Outdoor recreation hub'],
  visitorTips: ['Ski resorts nearby', 'Growing halal options', 'Friendly community'],
  expatTips: ['Growing job market', 'Family-friendly', 'Outdoor lifestyle'],
};

// Honolulu, HI
export const honoluluData: CityMuslimCommunityData = {
  citySlug: 'honolulu',
  cityName: 'Honolulu',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 5000, percentage: 0.5, yearEstimate: 2024, source: 'Local estimates', trend: 'stable' },
  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Southeast Asian', percentage: 30, countries: ['Philippines', 'Indonesia'] },
    { group: 'Arab', percentage: 20, countries: ['Various'] },
    { group: 'Other', percentage: 15, countries: ['converts'] },
  ],
  mosques: {
    totalCount: 3,
    majorMosques: [
      { name: 'Muslim Association of Hawaii', address: 'Honolulu, HI', type: 'islamic-center', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['12:30 PM'], features: ['Main mosque in Hawaii'] },
    ],
    jummahInfo: 'Limited options', eidLocations: ['Mosques'], qiblaDirection: 260,
  },
  halalFood: { restaurantCount: 15, topRestaurants: [], halalGroceryStores: ['Limited halal markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'low', dominantEthnicities: ['Mixed'], mosqueCount: 1, halalRestaurantCount: 5, description: 'Small island community', safetyRating: 9, affordability: 'expensive', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Limited'], hifzPrograms: ['Very limited'], universitiesWithMSA: ['University of Hawaii'] },
  travelInfo: { airport: { airportCode: 'HNL', hasPrayerRoom: true, location: 'Interfaith area', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Waikiki hotels'], touristMosques: ['Muslim Association of Hawaii'] },
  communityResources: { islamicCenters: ['Muslim Association of Hawaii'], advocacyOrgs: [], charities: [], socialGroups: ['Small community'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 9, hijabAcceptance: 8, niqabAcceptance: 6, beardAcceptance: 8, islamophobiaLevel: 'low', legalProtections: ['Hawaii laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Limited'], muslimFuneralServices: ['Limited'] },
  prayerTimesInfo: { fajrRange: '5:00 AM - 6:30 AM', ramadanFastingHours: '12-14 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Small but welcoming Muslim community', 'Paradise destination', 'Very safe and accepting'],
  visitorTips: ['Plan ahead for halal food', 'Bring supplies', 'Beautiful beaches'],
  expatTips: ['Very small community', 'Expensive cost of living', 'Island lifestyle'],
};

// Jacksonville, FL
export const jacksonvilleData: CityMuslimCommunityData = {
  citySlug: 'jacksonville',
  cityName: 'Jacksonville',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 25000, percentage: 1.5, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Egypt', 'Yemen'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Somalia', 'Turkey'] },
  ],
  mosques: {
    totalCount: 8,
    majorMosques: [
      { name: 'Islamic Center of Northeast Florida (ICNEF)', address: 'Jacksonville, FL', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English', 'Urdu'], hasWomensSection: true, jummahTimes: ['1:00 PM', '1:30 PM'], features: ['Largest in Northeast FL', 'Religious, educational, social services'] },
      { name: 'Baymeadows Islamic Center (BIC)', address: 'Near I-95, Jacksonville', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Near I-95 for travelers'] },
      { name: 'Jacksonville Masjid of Al-Islam', address: 'Jacksonville, FL', type: 'masjid', size: 'medium', ethnicFocus: 'African American', languages: ['English', 'Arabic'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community center'] },
    ],
    jummahInfo: 'Multiple options throughout Jacksonville', eidLocations: ['Large mosques'], qiblaDirection: 56,
  },
  halalFood: { restaurantCount: 50, topRestaurants: [
    { name: 'Yafa Grill', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Jacksonville', specialty: 'Mediterranean', halalCertified: true },
    { name: "Hala's Mideast Eatery and Market", cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Jacksonville', specialty: 'Gyros and buffet', halalCertified: true },
    { name: 'Halal China Box', cuisine: 'Chinese', priceRange: '$', neighborhood: 'Jacksonville', specialty: 'Halal Chinese fusion', halalCertified: true },
    { name: 'Ruz Bukhari', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Jacksonville', specialty: 'Bukhari rice', halalCertified: true },
  ], halalGroceryStores: ['Fresh Meats Jacksonville', "K & Y Imports", "Hala's Market"], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Mediterranean', 'Indian', 'Pakistani'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'South Asian'], mosqueCount: 4, halalRestaurantCount: 20, description: 'Growing Muslim community', safetyRating: 7, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['ICNEF programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of North Florida', 'Jacksonville University'] },
  travelInfo: { airport: { airportCode: 'JAX', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['ICNEF'] },
  communityResources: { islamicCenters: ['ICNEF', 'BIC'], advocacyOrgs: ['CAIR-Florida'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['Florida laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '5:00 AM - 6:30 AM', ramadanFastingHours: '12-14 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['ICNEF - central hub', 'BIC convenient for highway travelers', 'Growing halal Chinese options'],
  visitorTips: ['BIC near I-95 for travelers', 'Growing halal food scene', 'Beach destination'],
  expatTips: ['Affordable cost of living', 'Growing community', 'Good job market'],
};

// Cincinnati, OH
export const cincinnatiData: CityMuslimCommunityData = {
  citySlug: 'cincinnati',
  cityName: 'Cincinnati',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 25000, percentage: 1.2, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Iraq', 'Yemen'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Somalia', 'converts'] },
  ],
  mosques: {
    totalCount: 10,
    majorMosques: [
      { name: 'Islamic Center of Greater Cincinnati (ICGC)', address: 'Cincinnati, OH', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English', 'Urdu'], hasWomensSection: true, jummahTimes: ['1:00 PM', '1:30 PM'], features: ['Beautiful facility', 'Helpful programs', 'Community events'] },
      { name: 'Clifton Mosque', address: 'Clifton, Cincinnati', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Historic area'] },
    ],
    jummahInfo: 'Multiple options throughout Cincinnati', eidLocations: ['Large mosques'], qiblaDirection: 53,
  },
  halalFood: { restaurantCount: 40, topRestaurants: [
    { name: 'Al Madina Grill', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Cincinnati', specialty: 'Middle Eastern', halalCertified: true },
    { name: 'Afghan Grill', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'Cincinnati', specialty: 'Afghan cuisine', halalCertified: true },
    { name: 'Truva Turkish Kitchen', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Cincinnati', specialty: 'Turkish', halalCertified: true },
  ], halalGroceryStores: ['Local halal markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Turkish', 'Indian', 'Afghan'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'South Asian'], mosqueCount: 4, halalRestaurantCount: 15, description: 'Diverse Muslim community', safetyRating: 7, affordability: 'affordable', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['ICGC programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Cincinnati', 'Xavier University'] },
  travelInfo: { airport: { airportCode: 'CVG', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['ICGC'] },
  communityResources: { islamicCenters: ['ICGC'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['Ohio laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:30 AM - 6:15 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Beautiful ICGC facility', 'Strong community programs', 'German-Catholic heritage city with Muslim diversity'],
  visitorTips: ['ICGC well-regarded', 'Good Middle Eastern food', 'Affordable city'],
  expatTips: ['Affordable cost of living', 'Growing community', 'Strong healthcare sector'],
};

// Hartford, CT
export const hartfordData: CityMuslimCommunityData = {
  citySlug: 'hartford',
  cityName: 'Hartford',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 20000, percentage: 2.0, yearEstimate: 2024, source: 'Connecticut Muslim Coalition', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Syria', 'Lebanon'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Somalia', 'Bosnia'] },
  ],
  mosques: {
    totalCount: 8,
    majorMosques: [
      { name: 'Islamic Association of Greater Hartford (IAGH)', address: 'Hartford area, CT', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], established: 1960, features: ['One of oldest in CT', 'Spiritual and cultural center'] },
      { name: 'Masjid Al-Madina', address: 'South Hartford', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community center'] },
    ],
    jummahInfo: 'Multiple options', eidLocations: ['Large mosques'], qiblaDirection: 58,
  },
  halalFood: { restaurantCount: 35, topRestaurants: [
    { name: "Shah's Halal Food", cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Orange', specialty: 'Street food', halalCertified: true },
    { name: "Aladdin's", cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Hartford', specialty: 'Lebanese', halalCertified: true },
  ], halalGroceryStores: ['Farmington Halal Meat Market', 'Hartford Halal Market'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Lebanese', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'South Asian'], mosqueCount: 4, halalRestaurantCount: 15, description: 'Growing Muslim community', safetyRating: 7, affordability: 'moderate', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['IAGH programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Hartford', 'Trinity College'] },
  travelInfo: { airport: { airportCode: 'BDL', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['IAGH'] },
  communityResources: { islamicCenters: ['IAGH', 'Connecticut Muslim Coalition'], advocacyOrgs: ['Connecticut Muslim Coalition'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 8, niqabAcceptance: 6, beardAcceptance: 8, islamophobiaLevel: 'low', legalProtections: ['Connecticut laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:00 AM - 6:00 AM', ramadanFastingHours: '15-17 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['IAGH established 1960s', '~100,000 Muslims in Connecticut', 'Growing halal food scene', "Shah's Halal expanding"],
  visitorTips: ['Growing halal options', 'Near NYC for more resources', 'Good community'],
  expatTips: ['Near major cities', 'Good insurance industry jobs', 'Strong community'],
};

// Providence, RI
export const providenceData: CityMuslimCommunityData = {
  citySlug: 'providence',
  cityName: 'Providence',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 12000, percentage: 1.5, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 35, countries: ['Lebanon', 'Syria', 'Palestine'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Somalia', 'converts'] },
  ],
  mosques: {
    totalCount: 5,
    majorMosques: [
      { name: 'Masjid Al-Kareem (Islamic Center of Rhode Island)', address: '39 Haskins St, Providence, RI 02903', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], established: 1977, features: ['First masjid in Rhode Island'] },
      { name: 'Masjid Ar-Razzaq', address: '1148 Broad St, Providence', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community center'] },
    ],
    jummahInfo: 'Multiple options', eidLocations: ['Large mosques'], qiblaDirection: 58,
  },
  halalFood: { restaurantCount: 25, topRestaurants: [
    { name: "Shah's Halal Food", cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Thayer Street', specialty: 'Street food', halalCertified: true },
    { name: 'Al-Shami', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Providence', specialty: 'Middle Eastern', halalCertified: true },
  ], halalGroceryStores: ['Local halal markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Indian', 'Pakistani'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'South Asian'], mosqueCount: 3, halalRestaurantCount: 10, description: 'Small but vibrant community', safetyRating: 7, affordability: 'moderate', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['Brown University', 'RISD', 'Providence College'] },
  travelInfo: { airport: { airportCode: 'PVD', hasPrayerRoom: true, location: 'Interfaith area', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['Masjid Al-Kareem'] },
  communityResources: { islamicCenters: ['Islamic Center of Rhode Island', 'Muslim American Dawah Center of RI'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['Brown-RISD Muslim Community'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 8, niqabAcceptance: 6, beardAcceptance: 8, islamophobiaLevel: 'low', legalProtections: ['Rhode Island laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:00 AM - 6:00 AM', ramadanFastingHours: '15-17 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Masjid Al-Kareem - first in RI (1977)', 'Ivy League Muslim community (Brown)', 'Interfaith dialogue active'],
  visitorTips: ['Near Boston for more options', 'Good university community', 'Growing halal scene'],
  expatTips: ['Strong university presence', 'Near Boston job market', 'Small but tight community'],
};

// Buffalo, NY
export const buffaloData: CityMuslimCommunityData = {
  citySlug: 'buffalo',
  cityName: 'Buffalo',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 25000, percentage: 2.0, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Yemen', 'Iraq'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Somalia', 'Burma', 'converts'] },
  ],
  mosques: {
    totalCount: 8,
    majorMosques: [
      { name: 'Islamic Society of Niagara Frontier', address: 'Buffalo, NY', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM', '1:30 PM'], features: ['Central mosque'] },
      { name: 'Jami Masjid', address: 'Buffalo, NY', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community mosque'] },
      { name: 'Masjid Zakariya', address: 'Buffalo, NY', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Educational programs'] },
    ],
    jummahInfo: 'Multiple options', eidLocations: ['Large mosques'], qiblaDirection: 56,
  },
  halalFood: { restaurantCount: 40, topRestaurants: [
    { name: 'Alibaba Kebab', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: '900 William St', specialty: 'Kebabs - huge portions', halalCertified: true },
    { name: 'Al Aqsa Restaurant', cuisine: 'South Asian', priceRange: '$$', neighborhood: 'Buffalo', specialty: 'Biryani and kebabs', halalCertified: true },
    { name: 'Almandi Restaurant', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Buffalo', specialty: 'Middle Eastern', halalCertified: true },
  ], halalGroceryStores: ['Appletree Halal Market'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'South Asian', 'Yemeni'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'South Asian'], mosqueCount: 4, halalRestaurantCount: 20, description: 'Growing refugee community', safetyRating: 7, affordability: 'affordable', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['University at Buffalo', 'Buffalo State'] },
  travelInfo: { airport: { airportCode: 'BUF', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['Islamic Society of Niagara Frontier'] },
  communityResources: { islamicCenters: ['Islamic Society of Niagara Frontier', 'Service and Mercy Alliance'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['WNY Muslims'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['New York laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:00 AM - 6:15 AM', ramadanFastingHours: '15-18 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Growing refugee community', 'Niagara Falls nearby', 'Affordable city', 'WNYMuslim.org resource'],
  visitorTips: ['Visit Niagara Falls', 'Good halal food scene', 'Use WNYMuslim.org for resources'],
  expatTips: ['Very affordable', 'Growing job market', 'Strong refugee support network'],
};

// Rochester, NY
export const rochesterData: CityMuslimCommunityData = {
  citySlug: 'rochester',
  cityName: 'Rochester',
  country: 'United States',
  lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 20000, percentage: 1.8, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Yemen', 'Iraq'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India'] },
    { group: 'Somali', percentage: 20, countries: ['Somalia'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Bosnia', 'converts'] },
  ],
  mosques: {
    totalCount: 8,
    majorMosques: [
      { name: 'Islamic Center of Rochester (ICR)', address: 'Westfall Road, Rochester, NY', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM', '1:30 PM'], features: ['Main community hub', 'Inclusive community'] },
      { name: 'Masjid AbuBakr Al-Seddiq', address: 'Hudson Avenue, Rochester', type: 'masjid', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Community mosque'] },
      { name: 'Bosnia and Herzegovina Cultural Center (BHCC)', address: 'Rochester, NY', type: 'islamic-center', size: 'medium', ethnicFocus: 'Bosnian', languages: ['Bosnian', 'English', 'Arabic'], hasWomensSection: true, jummahTimes: ['1:00 PM'], established: 2016, features: ['Bosnian community', 'English services'] },
      { name: 'Al-Rahman Mosque', address: 'Rochester, NY', type: 'masjid', size: 'small', ethnicFocus: 'Multi-ethnic', languages: ['English', 'Arabic'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['All-English services', 'Inclusive'] },
    ],
    jummahInfo: 'Multiple options', eidLocations: ['Large mosques'], qiblaDirection: 56,
  },
  halalFood: { restaurantCount: 35, topRestaurants: [
    { name: 'Halal-N-Out', cuisine: 'Middle Eastern/American', priceRange: '$', neighborhood: '740 East Ridge Rd', specialty: 'NYC street food, rice plates', halalCertified: true },
    { name: "Berlin's Halal Doner", cuisine: 'Turkish', priceRange: '$', neighborhood: 'Rochester', specialty: 'Doner kebab', halalCertified: true },
    { name: 'As Evi Turkish Cuisine', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Rochester', specialty: 'Turkish', halalCertified: true },
  ], halalGroceryStores: ['International Food Market & Cafe'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Turkish', 'Pakistani', 'Yemeni'], foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'] },
  muslimNeighborhoods: [{ name: 'Various areas', muslimPopulation: 'medium', dominantEthnicities: ['Arab', 'Somali', 'South Asian'], mosqueCount: 4, halalRestaurantCount: 15, description: 'Diverse immigrant community', safetyRating: 7, affordability: 'affordable', publicTransport: 'good' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['ICR programs'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Rochester', 'RIT'] },
  travelInfo: { airport: { airportCode: 'ROC', hasPrayerRoom: true, location: 'Interfaith chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown hotels'], touristMosques: ['ICR'] },
  communityResources: { islamicCenters: ['ICR', 'BHCC'], advocacyOrgs: ['Local groups'], charities: ['Local'], socialGroups: ['Community groups'], converts: ['Convert support'] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['New York laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:00 AM - 6:15 AM', ramadanFastingHours: '15-18 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['ICR - inclusive community hub', 'Halal-N-Out popular', 'BHCC for Bosnian community', 'Growing Somali community'],
  visitorTips: ['ICR welcoming to visitors', 'Good halal food options', 'Affordable city'],
  expatTips: ['Very affordable', 'Strong universities', 'Diverse Muslim community'],
};

// Remaining Tier 3 cities with basic data
export const albuquerqueData: CityMuslimCommunityData = {
  citySlug: 'albuquerque', cityName: 'Albuquerque', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 10000, percentage: 1.0, yearEstimate: 2024, source: 'Local estimates', trend: 'stable' },
  ethnicBreakdown: [{ group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India'] }, { group: 'Arab', percentage: 30, countries: ['Palestine', 'Egypt'] }, { group: 'Other', percentage: 35, countries: ['Africa', 'converts'] }],
  mosques: { totalCount: 5, majorMosques: [{ name: 'Islamic Center of New Mexico', address: 'Albuquerque, NM', type: 'islamic-center', size: 'medium', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Main mosque'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques'], qiblaDirection: 42 },
  halalFood: { restaurantCount: 20, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various', muslimPopulation: 'low', dominantEthnicities: ['Mixed'], mosqueCount: 2, halalRestaurantCount: 8, description: 'Small community', safetyRating: 7, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Limited'], universitiesWithMSA: ['UNM'] },
  travelInfo: { airport: { airportCode: 'ABQ', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Islamic Center'] },
  communityResources: { islamicCenters: ['Islamic Center of NM'], advocacyOrgs: [], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'low', legalProtections: ['NM laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Limited'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:30 AM - 6:00 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Southwest culture', 'Small welcoming community'], visitorTips: ['Plan ahead for halal food'], expatTips: ['Affordable living'],
};

export const tucsonData: CityMuslimCommunityData = {
  citySlug: 'tucson', cityName: 'Tucson', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 12000, percentage: 1.1, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [{ group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India'] }, { group: 'Arab', percentage: 30, countries: ['Palestine', 'Syria'] }, { group: 'Other', percentage: 35, countries: ['Africa', 'converts'] }],
  mosques: { totalCount: 6, majorMosques: [{ name: 'Islamic Center of Tucson', address: 'Tucson, AZ', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['University adjacent'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques'], qiblaDirection: 38 },
  halalFood: { restaurantCount: 25, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Near university'], bestCuisines: ['Middle Eastern', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Near University', muslimPopulation: 'medium', dominantEthnicities: ['South Asian', 'Arab'], mosqueCount: 3, halalRestaurantCount: 10, description: 'Student community', safetyRating: 8, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Arizona'] },
  travelInfo: { airport: { airportCode: 'TUS', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Islamic Center'] },
  communityResources: { islamicCenters: ['Islamic Center of Tucson'], advocacyOrgs: [], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 8, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'low', legalProtections: ['AZ laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:30 AM - 5:45 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['University town', 'Desert culture'], visitorTips: ['Growing halal options'], expatTips: ['Student-friendly', 'Affordable'],
};

export const oklahomaData: CityMuslimCommunityData = {
  citySlug: 'oklahoma-city', cityName: 'Oklahoma City', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 15000, percentage: 1.1, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [{ group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India'] }, { group: 'Arab', percentage: 25, countries: ['Palestine', 'Iraq'] }, { group: 'African American', percentage: 25, countries: ['USA'] }, { group: 'Other', percentage: 15, countries: ['Somalia', 'converts'] }],
  mosques: { totalCount: 8, majorMosques: [{ name: 'Islamic Society of Oklahoma City', address: 'Oklahoma City, OK', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Main mosque'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques'], qiblaDirection: 42 },
  halalFood: { restaurantCount: 30, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various', muslimPopulation: 'medium', dominantEthnicities: ['South Asian', 'Arab'], mosqueCount: 4, halalRestaurantCount: 15, description: 'Growing community', safetyRating: 7, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['OU', 'OSU'] },
  travelInfo: { airport: { airportCode: 'OKC', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Islamic Society'] },
  communityResources: { islamicCenters: ['Islamic Society of OKC'], advocacyOrgs: [], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 6, niqabAcceptance: 4, beardAcceptance: 6, islamophobiaLevel: 'moderate', legalProtections: ['OK laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:45 AM - 6:00 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Growing community', 'Affordable living'], visitorTips: ['Growing halal options'], expatTips: ['Very affordable', 'Friendly community'],
};

export const louisvilleData: CityMuslimCommunityData = {
  citySlug: 'louisville', cityName: 'Louisville', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 25000, percentage: 2.0, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [{ group: 'Somali', percentage: 25, countries: ['Somalia'] }, { group: 'Bosnian', percentage: 25, countries: ['Bosnia'] }, { group: 'Arab', percentage: 20, countries: ['Palestine', 'Iraq'] }, { group: 'South Asian', percentage: 15, countries: ['Pakistan', 'India'] }, { group: 'Other', percentage: 15, countries: ['Afghanistan', 'converts'] }],
  mosques: { totalCount: 10, majorMosques: [{ name: 'Louisville Islamic Center', address: 'Louisville, KY', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English', 'Somali', 'Bosnian'], hasWomensSection: true, jummahTimes: ['1:00 PM', '1:30 PM'], features: ['Diverse community'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques', 'Convention centers'], qiblaDirection: 52 },
  halalFood: { restaurantCount: 40, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Somali', 'Bosnian', 'Middle Eastern'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various', muslimPopulation: 'medium', dominantEthnicities: ['Somali', 'Bosnian'], mosqueCount: 5, halalRestaurantCount: 20, description: 'Strong refugee community', safetyRating: 7, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Louisville'] },
  travelInfo: { airport: { airportCode: 'SDF', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Louisville Islamic Center'] },
  communityResources: { islamicCenters: ['Louisville Islamic Center'], advocacyOrgs: ['CAIR-KY'], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['KY laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:30 AM - 6:00 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Strong Somali community', 'Large Bosnian population', 'Kentucky Derby city'], visitorTips: ['Good Somali and Bosnian food'], expatTips: ['Affordable', 'Strong refugee networks'],
};

export const memphisData: CityMuslimCommunityData = {
  citySlug: 'memphis', cityName: 'Memphis', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 20000, percentage: 1.5, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [{ group: 'African American', percentage: 35, countries: ['USA'] }, { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India'] }, { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt'] }, { group: 'Other', percentage: 15, countries: ['Somalia', 'converts'] }],
  mosques: { totalCount: 8, majorMosques: [{ name: 'Memphis Islamic Center', address: 'Memphis, TN', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Main community mosque'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques'], qiblaDirection: 50 },
  halalFood: { restaurantCount: 35, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'South Asian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various', muslimPopulation: 'medium', dominantEthnicities: ['African American', 'Arab'], mosqueCount: 4, halalRestaurantCount: 15, description: 'Growing community', safetyRating: 6, affordability: 'affordable', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['University of Memphis'] },
  travelInfo: { airport: { airportCode: 'MEM', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Memphis Islamic Center'] },
  communityResources: { islamicCenters: ['Memphis Islamic Center'], advocacyOrgs: [], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 6, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['TN laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:45 AM - 6:00 AM', ramadanFastingHours: '13-15 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['Music city history', 'Growing community'], visitorTips: ['Beale Street tourism', 'Growing halal options'], expatTips: ['Very affordable', 'FedEx headquarters'],
};

export const richmondData: CityMuslimCommunityData = {
  citySlug: 'richmond', cityName: 'Richmond', country: 'United States', lastUpdated: '2024-12-09',
  muslimPopulation: { estimate: 18000, percentage: 1.4, yearEstimate: 2024, source: 'Local estimates', trend: 'growing' },
  ethnicBreakdown: [{ group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India'] }, { group: 'Arab', percentage: 25, countries: ['Palestine', 'Syria'] }, { group: 'African American', percentage: 25, countries: ['USA'] }, { group: 'Other', percentage: 20, countries: ['Somalia', 'converts'] }],
  mosques: { totalCount: 8, majorMosques: [{ name: 'Islamic Center of Virginia', address: 'Richmond, VA', type: 'islamic-center', size: 'large', ethnicFocus: 'Multi-ethnic', languages: ['Arabic', 'English'], hasWomensSection: true, jummahTimes: ['1:00 PM'], features: ['Main mosque'] }], jummahInfo: 'Multiple options', eidLocations: ['Mosques'], qiblaDirection: 56 },
  halalFood: { restaurantCount: 30, topRestaurants: [], halalGroceryStores: ['Local markets'], halalNeighborhoods: ['Various'], bestCuisines: ['Middle Eastern', 'Indian'], foodDeliveryApps: ['Uber Eats', 'DoorDash'] },
  muslimNeighborhoods: [{ name: 'Various', muslimPopulation: 'medium', dominantEthnicities: ['South Asian', 'Arab'], mosqueCount: 4, halalRestaurantCount: 12, description: 'Growing community', safetyRating: 7, affordability: 'moderate', publicTransport: 'limited' }],
  islamicEducation: { fullTimeSchools: [], weekendPrograms: ['Mosque-based'], hifzPrograms: ['Available'], universitiesWithMSA: ['VCU', 'University of Richmond'] },
  travelInfo: { airport: { airportCode: 'RIC', hasPrayerRoom: true, location: 'Chapel', is24Hours: false, hasWuduFacility: false }, recommendedHotels: ['Downtown'], touristMosques: ['Islamic Center of Virginia'] },
  communityResources: { islamicCenters: ['Islamic Center of Virginia'], advocacyOrgs: [], charities: [], socialGroups: [], converts: [] },
  safetyInfo: { overallSafety: 7, hijabAcceptance: 7, niqabAcceptance: 5, beardAcceptance: 7, islamophobiaLevel: 'moderate', legalProtections: ['VA laws'] },
  islamicServices: { hasIslamicBanking: false, muslimDoctors: true, halalCatering: ['Available'], muslimFuneralServices: ['Available'] },
  prayerTimesInfo: { fajrRange: '4:30 AM - 6:00 AM', ramadanFastingHours: '14-16 hours', calculationMethod: 'ISNA' },
  uniqueFeatures: ['State capital', 'Historic city'], visitorTips: ['Near DC for more options'], expatTips: ['Government jobs', 'Near DC market'],
};

// Export all US Tier 2 and Tier 3 cities data
export const usTier2CitiesData: Record<string, CityMuslimCommunityData> = {
  'miami': miamiData,
  'denver': denverData,
  'las-vegas': lasVegasData,
  'orlando': orlandoData,
  'austin': austinData,
  'portland': portlandData,
  'charlotte': charlotteData,
  'nashville': nashvilleData,
  'indianapolis': indianapolisData,
  'columbus': columbusData,
  'cleveland': clevelandData,
  'st-louis': stLouisData,
  'baltimore': baltimoreData,
  'tampa': tampaData,
  'raleigh': raleighData,
  'kansas-city': kansasCityData,
  'milwaukee': milwaukeeData,
  'sacramento': sacramentoData,
  'pittsburgh': pittsburghData,
  'san-antonio': sanAntonioData,
  // Tier 3 cities
  'new-orleans': newOrleansData,
  'salt-lake-city': saltLakeCityData,
  'honolulu': honoluluData,
  'jacksonville': jacksonvilleData,
  'cincinnati': cincinnatiData,
  'hartford': hartfordData,
  'providence': providenceData,
  'buffalo': buffaloData,
  'rochester': rochesterData,
  'albuquerque': albuquerqueData,
  'tucson': tucsonData,
  'oklahoma-city': oklahomaData,
  'louisville': louisvilleData,
  'memphis': memphisData,
  'richmond': richmondData,
};
