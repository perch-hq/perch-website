export const demoTape = {
  slug: "demo",
  name: "Demo tape",
  curator: "A person, not Perch",
  region: "AMS",
  pool: "Meteora SOL–USDC",
  feeBps: 50,
  private: false,
  frozen: false,
  lastActSlot: null as number | null,
  landing: {
    colo: "Lands from the Amsterdam seat",
    wifi: "A Toronto laptop misses the slot",
  },
  leave: "Anyone who deposited can withdraw without the curator and without us.",
  status: "Fixture until the program ticks. Join is the same verb as on-chain join.",
} as const;
