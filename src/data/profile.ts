import type { Highlight, Profile, Seo } from "./types";

export const profile: Profile = {
  name: "Abdessamad Belahcen",
  title: "Full-stack engineer — web apps, AI agents & data pipelines",
  location: "Rabat, Morocco · open to remote & on-site",
  intro:
    "Full-stack engineer based in Rabat, building production web apps, AI agents and data pipelines end to end. I design, build, deploy and maintain what I ship, from the database to the server.",
  photo: "/photo.jpg",
  photoAlt: "Portrait of Abdessamad Belahcen",
  email: "belahcenabdessamad@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdessamad-belahcen-93138917a",
  github: "https://github.com/abdessamad-blh",
  availability: "Open to work",
  coreStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Databricks", "n8n"],
  // CV buttons are hidden until these are set. To show them, add the PDFs to
  // /public and uncomment:
  // cvEn: "/cv-en.pdf",
  // cvFr: "/cv-fr.pdf",
};

/**
 * Proof strip under the hero: real, verifiable numbers only.
 * Keep it to 4 items (2×2 on phones, one row on desktop).
 */
export const highlights: Highlight[] = [
  { value: "100k", label: "orders in the Olist lakehouse" },
  { value: "4", label: "languages handled by the AI agent" },
  { value: "5", label: "Docker services in production" },
  { value: "98", label: "PageSpeed score on evomarket.ma" },
];

/** Contact section copy. */
export const contactCopy = {
  title: "Let's work together",
  text: "Open to full-time roles and freelance projects, remote or on-site. Tell me what you're building and I'll get back to you quickly.",
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

/**
 * Sections the floating "next section" button steps through, in page order.
 * `id` must match the section's id attribute.
 */
export const pageSections = [
  { id: "hero", label: "Intro" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/** Current employer, used in the JSON-LD Person schema. */
export const currentEmployer = { name: "EvoMarket Agency", url: "https://evomarket.ma" };

