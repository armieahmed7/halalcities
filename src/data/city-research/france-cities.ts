// France Cities Muslim Community Research Data
// Research compiled December 2024

import { CityMuslimCommunityData } from '../muslim-community-data';

export const parisData: CityMuslimCommunityData = {
  citySlug: 'paris',
  cityName: 'Paris',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 500000,
    percentage: 12,
    yearEstimate: 2024,
    source: 'Euro-Islam / INSEE estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 50, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Sub-Saharan African', percentage: 25, countries: ['Senegal', 'Mali', 'Comoros'] },
    { group: 'Turkish', percentage: 10, countries: ['Turkey'] },
    { group: 'Middle Eastern', percentage: 10, countries: ['Various'] },
    { group: 'Other', percentage: 5, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 400,
    majorMosques: [
      {
        name: 'Grand Mosque of Paris (Grande Mosquée de Paris)',
        address: '2 bis Place du Puits de l\'Ermite, 75005 Paris',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1926,
        features: ['Oldest in France', '33m minaret', 'Mudéjar architecture', 'Library', 'Restaurant', 'Tea room', 'Hammam', 'WWII Jewish sanctuary'],
      },
      {
        name: 'Mosquée Ad-Da\'wa',
        address: '39 Rue de Tanger, 75019 Paris',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Mosquée Omar Ibn Al Khattab',
        address: 'Paris 11ème',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; Grand Mosque gets very crowded',
    eidLocations: ['Grand Mosque of Paris', 'Various large mosques'],
    qiblaDirection: 119,
  },

  halalFood: {
    restaurantCount: 2000,
    topRestaurants: [
      { name: 'Le Confidentiel', cuisine: 'French/International', priceRange: '$$$', neighborhood: '8th Arrondissement', specialty: 'Fine dining, Ramadan buffet', halalCertified: true },
      { name: 'Elysées Istanbul', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Near Arc de Triomphe', specialty: 'Kebabs, Kofte', halalCertified: true },
      { name: 'Le 1818', cuisine: 'French', priceRange: '$$$', neighborhood: '16th Arrondissement', specialty: 'French cuisine', halalCertified: true },
      { name: 'Joe Burger', cuisine: 'American', priceRange: '$', neighborhood: 'Near Grand Mosque', specialty: 'Halal burgers', halalCertified: true },
      { name: 'Le Butcher', cuisine: 'Burgers', priceRange: '$$', neighborhood: '8th Arrondissement', specialty: 'Organic halal burgers', halalCertified: true },
      { name: 'Cook\'n Saj', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Paris', specialty: 'Saj, Street food', halalCertified: true },
      { name: 'Mama Nissa', cuisine: 'Algerian', priceRange: '$$', neighborhood: 'Montorgueil', specialty: 'Regional Algerian', halalCertified: true },
    ],
    halalGroceryStores: ['Carrefour (halal sections)', 'Local halal butchers', 'Barbès market', 'Château Rouge market'],
    halalNeighborhoods: ['Barbès', 'Belleville', 'Château Rouge', 'La Chapelle', 'Goutte d\'Or'],
    bestCuisines: ['French Halal', 'Lebanese', 'Moroccan', 'Turkish', 'Pakistani', 'Algerian'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo', 'Just Eat'],
  },

  muslimNeighborhoods: [
    {
      name: 'Barbès-Rochechouart / Goutte d\'Or',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi', 'West African'],
      mosqueCount: 15,
      halalRestaurantCount: 100,
      description: 'Historic immigrant neighborhood with abundant halal shops and markets',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
    {
      name: 'Belleville',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi', 'Various'],
      mosqueCount: 10,
      halalRestaurantCount: 60,
      description: 'Diverse neighborhood with mix of cultures',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'La Chapelle',
      muslimPopulation: 'high',
      dominantEthnicities: ['South Asian', 'Various'],
      mosqueCount: 8,
      halalRestaurantCount: 40,
      description: 'Near Gare du Nord, South Asian presence',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Institut Européen des Sciences Humaines', grades: 'Various', type: 'full-time', accredited: true },
      { name: 'Various private Muslim schools', grades: 'K-12', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Grand Mosque programs', 'Various mosque schools'],
    hifzPrograms: ['Multiple mosque-based programs'],
    universitiesWithMSA: ['Sorbonne', 'Sciences Po', 'Various universities'],
  },

  travelInfo: {
    airport: {
      airportCode: 'CDG',
      hasPrayerRoom: true,
      location: 'Terminal 2E - Interfaith chapel / Muslim prayer room available',
      is24Hours: false,
      hasWuduFacility: true,
      halalFoodOptions: ['Limited but available'],
    },
    recommendedHotels: ['Hotels near 5th Arrondissement (Grand Mosque)', 'Hotels in Le Marais'],
    touristMosques: ['Grand Mosque of Paris'],
    muslimTourOperators: ['Various French Muslim tour agencies'],
  },

  communityResources: {
    islamicCenters: ['Grand Mosque of Paris', 'UOIF Centers'],
    advocacyOrgs: ['CCIF (historical)', 'Various Muslim associations'],
    charities: ['Secours Islamique France', 'Muslim Aid France'],
    socialGroups: ['Muslim student associations', 'Young Muslims France'],
    converts: ['New Muslim support groups'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    recentIncidents: 'Periodic tensions; laïcité debates',
    legalProtections: ['French anti-discrimination laws', 'Note: Niqab/burqa banned in public'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Numerous options'],
    muslimFuneralServices: ['Muslim funeral services available'],
    muslimCemeteries: ['Père-Lachaise (Muslim section)', 'Bobigny Muslim cemetery'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'UOIF / Paris Observatory',
  },

  uniqueFeatures: [
    'Grand Mosque of Paris - oldest in metropolitan France (1926)',
    'Grand Mosque saved Jews during WWII',
    'Home to second-largest Muslim population in Western Europe',
    'Rich Maghrebi cultural influence',
    'ARGML halal certification based at Grand Mosque of Lyon',
    'Note: Laïcité (secularism) strictly enforced',
  ],

  visitorTips: [
    'Grand Mosque of Paris is a must-visit with beautiful architecture',
    'Mosque has a restaurant and tea room open to public',
    'Barbès area has the most halal food options but safety concerns',
    'Download prayer time apps - mosques scattered across city',
    'Be aware of niqab ban in public spaces',
    'Metro makes getting around easy',
  ],

  expatTips: [
    'French language essential for integration',
    'Laïcité means religion kept private in workplaces/schools',
    'Hijab may face discrimination in employment',
    'Housing can be difficult and expensive',
    'Strong Maghrebi community for networking',
    'Children cannot wear religious symbols in public schools',
  ],
};

export const marseilleData: CityMuslimCommunityData = {
  citySlug: 'marseille',
  cityName: 'Marseille',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 250000,
    percentage: 22,
    yearEstimate: 2024,
    source: 'The Guardian / Local estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Algerian', percentage: 40, countries: ['Algeria'] },
    { group: 'Moroccan/Tunisian', percentage: 25, countries: ['Morocco', 'Tunisia'] },
    { group: 'Comorian', percentage: 15, countries: ['Comoros'] },
    { group: 'Turkish', percentage: 10, countries: ['Turkey'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 80,
    majorMosques: [
      {
        name: 'Mosquée Ar-Rahma',
        address: 'Marseille',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2023,
        features: ['Newly opened', 'Modern facility'],
      },
      {
        name: 'Mosquée des Cèdres',
        address: 'Marseille',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2019,
      },
      {
        name: 'Bilal Mosque',
        address: 'Marseille',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'West African',
        languages: ['French', 'Arabic', 'Wolof'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Kurdish Islamic Centre',
        address: 'Marseille',
        type: 'islamic-center',
        size: 'medium',
        ethnicFocus: 'Kurdish',
        languages: ['Kurdish', 'Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; many small prayer rooms across the city',
    eidLocations: ['Various large mosques', 'Outdoor venues'],
    qiblaDirection: 114,
  },

  halalFood: {
    restaurantCount: 500,
    topRestaurants: [
      { name: 'La Bouillabaisse Halal', cuisine: 'French Mediterranean', priceRange: '$$', neighborhood: 'Vieux-Port', specialty: 'Halal Bouillabaisse', halalCertified: true },
      { name: 'Restaurant Chez Nous', cuisine: 'Algerian', priceRange: '$$', neighborhood: 'Belsunce', specialty: 'Couscous', halalCertified: true },
      { name: 'Various kebab shops', cuisine: 'Turkish/Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Döner Kebab', halalCertified: true },
    ],
    halalGroceryStores: ['7 halal abattoirs for Eid', 'Local halal butchers', 'North African markets'],
    halalNeighborhoods: ['Belsunce', 'Noailles', 'Northern districts'],
    bestCuisines: ['Algerian', 'Moroccan', 'Comorian', 'Turkish', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Belsunce',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi'],
      mosqueCount: 15,
      halalRestaurantCount: 80,
      description: 'Historic immigrant district near Vieux-Port with markets',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
    {
      name: 'Noailles',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi', 'Comorian'],
      mosqueCount: 10,
      halalRestaurantCount: 50,
      description: 'Vibrant market area with diverse Muslim community',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
    {
      name: 'Northern Districts (13th-16th)',
      muslimPopulation: 'high',
      dominantEthnicities: ['Various'],
      mosqueCount: 25,
      halalRestaurantCount: 100,
      description: 'Working-class areas with large Muslim populations',
      safetyRating: 4,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Private Muslim schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Mosque-based programs'],
    hifzPrograms: ['Various'],
    universitiesWithMSA: ['Aix-Marseille University'],
  },

  travelInfo: {
    airport: {
      airportCode: 'MRS',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in Vieux-Port area'],
    touristMosques: ['Mosquée Ar-Rahma', 'Mosquée des Cèdres'],
  },

  communityResources: {
    islamicCenters: ['Muslim Centre of Marseille', 'Various community centers'],
    advocacyOrgs: ['Local Muslim associations'],
    charities: ['Secours Islamique France'],
    socialGroups: ['Muslim student associations'],
    converts: ['New Muslim programs'],
  },

  safetyInfo: {
    overallSafety: 5,
    hijabAcceptance: 7,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws', 'Note: Niqab banned'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Many options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim cemetery sections'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Largest Muslim population in France (by percentage)',
    'No Grand Mosque despite large population (project abandoned 2016)',
    '73+ prayer spaces including 10 in city centre',
    'Strong Algerian and Comorian communities',
    '7 halal abattoirs operate during Eid al-Adha',
    'Mediterranean climate similar to home for many Muslims',
  ],

  visitorTips: [
    'Marseille has France\'s largest Muslim community',
    'Many small prayer rooms - download apps to find them',
    'Belsunce market area has excellent halal food',
    'Be aware of safety in northern districts',
    'Beautiful Mediterranean coast',
  ],

  expatTips: [
    'Large established Muslim community for networking',
    'Housing more affordable than Paris',
    'Safety concerns in some areas',
    'Strong Algerian community if you share heritage',
    'Weather similar to North Africa',
    'Learn French for integration',
  ],
};

export const lyonData: CityMuslimCommunityData = {
  citySlug: 'lyon',
  cityName: 'Lyon',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 150000,
    percentage: 8,
    yearEstimate: 2024,
    source: 'Islamic Council for Rhone-Alps / Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 55, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
    { group: 'Sub-Saharan African', percentage: 15, countries: ['Various'] },
    { group: 'Other', percentage: 15, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 50,
    majorMosques: [
      {
        name: 'Grand Mosque of Lyon (Grande Mosquée de Lyon)',
        address: '146 Boulevard Pinel, Lyon',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1994,
        features: ['France\'s 6th largest', '1000 capacity', '60m building', '24m minaret', 'ARGML halal certification'],
      },
      {
        name: 'Duchère Mosque',
        address: 'La Duchère, Lyon',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['900 capacity', 'Modern'],
      },
      {
        name: 'Mosque El-Houda',
        address: 'Lyon',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; Grand Mosque is the main venue',
    eidLocations: ['Grand Mosque of Lyon', 'Other large venues'],
    qiblaDirection: 118,
  },

  halalFood: {
    restaurantCount: 300,
    topRestaurants: [
      { name: 'Various Lebanese restaurants', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Lyon', specialty: 'Shawarma', halalCertified: true },
      { name: 'Kebab shops', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Various', specialty: 'Döner', halalCertified: true },
    ],
    halalGroceryStores: ['Local halal butchers', 'ARGML certified shops'],
    halalNeighborhoods: ['La Guillotière', 'Villeurbanne', 'La Duchère'],
    bestCuisines: ['Maghrebi', 'Turkish', 'Lebanese', 'French Halal'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'La Guillotière',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi', 'Various'],
      mosqueCount: 8,
      halalRestaurantCount: 40,
      description: 'Diverse neighborhood with strong Muslim presence',
      safetyRating: 6,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
    {
      name: 'Villeurbanne',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 5,
      halalRestaurantCount: 25,
      description: 'Suburb with Muslim community',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [
      { name: 'Private Islamic schools', grades: 'Various', type: 'full-time', accredited: true },
    ],
    weekendPrograms: ['Grand Mosque programs'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Lyon'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LYS',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in Presqu\'île', 'Hotels near Part-Dieu'],
    touristMosques: ['Grand Mosque of Lyon'],
  },

  communityResources: {
    islamicCenters: ['Grand Mosque of Lyon', 'ARGML'],
    advocacyOrgs: ['Islamic Council for Rhone-Alps'],
    charities: ['Local Muslim charities'],
    socialGroups: ['Muslim student groups'],
    converts: ['New Muslim support'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Various options'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections available'],
  },

  prayerTimesInfo: {
    fajrRange: '3:45 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '16-18 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Grand Mosque inaugurated 1994 - 6th largest in France',
    'ARGML halal certification - most reliable in France',
    'Strong Islamic Council for Rhone-Alps region',
    '300,000 Muslims in wider Rhone-Alps region',
    'Saudi funding helped build Grand Mosque',
    'Beautiful historic city combined with Muslim community',
  ],

  visitorTips: [
    'Grand Mosque is beautiful and worth visiting',
    'Lyon is France\'s culinary capital - many halal options',
    'La Guillotière neighborhood has halal food',
    'ARGML certification is trustworthy',
    'Metro system makes travel easy',
  ],

  expatTips: [
    'More affordable than Paris',
    'Good quality of life',
    'Strong local Muslim community',
    'Grand Mosque is well-organized',
    'French language essential',
    'Historic city with good infrastructure',
  ],
};

export const toulouseData: CityMuslimCommunityData = {
  citySlug: 'toulouse',
  cityName: 'Toulouse',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 35000,
    percentage: 3.5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 60, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
    { group: 'Sub-Saharan African', percentage: 15, countries: ['Various'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Grande Mosquée de Toulouse',
        address: 'Empalot, Toulouse',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2018,
        features: ['3000 capacity', '€6 million project', '3 prayer halls', 'Quranic school', 'Gilded dome and minaret'],
      },
      {
        name: 'Al-Nour Mosque',
        address: 'Toulouse',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 1989,
        features: ['Helped fund Grande Mosquée'],
      },
      {
        name: 'Mosque Al Fath',
        address: 'Les Izards, Toulouse',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['Community education'],
      },
      {
        name: 'Turkish Mosque',
        address: 'Emile Baudot, Toulouse',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Turkish',
        languages: ['Turkish', 'Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; Grande Mosquée is main venue',
    eidLocations: ['Grande Mosquée de Toulouse'],
    qiblaDirection: 115,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Restaurants in city center', cuisine: 'Various', priceRange: '$$', neighborhood: 'Toulouse', specialty: 'Mixed', halalCertified: true },
    ],
    halalGroceryStores: ['Local halal butchers', 'Ethnic grocery stores'],
    halalNeighborhoods: ['Empalot', 'Les Izards', 'City center'],
    bestCuisines: ['Maghrebi', 'Turkish', 'French'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Empalot',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi'],
      mosqueCount: 2,
      halalRestaurantCount: 15,
      description: 'Location of Grande Mosquée, southern neighborhood',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Les Izards',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Various'],
      mosqueCount: 2,
      halalRestaurantCount: 10,
      description: 'Northern neighborhood with mosque',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Grande Mosquée Quranic school'],
    hifzPrograms: ['Mosque-based programs'],
    universitiesWithMSA: ['University of Toulouse'],
  },

  travelInfo: {
    airport: {
      airportCode: 'TLS',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in city center'],
    touristMosques: ['Grande Mosquée de Toulouse'],
  },

  communityResources: {
    islamicCenters: ['Grande Mosquée de Toulouse', 'Al-Nour Mosque'],
    advocacyOrgs: ['Local Muslim associations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim student groups'],
    converts: ['Mosque-based support'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 7:15 AM (winter)',
    ramadanFastingHours: '15-17 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Grande Mosquée opened 2018 - 3000 capacity',
    '13-year fundraising campaign by community',
    'International donations from Algeria, Kuwait',
    'Beautiful interior with Tunisian marble, Turkish rugs',
    'Aerospace capital of France (Airbus HQ)',
    'Growing Muslim community',
  ],

  visitorTips: [
    'Grande Mosquée is modern and beautiful',
    'Pink city with beautiful architecture',
    'Smaller Muslim community than Paris/Marseille',
    'Airbus often employs Muslims',
    'University city with young population',
  ],

  expatTips: [
    'Aerospace industry jobs available',
    'More affordable than Paris',
    'Smaller but growing Muslim community',
    'Good quality of life',
    'French essential',
    'Grande Mosquée is community center',
  ],
};

export const niceData: CityMuslimCommunityData = {
  citySlug: 'nice',
  cityName: 'Nice',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 40000,
    percentage: 10,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 65, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
    { group: 'Other', percentage: 20, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 15,
    majorMosques: [
      {
        name: 'Mosquée En Nour',
        address: 'Nice',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Various smaller mosques',
        address: 'Nice',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Various',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['Various mosques'],
    qiblaDirection: 117,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Mediterranean halal restaurants', cuisine: 'Mediterranean', priceRange: '$$', neighborhood: 'Nice', specialty: 'Various', halalCertified: true },
    ],
    halalGroceryStores: ['Local halal butchers', 'North African markets'],
    halalNeighborhoods: ['Ariane', 'Nice Nord'],
    bestCuisines: ['Maghrebi', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Ariane',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi'],
      mosqueCount: 3,
      halalRestaurantCount: 15,
      description: 'Northern neighborhood with Muslim community',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Limited'],
    universitiesWithMSA: ['Université Côte d\'Azur'],
  },

  travelInfo: {
    airport: {
      airportCode: 'NCE',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels on Promenade des Anglais'],
    touristMosques: ['Mosquée En Nour'],
  },

  communityResources: {
    islamicCenters: ['Local mosques'],
    advocacyOrgs: ['Local associations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim groups'],
    converts: ['Mosque support'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    recentIncidents: '2016 terror attack heightened tensions',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '4:00 AM (summer) - 7:00 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Beautiful Riviera location',
    'Close to Morocco/Tunisia by sea',
    'Tourist destination with Muslim visitors',
    'Mediterranean climate',
    'Part of larger Côte d\'Azur Muslim community',
  ],

  visitorTips: [
    'Beautiful beaches - modest swimwear available',
    'Tourist area with some halal options',
    'Search for halal restaurants before visiting',
    'Mediterranean food naturally halal-friendly (seafood)',
    'Can be expensive in tourist areas',
  ],

  expatTips: [
    'Expensive cost of living',
    'Beautiful location on Mediterranean',
    'Smaller Muslim community than Paris',
    'Good weather year-round',
    'French essential',
  ],
};

export const strasbourgData: CityMuslimCommunityData = {
  citySlug: 'strasbourg',
  cityName: 'Strasbourg',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 10,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Turkish', percentage: 40, countries: ['Turkey'] },
    { group: 'Maghrebi', percentage: 35, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Other', percentage: 25, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 20,
    majorMosques: [
      {
        name: 'Grande Mosquée de Strasbourg',
        address: 'Heyritz, Strasbourg',
        type: 'masjid',
        size: 'mega',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French', 'Turkish'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2012,
        features: ['Designed by Paolo Portoghesi', 'Innovative open design', 'No support columns', 'Suspension bridge cables', 'Morocco/Saudi/Kuwait funded'],
      },
      {
        name: 'Mahdi Mosque (Ahmadiyya)',
        address: 'Strasbourg',
        type: 'masjid',
        size: 'medium',
        ethnicFocus: 'Ahmadiyya',
        languages: ['French', 'Arabic'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        established: 2019,
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM; Grande Mosquée is main venue',
    eidLocations: ['Grande Mosquée de Strasbourg'],
    qiblaDirection: 128,
  },

  halalFood: {
    restaurantCount: 100,
    topRestaurants: [
      { name: 'Turkish restaurants', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Strasbourg', specialty: 'Döner', halalCertified: true },
      { name: 'Maghrebi restaurants', cuisine: 'Maghrebi', priceRange: '$$', neighborhood: 'Various', specialty: 'Couscous', halalCertified: true },
    ],
    halalGroceryStores: ['Turkish markets', 'Halal butchers'],
    halalNeighborhoods: ['Hautepierre', 'Neuhof', 'City center'],
    bestCuisines: ['Turkish', 'Maghrebi', 'German-influenced'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Hautepierre',
      muslimPopulation: 'high',
      dominantEthnicities: ['Turkish', 'Maghrebi'],
      mosqueCount: 5,
      halalRestaurantCount: 20,
      description: 'Large Muslim community in this suburb',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'good',
    },
    {
      name: 'Neuhof',
      muslimPopulation: 'high',
      dominantEthnicities: ['Various'],
      mosqueCount: 4,
      halalRestaurantCount: 15,
      description: 'Southern neighborhood with Muslim population',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Strasbourg'],
  },

  travelInfo: {
    airport: {
      airportCode: 'SXB',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in Grande Île'],
    touristMosques: ['Grande Mosquée de Strasbourg'],
  },

  communityResources: {
    islamicCenters: ['Grande Mosquée de Strasbourg'],
    advocacyOrgs: ['Local associations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim groups'],
    converts: ['Mosque support'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 7:15 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Grande Mosquée designed by famous architect Paolo Portoghesi',
    'Innovative mosque design with no support columns',
    'Strong Turkish community',
    'European Parliament city',
    'German-French border culture',
    'Christmas market famous but halal food available',
  ],

  visitorTips: [
    'Grande Mosquée is architecturally stunning',
    'Strong Turkish influence means good halal Turkish food',
    'European Parliament visitors welcome',
    'Christmas markets have some halal options',
    'Close to Germany',
  ],

  expatTips: [
    'EU institutions offer employment',
    'Large Turkish community for networking',
    'More affordable than Paris',
    'Bilingual German-French environment',
    'Grande Mosquée is community hub',
  ],
};

export const lilleData: CityMuslimCommunityData = {
  citySlug: 'lille',
  cityName: 'Lille',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 80000,
    percentage: 8,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'stable',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 60, countries: ['Algeria', 'Morocco'] },
    { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
    { group: 'Sub-Saharan African', percentage: 15, countries: ['Various'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 30,
    majorMosques: [
      {
        name: 'Mosquée Al-Imane',
        address: 'Lille',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
      {
        name: 'Mosquée de Lille-Sud',
        address: 'Lille-Sud, Lille',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
      },
    ],
    jummahInfo: 'Friday prayers at 1:00 PM',
    eidLocations: ['Large mosques', 'Rented venues'],
    qiblaDirection: 127,
  },

  halalFood: {
    restaurantCount: 150,
    topRestaurants: [
      { name: 'Various Maghrebi restaurants', cuisine: 'Maghrebi', priceRange: '$$', neighborhood: 'Lille-Sud', specialty: 'Couscous', halalCertified: true },
    ],
    halalGroceryStores: ['Local halal butchers', 'Ethnic markets'],
    halalNeighborhoods: ['Lille-Sud', 'Wazemmes', 'Fives'],
    bestCuisines: ['Maghrebi', 'Turkish'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Lille-Sud',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi'],
      mosqueCount: 8,
      halalRestaurantCount: 40,
      description: 'Large Muslim community in southern Lille',
      safetyRating: 5,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
    {
      name: 'Wazemmes',
      muslimPopulation: 'high',
      dominantEthnicities: ['Maghrebi', 'Various'],
      mosqueCount: 5,
      halalRestaurantCount: 35,
      description: 'Famous market area with diverse community',
      safetyRating: 6,
      affordability: 'affordable',
      publicTransport: 'excellent',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Available'],
    universitiesWithMSA: ['University of Lille'],
  },

  travelInfo: {
    airport: {
      airportCode: 'LIL',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in Vieux-Lille'],
    touristMosques: ['Mosquée Al-Imane'],
  },

  communityResources: {
    islamicCenters: ['Various mosques'],
    advocacyOrgs: ['Local associations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim groups'],
    converts: ['Mosque support'],
  },

  safetyInfo: {
    overallSafety: 6,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '3:30 AM (summer) - 7:30 AM (winter)',
    ramadanFastingHours: '16-19 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Historic industrial city with established Muslim community',
    'Wazemmes market is famous for diverse food',
    'Close to Belgium border',
    'University city with student population',
    'Northern French culture',
  ],

  visitorTips: [
    'Wazemmes market is great for halal food',
    'Close to Brussels and other European cities',
    'Lille-Sud has most Muslim infrastructure',
    'Eurostar connection to London',
  ],

  expatTips: [
    'More affordable than Paris',
    'Good transport connections to Europe',
    'Strong Maghrebi community',
    'University town atmosphere',
    'Industrial heritage but modernizing',
  ],
};

export const bordeauxData: CityMuslimCommunityData = {
  citySlug: 'bordeaux',
  cityName: 'Bordeaux',
  country: 'France',
  lastUpdated: '2024-12-09',

  muslimPopulation: {
    estimate: 50000,
    percentage: 5,
    yearEstimate: 2024,
    source: 'Local estimates',
    trend: 'growing',
  },

  ethnicBreakdown: [
    { group: 'Maghrebi', percentage: 60, countries: ['Algeria', 'Morocco', 'Tunisia'] },
    { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
    { group: 'Sub-Saharan African', percentage: 15, countries: ['Various'] },
    { group: 'Other', percentage: 10, countries: ['Various'] },
  ],

  mosques: {
    totalCount: 6,
    majorMosques: [
      {
        name: 'Great Parc Mosque',
        address: 'Bordeaux',
        type: 'masjid',
        size: 'large',
        ethnicFocus: 'Multi-ethnic',
        languages: ['Arabic', 'French'],
        hasWomensSection: true,
        jummahTimes: ['1:00 PM'],
        features: ['300 capacity but 1500 attend', 'Overflow to parking lot'],
      },
    ],
    jummahInfo: 'Friday prayers often overflow capacity - pray in parking lots',
    eidLocations: ['Various venues', 'Outdoor spaces'],
    qiblaDirection: 113,
  },

  halalFood: {
    restaurantCount: 80,
    topRestaurants: [
      { name: 'Various halal restaurants', cuisine: 'Various', priceRange: '$$', neighborhood: 'Bordeaux', specialty: 'Mixed', halalCertified: true },
    ],
    halalGroceryStores: ['Local halal butchers'],
    halalNeighborhoods: ['Various'],
    bestCuisines: ['Maghrebi', 'Mediterranean'],
    foodDeliveryApps: ['Uber Eats', 'Deliveroo'],
  },

  muslimNeighborhoods: [
    {
      name: 'Various neighborhoods',
      muslimPopulation: 'medium',
      dominantEthnicities: ['Maghrebi'],
      mosqueCount: 2,
      halalRestaurantCount: 20,
      description: 'Muslim community spread across city',
      safetyRating: 7,
      affordability: 'moderate',
      publicTransport: 'good',
    },
  ],

  islamicEducation: {
    fullTimeSchools: [],
    weekendPrograms: ['Mosque programs'],
    hifzPrograms: ['Limited'],
    universitiesWithMSA: ['University of Bordeaux'],
  },

  travelInfo: {
    airport: {
      airportCode: 'BOD',
      hasPrayerRoom: false,
      location: 'No dedicated prayer room',
      is24Hours: false,
      hasWuduFacility: false,
      halalFoodOptions: ['Limited'],
    },
    recommendedHotels: ['Hotels in city center'],
    touristMosques: ['Great Parc Mosque'],
  },

  communityResources: {
    islamicCenters: ['Various mosques'],
    advocacyOrgs: ['Local associations'],
    charities: ['Local charities'],
    socialGroups: ['Muslim groups'],
    converts: ['Mosque support'],
  },

  safetyInfo: {
    overallSafety: 7,
    hijabAcceptance: 6,
    niqabAcceptance: 2,
    beardAcceptance: 7,
    islamophobiaLevel: 'moderate',
    legalProtections: ['French anti-discrimination laws'],
  },

  islamicServices: {
    hasIslamicBanking: false,
    muslimDoctors: true,
    halalCatering: ['Available'],
    muslimFuneralServices: ['Available'],
    muslimCemeteries: ['Muslim sections'],
  },

  prayerTimesInfo: {
    fajrRange: '4:15 AM (summer) - 7:15 AM (winter)',
    ramadanFastingHours: '15-18 hours',
    calculationMethod: 'UOIF',
  },

  uniqueFeatures: [
    'Grand Mosque project voted 2005 but abandoned 2016',
    'Only 6 mosques for 50,000 Muslims',
    'Capacity crisis - prayer in parking lots',
    'Famous wine region (Muslims abstain)',
    'Beautiful historic city',
    'Growing but underserved Muslim community',
  ],

  visitorTips: [
    'Limited mosque infrastructure despite Muslim population',
    'Beautiful UNESCO World Heritage city center',
    'Halal food available but less common than Paris',
    'Wine everywhere - be prepared',
  ],

  expatTips: [
    'Growing but underserved Muslim community',
    'No Grand Mosque despite years of attempts',
    'Good quality of life',
    'Wine industry dominant - some workplace challenges',
    'Beautiful city but limited Muslim infrastructure',
  ],
};

// Export all France cities data
export const franceCitiesData: Record<string, CityMuslimCommunityData> = {
  'paris': parisData,
  'marseille': marseilleData,
  'lyon': lyonData,
  'toulouse': toulouseData,
  'nice': niceData,
  'strasbourg': strasbourgData,
  'lille': lilleData,
  'bordeaux': bordeauxData,
};
