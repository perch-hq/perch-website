const objects = [
  {
    title: "The money",
    body: "The vault holds the tokens and the position, and every deposit still belongs to the person who made it. The seat can trade that position and pay out the fee you named. There is no route from the vault to an address we picked.",
  },
  {
    title: "Stopping",
    body: "You can freeze the seat, and so can we. The next trade simply fails. Depositors cannot — one person should not be able to halt everyone else — and they never need to, because they can just leave.",
  },
  {
    title: "Leaving",
    body: "Withdrawing does not depend on you, on us, or on the seat still running. Anyone can take their own share out at any time. A stop button that still holds the money is not a stop button.",
  },
] as const;

export function Trust() {
  return (
    <section id="trust" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">Trust</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        You never get a login. Neither does your bot.
      </h2>
      <p className="measure mt-6 text-ink-muted">
        There is no login to hand out and no key to leak — not for you, not for
        the people who deposit, not for an agent you point at the vault. The
        seat can trade your vault and only your vault. You can stop it at any
        time, and everyone who deposited can take their share back out even
        with you gone.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {objects.map((item) => (
          <article key={item.title}>
            <h3 className="border-t border-copper pt-5 font-serif text-2xl">
              {item.title}
            </h3>
            <p className="mt-4 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
