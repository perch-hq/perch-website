import type { Metadata } from "next";
import Link from "next/link";
import { docsNav } from "@/lib/docs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Builder notes for hosted Hummingbot on Perch: the seat, the vault trust lock, lifecycle verbs, and the receipt stack.",
};

const facts = [
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

export default function DocsHome() {
  const pages = docsNav.filter((item) => item.href !== "/docs");

  return (
    <div className="site pb-20 sm:pb-28">
      <p className="eyebrow">Documentation</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Mechanism for the hosted seat.
      </h1>
      <p className="measure mt-6 leading-relaxed text-ink-muted">
        The landing page is the offer. These pages are how it is true:
        hummingbot-api on the perch, a vault that holds inventory because we
        operate the signer, freeze and withdraw on-chain. Meteora is the first
        venue, not the company.
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {facts.map((fact, i) => (
          <article key={fact.title} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{fact.title}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{fact.body}</p>
          </article>
        ))}
      </div>
      <ul className="mt-16 grid gap-10 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.href} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {page.label}
            </p>
            <h2 className="mt-3 font-serif text-2xl">
              <Link href={page.href} className="hover:text-copper">
                {page.title}
              </Link>
            </h2>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{page.summary}</p>
          </li>
        ))}
      </ul>
      <p className="measure mt-16 text-sm leading-relaxed text-ink-muted">
        Program and shim internals stay in the{" "}
        <a className="text-ink hover:text-copper" href={site.memo} rel="noreferrer">
          memo
        </a>
        ,{" "}
        <a className="text-ink hover:text-copper" href={site.arch} rel="noreferrer">
          architecture
        </a>
        , and{" "}
        <a className="text-ink hover:text-copper" href={site.strategy} rel="noreferrer">
          strategy
        </a>{" "}
        notes. Agents start at{" "}
        <a className="text-ink hover:text-copper" href="/llms.txt">
          llms.txt
        </a>
        . A{" "}
        <Link href={site.tape} className="text-ink hover:text-copper">
          named tape
        </Link>{" "}
        is a receipt, not a ranked catalog.
      </p>
    </div>
  );
}
