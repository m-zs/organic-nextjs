import { defaultLocale } from "./src/utils/const/localization.js";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "src"],
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: [defaultLocale, "pl"],
    defaultLocale,
    localeDetection: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
