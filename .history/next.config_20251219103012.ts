import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/fr/galerie",
        destination: "/fr/gallery",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/about",
        locale: false,
      },
      {
        source: "/fr/confidentialite",
        destination: "/fr/privacy",
        locale: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
