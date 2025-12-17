import type { NextConfig } from "next";

const repo = "aacexports";
const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
