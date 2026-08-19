const steps = [
  {
    verb: "open_lease",
    title: "Lease the seat",
    body: "Curator is tenant. USDC bond, region, crank pubkey, expires_at. act fails if the lease is frozen, expired, or slashed. This is a performance bond, not LP capital.",
  },
  {
    verb: "open_vault",
    title: "Name the pool and fee",
    body: "One vault per lease this sprint. fee_bps is immutable. private is an allowlist of LP pubkeys. venue 0 is Meteora DLMM; the vault PDA is PositionV2.owner.",
  },
  {
    verb: "join / fund",
    title: "Own Deposit ticks first",
    body: "Curator capital is just another Deposit PDA. If private, allow_lp that pubkey first. A second wallet is upside proof, not the definition of the product.",
  },
  {
    verb: "start_lp_rebalancer",
    title: "Packaged controller only",
    body: "Cheap plane POST /executors/create or MCP start_lp_rebalancer with connector_name: meteora. No arbitrary .py on the Act box. No hashed controller registry this sprint.",
  },
  {
    verb: "patch (is_updatable)",
    title: "Live fields only",
    body: "Width, amounts, auto-close seconds. connector_name, pool, fee_bps, and private are not live-tweakable — that is a new vault, or withdraw then open_vault.",
  },
  {
    verb: "freeze / withdraw",
    title: "Halt is not recover",
    body: "Curator or operator freeze; next act fails on-chain. Each LP withdraws to their ATA with the crank offline. LPs do not freeze (griefing). Do not gate withdraw on the curator.",
  },
] as const;

export function Lifecycle() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Lifecycle</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        From open_lease to withdraw.
      </h1>
      <p className="measure mt-6 text-ink-muted">
        CRUD is API-shaped because there is no shell on the foothold. MCP is a
        client of that same API, not a third architecture. Spec:{" "}
        <code className="font-mono text-ink">ARCH.md</code>.
      </p>
      <ol className="mt-12 grid gap-0 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li key={step.verb} className="border-t border-hairline py-8 pr-8">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")} · {step.verb}
            </p>
            <h2 className="mt-3 text-lg">{step.title}</h2>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
