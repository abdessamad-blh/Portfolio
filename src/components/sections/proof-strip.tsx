import { highlights } from "@/data/profile";

/** Compact row of real numbers under the hero. */
export function ProofStrip() {
  if (highlights.length === 0) return null;
  return (
    <section aria-label="Highlights" className="border-b bg-background">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={[
              "flex flex-col-reverse justify-end gap-1 py-6 md:px-6 md:first:pl-0",
              index % 2 === 1 ? "pl-4 md:pl-6" : "pr-4",
              index >= 2 ? "border-t md:border-t-0" : "",
              index % 2 === 1 ? "border-l" : "",
              index === 2 ? "md:border-l" : "",
            ].join(" ")}
          >
            <dt className="text-sm leading-snug text-muted-foreground">{item.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
