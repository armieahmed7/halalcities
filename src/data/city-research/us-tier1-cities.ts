// US Tier 1 Cities Muslim Community Research Data
// Research compiled December 2024

import { CityMuslimCommunityData } from '../muslim-community-data';

export const newYorkData: CityMuslimCommunityData = {
  citySlug: 'new-york',
  cityName: 'New York City',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 1000000,
    percentage: 3.0,
    yearEstimate: 2024,
    source: 'Pew Research Center / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Bangladesh', 'Pakistan', 'India'] },
    { group: 'Arab', percentage: 25, countries: ['Egypt', 'Yemen', 'Palestine', 'Syria', 'Lebanon'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'West African', percentage: 10, countries: ['Senegal', 'Guinea', 'Mali'] },
    { group: 'Turkish', percentage: 5, countries: ['Turkey'] },
    { group: 'Other', percentage: 5, countries: ['Indonesia', 'Malaysia', 'Albania'] },
  ],

  mosques: {
    totalCount: 285,
    majorMosques: [
      {
        name: 'Islamic Cultural Center of New York',
        address: '1711 Third Avenue, Manhattan, NY 10029',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '2:00 PM'],
        website: 'https://www.iccny.org',
        established: 1991,
        features: ['Minaret', 'Islamic school', 'Library', 'Community hall'],
      },
      {
        name: 'Masjid Malcolm Shabazz',
        address: '102 W 116th Street, Harlem, NY 10026',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1965,
        features: ['Historical significance', 'Community programs'],
      },
      {
        name: 'Masjid At-Taqwa',
        address: '1266 Bedford Avenue, Brooklyn, NY 11216',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Community programs', 'Youth activities'],
      },
      {
        name: 'Al-Farooq Masjid',
        address: '552 Atlantic Avenue, Brooklyn, NY 11217',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Arab',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
      },
    ],
    jummahInfo: 'Multiple Jummah prayers available across the city, typically at 1:00 PM and 1:30 PM',
    eidLocations: ['Barclays Center', 'Citi Field', 'MetLife Stadium', 'Various parks'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 2500,
    topRestaurants: [
      { name: 'Kabab King', cuisine: 'Pakistani/Indian', priceRange: '$', neighborhood: 'Jackson Heights, Queens', specialty: 'Seekh Kabab', halalCertified: true },
      { name: 'Yemen Cafe', cuisine: 'Yemeni', priceRange: '$$', neighborhood: 'Brooklyn', specialty: 'Lamb Haneeth', halalCertified: true },
      { name: 'Turkish Grill', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Jackson Heights', specialty: 'Mixed Grill', halalCertified: true },
      { name: 'The Soul Spot', cuisine: 'Caribbean/Soul Food', priceRange: '$$', neighborhood: 'Brooklyn', specialty: 'Jerk Chicken', halalCertified: true },
      { name: 'Laila', cuisine: 'Middle Eastern', priceRange: '$$$', neighborhood: 'Brooklyn', specialty: 'Lamb Shank', halalCertified: true },
      { name: 'Momo Crave', cuisine: 'Nepali/Tibetan', priceRange: '$', neighborhood: 'Jackson Heights', specialty: 'Momos', halalCertified: true },
    ],
    halalGroceryStores: ['Patel Brothers', 'Al-Aqsa Supermarket', 'Halal International Supermarket', 'Fertile Crescent', 'Atlantic Avenue shops'],
    halalNeighborhoods: ['Jackson Heights', 'Astoria', 'Bay Ridge', 'Atlantic Avenue', 'Steinway Street'],
    bestCuisines: ['Pakistani', 'Bangladeshi', 'Yemeni', 'Turkish', 'Egyptian', 'West African'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub', 'Seamless'],
  },

  muslimNeighborhoods: [
    {
      name: 'Jackson Heights',
      muslimPopulation: 'high',
      dominantEthnicities: ['Bangladeshi', 'Pakistani', 'Indian'],
      mosqueCount: 12,
      halalRestaurantCount: 150,
      description: 'The heart of South Asian Muslim community in NYC with abundant halal food options',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Bay Ridge',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'Palestinian', 'Yemeni'],
      mosqueCount: 8,
      halalRestaurantCount: 80,
      description: 'Arab Muslim hub with Middle Eastern restaurants and shops',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Astoria',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Egyptian', 'Moroccan', 'Bangladeshi'],
      mosqueCount: 6,
      halalRestaurantCount: 60,
      description: 'Diverse neighborhood with growing Muslim community',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic Cultural Center School', grades: 'Pre-K - 8', type: 'full-time', accredited: true, website: 'https://iccnyschool.org' },
      { name: 'Razi School', grades: 'Pre-K - 12', type: 'full-time', accredited: true, website: 'https://razischool.org' },
      { name: 'Al-Madinah School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
      { name: 'Elhaam Academy', grades: 'K - 8', type: 'full-time', accredited: true, website: 'https://elhaamacademy.org' },
    ],
    weekendPrograms: ['Islamic Cultural Center weekend school', 'Various mosque programs'],
    hifzPrograms: ['Al-Ihsan Academy', 'Multiple mosque-based programs'],
    universitiesWithMSA: ['Columbia University', 'NYU', 'CUNY schools', 'Fordham University', 'St. Johns University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'JFK',
      hasPrayerRoom: true,
      location: 'Terminal 4 - Interfaith chapel',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Several halal carts outside terminals'],
    },
    recommendedHotels: ['Hotels near Jackson Heights', 'Manhattan hotels near Islamic Center'],
    touristMosques: ['Islamic Cultural Center of New York', 'Masjid Malcolm Shabazz'],
    muslimTourOperators: ['Islamic Tours NYC'],
  },

  communityResources: {
    islamicCenters: ['Islamic Cultural Center of New York', 'Muslim Community Network', 'ICNA Relief'],
    advocacyOrgs: ['CAIR-NY', 'Muslim Advocates', 'Islamic Circle of North America'],
    charities: ['ICNA Relief', 'Islamic Relief USA', 'Zakat Foundation'],
    socialGroups: ['Muslim Professionals Network NYC', 'Young Muslims NYC'],
    converts: ['New Muslim Support Group NYC'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['NYC Human Rights Law', 'Religious accommodation requirements'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['University Islamic Financial (branch office)'],
    muslimDoctors: true,
    halalCatering: ['Numerous options throughout NYC'],
    muslimFuneralServices: ['Islamic Funeral Services of NY', 'Various mosque-affiliated services'],
    muslimCemeteries: ['Cemetery of the Evergreens (Muslim section)'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '12-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Largest Muslim population in any US city',
    'Most diverse Muslim community with 100+ nationalities',
    'Historic African American Muslim community in Harlem',
    'Famous halal food cart culture',
    'Strong Muslim professional networks',
  ],

  visitorTips: [
    'Jackson Heights in Queens is the best area for halal food diversity',
    'The Islamic Cultural Center of NY is architecturally stunning and visitor-friendly',
    'Many halal food carts serve late into the night in Manhattan',
    'Bay Ridge in Brooklyn has authentic Middle Eastern cuisine',
    'Download the Zabihah app to find certified halal restaurants',
  ],

  expatTips: [
    'Queens offers more affordable housing with strong Muslim communities',
    'Public schools in diverse areas have significant Muslim student populations',
    'Consider neighborhoods like Jackson Heights, Bay Ridge, or Astoria for family living',
    'The subway system makes it easy to access mosques throughout the city',
    'Many employers accommodate Friday prayers and religious holidays',
  ],
};

export const losAngelesData: CityMuslimCommunityData = {
  citySlug: 'los-angeles',
  cityName: 'Los Angeles',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 500000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'Institute for Social Policy and Understanding',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Lebanon', 'Egypt', 'Palestine', 'Iraq'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Persian/Iranian', percentage: 20, countries: ['Iran'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Indonesia', 'Turkey', 'African countries'] },
  ],

  mosques: {
    totalCount: 120,
    majorMosques: [
      {
        name: 'Islamic Center of Southern California',
        address: '434 S Vermont Ave, Los Angeles, CA 90020',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Farsi', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1952,
        features: ['Community hall', 'Education programs', 'Interfaith activities'],
      },
      {
        name: 'King Fahad Mosque',
        address: '10980 Washington Blvd, Culver City, CA 90232',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Arab',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Large capacity', 'Beautiful architecture'],
      },
      {
        name: 'Masjid Omar ibn Al-Khattab',
        address: '1025 Exposition Blvd, Los Angeles, CA 90007',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers typically at 1:00 PM and 1:30 PM across most mosques',
    eidLocations: ['LA Convention Center', 'Various parks', 'Rose Bowl'],
    qiblaDirection: 23,
  },

  halalFood: {
    restaurantCount: 800,
    topRestaurants: [
      { name: 'Zankou Chicken', cuisine: 'Armenian/Mediterranean', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Rotisserie Chicken', halalCertified: true },
      { name: 'The Halal Guys', cuisine: 'Middle Eastern/American', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Chicken over Rice', halalCertified: true },
      { name: 'Al-Watan Halal Restaurant', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'Westwood', specialty: 'Kabobs', halalCertified: true },
    ],
    halalGroceryStores: ['Super King Markets', 'Wholesome Choice', 'Jon\'s Marketplace', 'Altayebat Market'],
    halalNeighborhoods: ['Westwood', 'Anaheim', 'Garden Grove', 'Little Arabia'],
    bestCuisines: ['Mediterranean', 'Persian', 'Pakistani', 'Afghan', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Postmates', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Westwood',
      muslimPopulation: 'high',
      dominantEthnicities: ['Persian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 50,
      description: 'Near UCLA with many Middle Eastern restaurants and Persian businesses',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'good',
    },
    {
      name: 'Anaheim/Little Arabia',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'Egyptian', 'Lebanese'],
      mosqueCount: 5,
      halalRestaurantCount: 100,
      description: 'The largest Arab community in Orange County with authentic Middle Eastern experience',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'New Horizon School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
      { name: 'Islamic Center of Southern California School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque weekend schools'],
    hifzPrograms: ['Multiple mosque-based programs'],
    universitiesWithMSA: ['UCLA', 'USC', 'UC Irvine', 'Cal State schools'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LAX',
      hasPrayerRoom: true,
      location: 'Interfaith chapel in Terminal 1',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options inside terminals'],
    },
    recommendedHotels: ['Hotels near Westwood', 'Hotels near Islamic Center of Southern California'],
    touristMosques: ['Islamic Center of Southern California', 'King Fahad Mosque'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Southern California', 'IMAN Foundation', 'Islamic Shura Council of Southern California'],
    advocacyOrgs: ['CAIR-LA', 'Muslim Public Affairs Council'],
    charities: ['Islamic Relief USA', 'ICNA Relief'],
    socialGroups: ['Muslim Professionals LA', 'Young Muslims LA'],
    converts: ['New Muslim groups at various mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['California Fair Employment and Housing Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options available'],
    muslimFuneralServices: ['Islamic funeral services available'],
    muslimCemeteries: ['Rose Hills Memorial Park (Muslim section)'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Large Persian Muslim community',
    'Little Arabia in Orange County',
    'Strong entertainment industry Muslim presence',
    'Diverse halal food scene with fusion options',
  ],

  visitorTips: [
    'Westwood has great Persian and Middle Eastern food',
    'A car is essential for getting around LA',
    'Little Arabia in Anaheim is worth the drive for authentic food',
    'Many halal options available through delivery apps',
  ],

  expatTips: [
    'Consider areas like Anaheim or Irvine for family-friendly Muslim communities',
    'Traffic is a major factor - live near work or near transit',
    'Islamic schools are available but may require driving',
    'Join community organizations to build networks',
  ],
};

export const chicagoData: CityMuslimCommunityData = {
  citySlug: 'chicago',
  cityName: 'Chicago',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 500000,
    percentage: 5.2,
    yearEstimate: 2024,
    source: 'CAIR / Council on American-Islamic Relations',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Jordan', 'Syria', 'Iraq', 'Lebanon'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 20, countries: ['USA'] },
    { group: 'Bosnian', percentage: 10, countries: ['Bosnia'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'African countries'] },
  ],

  mosques: {
    totalCount: 70,
    majorMosques: [
      {
        name: 'Mosque Foundation',
        address: '7360 W 93rd St, Bridgeview, IL 60455',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Palestinian/Arab',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM', '1:30 PM'],
        established: 1954,
        features: ['One of largest mosques in North America', 'Full-time school', 'Community services'],
      },
      {
        name: 'Downtown Islamic Center',
        address: '231 S State St, Chicago, IL 60604',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Downtown location', 'Convenient for workers'],
      },
      {
        name: 'Masjid Al-Noor',
        address: 'Various locations',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Multiple Jummah times available, typically 12:30 PM - 2:00 PM',
    eidLocations: ['Toyota Park', 'Various convention centers', 'Large mosques'],
    qiblaDirection: 48,
  },

  halalFood: {
    restaurantCount: 600,
    topRestaurants: [
      { name: 'The Halal Guys', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Chicken over Rice', halalCertified: true },
      { name: 'I-Cafe Sukkur', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Devon Avenue', specialty: 'Biryani', halalCertified: true },
      { name: 'Usmania Fine Dining', cuisine: 'Pakistani', priceRange: '$$$', neighborhood: 'Various', specialty: 'Pakistani cuisine', halalCertified: true },
    ],
    halalGroceryStores: ['Patel Brothers', 'Al-Mansoor Supermarket', 'Johar International'],
    halalNeighborhoods: ['Devon Avenue', 'Bridgeview', 'Albany Park', 'West Ridge'],
    bestCuisines: ['Palestinian', 'Pakistani', 'Indian', 'Iraqi', 'Lebanese', 'Bosnian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Devon Avenue (West Ridge)',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Indian', 'Bangladeshi'],
      mosqueCount: 8,
      halalRestaurantCount: 100,
      description: 'South Asian hub known for halal restaurants and shops',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Bridgeview',
      muslimPopulation: 'high',
      dominantEthnicities: ['Palestinian', 'Arab'],
      mosqueCount: 5,
      halalRestaurantCount: 50,
      description: 'Arab Muslim community centered around Mosque Foundation',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Albany Park',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Iraqi', 'Bosnian', 'Middle Eastern'],
      mosqueCount: 4,
      halalRestaurantCount: 40,
      description: 'Diverse neighborhood with growing Muslim community',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Universal School', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'Al-Aqsa School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Numerous mosque-based programs'],
    hifzPrograms: ['Institute of Islamic Education', 'Various mosque programs'],
    universitiesWithMSA: ['University of Chicago', 'Northwestern University', 'UIC', 'DePaul University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'ORD',
      hasPrayerRoom: true,
      location: 'Interfaith chapel in Terminal 2',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels near Devon Avenue', 'Downtown hotels'],
    touristMosques: ['Mosque Foundation', 'Downtown Islamic Center'],
  },

  communityResources: {
    islamicCenters: ['CIOGC - Council of Islamic Organizations of Greater Chicago', 'ICNA Chicago'],
    advocacyOrgs: ['CAIR-Chicago', 'Muslim Civic Coalition'],
    charities: ['Islamic Relief USA', 'ICNA Relief'],
    socialGroups: ['Muslim Professionals Chicago'],
    converts: ['New Muslim support groups'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Illinois Human Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available through major mosques'],
    muslimCemeteries: ['Muslim Community Cemetery'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Mosque Foundation - one of the largest in North America',
    'Devon Avenue - famous South Asian corridor',
    '60% of Chicagoans have tried halal food regardless of faith',
    'Strong Palestinian community in suburbs',
    'Halal Korean BBQ and deep-dish pizza emerging',
  ],

  visitorTips: [
    'Devon Avenue is a must-visit for halal food lovers',
    'The Mosque Foundation in Bridgeview is worth the trip',
    'Public transit is good for downtown but car needed for suburbs',
    'Winter can be extremely cold - dress warmly',
  ],

  expatTips: [
    'Bridgeview and surrounding suburbs have strong Muslim schools',
    'Devon Avenue area offers affordable housing with Muslim amenities',
    'Consider suburbs for family living with good schools',
    'The Muslim community is politically active and well-organized',
  ],
};

export const houstonData: CityMuslimCommunityData = {
  citySlug: 'houston',
  cityName: 'Houston',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 200000,
    percentage: 3.0,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt', 'Lebanon', 'Syria'] },
    { group: 'African', percentage: 20, countries: ['Nigeria', 'Somalia', 'Sudan'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'Iran'] },
  ],

  mosques: {
    totalCount: 209,
    majorMosques: [
      {
        name: 'Al-Noor Mosque (ISGH)',
        address: '3110 Eastside St, Houston, TX 77098',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest mosque in Houston', 'Full community services'],
      },
      {
        name: 'Masjid ElFarouq',
        address: '1207 Conrad Sauer Dr, Houston, TX 77043',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Educational programs', '4.8/5 rating'],
      },
      {
        name: 'Masjid Bilal',
        address: '11815 Adel Rd, Houston, TX 77067',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Large prayer hall', 'Diverse congregation'],
      },
    ],
    jummahInfo: 'Multiple Jummah times available across the city',
    eidLocations: ['George R. Brown Convention Center', 'NRG Park', 'Various large mosques'],
    qiblaDirection: 47,
  },

  halalFood: {
    restaurantCount: 500,
    topRestaurants: [
      { name: 'Pasha Turkish Restaurant', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Rice Village', specialty: 'Doner Kebab', halalCertified: true },
      { name: 'ZOA Moroccan Kitchen', cuisine: 'Moroccan', priceRange: '$$', neighborhood: 'Montrose', specialty: 'Tagine', halalCertified: true },
      { name: 'Dripped Birria', cuisine: 'Mexican', priceRange: '$', neighborhood: 'Various', specialty: 'Birria Tacos', halalCertified: true },
      { name: 'Burger Bodega', cuisine: 'American', priceRange: '$$', neighborhood: 'Various', specialty: 'Smash Burgers', halalCertified: true },
      { name: 'Pho Gabo Halal', cuisine: 'Vietnamese', priceRange: '$', neighborhood: 'Various', specialty: 'Pho', halalCertified: true },
      { name: 'Taco Fuego', cuisine: 'Mexican', priceRange: '$', neighborhood: 'Galleria', specialty: 'Tacos', halalCertified: true },
    ],
    halalGroceryStores: ['Phoenicia Specialty Foods', 'Fiesta Mart', 'Various ethnic grocers'],
    halalNeighborhoods: ['Sugar Land', 'Southwest Houston', 'Hillcroft corridor'],
    bestCuisines: ['Pakistani', 'Indian', 'Turkish', 'Moroccan', 'Mexican', 'Vietnamese'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Sugar Land',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 8,
      halalRestaurantCount: 60,
      description: 'Affluent suburb with strong Muslim community',
      safetyRating: 9,
      affordability: 'expensive',
      publicTransport: 'limited',
    },
    {
      name: 'Southwest Houston',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Indian', 'Arab'],
      mosqueCount: 15,
      halalRestaurantCount: 100,
      description: 'Diverse area with many halal options',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Iman Academy', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'Minaret Academy', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Multiple programs available'],
    universitiesWithMSA: ['University of Houston', 'Rice University', 'Texas Southern University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'IAH',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels in Galleria area', 'Sugar Land hotels'],
    touristMosques: ['Al-Noor Mosque'],
  },

  communityResources: {
    islamicCenters: ['ISGH - Islamic Society of Greater Houston'],
    advocacyOrgs: ['CAIR-Texas Houston'],
    charities: ['Islamic Relief USA', 'ICNA Relief'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['New Muslim support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['Texas employment laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['ISGH funeral services'],
    muslimCemeteries: ['Muslim Cemetery of Houston'],
  },

  prayerTimesInfo: {
    fajrRange: '5:00 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Largest Muslim population in Southern US',
    '"Best halal food scene in the United States" according to Texas Suhoor Fest',
    'Texas Suhoor Fest - major Ramadan event',
    'Diverse halal options including Mexican and Vietnamese',
    'Strong oil industry Muslim professional community',
  ],

  visitorTips: [
    'A car is absolutely essential in Houston',
    'Sugar Land has upscale halal dining options',
    'Houston summers are extremely hot and humid',
    'The halal Mexican food scene is uniquely excellent',
  ],

  expatTips: [
    'Sugar Land and Katy have excellent Muslim schools',
    'Housing is relatively affordable compared to coastal cities',
    'Join ISGH for community connections',
    'Many job opportunities in energy and medical sectors',
  ],
};

export const detroitData: CityMuslimCommunityData = {
  citySlug: 'detroit',
  cityName: 'Detroit/Dearborn',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 300000,
    percentage: 7.0,
    yearEstimate: 2024,
    source: 'Census ancestry data extrapolation',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 50, countries: ['Lebanon', 'Yemen', 'Iraq', 'Palestine', 'Syria'] },
    { group: 'Bangladeshi', percentage: 20, countries: ['Bangladesh'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Yemeni', percentage: 10, countries: ['Yemen'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Pakistan'] },
  ],

  mosques: {
    totalCount: 100,
    majorMosques: [
      {
        name: 'Islamic Center of America',
        address: '19500 Ford Rd, Dearborn, MI 48128',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Shia/Lebanese',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM'],
        established: 2005,
        features: ['Largest mosque in North America', 'Beautiful architecture', 'Community center'],
      },
      {
        name: 'Dearborn Mosque',
        address: '9945 Vernor Hwy, Dearborn, MI 48120',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Sunni/Arab',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1937,
        features: ['Historic mosque', 'One of oldest in America'],
      },
    ],
    jummahInfo: 'Multiple options throughout Dearborn and Detroit',
    eidLocations: ['Ford Field', 'Various convention centers', 'Large mosques'],
    qiblaDirection: 54,
  },

  halalFood: {
    restaurantCount: 400,
    topRestaurants: [
      { name: 'Al Ameer', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Dearborn', specialty: 'Shawarma', halalCertified: true },
      { name: 'Sheeba Restaurant', cuisine: 'Yemeni', priceRange: '$', neighborhood: 'Dearborn', specialty: 'Lamb Haneeth', halalCertified: true },
      { name: 'Shatila Bakery', cuisine: 'Middle Eastern Bakery', priceRange: '$', neighborhood: 'Dearborn', specialty: 'Baklava', halalCertified: true },
    ],
    halalGroceryStores: ['Dearborn Fresh Supermarket', 'Valley Halal Meat', 'Numerous butchers'],
    halalNeighborhoods: ['Dearborn', 'Hamtramck', 'Dearborn Heights'],
    bestCuisines: ['Lebanese', 'Yemeni', 'Iraqi', 'Syrian', 'Bangladeshi'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Dearborn',
      muslimPopulation: 'high',
      dominantEthnicities: ['Lebanese', 'Yemeni', 'Iraqi'],
      mosqueCount: 30,
      halalRestaurantCount: 200,
      description: 'First Arab-majority city in US (55% MENA ancestry). Center of Arab American life.',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
    {
      name: 'Hamtramck',
      muslimPopulation: 'high',
      dominantEthnicities: ['Bangladeshi', 'Yemeni', 'Bosnian'],
      mosqueCount: 15,
      halalRestaurantCount: 80,
      description: 'First Muslim-majority city in America. Diverse Muslim community.',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic Center of America School', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'Huda School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Multiple mosque programs'],
    hifzPrograms: ['Various programs available'],
    universitiesWithMSA: ['University of Michigan-Dearborn', 'Wayne State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'DTW',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited but available'],
    },
    recommendedHotels: ['Hotels in Dearborn near Islamic Center'],
    touristMosques: ['Islamic Center of America'],
    muslimTourOperators: ['Arab American National Museum tours'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of America', 'ACCESS (Arab Community Center)'],
    advocacyOrgs: ['CAIR-Michigan', 'ADC (American-Arab Anti-Discrimination Committee)'],
    charities: ['Islamic Relief USA', 'Life for Relief and Development'],
    socialGroups: ['Arab American professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 10,
    niqabAcceptance: 9,
    beardAcceptance: 10,
    islamophobiaLevel: 'low',
    legalProtections: ['Michigan Elliott-Larsen Civil Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Multiple services available'],
    muslimCemeteries: ['Islamic Cemetery of Dearborn'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Dearborn - First Arab-majority city in America (55% MENA)',
    'Hamtramck - First Muslim-majority city in America',
    'Islamic Center of America - Largest mosque in North America',
    'First halal butcher opened in 1950s',
    'Abdullah Hammoud - First Arab American mayor of Dearborn',
    'Strong political engagement - Muslim elected officials',
  ],

  visitorTips: [
    'Dearborn is a must-visit for authentic Middle Eastern experience',
    'The Islamic Center of America is architecturally stunning',
    'Try the famous Dearborn shawarma and Yemeni food',
    'Visit the Arab American National Museum',
    'Shatila Bakery is world-famous for Middle Eastern sweets',
  ],

  expatTips: [
    'Dearborn offers the most immersive Arab Muslim experience in America',
    'Housing is very affordable compared to coastal cities',
    'Excellent Islamic schools available',
    'No need to travel far for halal food - it is everywhere',
    'Strong community support networks',
  ],
};

// Continue with more cities...
export const dallasData: CityMuslimCommunityData = {
  citySlug: 'dallas',
  cityName: 'Dallas-Fort Worth',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 250000,
    percentage: 3.2,
    yearEstimate: 2024,
    source: 'Pew Research Center',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 40, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Syria', 'Egypt', 'Jordan'] },
    { group: 'African', percentage: 15, countries: ['Somalia', 'Nigeria', 'Sudan'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'Bosnian'] },
  ],

  mosques: {
    totalCount: 67,
    majorMosques: [
      {
        name: 'Islamic Association of North Texas (IANT)',
        address: '840 Abrams Rd, Richardson, TX 75081',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Full-time school', 'Community services', 'Youth programs'],
      },
      {
        name: 'Dallas Masjid Al Islam',
        address: '2604 South Harwood Street, Dallas, TX',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1975,
        features: ['First mosque in Dallas', 'First Muslim school in DFW'],
      },
    ],
    jummahInfo: 'Multiple Jummah options across the metroplex',
    eidLocations: ['AT&T Stadium area', 'Convention centers', 'Large mosques'],
    qiblaDirection: 45,
  },

  halalFood: {
    restaurantCount: 400,
    topRestaurants: [
      { name: "Ricky's Hot Chicken", cuisine: 'Nashville Hot Chicken', priceRange: '$$', neighborhood: 'Richardson/Plano', specialty: 'Halal Hot Chicken', halalCertified: true },
      { name: 'Afrah Mediterranean', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Richardson', specialty: 'Mixed Grill', halalCertified: true },
    ],
    halalGroceryStores: ['Al-Amir Supermarket', 'Patel Brothers', 'Fiesta Mart'],
    halalNeighborhoods: ['Richardson', 'Irving', 'Carrollton', 'Plano'],
    bestCuisines: ['Pakistani', 'Mediterranean', 'Indian', 'Middle Eastern', 'American'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Richardson',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 8,
      halalRestaurantCount: 80,
      description: 'Hub of Muslim community centered around Masjid al-Rahman',
      safetyRating: 9,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Irving',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab', 'African'],
      mosqueCount: 6,
      halalRestaurantCount: 60,
      description: 'Home to Islamic Society of Greater Dallas',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
    {
      name: 'Carrollton',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 40,
      description: 'Growing Muslim community with good schools',
      safetyRating: 9,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Brighter Horizons Academy', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'IANT School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Qalam Institute', 'Various mosque programs'],
    hifzPrograms: ['Multiple programs available'],
    universitiesWithMSA: ['UT Dallas', 'UT Arlington', 'SMU', 'UNT'],
  },

  travelInfo: {
    airport: {
      airportCode: 'DFW',
      hasPrayerRoom: true,
      location: 'Interfaith chapels in terminals',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Some options available'],
    },
    recommendedHotels: ['Hotels near Richardson', 'Irving hotels'],
    touristMosques: ['Islamic Association of North Texas'],
  },

  communityResources: {
    islamicCenters: ['ICNA Dallas', 'Muslim American Society'],
    advocacyOrgs: ['CAIR-Texas Dallas', 'Muslim Legal Fund of America'],
    charities: ['Islamic Relief USA', 'Helping Hands for Relief and Development'],
    socialGroups: ['Muslim professionals networks'],
    converts: ['Convert support programs'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Texas employment laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available through mosques'],
    muslimCemeteries: ['Muslim Cemetery of DFW'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:15 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Called "Medina of America" by Muslim community leader Abdel Rahman Murphy',
    'HQ for many major Muslim organizations (ICNA, Islamic Relief, etc.)',
    'Strong Islamic education infrastructure (Qalam Institute, Bayyina Academy)',
    'Richardson/Plano - thriving halal food scene',
    'Halal Nashville hot chicken pioneer (Ricky\'s)',
  ],

  visitorTips: [
    'Richardson has the most concentrated halal food options',
    'A car is essential - DFW is very spread out',
    'Visit Qalam Institute if interested in Islamic education',
    'Summer heat can be extreme',
  ],

  expatTips: [
    'Richardson, Irving, and Carrollton have strong Muslim communities',
    'Good Islamic school options available',
    'Housing more affordable than coastal cities',
    'Many tech jobs available in the area',
  ],
};

export const philadelphiaData: CityMuslimCommunityData = {
  citySlug: 'philadelphia',
  cityName: 'Philadelphia',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 300000,
    percentage: 5.0,
    yearEstimate: 2024,
    source: 'Local estimates / Pew Research',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'African American', percentage: 50, countries: ['USA'] },
    { group: 'West African', percentage: 15, countries: ['Senegal', 'Guinea', 'Mali'] },
    { group: 'Arab', percentage: 15, countries: ['Palestine', 'Egypt', 'Syria'] },
    { group: 'South Asian', percentage: 15, countries: ['Pakistan', 'Bangladesh', 'India'] },
    { group: 'Other', percentage: 5, countries: ['Uzbekistan', 'Turkey'] },
  ],

  mosques: {
    totalCount: 76,
    majorMosques: [
      {
        name: 'Philadelphia Masjid',
        address: '4700 Wyalusing Ave, Philadelphia, PA 19131',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Historic significance', 'Community programs', 'Ramadan iftars'],
      },
      {
        name: 'Masjid Al-Jamia',
        address: 'West Philadelphia',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Widespread Jummah options throughout the city',
    eidLocations: ['Lincoln Financial Field area', 'Convention Center', 'Parks'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 400,
    topRestaurants: [
      { name: "Asad's Halal", cuisine: 'American Halal', priceRange: '$', neighborhood: 'Multiple locations (10)', specialty: 'Hot Chicken', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets', 'Northeast Philly stores'],
    halalNeighborhoods: ['North Philadelphia', 'West Philadelphia', 'Northeast Philadelphia'],
    bestCuisines: ['Soul Food', 'West African', 'Middle Eastern', 'South Asian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'West Philadelphia',
      muslimPopulation: 'high',
      dominantEthnicities: ['African American', 'West African'],
      mosqueCount: 15,
      halalRestaurantCount: 50,
      description: 'Historic African American Muslim community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Northeast Philadelphia',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Arab', 'South Asian', 'Uzbek'],
      mosqueCount: 10,
      halalRestaurantCount: 60,
      description: 'Growing immigrant Muslim community',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Clara Muhammad School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['UPenn', 'Temple University', 'Drexel University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'PHL',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Center City hotels', 'Hotels near mosques'],
    touristMosques: ['Philadelphia Masjid'],
  },

  communityResources: {
    islamicCenters: ['Major mosques serving as community centers'],
    advocacyOrgs: ['CAIR-Philadelphia'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Strong convert community given African American Muslim history'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Pennsylvania Human Relations Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    '"Mecca of the West" - Highest proportion of Muslims among major US cities',
    'Majority African American Muslim community (unique in US)',
    'Strong African American Muslim legacy since early 20th century',
    'Philly Halal Food Festival - 6,000+ attendees, 52 vendors',
    'Asad\'s chain - pioneer of halal hot chicken in Philly',
  ],

  visitorTips: [
    'Philadelphia has a unique African American Muslim culture',
    'Public transit is good for getting around',
    'Try the halal hot chicken and soul food',
    'Visit historic mosques in West Philadelphia',
  ],

  expatTips: [
    'Philadelphia is more affordable than NYC or DC',
    'Strong convert community and support networks',
    'Good public transit compared to other cities',
    'Rich Islamic history and heritage',
  ],
};

// Export remaining Tier 1 cities
export const atlantaData: CityMuslimCommunityData = {
  citySlug: 'atlanta',
  cityName: 'Atlanta',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 75000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'African American', percentage: 30, countries: ['USA'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 20, countries: ['Egypt', 'Palestine', 'Syria'] },
    { group: 'Somali', percentage: 10, countries: ['Somalia'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 35,
    majorMosques: [
      {
        name: 'Al-Farooq Masjid of Atlanta',
        address: 'Midtown Atlanta',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1990,
        features: ['Religious education', 'Outreach', 'Social services'],
      },
      {
        name: 'Atlanta Masjid of Al-Islam',
        address: 'West End, Atlanta',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1976,
        features: ['Historic mosque', 'Community programs'],
      },
      {
        name: 'Islamic Center of North Fulton',
        address: 'Roswell, GA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1990,
        features: ['Religious education', 'Youth programs', 'Interfaith outreach'],
      },
    ],
    jummahInfo: 'Multiple Jummah options across metro Atlanta',
    eidLocations: ['Georgia World Congress Center', 'Large mosques'],
    qiblaDirection: 52,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [
      { name: "Shujaa's BBQ", cuisine: 'American BBQ', priceRange: '$$', neighborhood: 'Atlanta', specialty: 'Halal BBQ', halalCertified: true },
      { name: "Ameer's Mediterranean Grill", cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Buford Highway', specialty: 'Mixed Grill', halalCertified: true },
      { name: "Rumi's Kitchen", cuisine: 'Persian', priceRange: '$$$', neighborhood: 'Sandy Springs', specialty: 'Persian cuisine', halalCertified: true },
      { name: 'The Halal Guys', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Chicken over Rice', halalCertified: true },
    ],
    halalGroceryStores: ['Buford Highway International Farmers Market', 'Various ethnic grocers'],
    halalNeighborhoods: ['Buford Highway corridor', 'Clarkston', 'Sandy Springs'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Persian', 'BBQ', 'Somali'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Buford Highway Corridor',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Middle Eastern'],
      mosqueCount: 5,
      halalRestaurantCount: 50,
      description: 'Diverse international corridor with many halal options',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
    {
      name: 'Clarkston',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali', 'Afghan', 'Middle Eastern'],
      mosqueCount: 4,
      halalRestaurantCount: 30,
      description: 'Refugee resettlement area with diverse Muslim population',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Farooq Academy', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['Georgia Tech', 'Emory University', 'Georgia State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'ATL',
      hasPrayerRoom: true,
      location: 'Interfaith chapel in Concourse E',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'Sandy Springs hotels'],
    touristMosques: ['Al-Farooq Masjid'],
  },

  communityResources: {
    islamicCenters: ['Atlanta Muslim Community Center (AMCC)'],
    advocacyOrgs: ['CAIR-Georgia', 'Islamic Speakers Bureau of Atlanta'],
    charities: ['Islamic Relief USA', 'Local food pantries'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 6,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Georgia Fair Employment Practices Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections in local cemeteries'],
  },

  prayerTimesInfo: {
    fajrRange: '4:45 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    '6th largest Muslim population among US cities',
    'Diverse refugee resettlement community in Clarkston',
    'Growing halal food scene',
    'Strong interfaith initiatives',
  ],

  visitorTips: [
    'Buford Highway has excellent international and halal food',
    'A car is essential - Atlanta sprawls',
    'Traffic can be very heavy',
    'Atlanta airport (ATL) has an interfaith chapel',
  ],

  expatTips: [
    'North Atlanta suburbs have good Muslim communities',
    'More affordable than coastal cities',
    'Growing job market especially in tech',
    'Join AMCC for community connections',
  ],
};

// Washington DC Data
export const washingtonDCData: CityMuslimCommunityData = {
  citySlug: 'washington-dc',
  cityName: 'Washington D.C.',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 150000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'Pew Research / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'African', percentage: 30, countries: ['Ethiopia', 'Somalia', 'Sudan'] },
    { group: 'Arab', percentage: 25, countries: ['Egypt', 'Palestine', 'Syria', 'Morocco'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'Bangladesh', 'India'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Other', percentage: 5, countries: ['Turkey', 'Indonesia'] },
  ],

  mosques: {
    totalCount: 50,
    majorMosques: [
      {
        name: 'Islamic Center of Washington DC',
        address: '2551 Massachusetts Ave NW, Washington, DC 20008',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1957,
        features: ['Historic mosque', '160-foot minaret', 'Holds 7,000 worshippers', 'Near Embassy Row'],
      },
      {
        name: 'Masjid Muhammad',
        address: '1519 4th St NW, Washington, DC 20001',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'African American',
        languages: ['English', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['First mosque built by African American Muslims in US', 'Civil Rights history'],
      },
      {
        name: 'Dar Al Hijrah Islamic Center',
        address: '3159 Row St, Falls Church, VA 22044',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['15,000+ sq ft', 'Full community services'],
      },
    ],
    jummahInfo: 'Multiple options throughout DC and Northern Virginia',
    eidLocations: ['Walter E. Washington Convention Center', 'Large mosques'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 300,
    topRestaurants: [
      { name: 'Zaytinya', cuisine: 'Mediterranean', priceRange: '$$$', neighborhood: 'Penn Quarter', specialty: 'Turkish/Greek Mezze', halalCertified: false, rating: 4.5 },
      { name: 'The Halal Guys', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Multiple locations', specialty: 'Chicken over Rice', halalCertified: true },
      { name: "Amoo's Restaurant", cuisine: 'Persian', priceRange: '$$', neighborhood: 'Dupont Circle', specialty: 'Persian cuisine', halalCertified: true },
    ],
    halalGroceryStores: ['Halalco', 'Various ethnic markets in Northern Virginia'],
    halalNeighborhoods: ['Adams Morgan', 'Dupont Circle', 'Falls Church (VA)', 'Herndon (VA)'],
    bestCuisines: ['Ethiopian', 'Middle Eastern', 'South Asian', 'Persian'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Falls Church/Northern Virginia',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'South Asian', 'African'],
      mosqueCount: 15,
      halalRestaurantCount: 100,
      description: 'Large Muslim community with Dar Al Hijrah',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'good',
    },
    {
      name: 'Adams Morgan',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Ethiopian', 'Eritrean'],
      mosqueCount: 3,
      halalRestaurantCount: 30,
      description: 'Diverse neighborhood with Ethiopian community',
      safetyRating: 7,
      affordability: 'expensive',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Fatih Academy', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'ISA Academy', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['Georgetown University', 'George Washington University', 'American University', 'Howard University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'IAD',
      hasPrayerRoom: true,
      location: 'Interfaith chapel in main terminal',
      is24Hours: true,
      hasWuduFacility: false,
      halalFoodOptions: ['Some options available'],
    },
    recommendedHotels: ['Hotels near Metro stations', 'Northern Virginia hotels'],
    touristMosques: ['Islamic Center of Washington DC'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of Washington DC', 'Dar Al Hijrah'],
    advocacyOrgs: ['CAIR National Office', 'Muslim Advocates', 'MPAC DC Office'],
    charities: ['Islamic Relief USA HQ', 'ICNA Relief'],
    socialGroups: ['Muslim Capitol Hill staffers network', 'DC Muslim professionals'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['DC Human Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Islamic Center of Washington - iconic mosque near Embassy Row',
    'First mosque built by African American Muslims (Masjid Muhammad)',
    'Spice Village - first all-halal food hall in the country (Herndon)',
    'Many national Muslim organizations headquartered here',
    'Strong Muslim political presence on Capitol Hill',
  ],

  visitorTips: [
    'The Islamic Center of Washington is a must-see architectural gem',
    'Metro is excellent for getting around DC',
    'Northern Virginia (Falls Church, Herndon) has the best halal food options',
    'Adams Morgan has great Ethiopian restaurants',
  ],

  expatTips: [
    'Northern Virginia offers best balance of halal amenities and suburbs',
    'DC itself is expensive - consider Maryland or Virginia suburbs',
    'Many government and nonprofit jobs available',
    'Strong Muslim professional networks',
  ],
};

// San Francisco Data
export const sanFranciscoData: CityMuslimCommunityData = {
  citySlug: 'san-francisco',
  cityName: 'San Francisco Bay Area',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 250000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 40, countries: ['Pakistan', 'India', 'Bangladesh', 'Afghanistan'] },
    { group: 'Arab', percentage: 25, countries: ['Palestine', 'Egypt', 'Yemen'] },
    { group: 'African American', percentage: 15, countries: ['USA'] },
    { group: 'Persian', percentage: 10, countries: ['Iran'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'Bosnian', 'Somali'] },
  ],

  mosques: {
    totalCount: 60,
    majorMosques: [
      {
        name: 'Muslim Community Association (MCA)',
        address: '3003 Scott Blvd, Santa Clara, CA 95054',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM', '1:30 PM'],
        features: ['One of largest on West Coast', 'Serves thousands of families', 'Cafeteria seeking halal vendors'],
      },
      {
        name: 'Islamic Center of San Francisco',
        address: '400 Crescent Ave, San Francisco, CA 94110',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community leader in Bay Area', 'Religious and social services'],
      },
      {
        name: 'AlSabeel Masjid Noor Al-Islam',
        address: 'San Francisco',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Most mosques host daily iftars during Ramadan',
    eidLocations: ['Convention centers', 'Large mosques'],
    qiblaDirection: 22,
  },

  halalFood: {
    restaurantCount: 400,
    topRestaurants: [
      { name: 'Various Mediterranean restaurants', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Throughout Bay Area', specialty: 'Mixed options', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets in Fremont and Santa Clara'],
    halalNeighborhoods: ['Fremont', 'Santa Clara', 'San Jose', 'Oakland'],
    bestCuisines: ['Afghan', 'Pakistani', 'Indian', 'Middle Eastern', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Postmates'],
  },

  muslimNeighborhoods: [
    {
      name: 'Fremont',
      muslimPopulation: 'high',
      dominantEthnicities: ['Afghan', 'Pakistani', 'Indian', 'Arab'],
      mosqueCount: 8,
      halalRestaurantCount: 80,
      description: 'Center of Muslim life in Northern California with largest population',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'good',
    },
    {
      name: 'Santa Clara',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 5,
      halalRestaurantCount: 60,
      description: 'Silicon Valley hub with MCA - one of largest mosques on West Coast',
      safetyRating: 9,
      affordability: 'expensive',
      publicTransport: 'good',
    },
    {
      name: 'San Jose',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'Turkish', 'Somali', 'Pakistani', 'Bosnian'],
      mosqueCount: 10,
      halalRestaurantCount: 70,
      description: 'Most diverse Muslim community with Evergreen and Alum Rock neighborhoods',
      safetyRating: 7,
      affordability: 'expensive',
      publicTransport: 'limited',
    },
    {
      name: 'Oakland',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African American'],
      mosqueCount: 6,
      halalRestaurantCount: 30,
      description: 'Historic African American Muslim community',
      safetyRating: 6,
      affordability: 'expensive',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Granada Islamic School', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
      { name: 'MCA Academy', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['Stanford University', 'UC Berkeley', 'San Jose State', 'Santa Clara University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SFO',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Hotels near BART stations', 'Silicon Valley hotels'],
    touristMosques: ['Muslim Community Association', 'Islamic Center of San Francisco'],
  },

  communityResources: {
    islamicCenters: ['MCA', 'Islamic Center of San Francisco', 'ICSF'],
    advocacyOrgs: ['CAIR-SF Bay Area'],
    charities: ['Islamic Relief USA', 'Local charities'],
    socialGroups: ['Muslim tech professionals groups', 'HalalFest organization'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 7,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['California Fair Employment and Housing Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Fremont - Center of Muslim life in Northern California',
    'MCA (Santa Clara) - One of largest mosques on West Coast',
    'Strong tech industry Muslim professionals',
    'HalalFest - cultural events and food festivals',
    'Oakland - Deep historical significance for African American Muslims',
  ],

  visitorTips: [
    'Fremont has the best concentration of halal food',
    'BART provides good public transit',
    'Weather is mild year-round',
    'Silicon Valley mosques are well-funded and modern',
  ],

  expatTips: [
    'Bay Area is very expensive - budget accordingly',
    'Fremont and South Bay have best Muslim infrastructure',
    'Tech jobs plentiful for skilled workers',
    'Strong community organizations',
  ],
};

// Boston Data
export const bostonData: CityMuslimCommunityData = {
  citySlug: 'boston',
  cityName: 'Boston',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Pew Research Center',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 35, countries: ['Pakistan', 'Bangladesh', 'India'] },
    { group: 'Arab', percentage: 25, countries: ['Morocco', 'Egypt', 'Palestine'] },
    { group: 'African', percentage: 20, countries: ['Somalia', 'Nigeria', 'Ethiopia'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Indonesia', 'Bosnian'] },
  ],

  mosques: {
    totalCount: 40,
    majorMosques: [
      {
        name: 'Islamic Society of Boston Cultural Center (ISBCC)',
        address: '100 Malcolm X Blvd, Boston, MA 02120',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu', 'Bengali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Largest mosque in Boston', 'Located in Roxbury', 'Cultural and religious center'],
      },
    ],
    jummahInfo: 'Multiple options throughout Greater Boston',
    eidLocations: ['ISBCC', 'Various large venues'],
    qiblaDirection: 58,
  },

  halalFood: {
    restaurantCount: 66,
    topRestaurants: [
      { name: 'Darbar', cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'Cambridge', specialty: 'Biryani', halalCertified: true },
      { name: 'Boston Shawarma', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Shawarma', halalCertified: true },
      { name: 'The Helmand Restaurant', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'Cambridge', specialty: 'Afghan cuisine', halalCertified: true },
      { name: 'Ashur Restaurant', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Boston', specialty: 'Iraqi cuisine', halalCertified: true },
      { name: 'Ali Baba', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Cambridge', specialty: 'Falafel', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets', 'Supermarkets with halal sections'],
    halalNeighborhoods: ['Revere', 'Everett', 'Medford', 'Cambridge'],
    bestCuisines: ['Pakistani', 'Afghan', 'Middle Eastern', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Roxbury',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African American', 'African'],
      mosqueCount: 4,
      halalRestaurantCount: 15,
      description: 'Home to ISBCC, the largest mosque in Boston',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Cambridge',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'University area with MSAs at Harvard and MIT',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Noor Academy', grades: 'Pre-K - 12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['MIT', 'Harvard University', 'Boston University', 'Northeastern University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BOS',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'Cambridge hotels'],
    touristMosques: ['ISBCC'],
  },

  communityResources: {
    islamicCenters: ['Islamic Society of Boston'],
    advocacyOrgs: ['CAIR-Massachusetts'],
    charities: ['Islamic Relief USA', 'Local charities'],
    socialGroups: ['Muslim professionals groups', 'University MSAs'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Massachusetts General Laws Chapter 151B'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Multiple options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '14-17 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'World-class universities with thriving MSAs (MIT, Harvard)',
    'Strong academic and biomedical Muslim professionals',
    'Influential community despite smaller size',
    'Robust interfaith work',
    'Historic immigrant communities',
  ],

  visitorTips: [
    'Public transit (MBTA) is excellent',
    'Cambridge has good halal food options near Harvard/MIT',
    'Winters are very cold - dress warmly',
    'Visit ISBCC in Roxbury',
  ],

  expatTips: [
    'Housing is expensive - consider suburbs',
    'World-class education and healthcare',
    'Strong job market in tech and biomedical',
    'MSAs at universities provide good community',
  ],
};

// Phoenix Data
export const phoenixData: CityMuslimCommunityData = {
  citySlug: 'phoenix',
  cityName: 'Phoenix',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 60000,
    percentage: 1.2,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Palestine', 'Iraq', 'Syria'] },
    { group: 'South Asian', percentage: 30, countries: ['Pakistan', 'India', 'Afghanistan'] },
    { group: 'African', percentage: 20, countries: ['Somalia', 'Sudan'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Burmese'] },
  ],

  mosques: {
    totalCount: 30,
    majorMosques: [
      {
        name: 'Islamic Community Center of Phoenix',
        address: 'North Phoenix',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['12:30 PM', '1:30 PM'],
        features: ['Largest mosque in Arizona', 'Serves 5,000+ families'],
      },
      {
        name: 'Islamic Center of the Northeast Valley',
        address: 'Scottsdale/Paradise Valley area',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Muslim Community Mosque',
        address: '1818 N 32nd St, Phoenix, AZ',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Multiple options across the valley',
    eidLocations: ['Islamic Community Center outdoor carnival', 'Convention centers'],
    qiblaDirection: 35,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Haji-Baba', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Phoenix', specialty: 'Persian/Middle Eastern', halalCertified: true },
      { name: 'Kabob Grill N Go', cuisine: 'Mediterranean', priceRange: '$', neighborhood: 'Various', specialty: 'Grilled meats', halalCertified: true },
      { name: 'Rayoog Cafe', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Gilbert', specialty: 'Shakshuka', halalCertified: true },
    ],
    halalGroceryStores: ['Haji-Baba market', 'Various ethnic grocers'],
    halalNeighborhoods: ['Tempe', 'Mesa', 'Chandler'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Mediterranean', 'Somali'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Tempe',
      muslimPopulation: 'medium',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 25,
      description: 'University area with ASU MSA',
      safetyRating: 8,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic Community Center of Phoenix School', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['Arizona State University', 'University of Arizona'],
  },

  travelInfo: {
    airport: {
      airportCode: 'PHX',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Scottsdale hotels', 'Phoenix downtown hotels'],
    touristMosques: ['Islamic Community Center of Phoenix'],
  },

  communityResources: {
    islamicCenters: ['Islamic Community Center of Phoenix'],
    advocacyOrgs: ['CAIR-Arizona'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 7,
    niqabAcceptance: 6,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Arizona Civil Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '13-15 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Growing refugee community (Somali, Afghan, Iraqi, Burmese)',
    'Halalify app - built in Arizona to help find halal restaurants',
    'AZ Halal Eats social media community',
    'Halal Foodie Fest draws thousands annually',
    'Ramadan Suhoor Festival',
  ],

  visitorTips: [
    'Summer heat is extreme (110°F+) - plan accordingly',
    'A car is essential',
    'Haji-Baba is a local institution',
    'Use Halalify app to find restaurants',
  ],

  expatTips: [
    'Housing more affordable than coastal cities',
    'Growing job market',
    'Active Muslim community events',
    'Plan for extreme summer heat',
  ],
};

// Seattle Data
export const seattleData: CityMuslimCommunityData = {
  citySlug: 'seattle',
  cityName: 'Seattle',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 100000,
    percentage: 2.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Somali', percentage: 35, countries: ['Somalia'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'Arab', percentage: 20, countries: ['Palestine', 'Iraq', 'Syria'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'Southeast Asian'] },
  ],

  mosques: {
    totalCount: 35,
    majorMosques: [
      {
        name: 'Muslim Association of Puget Sound (MAPS)',
        address: 'Redmond, WA',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 2006,
        features: ['Largest Islamic center in Washington', '5,000+ families from 50+ countries'],
      },
      {
        name: 'Downtown Muslim Association of Seattle',
        address: '1217 6th Avenue, Seattle, WA',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Convenient downtown location'],
      },
      {
        name: 'Idris Mosque',
        address: '1420 NE Northgate Way, Seattle, WA',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'East African',
        languages: ['Arabic', 'English', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Options throughout Seattle and Eastside',
    eidLocations: ['Convention centers', 'Large mosques'],
    qiblaDirection: 18,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [
      { name: 'Mawadda Café', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'South Seattle', specialty: 'Middle Eastern', halalCertified: true },
      { name: 'Banadir', cuisine: 'Somali', priceRange: '$', neighborhood: 'Rainier Valley', specialty: 'Somali cuisine', halalCertified: true },
      { name: 'Salima Specialties', cuisine: 'Southeast Asian/Fusion', priceRange: '$$', neighborhood: 'Skyway', specialty: 'Cham cuisine', halalCertified: true },
      { name: 'Cafe Turko', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Fremont', specialty: 'Turkish coffee', halalCertified: true },
      { name: 'Mamnoon', cuisine: 'Middle Eastern', priceRange: '$$$', neighborhood: 'Capitol Hill', specialty: 'Lebanese/Syrian', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal markets in Rainier Beach and White Center'],
    halalNeighborhoods: ['Rainier Beach', 'White Center', 'U District', 'Kent'],
    bestCuisines: ['Somali', 'Middle Eastern', 'Turkish', 'Southeast Asian', 'Pakistani'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Rainier Valley/Rainier Beach',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali', 'East African'],
      mosqueCount: 6,
      halalRestaurantCount: 40,
      description: 'Strong Somali community with halal restaurants',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Eastside (Redmond/Bellevue)',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Arab'],
      mosqueCount: 8,
      halalRestaurantCount: 50,
      description: 'Tech professionals, home to MAPS',
      safetyRating: 9,
      affordability: 'expensive',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Al-Noor Academy', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['MAPS weekend school', 'Various mosque programs'],
    hifzPrograms: ['Available at major mosques'],
    universitiesWithMSA: ['University of Washington', 'Seattle University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SEA',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown Seattle hotels', 'Eastside hotels'],
    touristMosques: ['MAPS in Redmond'],
  },

  communityResources: {
    islamicCenters: ['Muslim Association of Puget Sound'],
    advocacyOrgs: ['CAIR-Washington'],
    charities: ['Islamic Relief USA', 'Local charities'],
    socialGroups: ['Seattle Halal Foodies (13,000 members Facebook group)'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 7,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['Washington Law Against Discrimination'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:15 AM (summer) - 6:00 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'MAPS - Largest Islamic center in Washington with 5,000+ families',
    'Seattle Halal Foodies - 13,000 member Facebook community',
    'Interactive map of 40+ halal restaurants',
    'Strong Somali community',
    'Tech industry Muslim professionals',
  ],

  visitorTips: [
    'Most halal places are north (U District) or south (Rainier Beach)',
    'Rain is common - bring layers',
    'Public transit is good',
    'Use Seattle Halal Foodies for recommendations',
  ],

  expatTips: [
    'Eastside (Redmond/Bellevue) has tech jobs and good Muslim community',
    'Housing is expensive',
    'Strong job market in tech',
    'Join MAPS for community',
  ],
};

// Minneapolis Data
export const minneapolisData: CityMuslimCommunityData = {
  citySlug: 'minneapolis',
  cityName: 'Minneapolis',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 150000,
    percentage: 4.5,
    yearEstimate: 2024,
    source: 'Census data / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Somali', percentage: 60, countries: ['Somalia'] },
    { group: 'Oromo', percentage: 15, countries: ['Ethiopia'] },
    { group: 'Arab', percentage: 10, countries: ['Palestine', 'Iraq'] },
    { group: 'South Asian', percentage: 10, countries: ['Pakistan', 'Bangladesh'] },
    { group: 'Other', percentage: 5, countries: ['Bosnian', 'African American'] },
  ],

  mosques: {
    totalCount: 40,
    majorMosques: [
      {
        name: 'Dar al-Hijrah Islamic Civic Center',
        address: 'Cedar-Riverside, Minneapolis',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Somali',
        languages: ['Somali', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1998,
        features: ['First Somali-run mosque', 'Converted from knitting factory', 'Community hub'],
      },
      {
        name: 'Tawfiq Islamic Center',
        address: 'Minneapolis',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Oromo',
        languages: ['Oromo', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['First and largest Oromo mosque in North America'],
      },
      {
        name: 'Islamic Cultural Community Center: Masjid Al-Huda',
        address: 'Northeast Minneapolis',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Half of Minnesota\'s mosques are in the Twin Cities, majority Somali-founded',
    eidLocations: ['Convention centers', 'Large mosques'],
    qiblaDirection: 47,
  },

  halalFood: {
    restaurantCount: 200,
    topRestaurants: [
      { name: 'Hamdi Restaurant', cuisine: 'Somali/East African', priceRange: '$', neighborhood: 'Cedar-Riverside', specialty: 'Traditional Somali', halalCertified: true },
      { name: 'Afro Deli', cuisine: 'African Fusion', priceRange: '$$', neighborhood: 'Various', specialty: 'African/Mediterranean/American fusion', halalCertified: true },
      { name: 'Marhaba Grill', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Minneapolis', specialty: 'Buffet', halalCertified: true },
    ],
    halalGroceryStores: ['Karmel Mall stores', 'Various Somali grocers'],
    halalNeighborhoods: ['Cedar-Riverside (Little Mogadishu)', 'Karmel Mall area'],
    bestCuisines: ['Somali', 'Ethiopian/Oromo', 'Middle Eastern'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'Cedar-Riverside (Little Mogadishu)',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali'],
      mosqueCount: 10,
      halalRestaurantCount: 80,
      description: 'Heart of Somali community, nicknamed Little Mogadishu',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Ubah Medical Academy', grades: 'K - 12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at mosques'],
    universitiesWithMSA: ['University of Minnesota'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MSP',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown Minneapolis hotels'],
    touristMosques: ['Dar al-Hijrah'],
  },

  communityResources: {
    islamicCenters: ['Multiple Somali-run centers'],
    advocacyOrgs: ['CAIR-Minnesota (very active)'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Somali community organizations'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Minnesota Human Rights Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    'Largest Somali population outside of Somalia (91,000+)',
    'First US city to allow adhan on loudspeakers from mosques',
    'Little Mogadishu - Cedar-Riverside neighborhood',
    'Karmel Mall - 200+ Somali/East African businesses',
    'Muslim elected officials (Keith Ellison, Ilhan Omar)',
    'Strong political engagement',
  ],

  visitorTips: [
    'Cedar-Riverside is the heart of Somali culture',
    'Karmel Mall is a unique shopping experience',
    'Winters are extremely cold - dress very warmly',
    'Try authentic Somali cuisine',
  ],

  expatTips: [
    'Strong Somali community and support networks',
    'Housing more affordable than coastal cities',
    'Very cold winters (-20°F not unusual)',
    'Active Muslim political scene',
  ],
};

// San Diego Data
export const sanDiegoData: CityMuslimCommunityData = {
  citySlug: 'san-diego',
  cityName: 'San Diego',
  country: 'United States',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 2.4,
    yearEstimate: 2024,
    source: 'California Muslim population estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Arab', percentage: 30, countries: ['Iraq', 'Palestine', 'Syria', 'Egypt'] },
    { group: 'Somali', percentage: 25, countries: ['Somalia'] },
    { group: 'South Asian', percentage: 25, countries: ['Pakistan', 'India', 'Bangladesh'] },
    { group: 'African American', percentage: 10, countries: ['USA'] },
    { group: 'Other', percentage: 10, countries: ['Indonesia', 'Turkey'] },
  ],

  mosques: {
    totalCount: 25,
    majorMosques: [
      {
        name: 'Islamic Center of San Diego',
        address: 'San Diego, CA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Community events', 'Classes', 'Mosque tours', 'Beautiful prayer area'],
      },
      {
        name: 'Greater San Diego Muslim Community Center (GSDMCC)',
        address: 'San Diego, CA',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community events', 'Fall festival with halal food court'],
      },
      {
        name: 'Masjid An-Nur',
        address: 'San Diego, CA',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Multiple mosques throughout San Diego County',
    eidLocations: ['Convention centers', 'Large mosques'],
    qiblaDirection: 25,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Halal Burger Co', cuisine: 'American', priceRange: '$$', neighborhood: 'College Area', specialty: 'Halal burgers', halalCertified: true },
    ],
    halalGroceryStores: ['HFSAA certified markets', 'Various ethnic grocers'],
    halalNeighborhoods: ['City Heights', 'El Cajon', 'College Area'],
    bestCuisines: ['Middle Eastern', 'Pakistani', 'Somali', 'American'],
    foodDeliveryApps: ['Uber Eats', 'DoorDash', 'Grubhub'],
  },

  muslimNeighborhoods: [
    {
      name: 'City Heights',
      muslimPopulation: 'high',
      dominantEthnicities: ['Somali', 'Iraqi', 'Afghan'],
      mosqueCount: 5,
      halalRestaurantCount: 30,
      description: 'Diverse refugee community',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'El Cajon',
      muslimPopulation: 'high',
      dominantEthnicities: ['Iraqi', 'Syrian', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 40,
      description: 'Large Iraqi refugee community',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'limited',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic School of San Diego', grades: 'Pre-K - 8', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Various mosque programs'],
    hifzPrograms: ['Available at mosques'],
    universitiesWithMSA: ['UC San Diego', 'San Diego State University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SAN',
      hasPrayerRoom: true,
      location: 'Interfaith chapel',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['Downtown hotels', 'Hotels near mosques'],
    touristMosques: ['Islamic Center of San Diego'],
  },

  communityResources: {
    islamicCenters: ['Islamic Center of San Diego', 'GSDMCC'],
    advocacyOrgs: ['CAIR-San Diego'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Muslim professionals groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 6,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    legalProtections: ['California Fair Employment and Housing Act'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '4:30 AM (summer) - 5:45 AM (winter)',
    ramadanFastingHours: '13-16 hours',
    calculationMethod: 'ISNA',
  },

  uniqueFeatures: [
    '55% of Muslim Californians dine out weekly',
    'Growing halal restaurant scene',
    'Halal "kimchi kebab" fusion went viral (2024)',
    'Halal food trucks popular',
    'HFSAA certification active in area',
    'Large Iraqi refugee community in El Cajon',
  ],

  visitorTips: [
    'Great weather year-round',
    'El Cajon has authentic Middle Eastern food',
    'Beach culture is family-friendly',
    'A car is helpful but not essential',
  ],

  expatTips: [
    'More affordable than LA or Bay Area',
    'Good weather and quality of life',
    'Growing Muslim community',
    'Strong refugee support services',
  ],
};

// Export all US Tier 1 cities data
export const usTier1CitiesData: Record<string, CityMuslimCommunityData> = {
  'new-york': newYorkData,
  'los-angeles': losAngelesData,
  'chicago': chicagoData,
  'houston': houstonData,
  'detroit': detroitData,
  'dallas': dallasData,
  'philadelphia': philadelphiaData,
  'atlanta': atlantaData,
  'washington-dc': washingtonDCData,
  'san-francisco': sanFranciscoData,
  'boston': bostonData,
  'phoenix': phoenixData,
  'seattle': seattleData,
  'minneapolis': minneapolisData,
  'san-diego': sanDiegoData,
};
