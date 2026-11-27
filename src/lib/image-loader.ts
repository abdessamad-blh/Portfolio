// next/image loader for static export (no image server).
// Project covers ship in two widths: name.webp (1200px) and name-640.webp (640px),
// both produced by `npm run images`. Everything else is served as-is.
// The ?w= query only lets next/image build a srcset; static hosts ignore it.
// next/image does not add basePath to string srcs, so it is added here.
import { asset } from "./base-path";

type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width }: LoaderArgs): string {
  const file = src.startsWith("/projects/") && src.endsWith(".webp") && width <= 640
    ? src.replace(/\.webp$/, "-640.webp")
    : src;
  return `${asset(file)}?w=${width}`;
}
