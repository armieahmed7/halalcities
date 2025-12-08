-- User Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS "user_profiles" (
    "id" UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT,
    "bio" TEXT,
    "nationality" TEXT,
    "languages" TEXT[] DEFAULT '{}',
    "dietary_restrictions" TEXT[] DEFAULT '{}',
    "travel_style" TEXT,
    "notification_preferences" JSONB DEFAULT '{"email_updates": true, "new_city_alerts": true, "travel_deals": true}',
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique index on email
CREATE UNIQUE INDEX IF NOT EXISTS "user_profiles_email_key" ON "user_profiles"("email");

-- Newsletter Subscribers table
CREATE TABLE IF NOT EXISTS "newsletter_subscribers" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "email" TEXT NOT NULL,
    "subscribed_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "unsubscribed_at" TIMESTAMP WITH TIME ZONE,
    "is_active" BOOLEAN DEFAULT TRUE,
    "source" TEXT DEFAULT 'website',
    "user_id" UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create unique index on email for newsletter
CREATE UNIQUE INDEX IF NOT EXISTS "newsletter_subscribers_email_key" ON "newsletter_subscribers"("email");

-- User Favorites table (for syncing favorites across devices)
CREATE TABLE IF NOT EXISTS "user_favorites" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "user_id" UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    "city_slug" TEXT NOT NULL,
    "added_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique constraint for user-city combination
CREATE UNIQUE INDEX IF NOT EXISTS "user_favorites_user_city_key" ON "user_favorites"("user_id", "city_slug");
CREATE INDEX IF NOT EXISTS "user_favorites_user_id_idx" ON "user_favorites"("user_id");

-- User Reviews table
CREATE TABLE IF NOT EXISTS "user_reviews" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "user_id" UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    "city_slug" TEXT NOT NULL,
    "rating" INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    "title" TEXT,
    "content" TEXT NOT NULL,
    "pros" TEXT[],
    "cons" TEXT[],
    "visit_date" DATE,
    "visit_purpose" TEXT,
    "helpful_count" INTEGER DEFAULT 0,
    "images" TEXT[],
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for reviews
CREATE INDEX IF NOT EXISTS "user_reviews_user_id_idx" ON "user_reviews"("user_id");
CREATE INDEX IF NOT EXISTS "user_reviews_city_slug_idx" ON "user_reviews"("city_slug");
CREATE UNIQUE INDEX IF NOT EXISTS "user_reviews_user_city_key" ON "user_reviews"("user_id", "city_slug");

-- Review Helpful Votes table
CREATE TABLE IF NOT EXISTS "review_helpful_votes" (
    "id" UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "review_id" UUID REFERENCES "user_reviews"(id) ON DELETE CASCADE NOT NULL,
    "user_id" UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique constraint for user-review vote
CREATE UNIQUE INDEX IF NOT EXISTS "review_helpful_votes_unique" ON "review_helpful_votes"("review_id", "user_id");

-- Enable Row Level Security
ALTER TABLE "user_profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "newsletter_subscribers" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "user_favorites" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "user_reviews" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "review_helpful_votes" ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile" ON "user_profiles"
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON "user_profiles"
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Public profiles are viewable" ON "user_profiles"
    FOR SELECT USING (true);

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter" ON "newsletter_subscribers"
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own subscription" ON "newsletter_subscribers"
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policies for user_favorites
CREATE POLICY "Users can view their own favorites" ON "user_favorites"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites" ON "user_favorites"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove favorites" ON "user_favorites"
    FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for user_reviews
CREATE POLICY "Anyone can view reviews" ON "user_reviews"
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create reviews" ON "user_reviews"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON "user_reviews"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" ON "user_reviews"
    FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for review_helpful_votes
CREATE POLICY "Anyone can view votes" ON "review_helpful_votes"
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can vote" ON "review_helpful_votes"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their votes" ON "review_helpful_votes"
    FOR DELETE USING (auth.uid() = user_id);

-- Function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update helpful count when votes change
CREATE OR REPLACE FUNCTION public.update_review_helpful_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE user_reviews SET helpful_count = helpful_count + 1 WHERE id = NEW.review_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE user_reviews SET helpful_count = helpful_count - 1 WHERE id = OLD.review_id;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for helpful count updates
DROP TRIGGER IF EXISTS on_helpful_vote_change ON review_helpful_votes;
CREATE TRIGGER on_helpful_vote_change
    AFTER INSERT OR DELETE ON review_helpful_votes
    FOR EACH ROW EXECUTE FUNCTION public.update_review_helpful_count();
