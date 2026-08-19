const steps = [
  {
    title: "Point Condor at the perch",
    body: "Keep thinking where you already think. hummingbot-api on the seat is what actually sends. You never log into that machine.",
  },
  {
    title: "Your own deposit ticks",
    body: "Open a vault, name the pool, and fund it yourself first. User one is a person whose own money is in range — not a raise.",
  },
  {
    title: "Colo lands; wifi does not",
    body: "The same rebalance from Amsterdam or Frankfurt makes the slot. A Toronto laptop often does not. That gap is the product.",
  },
  {
    title: "Freeze, then leave without us",
    body: "One transaction and the next trade fails. If the seat is gone, you still withdraw. Getting out never depends on a login.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">How it works</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Point, tick, land, leave.
      </h2>
      <ol className="mt-12 grid gap-0 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li key={step.title} className="border-t border-hairline py-8 pr-8">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg">{step.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
