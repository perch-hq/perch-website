const parties = [
  {
    name: "Curator",
    hold: "The vault",
    body: "You open it, set the fee, and may keep it private. Your own capital is just another deposit. You never get a login.",
  },
  {
    name: "LP",
    hold: "A deposit",
    body: "You opt in after a tape exists. You can leave without the curator and without us. You do not get a seat.",
  },
  {
    name: "Perch",
    hold: "The seat",
    body: "We rent the colocated box and operate the signer on it. We cannot transfer inventory out. We do not take LP yield.",
  },
] as const;

export function Parties() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Three parties</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Do not collapse them into one button.
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
