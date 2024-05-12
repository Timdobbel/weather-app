import { options } from "prettier-plugin-tailwindcss";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  webpack: (config, { isServer }) => {
    // Check if we're in development mode
    if (!isServer) {
      // Add the @svgr/webpack loader to the module.rules array
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      });
    }

    return config;
  },
};

export default nextConfig;
