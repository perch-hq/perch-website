const pillars = [
  {
    title: "You build the vault",
    body: "You open it, you pick the strategy, you own the track record. Your own money goes in first, so there is something real to look at before anyone else decides.",
  },
  {
    title: "Charge a fee",
    body: "Set your rate once and your share of every fee the vault earns comes straight to you. Perch charges rent for the seat and takes nothing out of what your depositors make.",
  },
  {
    title: "Stay private",
    body: "Keep it invite-only and only the wallets you named can deposit. Anything else is turned away at the door. Private here is about who is in, not about hiding the strategy.",
  },
  {
    title: "Leave anytime",
    body: "Walk away and everyone who deposited can still take their share out, without your signature and without ours. Nothing here can hold the money hostage.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">The product</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        A vault one person can run.
      </h2>
      <p className="measure mt-6 text-ink-muted">
        Meteora is the first market we support. What you get is a vault of your
        own, not another pool to deposit into.
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
