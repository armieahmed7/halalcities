// Southern Europe Cities Muslim Community Data
// Research completed: December 2024
// Cities: Madrid, Barcelona, Rome, Milan, Lisbon, Athens

import { CityMuslimCommunityData } from '../muslim-community-data';

export const southernEuropeCitiesData: Record<string, CityMuslimCommunityData> = {
  'madrid': {
    citySlug: 'madrid',
    cityName: 'Madrid',
    country: 'Spain',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 300000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Islamic Community of Madrid',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Moroccan', percentage: 50, countries: ['Morocco'] },
      { group: 'Pakistani', percentage: 15, countries: ['Pakistan', 'Bangladesh'] },
      { group: 'Other Arab', percentage: 15, countries: ['Syria', 'Egypt', 'Algeria'] },
      { group: 'Sub-Saharan African', percentage: 10, countries: ['Senegal', 'Nigeria', 'Mali'] },
      { group: 'Spanish converts', percentage: 5, countries: ['Spain'] },
      { group: 'Other', percentage: 5, countries: ['Turkey, Indonesia, Various'] }
    ],

    mosques: {
      totalCount: 80,
      majorMosques: [
        {
          name: 'Islamic Cultural Center of Madrid (M-30 Mosque)',
          address: 'Calle Salvador de Madariaga 4, 28027 Madrid',
          type: 'islamic-center',
          size: 'mega',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Spanish', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:30', '14:00'],
          website: 'https://www.ccislamico.es/',
          established: 1992,
          features: ['Largest mosque in Europe (6 stories)', '2,500 capacity', 'Library', 'Tea shops', 'Arab supermarkets nearby', 'Butchers and hair salons']
        },
        {
          name: 'Madrid Central Mosque (Abu-Bakr Mosque)',
          address: 'Tetuán District, Madrid',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Spanish'],
          hasWomensSection: true,
          jummahTimes: ['13:30'],
          established: 1988,
          features: ['First mosque in Madrid since Reconquista 1083', 'UCIDE headquarters']
        }
      ],
      jummahInfo: 'M-30 Mosque is main Jummah location. Up to 80 mosques/prayer halls across Comunidad de Madrid.',
      eidLocations: ['M-30 Mosque', 'IFEMA convention center', 'Large parks'],
      qiblaDirection: 110
    },

    halalFood: {
      restaurantCount: 200,
      topRestaurants: [
        { name: 'Du Liban', cuisine: 'Lebanese', priceRange: '$$$', neighborhood: 'La Moraleja', specialty: 'Lebanese haute cuisine', halalCertified: true, rating: 4.5 },
        { name: 'Beirut', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Lavapiés', specialty: 'Lebanese classics', halalCertified: true, rating: 4.3 },
        { name: 'Restaurante Halal', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Tetuán', specialty: 'Mixed Middle Eastern', halalCertified: true, rating: 4.2 },
        { name: 'Various Lavapiés restaurants', cuisine: 'Moroccan', priceRange: '$', neighborhood: 'Lavapiés', specialty: 'Authentic Moroccan', halalCertified: true, rating: 4.1 }
      ],
      halalGroceryStores: ['Arab supermarkets near M-30 Mosque', 'Lavapiés Moroccan shops', 'Halal butchers in immigrant neighborhoods'],
      halalNeighborhoods: ['Lavapiés', 'Embajadores', 'Puente de Vallecas', 'Villaverde', 'Tetuán'],
      bestCuisines: ['Moroccan', 'Lebanese', 'Pakistani', 'Turkish', 'Syrian'],
      foodDeliveryApps: ['Glovo', 'Just Eat', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Lavapiés/Embajadores',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Pakistani', 'Bangladeshi'],
        mosqueCount: 8,
        halalRestaurantCount: 30,
        description: 'Historic migrant neighborhood in central Madrid. Shisha lounges, halal butchers, Islamic clothing. Can smoke shisha and buy halal meat.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'excellent'
      },
      {
        name: 'Tetuán',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Arab'],
        mosqueCount: 5,
        halalRestaurantCount: 15,
        description: 'Northern district home to Madrid Central Mosque and M-30 Mosque nearby.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Puente de Vallecas',
        muslimPopulation: 'high',
        dominantEthnicities: ['Moroccan', 'Sub-Saharan African'],
        mosqueCount: 4,
        halalRestaurantCount: 12,
        description: 'Working-class neighborhood with established immigrant community.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Various Islamic schools', grades: 'K-12', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['M-30 Mosque programs', 'UCIDE schools', 'Mosque-based classes'],
      hifzPrograms: ['Mosque-based Quran programs'],
      universitiesWithMSA: ['Universidad Complutense de Madrid', 'Universidad Autónoma de Madrid']
    },

    travelInfo: {
      airport: {
        airportCode: 'MAD',
        hasPrayerRoom: true,
        location: 'Two mosques in public areas - exits of T2 and T4',
        is24Hours: true,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited but growing options']
      },
      recommendedHotels: ['City center hotels', 'Near Sol/Gran Vía', 'Hotels with halal catering on request'],
      touristMosques: ['M-30 Mosque (Centro Cultural Islámico)'],
      muslimTourOperators: ['Spain Muslim tours', 'Halal tourism operators']
    },

    communityResources: {
      islamicCenters: ['Centro Cultural Islámico (M-30)', 'UCIDE (Union of Islamic Communities of Spain)'],
      advocacyOrgs: ['UCIDE', 'Comisión Islámica de España'],
      charities: ['Mosque charities', 'Islamic Relief Spain'],
      socialGroups: ['Muslim youth groups', 'Sisters circles'],
      converts: ['Convert support at M-30 Mosque']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Spain generally tolerant with Islamic history. Good acceptance of Muslims.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom', 'Islam officially recognized religion since 1992']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers', 'Hotel halal services'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Cementerio de Griñón Muslim section', 'Other cemetery Muslim areas']
    },

    prayerTimesInfo: {
      fajrRange: '5:00 AM (summer) - 7:30 AM (winter)',
      ramadanFastingHours: '14-17 hours',
      calculationMethod: 'MWL or ISNA'
    },

    uniqueFeatures: [
      'M-30 Mosque (1992) is one of largest mosques in Europe - 6 story complex',
      'Spain has over 250 official mosques and Islamic centers',
      'Madrid has airport mosques in T2 and T4 - unique in Europe',
      'Strong Islamic heritage from Al-Andalus era',
      'Spain.info promotes halal tourism officially'
    ],

    visitorTips: [
      'Visit M-30 Mosque - impressive 6-story Islamic cultural center',
      'Lavapiés has most authentic halal food in central Madrid',
      'Madrid airport has two mosques in public areas (T2 and T4)',
      'Prado Museum and Royal Palace are main attractions',
      'Try halal-certified Spanish tapas restaurants',
      'Spain promotes halal-friendly tourism officially'
    ],

    expatTips: [
      'Lavapiés, Tetuán, Vallecas best for Muslim families',
      'Spanish language essential',
      'Register with Ayuntamiento on arrival',
      'Good job market in various sectors',
      'Cost of living reasonable for European capital',
      'Islam officially recognized since 1992 - good legal protections'
    ]
  },

  'barcelona': {
    citySlug: 'barcelona',
    cityName: 'Barcelona',
    country: 'Spain',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 120000,
      percentage: 7,
      yearEstimate: 2024,
      source: 'Islamic Council of Catalonia, estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Pakistani', percentage: 35, countries: ['Pakistan', 'Bangladesh'] },
      { group: 'Moroccan', percentage: 30, countries: ['Morocco'] },
      { group: 'Other Arab', percentage: 15, countries: ['Syria, Egypt, Iraq'] },
      { group: 'Sub-Saharan African', percentage: 10, countries: ['Senegal, Nigeria'] },
      { group: 'Other', percentage: 10, countries: ['Turkey, Indonesia, converts'] }
    ],

    mosques: {
      totalCount: 26,
      majorMosques: [
        {
          name: 'Central Mosque of Barcelona',
          address: 'Eixample District, Barcelona',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Spanish', 'Catalan', 'Urdu'],
          hasWomensSection: true,
          jummahTimes: ['13:30'],
          features: ['Main mosque in city center']
        },
        {
          name: 'Raval District Mosques',
          address: 'Raval, Barcelona',
          type: 'musalla',
          size: 'medium',
          ethnicFocus: 'Pakistani',
          languages: ['Urdu', 'Arabic', 'Spanish'],
          hasWomensSection: true,
          jummahTimes: ['13:30'],
          features: ['Multiple prayer rooms in historic immigrant quarter', 'Most in converted warehouses/garages']
        }
      ],
      jummahInfo: '26 Muslim places of worship in Barcelona. Many in precarious locations - converted warehouses and garages.',
      eidLocations: ['Large rental halls', 'Mosque grounds'],
      qiblaDirection: 112
    },

    halalFood: {
      restaurantCount: 150,
      topRestaurants: [
        { name: 'Aladdin', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Raval', specialty: 'Mixed Middle Eastern', halalCertified: true, rating: 4.3 },
        { name: 'La Medina', cuisine: 'Moroccan', priceRange: '$$', neighborhood: 'Gràcia', specialty: 'Moroccan tagines', halalCertified: true, rating: 4.4 },
        { name: 'Al Waha', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Central', specialty: 'Lebanese cuisine', halalCertified: true, rating: 4.3 },
        { name: 'Raval kebab shops', cuisine: 'Pakistani/Turkish', priceRange: '$', neighborhood: 'Raval', specialty: 'Kebabs and curries', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Raval halal butchers', 'Pakistani grocery shops', 'Arab supermarkets'],
      halalNeighborhoods: ['Raval', 'Gràcia', 'Eixample (some areas)'],
      bestCuisines: ['Pakistani', 'Moroccan', 'Lebanese', 'Turkish', 'Syrian'],
      foodDeliveryApps: ['Glovo', 'Just Eat', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Raval (Ciutat Vella)',
        muslimPopulation: 'high',
        dominantEthnicities: ['Pakistani', 'Moroccan', 'Bangladeshi'],
        mosqueCount: 8,
        halalRestaurantCount: 40,
        description: 'Historic first settlement of Muslims in Barcelona. 5.5% Pakistani, 3.4% Moroccan population. Halal restaurants and butchers abound.',
        safetyRating: 6,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Gràcia',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Moroccan', 'Various'],
        mosqueCount: 3,
        halalRestaurantCount: 15,
        description: 'Trendy bohemian neighborhood with diverse community.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic schools', grades: 'K-8', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools', 'Community programs'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Barcelona', 'Universitat Autònoma de Barcelona']
    },

    travelInfo: {
      airport: {
        airportCode: 'BCN',
        hasPrayerRoom: true,
        location: 'Multi-faith room available in Terminal 1',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited options']
      },
      recommendedHotels: ['City center hotels', 'Near Las Ramblas (with halal options nearby)'],
      touristMosques: ['Central Mosque of Barcelona'],
      muslimTourOperators: ['Barcelona halal tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Council of Catalonia', 'Central Mosque associations'],
      advocacyOrgs: ['Islamic Council of Catalonia'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Sisters circles'],
      converts: ['Mosque convert support']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 8,
      niqabAcceptance: 5,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Barcelona very cosmopolitan and tolerant. August 2017 terror attack was condemned by local Muslim community.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Montjuïc Cemetery Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '5:00 AM (summer) - 7:30 AM (winter)',
      ramadanFastingHours: '14-17 hours',
      calculationMethod: 'MWL or ISNA'
    },

    uniqueFeatures: [
      'Raval is historic first Muslim settlement in Barcelona - very multicultural',
      'Around 7% of population Muslim - one of highest in Spain',
      'Most mosques are in converted warehouses due to resource challenges',
      'Very Muslim-friendly cosmopolitan city',
      'Ramadan iftar specials common in Raval and Eixample'
    ],

    visitorTips: [
      'Raval has most authentic halal food and Pakistani/Moroccan restaurants',
      'Sagrada Familia and Gaudí sites are main attractions',
      'Las Ramblas is famous but crowded - halal food nearby',
      'Barcelona beach is family-friendly',
      'Spain promotes halal tourism - official support',
      'During Ramadan, many restaurants offer iftar specials'
    ],

    expatTips: [
      'Raval or Gràcia best for Muslim families',
      'Spanish and Catalan languages both used',
      'Register with Ayuntamiento on arrival',
      'Good job market especially in tourism and tech',
      'Moderate cost of living for European city',
      'Mosques often have precarious locations - community-funded'
    ]
  },

  'rome': {
    citySlug: 'rome',
    cityName: 'Rome',
    country: 'Italy',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 150000,
      percentage: 5,
      yearEstimate: 2024,
      source: 'Grand Mosque of Rome estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Moroccan', percentage: 30, countries: ['Morocco'] },
      { group: 'Albanian', percentage: 25, countries: ['Albania'] },
      { group: 'Egyptian', percentage: 15, countries: ['Egypt'] },
      { group: 'Bangladeshi', percentage: 10, countries: ['Bangladesh'] },
      { group: 'Other', percentage: 20, countries: ['Pakistan, Tunisia, Senegal, Various'] }
    ],

    mosques: {
      totalCount: 8,
      majorMosques: [
        {
          name: 'Mosque of Rome (Grande Moschea di Roma)',
          address: 'Via della Moschea, 85, 00197 Roma',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Italian', 'English', 'French'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          website: 'https://www.centroculturaleislamico.it/',
          established: 1995,
          features: ['Largest mosque in Western world by area (30,000 sqm)', 'Capacity 12,000', 'Islamic Cultural Center of Italy', 'Built 1984-1995', 'Funded by 20+ Muslim countries', 'Beautiful Parioli location']
        }
      ],
      jummahInfo: 'Grand Mosque is main location. Only 8 official mosques in all Italy despite 2.8 million Muslims.',
      eidLocations: ['Grand Mosque grounds', 'Large rental venues'],
      qiblaDirection: 116
    },

    halalFood: {
      restaurantCount: 80,
      topRestaurants: [
        { name: 'Various Esquilino restaurants', cuisine: 'Middle Eastern', priceRange: '$', neighborhood: 'Esquilino', specialty: 'Arab and Asian food', halalCertified: true, rating: 4.0 },
        { name: 'Kebab shops', cuisine: 'Turkish/Middle Eastern', priceRange: '$', neighborhood: 'Various', specialty: 'Döner and kebabs', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Esquilino ethnic shops', 'Arab grocery stores', 'Halal butchers'],
      halalNeighborhoods: ['Esquilino', 'Piazza Vittorio area', 'Centocelle'],
      bestCuisines: ['Moroccan', 'Egyptian', 'Turkish', 'Pakistani', 'Bangladeshi'],
      foodDeliveryApps: ['Glovo', 'Just Eat', 'Deliveroo']
    },

    muslimNeighborhoods: [
      {
        name: 'Esquilino (Piazza Vittorio)',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Bangladeshi', 'Chinese', 'North African'],
        mosqueCount: 2,
        halalRestaurantCount: 20,
        description: 'Rome\'s most diverse neighborhood near Termini station. Multi-ethnic markets and restaurants.',
        safetyRating: 6,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Parioli',
        muslimPopulation: 'low',
        dominantEthnicities: ['Various - near Grand Mosque'],
        mosqueCount: 1,
        halalRestaurantCount: 3,
        description: 'Upscale northern neighborhood where Grand Mosque is located.',
        safetyRating: 9,
        affordability: 'expensive',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamic school at Grand Mosque', grades: 'K-8', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Grand Mosque weekend school', 'Community programs'],
      hifzPrograms: ['Grand Mosque Quran program'],
      universitiesWithMSA: ['La Sapienza University', 'LUISS University']
    },

    travelInfo: {
      airport: {
        airportCode: 'FCO',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['City center hotels', 'Near Vatican/historic center'],
      touristMosques: ['Grand Mosque of Rome (visits welcome)'],
      muslimTourOperators: ['Rome halal tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Cultural Center of Italy (Grand Mosque)', 'UCOII'],
      advocacyOrgs: ['Centro Culturale Islamico d\'Italia'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Community networks'],
      converts: ['Grand Mosque convert support']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Italy does not officially recognize Islam as a religion, limiting mosque construction. Over 1,300 makeshift prayer spaces exist.',
      legalProtections: ['General anti-discrimination laws', 'Note: Islam not officially recognized - limits protections and funding']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Grand Mosque services'],
      muslimCemeteries: ['Verano Cemetery Muslim section', 'Prima Porta Cemetery']
    },

    prayerTimesInfo: {
      fajrRange: '4:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '14-17 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Grand Mosque of Rome is largest mosque in Western world by land area (30,000 sqm)',
      'Can accommodate 12,000 worshippers',
      'Only 8 official mosques in Italy despite 2.8 million Muslims',
      'Italy does not officially recognize Islam - creates challenges',
      'Over 1,300 converted warehouses/shops serve as prayer spaces nationwide',
      'Well-integrated Muslim community - 4% of Italian population'
    ],

    visitorTips: [
      'Visit Grand Mosque - architecturally stunning and welcomes visitors',
      'Esquilino/Piazza Vittorio area has most ethnic food options',
      'Vatican City is main tourist draw - respectful dress required',
      'Colosseum, Forum, and historic center are must-sees',
      'Halal options limited in tourist areas - research in advance',
      'Italian cuisine naturally has seafood and vegetarian options'
    ],

    expatTips: [
      'Esquilino most diverse area with halal options',
      'Italian language essential',
      'Islam not officially recognized - be aware of limitations',
      'Register with Anagrafe (civil registry) on arrival',
      'Job market challenging but opportunities in various sectors',
      'Healthcare universal but bureaucratic'
    ]
  },

  'milan': {
    citySlug: 'milan',
    cityName: 'Milan',
    country: 'Italy',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 100000,
      percentage: 7,
      yearEstimate: 2024,
      source: 'Islamic Center of Milan and Lombardy estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Egyptian', percentage: 30, countries: ['Egypt'] },
      { group: 'Moroccan', percentage: 25, countries: ['Morocco'] },
      { group: 'Albanian', percentage: 15, countries: ['Albania'] },
      { group: 'Bangladeshi', percentage: 10, countries: ['Bangladesh'] },
      { group: 'Other', percentage: 20, countries: ['Pakistan, Tunisia, Various'] }
    ],

    mosques: {
      totalCount: 5,
      majorMosques: [
        {
          name: 'Mosque of Segrate (Masjid Al-Rahman)',
          address: 'Via Cassanese 63, 20090 Segrate MI',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Italian', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 1988,
          features: ['First mosque with dome and minaret in Italy (1998)', 'Second most important mosque in Italy after Rome', 'Islamic Center of Milan and Lombardy', 'Publishes "Messenger of Islam" magazine', 'Open to visitors']
        },
        {
          name: 'Islamic Cultural Center Sesto San Giovanni',
          address: 'Sesto San Giovanni, Milan area',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Italian'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Planning new €5 million mosque with 1,000 capacity', 'Youth and women\'s programs']
        }
      ],
      jummahInfo: 'Segrate Mosque is main location. Milan seeking central mosque - currently lacking.',
      eidLocations: ['Segrate Mosque', 'Rental halls'],
      qiblaDirection: 118
    },

    halalFood: {
      restaurantCount: 60,
      topRestaurants: [
        { name: 'Middle Eastern restaurants', cuisine: 'Various', priceRange: '$$', neighborhood: 'Porta Venezia', specialty: 'Arab and North African', halalCertified: true, rating: 4.2 },
        { name: 'Kebab shops', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Various', specialty: 'Döner kebab', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Ethnic grocery shops', 'Arab supermarkets', 'Halal butchers'],
      halalNeighborhoods: ['Porta Venezia area', 'Via Padova', 'Loreto area'],
      bestCuisines: ['Egyptian', 'Moroccan', 'Lebanese', 'Pakistani'],
      foodDeliveryApps: ['Glovo', 'Just Eat', 'Deliveroo']
    },

    muslimNeighborhoods: [
      {
        name: 'Via Padova area',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Egyptian', 'North African', 'Asian'],
        mosqueCount: 2,
        halalRestaurantCount: 15,
        description: 'Diverse immigrant neighborhood with ethnic shops and restaurants.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Porta Venezia',
        muslimPopulation: 'low',
        dominantEthnicities: ['Various'],
        mosqueCount: 1,
        halalRestaurantCount: 10,
        description: 'Central area with some Middle Eastern restaurants.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Segrate Mosque programs', 'Sesto San Giovanni center'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Milan', 'Bocconi University', 'Politecnico di Milano']
    },

    travelInfo: {
      airport: {
        airportCode: 'MXP',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited options']
      },
      recommendedHotels: ['City center hotels', 'Near Duomo'],
      touristMosques: ['Mosque of Segrate (open to visitors)'],
      muslimTourOperators: ['Milan tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Center of Milan and Lombardy', 'Islamic Cultural Center Sesto San Giovanni'],
      advocacyOrgs: ['Islamic Center advocacy'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Women\'s programs'],
      converts: ['Mosque convert support']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Milan center-left administration supports mosque construction. Zone 1 planning committee requested central mosque.',
      legalProtections: ['General anti-discrimination laws', 'Local administration supportive']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Various caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Musocco Cemetery Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '4:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '14-17 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Mosque of Segrate was first mosque with dome and minaret in Italy (1998)',
      'Second most important mosque in Italy after Rome',
      'Milan city council has requested central mosque for Zone 1',
      'New €5 million mosque planned in Sesto San Giovanni with 1,000 capacity',
      'Fashion capital with growing Muslim population'
    ],

    visitorTips: [
      'Visit Mosque of Segrate - first purpose-built mosque in Italy',
      'Duomo di Milano is main tourist attraction',
      'Via Padova area has ethnic food options',
      'Fashion district has limited halal options - plan ahead',
      'Italian seafood and vegetarian dishes are naturally halal-friendly',
      'Last Supper (Leonardo da Vinci) requires advance booking'
    ],

    expatTips: [
      'Milan is Italy\'s economic capital - best job market',
      'Italian language important',
      'Via Padova area more affordable with immigrant community',
      'Register with Anagrafe on arrival',
      'High cost of living but high salaries',
      'Fashion, finance, and design industries strong'
    ]
  },

  'lisbon': {
    citySlug: 'lisbon',
    cityName: 'Lisbon',
    country: 'Portugal',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 40000,
      percentage: 4,
      yearEstimate: 2024,
      source: 'Islamic Community of Lisbon estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Bangladeshi', percentage: 25, countries: ['Bangladesh'] },
      { group: 'Pakistani', percentage: 20, countries: ['Pakistan'] },
      { group: 'North African', percentage: 20, countries: ['Morocco, Algeria, Tunisia'] },
      { group: 'West African', percentage: 15, countries: ['Guinea-Bissau, Senegal'] },
      { group: 'Middle Eastern', percentage: 10, countries: ['Syria, Iraq, Egypt'] },
      { group: 'Other', percentage: 10, countries: ['Afghanistan, Various'] }
    ],

    mosques: {
      totalCount: 15,
      majorMosques: [
        {
          name: 'Central Mosque of Lisbon (Mesquita Central de Lisboa)',
          address: 'Rua da Mesquita 2, 1070-238 Lisboa',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Portuguese', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 1985,
          features: ['Main mosque of Lisbon', 'Near Praça de Espanha', '1,500 capacity', 'Minaret and dome', 'Islamic Community of Lisbon headquarters']
        },
        {
          name: 'Masjid Baitul Mukarram',
          address: 'Lisbon',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Bangladeshi',
          languages: ['Bengali', 'Arabic', 'Portuguese'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Bangladeshi community']
        }
      ],
      jummahInfo: 'Central Mosque is main Jummah location. Over 40 mosques across Portugal.',
      eidLocations: ['Central Mosque', 'Large rental venues'],
      qiblaDirection: 105
    },

    halalFood: {
      restaurantCount: 60,
      topRestaurants: [
        { name: 'Restaurante O Assador Halal', cuisine: 'Portuguese-Halal', priceRange: '$$', neighborhood: 'Central', specialty: 'Halal Portuguese', halalCertified: true, rating: 4.3 },
        { name: 'Zaafran', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Central', specialty: 'Indian dishes', halalCertified: true, rating: 4.2 },
        { name: 'Taste of Punjab', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Central', specialty: 'Pakistani cuisine', halalCertified: true, rating: 4.3 },
        { name: 'MK Halal', cuisine: 'Halal', priceRange: '$$', neighborhood: 'Central', specialty: 'Various halal dishes', halalCertified: true, rating: 4.1 }
      ],
      halalGroceryStores: ['Turkish restaurants with butcher shops', 'Arab grocery stores', 'Halal meat shops'],
      halalNeighborhoods: ['Martim Moniz', 'Mouraria', 'Near Central Mosque (Praça de Espanha)'],
      bestCuisines: ['Pakistani', 'Indian', 'Turkish', 'Moroccan', 'Portuguese-Halal'],
      foodDeliveryApps: ['Uber Eats', 'Glovo']
    },

    muslimNeighborhoods: [
      {
        name: 'Martim Moniz/Mouraria',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Bangladeshi', 'Pakistani', 'Chinese', 'African'],
        mosqueCount: 3,
        halalRestaurantCount: 15,
        description: 'Historic multicultural area near Rossio. Diverse immigrant community with ethnic restaurants and shops.',
        safetyRating: 6,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Central Mosque programs', 'Community schools'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Lisbon', 'NOVA University Lisbon']
    },

    travelInfo: {
      airport: {
        airportCode: 'LIS',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['City center hotels', 'Baixa-Chiado area'],
      touristMosques: ['Central Mosque of Lisbon'],
      muslimTourOperators: ['Portugal Halal tours']
    },

    communityResources: {
      islamicCenters: ['Islamic Community of Lisbon', 'Central Mosque'],
      advocacyOrgs: ['Comunidade Islâmica de Lisboa'],
      charities: ['Mosque charities'],
      socialGroups: ['Youth groups', 'Community networks'],
      converts: ['Central Mosque convert support']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 8,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'low',
      recentIncidents: 'Portugal generally very tolerant. October 2025 parliament approved face veil ban - awaiting presidential decision.',
      legalProtections: ['Anti-discrimination laws', 'Religious freedom', 'Note: Potential face veil ban pending']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Limited caterers'],
      muslimFuneralServices: ['Available'],
      muslimCemeteries: ['Cemitério do Alto de São João Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '5:00 AM (summer) - 7:30 AM (winter)',
      ramadanFastingHours: '14-16 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Central Mosque (1985) is main Islamic center in Lisbon',
      'Portugal generally Muslim-friendly despite small Muslim population (0.4%)',
      'Historical connection - Portugal was under Moorish rule for 500 years',
      'Portugal Halal promotes halal tourism',
      'Seafood naturally halal - great for Muslim visitors'
    ],

    visitorTips: [
      'Central Mosque near Marquês de Pombal welcomes visitors',
      'Martim Moniz/Mouraria has diverse food options',
      'Belém Tower and Jerónimos Monastery are main sights',
      'Portuguese seafood is naturally halal',
      'Sintra day trip is highly recommended',
      'Lisbon is very affordable compared to other European capitals'
    ],

    expatTips: [
      'Portugal has welcoming immigration policies',
      'Portuguese language important for integration',
      'Martim Moniz area has immigrant services',
      'Register at Junta de Freguesia on arrival',
      'Growing tech scene - English useful in that sector',
      'Affordable cost of living attracting many expats'
    ]
  },

  'athens': {
    citySlug: 'athens',
    cityName: 'Athens',
    country: 'Greece',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 300000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Muslim Association of Greece estimates',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Pakistani', percentage: 30, countries: ['Pakistan'] },
      { group: 'Bangladeshi', percentage: 25, countries: ['Bangladesh'] },
      { group: 'Egyptian', percentage: 15, countries: ['Egypt'] },
      { group: 'Afghan', percentage: 15, countries: ['Afghanistan'] },
      { group: 'Other', percentage: 15, countries: ['Iraq, Syria, African nations'] }
    ],

    mosques: {
      totalCount: 10,
      majorMosques: [
        {
          name: 'Votanikos Mosque (Athens Mosque)',
          address: 'Votanikos, Athens',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Greek', 'Urdu', 'Bengali'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2020,
          features: ['First official mosque in Athens since Greek independence (1821)', 'Opened November 2020', 'Government-funded', '366 capacity', 'Historic significance']
        },
        {
          name: 'Al-Salam Mosque',
          address: 'Galaxia, Athens',
          type: 'musalla',
          size: 'small',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Greek'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Community mosque']
        },
        {
          name: 'Masjid Al-Farouk',
          address: 'Zagorion, Athens',
          type: 'musalla',
          size: 'small',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'Urdu', 'Greek'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Community mosque']
        }
      ],
      jummahInfo: 'Votanikos Mosque is only official mosque. Many unofficial basement mosques exist.',
      eidLocations: ['Votanikos Mosque', 'Unofficial prayer halls'],
      qiblaDirection: 131
    },

    halalFood: {
      restaurantCount: 50,
      topRestaurants: [
        { name: 'Mesopotamian Kebab & Restaurant', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Vyronas', specialty: 'Döner and kebab', halalCertified: true, rating: 4.4 },
        { name: 'Aladdin Kebap Restaurant', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Central', specialty: 'Halal Greek-style kebab', halalCertified: true, rating: 4.2 },
        { name: 'Raja Jee Fast Food', cuisine: 'Pakistani', priceRange: '$', neighborhood: 'Central', specialty: 'Pakistani fast food', halalCertified: true, rating: 4.0 }
      ],
      halalGroceryStores: ['Ethnic grocery shops', 'Bangladeshi stores', 'Arab markets'],
      halalNeighborhoods: ['Omonia area', 'Victoria Square area', 'Patissia'],
      bestCuisines: ['Pakistani', 'Bangladeshi', 'Egyptian', 'Turkish', 'Lebanese'],
      foodDeliveryApps: ['efood', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Omonia/Victoria Square area',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Pakistani', 'Bangladeshi', 'Afghan'],
        mosqueCount: 3,
        halalRestaurantCount: 15,
        description: 'Main immigrant area with ethnic shops and unofficial prayer rooms.',
        safetyRating: 5,
        affordability: 'affordable',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Community programs'],
      hifzPrograms: ['Very limited'],
      universitiesWithMSA: ['National and Kapodistrian University of Athens']
    },

    travelInfo: {
      airport: {
        airportCode: 'ATH',
        hasPrayerRoom: true,
        location: 'Multi-faith room available in main terminal',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Very limited']
      },
      recommendedHotels: ['Plaka area hotels', 'Central Athens'],
      touristMosques: ['Votanikos Mosque (visits by arrangement)'],
      muslimTourOperators: ['Athens halal tours']
    },

    communityResources: {
      islamicCenters: ['Muslim Association of Greece', 'Various community associations'],
      advocacyOrgs: ['Muslim Association of Greece'],
      charities: ['Community charities'],
      socialGroups: ['Immigrant community groups'],
      converts: ['Limited formal support']
    },

    safetyInfo: {
      overallSafety: 6,
      hijabAcceptance: 6,
      niqabAcceptance: 3,
      beardAcceptance: 7,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Greece has been slow to build mosques. 2021 proposal for Thessaloniki mosque rejected. Some tension around immigration.',
      legalProtections: ['Basic anti-discrimination laws', 'Recognized Muslim minority in Thrace only']
    },

    islamicServices: {
      hasIslamicBanking: false,
      muslimDoctors: true,
      halalCatering: ['Limited'],
      muslimFuneralServices: ['Limited - community-arranged'],
      muslimCemeteries: ['Ilioupoli Cemetery Muslim section']
    },

    prayerTimesInfo: {
      fajrRange: '4:30 AM (summer) - 7:00 AM (winter)',
      ramadanFastingHours: '14-17 hours',
      calculationMethod: 'MWL'
    },

    uniqueFeatures: [
      'Votanikos Mosque (2020) is first official mosque in Athens since 1821 Greek independence',
      'Greek Muslims officially recognized only in Thrace region (northeastern Greece)',
      'For decades Muslims prayed in converted basements and warehouses',
      'Muslim Association estimates 300,000+ Muslims in Athens',
      'Historical significance - Athens without official mosque for 200 years'
    ],

    visitorTips: [
      'Votanikos Mosque is historic first - visits by arrangement',
      'Acropolis and Parthenon are must-see attractions',
      'Omonia area has halal food but exercise caution',
      'Greek cuisine has good seafood options',
      'Don\'t assume Turkish restaurants are halal - always ask',
      'Plaka historic neighborhood is beautiful for walking'
    ],

    expatTips: [
      'Muslim infrastructure limited - plan accordingly',
      'Greek language important',
      'Omonia area affordable but has challenges',
      'Register at KEP (Citizens Service Center) on arrival',
      'Economy recovering but job market challenging',
      'Consider if limited Muslim infrastructure works for your needs'
    ]
  }
};

// Export individual city data for convenience
export const madridData = southernEuropeCitiesData['madrid'];
export const barcelonaData = southernEuropeCitiesData['barcelona'];
export const romeData = southernEuropeCitiesData['rome'];
export const milanData = southernEuropeCitiesData['milan'];
export const lisbonData = southernEuropeCitiesData['lisbon'];
export const athensData = southernEuropeCitiesData['athens'];
