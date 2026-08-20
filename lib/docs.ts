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
