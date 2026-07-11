import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so the stray parent lockfile isn't picked up.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
