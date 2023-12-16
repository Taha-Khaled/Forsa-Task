/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forsabackend.blob.core.windows.net",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
