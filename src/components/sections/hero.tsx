import Image from "next/image";
import { Download, FileText, Mail, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { asset } from "@/lib/base-path";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Hero() {
  const hasCv = Boolean(profile.cvEn || profile.cvFr);
  return (
    <section aria-labelledby="hero-heading" className="border-b bg-gradient-to-b from-accent/60 to-background">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1fr_auto]">
        <div className="order-2 md:order-1">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-balance text-foreground/90 sm:text-xl">{profile.title}</p>
          <p className="mt-3 flex items-center gap-2 text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-5 max-w-xl text-pretty text-muted-foreground">{profile.intro}</p>

          {hasCv ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.cvEn ? (
                <Button asChild size="lg">
                  <a href={asset(profile.cvEn)} download>
                    <Download aria-hidden="true" />
                    Download CV (EN)
                  </a>
                </Button>
              ) : null}
              {profile.cvFr ? (
                <Button asChild size="lg" variant="outline">
                  <a href={asset(profile.cvFr)} download hrefLang="fr">
                    <FileText aria-hidden="true" />
                    CV (FR)
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}

          <ul
            className={hasCv ? "mt-4 flex flex-wrap gap-2" : "mt-8 flex flex-wrap gap-3"}
            aria-label="Profiles and email"
          >
            <li>
              <Button asChild variant={hasCv ? "ghost" : "default"} size={hasCv ? "sm" : "lg"}>
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" />
                  {hasCv ? "Email" : "Email me"}
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant={hasCv ? "ghost" : "outline"} size={hasCv ? "sm" : "lg"}>
                <ExternalLink href={profile.linkedin}>
                  <LinkedInIcon />
                  LinkedIn
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild variant={hasCv ? "ghost" : "outline"} size={hasCv ? "sm" : "lg"}>
                <ExternalLink href={profile.github}>
                  <GitHubIcon />
                  GitHub
                </ExternalLink>
              </Button>
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            width={600}
            height={600}
            priority
            sizes="(min-width: 768px) 256px, 192px"
            className="size-40 rounded-full border-4 border-background object-cover shadow-md ring-1 ring-border sm:size-48 md:size-64"
          />
        </div>
      </div>
    </section>
  );
}
