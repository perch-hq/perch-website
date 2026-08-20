import Link from "next/link";
import { Console } from "@/components/Console";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-fade absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,122,74,0.18),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(226,160,111,0.07),transparent_70%)]"
      />
      <div className="site relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-32">
        <div>
          <p>
            <Link href="/#waitlist" className="badge">
              <span aria-hidden="true" className="badge-dot" />
              {copy.hero.badge}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
          <h1 className="mt-7 max-w-xl text-[2.5rem] font-medium leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.15rem]">
            {copy.hero.h1.lead}{" "}
            <em className="text-gradient font-serif font-normal italic">
              {copy.hero.h1.accent}
            </em>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
            {copy.hero.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/#waitlist" className="btn btn-primary">
              {copy.hero.cta}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/#how"
              className="link-arrow text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {copy.hero.secondary}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>
          <p className="mt-10 max-w-lg text-sm leading-relaxed text-ink-muted">
            {copy.hero.after.text}{" "}
            <Link
              href={site.tape}
              className="link-arrow text-ink transition-colors hover:text-copper"
            >
              {copy.hero.after.link}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </p>
        </div>
        <Console />
      </div>
    </section>
  );
}
