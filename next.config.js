/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "src"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
