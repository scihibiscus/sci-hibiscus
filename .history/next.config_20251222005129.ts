import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/fr/projets",
        destination: "/fr/projects",
        locale: false,
      },
      {
        source: "/fr/projets/projets-actuels",
        destination: "/fr/projects/current-projects",
        locale: false,
      },
      {
        source: "/fr/projets/en-planification",
        destination: "/fr/projects/in-planning",
        locale: false,
      },
      {
        source: "/fr/projets/references",
        destination: "/fr/projects/references",
        locale: false,
      },
      {
        source: "/fr/offrir-terrain",
        destination: "/fr/offer-land",
        locale: false,
      },
      {
        source: "/fr/confidentialite",
        destination: "/fr/privacy-policy",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/privacy-policy",
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
