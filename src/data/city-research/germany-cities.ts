// Germany Cities Muslim Community Data
// Research completed: December 2024
// Cities: Berlin, Munich, Frankfurt, Hamburg, Cologne, Dusseldorf, Stuttgart, Dortmund

import { CityMuslimCommunityData } from '../muslim-community-data';

export const germanyCitiesData: Record<string, CityMuslimCommunityData> = {
  'berlin': {
    citySlug: 'berlin',
    cityName: 'Berlin',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 350000,
      percentage: 9.5,
      yearEstimate: 2024,
      source: 'Euro-Islam.info, Open Society Foundations',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 45, countries: ['Turkey'] },
      { group: 'Arab', percentage: 30, countries: ['Syria', 'Lebanon', 'Palestine', 'Iraq', 'Egypt', 'Morocco'] },
      { group: 'South Asian', percentage: 10, countries: ['Pakistan', 'Bangladesh', 'Afghanistan'] },
      { group: 'Balkan', percentage: 8, countries: ['Bosnia', 'Kosovo', 'Albania'] },
      { group: 'Other', percentage: 7, countries: ['Iran', 'Somalia', 'Various African nations'] }
    ],

    mosques: {
      totalCount: 80,
      majorMosques: [
        {
          name: 'Şehitlik Mosque',
          address: 'Columbiadamm 128, 10965 Berlin-Neukölln',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German', 'Arabic'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          website: 'https://www.sehitlik-camii.de/',
          established: 1983,
          features: ['Cultural center', 'Cemetery', 'Largest mosque in Berlin', 'Beautiful Ottoman architecture', 'Visitor tours available']
        },
        {
          name: 'Omar Ibn Al-Khattab Mosque',
          address: 'Wiener Straße 16, 10999 Berlin-Kreuzberg',
          type: 'islamic-center',
          size: 'large',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          established: 2010,
          features: ['Arabic sermons', 'One of largest Arab mosques in Berlin', 'Educational programs']
        },
        {
          name: 'Ahmadiyya Mosque Berlin (Wilmersdorfer Moschee)',
          address: 'Brienner Straße 7-8, 14195 Berlin-Dahlem',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Ahmadiyya',
          languages: ['German', 'Urdu', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1924,
          features: ['Oldest mosque in Germany', 'Historic landmark', 'Open for visitors']
        },
        {
          name: 'Mevlana Moschee',
          address: 'Skalitzer Straße 77, 10997 Berlin-Kreuzberg',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Run by Islamic Federation Berlin', 'Islamic instruction in schools']
        },
        {
          name: 'Khadija Mosque',
          address: 'Tiniusstraße 5, 13089 Berlin-Heinersdorf',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Ahmadiyya',
          languages: ['German', 'English', 'Urdu'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 2008,
          features: ['Purpose-built mosque', 'Women-focused services', 'Community outreach']
        }
      ],
      jummahInfo: 'Most mosques hold Jummah between 12:30-14:00. Şehitlik Mosque and Kreuzberg mosques draw the largest crowds.',
      eidLocations: ['Tempelhof Field', 'Olympic Stadium (large gatherings)', 'Şehitlik Mosque grounds', 'Kreuzberg community centers'],
      qiblaDirection: 136
    },

    halalFood: {
      restaurantCount: 500,
      topRestaurants: [
        { name: 'Doyum', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Kreuzberg', specialty: 'Lahmacun and kebabs', halalCertified: true, rating: 4.5 },
        { name: 'Azzam', cuisine: 'Lebanese', priceRange: '$', neighborhood: 'Neukölln', specialty: 'Falafel and shawarma', halalCertified: true, rating: 4.6 },
        { name: 'Sahara Imbiss', cuisine: 'Sudanese', priceRange: '$', neighborhood: 'Wedding', specialty: 'Ful and falafel', halalCertified: true, rating: 4.4 },
        { name: 'Imren Grill', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Kreuzberg', specialty: 'Mixed grill platters', halalCertified: true, rating: 4.3 },
        { name: 'Al Andalos', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Neukölln', specialty: 'Syrian specialties', halalCertified: true, rating: 4.5 },
        { name: 'Rüyam Gemüse Kebab', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Wedding', specialty: 'Gemüse Döner', halalCertified: true, rating: 4.4 },
        { name: 'Babel', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Mitte', specialty: 'Mezze platters', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Eurogida (multiple locations)', 'Alanya Supermarkt', 'Baghdad Market', 'Arabesque', 'Turkish supermarkets throughout Kreuzberg/Neukölln'],
      halalNeighborhoods: ['Kreuzberg', 'Neukölln (Sonnenallee)', 'Wedding', 'Moabit', 'Gesundbrunnen'],
      bestCuisines: ['Turkish', 'Lebanese', 'Syrian', 'Palestinian', 'Afghan', 'Pakistani'],
      foodDeliveryApps: ['Lieferando', 'Wolt', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Kreuzberg',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'Kurdish'],
        mosqueCount: 15,
        halalRestaurantCount: 100,
        description: 'Historic Turkish neighborhood, vibrant multicultural area with excellent halal options. One-third of residents are Muslim. Known for creativity and diversity.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Neukölln',
        muslimPopulation: 'high',
        dominantEthnicities: ['Arab', 'Turkish', 'Kurdish'],
        mosqueCount: 12,
        halalRestaurantCount: 80,
        description: 'Home to Sonnenallee ("Arab Street") with extensive Middle Eastern shops, restaurants and services. Over 40% foreign-born residents. Trendy and diverse.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Wedding',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'African'],
        mosqueCount: 10,
        halalRestaurantCount: 50,
        description: 'Working-class neighborhood with large Turkish and African Muslim communities. More affordable than Kreuzberg with authentic halal food.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'excellent'
      },
      {
        name: 'Moabit',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'Central location with diverse community, good mosque access and halal options. Close to main train station.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Ibn Rushd-Goethe Moschee School', grades: '1-6', type: 'full-time', accredited: true },
        { name: 'Islamische Grundschule Berlin', grades: '1-6', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Most mosques offer weekend Quran classes', 'Turkish community centers', 'Arab cultural associations'],
      hifzPrograms: ['Şehitlik Mosque Quran program', 'Various mosque-based hifz circles'],
      universitiesWithMSA: ['Freie Universität Berlin', 'Humboldt University', 'Technical University Berlin']
    },

    travelInfo: {
      airport: {
        airportCode: 'BER',
        hasPrayerRoom: true,
        location: 'Room of Silence - Gallery Level E2, behind Starbucks (landside)',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Limited options in terminal', 'Turkish restaurants near airport']
      },
      recommendedHotels: ['Hotels in Mitte (central)', 'Hotels near Kreuzberg', 'Moabit area hotels'],
      touristMosques: ['Şehitlik Mosque (visitor tours available)', 'Ahmadiyya Mosque Berlin (historic)', 'Omar Ibn Al-Khattab Mosque'],
      muslimTourOperators: ['Berlin Muslim Tours', 'Halal Tourism Germany']
    },

    communityResources: {
      islamicCenters: ['Islamic Federation Berlin', 'House of One (interfaith)', 'Inssan e.V.'],
      advocacyOrgs: ['Zentralrat der Muslime in Deutschland', 'CLAIM (anti-discrimination)', 'Türkische Gemeinde Berlin'],
      charities: ['Islamic Relief Germany', 'Muslimische Jugend Deutschland'],
      socialGroups: ['Muslim youth groups', 'Sisters circles in mosques', 'Professional Muslim networks'],
      converts: ['Neumuslim Berlin', 'German Muslim League programs', 'Convert support at major mosques']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Anti-Muslim incidents increased 60% in 2024. 71% of incidents target hijab-wearing women. Far-right AfD growth correlates with rising hostility.',
      legalProtections: ['General Equal Treatment Act (AGG)', 'Constitution guarantees religious freedom', 'Some restrictions on religious symbols for civil servants']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank AG (Germany\'s first Islamic bank, headquartered in Frankfurt with Berlin branch)', 'INAIA fintech'],
      muslimDoctors: true,
      halalCatering: ['Sultan Catering', 'Various Turkish caterers', 'Lebanese catering services'],
      muslimFuneralServices: ['Türk-Islam Bestattungen', 'Muslimische Bestattung Berlin'],
      muslimCemeteries: ['Şehitlik Cemetery (at mosque)', 'Landschaftsfriedhof Gatow Islamic section', 'Friedhof Columbiadamm']
    },

    prayerTimesInfo: {
      fajrRange: '3:30 AM (summer) - 6:45 AM (winter)',
      ramadanFastingHours: '16-19 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Largest Turkish community outside Turkey - over 250,000 Turks in Berlin',
      'Home to Germany\'s oldest mosque (1924 Ahmadiyya Mosque)',
      'Sonnenallee "Arab Street" is a unique cultural destination',
      'Strong integration of Muslim neighborhoods in city center unlike other European capitals',
      'Vibrant Muslim arts and culture scene'
    ],

    visitorTips: [
      'Visit Şehitlik Mosque for tours - one of Europe\'s most beautiful mosques',
      'Explore Sonnenallee in Neukölln for authentic Arab food and shops',
      'Kreuzberg has the best concentration of halal Turkish restaurants',
      'Download Halal Trip or Zabihah apps to find nearby halal food',
      'BER airport has limited halal options - eat before arriving',
      'Public transport is excellent - buy a day pass for unlimited travel',
      'Many museums are free on Thursdays evenings'
    ],

    expatTips: [
      'Kreuzberg, Neukölln and Wedding are most Muslim-friendly neighborhoods',
      'Apartment hunting is competitive - start search months in advance',
      'KT Bank offers Islamic banking services',
      'German language is essential for integration and employment',
      'Register at local Bürgeramt within 14 days of arrival',
      'Join local mosque community for social connections',
      'Islamic instruction available in some public schools'
    ]
  },

  'munich': {
    citySlug: 'munich',
    cityName: 'Munich',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 120000,
      percentage: 8,
      yearEstimate: 2024,
      source: 'Municipal statistics, Islamic Center Munich',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 40, countries: ['Turkey'] },
      { group: 'Arab', percentage: 25, countries: ['Iraq', 'Syria', 'Egypt', 'Morocco'] },
      { group: 'Bosnian', percentage: 15, countries: ['Bosnia', 'Kosovo'] },
      { group: 'South Asian', percentage: 12, countries: ['Pakistan', 'Afghanistan', 'Bangladesh'] },
      { group: 'Other', percentage: 8, countries: ['Iran', 'Various African nations'] }
    ],

    mosques: {
      totalCount: 40,
      majorMosques: [
        {
          name: 'Islamic Center Munich (Islamisches Zentrum München)',
          address: 'Wallnerstraße 1-5, 80939 München',
          type: 'islamic-center',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'German', 'Turkish', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          website: 'https://islamisches-zentrum-muenchen.de/',
          established: 1973,
          features: ['Historic center', 'Library', 'Educational programs', 'Interfaith dialogue']
        },
        {
          name: 'DITIB Munich Mosque (Sendling)',
          address: 'Schanzenbachstr. 1, 81371 München',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community center', 'Youth programs']
        },
        {
          name: 'Masjid Al-Salam',
          address: 'Schoettlstr. 5, 81369 München',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arabic-speaking community']
        },
        {
          name: 'Masjid Kosova',
          address: 'Implerstr. 2, 81371 München',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Albanian/Kosovar',
          languages: ['Albanian', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Kosovar community center']
        },
        {
          name: 'Al Furkan Masjid',
          address: 'Ludwigsvorstadt area',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['German', 'Arabic', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Central location']
        }
      ],
      jummahInfo: 'Main Jummah prayers between 13:00-13:30. Islamic Center Munich is the most established.',
      eidLocations: ['Olympic Hall', 'Messegelände (convention center)', 'Local mosque grounds'],
      qiblaDirection: 133
    },

    halalFood: {
      restaurantCount: 150,
      topRestaurants: [
        { name: 'Taste-My-Burger', cuisine: 'American Halal', priceRange: '$$', neighborhood: 'Central', specialty: 'Creative halal burgers', halalCertified: true, rating: 4.5 },
        { name: 'HAN Restaurant', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Central', specialty: 'Kebabs and pide', halalCertified: true, rating: 4.4 },
        { name: 'Bab Al Yemen', cuisine: 'Yemeni', priceRange: '$$', neighborhood: 'Central', specialty: 'Traditional Yemeni dishes', halalCertified: true, rating: 4.3 },
        { name: 'Kebab House', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Sendling', specialty: 'Döner and kebabs', halalCertified: true, rating: 4.2 },
        { name: 'Shams Restaurant', cuisine: 'Persian', priceRange: '$$$', neighborhood: 'Schwabing', specialty: 'Persian rice dishes', halalCertified: true, rating: 4.4 }
      ],
      halalGroceryStores: ['Orient Supermarket', 'Turkish markets in Sendling', 'Arab grocery stores', 'Halal butchers'],
      halalNeighborhoods: ['Sendling', 'Ludwigsvorstadt', 'Giesing', 'Milbertshofen'],
      bestCuisines: ['Turkish', 'Lebanese', 'Afghan', 'Pakistani', 'Indian', 'Persian'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Sendling',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'Main Muslim neighborhood with DITIB mosque and numerous halal shops and restaurants.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Ludwigsvorstadt',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab', 'Pakistani'],
        mosqueCount: 4,
        halalRestaurantCount: 20,
        description: 'Near main train station, diverse area with several mosques and halal options.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Milbertshofen',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Bosnian'],
        mosqueCount: 3,
        halalRestaurantCount: 10,
        description: 'Northern district with Islamic Center Munich. Strong Muslim student presence.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamische Grundschule München', grades: '1-4', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Islamic Center Munich weekend school', 'Mosque-based Quran classes', 'Turkish community programs'],
      hifzPrograms: ['Islamic Center Munich Quran program', 'Private hifz circles'],
      universitiesWithMSA: ['Technical University of Munich (TUM)', 'Ludwig Maximilian University (LMU)', 'Munich University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'MUC',
        hasPrayerRoom: true,
        location: 'Multi-faith prayer room in Terminal 2',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited Turkish restaurants in terminals', 'Vegetarian options available']
      },
      recommendedHotels: ['Hotels near Hauptbahnhof', 'Sendling area', 'City center hotels'],
      touristMosques: ['Islamic Center Munich'],
      muslimTourOperators: ['Halal Tourism Munich']
    },

    communityResources: {
      islamicCenters: ['Islamic Center Munich', 'Münchner Forum für Islam', 'Various mosque associations'],
      advocacyOrgs: ['Islamrat München', 'Regional Muslim organizations'],
      charities: ['Islamic Relief local chapter', 'Mosque-based charity programs'],
      socialGroups: ['Munich Muslim Students Association', 'Professional Muslim networks', 'Sisters groups'],
      converts: ['Islamic Center Munich convert support', 'Neumuslim programs']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Bavaria is more conservative. Some anti-Muslim sentiment, particularly in rural areas.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom guaranteed', 'Bavaria has stricter secularism rules']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank AG (branch)'],
      muslimDoctors: true,
      halalCatering: ['Turkish caterers', 'Arab catering services'],
      muslimFuneralServices: ['Muslim funeral services available', 'Islamic Center Munich assistance'],
      muslimCemeteries: ['Westfriedhof Islamic section', 'Nordfriedhof Muslim area']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Historic Islamic Center Munich (est. 1973) - one of Germany\'s oldest Islamic institutions',
      'Strong Muslim student population due to major universities',
      'Featured in official Germany Halal Travel Guide 2024',
      'Bavarian capital with unique blend of traditional German and Muslim cultures',
      'Good base for visiting Alps and nearby attractions'
    ],

    visitorTips: [
      'Islamic Center Munich welcomes visitors for tours',
      'Sendling neighborhood has best concentration of halal food',
      'Munich is very safe and clean - public transport excellent',
      'Visit during Oktoberfest period for cultural experience (though alcohol-focused)',
      'Viktualienmarkt has some halal-friendly food stalls',
      'Bayern Munich stadium tours available - major attraction',
      'Day trips to Neuschwanstein Castle easily accessible'
    ],

    expatTips: [
      'Munich is expensive - budget accordingly for housing',
      'Sendling and surrounding areas best for Muslim families',
      'German language crucial for daily life and work',
      'Bavaria has more conservative dress expectations in some workplaces',
      'Strong job market in tech and automotive industries',
      'Register at KVR (Kreisverwaltungsreferat) upon arrival',
      'Islamic instruction available in some Bavarian schools'
    ]
  },

  'frankfurt': {
    citySlug: 'frankfurt',
    cityName: 'Frankfurt',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 85000,
      percentage: 11,
      yearEstimate: 2024,
      source: 'Central Institute of Islam, municipal estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 35, countries: ['Turkey'] },
      { group: 'Arab', percentage: 30, countries: ['Morocco', 'Syria', 'Iraq', 'Lebanon'] },
      { group: 'South Asian', percentage: 15, countries: ['Pakistan', 'Afghanistan', 'Bangladesh'] },
      { group: 'Bosnian', percentage: 10, countries: ['Bosnia', 'Kosovo'] },
      { group: 'Other', percentage: 10, countries: ['Somalia', 'Iran', 'Various'] }
    ],

    mosques: {
      totalCount: 50,
      majorMosques: [
        {
          name: 'Noor Mosque (Abu Bakr Moschee)',
          address: 'Varrentrappstr. 55, 60486 Frankfurt',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'German', 'Urdu', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          features: ['Largest mosque in Frankfurt', 'Multi-ethnic congregation', 'Educational programs']
        },
        {
          name: 'Abubakr Mosque',
          address: 'Friedberger Anlage 24, 60316 Frankfurt',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arabic community', 'Quran classes']
        },
        {
          name: 'Othman Ibn Affan Mosque',
          address: 'Gallus area, Frankfurt',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['German', 'Arabic', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Diverse congregation']
        },
        {
          name: 'DITIB Frankfurt Merkez Camii',
          address: 'Frankfurt',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community center']
        },
        {
          name: 'Masjid Al-Muhsinin',
          address: 'Bahnhofsviertel area',
          type: 'musalla',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['Arabic', 'German', 'Urdu'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Near main station']
        }
      ],
      jummahInfo: 'Multiple Jummah times at major mosques between 13:00-14:00. Bahnhofsviertel has several smaller prayer spaces.',
      eidLocations: ['Messe Frankfurt', 'Large mosque grounds', 'Community centers'],
      qiblaDirection: 132
    },

    halalFood: {
      restaurantCount: 200,
      topRestaurants: [
        { name: 'Medina Steaks & More', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Central', specialty: 'Halal steaks', halalCertified: true, rating: 4.4 },
        { name: 'Central Grill', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Galluswarte', specialty: 'Mixed grill', halalCertified: true, rating: 4.3 },
        { name: 'Caspian Grill', cuisine: 'Persian', priceRange: '$$', neighborhood: 'Gallus', specialty: 'Kebabs and rice', halalCertified: true, rating: 4.4 },
        { name: 'Doy Doy', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Bahnhofsviertel', specialty: 'Döner and lahmacun', halalCertified: true, rating: 4.2 },
        { name: 'Chicken House', cuisine: 'Fast Food', priceRange: '$', neighborhood: 'Central', specialty: 'Fried chicken', halalCertified: true, rating: 4.1 }
      ],
      halalGroceryStores: ['Bahnhofsviertel Turkish/Arab shops', 'Gallus halal markets', 'Orient supermarkets'],
      halalNeighborhoods: ['Bahnhofsviertel', 'Gallus', 'Gutleutviertel', 'Fechenheim'],
      bestCuisines: ['Turkish', 'Arab', 'Persian', 'Pakistani', 'Afghan'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Bahnhofsviertel',
        muslimPopulation: 'high',
        dominantEthnicities: ['Arab', 'Turkish', 'South Asian'],
        mosqueCount: 8,
        halalRestaurantCount: 40,
        description: 'Central station area shaped by Muslim labor migrants since 1970s. Now a Muslim ethnic economy with shops, restaurants and mosques.',
        safetyRating: 6,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Gallus',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'Moroccan'],
        mosqueCount: 6,
        halalRestaurantCount: 25,
        description: 'Vibrant hub for Muslim community with numerous mosques and halal businesses.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Fechenheim',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 3,
        halalRestaurantCount: 10,
        description: 'Eastern district with established Turkish community.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Islamische Informations und Serviceleistungen school', grades: 'K-6', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools', 'Turkish community programs', 'Arab cultural center classes'],
      hifzPrograms: ['Various mosque-based programs', 'Private Quran schools'],
      universitiesWithMSA: ['Goethe University Frankfurt', 'Frankfurt University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'FRA',
        hasPrayerRoom: true,
        location: 'Terminal 1 B Concourse Level 2 (landside), Terminal 2 D Concourse Level 3 (airside), Terminal 2 E Concourse Level 2',
        is24Hours: true,
        hasWuduFacility: true,
        halalFoodOptions: ['Kebabs Connection (Terminal 1)', 'Döner Time (Terminal 1)', 'Limited certified options']
      },
      recommendedHotels: ['Bahnhofsviertel hotels', 'City center accommodations', 'Near Messe for business'],
      touristMosques: ['Noor Mosque (welcomes visitors)', 'Central mosques'],
      muslimTourOperators: ['Frankfurt halal tours available']
    },

    communityResources: {
      islamicCenters: ['Islamische Informations und Serviceleistungen', 'Central Institute of Islam Archive', 'Various mosque associations'],
      advocacyOrgs: ['Koordinationsrat der Muslime Frankfurt', 'Local DITIB chapter'],
      charities: ['Islamic Relief regional', 'Mosque charity programs'],
      socialGroups: ['Muslim professional networks', 'University Muslim groups', 'Sisters circles'],
      converts: ['Mosque-based convert support', 'German Muslim League Frankfurt']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Frankfurt celebrated Ramadan with city center illuminations in 2024 - showing increasing acceptance.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom', 'Strong anti-discrimination culture in finance sector']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank AG (headquarters)', 'Commerzbank Islamic Finance products', 'Deutsche Bank Islamic services'],
      muslimDoctors: true,
      halalCatering: ['Multiple Turkish and Arab caterers', 'Hotel halal catering services'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Hauptfriedhof Islamic section', 'Regional Muslim cemeteries']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Highest percentage of Muslims of any German city (approximately 11%)',
      'Home to KT Bank AG headquarters - Germany\'s first Islamic bank',
      'Major global financial center with Islamic finance expertise',
      'Frankfurt airport has excellent Muslim prayer facilities',
      'City illuminated for Ramadan in 2024 - first German city to do so'
    ],

    visitorTips: [
      'Frankfurt Airport has the best Muslim facilities of any German airport',
      'Bahnhofsviertel near main station has extensive halal options',
      'Financial district is very cosmopolitan and diverse',
      'Easy hub to travel across Europe via excellent train and air connections',
      'Römerberg old town area is main tourist attraction',
      'Many business hotels offer halal meal options on request',
      'Easy day trips to Heidelberg and Rhine Valley'
    ],

    expatTips: [
      'Strong job market in finance, especially for those with Islamic finance expertise',
      'Gallus and Bahnhofsviertel most convenient for Muslims',
      'KT Bank offers full Islamic banking services',
      'High salaries but also high cost of living',
      'International English-speaking environment in finance sector',
      'German still needed for daily life and bureaucracy',
      'Register at Bürgeramt within 14 days'
    ]
  },

  'hamburg': {
    citySlug: 'hamburg',
    cityName: 'Hamburg',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 150000,
      percentage: 8,
      yearEstimate: 2024,
      source: 'Hamburg statistics, community estimates',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 40, countries: ['Turkey'] },
      { group: 'Afghan', percentage: 20, countries: ['Afghanistan'] },
      { group: 'Arab', percentage: 20, countries: ['Syria', 'Iraq', 'Morocco', 'Egypt'] },
      { group: 'Iranian', percentage: 10, countries: ['Iran'] },
      { group: 'Other', percentage: 10, countries: ['Pakistan', 'Bangladesh', 'Various African nations'] }
    ],

    mosques: {
      totalCount: 50,
      majorMosques: [
        {
          name: 'Centrum Mosque Hamburg (Al-Nour Moschee)',
          address: 'Böckmannstraße 40, 20099 Hamburg',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['German', 'Arabic', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          established: 1990,
          features: ['Large central mosque', 'Educational programs', 'Community events']
        },
        {
          name: 'Fazle Omar Mosque',
          address: 'Wieckstraße 24, 22527 Hamburg',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Ahmadiyya',
          languages: ['German', 'Urdu', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          established: 1957,
          features: ['Second purpose-built mosque in Germany', 'Historic landmark', 'Open for visitors']
        },
        {
          name: 'DITIB Hamburg Merkez Camii',
          address: 'Hamburg',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community center']
        },
        {
          name: 'Masjid At-Taqwa',
          address: 'St. Georg area, Hamburg',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arab community']
        }
      ],
      jummahInfo: 'Multiple Jummah prayers available between 13:00-14:00. Note: Islamic Centre Hamburg (Blue Mosque) was closed by authorities in July 2024.',
      eidLocations: ['Large community centers', 'Sports halls', 'Mosque grounds'],
      qiblaDirection: 131
    },

    halalFood: {
      restaurantCount: 150,
      topRestaurants: [
        { name: 'Pamukkale Grill', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'St. Georg', specialty: 'Mixed grill', halalCertified: true, rating: 4.4 },
        { name: 'Mazza Restaurant', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Central', specialty: 'Mezze and grills', halalCertified: true, rating: 4.3 },
        { name: 'Chicken Spot', cuisine: 'Fast Food', priceRange: '$', neighborhood: 'Various', specialty: 'Halal fried chicken', halalCertified: true, rating: 4.2 },
        { name: 'Akdeniz Tantuni', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Altona', specialty: 'Tantuni wraps', halalCertified: true, rating: 4.3 },
        { name: 'Öz Urfa', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'St. Pauli', specialty: 'Urfa kebab', halalCertified: true, rating: 4.4 },
        { name: 'Al Baqara', cuisine: 'Arab', priceRange: '$', neighborhood: 'Central', specialty: 'Shawarma', halalCertified: true, rating: 4.2 }
      ],
      halalGroceryStores: ['Turkish supermarkets in St. Georg', 'Arab grocery stores', 'Halal butchers in Altona'],
      halalNeighborhoods: ['St. Georg', 'St. Pauli', 'Altona', 'Harburg', 'Billstedt'],
      bestCuisines: ['Turkish', 'Lebanese', 'Afghan', 'Pakistani', 'Persian'],
      foodDeliveryApps: ['Lieferando', 'Wolt', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'St. Georg',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'Afghan'],
        mosqueCount: 5,
        halalRestaurantCount: 30,
        description: 'Near main train station, diverse neighborhood with many halal restaurants and mosques. Known for multiculturalism.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Altona',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 4,
        halalRestaurantCount: 20,
        description: 'Western district with diverse community, good halal options and family-friendly atmosphere.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Harburg',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Afghan', 'Arab'],
        mosqueCount: 6,
        halalRestaurantCount: 15,
        description: 'Southern district with established Muslim community, more affordable housing.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Al-Nour Grundschule', grades: '1-4', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['Mosque weekend schools', 'Turkish community programs', 'Afghan cultural centers'],
      hifzPrograms: ['Mosque-based Quran programs'],
      universitiesWithMSA: ['University of Hamburg', 'Hamburg University of Technology', 'Hamburg University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'HAM',
        hasPrayerRoom: true,
        location: 'Multi-faith prayer room in terminal',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited options', 'Some Turkish restaurants']
      },
      recommendedHotels: ['Hotels near Hauptbahnhof', 'St. Georg area', 'City center'],
      touristMosques: ['Fazle Omar Mosque (historic)', 'Centrum Mosque Hamburg'],
      muslimTourOperators: ['Hamburg halal tours']
    },

    communityResources: {
      islamicCenters: ['Centrum Mosque Hamburg', 'Various cultural associations'],
      advocacyOrgs: ['Schura Hamburg (Council of Islamic Communities)', 'DITIB Hamburg'],
      charities: ['Islamic Relief', 'Mosque charity programs'],
      socialGroups: ['Muslim youth groups', 'Professional networks', 'Sisters groups'],
      converts: ['Mosque convert programs', 'German Muslim League']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Islamic Centre Hamburg (IZH) closed by authorities in July 2024 due to alleged Iranian government ties. Other mosques continue normal operations.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom guaranteed', 'Strong civil society']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank AG services available'],
      muslimDoctors: true,
      halalCatering: ['Turkish caterers', 'Arab catering'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Öjendorfer Friedhof Islamic section', 'Other cemetery Muslim areas']
    },

    prayerTimesInfo: {
      fajrRange: '3:30 AM (summer) - 6:45 AM (winter)',
      ramadanFastingHours: '16-19 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Historic port city with long history of welcoming diverse communities',
      'Fazle Omar Mosque (1957) is second purpose-built mosque in Germany',
      'Strong Afghan community - largest in Germany',
      'Maritim hotels offer halal meal options on request',
      'Gateway to Scandinavia with good connections'
    ],

    visitorTips: [
      'St. Georg near Hauptbahnhof has best concentration of halal food',
      'Miniatur Wunderland and Speicherstadt are must-see attractions',
      'Harbor tours are Hamburg\'s main tourist draw',
      'Reeperbahn area has limited halal options - stick to St. Georg',
      'Easy day trips to Lübeck (historic town)',
      'Public transport excellent - get Hamburg Card for discounts',
      'Fish markets have seafood options (naturally halal)'
    ],

    expatTips: [
      'St. Georg or Altona best for Muslim families',
      'Hamburg has Germany\'s highest average salaries after Munich',
      'Strong job market in logistics, aerospace and media',
      'Weather is rainy - prepare for maritime climate',
      'Good international schools available',
      'Register within 14 days at local Kundenzentrum',
      'Schura Hamburg represents Muslim community interests'
    ]
  },

  'cologne': {
    citySlug: 'cologne',
    cityName: 'Cologne',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 120000,
      percentage: 11,
      yearEstimate: 2024,
      source: 'Municipal statistics, DITIB records',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 55, countries: ['Turkey'] },
      { group: 'Arab', percentage: 20, countries: ['Morocco', 'Syria', 'Iraq'] },
      { group: 'Bosnian', percentage: 10, countries: ['Bosnia', 'Kosovo'] },
      { group: 'South Asian', percentage: 8, countries: ['Pakistan', 'Afghanistan'] },
      { group: 'Other', percentage: 7, countries: ['Iran', 'Various African nations'] }
    ],

    mosques: {
      totalCount: 35,
      majorMosques: [
        {
          name: 'Cologne Central Mosque (DITIB-Zentralmoschee)',
          address: 'Venloer Str. 160, 50823 Köln-Ehrenfeld',
          type: 'masjid',
          size: 'mega',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German', 'Arabic'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30', '14:00'],
          website: 'https://www.ditib.de/',
          established: 2017,
          features: ['Largest mosque in Germany', 'Can hold 4,000 worshippers', 'Neo-Ottoman architecture', 'Two 55m minarets', 'Cultural center', 'Visitor tours', 'Adhan broadcast on Fridays']
        },
        {
          name: 'Fatih Mosque',
          address: 'Cologne',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Established Turkish community']
        },
        {
          name: 'Al-Rahman Mosque',
          address: 'Cologne',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arab community']
        },
        {
          name: 'Bosnian Islamic Center',
          address: 'Cologne',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Bosnian',
          languages: ['Bosnian', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Bosnian community']
        }
      ],
      jummahInfo: 'All 35 mosques in Cologne permitted to broadcast adhan for up to 5 minutes on Fridays (12-3pm) under 2-year initiative. Central Mosque draws thousands.',
      eidLocations: ['Cologne Central Mosque', 'Lanxess Arena (large gatherings)', 'Community centers'],
      qiblaDirection: 130
    },

    halalFood: {
      restaurantCount: 180,
      topRestaurants: [
        { name: 'Mangal Restaurant', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Ehrenfeld', specialty: 'Grilled meats', halalCertified: true, rating: 4.5 },
        { name: 'Beirut Restaurant', cuisine: 'Lebanese', priceRange: '$$', neighborhood: 'Neustadt', specialty: 'Lebanese mezze', halalCertified: true, rating: 4.4 },
        { name: 'Kösk Döner', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Various', specialty: 'Döner kebab', halalCertified: true, rating: 4.3 },
        { name: 'Damascus Restaurant', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Mülheim', specialty: 'Syrian dishes', halalCertified: true, rating: 4.4 },
        { name: 'Kapadokya', cuisine: 'Turkish', priceRange: '$$', neighborhood: 'Ehrenfeld', specialty: 'Anatolian cuisine', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Ehrenfeld Turkish supermarkets', 'Mülheim halal shops', 'Arab grocery stores'],
      halalNeighborhoods: ['Ehrenfeld', 'Mülheim', 'Kalk', 'Chorweiler', 'Porz'],
      bestCuisines: ['Turkish', 'Lebanese', 'Syrian', 'Moroccan', 'Pakistani'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Ehrenfeld',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 8,
        halalRestaurantCount: 40,
        description: 'Home to Cologne Central Mosque. Multiethnic neighborhood with industrial past, thriving culture scene, street art, and excellent halal options.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Mülheim',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'Moroccan'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'Right bank district with large Muslim community, affordable and family-friendly.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Kalk',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 4,
        halalRestaurantCount: 15,
        description: 'Working-class area with established Muslim community.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [
        { name: 'Various Islamic primary schools', grades: '1-4', type: 'full-time', accredited: true }
      ],
      weekendPrograms: ['DITIB weekend schools', 'Mosque Quran classes', 'Turkish cultural programs'],
      hifzPrograms: ['Central Mosque programs', 'Various mosque hifz circles'],
      universitiesWithMSA: ['University of Cologne', 'Cologne University of Applied Sciences', 'German Sport University Cologne']
    },

    travelInfo: {
      airport: {
        airportCode: 'CGN',
        hasPrayerRoom: true,
        location: 'Multi-faith prayer room in Terminal 2',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Limited Turkish options', 'Some vegetarian choices']
      },
      recommendedHotels: ['City center hotels', 'Near Dom/Hauptbahnhof', 'Ehrenfeld for Muslim neighborhood feel'],
      touristMosques: ['Cologne Central Mosque (visitor tours daily)', 'DITIB headquarters'],
      muslimTourOperators: ['Cologne Muslim heritage tours']
    },

    communityResources: {
      islamicCenters: ['DITIB Headquarters (Cologne is national base)', 'Zentralrat der Muslime'],
      advocacyOrgs: ['DITIB', 'Koordinationsrat der Muslime (KRM)', 'Zentralrat der Muslime in Deutschland'],
      charities: ['Islamic Relief Germany', 'DITIB charity programs'],
      socialGroups: ['Muslim youth groups', 'Professional networks', 'Sisters circles'],
      converts: ['DITIB convert programs', 'Zentralrat support']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Cologne known for both tolerance (adhan permission) and controversy (New Year 2015-16 incidents). Generally welcoming.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom', 'NRW relatively progressive on Muslim integration']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank services available'],
      muslimDoctors: true,
      halalCatering: ['DITIB catering', 'Turkish caterers', 'Arab catering services'],
      muslimFuneralServices: ['DITIB funeral services', 'Muslim funeral providers'],
      muslimCemeteries: ['Westfriedhof Islamic section', 'Melaten Cemetery Muslim area']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'DITIB calculation'
    },

    uniqueFeatures: [
      'Home to largest mosque in Germany - Cologne Central Mosque',
      'DITIB (Turkish-Islamic Union) headquarters - manages 900+ mosques in Germany',
      'First German city to allow all 35 mosques to broadcast Friday adhan',
      'Central Mosque welcomed 7,000+ visitors during 2024 open day',
      'Strong Turkish community - descendants of 1960s guest workers',
      'Carnival city with famous Kölsch culture alongside Muslim traditions'
    ],

    visitorTips: [
      'Visit Cologne Central Mosque - one of Europe\'s largest and most beautiful',
      'Free guided tours of Central Mosque available daily',
      'Cologne Cathedral (Dom) is main tourist attraction - 10 min walk from mosque',
      'Ehrenfeld has best halal food options',
      'Carnival season (February) is major event - be prepared for festivities',
      'Kölsch beer culture is strong - halal restaurants clearly marked',
      'Easy day trips to Bonn and Düsseldorf'
    ],

    expatTips: [
      'Ehrenfeld or Mülheim best for Muslim families',
      'Strong job market in media, insurance and logistics',
      'German language essential despite large Turkish community',
      'DITIB offers extensive community services and support',
      'Register at Kundenzentrum within 14 days',
      'Islamic instruction available in NRW public schools',
      'North Rhine-Westphalia has most progressive Muslim integration policies'
    ]
  },

  'dusseldorf': {
    citySlug: 'dusseldorf',
    cityName: 'Düsseldorf',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 60000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Municipal statistics, community estimates',
      trend: 'growing'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 45, countries: ['Turkey'] },
      { group: 'Arab', percentage: 25, countries: ['Morocco', 'Syria', 'Lebanon', 'Iraq'] },
      { group: 'South Asian', percentage: 15, countries: ['Pakistan', 'Afghanistan', 'Bangladesh'] },
      { group: 'Bosnian', percentage: 8, countries: ['Bosnia', 'Kosovo'] },
      { group: 'Other', percentage: 7, countries: ['Iran', 'Somalia'] }
    ],

    mosques: {
      totalCount: 25,
      majorMosques: [
        {
          name: 'DITIB Düsseldorf Merkez Camii',
          address: 'Düsseldorf',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          features: ['Main Turkish mosque', 'Community center']
        },
        {
          name: 'Arab Mosque Düsseldorf',
          address: 'Düsseldorf',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arab community']
        },
        {
          name: 'Pakistani Islamic Center',
          address: 'Düsseldorf',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Pakistani',
          languages: ['Urdu', 'German', 'English'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['South Asian community']
        }
      ],
      jummahInfo: 'Multiple mosques offer Jummah between 13:00-14:00.',
      eidLocations: ['Messe Düsseldorf', 'Large community halls', 'Mosque grounds'],
      qiblaDirection: 130
    },

    halalFood: {
      restaurantCount: 100,
      topRestaurants: [
        { name: 'KHAN JI Restaurant', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Altstadt', specialty: 'Biryani and curries', halalCertified: true, rating: 4.4 },
        { name: 'Kabul Haus', cuisine: 'Afghan', priceRange: '$$', neighborhood: 'Central', specialty: 'Afghan kabuli', halalCertified: true, rating: 4.3 },
        { name: 'BEEF\'D Halal Burgers', cuisine: 'American', priceRange: '$$', neighborhood: 'Central', specialty: 'Halal burgers', halalCertified: true, rating: 4.4 },
        { name: 'ArabesQ', cuisine: 'Middle Eastern', priceRange: '$$', neighborhood: 'Ludenberg', specialty: 'Mezze and vegan options', halalCertified: true, rating: 4.5 },
        { name: 'Mevlana', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Central', specialty: 'Döner and kebabs', halalCertified: true, rating: 4.2 },
        { name: 'Zam Zam', cuisine: 'Arab', priceRange: '$', neighborhood: 'Altstadt', specialty: 'Shawarma', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Turkish supermarkets', 'Arab grocery shops', 'Pakistani stores'],
      halalNeighborhoods: ['Oberbilk', 'Flingern', 'Eller', 'Bilk'],
      bestCuisines: ['Turkish', 'Pakistani', 'Afghan', 'Lebanese', 'Syrian'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats', 'Wolt']
    },

    muslimNeighborhoods: [
      {
        name: 'Oberbilk',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'Moroccan'],
        mosqueCount: 5,
        halalRestaurantCount: 25,
        description: 'Near main station, diverse neighborhood with strong Turkish and Arab communities.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'excellent'
      },
      {
        name: 'Flingern',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 3,
        halalRestaurantCount: 15,
        description: 'Trendy area with mix of cultures, good halal options.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Bilk',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'South Asian'],
        mosqueCount: 2,
        halalRestaurantCount: 10,
        description: 'Near university, student-friendly with diverse community.',
        safetyRating: 8,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Mosque weekend schools', 'Turkish cultural programs', 'Arab community classes'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['Heinrich Heine University', 'Düsseldorf University of Applied Sciences']
    },

    travelInfo: {
      airport: {
        airportCode: 'DUS',
        hasPrayerRoom: true,
        location: 'Prayer rooms available for both men and women',
        is24Hours: false,
        hasWuduFacility: true,
        halalFoodOptions: ['Several food courts with halal-friendly options', 'Turkish restaurants']
      },
      recommendedHotels: ['City center hotels', 'Near Altstadt', 'Oberbilk for Muslim area'],
      touristMosques: ['DITIB Mosque'],
      muslimTourOperators: ['Düsseldorf halal tours']
    },

    communityResources: {
      islamicCenters: ['DITIB Düsseldorf', 'Various community centers'],
      advocacyOrgs: ['Islamrat Düsseldorf', 'Local Muslim council'],
      charities: ['Islamic Relief', 'Mosque charities'],
      socialGroups: ['Muslim professional networks', 'Youth groups', 'Sisters circles'],
      converts: ['Mosque convert support programs']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Generally tolerant city. Known for welcoming attitude to tourists including Gulf visitors.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom', 'NRW progressive policies']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank services available'],
      muslimDoctors: true,
      halalCatering: ['Turkish caterers', 'Arab catering'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Nordfriedhof Islamic section']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Featured in official Germany Halal Travel Guide 2024',
      'Favorite destination for Gulf tourists - Arabic-speaking staff common',
      'Major luxury shopping destination - Königsallee (Kö)',
      'Japanese Quarter - Little Tokyo with largest Japanese community in Europe',
      'Fashion and media capital of Germany'
    ],

    visitorTips: [
      'Düsseldorf Airport is very halal-friendly with prayer rooms and food options',
      'Altstadt (Old Town) has many halal shawarma shops',
      'Königsallee for luxury shopping - many Gulf tourists',
      'Germany Halal Travel Guide AI chatbot can help find mosques/restaurants',
      'Rhine promenade is beautiful for walking',
      'Easy day trips to Cologne (20 min by train)',
      'MedienHafen (Media Harbor) has modern architecture'
    ],

    expatTips: [
      'Strong job market in advertising, fashion and telecommunications',
      'Oberbilk or Flingern best for Muslim families',
      'Good international business environment',
      'German still necessary for daily life',
      'Register at Bürgerbüro within 14 days',
      'Public transport excellent - invest in monthly pass',
      'Japanese community adds to international atmosphere'
    ]
  },

  'stuttgart': {
    citySlug: 'stuttgart',
    cityName: 'Stuttgart',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 50000,
      percentage: 8,
      yearEstimate: 2024,
      source: 'Municipal statistics, academic studies',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 50, countries: ['Turkey'] },
      { group: 'Bosnian', percentage: 20, countries: ['Bosnia', 'Kosovo'] },
      { group: 'Arab', percentage: 15, countries: ['Syria', 'Iraq', 'Morocco'] },
      { group: 'South Asian', percentage: 10, countries: ['Pakistan', 'Afghanistan'] },
      { group: 'Other', percentage: 5, countries: ['Iran', 'Various'] }
    ],

    mosques: {
      totalCount: 25,
      majorMosques: [
        {
          name: 'Aziz Mosque (Bosnian)',
          address: 'Stuttgart',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Bosnian',
          languages: ['Bosnian', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Well-known Islamic instruction program in German', 'Large Bosnian community']
        },
        {
          name: 'DITIB Stuttgart Merkez Camii',
          address: 'Stuttgart',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          features: ['Main Turkish mosque', 'Community center']
        },
        {
          name: 'Masjid Umer Bin Alkhattab',
          address: 'Stuttgart',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Arab',
          languages: ['Arabic', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:15'],
          features: ['Arab community']
        },
        {
          name: 'Masjid Al-Ummatul Wahida',
          address: 'Stuttgart',
          type: 'masjid',
          size: 'medium',
          ethnicFocus: 'Multi-ethnic',
          languages: ['German', 'Arabic', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Diverse congregation']
        },
        {
          name: 'Qendra Islame Shqiptare (Albanian)',
          address: 'Stuttgart',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Albanian',
          languages: ['Albanian', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Albanian community center']
        }
      ],
      jummahInfo: 'About 25 mosques across Stuttgart. Many organized along ethnic and denominational lines.',
      eidLocations: ['Large community halls', 'Mosque grounds', 'Rented venues'],
      qiblaDirection: 131
    },

    halalFood: {
      restaurantCount: 80,
      topRestaurants: [
        { name: 'Sarajevo Grill', cuisine: 'Bosnian', priceRange: '$$', neighborhood: 'Central', specialty: 'Ćevapi and pita', halalCertified: true, rating: 4.4 },
        { name: 'Istanbul Kebab', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Bad Cannstatt', specialty: 'Döner and grills', halalCertified: true, rating: 4.2 },
        { name: 'Damascus Restaurant', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Central', specialty: 'Syrian cuisine', halalCertified: true, rating: 4.3 },
        { name: 'Karachi House', cuisine: 'Pakistani', priceRange: '$$', neighborhood: 'Various', specialty: 'Biryani', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Turkish supermarkets', 'Bosnian shops', 'Arab groceries in Bad Cannstatt'],
      halalNeighborhoods: ['Bad Cannstatt', 'Feuerbach', 'Zuffenhausen', 'Stuttgart-Mitte'],
      bestCuisines: ['Turkish', 'Bosnian', 'Arab', 'Pakistani', 'Afghan'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Bad Cannstatt',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Bosnian', 'Arab'],
        mosqueCount: 6,
        halalRestaurantCount: 20,
        description: 'Largest borough of Stuttgart with established Muslim communities and multiple mosques.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      },
      {
        name: 'Feuerbach',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 3,
        halalRestaurantCount: 10,
        description: 'Northern district with working-class character and Muslim community.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Zuffenhausen',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Bosnian'],
        mosqueCount: 2,
        halalRestaurantCount: 8,
        description: 'Home to Porsche headquarters, diverse working population.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Aziz Mosque German-language Islamic instruction (highly regarded)', 'DITIB weekend schools', 'Various mosque programs'],
      hifzPrograms: ['Mosque-based programs'],
      universitiesWithMSA: ['University of Stuttgart', 'University of Hohenheim']
    },

    travelInfo: {
      airport: {
        airportCode: 'STR',
        hasPrayerRoom: true,
        location: 'Multi-faith room available',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Limited options', 'Some Turkish restaurants']
      },
      recommendedHotels: ['City center hotels', 'Bad Cannstatt for Muslim area'],
      touristMosques: ['Aziz Mosque (welcoming)', 'DITIB Stuttgart'],
      muslimTourOperators: ['Stuttgart tours available']
    },

    communityResources: {
      islamicCenters: ['Islamberatung Stuttgart (Islamic Affairs Consultant - first in Germany)', 'Various mosque associations'],
      advocacyOrgs: ['Robert Bosch Stiftung Islamic Affairs project', 'Local Muslim councils'],
      charities: ['Mosque-based charities', 'Islamic Relief regional'],
      socialGroups: ['Muslim professional networks', 'Youth groups', 'Sisters circles'],
      converts: ['Mosque convert programs', 'Islamberatung support']
    },

    safetyInfo: {
      overallSafety: 8,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Stuttgart has pioneering Islamberatung project (since 2015) - first Islamic Affairs Consultant in Germany.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom', 'Baden-Württemberg integration initiatives']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank services via Frankfurt'],
      muslimDoctors: true,
      halalCatering: ['Turkish and Bosnian caterers'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Waldfriedhof Islamic section', 'Other cemetery Muslim areas']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Home to Germany\'s first Islamic Affairs Consultant (Islamberatung) since 2015',
      'Strong Bosnian Muslim community with well-regarded Islamic education programs',
      'Automotive capital - Mercedes-Benz and Porsche headquarters',
      'Aziz Mosque known for excellent German-language Islamic instruction',
      'Robert Bosch Stiftung supports Muslim integration projects'
    ],

    visitorTips: [
      'Mercedes-Benz Museum and Porsche Museum are main attractions',
      'Bad Cannstatt has best halal food concentration',
      'Stuttgart Beer Festival (Cannstatter Volksfest) is second largest in Germany',
      'Wilhelma Zoo is one of Europe\'s best',
      'Black Forest easily accessible for day trips',
      'Public transport is efficient but hilly city - lots of stairs',
      'Schlossplatz is central meeting point'
    ],

    expatTips: [
      'Strong job market in automotive and engineering',
      'Bad Cannstatt or Feuerbach best for Muslim families',
      'High salaries but also high cost of living',
      'German language essential',
      'Islamberatung office can help with integration questions',
      'Register at Bürgerbüro within 14 days',
      'International schools available for expat children'
    ]
  },

  'dortmund': {
    citySlug: 'dortmund',
    cityName: 'Dortmund',
    country: 'Germany',
    lastUpdated: '2024-12-09',

    muslimPopulation: {
      estimate: 55000,
      percentage: 9,
      yearEstimate: 2024,
      source: 'Municipal statistics, community estimates',
      trend: 'stable'
    },

    ethnicBreakdown: [
      { group: 'Turkish', percentage: 50, countries: ['Turkey'] },
      { group: 'Arab', percentage: 20, countries: ['Syria', 'Iraq', 'Morocco'] },
      { group: 'Bosnian', percentage: 15, countries: ['Bosnia', 'Kosovo'] },
      { group: 'South Asian', percentage: 10, countries: ['Pakistan', 'Afghanistan'] },
      { group: 'Other', percentage: 5, countries: ['Various African nations'] }
    ],

    mosques: {
      totalCount: 30,
      majorMosques: [
        {
          name: 'Al Rahma Mosque',
          address: 'Nordstadt, Dortmund',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Multi-ethnic',
          languages: ['German', 'Arabic', 'Turkish'],
          hasWomensSection: true,
          jummahTimes: ['13:00', '13:30'],
          features: ['Family-oriented', 'Integration focus', 'German-language activities', 'Open to visitors', 'Children welcome', 'Wudu facilities']
        },
        {
          name: 'DITIB Dortmund Merkez Camii',
          address: 'Dortmund',
          type: 'masjid',
          size: 'large',
          ethnicFocus: 'Turkish',
          languages: ['Turkish', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Turkish community center']
        },
        {
          name: 'Bosnian Islamic Center',
          address: 'Dortmund',
          type: 'islamic-center',
          size: 'medium',
          ethnicFocus: 'Bosnian',
          languages: ['Bosnian', 'German'],
          hasWomensSection: true,
          jummahTimes: ['13:00'],
          features: ['Bosnian community']
        }
      ],
      jummahInfo: 'Over 30 mosques throughout Dortmund. Nordstadt has highest concentration.',
      eidLocations: ['Westfalenhallen', 'Large mosque grounds', 'Community centers'],
      qiblaDirection: 129
    },

    halalFood: {
      restaurantCount: 80,
      topRestaurants: [
        { name: 'Curry Masala', cuisine: 'Indian', priceRange: '$$', neighborhood: 'Central', specialty: 'Family-friendly Indian cuisine', halalCertified: true, rating: 4.4 },
        { name: 'Damaskino', cuisine: 'Syrian', priceRange: '$$', neighborhood: 'Central', specialty: 'Syrian dishes, vegan options, fireplace seating', halalCertified: true, rating: 4.5 },
        { name: 'MrChicken', cuisine: 'Fast Food', priceRange: '$', neighborhood: 'Various', specialty: 'Halal fried chicken', halalCertified: true, rating: 4.2 },
        { name: 'Burger Colony', cuisine: 'American', priceRange: '$$', neighborhood: 'Central', specialty: 'Halal burgers', halalCertified: true, rating: 4.3 },
        { name: 'Zam Zam', cuisine: 'Arab', priceRange: '$', neighborhood: 'Nordstadt', specialty: 'Shawarma and falafel', halalCertified: true, rating: 4.2 },
        { name: 'Mevlana', cuisine: 'Turkish', priceRange: '$', neighborhood: 'Nordstadt', specialty: 'Traditional Turkish', halalCertified: true, rating: 4.3 }
      ],
      halalGroceryStores: ['Turkish supermarkets in Nordstadt', 'Arab grocery stores', 'Halal butchers'],
      halalNeighborhoods: ['Nordstadt', 'Hörde', 'Scharnhorst', 'Innenstadt-West'],
      bestCuisines: ['Turkish', 'Arab', 'Indian', 'Pakistani', 'Afghan', 'Bosnian'],
      foodDeliveryApps: ['Lieferando', 'Uber Eats']
    },

    muslimNeighborhoods: [
      {
        name: 'Nordstadt',
        muslimPopulation: 'high',
        dominantEthnicities: ['Turkish', 'Arab', 'African'],
        mosqueCount: 12,
        halalRestaurantCount: 35,
        description: 'Most densely populated residential area in North Rhine-Westphalia. Historic 19th-century working-class area, now melting pot of cultures. Large halal shops and active mosques.',
        safetyRating: 6,
        affordability: 'affordable',
        publicTransport: 'excellent'
      },
      {
        name: 'Hörde',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Bosnian'],
        mosqueCount: 3,
        halalRestaurantCount: 10,
        description: 'Southern district with established Muslim community.',
        safetyRating: 7,
        affordability: 'affordable',
        publicTransport: 'good'
      },
      {
        name: 'Innenstadt-West',
        muslimPopulation: 'medium',
        dominantEthnicities: ['Turkish', 'Arab'],
        mosqueCount: 4,
        halalRestaurantCount: 15,
        description: 'Central area with diverse population and good halal options.',
        safetyRating: 7,
        affordability: 'moderate',
        publicTransport: 'excellent'
      }
    ],

    islamicEducation: {
      fullTimeSchools: [],
      weekendPrograms: ['Mosque weekend schools', 'Turkish cultural programs', 'Arab community classes'],
      hifzPrograms: ['Mosque-based Quran programs'],
      universitiesWithMSA: ['Technical University of Dortmund', 'FH Dortmund']
    },

    travelInfo: {
      airport: {
        airportCode: 'DTM',
        hasPrayerRoom: false,
        location: 'No dedicated prayer room - small airport',
        is24Hours: false,
        hasWuduFacility: false,
        halalFoodOptions: ['Very limited options']
      },
      recommendedHotels: ['City center hotels', 'Near Hauptbahnhof'],
      touristMosques: ['Al Rahma Mosque (welcoming)'],
      muslimTourOperators: ['Regional Ruhr tours']
    },

    communityResources: {
      islamicCenters: ['Al Rahma Mosque and community center', 'Various cultural associations'],
      advocacyOrgs: ['Local Muslim councils', 'DITIB chapter'],
      charities: ['Mosque-based charities'],
      socialGroups: ['Muslim youth groups', 'Football supporters groups', 'Sisters circles'],
      converts: ['Al Rahma Mosque convert support', 'German Muslim programs']
    },

    safetyInfo: {
      overallSafety: 7,
      hijabAcceptance: 7,
      niqabAcceptance: 4,
      beardAcceptance: 8,
      islamophobiaLevel: 'moderate',
      recentIncidents: 'Dortmund has diverse population with generally tolerant atmosphere. Some tension in far-right activity areas.',
      legalProtections: ['General Equal Treatment Act', 'Religious freedom', 'NRW integration programs']
    },

    islamicServices: {
      hasIslamicBanking: true,
      islamicBanks: ['KT Bank services via Cologne/Frankfurt'],
      muslimDoctors: true,
      halalCatering: ['Turkish and Arab caterers'],
      muslimFuneralServices: ['Muslim funeral services available'],
      muslimCemeteries: ['Main cemetery Islamic sections']
    },

    prayerTimesInfo: {
      fajrRange: '3:45 AM (summer) - 6:30 AM (winter)',
      ramadanFastingHours: '15-18 hours',
      calculationMethod: 'MWL (Muslim World League)'
    },

    uniqueFeatures: [
      'Nordstadt is most densely populated residential area in NRW - vibrant multicultural zone',
      'Strong football culture - Borussia Dortmund has many Muslim players and fans',
      'Industrial Ruhr heritage with working-class Muslim community since 1960s',
      'Part of Ruhr metropolitan area - easy access to multiple cities',
      'Al Rahma Mosque known for integration focus and German-language activities'
    ],

    visitorTips: [
      'Signal Iduna Park (BVB Stadium) tour is must for football fans',
      'Nordstadt has most authentic halal food in the Ruhr area',
      'Dortmund U-Tower is landmark cultural center',
      'Westfalenpark is beautiful green space',
      'Easy day trips to Cologne, Düsseldorf, Essen via fast trains',
      'German Football Museum located in Dortmund',
      'Christmas market is one of Germany\'s largest'
    ],

    expatTips: [
      'Nordstadt is affordable but can be rough - visit before deciding',
      'Strong job market in logistics and technology',
      'Part of Ruhr area - can live in neighboring cities and commute',
      'German language essential for daily life',
      'Register at Bürgerbüro within 14 days',
      'BVB games are great cultural experience',
      'Good value compared to Munich or Frankfurt'
    ]
  }
};

// Export individual city data for convenience
export const berlinData = germanyCitiesData['berlin'];
export const munichData = germanyCitiesData['munich'];
export const frankfurtData = germanyCitiesData['frankfurt'];
export const hamburgData = germanyCitiesData['hamburg'];
export const cologneData = germanyCitiesData['cologne'];
export const dusseldorfData = germanyCitiesData['dusseldorf'];
export const stuttgartData = germanyCitiesData['stuttgart'];
export const dortmundData = germanyCitiesData['dortmund'];
