/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images-eu.ssl-images-amazon.com",
      "fakestoreapi.com",
      "m.media-amazon.com",
    ], // Add more domains if needed
  },
};

module.exports = nextConfig;
