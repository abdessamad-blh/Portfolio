/**
 * Base path the site is served under, e.g. "/Portfolio" for
 * https://abdessamad-blh.github.io/Portfolio/. Empty at a domain root.
 * Set at build time by the GitHub Pages workflow (NEXT_PUBLIC_BASE_PATH).
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

/** Prefix a /public asset path (e.g. "/cv-en.pdf") with the base path. */
export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
