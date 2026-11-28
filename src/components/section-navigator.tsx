"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { pageSections } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Floating pill (bottom-right): names the next section and jumps to it.
 * On the last section it becomes "Back to top". It hides while a call-to-action button
 * (marked with data-hide-section-nav) passes through the bottom strip of the screen where
 * the pill sits, so it never covers those buttons.
 */
export function SectionNavigator() {
  const [current, setCurrent] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // The current section is the last one whose top has passed 35% of the viewport.
      const line = window.innerHeight * 0.35;
      let index = 0;
      pageSections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= line) index = i;
      });
      // At the very bottom, the last section counts as current even if it's short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        index = pageSections.length - 1;
      }
      setCurrent(index);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Hide while any marked button is inside the bottom strip (the pill's area).
    const targets = Array.from(document.querySelectorAll("[data-hide-section-nav]"));
    const inStrip = new Set<Element>();
    let observer: IntersectionObserver | null = null;
    const observe = () => {
      observer?.disconnect();
      inStrip.clear();
      const strip = 96; // px from the bottom of the viewport
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => (e.isIntersecting ? inStrip.add(e.target) : inStrip.delete(e.target)));
          setHidden(inStrip.size > 0);
        },
        { rootMargin: `-${Math.max(window.innerHeight - strip, 0)}px 0px 0px 0px` }
      );
      targets.forEach((t) => observer?.observe(t));
    };
    observe();
    window.addEventListener("resize", observe);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", observe);
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  const next = pageSections[current + 1];

  const go = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    if (!next) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    document.getElementById(next.id)?.scrollIntoView({ behavior, block: "start" });
    // Move keyboard focus to the new section's heading without a second scroll.
    const heading = document.getElementById(`${next.id}-heading`);
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  };

  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 z-40 transition-[opacity,transform] duration-200 sm:right-6 sm:bottom-6",
        hidden && "pointer-events-none translate-y-2 opacity-0"
      )}
      aria-hidden={hidden || undefined}
    >
      <button
        type="button"
        onClick={go}
        tabIndex={hidden ? -1 : undefined}
        className="group flex items-center gap-2.5 rounded-full border border-border bg-white/90 py-1.5 pr-1.5 pl-4 text-sm shadow-lg shadow-slate-900/10 backdrop-blur transition-colors hover:border-primary/40"
      >
        <span className="font-medium text-foreground">
          {next ? (
            <>
              <span className="sr-only">Go to </span>
              {next.label}
            </>
          ) : (
            "Back to top"
          )}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "grid size-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform",
            next ? "group-hover:translate-y-0.5" : "group-hover:-translate-y-0.5"
          )}
        >
          {next ? <ArrowDown className="size-4" /> : <ArrowUp className="size-4" />}
        </span>
      </button>
    </div>
  );
}
