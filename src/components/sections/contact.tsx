import { ArrowRight, Mail } from "lucide-react";

import { contactCopy, profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Contact() {
  const githubHandle = profile.github.replace(/^https?:\/\/(www\.)?github\.com\//, "@");
  const linkClass =
    "inline-flex items-center gap-2 rounded-md px-1 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16">
          {/* Decorative glow + dot grid. */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:22px_22px]"
          />

          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-300 uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-blue-300" />
            Contact
          </p>
          <h2 id="contact-heading" className="max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            {contactCopy.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-slate-300">{contactCopy.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Button asChild size="lg" className="h-12 w-full px-6 text-base sm:w-auto" data-hide-section-nav="">
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                Email me
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a
              href={`mailto:${profile.email}`}
              className="truncate text-center text-sm text-slate-300 underline-offset-4 hover:text-white hover:underline sm:text-left"
            >
              {profile.email}
            </a>
          </div>

          <ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6"
            aria-label="Profiles"
          >
            <li>
              <ExternalLink href={profile.linkedin} className={linkClass}>
                <LinkedInIcon className="size-4" />
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github} className={linkClass}>
                <GitHubIcon className="size-4" />
                GitHub <span className="text-slate-400">{githubHandle}</span>
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
