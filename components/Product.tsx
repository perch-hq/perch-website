const pillars = [
  {
    title: "You build the vault",
    body: "You open it, you pick the strategy, you own the tape.",
  },
  {
    title: "Charge a fee",
    body: "Set your rate. Your share of every fee comes to you.",
  },
  {
    title: "Stay private",
    body: "Invite-only if you want. Anyone else is turned away.",
  },
  {
    title: "Leave anytime",
    body: "Anyone who deposited can take their share out whenever they want.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">The product</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        A vault one person can run.
      </h2>
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
