import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // For Netlify deployment
  },
  // Disable Turbopack for production builds
  experimental: {
    // Remove turbopack from production
  },
};

export default nextConfig;
