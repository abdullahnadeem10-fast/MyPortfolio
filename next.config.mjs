/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "books.google.com",
      },
      {
        protocol: "https",
        hostname: "www.plutobooks.com",
      },
      {
        protocol: "https",
        hostname: "nbf.org.pk",
      },
    ],
  },
};

export default nextConfig;
