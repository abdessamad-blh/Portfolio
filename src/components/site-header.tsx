import { navigation, profile } from "@/data/profile";

export function SiteHeader() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const links = navigation.filter((item) => item.href !== "#contact");

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="group flex min-w-0 items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
          >
            {initials}
          </span>
          <span className="truncate group-hover:text-primary">{profile.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-1">
              <a
                href="#contact"
                className="inline-flex h-9 items-center rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
