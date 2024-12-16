/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "startup-template-sage.vercel.app",
      },
    ],
  },
};

export default nextConfig;
