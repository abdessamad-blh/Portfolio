import path from "node:path";
import type { NextConfig } from "next";

// "/Portfolio" on GitHub Pages project sites, empty on a custom domain or Vercel.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  // Static HTML export: `next build` writes the whole site to ./out
  output: "export",
  basePath: basePath || undefined,
  // Static export has no image server: covers are pre-optimized to WebP at 640px
  // and 1200px (scripts/optimize-images.mjs) and picked via srcset by a custom loader.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 1200],
    imageSizes: [320],
  },
  trailingSlash: false,
  poweredByHeader: false,
  // Pin the project root so Next never picks up a parent folder's lockfile or config.
  turbopack: { root: path.resolve(__dirname) },
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
