const pillars = [
  {
    title: "You build the vault",
    body: "Not ours. You open it. Your own capital ticks first so a tape exists. Others opt in after that — or they don’t.",
  },
  {
    title: "Charge a fee",
    body: "Claimed venue fees skim to you at a rate you set once. We take seat rent. We do not take LP yield.",
  },
  {
    title: "Stay private",
    body: "An allowlist you control. A second wallet that is not on it is rejected. Private is membership, not encryption.",
  },
  {
    title: "Leave anytime",
    body: "If you stop, each LP withdraws without you and without us. Freeze stops the next tick. It does not trap the money.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">The product</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        A vault a person can run. We rent the seat under it.
      </h2>
      <p className="measure mt-6 text-ink-muted">
        Meteora is the first venue. The product is the vault, not the pool. We
        are not the desk, and we are not a better Kamino.
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {pillars.map((item, i) => (
          <article key={item.title} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
