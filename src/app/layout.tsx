import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FavoritesProvider } from "@/context/favorites-context";
import { AuthProvider } from "@/context/auth-context";

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HalalCities",
  "description": "Find Muslim-friendly cities worldwide with halal food, mosques, and vibrant communities",
  "url": "https://halalcities.netlify.app",
  "logo": "https://halalcities.netlify.app/logo.png",
  "sameAs": [
    "https://twitter.com/halalcities",
    "https://facebook.com/halalcities",
    "https://instagram.com/halalcities"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Arabic"]
  }
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HalalCities",
  "url": "https://halalcities.netlify.app",
  "description": "Discover the best cities for Muslim travelers and expats with halal food, mosques, and vibrant communities worldwide.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://halalcities.netlify.app/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HalalCities - Find Your Perfect Muslim-Friendly City",
  description: "Discover the best cities for Muslim travelers and expats with halal food, mosques, and vibrant communities worldwide.",
  keywords: ["halal travel", "muslim friendly cities", "halal food", "mosques", "islamic travel", "muslim expats"],
  authors: [{ name: "HalalCities" }],
  openGraph: {
    title: "HalalCities - Find Your Perfect Muslim-Friendly City",
    description: "Discover the best cities for Muslim travelers and expats with halal food, mosques, and vibrant communities worldwide.",
    url: "https://halalcities.com",
    siteName: "HalalCities",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HalalCities - Find Your Perfect Muslim-Friendly City",
    description: "Discover the best cities for Muslim travelers and expats with halal food, mosques, and vibrant communities worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <AuthProvider>
          <FavoritesProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
