const parties = [
  {
    name: "Curator",
    hold: "The vault",
    body: "That is you. You open the vault, set the fee and decide who can join. Your own money sits in it on the same terms as everyone else’s, and you never get a login to the machine.",
  },
  {
    name: "Depositors",
    hold: "A share each",
    body: "They join a vault with a history they can check, and they can leave whenever they like — with or without you. What they hold is their share, not the keys.",
  },
  {
    name: "Perch",
    hold: "The seat",
    body: "We run the machine in Amsterdam or Frankfurt that your trades go out from. It can trade your vault and nothing else. We charge rent for that, not a slice of the returns.",
  },
] as const;

export function Parties() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Who does what</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        You run the vault. They hold a share. We rent the seat.
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
