const problems = [
  {
    k: "01",
    title: "Small vaults get abandoned",
    body: "Deposit into someone else’s vault and you are relying on their business case. Once it is too small to be worth running, the people running it move on.",
  },
  {
    k: "02",
    title: "Friends’ money starts to look like a fund",
    body: "Let a few people you know in and suddenly you are expected to have paperwork, lockups and a raise. All you wanted was a fee for the strategy you already run.",
  },
  {
    k: "03",
    title: "Doing it yourself means holding the keys",
    body: "Rent a server, paste in a private key, and every risk that follows is yours. Anyone with the login has the keys, and your friends are trusting a promise.",
  },
] as const;

export function Problem() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">The problem</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Right now you either hand the vault to a protocol or hold the keys
        yourself.
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
