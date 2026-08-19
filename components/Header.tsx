import { Mark } from "@/components/Mark";

const links = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#trust", label: "Trust" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/80 bg-bg/80 backdrop-blur-md">
      <div className="site flex h-14 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 text-sm tracking-wide">
          <Mark className="size-7 text-copper" />
          Perch
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="border border-copper px-3 py-1.5 text-sm text-copper transition-colors hover:bg-copper hover:text-bg"
          >
            Request a seat
          </a>
        </nav>
        <details className="relative md:hidden">
          <summary aria-label="Open menu" className="cursor-pointer text-sm text-ink-muted">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-48 border border-hairline bg-bg-raised p-3 shadow-xl">
            <nav aria-label="Mobile" className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a href="#waitlist" className="text-sm text-copper">
                Request a seat
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
