import Link from "next/link";
import { Mark } from "@/components/Mark";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

const links = [
  { href: "/#product", label: copy.header.product },
  { href: "/#how", label: copy.header.how },
  { href: site.docs, label: copy.header.docs },
] as const;

export function Header({ current }: { current?: "docs" | "tape" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/60 bg-bg/75 backdrop-blur-xl">
      <div className="site flex h-14 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm tracking-wide">
          <Mark className="size-7 text-copper" />
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = current === "docs" && link.href === site.docs;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/#waitlist" className="btn btn-primary btn-sm">
            {copy.header.cta}
          </Link>
        </nav>
        <details className="relative md:hidden">
          <summary aria-label={copy.header.menu} className="cursor-pointer text-sm text-ink-muted">
            {copy.header.menu}
          </summary>
          <div className="absolute right-0 mt-3 w-52 rounded-xl border border-hairline-strong bg-bg-raised p-3 shadow-2xl">
            <nav aria-label="Mobile" className="flex flex-col gap-3">
              {links.map((link) => {
                const active = current === "docs" && link.href === site.docs;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm hover:text-ink ${
                      active ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/#waitlist" className="text-sm text-copper">
                {copy.header.cta}
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
