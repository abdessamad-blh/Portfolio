import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js (App Router)", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Fastify", "Express", "PHP / Laravel", "Python", "REST", "GraphQL", "Socket.io"],
  },
  {
    name: "Data",
    skills: [
      "Databricks",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Unity Catalog",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    name: "AI & automation",
    skills: [
      "LLM agents & tool calling",
      "Mastra",
      "Claude API",
      "Gemini API",
      "Groq API",
      "OpenAI API",
      "n8n",
      "Claude Code",
      "MCP",
    ],
  },
  {
    name: "DevOps",
    skills: ["Docker", "Docker Compose", "Linux VPS", "Caddy", "Nginx", "Git"],
  },
  {
    name: "Other",
    skills: [
      "React Native / Expo",
      "WordPress",
      "Shopify",
      "Technical SEO",
      "Google Search Console",
      "Google Analytics",
    ],
  },
];
