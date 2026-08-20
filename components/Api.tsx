const allowed = [
  {
    verb: "open_lease / open_vault / allow_lp",
    who: "Curator wallet signs",
    body: "Lease tenant, named pool, immutable fee_bps, optional private allowlist. MCP does not hold the crank or any owner key.",
  },
  {
    verb: "join / fund / withdraw",
    who: "LP wallet signs",
    body: "Deposit PDA. Curator’s own capital is the same instruction. withdraw works frozen, crank offline, curator absent.",
  },
  {
    verb: "start_lp_rebalancer / patch_rebalancer",
    who: "Cheap-plane API",
    body: "Packaged controller only. patch is Pydantic is_updatable fields. connector_name and pool are not live-tweakable.",
  },
  {
    verb: "freeze",
    who: "Curator or operator",
    body: "Next act fails on-chain. LPs do not freeze. slash stays operator-only and is not an MCP tool this sprint.",
  },
  {
    verb: "lease_status / landing_receipts",
    who: "Read-only",
    body: "On-chain lease plus colo versus wifi slot lag. lphistory is UX and untrusted without SSH.",
  },
] as const;

const refuse = [
  "Paste a private key or put the crank in MCP context",
  "SSH the Act box, or upload controller .py onto it",
  "execute-swap / Jupiter / Titan inside vault.act",
  "Live fee_bps changes on existing LPs",
  "Slash from an agent session",
] as const;

export function Api() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">API</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Cheap-plane API. MCP is a client of it.
      </h1>
      <p className="measure mt-6 text-ink-muted">
        Discover{" "}
        <a className="text-ink hover:text-copper" href="/llms.txt">
          llms.txt
        </a>
        . Drive hummingbot-api and the vault ixs from anywhere the brain lives.
        Never hold the crank. This sprint the only controller that may tick is
        packaged <code className="font-mono text-ink">lp_rebalancer</code>.
      </p>
      <ul className="mt-12 grid gap-10">
        {allowed.map((item) => (
          <li key={item.verb} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {item.who}
            </p>
            <h2 className="mt-3 font-serif text-2xl">
              <code className="font-mono text-[1.05rem]">{item.verb}</code>
            </h2>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-16 font-serif text-2xl">Refuse</h2>
      <ul className="mt-6 grid gap-3 text-[0.95rem] text-ink-muted">
        {refuse.map((item) => (
          <li key={item} className="border-l border-copper pl-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
