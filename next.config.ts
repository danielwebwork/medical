import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash often blocks or times out when the Next.js server fetches via /_next/image.
    // Serve remote URLs directly from the browser (still uses next/image layout & lazy loading).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
