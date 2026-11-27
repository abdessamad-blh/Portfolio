import type { Profile, Seo } from "./types";

export const profile: Profile = {
  name: "Abdessamad Belahcen",
  title: "Full-stack engineer — web apps, AI agents & data pipelines",
  location: "Rabat, Morocco · open to remote & on-site",
  intro:
    "Full-stack engineer based in Rabat, building production web apps, AI agents and data pipelines end to end. I design, build, deploy and maintain what I ship, from the database to the server.",
  // TODO: replace /public/photo.jpg with your real photo (square, ~600×600).
  photo: "/photo.jpg",
  photoAlt: "Portrait of Abdessamad Belahcen",
  email: "belahcenabdessamad@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdessamad-belahcen-93138917a",
  github: "https://github.com/abdessamad-blh",
  // TODO: add /public/cv-en.pdf and /public/cv-fr.pdf.
  cvEn: "/cv-en.pdf",
  cvFr: "/cv-fr.pdf",
};

export const seo: Seo = {
  title: `${profile.name} — Full-stack engineer`,
  description:
    "Abdessamad Belahcen is a full-stack engineer in Rabat, Morocco, building production web apps, AI agents and data pipelines end to end. Open to remote and on-site roles.",
  keywords: [
    "Abdessamad Belahcen",
    "full-stack engineer",
    "software engineer Morocco",
    "Next.js developer",
    "data engineer",
    "Databricks",
    "AI agents",
    "Mastra",
    "n8n automation",
    "Rabat",
  ],
};

/** Current employer, used in the JSON-LD Person schema. */
export const currentEmployer = { name: "EvoMarket Agency", url: "https://evomarket.ma" };

/** In-page navigation (section ids must match the components). */
export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
