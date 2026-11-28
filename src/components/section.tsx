import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  /** Small label above the heading, e.g. "Work". */
  eyebrow?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, description, className, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-8 sm:mb-12">
          {eyebrow ? (
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-primary" />
              {eyebrow}
            </p>
          ) : null}
          <h2 id={headingId} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

//first design try
