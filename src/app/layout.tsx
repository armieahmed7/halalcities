import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FavoritesProvider } from "@/context/favorites-context";

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
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <FavoritesProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
