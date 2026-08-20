import Link from "next/link";
import { Mark } from "@/components/Mark";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export function Footer({ memos = false }: { memos?: boolean }) {
  return (
    <footer>
      <div className="site border-t border-hairline py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-sm">
            <Mark className="size-6 text-copper" />
            {site.name}
          </Link>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
            <Link className="hover:text-ink" href={site.tape}>
              {copy.footer.tapeLabel}
            </Link>
            <Link className="hover:text-ink" href={site.docs}>
              {copy.footer.docs}
            </Link>
            {memos ? (
              <>
                <a className="hover:text-ink" href={site.memo} rel="noreferrer">
                  {copy.footer.memo}
                </a>
                <a className="hover:text-ink" href={site.arch} rel="noreferrer">
                  {copy.footer.arch}
                </a>
                <a className="hover:text-ink" href={site.strategy} rel="noreferrer">
                  {copy.footer.strategy}
                </a>
              </>
            ) : null}
            <a className="hover:text-ink" href={site.github} rel="noreferrer">
              {copy.footer.github}
            </a>
            <a className="hover:text-ink" href="/llms.txt">
              {copy.footer.llms}
            </a>
          </nav>
        </div>
        <p className="measure mt-10 text-sm leading-relaxed text-ink-muted">
          {copy.footer.legal}
        </p>
      </div>
    </footer>
  );
}
