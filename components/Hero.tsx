import Link from "next/link";
import { Console } from "@/components/Console";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,122,74,0.16),transparent_68%)]"
      />
      <div className="site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-28">
        <div>
          <h1 className="max-w-xl font-serif text-[2.35rem] leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
            {copy.hero.h1}
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted">
            {copy.hero.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#waitlist"
              className="inline-block border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
            >
              {copy.hero.cta}
            </Link>
            <Link
              href="/#how"
              className="inline-block text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {copy.hero.secondary}
            </Link>
          </div>
          <p className="mt-10 max-w-lg text-sm leading-relaxed text-ink-muted">
            {copy.hero.after.text}{" "}
            <Link href={site.tape} className="text-ink hover:text-copper">
              {copy.hero.after.link}
            </Link>
          </p>
        </div>
        <Console />
      </div>
    </section>
  );
}
