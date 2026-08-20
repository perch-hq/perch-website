export const docsNav = [
  {
    href: "/docs",
    label: "Overview",
    title: "The hosted seat",
    summary:
      "hummingbot-api on the perch. Vault PDA as inventory lock. Meteora is the first venue, not the company.",
  },
  {
    href: "/docs/how-it-works",
    label: "Lifecycle",
    title: "open_lease to withdraw",
    summary:
      "Lease, vault, packaged lp_rebalancer, live-updatable fields, freeze, withdraw.",
  },
  {
    href: "/docs/api",
    label: "API",
    title: "Cheap-plane API and MCP",
    summary:
      "Curator wallet signs vault ixs. Crank never in context. Packaged controller only.",
  },
  {
    href: "/docs/trust",
    label: "Trust",
    title: "Inventory, halt, bond",
    summary:
      "Vault PDA plus Deposit. freeze kills act. Honest ticks are a receipt stack, not TEE.",
  },
  {
    href: "/docs/seat",
    label: "The seat",
    title: "Cheap plane vs Act plane",
    summary:
      "Condor anywhere. hummingbot-api, shim crank, and Jet on AMS or FRA.",
  },
  {
    href: "/docs/compare",
    label: "Compare",
    title: "Compared with a protocol vault and a VPS",
    summary:
      "Deposit-and-forget CLMM is a different job. Helius plus SSH is this job without freeze or a PDA.",
  },
] as const;

export const docsFacts = [
  {
    title: "What you are building toward",
    body: "A person deploys a Hummingbot strategy without a second server, a pasted Gateway key, or Toronto slot-lag. User one is someone whose own deposit is in range.",
  },
  {
    title: "The seat",
    body: "hummingbot-api plus a Gateway-shaped CLMM shim on AMS or FRA. The shim prepends vault.act and sends via Jet. The tenant never gets a login.",
  },
  {
    title: "The trust lock",
    body: "Inventory sits in a vault PDA because we operate the crank. The PDA cannot Transfer out except the named fee skim. freeze kills act. Anyone with a Deposit withdraws without us.",
  },
  {
    title: "This sprint",
    body: "Packaged lp_rebalancer against Meteora DLMM. Meteora is the first VaultKind — a venue discriminant, not a company lock. Opt-in LP is what a tape can do later, not a second product.",
  },
] as const;
