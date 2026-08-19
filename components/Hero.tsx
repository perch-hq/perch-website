import Link from "next/link";
import { site } from "@/lib/site";

const doors = [
  {
    k: "01",
    title: "Deploy Hummingbot strategies",
    body: "Condor — or another agent — keeps thinking where it is. hummingbot-api on a sealed seat is what actually sends. You open the vault. You keep the fee.",
    href: "/?role=curator#waitlist",
    cta: "Request a seat",
    primary: true,
  },
  {
    k: "02",
    title: "Join a vault",
    body: "Opt into a named curator’s tape. You hold a share. You can leave without them, and without us. This is not a yield catalog.",
    href: site.tape,
    cta: "Read the demo tape",
    primary: false,
  },
] as const;

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
          Deploy a strategy.
          <br />
          Or join a vault that{" "}
          <em className="italic text-copper">already ticks.</em>
        </h1>
        <p className="measure mt-8 text-lg text-ink-muted">
          Condor stays on your machine. hummingbot-api sends from a sealed seat
          in Amsterdam or Frankfurt. We rent that seat. We never hold the
          money.
        </p>
        <div className="mt-14 grid gap-px bg-hairline lg:grid-cols-2">
          {doors.map((door) => (
            <article key={door.k} className="bg-bg p-8 sm:p-10">
              <p className="font-mono text-xs tracking-widest text-copper">
                {door.k}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug">
                {door.title}
              </h2>
              <p className="mt-4 text-[0.95rem] text-ink-muted">{door.body}</p>
              <Link
                href={door.href}
                className={
                  door.primary
                    ? "mt-8 inline-block border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
                    : "mt-8 inline-block border border-hairline px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
                }
              >
                {door.cta}
              </Link>
            </article>
          ))}
        </div>
        <Link
          href={site.docs}
          className="mt-8 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
        >
          Read the docs
        </Link>
      </div>
    </section>
  );
}
