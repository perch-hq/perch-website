/**
 * Customer English for perch.poroburu.com.
 *
 * Decisions: f26-perch/STRATEGY.md
 * Mechanism: f26-perch/ARCH.md
 * Colosseum slide: f26-perch/PERCH.md
 *
 * This file owns H1s, ledes, CTAs, and labels. Components import it. They do
 * not invent marketing strings. Do not compile STRATEGY refuse-lists into
 * slogans. Internals (crank, PDA, act, no-SSH, packaged controller) stay in
 * /docs. Legal (“not a fund”) is footer-only. Colosseum is footer-only.
 *
 * A heading plus its body must make sense if you screenshot only that block.
 * The next block adds a fact; it does not restate the last one in a new metaphor.
 */
export const copy = {
  meta: {
    tagline: "Hosted Hummingbot for Solana strategies.",
    description:
      "We run Hummingbot on a machine in Amsterdam or Frankfurt that nobody logs into — including you. Your agent stays where it already is. Your capital sits in a Solana vault we cannot drain.",
  },
  skip: "Skip to content",
  header: {
    product: "Product",
    how: "How it works",
    docs: "Docs",
    cta: "Request access",
    menu: "Menu",
  },
  hero: {
    badge: "Now seating design partners",
    h1: {
      lead: "Hosted Hummingbot for",
      accent: "Solana strategies.",
    },
    lede: "We run Hummingbot on a machine in Amsterdam or Frankfurt that nobody logs into — including you. Your agent stays where it already is. Your capital sits in a Solana vault we cannot drain. You get a white-glove book without standing up operations.",
    cta: "Request access",
    secondary: "How it works",
    after: {
      text: "Once your own book is live, people who trust it can add capital, pay the fee you set, and withdraw on their own.",
      link: "See an example receipt",
    },
  },
  console: {
    label: "How a book sits on Perch",
    region: "Perch · AMS/FRA",
    status: "Sending",
    agent: {
      kicker: "Agent",
      title: "The bot you already use",
      body: "It never holds a trading key.",
    },
    hummingbot: {
      kicker: "Hummingbot",
      title: "Sends from our machine",
      body: "No login.",
    },
    vault: {
      kicker: "Vault",
      title: "Holds the inventory on Solana",
      body: "Can trade the pool you named. Cannot send funds to us.",
    },
    laptop: {
      kicker: "Laptop",
      body: "Often too far from the leader",
    },
    perch: {
      kicker: "Perch",
      body: "Close enough for the trade to land",
    },
  },
  product: {
    eyebrow: "The product",
    h2: "What you get",
    items: [
      {
        title: "Hosted Hummingbot",
        body: "Use Condor or any other agent. We run Hummingbot. You do not run a second server, paste a key, or log into the box.",
      },
      {
        title: "A vault on Solana",
        body: "We operate the machine, so the money cannot live with us. The vault holds inventory, trades only the pool you named, and lets anyone who deposited withdraw without waiting on Perch.",
      },
      {
        title: "A book without a firm",
        body: "Start with your own capital. When that book is live, others can join it, pay the fee you set, and leave whenever they want — without a fund administrator.",
      },
    ],
  },
  how: {
    eyebrow: "How a book runs",
    h2: "From your agent to a live trade",
    steps: [
      {
        title: "Connect the agent you already use",
        body: "It keeps running where it is. It talks to Hummingbot on Perch. It never receives the keys.",
      },
      {
        title: "Deposit your own capital",
        body: "Open a vault, choose the pool, fund it yourself. The first live book is yours.",
      },
      {
        title: "Trades leave from Amsterdam or Frankfurt",
        body: "The same rebalance that misses from wifi can land from here. That distance is the product.",
      },
      {
        title: "Freeze on-chain. Withdraw anytime.",
        body: "One transaction stops the next trade. Anyone who deposited can send funds back to their wallet, even if we are offline.",
      },
    ],
  },
  trust: {
    eyebrow: "Trust",
    h2: "We host the bot. We cannot take the money.",
    lede: "On Solana, a hosted signer is custodial unless it is only allowed to trade. Perch’s vault can rebalance the pool you named. It cannot transfer to an address we choose.",
    cta: "How the vault works",
    inventory: {
      title: "Inventory",
      body: "Tokens and the position sit in the vault, not in our wallet.",
    },
    halt: {
      title: "Halt",
      body: "Freeze, and the next trade fails on Solana.",
    },
    leave: {
      title: "Leave",
      body: "Withdraw to your wallet even if Perch is gone.",
    },
  },
  waitlist: {
    eyebrow: "Design partners",
    h2: "If you already run a strategy, we will run Hummingbot.",
    lede: "First access is for people on Condor, Hummingbot, or a Meteora bot who are tired of two servers and a key in a file. Tell us what you run.",
    issueTitle: "Access request",
    fields: {
      email: "Email",
      role: "Role",
      running: "What you already run",
      runningPlaceholder: "Condor, Hummingbot, a Meteora bot…",
    },
    roles: [
      { value: "curator", label: "I run a strategy" },
      { value: "agent", label: "I build agents" },
      { value: "curious", label: "Just looking" },
    ],
    submit: "Request access",
  },
  footer: {
    legal:
      "Perch hosts Hummingbot. We are infrastructure, not an adviser and not a fund. Colosseum Fall 2026.",
    groups: {
      site: "Site",
      elsewhere: "Elsewhere",
    },
    tapeLabel: "Example receipt",
    docs: "Docs",
    github: "GitHub",
    memo: "Memo",
    arch: "Architecture",
    strategy: "Strategy",
    llms: "llms.txt",
  },
  tape: {
    title: "Example receipt",
    description:
      "One sample book: who runs it, where trades leave from, the fee, and whether people can leave.",
    eyebrow: "Receipt",
    caption: "Example receipt: landing, freeze, and leave",
    note: "On-chain trades prove a rebalance ran. Amsterdam versus wifi is the landing proof. This is one example, not a catalog.",
    fixture:
      "This page is a sample until the program is live. It is one receipt, not a list of vaults to shop.",
    access: "Request access",
    docs: "Read the docs",
    labels: {
      who: "Who runs this book",
      region: "Region",
      pool: "Pool",
      fee: "Fee",
      private: "Access",
      lastAct: "Last trade",
      landing: "Landing",
      frozen: "Frozen",
      leave: "Can people leave",
    },
    values: {
      who: "A person, not Perch",
      privateYes: "Invite only",
      privateNo: "Open",
      lastActNone: "None yet",
      landing:
        "Lands from Amsterdam. A laptop in Toronto often misses.",
      frozenYes: "Yes — the next trade fails",
      frozenNo: "No",
      leave:
        "Anyone who deposited can withdraw to their wallet, even if we are gone.",
    },
  },
} as const;

export type WaitlistRole = (typeof copy.waitlist.roles)[number]["value"];
