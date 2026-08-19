const steps = [
  {
    title: "Open a vault",
    body: "You lease a sealed seat, set a fee, and name the pool. The fee does not change later on people who already joined.",
  },
  {
    title: "Fund it first",
    body: "Your own deposit ticks first. A tape exists before anyone else is invited. That tape is on-chain, not a pitch deck.",
  },
  {
    title: "Allow people in",
    body: "Keep it private and allowlist a pubkey. A wallet that is not on the list fails. Or leave it public. LPs do not get a seat.",
  },
  {
    title: "Ticks land from colo",
    body: "The brain can live anywhere. The hands cannot. Amsterdam or Frankfurt sends. Toronto wifi is the comparison, not Jump.",
  },
  {
    title: "Freeze stops signing",
    body: "An on-chain freeze kills the next tick. It is not a terms-of-service clause, and it is not a withdrawal.",
  },
  {
    title: "Anyone can leave",
    body: "Each LP withdraws their share with the curator gone and the seat frozen. If they cannot, the abandonment claim is false.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">How it works</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Six beats. Same story every time.
      </h2>
      <ol className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="border-t border-hairline py-8 pr-8 sm:border-hairline"
          >
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg">{step.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
