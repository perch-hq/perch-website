const objects = [
  {
    title: "Inventory",
    body: "The vault program owns the tokens and the position. Each LP owns a deposit. We cannot send funds to an arbitrary address. The only extra destination is the fee you named, and only after a claim.",
  },
  {
    title: "Halt",
    body: "Freeze stops the next tick on-chain. You can freeze. We can freeze. LPs cannot — that would be griefing. Halt is not recover.",
  },
  {
    title: "Recover",
    body: "Each LP withdraws their share with the crank offline, the lease frozen, and the curator gone. Freeze-only while we still own the position traps the money. That is the bug we refuse.",
  },
] as const;

export function Trust() {
  return (
    <section id="trust" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">Trust</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        You never get a login. Keys never leave the seat. Funds are not ours.
      </h2>
      <p className="measure mt-6 text-ink-muted">
        No-SSH binds you, your LPs, and the model — not us. Theft-resistance is
        the vault program: the signer on the box cannot transfer anywhere.
        Honest ticks remain a contract. Presence of a transaction proves a
        tick; absence does not prove delay.
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
