const parties = [
  {
    name: "You",
    hold: "The book",
    body: "You already run Condor or another LP agent. You open the vault, set the fee once, and decide whether anyone else may sit in that book.",
  },
  {
    name: "Perch",
    hold: "The seat",
    body: "We host hummingbot-api on a machine you cannot log into. We never hold the money. Rent covers colo.",
  },
  {
    name: "If people opt in",
    hold: "Optional",
    body: "Friends can join a tape that already ticks. They hold a deposit, not the keys, and they leave without you. That is upside, not the job.",
  },
] as const;

export function Parties() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Who does what</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        You run the book. We rent the seat.
      </h2>
      <div className="mt-12 grid gap-px bg-hairline lg:grid-cols-3">
        {parties.map((party) => (
          <article key={party.name} className="bg-bg p-8">
            <p className="font-mono text-xs tracking-widest text-copper">
              {party.hold}
            </p>
            <h3 className="mt-4 font-serif text-3xl">{party.name}</h3>
            <p className="mt-4 text-[0.95rem] text-ink-muted">{party.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
