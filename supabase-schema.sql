-- Create Cities table
CREATE TABLE IF NOT EXISTS "City" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "primaryImage" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "halalScore" INTEGER NOT NULL,
    "muslimPopulationPercent" INTEGER NOT NULL,
    "foodScore" INTEGER NOT NULL,
    "communityScore" INTEGER NOT NULL,
    "costScore" INTEGER NOT NULL,
    "internetScore" INTEGER NOT NULL,
    "safetyScore" INTEGER NOT NULL,
    "overallScore" INTEGER NOT NULL,
    "muslimPopulation" INTEGER NOT NULL,
    "mosquesCount" INTEGER NOT NULL,
    "halalRestaurants" INTEGER NOT NULL,
    "monthlyBudget" INTEGER NOT NULL,
    "internetSpeed" INTEGER NOT NULL,
    "airportPrayerRoom" BOOLEAN NOT NULL,
    "halalHotels" INTEGER NOT NULL,
    "islamicBanks" BOOLEAN NOT NULL,
    "islamicSchools" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- Create unique index on slug
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- Create Restaurant table
CREATE TABLE IF NOT EXISTS "Restaurant" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "cuisine" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "priceLevel" INTEGER NOT NULL,
    "certifications" TEXT[],
    "features" TEXT[],
    "images" TEXT[],
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- Create index on cityId for Restaurant
CREATE INDEX "Restaurant_cityId_idx" ON "Restaurant"("cityId");

-- Create Mosque table
CREATE TABLE IF NOT EXISTS "Mosque" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,
    "womensSection" BOOLEAN NOT NULL,
    "parking" BOOLEAN NOT NULL,
    "wheelchairAccess" BOOLEAN NOT NULL,
    "ablutionFacilities" BOOLEAN NOT NULL,
    "classes" BOOLEAN NOT NULL,
    "languages" TEXT[],
    "jummahTime" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mosque_pkey" PRIMARY KEY ("id")
);

-- Create index on cityId for Mosque
CREATE INDEX "Mosque_cityId_idx" ON "Mosque"("cityId");

-- Create User table
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "bio" TEXT,
    "nationality" TEXT,
    "languages" TEXT[],
    "dietaryRestrictions" TEXT[],
    "travelStyle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Create unique index on email
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Create Review table
CREATE TABLE IF NOT EXISTS "Review" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "helpful" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "cityId" TEXT,
    "restaurantId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- Create indexes for Review
CREATE INDEX "Review_userId_idx" ON "Review"("userId");
CREATE INDEX "Review_cityId_idx" ON "Review"("cityId");
CREATE INDEX "Review_restaurantId_idx" ON "Review"("restaurantId");

-- Create Meetup table
CREATE TABLE IF NOT EXISTS "Meetup" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "maxAttendees" INTEGER,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Meetup_pkey" PRIMARY KEY ("id")
);

-- Create index on cityId for Meetup
CREATE INDEX "Meetup_cityId_idx" ON "Meetup"("cityId");

-- Create MeetupAttendee table
CREATE TABLE IF NOT EXISTS "MeetupAttendee" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "meetupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MeetupAttendee_pkey" PRIMARY KEY ("id")
);

-- Create unique constraint for user-meetup combination
CREATE UNIQUE INDEX "MeetupAttendee_userId_meetupId_key" ON "MeetupAttendee"("userId", "meetupId");

-- Create CommunityPost table
CREATE TABLE IF NOT EXISTS "CommunityPost" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "content" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityPost_pkey" PRIMARY KEY ("id")
);

-- Create indexes for CommunityPost
CREATE INDEX "CommunityPost_cityId_idx" ON "CommunityPost"("cityId");
CREATE INDEX "CommunityPost_authorId_idx" ON "CommunityPost"("authorId");

-- Create PrayerTime table
CREATE TABLE IF NOT EXISTS "PrayerTime" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "cityId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "fajr" TEXT NOT NULL,
    "sunrise" TEXT NOT NULL,
    "dhuhr" TEXT NOT NULL,
    "asr" TEXT NOT NULL,
    "maghrib" TEXT NOT NULL,
    "isha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrayerTime_pkey" PRIMARY KEY ("id")
);

-- Create unique constraint for city-date combination
CREATE UNIQUE INDEX "PrayerTime_cityId_date_key" ON "PrayerTime"("cityId", "date");
CREATE INDEX "PrayerTime_cityId_idx" ON "PrayerTime"("cityId");

-- Add foreign key constraints
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Mosque" ADD CONSTRAINT "Mosque_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Review" ADD CONSTRAINT "Review_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "MeetupAttendee" ADD CONSTRAINT "MeetupAttendee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "MeetupAttendee" ADD CONSTRAINT "MeetupAttendee_meetupId_fkey" FOREIGN KEY ("meetupId") REFERENCES "Meetup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CommunityPost" ADD CONSTRAINT "CommunityPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Enable Row Level Security on all tables
ALTER TABLE "City" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Restaurant" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Mosque" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Review" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Meetup" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "MeetupAttendee" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CommunityPost" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PrayerTime" ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON "City" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "Restaurant" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "Mosque" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "PrayerTime" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "Meetup" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "CommunityPost" FOR SELECT USING (true);
CREATE POLICY "Public read access" ON "Review" FOR SELECT USING (true);