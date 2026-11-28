import { SiteFooter } from "@/components/site-footer";
import { SectionNavigator } from "@/components/section-navigator";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div id="top">
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <ProofStrip />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
      <SectionNavigator />
    </div>
  );
}
