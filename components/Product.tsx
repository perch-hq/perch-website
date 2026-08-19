import Link from "next/link";
import { site } from "@/lib/site";

const jobs = [
  {
    title: "You run the strategy",
    body: "Point Condor or another agent at hummingbot-api on the perch. Packaged rebalance this sprint — you do not upload code onto the box. Set your fee once. Keep it private if you want.",
  },
  {
    title: "They join that tape",
    body: "People opt into a vault you already funded. They judge the on-chain ticks, not a Perch APY. Anyone who deposited can leave without you.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">The product</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Two jobs. One vault. We only rent the seat.
      </h2>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {jobs.map((item, i) => (
          <article key={item.title} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-ink-muted">
        See a named tape, not a ranked list.{" "}
        <Link href={site.tape} className="text-ink hover:text-copper">
          Demo tape
        </Link>
        .
      </p>
    </section>
  );
}
