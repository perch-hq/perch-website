import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,122,74,0.18),transparent_68%)]"
      />
      <div className="site py-16 sm:py-24 lg:py-28">
        <p className="eyebrow">Colosseum Fall 2026</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[2.45rem] leading-[1.12] tracking-tight sm:text-6xl sm:leading-[1.08] lg:text-[4rem]">
          Deploy a Hummingbot strategy.
          <br />
          We run the hands. You never{" "}
          <em className="italic text-copper">log in.</em>
        </h1>
        <p className="measure mt-8 text-lg text-ink-muted">
          Condor — or another agent — keeps thinking where it is. hummingbot-api
          sends from Amsterdam or Frankfurt. You do not paste a Gateway key.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/#waitlist"
            className="inline-block border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
          >
            Request a seat
          </Link>
          <Link
            href={site.docs}
            className="inline-block text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Read the docs
          </Link>
        </div>
        <p className="measure mt-10 text-sm text-ink-muted">
          After your own book ticks, people can opt in. You keep the fee. They
          leave without you. That is{" "}
          <Link href={site.tape} className="text-ink hover:text-copper">
            what a tape looks like
          </Link>
          — not a second product.
        </p>
      </div>
    </section>
  );
}
