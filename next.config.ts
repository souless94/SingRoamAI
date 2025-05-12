import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
