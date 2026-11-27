import { ArrowUpRight } from "lucide-react";

import { alsoBuilt } from "@/data/also-built";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "@/components/external-link";
import { GitHubIcon } from "@/components/icons";

export function AlsoBuilt() {
  return (
    <div className="mt-14">
        <h3 id="also-built-heading" className="text-lg font-semibold tracking-tight">
          Also built
        </h3>
        <ul className="mt-4 divide-y rounded-xl border">
          {alsoBuilt.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 sm:w-56 sm:shrink-0">
                {item.href ? (
                  <ExternalLink
                    href={item.href}
                    className="inline-flex items-center gap-1 font-medium hover:text-primary hover:underline"
                  >
                    {item.title}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </ExternalLink>
                ) : (
                  <span className="font-medium">{item.title}</span>
                )}
                {item.badge ? <Badge variant="accent">{item.badge}</Badge> : null}
              </div>
              <p className="flex-1 text-sm text-muted-foreground">{item.description}</p>
              {item.github ? (
                <ExternalLink
                  href={item.github}
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium hover:text-primary"
                >
                  <GitHubIcon className="size-4" />
                  Code<span className="sr-only">: {item.title} on GitHub</span>
                </ExternalLink>
              ) : null}
            </li>
          ))}
        </ul>
    </div>
  );
}
