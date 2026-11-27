import type { Project } from "./types";

/**
 * Featured projects, shown in this order.
 * Images live in /public/projects (WebP, 1200×750 + a 640px copy). To add a new
 * screenshot, drop it in ./images-src and run `npm run images`.
 */
export const projects: Project[] = [
  {
    slug: "electrosky",
    title: "electrosky.ma",
    summary:
      "Click-and-collect e-commerce platform for an electronics store in Rabat, with a full back office.",
    role: "Sole developer: architecture, frontend, API, database, security and deployment.",
    stack: ["Next.js 15", "TypeScript", "Fastify", "PostgreSQL 16", "Prisma", "Redis 7", "Socket.io", "Docker", "Caddy"],
    result:
      "5 Docker services in production · 15+ table schema · real-time order alerts · stock and supplier tracking · RBAC, 2FA, rate limiting and activity log.",
    image: {
      src: "/projects/electrosky.webp",
      alt: "Electro Sky storefront homepage showing a TV promotion banner and product categories",
      width: 1200,
      height: 750,
    },
    links: {
      live: "https://electrosky.ma",
      github: "https://github.com/abdessamad-blh/electrosky-infra",
      githubLabel: "Infra repo",
    },
  },
  {
    slug: "ai-shopping-assistant",
    title: "AI shopping assistant",
    summary: "AI agent on electrosky.ma that answers customers from the real product catalog.",
    role: "Designed, built and deployed it alone.",
    stack: ["TypeScript", "Mastra", "Groq", "Google Gemini", "SQLite", "Docker", "Caddy"],
    result:
      "Live since Nov 2026 · answers in French, English, Arabic and Darija · tool calls (searchProducts, checkStock) so it never invents products · automatic provider failover.",
    image: {
      src: "/projects/ai-shopping-assistant.webp",
      alt: "Electro Sky storefront with the AI assistant open, recommending an in-stock Samsung monitor and sharing its product link",
      width: 1200,
      height: 750,
    },
    links: {
      live: "https://electrosky.ma",
      github: "https://github.com/abdessamad-blh/electrosky-infra",
      githubLabel: "Infra repo",
    },
  },
  {
    slug: "olist-lakehouse",
    title: "Olist Lakehouse (Databricks)",
    summary: "End-to-end medallion lakehouse on ~100,000 real e-commerce orders from the Olist dataset.",
    role: "Built the full pipeline alone as a data engineering project.",
    stack: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Unity Catalog", "Lakeflow Jobs", "AI/BI Dashboards"],
    result:
      "9 bronze → 7 silver → 3 gold Delta tables with data-quality checks · found late deliveries average a 2.57 review score vs 4.29 on time.",
    image: {
      src: "/projects/olist-lakehouse.webp",
      alt: "Databricks job run of the Olist lakehouse pipeline showing successful bronze, silver and gold tasks",
      width: 1200,
      height: 750,
    },
    links: { github: "https://github.com/abdessamad-blh/olist-lakehouse-databricks" },
  },
  {
    slug: "n8n-automation",
    title: "n8n automation pipeline",
    summary:
      "Self-hosted Telegram bot that turns an audio file into ready-to-use subtitle files, with no manual steps.",
    role: "Designed, built and operate it alone, including the server.",
    stack: ["n8n", "Telegram Bot API", "Groq Whisper", "JavaScript", "Docker", "Caddy"],
    // TODO: add time saved per file if you have a real number.
    result:
      "29-node workflow: Telegram upload → Whisper transcription → SRT, transliterated and English subtitle files plus metadata, sent back in the chat · temp files cleaned up after each run.",
    image: {
      src: "/projects/n8n-automation.webp",
      alt: "n8n workflow canvas: Telegram webhook, file download, Groq Whisper transcription and subtitle file steps",
      width: 1200,
      height: 750,
    },
    links: {},
  },
  {
    slug: "saidiabay",
    title: "saidiabay.ma",
    summary: "Real-estate platform for the Saidia beach resort: seasonal rentals and property sales leads.",
    role: "Built about 90% of it alone.",
    stack: ["Next.js 14", "TypeScript", "GraphQL", "PostgreSQL", "Prisma"],
    result: "Rental calendar with seasonal pricing and a lead CRM for property sales.",
    image: {
      src: "/projects/saidiabay.webp",
      alt: "Saidia Bay real-estate website shown on a laptop and a phone",
      width: 1200,
      height: 750,
    },
    links: { live: "https://saidiabay.ma" },
  },
  {
    slug: "evomarket",
    title: "evomarket.ma",
    summary: "Website of EvoMarket, the digital agency where I work, in French, English and Arabic.",
    role: "Built and optimised it: performance, technical SEO and analytics.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "next-intl", "Search Console", "Google Analytics"],
    // TODO: add the mobile PageSpeed score.
    result: "PageSpeed (desktop): 98 performance, 92 SEO, 96 accessibility · LCP 0.9 s, CLS 0.",
    image: {
      src: "/projects/evomarket.webp",
      alt: "EvoMarket logo on a dark blue background",
      width: 1200,
      height: 750,
    },
    links: {
      live: "https://evomarket.ma",
      github: "https://github.com/abdessamad-blh/EvoMarket-app",
    },
  },
];
