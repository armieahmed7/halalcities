// US Tier 3 Cities Muslim Community Research Data
// Research compiled December 2024

import { CityMuslimCommunityData } from '../muslim-community-data';

export const newOrleansData: CityMuslimCommunityData = {
  citySlug: 'new-orleans',
  cityName: 'New Orleans',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 15000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local community estimates / Jefferson Muslim Association',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'African American', percentage: 35, countries: ['USA'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Lebanon', 'Egypt', 'Syria'] },
    { group: 'South Asian', percentage: 20, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Southeast Asian', percentage: 10, countries: ['Indonesia', 'Malaysia'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Masjid Abu Bakr Al-Siddiq',
        address: '4425 David Drive, Metairie, LA 70003',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1988,
        features: ['Purpose-built mosque', 'Dome and minaret', 'Star-shaped skylight', 'Survived Hurricane Katrina'],
      },
      {
        name: 'Islamic Center of New Orleans',
        address: 'Gentilly, New Orleans, LA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'African American/Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1960,
        features: ['Oldest in area', 'Community rooms', 'Near French Quarter'],
      },
      {
        name: 'Masjid Omar Mosque',
        address: 'Harvey, LA',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Uptown Masjid al-Rahma',
        address: 'Uptown, New Orleans, LA',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1983,
      },
    ],
    jummahInfo: 'Friday prayers typically at 1:00 PM across most mosques',
    eidLocations: ['Jefferson Muslim Association grounds', 'Various mosque locations'],
    qiblaDirection: 48,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [
      { name: 'Lebanon\'s Cafe', cuisine: 'Lebanese/Mediterranean', priceRange: '$$', neighborhood: 'Uptown', specialty: 'Mediterranean plates', halalCertified: true },
      { name: '1000 Figs', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Fair Grounds', specialty: 'Falafel, Spiced Chicken', halalCertified: true },
      { name: 'Sultan\'s Shawarma Shack', cuisine: 'Lebanese', priceRange: '$', neighborhood: 'Various', specialty: 'Chicken Shawarma', halalCertified: true },
      { name: 'Cleo\'s', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'French Quarter', specialty: 'Lamb platters, Late-night eats', halalCertified: true },
      { name: 'Anatolia Mediterranean Cuisine', cuisine: 'Turkish/Mediterranean', priceRange: '$$', neighborhood: 'Magazine Street', specialty: 'Beyti Kabab', halalCertified: true },
      { name: 'Meero\'s Kitchen', cuisine: 'American Halal', priceRange: '$$', neighborhood: 'Harvey', specialty: 'Halal Burgers', halalCertified: true },
    ],
    halalGroceryStores: ['Kased International Market', 'Crescent City Halal', 'Various Middle Eastern shops'],
    halalNeighborhoods: ['Kenner', 'Metairie', 'Harvey', 'Gretna', 'Westbank'],
    bestCuisines: ['Lebanese', 'Mediterranean', 'Palestinian', 'American Halal'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Kenner/Metairie',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 2,
      halalRestaurantCount: 15,
      description: 'Main Muslim hub with the largest purpose-built mosque in the area',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Westbank (Harvey/Gretna)',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'Palestinian'],
      mosqueCount: 2,
      halalRestaurantCount: 12,
      description: 'Growing Muslim community with Middle Eastern restaurants and markets',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic School of Greater New Orleans', grades: 'PK-8', type: 'full-time', accredited: true, website: 'https://isgno.net' },
    ],
    weekendPrograms: ['Jefferson Muslim Association weekend programs'],
    hifzPrograms: ['Various mosque-based programs'],
    universitiesWithMSA: ['Tulane University', 'University of New Orleans', 'Loyola University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MSY',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room - seek quiet area',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited - eat before arriving'],
    },
    recommendedHotels: ['Hotels in Kenner near airport', 'French Quarter hotels'],
    touristMosques: ['Masjid Abu Bakr Al-Siddiq', 'Islamic Center of New Orleans'],
  },

  communityResources: {
    islamicCenters: ['Jefferson Muslim Association', 'Islamic Society of Greater New Orleans'],
    advocacyOrgs: ['CAIR Louisiana'],
    charities: ['Islamic Relief USA', 'Local mosque charities'],
    socialGroups: ['Muslim Student Associations'],
    converts: ['New Muslim programs at local mosques'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Louisiana anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local halal restaurants offer catering'],
    muslimFuneralServices: ['Jefferson Muslim Association funeral services'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Only purpose-built mosque in Louisiana (Masjid Abu Bakr Al-Siddiq)',
    'Resilient community that rebuilt after Hurricane Katrina',
    'Unique blend of Southern hospitality with Muslim culture',
    'Growing halal food scene in a famous culinary city',
    'One of the oldest indigenous Islamic centers in the South',
  ],

  visitorTips: [
    'The Westbank has more halal dining options than the French Quarter',
    'Masjid Abu Bakr Al-Siddiq in Metairie is the main community mosque',
    'Bring prayer rugs as quiet spaces may be limited in tourist areas',
    'The Muslim community is spread across suburbs, not concentrated downtown',
    'Many Mediterranean restaurants are Muslim-owned and serve halal meat',
  ],

  expatTips: [
    'Kenner and Metairie offer the most established Muslim community infrastructure',
    'Islamic School of Greater New Orleans is the only full-time Islamic school',
    'Join the Jefferson Muslim Association for community connections',
    'Housing is affordable compared to other major US cities',
    'A car is essential as public transportation is limited',
  ],
};

export const saltLakeCityData: CityMuslimCommunityData = {
  citySlug: 'salt-lake-city',
  cityName: 'Salt Lake City',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 20000,
    percentage: 1.0,
    yearEstimate: 2024,
    source: 'Islamic Society of Greater Salt Lake',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Syria', 'Lebanon', 'Palestine', 'Iraq'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Refugee Communities', percentage: 25, countries: ['Somalia', 'Bosnia', 'Burma'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Society of Salt Lake City (Masjid Al-Noor)',
        address: 'Salt Lake City, UT',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Community hub', 'Educational programs', 'Youth activities'],
      },
      {
        name: 'Utah Islamic Center',
        address: 'West 2100 South, Salt Lake City, UT',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['LDS church donated to construction', 'Community center'],
      },
      {
        name: 'Al-Rasool Islamic Center (AIC)',
        address: 'Salt Lake City, UT',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Shia',
        languages: ['Arabic', 'English', 'Farsi'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1998,
        features: ['Serves 5000+ community members', 'Interfaith programs'],
      },
      {
        name: 'Muslim Community Center',
        address: 'Salt Lake City, UT',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM and 1:30 PM at most mosques',
    eidLocations: ['University of Utah campus', 'Convention centers', 'Large mosques'],
    qiblaDirection: 22,
  },

  halalFood: {
    restaurantCount: 60,
    topRestaurants: [
      { name: 'Shawarma Shack', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Shawarma', halalCertified: true },
      { name: 'Habibi Grill', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Salt Lake City', specialty: 'Biryani, Curries', halalCertified: true },
      { name: 'Shahrazad Market and Restaurant', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'West Salt Lake', specialty: 'Fresh Halal Meat', halalCertified: true },
      { name: 'Curry in a Hurry', cuisine: 'Indian', priceRange: '$', neighborhood: 'Salt Lake City', specialty: 'Chicken Curry', halalCertified: true },
      { name: 'O\'Falafel Etc', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Salt Lake City', specialty: 'Falafel', halalCertified: true },
      { name: 'Afghan Kitchen', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'Salt Lake City', specialty: 'Kabuli Palaw', halalCertified: true },
    ],
    halalGroceryStores: ['Shahrazad Market', 'Halal Meat Market', 'International markets'],
    halalNeighborhoods: ['West Salt Lake', 'University area', 'Rose Park'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Afghan', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'West Salt Lake',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'Somali', 'Bosnian'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'Diverse area with refugee communities and halal markets',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Rose Park',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 5,
      description: 'Growing Muslim community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Madinah School', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Utah Islamic Center weekend school', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Utah', 'Brigham Young University', 'Utah State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SLC',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options in airport'],
    },
    recommendedHotels: ['Downtown hotels', 'Hotels near mosques'],
    touristMosques: ['Utah Islamic Center', 'Islamic Society of Salt Lake City'],
  },

  communityResources: {
    islamicCenters: ['Islamic Society of Greater Salt Lake', 'Utah Islamic Center'],
    advocacyOrgs: ['CAIR Utah chapter', 'Salt Lake Interfaith Roundtable'],
    charities: ['Islamic Relief', 'Local mosque charities'],
    socialGroups: ['Utah Muslim Youth', 'Muslim Professionals'],
    converts: ['New Muslim programs at local mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Utah anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Shahrazad Market', 'Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '13-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Strong interfaith relations with LDS community',
    'LDS church donated to mosque construction',
    'Significant refugee community (Somali, Bosnian, Burmese)',
    'Salt Lake Interfaith Roundtable promotes dialogue',
    'Growing Muslim population despite being in Mormon heartland',
  ],

  visitorTips: [
    'The Muslim community is welcoming to visitors despite the LDS majority',
    'West Salt Lake has the best halal food options',
    'Shahrazad Market is a one-stop shop for halal meat and food',
    'Utah Islamic Center is centrally located and visitor-friendly',
    'Expect very friendly interfaith relations',
  ],

  expatTips: [
    'West Salt Lake is the most affordable area with Muslim infrastructure',
    'The LDS community is generally respectful of Muslims',
    'Join the Islamic Society for community integration',
    'Housing is more affordable than coastal cities',
    'Public transportation (TRAX) is decent for downtown area',
  ],
};

export const honoluluData: CityMuslimCommunityData = {
  citySlug: 'honolulu',
  cityName: 'Honolulu',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 4000,
    percentage: 0.5,
    yearEstimate: 2024,
    source: 'Muslim Association of Hawaii',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Southeast Asian', percentage: 25, countries: ['Indonesia', 'Malaysia', 'Philippines'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Arab', percentage: 15, countries: ['Various'] },
    { group: 'Converts/Other', percentage: 20, countries: ['USA', 'Various'] },
  ],

  mosques: {
    totalCount: 3,
    majorMosques: [
      {
        name: 'Muslim Association of Hawaii (MAH)',
        address: '1935 Aleo Place, Manoa, HI 96822',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM'],
        established: 1979,
        features: ['Only mosque in Hawaii', 'Converted house', 'Serves 4000 Sunni Muslims'],
      },
      {
        name: 'Islamic Center of Hawaii',
        address: 'Honolulu, HI',
        type: 'islamic-center',
        size: 'small',
        ethnicFocus: 'Pakistani',
        languages: ['Urdu', 'English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1971,
      },
      {
        name: 'Ahmadiyya Muslim Community Hawaii',
        address: 'Honolulu, HI',
        type: 'islamic-center',
        size: 'small',
        ethnicFocus: 'Ahmadiyya',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Limited mosques - Friday prayers at 12:30 PM at MAH',
    eidLocations: ['Muslim Association of Hawaii', 'Rented venues'],
    qiblaDirection: 290,
  },

  halalFood: {
    restaurantCount: 25,
    topRestaurants: [
      { name: 'Da Spot', cuisine: 'International/Mediterranean', priceRange: '$$', neighborhood: 'King Street', specialty: 'World flavors, Smoothies', halalCertified: true },
      { name: 'Himalayan Kitchen', cuisine: 'Indian/Nepali', priceRange: '$$', neighborhood: '11th Avenue', specialty: 'Lamb dishes', halalCertified: true },
      { name: 'Amina Pizzeria', cuisine: 'Italian', priceRange: '$$', neighborhood: 'Kalakaua Ave', specialty: 'Halal pizza', halalCertified: true },
      { name: 'Istanbul Hawaii', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Honolulu', specialty: 'Turkish kebabs', halalCertified: true },
      { name: 'Byblos', cuisine: 'Lebanese', priceRange: '$', neighborhood: 'Kalakaua Ave', specialty: 'Shawarma (food truck)', halalCertified: true },
    ],
    halalGroceryStores: ['India Market', 'Don Quijote (some halal items)', 'Asian grocery stores'],
    halalNeighborhoods: ['Manoa', 'Downtown Honolulu'],
    bestCuisines: ['Indian', 'Mediterranean', 'Middle Eastern', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash'],
  },

  muslimNeighborhoods: [
    {
      name: 'Manoa',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 5,
      description: 'Home to the only mosque in Hawaii, near University of Hawaii',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['MAH weekend school'],
    hifzPrograms: ['Limited - private instruction'],
    universitiesWithMSA: ['University of Hawaii at Manoa'],
  },

  travelInfo: {
    airport: {
      airportCode: 'HNL',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Very limited - eat before arriving'],
    },
    recommendedHotels: ['Waikiki hotels', 'Hotels near Manoa'],
    touristMosques: ['Muslim Association of Hawaii'],
    muslimTourOperators: ['None specific - general tour operators'],
  },

  communityResources: {
    islamicCenters: ['Muslim Association of Hawaii'],
    advocacyOrgs: ['Limited local organizations'],
    charities: ['MAH charitable programs'],
    socialGroups: ['University of Hawaii MSA'],
    converts: ['MAH new Muslim support'],
  },

  safetyInfo: {
    overallSafety: 9,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['Hawaii anti-discrimination laws', 'Islam Day recognition (September 24)'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Limited options'],
    muslimFuneralServices: ['MAH coordinates services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '12-14 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Only mosque in all of Hawaii (MAH in Manoa)',
    'Hawaii declared official "Islam Day" on September 24, 2009',
    'Muslims from 36+ countries worship together',
    'Most isolated Muslim community in the US',
    'Very accepting and diverse environment',
  ],

  visitorTips: [
    'There is only ONE mosque in Hawaii - plan ahead for prayers',
    'Download prayer time apps - finding prayer spaces can be challenging',
    'India Market is the main source for halal groceries',
    'Many restaurants serve seafood which is naturally halal',
    'The Aloha spirit extends to Muslims - very welcoming',
    'Call MAH ahead if visiting to ensure prayer times',
  ],

  expatTips: [
    'Housing is extremely expensive - budget accordingly',
    'No full-time Islamic schools - homeschooling or weekend school only',
    'Join MAH immediately for community connections',
    'The small community means everyone knows everyone',
    'Consider proximity to Manoa when choosing housing',
    'Import halal meat or use seafood-based diet',
  ],
};

export const albuquerqueData: CityMuslimCommunityData = {
  citySlug: 'albuquerque',
  cityName: 'Albuquerque',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 10000,
    percentage: 1.8,
    yearEstimate: 2024,
    source: 'Local community estimates / Albuquerque Islamic Center',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Egypt', 'Lebanon', 'Syria'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 8,
    majorMosques: [
      {
        name: 'Islamic Center of New Mexico (ICNM)',
        address: 'Yale Boulevard, Albuquerque, NM',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1986,
        features: ['500+ capacity', 'Dome and minaret', 'Designed by Muslim architect'],
      },
      {
        name: 'Albuquerque Islamic Center',
        address: '8900 Menaul Blvd NE, Albuquerque, NM',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2014,
        features: ['Purchased 2.5 acres for expansion in 2024'],
      },
      {
        name: 'Dar Al-Salam Mosque',
        address: 'San Pedro Drive, Albuquerque, NM',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1990,
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM at most mosques',
    eidLocations: ['Islamic Center of New Mexico', 'Convention centers'],
    qiblaDirection: 33,
  },

  halalFood: {
    restaurantCount: 35,
    topRestaurants: [
      { name: 'Taj Mahal', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Albuquerque', specialty: 'North Indian cuisine', halalCertified: true },
      { name: 'Sahara', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Albuquerque', specialty: 'Large portions', halalCertified: true },
      { name: 'Pars Cuisine', cuisine: 'Persian', priceRange: '$$', neighborhood: 'Albuquerque', specialty: 'Lamb Shank', halalCertified: true },
      { name: 'Mazaya Cafe', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'University area', specialty: 'Mediterranean plates', halalCertified: true },
      { name: 'Alquds Mediterranean Grill', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Albuquerque', specialty: 'Shawarma', halalCertified: true },
    ],
    halalGroceryStores: ['Ariana Halal Market', 'Indian Food & Grocery', 'International markets'],
    halalNeighborhoods: ['Near UNM', 'Northeast Heights'],
    bestCuisines: ['Indian', 'Persian', 'Mediterranean', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Postmates'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near University of New Mexico',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 2,
      halalRestaurantCount: 10,
      description: 'University area with diverse Muslim student population',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Northeast Heights',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian'],
      mosqueCount: 2,
      halalRestaurantCount: 10,
      description: 'Residential area with Muslim families',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['ICNM weekend school', 'Albuquerque Islamic Center programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of New Mexico'],
  },

  travelInfo: {
    airport: {
      airportCode: 'ABQ',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown hotels', 'Hotels near Old Town'],
    touristMosques: ['Islamic Center of New Mexico'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of New Mexico', 'Albuquerque Islamic Center'],
    advocacyOrgs: ['CAIR New Mexico'],
    charities: ['Local mosque charities'],
    socialGroups: ['UNM Muslim Student Association'],
    converts: ['New Muslim programs at mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['New Mexico anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants offer catering'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Muslim community rooted in UNM student population from 1970s',
    'ICNM designed by Muslim architect Tafazzul Hussain',
    'Growing community with new expansion plans',
    'Strong Persian and Middle Eastern restaurant scene',
    'Active interfaith dialogue programs',
  ],

  visitorTips: [
    'Islamic Center of New Mexico is the main mosque and visitor-friendly',
    'The university area has good halal food options',
    'Ariana Halal Market for groceries and fresh halal meat',
    'Pars Cuisine is highly recommended for Persian food',
    'Community is welcoming to visitors',
  ],

  expatTips: [
    'Housing is affordable compared to coastal cities',
    'No full-time Islamic schools - weekend programs only',
    'Join ICNM or Albuquerque Islamic Center for community',
    'Dry climate and high altitude - different from most US cities',
    'University area is good for Muslim families',
  ],
};

export const tucsonData: CityMuslimCommunityData = {
  citySlug: 'tucson',
  cityName: 'Tucson',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 12000,
    percentage: 1.1,
    yearEstimate: 2024,
    source: 'Islamic Center of Tucson estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Egypt', 'Lebanon', 'Palestine', 'Syria'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African/Somali', percentage: 15, countries: ['Somalia', 'Various'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Malaysia', 'Various'] },
  ],

  mosques: {
    totalCount: 8,
    majorMosques: [
      {
        name: 'Islamic Center of Tucson (ICT)',
        address: 'Near University of Arizona, Tucson, AZ',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1980,
        features: ['Serves 700+ for Jummah', 'Near University of Arizona', 'Community programs'],
      },
      {
        name: 'Muslim Community Center Tucson (MCCT)',
        address: 'Tucson, AZ',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['First Muhsen Certified Masjid in Arizona'],
      },
      {
        name: 'Husainiya Center of Tucson (HCT)',
        address: 'Tucson, AZ',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Shia',
        languages: ['Arabic', 'English', 'Farsi'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Refugee support programs', 'Interfaith dialogue'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; ICT often at full capacity',
    eidLocations: ['Islamic Center of Tucson', 'Convention centers'],
    qiblaDirection: 35,
  },

  halalFood: {
    restaurantCount: 30,
    topRestaurants: [
      { name: 'Sinbad Mediterranean', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Tucson', specialty: 'Shawarma', halalCertified: true },
      { name: 'India Oven', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Tucson', specialty: 'Biryani', halalCertified: true },
      { name: 'Kareem\'s Mediterranean Kitchen', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Tucson', specialty: 'Kebabs', halalCertified: true },
    ],
    halalGroceryStores: ['International markets', 'Middle Eastern grocery stores'],
    halalNeighborhoods: ['Near University of Arizona', 'Central Tucson'],
    bestCuisines: ['Mediterranean', 'Indian', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near University of Arizona',
      muslimPopulation: 'high',
      dominantEthnicities: ['Various'],
      mosqueCount: 2,
      halalRestaurantCount: 15,
      description: 'Main Muslim hub around ICT and university',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['ICT weekend school', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Arizona'],
  },

  travelInfo: {
    airport: {
      airportCode: 'TUS',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Tucson hotels', 'Hotels near university'],
    touristMosques: ['Islamic Center of Tucson'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Tucson', 'Muslim Community Center Tucson'],
    advocacyOrgs: ['CAIR Arizona'],
    charities: ['HCT refugee support', 'Local mosque charities'],
    socialGroups: ['University of Arizona MSA'],
    converts: ['New Muslim programs at ICT'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Arizona anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Muslim community traces roots to 1960s UA students',
    'First Muhsen Certified Masjid in Arizona (MCCT)',
    'Active refugee support through Husainiya Center',
    'Strong university-community connection',
    'Desert climate similar to Middle East',
  ],

  visitorTips: [
    'Islamic Center of Tucson is the main mosque and gets crowded for Jummah',
    'Arrive early for Friday prayers as space fills up',
    'University area has most halal food options',
    'Community is very welcoming to visitors',
  ],

  expatTips: [
    'More affordable than Phoenix',
    'No full-time Islamic schools',
    'Strong university community means educated Muslim population',
    'Hot desert climate - summers are intense',
    'Join ICT for community connections',
  ],
};

export const oklahomaCityData: CityMuslimCommunityData = {
  citySlug: 'oklahoma-city',
  cityName: 'Oklahoma City',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 35000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'CAIR Oklahoma / Islamic Society of Greater Oklahoma City',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Iraq', 'Palestine', 'Lebanon', 'Syria', 'Egypt'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Other', percentage: 20, countries: ['Somalia', 'Various'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Islamic Society of Greater Oklahoma City (ISGOC)',
        address: 'Oklahoma City, OK',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1997,
        features: ['Largest in Oklahoma', 'Educational programs', 'Youth activities'],
      },
      {
        name: 'The Grand Mosque of OKC',
        address: 'Oklahoma City, OK',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2003,
        features: ['State of the art facility', 'Managed by AMA'],
      },
      {
        name: 'Masjid Mu\'min',
        address: 'N Kate Ave, Oklahoma City, OK',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1960,
        features: ['Oldest mosque in Oklahoma'],
      },
      {
        name: 'Crossroads Islamic Center',
        address: 'Oklahoma City, OK',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM and 1:30 PM',
    eidLocations: ['ISGOC', 'Grand Mosque', 'Convention centers'],
    qiblaDirection: 40,
  },

  halalFood: {
    restaurantCount: 50,
    topRestaurants: [
      { name: 'Mediterranean Imports & Deli', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'OKC', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Sheesh Mahal', cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'OKC', specialty: 'Biryani', halalCertified: true },
      { name: 'Nunu\'s Mediterranean Cafe', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'OKC', specialty: 'Falafel', halalCertified: true },
    ],
    halalGroceryStores: ['Mediterranean Imports', 'Super Cao Nguyen', 'International markets'],
    halalNeighborhoods: ['Asian District', 'Northwest OKC'],
    bestCuisines: ['Mediterranean', 'Pakistani', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Asian District',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 2,
      halalRestaurantCount: 15,
      description: 'Diverse area with international food options',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
    {
      name: 'Northwest OKC',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 10,
      description: 'Suburban area with Muslim families',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Peace Academy', grades: 'K-12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ISGOC weekend school', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Oklahoma', 'University of Central Oklahoma', 'Oklahoma State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'OKC',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown OKC hotels', 'Hotels near Bricktown'],
    touristMosques: ['ISGOC', 'Grand Mosque of OKC'],
  },

  communityResources: {
    islamicCenters: ['ISGOC', 'Grand Mosque', 'Crossroads Islamic Center'],
    advocacyOrgs: ['CAIR Oklahoma'],
    charities: ['Islamic Relief', 'Local mosque charities'],
    socialGroups: ['Young Muslims OKC', 'University MSAs'],
    converts: ['New Muslim programs at ISGOC'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 6,
    niqabAcceptance: 4,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Oklahoma anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Muslim community established over 60 years ago',
    'Masjid Mu\'min founded in early 1960s - oldest in Oklahoma',
    'ISGOC is largest Islamic society in the state',
    'Growing international student population',
    'Strong CAIR Oklahoma chapter',
  ],

  visitorTips: [
    'ISGOC and Grand Mosque are the main community centers',
    'Asian District has good food diversity',
    'Community is welcoming despite conservative state',
    'Car is essential - limited public transportation',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Peace Academy offers K-12 Islamic education',
    'Join ISGOC for community integration',
    'Northwest OKC is good for families',
    'Strong tornado season - be prepared',
  ],
};

export const louisvilleData: CityMuslimCommunityData = {
  citySlug: 'louisville',
  cityName: 'Louisville',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 3.0,
    yearEstimate: 2024,
    source: 'Louisville Islamic Center / MCC Louisville',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Bosnian', percentage: 30, countries: ['Bosnia'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Arab', percentage: 15, countries: ['Iraq', 'Syria', 'Palestine'] },
    { group: 'Other', percentage: 10, countries: ['Somalia', 'Various'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Louisville Islamic Center (River Road Mosque)',
        address: '4007 River Road, Louisville, KY 40207',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic', 'Urdu', 'Bosnian'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1980,
        features: ['One of 12 mosques', 'Open to all', '75+ nationalities'],
      },
      {
        name: 'Muslim Community Center of Louisville (MCC)',
        address: '8215 Old Westport Rd, Louisville, KY 40222',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 2009,
        features: ['Largest mosque in region', 'Tarawih prayers', 'Community center'],
      },
      {
        name: 'Al Nur Masjid',
        address: 'Louisville, KY',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2008,
      },
      {
        name: 'Masjid Abubakar Islamic Center',
        address: 'Louisville, KY',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM and 1:30 PM',
    eidLocations: ['MCC Louisville', 'Kentucky Exposition Center'],
    qiblaDirection: 50,
  },

  halalFood: {
    restaurantCount: 40,
    topRestaurants: [
      { name: 'Kashmir Indian Restaurant', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Louisville', specialty: 'North Indian', halalCertified: true },
      { name: 'Saffron\'s Persian Restaurant', cuisine: 'Persian', priceRange: '$$', neighborhood: 'Louisville', specialty: 'Persian kebabs', halalCertified: true },
      { name: 'Ghazal Fine Indian Cuisine', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Louisville', specialty: 'Biryani', halalCertified: true },
      { name: 'Bosnian restaurants', cuisine: 'Bosnian', priceRange: '$$', neighborhood: 'South Louisville', specialty: 'Cevapi', halalCertified: true },
    ],
    halalGroceryStores: ['Halal markets', 'Bosnian grocery stores', 'International markets'],
    halalNeighborhoods: ['South Louisville', 'Old Louisville'],
    bestCuisines: ['Indian', 'Persian', 'Bosnian', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'South Louisville',
      muslimPopulation: 'high',
      dominantEthnicities: ['Bosnian', 'Somali'],
      mosqueCount: 4,
      halalRestaurantCount: 15,
      description: 'Large Bosnian refugee community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
    {
      name: 'East Louisville',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 10,
      description: 'Suburban Muslim families',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Louisville Islamic School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Louisville Islamic Center weekend school', 'MCC programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Louisville', 'Bellarmine University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SDF',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Louisville hotels', 'Hotels near Bardstown Road'],
    touristMosques: ['Louisville Islamic Center', 'MCC Louisville'],
  },

  communityResources: {
    islamicCenters: ['Louisville Islamic Center', 'MCC Louisville', 'Al Nur Masjid'],
    advocacyOrgs: ['CAIR Kentucky'],
    charities: ['Islamic Relief', 'Local mosque charities'],
    socialGroups: ['Young Muslims Louisville', 'University of Louisville MSA'],
    converts: ['New Muslim programs at mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Kentucky anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Large Bosnian refugee community - one of largest in US',
    '12 mosques serving the community',
    'Louisville Islamic Center represents 75+ nationalities',
    'Strong Bosnian cultural influence on Muslim community',
    'Growing Muslim professional population',
  ],

  visitorTips: [
    'Bosnian restaurants serve great halal food',
    'South Louisville has the most concentrated Muslim community',
    'MCC Louisville is the largest facility',
    'Community is very welcoming',
    'Kentucky Derby time brings many visitors',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Louisville Islamic School for K-8 education',
    'South Louisville is affordable with Bosnian community',
    'Join MCC for largest community network',
    'Car is essential - limited public transit',
  ],
};

export const memphisData: CityMuslimCommunityData = {
  citySlug: 'memphis',
  cityName: 'Memphis',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 20000,
    percentage: 1.5,
    yearEstimate: 2024,
    source: 'Memphis Islamic Center / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Egypt', 'Palestine', 'Syria'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Somalia', 'Various'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Memphis Islamic Center (MIC)',
        address: 'Memphis, TN',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 2008,
        features: ['55+ acre campus', '6000 sq ft building', 'Pond and walking trails'],
      },
      {
        name: 'Masjid Ar-Rahman (IAGM)',
        address: 'Memphis, TN',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1982,
        features: ['Islamic Association of Greater Memphis'],
      },
      {
        name: 'Midtown Mosque',
        address: '1288 Jackson Ave, Memphis, TN',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Only mosque near downtown', 'Historic district'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM and 1:30 PM',
    eidLocations: ['Memphis Islamic Center campus', 'Convention centers'],
    qiblaDirection: 47,
  },

  halalFood: {
    restaurantCount: 35,
    topRestaurants: [
      { name: 'Petra Cafe', cuisine: 'Mediterranean/Middle Eastern', priceRange: '$$', neighborhood: 'Memphis', specialty: 'Shawarma', halalCertified: true },
      { name: 'India Palace', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Memphis', specialty: 'Biryani', halalCertified: true },
      { name: 'Mediterranean Cafe', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Memphis', specialty: 'Falafel', halalCertified: true },
    ],
    halalGroceryStores: ['Halal markets', 'International grocery stores'],
    halalNeighborhoods: ['East Memphis', 'Cordova'],
    bestCuisines: ['Mediterranean', 'Indian', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'East Memphis/Cordova',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'Eastern suburbs where most Muslims now reside',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic School of Memphis', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['MIC programs', 'IAGM programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Memphis', 'Rhodes College'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MEM',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Memphis hotels', 'East Memphis hotels'],
    touristMosques: ['Memphis Islamic Center', 'Midtown Mosque'],
  },

  communityResources: {
    islamicCenters: ['Memphis Islamic Center', 'Islamic Association of Greater Memphis'],
    advocacyOrgs: ['Muslims in Memphis outreach'],
    charities: ['Local mosque charities'],
    socialGroups: ['Young Muslims Memphis', 'University MSAs'],
    converts: ['New Muslim programs'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Tennessee anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Memphis Islamic Center has 55+ acre campus',
    'Major eastward population shift in recent decades',
    'Islamic Association of Greater Memphis since 1982',
    'Growing interfaith coalition activities',
    'Midtown Mosque is only one near downtown',
  ],

  visitorTips: [
    'Most Muslim activity is in East Memphis suburbs',
    'Midtown Mosque is nearest to tourist areas',
    'Memphis Islamic Center has beautiful grounds',
    'Community is welcoming to visitors',
  ],

  expatTips: [
    'Affordable cost of living',
    'East Memphis/Cordova best for Muslim families',
    'Islamic School of Memphis for K-8',
    'Car essential - limited public transit',
    'Join MIC for community connections',
  ],
};

export const richmondData: CityMuslimCommunityData = {
  citySlug: 'richmond',
  cityName: 'Richmond',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 2.0,
    yearEstimate: 2024,
    source: 'Islamic Center of Virginia / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Various'] },
    { group: 'African American', percentage: 25, countries: ['USA'] },
    { group: 'Other', percentage: 15, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 8,
    majorMosques: [
      {
        name: 'Islamic Center of Virginia (ICVA)',
        address: '1241 Buford Road, Richmond, VA 23235',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1973,
        features: ['Largest in Central Virginia', 'Land acquired 1981', 'Built 1985'],
      },
      {
        name: 'Islamic Center of Richmond (ICR)',
        address: '481 Hungary Rd, Glen Allen, VA 23060',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2007,
        features: ['Serves hundreds of families', 'Glen Allen location'],
      },
      {
        name: 'Islamic Center of Henrico',
        address: '7705 Impala Dr, Henrico, VA 23228',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['ICVA', 'Convention centers', 'Large mosques'],
    qiblaDirection: 56,
  },

  halalFood: {
    restaurantCount: 40,
    topRestaurants: [
      { name: 'Nawab Indian Cuisine', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Richmond', specialty: 'North Indian', halalCertified: true },
      { name: 'Lebanon Restaurant', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Richmond', specialty: 'Lebanese', halalCertified: true },
      { name: 'Mediterranean Bakery & Deli', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Richmond', specialty: 'Bakery items', halalCertified: true },
    ],
    halalGroceryStores: ['International markets', 'Halal meat shops'],
    halalNeighborhoods: ['Glen Allen', 'Henrico', 'Chesterfield'],
    bestCuisines: ['Indian', 'Lebanese', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Glen Allen/Henrico',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'Suburban area with multiple mosques',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Chesterfield',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 2,
      halalRestaurantCount: 8,
      description: 'Growing Muslim community in suburbs',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al Madina School of Richmond', grades: 'K-12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ICVA Sunday School', 'ICR programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['Virginia Commonwealth University', 'University of Richmond'],
  },

  travelInfo: {
    airport: {
      airportCode: 'RIC',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Richmond hotels', 'Hotels in Glen Allen'],
    touristMosques: ['Islamic Center of Virginia'],
  },

  communityResources: {
    islamicCenters: ['ICVA', 'ICR', 'Islamic Center of Henrico'],
    advocacyOrgs: ['CAIR Virginia'],
    charities: ['Local mosque charities'],
    socialGroups: ['VCU MSA', 'Young Muslims Richmond'],
    converts: ['New Muslim programs at ICVA'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Virginia anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICVA established in 1973 - one of oldest in Virginia',
    'Al Madina School is only Islamic school in Richmond',
    'Strong suburban Muslim community',
    'Close to Washington DC Muslim community',
    'Growing professional Muslim population',
  ],

  visitorTips: [
    'ICVA is the largest and main mosque',
    'Most Muslim infrastructure is in suburbs',
    'Mediterranean Bakery is popular for quick halal food',
    'Community is welcoming',
  ],

  expatTips: [
    'Moderate cost of living',
    'Al Madina School for Islamic education',
    'Glen Allen/Henrico good for families',
    'Car essential - limited public transit',
    'Close to DC for additional resources',
  ],
};

export const hartfordData: CityMuslimCommunityData = {
  citySlug: 'hartford',
  cityName: 'Hartford',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 20000,
    percentage: 1.6,
    yearEstimate: 2024,
    source: 'Local community estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'African American', percentage: 30, countries: ['USA'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 20, countries: ['Various'] },
    { group: 'Bosnian', percentage: 15, countries: ['Bosnia'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Muhammad Islamic Center of Greater Hartford',
        address: '155 Hungerford St, Hartford, CT 06106',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1955,
        features: ['Oldest indigenous Islamic center in Connecticut', 'Founded with Malcolm X coordination'],
      },
      {
        name: 'Islamic Association of Greater Hartford (IAGH)',
        address: 'Berlin, CT',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Berlin Mosque', 'One of oldest in Connecticut'],
      },
      {
        name: 'Bosnian-American Islamic Cultural Center',
        address: 'Hartford area, CT',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Bosnian',
        languages: ['Bosnian', 'English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['MICGH', 'Berlin Mosque', 'Convention centers'],
    qiblaDirection: 60,
  },

  halalFood: {
    restaurantCount: 30,
    topRestaurants: [
      { name: 'Aladdin\'s Lebanese', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Hartford', specialty: 'Lebanese', halalCertified: true },
      { name: 'Tangiers International', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Hartford', specialty: 'Mediterranean', halalCertified: true },
    ],
    halalGroceryStores: ['Farmington Halal Meat Market', 'Hartford Halal Market', 'International markets'],
    halalNeighborhoods: ['Hartford', 'West Hartford'],
    bestCuisines: ['Lebanese', 'Middle Eastern', 'Bosnian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Hartford',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African American', 'Various'],
      mosqueCount: 4,
      halalRestaurantCount: 10,
      description: 'Downtown area with historic mosques',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'West Hartford',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 2,
      halalRestaurantCount: 8,
      description: 'Suburban area with Muslim families',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['MICGH programs', 'Berlin Mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Hartford', 'Trinity College', 'University of Connecticut'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BDL',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Hartford hotels', 'West Hartford hotels'],
    touristMosques: ['Muhammad Islamic Center of Greater Hartford'],
  },

  communityResources: {
    islamicCenters: ['MICGH', 'IAGH Berlin Mosque'],
    advocacyOrgs: ['Muslim Coalition of Connecticut', 'CAIR Connecticut'],
    charities: ['Local mosque charities'],
    socialGroups: ['University MSAs'],
    converts: ['MICGH new Muslim programs'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Connecticut anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'MICGH founded 1955 - oldest indigenous Islamic center in Connecticut',
    'Malcolm X helped coordinate establishment of MICGH',
    'Transitioned from Nation of Islam to Sunni Islam in 1975',
    'Strong Bosnian refugee community',
    'Active Muslim Coalition of Connecticut',
  ],

  visitorTips: [
    'MICGH is historic - first mosque in Connecticut',
    'Berlin Mosque is one of largest facilities',
    'Community is welcoming to visitors',
    'Check multiple mosques for variety of cultures',
  ],

  expatTips: [
    'Affordable compared to Boston/NYC',
    'No full-time Islamic schools - weekend only',
    'West Hartford is safer and more suburban',
    'Car helpful but bus system exists',
    'Close to NYC/Boston for additional resources',
  ],
};

export const providenceData: CityMuslimCommunityData = {
  citySlug: 'providence',
  cityName: 'Providence',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 15000,
    percentage: 0.8,
    yearEstimate: 2024,
    source: 'Islamic Center of Rhode Island / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Lebanon', 'Syria', 'Palestine'] },
    { group: 'African', percentage: 20, countries: ['Nigeria', 'Various'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 6,
    majorMosques: [
      {
        name: 'Islamic Center of Rhode Island (Masjid Al-Kareem)',
        address: '39 Haskins Street, Providence, RI 02903',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1976,
        features: ['First masjid in Rhode Island', 'Originally at 582 Cranston Street'],
      },
      {
        name: 'Masjid Al-Islam',
        address: '40 Sayles Hill Rd, North Smithfield, RI 02896',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Largest mosque in Rhode Island'],
      },
      {
        name: 'Masjid Ar-Rahman',
        address: '18 Dunnell Ln, Pawtucket, RI 02860',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Masjid Ar-Razzaq',
        address: '1148 Broad St, Providence, RI 02905',
        type: 'masjid',
        size: 'small',
        ethnicFocus: 'Nigerian',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Founded by Nigerian Muslims'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['Large mosques', 'Convention centers'],
    qiblaDirection: 60,
  },

  halalFood: {
    restaurantCount: 20,
    topRestaurants: [
      { name: 'East Side Pockets', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'East Side', specialty: 'Falafel', halalCertified: true },
      { name: 'Kabob & Curry', cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'Providence', specialty: 'Kabobs', halalCertified: true },
    ],
    halalGroceryStores: ['International markets', 'South Asian grocery stores'],
    halalNeighborhoods: ['Providence', 'Pawtucket'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Indian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Providence',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 3,
      halalRestaurantCount: 10,
      description: 'Main city with diverse Muslim community',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Pawtucket',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 5,
      description: 'Neighboring city with mosque',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['ICRI weekend programs', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['Brown University', 'RISD', 'University of Rhode Island'],
  },

  travelInfo: {
    airport: {
      airportCode: 'PVD',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Providence hotels', 'Hotels near Brown University'],
    touristMosques: ['Islamic Center of Rhode Island'],
  },

  communityResources: {
    islamicCenters: ['ICRI', 'Masjid Al-Islam'],
    advocacyOrgs: ['Rhode Island Council for Muslim Advancement (RICMA)'],
    charities: ['Local mosque charities'],
    socialGroups: ['Brown-RISD Muslim Community'],
    converts: ['New Muslim programs at mosques'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Rhode Island anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'First masjid in Rhode Island established 1976',
    'Strong university Muslim community at Brown/RISD',
    'RICMA advocates for Muslim community',
    'Small but diverse Muslim population',
    'Close to Boston Muslim community',
  ],

  visitorTips: [
    'ICRI is the first and main mosque',
    'Masjid Al-Islam is the largest in the state',
    'East Side Pockets near Brown is popular',
    'Small community but welcoming',
  ],

  expatTips: [
    'Moderate cost of living',
    'No full-time Islamic schools',
    'Close to Boston for additional resources',
    'Join RICMA for community advocacy',
    'Bus system connects Providence well',
  ],
};

export const buffaloData: CityMuslimCommunityData = {
  citySlug: 'buffalo',
  cityName: 'Buffalo',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 30000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'WNYMuslims / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Somali', percentage: 25, countries: ['Somalia'] },
    { group: 'Bosnian', percentage: 20, countries: ['Bosnia'] },
    { group: 'South Asian', percentage: 20, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 20, countries: ['Various'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Islamic Center of Buffalo',
        address: 'Parker Avenue, Buffalo, NY',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['One of oldest in Buffalo', 'Large prayer hall'],
      },
      {
        name: 'Buffalo Muslim Center',
        address: 'Buffalo, NY',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2016,
        features: ['Founded during pandemic'],
      },
      {
        name: 'Al-Ihsan Jame Masjid',
        address: 'Buffalo, NY',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Buffalo Muslim Community Center', 'Well maintained'],
      },
      {
        name: 'Masjid Zakariya',
        address: 'Buffalo, NY',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'South Asian',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['Islamic Center of Buffalo', 'Convention centers'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 45,
    topRestaurants: [
      { name: 'Sahara Mediterranean', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Buffalo', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Pita Gourmet', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Buffalo', specialty: 'Falafel', halalCertified: true },
      { name: 'Taste of Africa', cuisine: 'Somali/African', priceRange: '$', neighborhood: 'Buffalo', specialty: 'African cuisine', halalCertified: true },
    ],
    halalGroceryStores: ['Halal markets', 'Somali grocery stores', 'International markets'],
    halalNeighborhoods: ['West Side', 'Black Rock'],
    bestCuisines: ['Mediterranean', 'Somali', 'Bosnian', 'Pakistani'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'West Side',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali', 'Various'],
      mosqueCount: 5,
      halalRestaurantCount: 15,
      description: 'Major refugee resettlement area with diverse Muslim community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Black Rock',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Bosnian', 'Various'],
      mosqueCount: 3,
      halalRestaurantCount: 10,
      description: 'Bosnian community presence',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Darul Uloom Al Madania', grades: 'Islamic Seminary', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Darul Uloom Al Madania', 'Multiple mosque programs'],
    universitiesWithMSA: ['University at Buffalo', 'Buffalo State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BUF',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Buffalo hotels', 'Hotels near Niagara Falls'],
    touristMosques: ['Islamic Center of Buffalo'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Buffalo', 'Al-Ihsan Jame Masjid'],
    advocacyOrgs: ['WNYMuslims', 'CAIR New York'],
    charities: ['Islamic Relief', 'Local mosque charities'],
    socialGroups: ['WNYMuslims', 'UB MSA'],
    converts: ['New Muslim programs'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['New York anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Major refugee resettlement city (Somali, Bosnian, Iraqi)',
    'Darul Uloom Al Madania - Islamic seminary',
    '39 Islamic nonprofit organizations in area',
    'WNYMuslims community organization',
    'Close to Niagara Falls tourist area',
  ],

  visitorTips: [
    'West Side has most halal food options',
    'Diverse Muslim community due to refugee resettlement',
    'WNYMuslims website has community events',
    'Niagara Falls is nearby for tourism',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Strong refugee support services',
    'Darul Uloom for Islamic studies',
    'Cold winters - be prepared',
    'Join WNYMuslims for community updates',
  ],
};

export const rochesterData: CityMuslimCommunityData = {
  citySlug: 'rochester',
  cityName: 'Rochester',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 20000,
    percentage: 1.9,
    yearEstimate: 2024,
    source: 'Islamic Center of Rochester / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Various'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Somali', percentage: 15, countries: ['Somalia'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 10,
    majorMosques: [
      {
        name: 'Islamic Center of Rochester (ICR)',
        address: '727 Westfall Road, Rochester, NY',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1975,
        features: ['500+ families', '4-acre plot', 'Minaret', 'Near downtown and universities'],
      },
      {
        name: 'Rochester Muslim Community Circle (RMCC)',
        address: 'Rochester, NY',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2009,
        features: ['Cultural events', 'Interfaith activities'],
      },
      {
        name: 'Hidayah Center',
        address: 'Rochester, NY',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2023,
        features: ['16000 sq ft property', 'Gymnasium', 'Banquet hall'],
      },
      {
        name: 'Masjid Tawfeeq',
        address: 'Rochester, NY',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['ICR', 'Convention centers'],
    qiblaDirection: 59,
  },

  halalFood: {
    restaurantCount: 30,
    topRestaurants: [
      { name: 'Amir\'s Grill', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Rochester', specialty: 'Shawarma', halalCertified: true },
      { name: 'Raj Mahal', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Rochester', specialty: 'North Indian', halalCertified: true },
    ],
    halalGroceryStores: ['International markets', 'Halal meat shops'],
    halalNeighborhoods: ['Near Westfall Road', 'Various areas'],
    bestCuisines: ['Mediterranean', 'Indian', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Near Islamic Center',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 3,
      halalRestaurantCount: 10,
      description: 'Area around ICR with Muslim families',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Ihsan Academy', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ICR Sunday School', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Rochester', 'Rochester Institute of Technology'],
  },

  travelInfo: {
    airport: {
      airportCode: 'ROC',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Rochester hotels'],
    touristMosques: ['Islamic Center of Rochester'],
  },

  communityResources: {
    islamicCenters: ['ICR', 'RMCC', 'Hidayah Center'],
    advocacyOrgs: ['CAIR New York'],
    charities: ['Local mosque charities'],
    socialGroups: ['RMCC events', 'University MSAs'],
    converts: ['New Muslim programs at ICR'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['New York anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICR established 1975 - 50 years serving community',
    'Hidayah Center - new 16000 sq ft facility (2023)',
    'Strong university presence (UR, RIT)',
    'Muslims from most Muslim countries represented',
    'Active interfaith dialogue programs',
  ],

  visitorTips: [
    'ICR is the main mosque on Westfall Road',
    'Hidayah Center is newest and largest facility',
    'Community is very welcoming',
    'Multiple mosques for different cultures',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Al-Ihsan Academy for Islamic education',
    'Cold winters - be prepared',
    'Good universities attract Muslim students',
    'Join ICR for community integration',
  ],
};

export const cincinnatiData: CityMuslimCommunityData = {
  citySlug: 'cincinnati',
  cityName: 'Cincinnati',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Islamic Center of Greater Cincinnati / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 30, countries: ['Various'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Somali', percentage: 10, countries: ['Somalia'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Islamic Center of Greater Cincinnati (ICGC)',
        address: '8092 Plantation Dr, West Chester, OH',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1995,
        features: ['18-acre campus', '14000 sq ft masjid', 'Syrian/Moorish architecture', 'Gold domes', 'Islamic day school'],
      },
      {
        name: 'Clifton Mosque (IAC)',
        address: '3668 Clifton Avenue, Cincinnati, OH',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1982,
        features: ['Near University of Cincinnati', 'Student-friendly'],
      },
      {
        name: 'Cincinnati Islamic Community Center',
        address: '2570 Gobel Court, Cincinnati, OH 45211',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Masjid Al-Fajr',
        address: 'Over-the-Rhine, Cincinnati, OH',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Somali',
        languages: ['Somali', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1994,
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM and 1:30 PM',
    eidLocations: ['ICGC', 'Convention centers'],
    qiblaDirection: 52,
  },

  halalFood: {
    restaurantCount: 40,
    topRestaurants: [
      { name: 'Aladdin\'s Eatery', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Multiple', specialty: 'Lebanese', halalCertified: true },
      { name: 'Nada', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Cincinnati', specialty: 'Modern Middle Eastern', halalCertified: true },
    ],
    halalGroceryStores: ['Jungle Jim\'s (halal section)', 'International markets'],
    halalNeighborhoods: ['West Chester', 'Clifton', 'Over-the-Rhine'],
    bestCuisines: ['Lebanese', 'Indian', 'Somali', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'West Chester',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 2,
      halalRestaurantCount: 10,
      description: 'Suburb with ICGC and Muslim families',
      safetyRating: 9,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Clifton',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 8,
      description: 'University area with student Muslims',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'El-Sewedy International Academy of Cincinnati', grades: 'K-12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ICGC weekend school', 'Clifton Mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Cincinnati', 'Xavier University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CVG',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Cincinnati hotels', 'West Chester hotels'],
    touristMosques: ['Islamic Center of Greater Cincinnati'],
  },

  communityResources: {
    islamicCenters: ['ICGC', 'Clifton Mosque', 'CICC'],
    advocacyOrgs: ['CAIR Ohio'],
    charities: ['Islamic Relief', 'Local mosque charities'],
    socialGroups: ['UC MSA', 'Young Muslims Cincinnati'],
    converts: ['New Muslim programs at ICGC'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Ohio anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICGC has stunning Syrian/Moorish architecture with gold domes',
    '18-acre campus with full Islamic day school',
    'Strong interfaith relations since 1995',
    'Jungle Jim\'s has large halal section',
    'Growing Somali community in Over-the-Rhine',
  ],

  visitorTips: [
    'ICGC is architecturally beautiful - worth visiting',
    'Clifton Mosque is near UC for students',
    'Jungle Jim\'s is famous for international foods including halal',
    'Community is known for interfaith work',
  ],

  expatTips: [
    'Moderate cost of living',
    'El-Sewedy Academy for K-12 Islamic education',
    'West Chester is good for families',
    'ICGC campus has everything in one place',
    'Car essential in suburbs',
  ],
};

export const jacksonvilleData: CityMuslimCommunityData = {
  citySlug: 'jacksonville',
  cityName: 'Jacksonville',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 15000,
    percentage: 1.0,
    yearEstimate: 2024,
    source: 'Islamic Center of Northeast Florida / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Various'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Bosnian', percentage: 10, countries: ['Bosnia'] },
    { group: 'Other', percentage: 15, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 7,
    majorMosques: [
      {
        name: 'Islamic Center of Northeast Florida (ICNEF)',
        address: 'Jacksonville, FL',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest mosque', '30+ countries represented', 'Free health clinic (MASS)'],
      },
      {
        name: 'Baymeadows Islamic Center (BIC)',
        address: 'Jacksonville, FL',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Prayer and education facility'],
      },
      {
        name: 'Al-Zahra Islamic Center',
        address: 'Jacksonville, FL',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Shia/Multi-cultural',
        languages: ['Arabic', 'English', 'Farsi'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2014,
        features: ['Only multicultural Shia center'],
      },
      {
        name: 'Islamic Center of Orange Park',
        address: '7821 Collins Road, Jacksonville, FL 32244',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:35 PM Khutbah, 1:55 PM Salah'],
      },
      {
        name: 'Islamic Community of Bosniaks Jacksonville',
        address: 'Jacksonville, FL',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Bosnian',
        languages: ['Bosnian', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2015,
      },
    ],
    jummahInfo: 'Friday prayers typically at 1:00 PM - 1:30 PM',
    eidLocations: ['ICNEF', 'Convention centers'],
    qiblaDirection: 50,
  },

  halalFood: {
    restaurantCount: 30,
    topRestaurants: [
      { name: 'Mediterranean Cafe', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Jacksonville', specialty: 'Shawarma', halalCertified: true },
      { name: 'Kabobs & Currys', cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'Jacksonville', specialty: 'Kabobs', halalCertified: true },
    ],
    halalGroceryStores: ['International markets', 'Halal meat shops'],
    halalNeighborhoods: ['Mandarin', 'Baymeadows', 'Orange Park'],
    bestCuisines: ['Mediterranean', 'Pakistani', 'Indian', 'Bosnian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Mandarin/Baymeadows',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 2,
      halalRestaurantCount: 10,
      description: 'Suburban area with Muslim community',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Orange Park',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 5,
      description: 'Southwest suburb with mosque',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'ICNEF School', grades: 'K-8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['ICNEF programs', 'Various mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of North Florida', 'Jacksonville University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'JAX',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Downtown Jacksonville hotels', 'Beaches area hotels'],
    touristMosques: ['Islamic Center of Northeast Florida'],
  },

  communityResources: {
    islamicCenters: ['ICNEF', 'BIC', 'Al-Zahra'],
    advocacyOrgs: ['CAIR Florida'],
    charities: ['MASS free health clinic', 'Local mosque charities'],
    socialGroups: ['Young Muslims Jacksonville', 'UNF MSA'],
    converts: ['New Muslim programs'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 5,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Florida anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Local restaurants'],
    muslimFuneralServices: ['Mosque-affiliated services'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '5:00 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'ICNEF has free health clinic (MASS) open to all',
    'Community grew from less than 10 families to 8000+',
    '30+ countries represented at ICNEF',
    'Only multicultural Shia center (Al-Zahra)',
    'Bosnian community presence since 2015',
  ],

  visitorTips: [
    'ICNEF is the largest and main community center',
    'Jacksonville is spread out - car essential',
    'Beautiful beaches for family outings',
    'Community is welcoming to visitors',
  ],

  expatTips: [
    'Affordable cost of living',
    'ICNEF School for K-8 Islamic education',
    'Car essential - city is very spread out',
    'Beaches nearby for recreation',
    'MASS clinic provides free healthcare',
  ],
};

// Export all US Tier 3 cities data
export const usTier3CitiesData: Record<string, CityMuslimCommunityData> = {
  'new-orleans': newOrleansData,
  'salt-lake-city': saltLakeCityData,
  'honolulu': honoluluData,
  'albuquerque': albuquerqueData,
  'tucson': tucsonData,
  'oklahoma-city': oklahomaCityData,
  'louisville': louisvilleData,
  'memphis': memphisData,
  'richmond': richmondData,
  'hartford': hartfordData,
  'providence': providenceData,
  'buffalo': buffaloData,
  'rochester': rochesterData,
  'cincinnati': cincinnatiData,
  'jacksonville': jacksonvilleData,
};
