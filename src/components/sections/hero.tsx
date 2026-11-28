import Image from "next/image";
import { Briefcase, Download, FileText, Mail, MapPin } from "lucide-react";

import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { asset } from "@/lib/base-path";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Hero() {
  const hasCv = Boolean(profile.cvEn || profile.cvFr);
  // "Full-stack engineer — web apps, …" → lead + specialties (accent colour).
  const [titleLead, ...rest] = profile.title.split(" — ");
  const titleRest = rest.join(" — ");
  // The most recent role, if it is ongoing.
  const current = experience.find((item) => /present/i.test(item.period));

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden border-b">
      {/* Decorative background: soft blue wash + faint dot grid that fades out. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-accent to-background" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(#2563eb33_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="mx-auto grid max-w-5xl gap-x-12 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 md:grid-cols-[1fr_auto] md:items-center md:py-24">
        {/* Mobile: photo + status side by side. Desktop: photo moves to the right column. */}
        <div className="flex items-center gap-4 md:contents">
          <div className="relative shrink-0 md:col-start-2 md:row-span-2 md:row-start-1">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 hidden rounded-full bg-primary/15 blur-2xl md:block"
            />
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              width={600}
              height={600}
              priority
              sizes="(min-width: 768px) 288px, 80px"
              className="size-20 rounded-full object-cover shadow-md ring-4 ring-background md:size-72"
            />
          </div>
          {profile.availability ? (
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur md:col-start-1 md:row-start-1 md:mb-6 md:self-end">
              <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              {profile.availability}
            </p>
          ) : null}
        </div>

        <div className="mt-6 md:col-start-1 md:row-start-2 md:mt-0 md:self-start">
          <h1 id="hero-heading" className="text-[2.5rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl leading-snug font-semibold text-balance sm:text-2xl">
            {titleLead}
            {titleRest ? (
              <>
                <span className="sr-only"> — </span>
                <span className="block font-medium text-primary">{titleRest}</span>
              </>
            ) : null}
          </p>

          <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground sm:text-base">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {profile.location}
            </li>
            {current ? (
              <li className="flex items-start gap-2">
                <Briefcase className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Currently {current.role} at <span className="font-medium text-foreground">{current.organization}</span>
                </span>
              </li>
            ) : null}
          </ul>

          <p className="mt-5 max-w-xl text-pretty text-muted-foreground">{profile.intro}</p>

          {hasCv ? (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {profile.cvEn ? (
                <Button asChild size="lg">
                  <a href={asset(profile.cvEn)} download>
                    <Download aria-hidden="true" />
                    CV (EN)
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
            className={`${hasCv ? "mt-3" : "mt-8"} grid grid-cols-2 gap-3 sm:flex sm:flex-wrap`}
            aria-label="Contact and profiles"
          >
            <li className="col-span-2">
              <Button asChild size="lg" variant={hasCv ? "outline" : "default"} className="w-full sm:w-auto">
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" />
                  Email me
                </a>
              </Button>
            </li>
            <li>
              <Button asChild size="lg" variant="outline" className="w-full bg-white/80 sm:w-auto">
                <ExternalLink href={profile.linkedin}>
                  <LinkedInIcon />
                  LinkedIn
                </ExternalLink>
              </Button>
            </li>
            <li>
              <Button asChild size="lg" variant="outline" className="w-full bg-white/80 sm:w-auto">
                <ExternalLink href={profile.github}>
                  <GitHubIcon />
                  GitHub
                </ExternalLink>
              </Button>
            </li>
          </ul>

          {profile.coreStack.length > 0 ? (
            <div className="mt-8 border-t border-border/70 pt-5">
              <p id="core-stack" className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Core stack
              </p>
              <ul aria-labelledby="core-stack" className="mt-3 flex flex-wrap gap-2">
                {profile.coreStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border bg-white/80 px-3 py-1 text-sm font-medium text-foreground/80 shadow-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
