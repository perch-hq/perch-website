import type { Metadata } from "next";
import Link from "next/link";
import { docsNav } from "@/lib/docs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description: site.description,
};

export default function DocsHome() {
  const pages = docsNav.filter((item) => item.href !== "/docs");

  return (
    <div className="site pb-20 sm:pb-28">
      <p className="eyebrow">Documentation</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Two doors. One vault. A seat we rent.
      </h1>
      <p className="measure mt-6 text-ink-muted">
        Deploy Condor — or another agent — against hummingbot-api on a sealed
        seat, or join a named curator’s tape. Both doors share the same vault.
        We never hold the money.
      </p>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
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
        notes. LPs join a{" "}
        <Link href={site.tape} className="text-ink hover:text-copper">
          named tape
        </Link>
        , not a ranked catalog. Agents start at{" "}
        <a className="text-ink hover:text-copper" href="/llms.txt">
          llms.txt
        </a>
        .
      </p>
    </div>
  );
}
