import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // For Netlify deployment
  },
  // For Netlify deployment with API routes
  output: 'standalone',
};

export default nextConfig;
