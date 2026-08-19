const objects = [
  {
    title: "Inventory",
    body: "Vault PDA owns tokens and, for venue 0, the Meteora PositionV2. Each LP — including the curator — holds a Deposit PDA. act CPI-signs named lb_clmm ixs only. The only extra Transfer is the fee_bps skim to a curator ATA named on the vault.",
  },
  {
    title: "Halt",
    body: "Curator or operator freeze. The next vault.act fails on the CPI, not as ToS. LPs do not freeze the vault. Freeze does not return inventory.",
  },
  {
    title: "Bond",
    body: "USDC locked on the lease. Extra-judicial: operator slashes or refunds. Permissionless refund after expires_at if not slashed. Performance bond, not LP capital.",
  },
] as const;

const receipts = [
  {
    title: "Solana txs",
    body: "Source of truth. Presence of a tx proves a tick. Absence does not prove we delayed versus the controller chose wait.",
  },
  {
    title: "Landing dashboard",
    body: "Colo versus Toronto first-block / slot lag. Demo beat, not a PnL claim versus Jump.",
  },
  {
    title: "Config hash",
    body: "sha256(controller_config) on the vault, optionally in an act memo. hummingbot-api snapshots are UX and untrusted without SSH.",
  },
] as const;

export function Trust() {
  return (
    <section id="trust" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">Trust</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Three objects. Receipts, not TEE.
      </h1>
      <p className="measure mt-6 text-ink-muted">
        No-SSH binds the curator, the LPs, and the LLM — not us. Theft-resistance
        is the vault PDA. Honest ticks are a contract plus a public receipt
        stack. Do not claim BAM, TDX, or CPI prove a rebalance was non-toxic.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {objects.map((item) => (
          <article key={item.title}>
            <h2 className="border-t border-copper pt-5 font-serif text-2xl">
              {item.title}
            </h2>
            <p className="mt-4 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-16 max-w-2xl font-serif text-2xl">Receipt stack</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-3">
        {receipts.map((item) => (
          <article key={item.title} className="border-t border-hairline pt-5">
            <h3 className="text-lg">{item.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
