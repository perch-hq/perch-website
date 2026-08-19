import type { Metadata } from "next";
import Link from "next/link";
import { docsNav } from "@/lib/docs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Sealed Act plane: hummingbot-api on the perch, vault PDA as inventory lock. Meteora is the first VaultKind, not the company.",
};

const facts = [
  {
    title: "Job",
    body: "Deploy a Hummingbot strategy without a second server, a pasted Gateway key, or Toronto slot-lag. User one is a person whose own Deposit ticks.",
  },
  {
    title: "Act plane",
    body: "hummingbot-api plus a Gateway-shaped CLMM shim on AMS or FRA. The shim prepends vault.act and sends via Jet. Tenant never gets a login.",
  },
  {
    title: "Trust lock",
    body: "Inventory sits in a vault PDA because we operate the crank. The PDA cannot Transfer out except the named fee skim. freeze kills act. Anyone with a Deposit withdraws without us.",
  },
  {
    title: "Wedge",
    body: "Packaged lp_rebalancer against Meteora DLMM this sprint. Meteora is the first VaultKind — a venue discriminant, not a company lock. Opt-in LP is upside after a tape exists.",
  },
] as const;

export default function DocsHome() {
  const pages = docsNav.filter((item) => item.href !== "/docs");

  return (
    <div className="site pb-20 sm:pb-28">
      <p className="eyebrow">Documentation</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Sealed Act plane. Vault as the lock.
      </h1>
      <p className="measure mt-6 text-ink-muted">
        Point Condor — or another agent — at hummingbot-api on the perch. We
        rent the seat. We never hold the money. This is not two products, and
        it is not a yield catalog.
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {facts.map((fact, i) => (
          <article key={fact.title} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-serif text-2xl">{fact.title}</h2>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{fact.body}</p>
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
      <p className="measure mt-16 text-sm text-ink-muted">
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
