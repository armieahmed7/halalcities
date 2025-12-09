// UK Cities Muslim Community Research Data
// Research compiled December 2024

import { CityMuslimCommunityData } from '../muslim-community-data';

export const londonData: CityMuslimCommunityData = {
  citySlug: 'london',
  cityName: 'London',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 1300000,
    percentage: 15,
    yearEstimate: 2024,
    source: 'Census and local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 45, countries: ['Bangladesh', 'Pakistan', 'India'] },
    { group: 'Arab', percentage: 20, countries: ['Morocco', 'Egypt', 'Iraq', 'Somalia'] },
    { group: 'Turkish', percentage: 10, countries: ['Turkey', 'Cyprus'] },
    { group: 'African', percentage: 15, countries: ['Nigeria', 'Somalia', 'Sudan'] },
    { group: 'Other', percentage: 10, countries: ['Malaysia', 'Indonesia', 'converts'] },
  ],

  mosques: {
    totalCount: 462,
    majorMosques: [
      {
        name: 'London Central Mosque (Regents Park Mosque)',
        address: '146 Park Rd, London NW8 7RG',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM', '2:00 PM'],
        established: 1978,
        features: ['Golden dome landmark', 'Islamic Cultural Centre (1944)', 'Donated by King George VI'],
      },
      {
        name: 'East London Mosque',
        address: '82-92 Whitechapel Rd, London E1 1JQ',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Bangladeshi/Multi-ethnic',
        languages: ['Bengali', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1941,
        features: ['One of largest in Europe', 'Purpose-built 1985', 'Community services'],
      },
      {
        name: 'Baitul Futuh Mosque',
        address: 'London Rd, Morden SM4 5HF',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Ahmadiyya',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2003,
        features: ['Largest mosque in London', '10,000 capacity', 'Library', 'Exhibition halls'],
      },
    ],
    jummahInfo: '462 mosques across London serving diverse communities',
    eidLocations: ['Various parks', 'ExCeL London', 'Large mosques'],
    qiblaDirection: 119,
  },

  halalFood: {
    restaurantCount: 5000,
    topRestaurants: [
      { name: 'Gymkhana', cuisine: 'Indian', priceRange: '$$$$', neighborhood: 'Mayfair', specialty: 'Fine dining Indian', halalCertified: true, rating: 5 },
      { name: 'Tayyabs', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Whitechapel', specialty: 'Punjabi cuisine', halalCertified: true },
      { name: 'Berenjak', cuisine: 'Persian', priceRange: '$$$', neighborhood: 'Soho', specialty: 'Contemporary Persian', halalCertified: true },
      { name: 'Roti King', cuisine: 'Malaysian', priceRange: '$', neighborhood: 'Euston', specialty: 'Roti canai', halalCertified: true },
      { name: 'Hafiz Mustafa', cuisine: 'Turkish Desserts', priceRange: '$$', neighborhood: 'Knightsbridge', specialty: 'Turkish sweets', halalCertified: true },
    ],
    halalGroceryStores: ['Supermarket halal sections', 'Turkish supermarkets', 'Local halal butchers'],
    halalNeighborhoods: ['Whitechapel Road', 'Brick Lane', 'Edgware Road', 'Bayswater', 'Tooting', 'Southall', 'Wembley'],
    bestCuisines: ['Indian', 'Pakistani', 'Turkish', 'Lebanese', 'Malaysian', 'Moroccan'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Whitechapel/Tower Hamlets',
      muslimPopulation: 'high',
      dominantEthnicities: ['Bangladeshi'],
      mosqueCount: 50,
      halalRestaurantCount: 200,
      description: 'Heart of British Bangladeshi community with East London Mosque',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Edgware Road',
      muslimPopulation: 'high',
      dominantEthnicities: ['Arab', 'Lebanese', 'Egyptian'],
      mosqueCount: 10,
      halalRestaurantCount: 100,
      description: '"Little Arabia" - Middle Eastern restaurants, cafes, shisha lounges',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'excellent',
    },
    {
      name: 'Tooting',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Indian', 'Sri Lankan'],
      mosqueCount: 8,
      halalRestaurantCount: 80,
      description: 'Affordable South Asian food scene',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Southall',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Indian', 'Afghani'],
      mosqueCount: 6,
      halalRestaurantCount: 60,
      description: 'Traditional South Asian atmosphere',
      safetyRating: 7,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'London East Academy', grades: 'Reception - Year 11', type: 'full-time', accredited: true },
      { name: 'Islamia Primary School', grades: 'Reception - Year 6', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Numerous mosque madrasas'],
    hifzPrograms: ['Multiple programs available'],
    universitiesWithMSA: ['UCL', 'Kings College', 'SOAS', 'LSE', 'Imperial College'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LHR',
      hasPrayerRoom: true,
      location: 'Multi-faith rooms in all terminals',
      is24Hours: true,
      hasWuduFacility: true,
      halalFoodOptions: ['Multiple options in terminals'],
    },
    recommendedHotels: ['Halal-friendly hotels available', 'Hotels near Edgware Road'],
    touristMosques: ['London Central Mosque', 'East London Mosque'],
  },

  communityResources: {
    islamicCenters: ['Islamic Cultural Centre', 'Muslim Council of Britain'],
    advocacyOrgs: ['Muslim Council of Britain', 'MEND'],
    charities: ['Islamic Relief UK', 'Muslim Aid', 'Penny Appeal'],
    socialGroups: ['Muslim professional networks'],
    converts: ['iERA', 'New Muslim support groups'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 9,
    niqabAcceptance: 7,
    beardAcceptance: 9,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['Al Rayan Bank', 'Bank of London and The Middle East', 'Gatehouse Bank'],
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Multiple services available'],
    muslimCemeteries: ['Gardens of Peace', 'Brookwood Cemetery Muslim section'],
  },

  prayerTimesInfo: {
    fajrRange: '2:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Halal restaurant scene worth £2.6 billion',
    '462 mosques - one in almost every neighbourhood',
    'Gymkhana - two Michelin stars (highest rated halal)',
    'HMC and HFA certification bodies',
    'Islamic banking widely available',
    'Most diverse Muslim community in Europe',
  ],

  visitorTips: [
    'Edgware Road for Middle Eastern food late night',
    'Brick Lane for curry houses',
    'London Central Mosque is a must-see landmark',
    'Most supermarkets have halal sections',
    'Use Deliveroo or Uber Eats for halal delivery',
  ],

  expatTips: [
    'Tower Hamlets has highest Muslim concentration',
    'Islamic schools available across the city',
    'Islamic banking and mortgages readily available',
    'NHS has many Muslim healthcare providers',
    'Join local mosque communities for networks',
  ],
};

export const birminghamData: CityMuslimCommunityData = {
  citySlug: 'birmingham',
  cityName: 'Birmingham',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 280000,
    percentage: 30,
    yearEstimate: 2024,
    source: '2021 Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani (Mirpuri)', percentage: 55, countries: ['Pakistan'] },
    { group: 'Bangladeshi', percentage: 15, countries: ['Bangladesh'] },
    { group: 'Somali', percentage: 10, countries: ['Somalia'] },
    { group: 'Yemeni', percentage: 5, countries: ['Yemen'] },
    { group: 'Other', percentage: 15, countries: ['India', 'Iraq', 'Eastern Europe', 'converts'] },
  ],

  mosques: {
    totalCount: 200,
    majorMosques: [
      {
        name: 'Birmingham Central Mosque',
        address: 'Belgrave Middleway, Highgate, Birmingham B12 0XS',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1975,
        features: ['One of largest in Western Europe when built', 'Prominent UK Islamic center'],
      },
      {
        name: 'Central Jamia Masjid Ghamkol Sharif',
        address: 'Sparkhill, Birmingham',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Pakistani',
        languages: ['Urdu', 'Punjabi', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Major Pakistani community mosque'],
      },
      {
        name: 'Green Lane Mosque',
        address: 'Small Heath, Birmingham',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Headquarters of Jamiat Ahl-e-Hadith UK'],
      },
    ],
    jummahInfo: 'Over 200 mosques across Birmingham',
    eidLocations: ['Large mosques', 'Parks', 'Convention venues'],
    qiblaDirection: 118,
  },

  halalFood: {
    restaurantCount: 1000,
    topRestaurants: [
      { name: 'Sparkbrook restaurants', cuisine: 'Pakistani', priceRange: '$', neighborhood: 'Sparkbrook', specialty: 'Curry', halalCertified: true },
    ],
    halalGroceryStores: ['Numerous halal butchers and grocers'],
    halalNeighborhoods: ['Sparkbrook', 'Small Heath', 'Balsall Heath', 'Alum Rock'],
    bestCuisines: ['Pakistani', 'Bangladeshi', 'Yemeni', 'Somali'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Sparkbrook',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi'],
      mosqueCount: 30,
      halalRestaurantCount: 150,
      description: 'Major Muslim neighborhood with extensive halal options',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Small Heath',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi'],
      mosqueCount: 25,
      halalRestaurantCount: 100,
      description: 'Home to Green Lane Mosque',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Alum Rock',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani'],
      mosqueCount: 20,
      halalRestaurantCount: 80,
      description: 'Traditional Pakistani community area',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Multiple Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Numerous mosque madrasas'],
    hifzPrograms: ['Multiple programs available'],
    universitiesWithMSA: ['University of Birmingham', 'Aston University', 'Birmingham City University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BHX',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: true,
      halalFoodOptions: ['Some options available'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Birmingham Central Mosque'],
  },

  communityResources: {
    islamicCenters: ['Birmingham Central Mosque'],
    advocacyOrgs: ['Local Muslim organizations'],
    charities: ['Islamic Relief UK', 'Muslim Aid'],
    socialGroups: ['Community organizations'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 8,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['Al Rayan Bank'],
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Multiple services'],
    muslimCemeteries: ['Muslim cemetery sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:45 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-18 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    '30% Muslim population - one of highest in UK',
    '43.5% of under-18s from Muslim backgrounds',
    'Over 200 mosques including converted buildings',
    'Most diverse Muslim community after London',
    'Major Mirpuri Kashmiri diaspora',
    'New Islamic Centre of Britain development',
  ],

  visitorTips: [
    'Sparkbrook and Small Heath for authentic food',
    'Birmingham Central Mosque worth visiting',
    'Halal food widely available throughout city',
    'Strong community atmosphere',
  ],

  expatTips: [
    'Multiple Muslim-majority neighborhoods',
    'Very affordable compared to London',
    'Strong Islamic school options',
    'Tight-knit community networks',
  ],
};

export const manchesterData: CityMuslimCommunityData = {
  citySlug: 'manchester',
  cityName: 'Manchester',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 15,
    yearEstimate: 2024,
    source: 'Census estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani', percentage: 45, countries: ['Pakistan'] },
    { group: 'Bangladeshi', percentage: 20, countries: ['Bangladesh'] },
    { group: 'Arab', percentage: 15, countries: ['Syria', 'Iraq', 'Morocco'] },
    { group: 'Somali', percentage: 10, countries: ['Somalia'] },
    { group: 'Other', percentage: 10, countries: ['Turkey', 'converts', 'various'] },
  ],

  mosques: {
    totalCount: 100,
    majorMosques: [
      {
        name: 'Manchester Central Mosque (Victoria Park Mosque)',
        address: 'Victoria Park, Manchester',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Biggest mosque in Manchester', 'Historic Syrian-founded'],
      },
      {
        name: 'Didsbury Mosque',
        address: 'Didsbury, Manchester',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Historic mosque founded by Syrian community'],
      },
    ],
    jummahInfo: 'Around 100 mosques in Greater Manchester',
    eidLocations: ['Platt Fields Park', 'Large mosques', 'Convention centers'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 500,
    topRestaurants: [
      { name: 'Zouk Tea Bar & Grill', cuisine: 'Pakistani/Fusion', priceRange: '$$$', neighborhood: 'City Centre', specialty: 'Contemporary Pakistani', halalCertified: true },
      { name: 'Salt n Pepper', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Various', specialty: 'Spicy grills', halalCertified: true },
      { name: 'Pink Garlic', cuisine: 'Indian', priceRange: '$$$', neighborhood: 'Various', specialty: 'Gourmet halal', halalCertified: true },
      { name: 'Archies', cuisine: 'American', priceRange: '$$', neighborhood: 'Various', specialty: 'Halal burgers, Instagram-famous', halalCertified: true },
      { name: 'Ribeye Steakhouse', cuisine: 'American', priceRange: '$$', neighborhood: 'First Street', specialty: 'Steaks and wings', halalCertified: true },
    ],
    halalGroceryStores: ['Various halal butchers and grocers'],
    halalNeighborhoods: ['Rusholme (Curry Mile)', 'Cheetham Hill', 'Longsight', 'Moss Side', 'Levenshulme'],
    bestCuisines: ['Pakistani', 'Turkish', 'Malaysian', 'Middle Eastern', 'Thai'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Rusholme (Curry Mile)',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Arab', 'Turkish'],
      mosqueCount: 10,
      halalRestaurantCount: 100,
      description: 'Famous Curry Mile - diverse halal cuisines',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Cheetham Hill',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi'],
      mosqueCount: 15,
      halalRestaurantCount: 60,
      description: 'Traditional Muslim neighborhood',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Longsight',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Arab'],
      mosqueCount: 12,
      halalRestaurantCount: 50,
      description: 'Diverse Muslim community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Multiple Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Manchester', 'Manchester Metropolitan University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MAN',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: true,
      hasWuduFacility: true,
      halalFoodOptions: ['Options available'],
    },
    recommendedHotels: ['City centre hotels', 'Hotels near Curry Mile'],
    touristMosques: ['Manchester Central Mosque'],
  },

  communityResources: {
    islamicCenters: ['British Muslim Heritage Centre'],
    advocacyOrgs: ['Local Muslim organizations'],
    charities: ['Islamic Relief UK', 'Human Appeal'],
    socialGroups: ['Community organizations'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 7,
    beardAcceptance: 9,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['Al Rayan Bank branches'],
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '2:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Curry Mile - famous halal food street',
    'British Muslim Heritage Centre',
    'Historic Syrian-founded mosques (1940s-60s)',
    'Over 100 mosques in Greater Manchester',
    'Strong student Muslim population',
    'Malls have prayer and ablution facilities',
  ],

  visitorTips: [
    'Curry Mile is a must-visit',
    'Archies for Instagram-worthy halal burgers',
    'Multiple cuisines beyond just curry',
    'City centre has excellent halal options',
  ],

  expatTips: [
    'More affordable than London',
    'Strong Muslim community networks',
    'Good university options',
    'Growing job market',
  ],
};

export const bradfordData: CityMuslimCommunityData = {
  citySlug: 'bradford',
  cityName: 'Bradford',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 167000,
    percentage: 30.5,
    yearEstimate: 2024,
    source: '2021 Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani (Mirpuri)', percentage: 70, countries: ['Pakistan'] },
    { group: 'Bangladeshi', percentage: 10, countries: ['Bangladesh'] },
    { group: 'Other South Asian', percentage: 10, countries: ['India'] },
    { group: 'Other', percentage: 10, countries: ['Arab', 'Somali', 'converts'] },
  ],

  mosques: {
    totalCount: 44,
    majorMosques: [
      {
        name: 'Bradford Grand Mosque',
        address: 'Bradford',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Pakistani',
        languages: ['Urdu', 'Punjabi', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Built by local donations', '8,000 capacity', 'Opened early 2010s'],
      },
      {
        name: 'Hanfia Mosque',
        address: 'Carlisle Road, Bradford',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Pakistani/Sufi',
        languages: ['Urdu', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Significant Sufi presence', 'Naqshbandi and Chishtiyyah orders'],
      },
    ],
    jummahInfo: '44 mosques - 19+ Barelwi, 17 Deobandi',
    eidLocations: ['Large mosques', 'Parks', 'Sports venues'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 300,
    topRestaurants: [
      { name: 'Various curry houses', cuisine: 'Pakistani/Kashmiri', priceRange: '$', neighborhood: 'Various', specialty: 'Traditional Pakistani', halalCertified: true },
    ],
    halalGroceryStores: ['Numerous local butchers and grocers'],
    halalNeighborhoods: ['Manningham', 'Bradford Moor', 'Great Horton'],
    bestCuisines: ['Pakistani', 'Kashmiri', 'Indian'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Manningham',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani'],
      mosqueCount: 10,
      halalRestaurantCount: 60,
      description: 'Traditional Pakistani neighborhood',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Bradford Moor',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani'],
      mosqueCount: 8,
      halalRestaurantCount: 40,
      description: 'Strong Muslim community presence',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Multiple Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Numerous mosque madrasas'],
    hifzPrograms: ['Multiple programs'],
    universitiesWithMSA: ['University of Bradford'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LBA',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Bradford Grand Mosque'],
  },

  communityResources: {
    islamicCenters: ['Bradford Council of Mosques'],
    advocacyOrgs: ['Local Muslim organizations'],
    charities: ['Local charities'],
    socialGroups: ['Community groups'],
    converts: ['Convert support through mosques'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 10,
    niqabAcceptance: 9,
    beardAcceptance: 10,
    islamophobiaLevel: 'low',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Multiple services'],
    muslimCemeteries: ['Muslim cemetery sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    '30.5% Muslim population - one of highest percentages in UK',
    'Largest British Mirpuri Kashmiri diaspora',
    'Bradford Grand Mosque - 8,000 capacity',
    '44 mosques connected via Bradford Council of Mosques',
    'Strong interfaith dialogue programs',
    'Significant Sufi presence',
  ],

  visitorTips: [
    'Very welcoming for Muslim visitors',
    'Halal food easily available everywhere',
    'Strong traditional community atmosphere',
    'Bradford Grand Mosque worth visiting',
  ],

  expatTips: [
    'Very affordable cost of living',
    'Strong Islamic education options',
    'Tight-knit community',
    'Less job opportunities than major cities',
  ],
};

export const leedsData: CityMuslimCommunityData = {
  citySlug: 'leeds',
  cityName: 'Leeds',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 10,
    yearEstimate: 2024,
    source: 'Census and local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani', percentage: 50, countries: ['Pakistan'] },
    { group: 'Bangladeshi', percentage: 20, countries: ['Bangladesh'] },
    { group: 'Arab', percentage: 15, countries: ['Iraq', 'Syria', 'Yemen'] },
    { group: 'Somali', percentage: 10, countries: ['Somalia'] },
    { group: 'Other', percentage: 5, countries: ['Various', 'converts'] },
  ],

  mosques: {
    totalCount: 26,
    majorMosques: [
      {
        name: 'Leeds Grand Mosque',
        address: 'Woodhouse, Leeds',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest in Leeds', 'Regular congregation 1,000+', 'Student community hub'],
      },
      {
        name: 'Abu Huraira Mosque',
        address: 'Harehills, Leeds',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu', 'Bengali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Major community hub', 'Harehills area'],
      },
      {
        name: 'Quba Masjid',
        address: 'Leeds',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Educational workshops', 'Halal certification training'],
      },
    ],
    jummahInfo: '26 mosques across Leeds - main areas: Harehills, Chapeltown, Hyde Park, Beeston',
    eidLocations: ['Large mosques', 'Community venues'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 300,
    topRestaurants: [
      { name: "Akbar's of Bradford", cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'Various', specialty: 'Quality curries and kebabs', halalCertified: true },
      { name: 'Shalimar', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Leeds', specialty: 'Flavorful curries and kebabs', halalCertified: true },
      { name: 'Eastern Oven', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Leeds', specialty: 'Puck cheese and honey pide', halalCertified: true },
    ],
    halalGroceryStores: ['Numerous halal butchers', 'Asian grocery stores'],
    halalNeighborhoods: ['Harehills', 'Hyde Park', 'Chapeltown', 'Beeston'],
    bestCuisines: ['Pakistani', 'Korean', 'Thai', 'Japanese', 'Persian', 'Indian', 'Turkish'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Harehills',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi', 'Arab'],
      mosqueCount: 8,
      halalRestaurantCount: 60,
      description: 'Majority Muslim neighborhood - densely populated Muslim area',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Hyde Park',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Pakistani', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 30,
      description: 'Student area with mosque presence',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Chapeltown',
      muslimPopulation: 'medium',
      dominantEthnicities: ['African', 'Caribbean', 'Pakistani'],
      mosqueCount: 3,
      halalRestaurantCount: 25,
      description: 'Diverse multicultural area',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Various Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque madrasas', 'Arabic classes'],
    hifzPrograms: ['Multiple programs available'],
    universitiesWithMSA: ['University of Leeds', 'Leeds Beckett University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LBA',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Leeds Grand Mosque'],
  },

  communityResources: {
    islamicCenters: ['Leeds Grand Mosque', 'Various community centers'],
    advocacyOrgs: ['Leeds New Muslims'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Community organizations'],
    converts: ['Leeds New Muslims support group'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['Al Rayan Bank branches'],
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Multiple services'],
    muslimCemeteries: ['Muslim cemetery sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Trinity Shopping Centre has indoor food market with halal stalls and prayer room',
    '10% Muslim population with younger demographics',
    '26 mosques serving diverse communities',
    'Strong student Muslim population',
    'Diverse halal cuisine options including Korean, Thai, Japanese',
  ],

  visitorTips: [
    'Trinity Shopping Centre has prayer room and halal food market',
    'Harehills for authentic halal food and groceries',
    'Hyde Park area near universities',
    'Multiple cuisine options beyond typical curry',
  ],

  expatTips: [
    'Harehills is majority Muslim neighborhood',
    'More affordable than London and Manchester',
    'Good university presence',
    'Strong community support through mosques',
  ],
};

export const leicesterData: CityMuslimCommunityData = {
  citySlug: 'leicester',
  cityName: 'Leicester',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 100000,
    percentage: 33,
    yearEstimate: 2024,
    source: '2021 Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'South Asian', percentage: 60, countries: ['Pakistan', 'Bangladesh', 'India'] },
    { group: 'Somali', percentage: 15, countries: ['Somalia'] },
    { group: 'Arab', percentage: 10, countries: ['Iraq', 'Syria', 'Yemen'] },
    { group: 'Turkish', percentage: 5, countries: ['Turkey'] },
    { group: 'Other', percentage: 10, countries: ['Various', 'converts'] },
  ],

  mosques: {
    totalCount: 35,
    majorMosques: [
      {
        name: 'Leicester Central Mosque',
        address: 'City Centre, Leicester',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1988,
        features: ['Main prayer hall', 'School', 'Community hall', 'Sports hall', 'Mortuary', 'Guest house'],
      },
      {
        name: 'Masjid Umar',
        address: 'Evington, Leicester',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Large congregation', 'Educational programs', 'Community outreach'],
      },
      {
        name: 'Jameah Masjid',
        address: 'Asfordby Street, Leicester',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Religious services', 'Educational activities'],
      },
      {
        name: 'Darul Arqam Mosque',
        address: 'Highfields, Leicester',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Vibrant community activities', 'Educational services'],
      },
      {
        name: 'Hamidiye Mosque',
        address: 'Leicester',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Turkish',
        languages: ['Turkish', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Turkish community mosque'],
      },
    ],
    jummahInfo: '35 mosques across Leicester serving 100,000+ Muslims',
    eidLocations: ['Large mosques', 'Community venues', 'Parks'],
    qiblaDirection: 118,
  },

  halalFood: {
    restaurantCount: 500,
    topRestaurants: [
      { name: 'Various restaurants', cuisine: 'Multi-cuisine', priceRange: '$$', neighborhood: 'Various', specialty: 'Diverse halal options', halalCertified: true },
    ],
    halalGroceryStores: ['Numerous halal butchers', 'Belgrave Road stores', 'Highfields shops'],
    halalNeighborhoods: ['Highfields', 'Belgrave (Golden Mile)', 'Evington'],
    bestCuisines: ['Indian', 'Pakistani', 'Middle Eastern', 'Turkish', 'Somali'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Highfields',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi', 'Somali'],
      mosqueCount: 10,
      halalRestaurantCount: 80,
      description: 'Diverse area with large Muslim population - many halal butchers and restaurants',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Belgrave (Golden Mile)',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Indian', 'Pakistani'],
      mosqueCount: 5,
      halalRestaurantCount: 60,
      description: 'Famous Golden Mile - variety of South Asian stores and restaurants',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Evington',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Pakistani', 'Indian'],
      mosqueCount: 4,
      halalRestaurantCount: 30,
      description: 'Home to Masjid Umar - residential Muslim area',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Multiple Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque madrasas', 'Arabic classes'],
    hifzPrograms: ['Available through mosques'],
    universitiesWithMSA: ['University of Leicester', 'De Montfort University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'EMA',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: true,
      halalFoodOptions: ['Some options'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Leicester Central Mosque'],
  },

  communityResources: {
    islamicCenters: ['Leicester Central Mosque', 'Various community centers'],
    advocacyOrgs: ['Muslim Burial Council of Leicester (Queens Award winner)'],
    charities: ['Local Muslim charities', 'Muslim Burial Council'],
    socialGroups: ['Community organizations'],
    converts: ['Support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 9,
    niqabAcceptance: 8,
    beardAcceptance: 9,
    islamophobiaLevel: 'low',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: true,
    islamicBanks: ['Al Rayan Bank'],
    muslimDoctors: true,
    halalCatering: ['Extensive options'],
    muslimFuneralServices: ['Muslim Burial Council of Leicester'],
    muslimCemeteries: ['Saffron Hill - first purpose-built Muslim Chapel/Janazgah in Western Europe'],
  },

  prayerTimesInfo: {
    fajrRange: '2:45 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-18 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    '33% Muslim population - highest percentage city in UK',
    '35+ mosques serving diverse communities',
    'First purpose-built Muslim Chapel (Janazgah) in Western Europe at Saffron Hill',
    'Muslim Burial Council received Queens Award for Voluntary Organisations 2007',
    'Famous Golden Mile for South Asian food and shopping',
    'Very diverse religious population (Muslim, Hindu, Sikh)',
  ],

  visitorTips: [
    'Golden Mile (Belgrave Road) for authentic South Asian food',
    'Leicester Central Mosque worth visiting',
    'Highfields for halal butchers and groceries',
    'Very welcoming diverse atmosphere',
  ],

  expatTips: [
    'Highest Muslim percentage in UK - very established community',
    'Affordable cost of living',
    'Strong Islamic infrastructure',
    'Multiple Muslim-majority neighborhoods',
  ],
};

export const glasgowData: CityMuslimCommunityData = {
  citySlug: 'glasgow',
  cityName: 'Glasgow',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 55000,
    percentage: 7.9,
    yearEstimate: 2024,
    source: '2022 Scotland Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani', percentage: 52, countries: ['Pakistan'] },
    { group: 'Arab', percentage: 15, countries: ['Various Arab countries'] },
    { group: 'African', percentage: 8, countries: ['Somalia', 'Sudan', 'Nigeria'] },
    { group: 'White Scottish', percentage: 5, countries: ['Scotland'] },
    { group: 'Other', percentage: 20, countries: ['Various', 'converts'] },
  ],

  mosques: {
    totalCount: 39,
    majorMosques: [
      {
        name: 'Glasgow Central Mosque',
        address: 'Adelphi Street, Glasgow',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1984,
        features: ['Largest mosque in Scotland', '10,000 capacity', 'Prayer halls', 'Classrooms', 'Library', 'Funeral service'],
      },
    ],
    jummahInfo: '39 mosques across Glasgow - Scotland\'s largest Muslim community',
    eidLocations: ['Glasgow Central Mosque', 'Community venues'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 200,
    topRestaurants: [
      { name: 'Various restaurants', cuisine: 'Multi-cuisine', priceRange: '$$', neighborhood: 'Various', specialty: 'Indian, Pakistani, Middle Eastern, Turkish', halalCertified: true },
    ],
    halalGroceryStores: ['Multiple halal butchers', 'Supermarket halal sections'],
    halalNeighborhoods: ['Pollokshields', 'Southside Central', 'Govanhill'],
    bestCuisines: ['Indian', 'Pakistani', 'Middle Eastern', 'Turkish'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Pollokshields',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Indian'],
      mosqueCount: 8,
      halalRestaurantCount: 40,
      description: 'Highest Muslim concentration - 27.8% Muslim residents',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Southside Central',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Arab'],
      mosqueCount: 5,
      halalRestaurantCount: 30,
      description: '15.7% Muslim population',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
    {
      name: 'Govanhill',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Pakistani', 'Roma', 'Various'],
      mosqueCount: 4,
      halalRestaurantCount: 25,
      description: 'Very diverse multicultural area',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Glasgow Central Mosque classes', 'Mosque madrasas'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Glasgow', 'University of Strathclyde'],
  },

  travelInfo: {
    airport: {
      airportCode: 'GLA',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: true,
      halalFoodOptions: ['Some options available'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Glasgow Central Mosque'],
  },

  communityResources: {
    islamicCenters: ['Glasgow Central Mosque'],
    advocacyOrgs: ['Muslim Council of Scotland'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Community organizations'],
    converts: ['Support through mosques'],
  },

  safetyInfo: {
    overallSafety: 8,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    recentIncidents: 'Generally welcoming - Scottish government promotes tolerance',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Glasgow Central Mosque funeral service'],
    muslimCemeteries: ['Muslim cemetery sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:00 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '17-20 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Largest Muslim population in Scotland (7.9%)',
    'Glasgow Central Mosque - largest in Scotland with 10,000 capacity',
    'First purpose-built mosque in Scotland (1984)',
    'Diverse Muslim community (52% Pakistani, 14.5% Arab)',
    'Muslims more likely to identify as Scottish than other groups',
    'Strong interfaith relations',
  ],

  visitorTips: [
    'Glasgow Central Mosque is landmark worth visiting',
    'Pollokshields area for halal food and groceries',
    'Generally very welcoming atmosphere',
    'Multiple cuisine options available',
  ],

  expatTips: [
    'Pollokshields and Southside have highest Muslim populations',
    'More affordable than Edinburgh',
    'Strong community through Central Mosque',
    'Scottish climate - long summer days/short winter days',
  ],
};

export const edinburghData: CityMuslimCommunityData = {
  citySlug: 'edinburgh',
  cityName: 'Edinburgh',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 15000,
    percentage: 3,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Pakistani', percentage: 50, countries: ['Pakistan'] },
    { group: 'Arab', percentage: 20, countries: ['Various Arab countries'] },
    { group: 'African', percentage: 10, countries: ['Somalia', 'Sudan'] },
    { group: 'Malaysian/Indonesian', percentage: 10, countries: ['Malaysia', 'Indonesia'] },
    { group: 'Other', percentage: 10, countries: ['Various', 'converts', 'students'] },
  ],

  mosques: {
    totalCount: 8,
    majorMosques: [
      {
        name: 'Edinburgh Central Mosque (King Fahd Mosque)',
        address: 'Potterrow, Edinburgh',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['1,000+ capacity', 'Women pray on balcony', 'Near University of Edinburgh', 'Modernist Scots baronial architecture'],
      },
      {
        name: 'Shah Jalal Mosque and Islamic Centre',
        address: 'Edinburgh',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Bengali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Cultural activities', 'Community worship'],
      },
      {
        name: 'Blackhall Mosque',
        address: 'Blackhall, Edinburgh',
        type: 'masjid',
        size: 'small',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Local community mosque'],
      },
    ],
    jummahInfo: '8 mosques serving Edinburgh\'s diverse Muslim community',
    eidLocations: ['Edinburgh Central Mosque', 'Community venues'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Mosque Kitchen', cuisine: 'South Asian/Middle Eastern', priceRange: '$', neighborhood: 'Potterrow', specialty: 'Meat and vegetable curries', halalCertified: true },
      { name: 'Mezbaan South Indian', cuisine: 'South Indian', priceRange: '$$', neighborhood: 'Edinburgh', specialty: 'South Indian cuisine', halalCertified: true },
      { name: 'Omar Khayam', cuisine: 'Indian/Pakistani', priceRange: '$$', neighborhood: 'Edinburgh', specialty: 'Indian and Pakistani', halalCertified: true },
      { name: 'Himalaya Tandoori', cuisine: 'Indian/Nepalese', priceRange: '$$', neighborhood: 'Edinburgh', specialty: 'Tandoori dishes', halalCertified: true },
      { name: 'Kebabish Original', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Edinburgh', specialty: 'Grilled kebabs', halalCertified: true },
      { name: "Zaza's", cuisine: 'Scottish/Halal', priceRange: '$$', neighborhood: 'Grassmarket', specialty: 'Halal Haggis and Full Breakfast', halalCertified: true },
    ],
    halalGroceryStores: ['Asian grocery stores', 'Some supermarket sections'],
    halalNeighborhoods: ['Near Central Mosque', 'Leith', 'Southside'],
    bestCuisines: ['Indian', 'Pakistani', 'Middle Eastern', 'Lebanese', 'Turkish'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Potterrow/Southside',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Pakistani', 'Arab', 'International students'],
      mosqueCount: 2,
      halalRestaurantCount: 20,
      description: 'Near university - Edinburgh Central Mosque located here',
      safetyRating: 8,
      affordability: 'expensive',
      publicTransport: 'excellent',
    },
    {
      name: 'Leith',
      muslimPopulation: 'low',
      dominantEthnicities: ['Various'],
      mosqueCount: 1,
      halalRestaurantCount: 15,
      description: 'Diverse area with some halal options',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Weekend Islamic schools', grades: 'Various', type: 'weekend', accredited: false },
    ],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Limited availability'],
    universitiesWithMSA: ['University of Edinburgh', 'Edinburgh Napier University', 'Heriot-Watt University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'EDI',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: true,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['City centre hotels', 'Near Old Town'],
    touristMosques: ['Edinburgh Central Mosque'],
  },

  communityResources: {
    islamicCenters: ['Edinburgh Central Mosque'],
    advocacyOrgs: ['Muslim Council of Scotland'],
    charities: ['Local Muslim charities'],
    socialGroups: ['University Islamic societies'],
    converts: ['Support through mosques'],
  },

  safetyInfo: {
    overallSafety: 9,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'low',
    recentIncidents: 'Generally very welcoming city',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Limited options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '1:30 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '17-21 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Edinburgh Central Mosque - unique Scots baronial and Islamic architecture blend',
    'Strong student Muslim population',
    'Muslims love Scotland - surveys show Muslims feel strongly Scottish',
    'Mosque Kitchen famous for affordable halal food',
    "Zaza's offers halal Haggis - unique Scottish Muslim experience",
    'Very diverse international Muslim community due to universities',
  ],

  visitorTips: [
    'Mosque Kitchen for affordable halal lunch',
    "Zaza's in Grassmarket for halal Scottish food including Haggis",
    'Edinburgh Central Mosque worth visiting for architecture',
    'Most tourist areas have halal options',
  ],

  expatTips: [
    'Smaller Muslim community than Glasgow',
    'Strong university MSA presence',
    'Higher cost of living',
    'Very safe and welcoming city',
    'Be prepared for very long summer days and short winter days',
  ],
};

export const liverpoolData: CityMuslimCommunityData = {
  citySlug: 'liverpool',
  cityName: 'Liverpool',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 25000,
    percentage: 5,
    yearEstimate: 2024,
    source: '2021 Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Yemeni', percentage: 30, countries: ['Yemen'] },
    { group: 'Somali', percentage: 25, countries: ['Somalia'] },
    { group: 'Pakistani', percentage: 20, countries: ['Pakistan'] },
    { group: 'Arab', percentage: 15, countries: ['Various Arab countries'] },
    { group: 'Other', percentage: 10, countries: ['Various', 'converts'] },
  ],

  mosques: {
    totalCount: 12,
    majorMosques: [
      {
        name: 'Al-Rahma Mosque',
        address: 'Liverpool',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Somali'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        established: 1974,
        features: ['Third purpose-built mosque in UK', 'Built 1965, opened 1974', '2,000-2,500 capacity', 'Main focus for Liverpool Muslims'],
      },
      {
        name: 'Abdullah Quilliam Mosque',
        address: 'Brougham Terrace, Liverpool',
        type: 'converted',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic (historic)',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1889,
        features: ['FIRST mosque in England (1889)', 'Founded by William Abdullah Quilliam', 'Historic landmark', 'Liverpool was centre of UK Islam'],
      },
    ],
    jummahInfo: '12 mosques in Liverpool Region - unique diverse origins',
    eidLocations: ['Al-Rahma Mosque', 'Community venues'],
    qiblaDirection: 118,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Rumi by Bukhara', cuisine: 'Pakistani/Indian', priceRange: '$$', neighborhood: 'Liverpool', specialty: 'Halal fine dining', halalCertified: true },
      { name: 'Bakchich', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Bold Street', specialty: 'Lebanese mezze', halalCertified: true },
    ],
    halalGroceryStores: ['Halal butchers', 'Middle Eastern stores'],
    halalNeighborhoods: ['Toxteth', 'Granby', 'L8 area'],
    bestCuisines: ['Turkish', 'Indian', 'Middle Eastern', 'Somali', 'Yemeni'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Toxteth/L8',
      muslimPopulation: 'high',
      dominantEthnicities: ['Yemeni', 'Somali', 'Sudanese'],
      mosqueCount: 5,
      halalRestaurantCount: 30,
      description: 'Historic Muslim settlement area - Lascar seamen since 1750s',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Granby',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various African', 'Arab'],
      mosqueCount: 3,
      halalRestaurantCount: 20,
      description: 'Diverse multicultural area',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Local Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Liverpool', 'Liverpool John Moores University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LPL',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Abdullah Quilliam Mosque (historic)', 'Al-Rahma Mosque'],
  },

  communityResources: {
    islamicCenters: ['Liverpool Muslim Society'],
    advocacyOrgs: ['Liverpool Region Mosque Network (LRMnet)'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Community organizations'],
    converts: ['Support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    recentIncidents: 'Mo Salah and Mane have improved Muslim visibility',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:30 AM (summer) - 6:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'Home to FIRST mosque in England (1889) - Abdullah Quilliam Mosque',
    'Liverpool was historic centre of UK Islam',
    'Unique Yemeni/Somali Muslim heritage from merchant seamen since 1750s',
    'Third purpose-built mosque in UK (Al-Rahma, 1965)',
    'Mo Salah and Sadio Mane - beloved Muslim football icons',
    'Liverpool Region Mosque Network connects 12 mosques',
  ],

  visitorTips: [
    'Abdullah Quilliam Mosque - historic first mosque in England',
    'Al-Rahma Mosque - major community hub',
    'Bold Street area for halal restaurants',
    'Very welcoming city - football culture embraces Muslim players',
  ],

  expatTips: [
    'Unique Muslim history compared to other UK cities',
    'Very affordable cost of living',
    'Smaller but tight-knit community',
    'Strong football culture - Mo Salah is beloved',
  ],
};

export const cardiffData: CityMuslimCommunityData = {
  citySlug: 'cardiff',
  cityName: 'Cardiff',
  country: 'United Kingdom',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 34000,
    percentage: 9.3,
    yearEstimate: 2024,
    source: '2021 Census',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Yemeni', percentage: 30, countries: ['Yemen'] },
    { group: 'Somali', percentage: 25, countries: ['Somalia'] },
    { group: 'Pakistani/Bangladeshi', percentage: 25, countries: ['Pakistan', 'Bangladesh'] },
    { group: 'Arab', percentage: 10, countries: ['Various Arab countries'] },
    { group: 'Other', percentage: 10, countries: ['Various', 'converts'] },
  ],

  mosques: {
    totalCount: 30,
    majorMosques: [
      {
        name: 'Dar Ul-Isra Mosque (Cardiff Muslim Cultural Centre)',
        address: 'Cardiff',
        type: 'islamic-center',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English', 'Urdu'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM', '1:30 PM'],
        features: ['Largest mosque in Cardiff', 'Major community center'],
      },
      {
        name: 'Peel Street Mosque',
        address: 'Butetown, Cardiff',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Yemeni',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1947,
        features: ['First purpose-built mosque in Wales', 'Historic Yemeni community'],
      },
      {
        name: 'Shah Jalal Mosque & Islamic Cultural Centre',
        address: 'Cardiff',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Bangladeshi',
        languages: ['Bengali', 'Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Cultural center'],
      },
      {
        name: 'Al-Manar Centre Trust',
        address: 'Cardiff',
        type: 'islamic-center',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'English'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community services'],
      },
    ],
    jummahInfo: '30 mosques in Cardiff - most in Wales, 57 total in Wales',
    eidLocations: ['Large mosques', 'Community venues'],
    qiblaDirection: 119,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [
      { name: 'Various restaurants', cuisine: 'Multi-cuisine', priceRange: '$$', neighborhood: 'Various', specialty: 'Indian, Pakistani, Middle Eastern, Turkish', halalCertified: true },
    ],
    halalGroceryStores: ['Halal butchers', 'Supermarket halal sections (Tesco, Sainsburys, Asda)'],
    halalNeighborhoods: ['Butetown', 'Grangetown', 'Riverside', 'Cathays'],
    bestCuisines: ['Indian', 'Pakistani', 'Middle Eastern', 'Turkish', 'Yemeni'],
    foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Butetown',
      muslimPopulation: 'high',
      dominantEthnicities: ['Yemeni', 'Somali'],
      mosqueCount: 8,
      halalRestaurantCount: 30,
      description: 'Historic settlement - Yemeni and Somali seafarers since 19th century',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Grangetown',
      muslimPopulation: 'high',
      dominantEthnicities: ['Pakistani', 'Bangladeshi', 'Somali'],
      mosqueCount: 6,
      halalRestaurantCount: 25,
      description: 'Diverse Muslim area with Grangetown Mosque',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Riverside',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Pakistani', 'Arab'],
      mosqueCount: 4,
      halalRestaurantCount: 20,
      description: 'Mixed residential area',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Local Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque madrasas'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['Cardiff University', 'Cardiff Metropolitan University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CWL',
      hasPrayerRoom: true,
      location: 'Multi-faith room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited options'],
    },
    recommendedHotels: ['City centre hotels'],
    touristMosques: ['Peel Street Mosque (historic)'],
  },

  communityResources: {
    islamicCenters: ['Dar Ul-Isra', 'Al-Manar Centre'],
    advocacyOrgs: ['Muslim Council of Wales (founded 2003)'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Community organizations'],
    converts: ['Support through mosques'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 8,
    niqabAcceptance: 7,
    beardAcceptance: 8,
    islamophobiaLevel: 'moderate',
    legalProtections: ['Equality Act 2010'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '2:45 AM (summer) - 6:45 AM (winter)',
    ramadanFastingHours: '16-18 hours',
    calculationMethod: 'MWL',
  },

  uniqueFeatures: [
    'First purpose-built mosque in Wales (Peel Street, 1947)',
    'One of longest-established Muslim populations in UK',
    'Yemeni sailors settled in Butetown since 19th century',
    '9.3% Muslim population - over half of Welsh Muslims live in Cardiff',
    'Muslim Council of Wales headquartered here (since 2003)',
    'Capital city with unique Welsh Muslim identity',
  ],

  visitorTips: [
    'Peel Street Mosque - historic first mosque in Wales',
    'Butetown area for authentic Yemeni food',
    'Major supermarkets have halal sections',
    'City centre is very accessible',
  ],

  expatTips: [
    'Largest Muslim community in Wales',
    'More affordable than English cities',
    'Muslim Council of Wales provides community support',
    'Strong historic roots for Muslims',
    'Welsh identity embraced by Muslim community',
  ],
};

// Export all UK cities data
export const ukCitiesData: Record<string, CityMuslimCommunityData> = {
  'london': londonData,
  'birmingham': birminghamData,
  'manchester': manchesterData,
  'bradford': bradfordData,
  'leeds': leedsData,
  'leicester': leicesterData,
  'glasgow': glasgowData,
  'edinburgh': edinburghData,
  'liverpool': liverpoolData,
  'cardiff': cardiffData,
};
