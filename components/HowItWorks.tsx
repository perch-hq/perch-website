const steps = [
  {
    title: "Open a vault",
    body: "Rent a seat, choose the pool you want to trade, and set your fee. You set that rate once, so nobody gets repriced after they join.",
  },
  {
    title: "Fund it first",
    body: "Your own money goes in before anyone else’s. By the time you invite people, there is a real on-chain history to judge you on instead of a pitch.",
  },
  {
    title: "Invite people in",
    body: "Invite by wallet and keep it private, or leave it open to anyone. Either way the people who join get a share, not the keys.",
  },
  {
    title: "Trades leave from the seat",
    body: "Run your strategy wherever you like — laptop, cloud, an agent. The orders themselves go out from a machine in Amsterdam or Frankfurt, close to where they land.",
  },
  {
    title: "Freeze stops the trading",
    body: "One transaction and the next trade fails. No support ticket, no waiting on us, and no effect on anyone’s money.",
  },
  {
    title: "Anyone can leave",
    body: "Frozen seat, curator long gone: everyone can still withdraw their own share. Getting out never depends on us.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">How it works</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Open, fund, invite, trade, freeze, leave.
      </h1>
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
