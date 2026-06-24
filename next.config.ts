import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://upload.wikimedia.org/wikipedia/commons/**"),
      new URL("https://bikram-dot-dev.vercel.app/icons/**"),
      new URL("https://ugc.production.linktr.ee/**"),
    ],
  },
};

export default nextConfig;
