// Benelux & Nordic Cities Muslim Community Data
// Research completed: December 2024
// Cities: Amsterdam, Rotterdam, Brussels, Antwerp, Stockholm, Malmo, Copenhagen, Oslo, Helsinki

import { CityMuslimCommunityData } from '../muslim-community-data';

export const beneluxNordicCitiesData: Record<string, CityMuslimCommunityData> = {
  'amsterdam': {
    citySlug: 'amsterdam',
    cityName: 'Amsterdam',
    country: 'Netherlands',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 90000,
      percentage: 17,
      yearEstimate: 2024,
      source: 'Euro-Islam.info, municipal statistics',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Moroccan', percentage: 40, countries: ['Morocco'] },
      { group: 'Turkish', percentage: 35, countries: ['Turkey'] },
      { group: 'Indonesian', percentage: 10, countries: ['Indonesia', 'Suriname'] },
      { group: 'Somali', percentage: 8, countries: ['Somalia'] },
      { group: 'Other', percentage: 7, countries: ['Various Middle Eastern and African nations'] }
    ],

    mosques: {
      totalCount: 40,
      majorMosques: [
        {
          name: 'Westermoskee',
          address: 'Klarenstraat 19, 1053 GC Amsterdam',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'Dutch', 'Arabic'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 2015,
          features: ['Largest mosque in Netherlands', 'Capacity 1,700', 'Modern Ottoman design', 'Library', 'Community center']
        },
        {
          name: 'El Tawheed Mosque',
          address: 'Amsterdam',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Moroccan',
          languages: ['Arabic', 'Dutch', 'Berber'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Moroccan community']
        },
        {
          name: 'Al Karam Mosque',
          address: 'Amsterdam',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Dutch'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Central location']
        },
        {
          name: 'Islamic Foundation of Amsterdam',
          address: 'Amsterdam',
          type: 'islamic-center',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Dutch', 'Arabic', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Educational programs', 'Interfaith dialogue']
        }
      ],
      jummahInfo: 'Multiple mosques offer Jummah between 12:30-14:00. Westermoskee draws largest crowds.',
      eidLocations: ['RAI Amsterdam convention center', 'Olympic Stadium area', 'Mosque grounds'],
      qiblaDirection: 123
    },

    halalFood: {
      restaurantCount: 300,
      topRestaurants: [
        { name: 'Bazaar', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'De Pijp', specialty: 'North African and Middle Eastern buffet', halalCertified: true, rating: 4.4 },
        { name: 'Meram', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Various', specialty: 'Turkish grills and mezze', halalCertified: true, rating: 4.3 },
        { name: 'Riaz', cuisine: 'Surinamese', priceRange: '$', neighborhood: 'Central', specialty: 'Roti and Surinamese dishes', halalCertified: true, rating: 4.4 },
        { name: 'Bazar Cafe', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Albert Cuypstraat', specialty: 'Hummus and kebabs', halalCertified: true, rating: 4.3 },
        { name: 'Habibi', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'De Pijp', specialty: 'Lebanese specialties', halalCertified: true, rating: 4.5 }
      ],
      halalGroceryStores: ['Turkish supermarkets in Bos en Lommer', 'Moroccan shops in Oost', 'Halal butchers throughout city'],
      halalNeighborhoods: ['Bos en Lommer', 'De Baarsjes', 'Oost (East)', 'Slotervaart', 'Nieuw-West'],
      bestCuisines: ['Turkish', 'Moroccan', 'Lebanese', 'Surinamese', 'Indonesian'],
      foodDeliveryApps: ['Thuisbezorgd.nl (has "100% Halal" filter)', 'Uber Eats', 'Deliveroo']
    },

    muslimNeighborhoods: [
      {
        name: 'Bos en Lommer',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Moroccan'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'West district neighborhood with high concentration of Turkish and Moroccan residents. Halal butchers, Islamic clothing stores, and mosques.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'De Baarsjes',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Turkish'],
        mosqueCount: 4,
        halalRestaurantCount: 20,
        description: 'Adjacent to Bos en Lommer with similar demographics and amenities.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'good'
      },
      {
        name: 'Amsterdam Oost',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Moroccan', 'Surinamese'],
        mosqueCount: 6,
        halalRestaurantCount: 30,
        description: 'Diverse eastern district with good mix of cultures and halal options.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamitische Basisschool El Faroeq', grades: '1-8', type: 'full-time', accredited: true },
        { name: 'Islamitische Basisschool As-Siddieq', grades: '1-8', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools', 'Turkish cultural centers', 'Moroccan community programs'],
      hifzPrograms: ['Mosque-based Quran programs'],
      universitiesWithMSA: ['University of Amsterdam', 'VU Amsterdam', 'Amsterdam University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'AMS',
        hasPrayerRoom: true,
        location: 'Meditation Centre in Holland Boulevard between D and E piers',
        is24Hours: true,
        hasWuduFacility: true,
        halalFoodOptions: ['Halal restaurants available in terminals', 'Turkish and Middle Eastern options']
      },
      recommendedHotels: ['Hotels in Center', 'Near Centraal Station', 'Budget options in Oost or West'],
      touristMosques: ['Westermoskee (guided tours available)'],
      muslimTourOperators: ['Holland Muslim Tours']
    },

    communityResources: {
      islamicCenters: ['Contactorgaan Moslims en Overheid (CMO)', 'Various mosque associations'],
      advocacyOrgs: ['Moslimomroep (Muslim Broadcasting)', 'Contactorgaan Moslims en Overheid'],
      charities: ['Islamic Relief Netherlands', 'Mosque charities'],
      socialGroups: ['Muslim youth organizations', 'Professional networks', 'Sisters circles'],
      converts: ['Mosque convert programs', 'Dutch Muslim associations']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 9,
      islamophobiaLevel: 'low',
      recentIncidents: 'Netherlands generally tolerant. Some political debates on integration but daily life for Muslims is comfortable.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom guaranteed', 'Equal treatment legislation']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various Turkish and Moroccan caterers', 'Hotel halal catering services'],
      muslimFuneralServices: ['Islamic funeral services available'],
      muslimCemeteries: ['Westgaarde Muslim section', 'De Nieuwe Ooster Islamic area']
    },

    prayerTimesInfo: {
      fajrRange: '3:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '16-19 hours',
      calculationMethod: 'MWL or ISNA'
    },

    uniqueFeatures: [
      'Westermoskee is the largest mosque in the Netherlands - stunning modern Ottoman design',
      'Islam is second largest religion in Amsterdam at 17% of population',
      'Thuisbezorgd.nl food app has dedicated "100% Halal" filter',
      'Long history of Turkish and Moroccan communities since 1960s guest workers',
      'Progressive city with generally high acceptance of Muslims'
    ],

    visitorTips: [
      'Visit Westermoskee for an impressive modern mosque experience',
      'Bos en Lommer and De Baarsjes have best halal food concentrations',
      'Use Thuisbezorgd.nl with halal filter for food delivery',
      'Most tourist attractions are halal-friendly and Muslim-welcoming',
      'Avoid coffeeshops (cannabis) - they are legal but not halal',
      'Anne Frank House is respectful and educational visit',
      'Vondelpark is great for family picnics'
    ],

    expatTips: [
      'Housing is extremely expensive and competitive - start search early',
      'Dutch language helps but English widely spoken',
      'Register at gemeente (municipality) within 5 days of arrival',
      'Bos en Lommer, De Baarsjes and Nieuw-West best for Muslim families',
      'Strong job market in tech and finance',
      'Cycling is the main transport - invest in a good bike',
      'Islamic schools available for children'
    ]
  },

  'rotterdam': {
    citySlug: 'rotterdam',
    cityName: 'Rotterdam',
    country: 'Netherlands',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 80000,
      percentage: 13,
      yearEstimate: 2024,
      source: 'Euro-Islam.info, SPIOR',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 38, countries: ['Turkey'] },
      { group: 'Moroccan', percentage: 31, countries: ['Morocco'] },
      { group: 'Surinamese', percentage: 15, countries: ['Suriname'] },
      { group: 'Other Asian/African', percentage: 12, countries: ['Various'] },
      { group: 'Dutch converts', percentage: 4, countries: ['Netherlands'] }
    ],

    mosques: {
      totalCount: 50,
      majorMosques: [
        {
          name: 'Essalam Mosque',
          address: 'Rotterdam',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Dutch', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          features: ['Largest mosque in Netherlands', 'Ottoman-inspired architecture', 'Two white minarets', 'Over 1,500 capacity', 'Community and youth activities']
        },
        {
          name: 'Mevlana Mosque',
          address: 'Rotterdam',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'Dutch'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2001,
          features: ['Named Rotterdam\'s most beautiful mosque in 2006', 'Two minarets', 'Named after Rumi']
        },
        {
          name: 'SPIOR Member Mosques',
          address: 'Various locations',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Various'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Umbrella organization coordinates majority of Rotterdam mosques']
        }
      ],
      jummahInfo: 'SPIOR coordinates most Rotterdam mosques. Multiple Jummah times available.',
      eidLocations: ['Ahoy Rotterdam', 'Large mosque grounds', 'Community centers'],
      qiblaDirection: 124
    },

    halalFood: {
      restaurantCount: 200,
      topRestaurants: [
        { name: 'Istanbul Restaurant', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Central', specialty: 'Turkish grills', halalCertified: true, rating: 4.3 },
        { name: 'Bazar Rotterdam', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Witte de Withstraat', specialty: 'North African cuisine', halalCertified: true, rating: 4.4 },
        { name: 'De Ballentent', cuisine: 'Dutch-Moroccan', priceRange: '$', neighborhood: 'Markthal', specialty: 'Falafel and Dutch-Middle Eastern fusion', halalCertified: true, rating: 4.2 }
      ],
      halalGroceryStores: ['Turkish supermarkets', 'Moroccan shops', 'Halal butchers throughout Rotterdam'],
      halalNeighborhoods: ['Delfshaven', 'Feijenoord', 'Charlois', 'West-Kruiskade'],
      bestCuisines: ['Turkish', 'Moroccan', 'Surinamese', 'Lebanese'],
      foodDeliveryApps: ['Thuisbezorgd.nl', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Delfshaven',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Moroccan'],
        mosqueCount: 5,
        halalRestaurantCount: 15,
        description: 'Historic harbor area with diverse Muslim community.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Feijenoord',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Moroccan', 'Surinamese'],
        mosqueCount: 6,
        halalRestaurantCount: 20,
        description: 'South Rotterdam district with large immigrant population.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Various Islamic primary schools', grades: '1-8', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['SPIOR member mosque schools', 'Turkish and Moroccan programs'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['Erasmus University Rotterdam', 'Rotterdam University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'RTM',
        hasPrayerRoom: true,
        location: 'Small prayer room available',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Limited options - small regional airport']
      },
      recommendedHotels: ['City center hotels', 'Near Centraal Station'],
      touristMosques: ['Essalam Mosque', 'Mevlana Mosque'],
      muslimTourOperators: ['Rotterdam Muslim tours']
    },

    communityResources: {
      islamicCenters: ['SPIOR (Platform Islamic Organizations Rijnmond)', 'Various mosque associations'],
      advocacyOrgs: ['SPIOR - official representative of Rotterdam mosques since 1988'],
      charities: ['Mosque-based charities', 'Islamic Relief'],
      socialGroups: ['SPIOR youth programs', 'Sisters groups'],
      converts: ['Mosque convert support programs']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Rotterdam generally tolerant. Had Muslim mayor (Ahmed Aboutaleb) since 2009.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom guaranteed']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Turkish and Moroccan caterers'],
      muslimFuneralServices: ['Muslim funeral services'],
      muslimCemeteries: ['Crooswijk Cemetery Islamic section']
    },

    prayerTimesInfo: {
      fajrRange: '3:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '16-19 hours',
      calculationMethod: 'MWL or ISNA'
    },

    uniqueFeatures: [
      'Essalam Mosque is the largest mosque in the Netherlands',
      'Ahmed Aboutaleb - Muslim mayor of Rotterdam since 2009',
      'SPIOR coordinates most Rotterdam mosques - strong community organization',
      'Mevlana Mosque voted Rotterdam\'s most beautiful mosque',
      'Modern architecture city rebuilt after WWII'
    ],

    visitorTips: [
      'Visit Essalam Mosque - impressive Ottoman-style architecture',
      'Markthal food hall has halal options',
      'Cube Houses and Erasmus Bridge are iconic landmarks',
      'Easy day trip to Amsterdam (40 min train)',
      'Rotterdam Centraal is beautiful modern station',
      'Good base for exploring South Holland'
    ],

    expatTips: [
      'More affordable than Amsterdam',
      'Strong job market in port/logistics and creative industries',
      'Delfshaven and Feijenoord have Muslim amenities',
      'Dutch language helpful but English widely spoken',
      'Register at gemeente within 5 days',
      'Good public transport - OV-chipkaart essential'
    ]
  },

  'brussels': {
    citySlug: 'brussels',
    cityName: 'Brussels',
    country: 'Belgium',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 300000,
      percentage: 24,
      yearEstimate: 2024,
      source: 'Catholic University of Louvain, various studies',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Moroccan', percentage: 50, countries: ['Morocco'] },
      { group: 'Turkish', percentage: 25, countries: ['Turkey'] },
      { group: 'Other Arab', percentage: 10, countries: ['Algeria', 'Tunisia', 'Syria', 'Iraq'] },
      { group: 'Sub-Saharan African', percentage: 10, countries: ['Various'] },
      { group: 'Other', percentage: 5, countries: ['Pakistan', 'Bangladesh', 'Various'] }
    ],

    mosques: {
      totalCount: 77,
      majorMosques: [
        {
          name: 'Grand Mosque of Brussels (Centre Islamique et Culturel de Belgique)',
          address: 'Parc du Cinquantenaire 14, 1000 Brussels',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'French', 'Dutch', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['12:30', '13:00', '13:30'],
          established: 1978,
          features: ['Largest mosque in Belgium', 'Historic building in Cinquantenaire Park', 'Islamic Cultural Center']
        },
        {
          name: 'Al-Khalil Mosque (Molenbeek)',
          address: 'Molenbeek, Brussels',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'French'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1985,
          features: ['Biggest mosque in Belgium', 'Converted factory', '1,000+ capacity for Friday prayer']
        },
        {
          name: 'Fatih Mosque',
          address: 'Schaerbeek, Brussels',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'French', 'Dutch'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community']
        }
      ],
      jummahInfo: 'Molenbeek alone has 21 mosques. 77 mosques total across Brussels. Friday adhan echoes 20 times in Molenbeek.',
      eidLocations: ['Brussels Expo (Heysel)', 'Large mosques', 'Community centers'],
      qiblaDirection: 125
    },

    halalFood: {
      restaurantCount: 400,
      topRestaurants: [
        { name: 'Chez Moeder Lambic', cuisine: 'Belgian-Halal', priceRange: '$$', neighborhood: 'Saint-Gilles', specialty: 'Halal Belgian food', halalCertified: true, rating: 4.3 },
        { name: 'Comptoir de Mezze', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Ixelles', specialty: 'Lebanese mezze', halalCertified: true, rating: 4.4 },
        { name: 'Al Barmaki', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Schaerbeek', specialty: 'Syrian dishes', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Moroccan shops in Molenbeek', 'Turkish markets in Schaerbeek', 'Arab supermarkets throughout'],
      halalNeighborhoods: ['Molenbeek', 'Schaerbeek', 'Saint-Josse', 'Anderlecht'],
      bestCuisines: ['Moroccan', 'Turkish', 'Lebanese', 'Syrian', 'Pakistani'],
      foodDeliveryApps: ['Deliveroo', 'Uber Eats', 'Takeaway.com']
    },

    muslimNeighborhoods: [
      {
        name: 'Molenbeek-Saint-Jean',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Arab'],
        mosqueCount: 21,
        halalRestaurantCount: 50,
        description: 'Known as Brussels\' Islamic center with 41% Muslim population. 21 mosques including Al-Khalil. Extensive halal infrastructure.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Schaerbeek',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Moroccan'],
        mosqueCount: 15,
        halalRestaurantCount: 40,
        description: 'Large Turkish and Moroccan community with 38.5% Muslim population.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'excellent'
      },
      {
        name: 'Saint-Josse-ten-Noode',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Moroccan', 'Arab'],
        mosqueCount: 8,
        halalRestaurantCount: 25,
        description: 'Smallest but most densely populated commune with 49.3% Muslim population - highest in Brussels.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Various Islamic schools', grades: 'K-12', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque schools', 'Turkish and Moroccan programs'],
      hifzPrograms: ['Al-Khalil and other mosque programs'],
      universitiesWithMSA: ['Université libre de Bruxelles', 'KU Leuven Brussels']
    },

    travelInfo: {
      airport: {
        airportCode: 'BRU',
        hasPrayerRoom: true,
        location: 'Multi-faith prayer room in Connector building',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Some halal options available in terminals']
      },
      recommendedHotels: ['City center hotels', 'Near Grand Place', 'EU Quarter'],
      touristMosques: ['Grand Mosque of Brussels (in Cinquantenaire Park)'],
      muslimTourOperators: ['Brussels Muslim heritage tours']
    },

    communityResources: {
      islamicCenters: ['Centre Islamique et Culturel de Belgique', 'Exécutif des Musulmans de Belgique (EMB)'],
      advocacyOrgs: ['EMB - Muslim Executive of Belgium'],
      charities: ['Islamic Relief Belgium', 'Mosque charities'],
      socialGroups: ['Muslim youth groups', 'Professional networks'],
      converts: ['Mosque convert programs']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Some areas like Molenbeek received negative media attention after 2015-16 events. Daily life remains normal for most Muslims.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom', 'Brussels only region allowing ritual slaughter']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Numerous Moroccan and Turkish caterers'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Evere Cemetery Muslim section', 'Various commune cemeteries']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:45 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Highest Muslim percentage of any major European capital at 24%',
      'Molenbeek has 21 mosques - called Brussels\' Islamic center',
      'Brussels is only Belgian region allowing ritual halal slaughter',
      'Saint-Josse has nearly 50% Muslim population',
      'Capital of EU with large Muslim community',
      'Strong North African influence on local culture'
    ],

    visitorTips: [
      'Grand Mosque in Cinquantenaire Park welcomes visitors',
      'Molenbeek and Schaerbeek have extensive halal options',
      'Grand Place and Manneken Pis are main tourist sites',
      'Belgian waffles and chocolate widely available in halal versions',
      'European Parliament tours available',
      'Comic Book Museum is family-friendly attraction'
    ],

    expatTips: [
      'Molenbeek, Schaerbeek, Saint-Josse most Muslim-friendly',
      'EU institutions provide many jobs - English often sufficient',
      'French and Dutch both official languages',
      'Register at commune within 8 days',
      'Housing more affordable than London or Paris',
      'Excellent transport links across Europe'
    ]
  },

  'antwerp': {
    citySlug: 'antwerp',
    cityName: 'Antwerp',
    country: 'Belgium',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 45000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Municipal statistics',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Moroccan', percentage: 50, countries: ['Morocco'] },
      { group: 'Turkish', percentage: 30, countries: ['Turkey'] },
      { group: 'Other', percentage: 20, countries: ['Various Arab and African nations'] }
    ],

    mosques: {
      totalCount: 20,
      majorMosques: [
        {
          name: 'El Fath En Nassr Mosque',
          address: 'Antwerp',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Dutch', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Largest mosque in Antwerp area']
        },
        {
          name: 'Noor Ul Haram Mosque',
          address: 'Near Central Station, Antwerp',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Dutch'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Near central station']
        },
        {
          name: 'Mosque Hamza',
          address: 'Kroonstraat 210, 2140 Antwerp',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'Dutch'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community']
        }
      ],
      jummahInfo: 'Multiple mosques throughout Antwerp. Belgium is small - mosque always nearby.',
      eidLocations: ['Antwerp Expo', 'Large mosque grounds'],
      qiblaDirection: 125
    },

    halalFood: {
      restaurantCount: 100,
      topRestaurants: [
        { name: 'El Rodizio', cuisine: 'Brazilian', priceRange: '$$$', neighborhood: 'Central', specialty: 'Halal Brazilian grill', halalCertified: true, rating: 4.4 },
        { name: 'The Sushi Factory', cuisine: 'Japanese', priceRange: '$$', neighborhood: 'Central', specialty: 'Halal sushi', halalCertified: true, rating: 4.3 },
        { name: 'Various kebab shops', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Various', specialty: 'Döner and kebabs', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Moroccan shops', 'Turkish markets', 'Halal butchers'],
      halalNeighborhoods: ['Borgerhout', 'Central areas'],
      bestCuisines: ['Moroccan', 'Turkish', 'Middle Eastern'],
      foodDeliveryApps: ['Deliveroo', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Borgerhout',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Turkish'],
        mosqueCount: 6,
        halalRestaurantCount: 20,
        description: 'Known as "Borgerokko" due to large Moroccan community.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic primary schools', grades: '1-6', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Antwerp']
    },

    travelInfo: {
      airport: {
        airportCode: 'ANR',
        hasPrayerRoom: false,
        location: 'Small regional airport - no dedicated prayer room',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['City center hotels', 'Near Centraal Station'],
      touristMosques: ['El Fath En Nassr Mosque'],
      muslimTourOperators: ['Antwerp tours']
    },

    communityResources: {
      islamicCenters: ['Various mosque associations'],
      advocacyOrgs: ['Local Muslim councils'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups'],
      converts: ['Mosque programs']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Flemish region has had political debates on Muslim integration. Daily life generally comfortable.',
      legalProtections: ['Anti-discrimination laws', 'Note: Flanders banned ritual slaughter - halal meat imported']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Schoonselhof Cemetery Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:45 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Major diamond center - second largest port in Europe',
      'Borgerhout nicknamed "Borgerokko" due to Moroccan community',
      'Beautiful medieval and Art Nouveau architecture',
      'Fashion capital of Belgium'
    ],

    visitorTips: [
      'Central Station is architectural masterpiece worth visiting',
      'Diamond District is unique attraction',
      'Halal food available but less than Brussels',
      'Note: Flanders bans ritual slaughter - halal meat is imported',
      'Beautiful museums and historic center'
    ],

    expatTips: [
      'Borgerhout most Muslim-friendly neighborhood',
      'Diamond and port industries provide jobs',
      'Dutch/Flemish language important in Flanders region',
      'More affordable than Brussels',
      'Easy train connections to Brussels and Amsterdam'
    ]
  },

  'stockholm': {
    citySlug: 'stockholm',
    cityName: 'Stockholm',
    country: 'Sweden',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 100000,
      percentage: 10,
      yearEstimate: 2024,
      source: 'Pew Research, municipal estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Iraqi', percentage: 25, countries: ['Iraq'] },
      { group: 'Somali', percentage: 20, countries: ['Somalia'] },
      { group: 'Turkish', percentage: 15, countries: ['Turkey'] },
      { group: 'Syrian', percentage: 15, countries: ['Syria'] },
      { group: 'Bosnian', percentage: 10, countries: ['Bosnia'] },
      { group: 'Other', percentage: 15, countries: ['Iran', 'Afghanistan', 'Various'] }
    ],

    mosques: {
      totalCount: 10,
      majorMosques: [
        {
          name: 'Stockholm Mosque (Zayed bin Sultan Al Nahyan\'s Mosque)',
          address: 'Kapellgränd 10, 116 25 Stockholm',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Swedish', 'Somali', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['12:30', '13:00'],
          website: 'https://www.stockholmsmoske.se/',
          established: 2000,
          features: ['Largest mosque in Stockholm', '2,000 capacity', 'Library', 'Gym', 'Lecture halls', 'Kitchen']
        },
        {
          name: 'Rinkeby Islamic Center',
          address: 'Rinkeby Allé 2, 163 73 Spånga',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Swedish', 'Somali'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Serves large immigrant community']
        },
        {
          name: 'Fittja Mosque',
          address: 'Fittja, Stockholm suburbs',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Swedish'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2007,
          features: ['Purpose-built mosque']
        }
      ],
      jummahInfo: 'Stockholm Mosque is main Jummah location. Multiple times available. Six purpose-built mosques planned for Stockholm area.',
      eidLocations: ['Stockholm Mosque', 'Rental halls', 'Community centers'],
      qiblaDirection: 137
    },

    halalFood: {
      restaurantCount: 150,
      topRestaurants: [
        { name: 'Lilla Ego', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Vasastan', specialty: 'Modern Middle Eastern', halalCertified: true, rating: 4.5 },
        { name: 'Babas Kök', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Södermalm', specialty: 'Palestinian cuisine', halalCertified: true, rating: 4.4 },
        { name: 'Rinkeby Centrum restaurants', cuisine: 'Various', priceRange: '$', neighborhood: 'Rinkeby', specialty: 'Authentic immigrant cuisines', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Rinkeby shops', 'Middle Eastern supermarkets in suburbs', 'Turkish groceries'],
      halalNeighborhoods: ['Rinkeby', 'Tensta', 'Husby', 'Hjulsta', 'Fittja'],
      bestCuisines: ['Iraqi', 'Somali', 'Turkish', 'Syrian', 'Persian'],
      foodDeliveryApps: ['Foodora', 'Wolt', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Rinkeby',
        muslimPopulation: 'high',
        dominantEthnicities: ['Somali', 'Iraqi', 'Turkish'],
        mosqueCount: 2,
        halalRestaurantCount: 20,
        description: 'Major immigrant area with strong Muslim community. Mosque planned for area.',
        safetyRating: 5,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Tensta',
        muslimPopulation: 'high',
        dominantEthnicities: ['Iraqi', 'Somali', 'Turkish'],
        mosqueCount: 2,
        halalRestaurantCount: 15,
        description: 'Adjacent to Rinkeby with similar demographics. Mosque planned.',
        safetyRating: 5,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Södermalm',
        muslimPopulation: 'low',
        dominantEthnicities: ['Mixed'],
        mosqueCount: 1,
        halalRestaurantCount: 10,
        description: 'Central trendy area with Stockholm Mosque. More integrated community.',
        safetyRating: 8,
        affordability: 'expensive',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Various Islamic schools', grades: 'K-9', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools', 'Community programs'],
      hifzPrograms: ['Stockholm Mosque programs'],
      universitiesWithMSA: ['Stockholm University', 'KTH Royal Institute of Technology']
    },

    travelInfo: {
      airport: {
        airportCode: 'ARN',
        hasPrayerRoom: true,
        location: 'Multi-faith room available in Terminal 5',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Some halal options in terminals']
      },
      recommendedHotels: ['City center hotels', 'Near Centralstation'],
      touristMosques: ['Stockholm Mosque (Södermalm)'],
      muslimTourOperators: ['Stockholm tours']
    },

    communityResources: {
      islamicCenters: ['Stockholm Mosque and Islamic Center', 'Sveriges Muslimska Förbund (Swedish Muslim Association)'],
      advocacyOrgs: ['Sveriges Muslimska Förbund', 'Islam Net'],
      charities: ['Islamic Relief Sweden', 'Mosque charities'],
      socialGroups: ['Muslim youth groups', 'Sisters networks'],
      converts: ['Stockholm Mosque convert programs']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Sweden has had debates on integration and some tensions. Quran burning incidents in 2023 caused diplomatic crisis. Daily life generally safe for Muslims.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom', 'Strong legal protections']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various immigrant-run caterers'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Skogskyrkogården Muslim section', 'Various cemetery Muslim areas']
    },

    prayerTimesInfo: {
      fajrRange: '2:00 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '17-21 hours (extremely long summer fasts)',
      calculationMethod: 'ISNA or Islamic Center ruling for extreme latitudes'
    },

    uniqueFeatures: [
      'Stockholm Mosque (2000) is the largest mosque and includes library, gym, lecture halls',
      'Muslims make up about 8% of Sweden\'s population - one of highest in Europe',
      'Islam Net organizes Scandinavia\'s largest Islamic conferences for youth',
      'Extremely long Ramadan fasts in summer (up to 21 hours)',
      'Six new mosques planned for Stockholm area'
    ],

    visitorTips: [
      'Stockholm Mosque in Södermalm welcomes visitors',
      'Gamla Stan (Old Town) is main tourist area - some halal options nearby',
      'Summer has very long days - check special Ramadan rulings',
      'Rinkeby has most authentic halal food but is far from tourist areas',
      'Stockholm archipelago is beautiful - pack halal picnic',
      'Expensive city - budget accordingly'
    ],

    expatTips: [
      'Rinkeby/Tensta affordable but have challenges - weigh options carefully',
      'Swedish language crucial for long-term integration',
      'Tech industry strong - many English-speaking jobs',
      'Register with Skatteverket (Tax Agency) on arrival',
      'Summer Ramadan very challenging - prepare mentally',
      'Healthcare excellent but expect wait times'
    ]
  },

  'malmo': {
    citySlug: 'malmo',
    cityName: 'Malmö',
    country: 'Sweden',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 50000,
      percentage: 15,
      yearEstimate: 2024,
      source: 'Municipal estimates, Islamic Center',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Iraqi', percentage: 30, countries: ['Iraq'] },
      { group: 'Syrian', percentage: 20, countries: ['Syria'] },
      { group: 'Somali', percentage: 15, countries: ['Somalia'] },
      { group: 'Bosnian', percentage: 15, countries: ['Bosnia'] },
      { group: 'Other', percentage: 20, countries: ['Lebanon, Afghanistan, Various'] }
    ],

    mosques: {
      totalCount: 8,
      majorMosques: [
        {
          name: 'Malmö Mosque',
          address: 'Jägersro, Malmö',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Swedish', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 1984,
          features: ['Second oldest mosque in Sweden', '130+ languages spoken', '70,000+ visitors annually', 'Serves 45,000+ local Muslims']
        }
      ],
      jummahInfo: 'Malmö Mosque receives 1,000 for Friday prayers. Currently too small for community needs.',
      eidLocations: ['Large rental halls', 'Malmö Mosque'],
      qiblaDirection: 137
    },

    halalFood: {
      restaurantCount: 100,
      topRestaurants: [
        { name: 'Rosengård restaurants', cuisine: 'Various Middle Eastern', priceRange: '$', neighborhood: 'Rosengård', specialty: 'Authentic Arab food', halalCertified: true, rating: 4.0 },
        { name: 'Falafel spots', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Falafel - Malmö is famous for it', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Rosengård shops', 'Middle Eastern markets', 'Arab supermarkets'],
      halalNeighborhoods: ['Rosengård', 'Herrgården', 'Möllevången'],
      bestCuisines: ['Iraqi', 'Syrian', 'Lebanese', 'Somali', 'Turkish'],
      foodDeliveryApps: ['Foodora', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Rosengård',
        muslimPopulation: 'high',
        dominantEthnicities: ['Iraqi', 'Syrian', 'Somali', 'Bosnian'],
        mosqueCount: 3,
        halalRestaurantCount: 30,
        description: '86% immigrant population. Often compared to Arab Middle Eastern city. Classified as "particularly vulnerable area" by police due to some challenges.',
        safetyRating: 5,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic schools', grades: 'K-9', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Malmö Mosque programs', 'Community schools'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['Malmö University']
    },

    travelInfo: {
      airport: {
        airportCode: 'MMX',
        hasPrayerRoom: false,
        location: 'Small airport - use Copenhagen CPH instead (30 min)',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['City center hotels'],
      touristMosques: ['Malmö Mosque'],
      muslimTourOperators: ['Malmö tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Center (runs Malmö Mosque)', 'Malmö Muslimska Samfund'],
      advocacyOrgs: ['Islamic Center', 'Local Muslim organizations'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Sisters circles'],
      converts: ['Mosque convert programs']
    },

    safetyInfo: {
      overallSafety: 6,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Malmö has had gang violence and Quran burning incidents. Eurovision 2024 held here amid tensions. Police classify some areas as "vulnerable."',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Cemetery Muslim sections']
    },

    prayerTimesInfo: {
      fajrRange: '2:00 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '17-21 hours',
      calculationMethod: 'ISNA or Islamic Center ruling'
    },

    uniqueFeatures: [
      'Called the "most Muslim city in Sweden" - 15% Muslim population',
      'Malmö Mosque (1984) is second oldest mosque in Sweden',
      'Famous for falafel - one of best in Europe',
      'Rosengård has streets that "look like Arab Middle Eastern city"',
      'Gateway to Copenhagen via Öresund Bridge (20 min)'
    ],

    visitorTips: [
      'Try the falafel - Malmö is famous for it',
      'Rosengård has authentic halal food but exercise caution',
      'Easy day trip to Copenhagen across Öresund Bridge',
      'Turning Torso is iconic architectural landmark',
      'Smaller and more affordable than Stockholm'
    ],

    expatTips: [
      'Affordable compared to Stockholm',
      'Rosengård very affordable but has challenges',
      'Swedish language important for integration',
      'Close proximity to Copenhagen for jobs',
      'Register with Skatteverket on arrival'
    ]
  },

  'copenhagen': {
    citySlug: 'copenhagen',
    cityName: 'Copenhagen',
    country: 'Denmark',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 80000,
      percentage: 6,
      yearEstimate: 2024,
      source: 'University of Copenhagen estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 25, countries: ['Turkey'] },
      { group: 'Pakistani', percentage: 20, countries: ['Pakistan'] },
      { group: 'Iraqi', percentage: 15, countries: ['Iraq'] },
      { group: 'Somali', percentage: 15, countries: ['Somalia'] },
      { group: 'Other', percentage: 25, countries: ['Syria, Lebanon, Morocco, Various'] }
    ],

    mosques: {
      totalCount: 40,
      majorMosques: [
        {
          name: 'Hamad Bin Khalifa Civilisation Center (Grand Mosque of Copenhagen)',
          address: 'Vibevej 22, 2400 Copenhagen NV',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Danish', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2014,
          features: ['First purpose-built mosque in Denmark', 'One of largest in Europe', 'Modern design']
        },
        {
          name: 'Nusrat Jahan Mosque',
          address: 'Hvidovre, Copenhagen',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Ahmadiyya',
          languages: ['Danish', 'Urdu', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1967,
          features: ['Oldest mosque in Denmark and Scandinavia']
        },
        {
          name: 'Mariam Mosque',
          address: 'Copenhagen',
          type: 'masjid',
          size: 'small',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Danish', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2016,
          features: ['Denmark\'s first female-run mosque', 'Female imams only', 'Founded by Sherin Khankan']
        }
      ],
      jummahInfo: 'Grand Mosque is main location. Number of mosques increased from 115 (2006) to 170 (2017).',
      eidLocations: ['Grand Mosque', 'Large rental halls'],
      qiblaDirection: 134
    },

    halalFood: {
      restaurantCount: 100,
      topRestaurants: [
        { name: 'Nørrebro restaurants', cuisine: 'Various', priceRange: '$$', neighborhood: 'Nørrebro', specialty: 'Turkish and Middle Eastern', halalCertified: true, rating: 4.2 },
        { name: 'Kebab King', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Various', specialty: 'Döner kebab', halalCertified: true, rating: 4.1 }
      ],
      halalGroceryStores: ['Turkish markets in Nørrebro', 'Arab shops', 'Bilka, Føtex, Netto occasionally stock halal'],
      halalNeighborhoods: ['Nørrebro', 'Nordvest'],
      bestCuisines: ['Turkish', 'Pakistani', 'Lebanese', 'Iraqi'],
      foodDeliveryApps: ['Wolt', 'Just Eat']
    },

    muslimNeighborhoods: [
      {
        name: 'Nørrebro',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Pakistani', 'Arab'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'Most diverse neighborhood with halal restaurants, Turkish/Middle Eastern stores, and mosques. Known for Islamic heritage in the city.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic private schools', grades: '1-10', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Copenhagen', 'Copenhagen Business School']
    },

    travelInfo: {
      airport: {
        airportCode: 'CPH',
        hasPrayerRoom: true,
        location: 'Multi-faith prayer room in Terminal 3',
        is24Hours: true,
        hasWuduFacility: true,
        halalFoodOptions: ['Some halal options in terminals']
      },
      recommendedHotels: ['City center hotels', 'Near Tivoli'],
      touristMosques: ['Grand Mosque of Copenhagen (by appointment)'],
      muslimTourOperators: ['Copenhagen tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Society in Denmark', 'Grand Mosque administration'],
      advocacyOrgs: ['Islamisk Trossamfund'],
      charities: ['Mosque charities'],
      socialGroups: ['Muslim youth groups'],
      converts: ['Mosque convert programs']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 3,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Denmark has had political debates on Muslim integration. Strict immigration policies. 2014 ban on halal/kosher slaughter without stunning.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom with some restrictions']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Vestre Kirkegård Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '2:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '16-20 hours',
      calculationMethod: 'ISNA'
    },

    uniqueFeatures: [
      'Grand Mosque (2014) is first purpose-built mosque in Denmark',
      'Mariam Mosque (2016) is first female-run mosque in Denmark/Europe - only female imams',
      'Denmark banned halal slaughter without stunning in 2014 - meat must be imported',
      'Nørrebro neighborhood has distinct Muslim character',
      'Easy access to Malmö, Sweden across Øresund Bridge'
    ],

    visitorTips: [
      'Nørrebro has best halal food concentration',
      'Grand Mosque welcomes visitors - contact in advance',
      'Tivoli Gardens is family-friendly - some halal options',
      'Note: Halal meat must be imported due to Danish slaughter ban',
      'Copenhagen is expensive - budget accordingly',
      'Easy day trip to Malmö via Øresund Bridge'
    ],

    expatTips: [
      'Danish language important for long-term stay',
      'Immigration policies strict',
      'Nørrebro most Muslim-friendly area',
      'Register with CPR (civil registration) on arrival',
      'High taxes but excellent public services',
      'Cycling is main transport - get a bike'
    ]
  },

  'oslo': {
    citySlug: 'oslo',
    cityName: 'Oslo',
    country: 'Norway',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 60000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Municipal statistics',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Pakistani', percentage: 40, countries: ['Pakistan'] },
      { group: 'Somali', percentage: 20, countries: ['Somalia'] },
      { group: 'Iraqi', percentage: 15, countries: ['Iraq'] },
      { group: 'Turkish', percentage: 10, countries: ['Turkey'] },
      { group: 'Other', percentage: 15, countries: ['Morocco, Afghanistan, Various'] }
    ],

    mosques: {
      totalCount: 40,
      majorMosques: [
        {
          name: 'Central Jamaat-e Ahl-e Sunnat (Jamea Masjid)',
          address: 'Motzfeldts gate 10, Grønland, Oslo',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Pakistani',
          languages: ['Urdu', 'Norwegian', 'Arabic'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 1976,
          features: ['Largest mosque in Norway', '6,000 members', '6,200 sqm facility', '2,500 capacity', 'Beautiful blue ornaments', 'Two minarets']
        },
        {
          name: 'Islamic Cultural Centre',
          address: 'Oslo',
          type: 'islamic-center',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Norwegian'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1974,
          features: ['One of oldest Muslim organizations in Norway']
        }
      ],
      jummahInfo: 'Central Jamaat draws largest crowds. More than 40 prayer locations in Oslo.',
      eidLocations: ['Large mosques', 'Rental halls'],
      qiblaDirection: 140
    },

    halalFood: {
      restaurantCount: 80,
      topRestaurants: [
        { name: 'Grønland restaurants', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Grønland', specialty: 'Pakistani cuisine', halalCertified: true, rating: 4.3 },
        { name: 'Punjab Tandoori', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Grønland', specialty: 'Tandoori and curries', halalCertified: true, rating: 4.4 }
      ],
      halalGroceryStores: ['Grønland shops', 'Pakistani supermarkets', 'Arab groceries'],
      halalNeighborhoods: ['Grønland', 'Tøyen', 'Greenland'],
      bestCuisines: ['Pakistani', 'Somali', 'Turkish', 'Iraqi'],
      foodDeliveryApps: ['Foodora', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Grønland',
        muslimPopulation: 'high',
        dominantEthnicities: ['Pakistani', 'Somali', 'Arab'],
        mosqueCount: 5,
        halalRestaurantCount: 20,
        description: 'Main Muslim neighborhood in Oslo. Home to Central Jamaat Mosque. Known as Oslo\'s "Little Pakistan."',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Tøyen',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Somali', 'Pakistani'],
        mosqueCount: 2,
        halalRestaurantCount: 10,
        description: 'Adjacent to Grønland, diverse immigrant community.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic schools', grades: '1-10', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque schools', 'Community programs'],
      hifzPrograms: ['Central Jamaat programs', 'Various mosques'],
      universitiesWithMSA: ['University of Oslo', 'Oslo Metropolitan University']
    },

    travelInfo: {
      airport: {
        airportCode: 'OSL',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited options']
      },
      recommendedHotels: ['City center hotels', 'Near Oslo S station'],
      touristMosques: ['Central Jamaat-e Ahl-e Sunnat (visits by arrangement)'],
      muslimTourOperators: ['Oslo tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Council of Norway', 'Central Jamaat-e Ahl-e Sunnat', 'Islamic Cultural Centre'],
      advocacyOrgs: ['Islamsk Råd Norge (Islamic Council of Norway)', 'Islam Net'],
      charities: ['Islamic Relief Norway', 'Mosque charities'],
      socialGroups: ['Islam Net youth conferences', 'Sisters groups'],
      converts: ['Mosque convert programs']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Norway generally tolerant. April 2024: White supremacist threatened attack on Central Jamaat Mosque.',
      legalProtections: ['Strong anti-discrimination laws', 'Religious freedom guaranteed']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Pakistani and other caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Gamlebyen gravlund Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '1:30 AM (summer) - 7:30 AM (winter)',
      ramadanFastingHours: '18-22 hours (extremely long summer fasts)',
      calculationMethod: 'ISNA or fatwa for extreme latitudes'
    },

    uniqueFeatures: [
      'Central Jamaat-e Ahl-e Sunnat is largest mosque in Norway - beautiful blue ornaments and 2,500 capacity',
      'Norwegian Pakistanis are largest immigrant group in Oslo (40,000)',
      'Islam Net organizes Norway\'s largest Islamic youth conferences',
      'First mosque established in 1972 by Pakistani immigrants',
      'Extremely long summer Ramadan fasts (up to 22 hours)'
    ],

    visitorTips: [
      'Visit Central Jamaat Mosque in Grønland - stunning architecture',
      'Grønland area has best Pakistani food in Scandinavia',
      'Oslo is expensive - budget accordingly',
      'Summer has very long days - check Ramadan rulings',
      'Viking Ship Museum and Munch Museum are main attractions',
      'Fjord tours are beautiful'
    ],

    expatTips: [
      'Norwegian language helpful but English widely spoken',
      'Very high salaries but also high cost of living',
      'Grønland area most Muslim-friendly for housing',
      'Register with Tax Administration on arrival',
      'Healthcare excellent',
      'Summer Ramadan extremely challenging'
    ]
  },

  'helsinki': {
    citySlug: 'helsinki',
    cityName: 'Helsinki',
    country: 'Finland',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 30000,
      percentage: 4,
      yearEstimate: 2024,
      source: 'Helsinki Islamic Center, estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Somali', percentage: 30, countries: ['Somalia'] },
      { group: 'Iraqi', percentage: 20, countries: ['Iraq'] },
      { group: 'Afghan', percentage: 15, countries: ['Afghanistan'] },
      { group: 'Turkish', percentage: 10, countries: ['Turkey'] },
      { group: 'Tatar', percentage: 5, countries: ['Finland - historic community since 1800s'] },
      { group: 'Other', percentage: 20, countries: ['Syria, Pakistan, Bangladesh, Various'] }
    ],

    mosques: {
      totalCount: 20,
      majorMosques: [
        {
          name: 'Helsinki Islamic Center (Al-Huda)',
          address: 'Pasila, Helsinki',
          type: 'islamic-center',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Finnish', 'Somali', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1995,
          features: ['Largest Islamic center', '2,700 sqm facility', 'Café-restaurant', 'Halal grocery store', 'Funeral services', 'Near Tripla shopping center']
        },
        {
          name: 'Finnish Islamic Association (Tatar Mosque)',
          address: 'Helsinki',
          type: 'masjid',
          size: 'small',
          ethnicFocus: 'Tatar',
          languages: ['Finnish', 'Tatar'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1925,
          features: ['Oldest Islamic society in Finland', 'Historic Tatar community']
        }
      ],
      jummahInfo: 'Helsinki Islamic Center is main Jummah location. About 80 mosques in Finland, most in Helsinki area.',
      eidLocations: ['Helsinki Islamic Center', 'Rental halls'],
      qiblaDirection: 148
    },

    halalFood: {
      restaurantCount: 50,
      topRestaurants: [
        { name: 'Helsinki Islamic Center Café', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Pasila', specialty: 'Halal meals', halalCertified: true, rating: 4.2 },
        { name: 'Somali restaurants', cuisine: 'Somali', priceRange: '$', neighborhood: 'Various', specialty: 'Authentic Somali food', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Helsinki Islamic Center grocery store', 'Middle Eastern shops', 'Arab groceries'],
      halalNeighborhoods: ['Pasila (near Islamic Center)', 'East Helsinki'],
      bestCuisines: ['Somali', 'Middle Eastern', 'Turkish', 'Afghan'],
      foodDeliveryApps: ['Wolt', 'Foodora']
    },

    muslimNeighborhoods: [
      {
        name: 'Pasila',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Various - near Islamic Center'],
        mosqueCount: 2,
        halalRestaurantCount: 5,
        description: 'Home to Helsinki Islamic Center near Tripla shopping center.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Helsinki Islamic Center programs', 'Mosque schools'],
      hifzPrograms: ['Limited programs'],
      universitiesWithMSA: ['University of Helsinki', 'Aalto University']
    },

    travelInfo: {
      airport: {
        airportCode: 'HEL',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['City center hotels', 'Near Central Railway Station'],
      touristMosques: ['Helsinki Islamic Center'],
      muslimTourOperators: ['Helsinki tours']
    },

    communityResources: {
      islamicCenters: ['Helsinki Islamic Center', 'Finnish Islamic Association'],
      advocacyOrgs: ['Forum for Cooperation of Religions in Finland'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Sisters circles'],
      converts: ['Helsinki Islamic Center programs']
    },

    safetyInfo: {
      overallSafety: 9,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Finland generally very tolerant. Grand mosque debate ongoing for years due to concerns about foreign funding.',
      legalProtections: ['Strong anti-discrimination laws', 'Religious freedom']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Limited options'],
      muslimFuneralServices: ['Helsinki Islamic Center provides services'],
      muslimCemeteries: ['Hietaniemi Cemetery Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '1:00 AM (summer) - 8:00 AM (winter)',
      ramadanFastingHours: '18-23 hours (extremely long summer fasts)',
      calculationMethod: 'ISNA or special rulings for extreme latitudes'
    },

    uniqueFeatures: [
      'Historic Tatar Muslim community since 1800s - oldest in Nordic countries',
      'Helsinki Islamic Center is 2,700 sqm facility with grocery store and café',
      'Grand mosque project debated for years - concerns about foreign funding',
      'Small but growing Muslim community at 2.3% of Finland',
      'Extremely long summer Ramadan fasts (up to 23 hours)'
    ],

    visitorTips: [
      'Helsinki Islamic Center in Pasila is main resource for Muslims',
      'Finnish design and architecture main attractions',
      'Suomenlinna Sea Fortress is beautiful day trip',
      'Summer has extremely long days - check Ramadan rulings',
      'Very safe and clean city',
      'Expensive - budget accordingly'
    ],

    expatTips: [
      'Finnish language very difficult but English widely spoken',
      'Small Muslim community - less infrastructure than other Nordic cities',
      'Very high quality of life',
      'Register with maistraatti on arrival',
      'Winter very dark - prepare for seasonal adjustment',
      'Summer Ramadan extremely challenging'
    ]
  }
};

// Export individual city data for convenience
export const amsterdamData = beneluxNordicCitiesData['amsterdam'];
export const rotterdamData = beneluxNordicCitiesData['rotterdam'];
export const brusselsData = beneluxNordicCitiesData['brussels'];
export const antwerpData = beneluxNordicCitiesData['antwerp'];
export const stockholmData = beneluxNordicCitiesData['stockholm'];
export const malmoData = beneluxNordicCitiesData['malmo'];
export const copenhagenData = beneluxNordicCitiesData['copenhagen'];
export const osloData = beneluxNordicCitiesData['oslo'];
export const helsinkiData = beneluxNordicCitiesData['helsinki'];
