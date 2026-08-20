const problems = [
  {
    k: "01",
    title: "Two servers and a pasted key",
    body: "Condor already split the brain from the hands. Self-hosting still means Tailscale, a Gateway key in .env, and hoping the second box stays up.",
  },
  {
    k: "02",
    title: "Wifi misses the slot",
    body: "A Toronto laptop versus Amsterdam or Frankfurt is last-mile landing, not Jump versus Auros. Miner is gone, so that ops is not paid by rewards.",
  },
  {
    k: "03",
    title: "If we hold the crank, the money cannot",
    body: "A locked-down VPS with a pasted owner key is custodial. Freeze that traps funds is the same miss. Inventory has to sit in a vault you can leave without us.",
  },
] as const;

export function Problem() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">The problem</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        The painful part is already ops, not yield.
      </h2>
      <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-3">
        {problems.map((item) => (
          <article key={item.k} className="bg-bg p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest text-copper">
              {item.k}
            </p>
            <h3 className="mt-4 text-lg leading-snug">{item.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
