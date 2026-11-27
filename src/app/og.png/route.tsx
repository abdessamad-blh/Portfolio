import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

// Open Graph image, generated once at build time into out/og.png.
// A route (not opengraph-image.tsx) so the exported file keeps its .png
// extension: static hosts like GitHub Pages pick the content type from it.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          borderTop: "16px solid #2563EB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 38, color: "#334155", lineHeight: 1.3 }}>{profile.title}</div>
        <div style={{ marginTop: 48, display: "flex", alignItems: "center", fontSize: 28, color: "#2563EB" }}>
          {profile.location}
        </div>
      </div>
    ),
    size
  );
}
