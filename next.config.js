/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Strapi's default local media URL — change this if your
        // Strapi runs somewhere else (e.g. a hosted Strapi Cloud URL).
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

module.exports = nextConfig;
