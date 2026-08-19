import Link from "next/link";
import { Mark } from "@/components/Mark";
import { site } from "@/lib/site";

export function Footer({ memos = false }: { memos?: boolean }) {
  return (
    <footer>
      <div className="site border-t border-hairline py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-sm">
            <Mark className="size-6 text-copper" />
            Perch
          </Link>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
            <Link className="hover:text-ink" href={site.docs}>
              Docs
            </Link>
            {memos ? (
              <>
                <a className="hover:text-ink" href={site.memo} rel="noreferrer">
                  Memo
                </a>
                <a className="hover:text-ink" href={site.arch} rel="noreferrer">
                  Architecture
                </a>
                <a className="hover:text-ink" href={site.strategy} rel="noreferrer">
                  Strategy
                </a>
              </>
            ) : null}
            <a className="hover:text-ink" href={site.github} rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-ink" href="/llms.txt">
              llms.txt
            </a>
          </nav>
        </div>
        <p className="measure mt-10 text-sm text-ink-muted">
          Perch is infrastructure, not an adviser and not a fund. Every vault
          belongs to the curator who opened it, not to us. Colosseum Fall 2026.
        </p>
      </div>
    </footer>
  );
}
