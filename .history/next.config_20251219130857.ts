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
        source: "/fr/projets/en-planification",
        destination: "/fr/projects/in-planning",
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
