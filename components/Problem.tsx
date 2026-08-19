const problems = [
  {
    k: "01",
    title: "Protocol vaults abandon thin books",
    body: "When take-rate times AUM cannot pay a desk, the vault dies. Capital waits on the operator. That is the incentive, not a missing APY.",
  },
  {
    k: "02",
    title: "Friends’ capital still means a fund",
    body: "A person cannot take opt-in capital without becoming a protocol or buying the fund stack. Private allowlists and leave-anytime are how that job skips admin — not how it skips arithmetic.",
  },
  {
    k: "03",
    title: "Self-hosted still pastes a key",
    body: "Helius plus a Frankfurt VPS plus SSH is a seat you can leak. Freeze is a terms-of-service clause. Inventory sits in a wallet the operator can copy.",
  },
] as const;

export function Problem() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">The job</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Protocol desks leave thin books. Self-hosted bots still paste a key.
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
