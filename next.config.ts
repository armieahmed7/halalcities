import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // For Netlify deployment
  },
};

export default nextConfig;
