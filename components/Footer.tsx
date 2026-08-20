import Link from "next/link";
import { Mark } from "@/components/Mark";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export function Footer({ memos = false }: { memos?: boolean }) {
  return (
    <footer className="relative overflow-hidden border-t border-hairline">
      <div className="site py-14">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-sm">
              <Mark className="size-6 text-copper" />
              {site.name}
            </Link>
            <p className="measure mt-6 text-sm leading-relaxed text-ink-muted">
              {copy.footer.legal}
            </p>
          </div>
          <nav aria-label="Footer site">
            <p className="font-mono text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
              {copy.footer.groups.site}
            </p>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <Link className="text-ink-muted transition-colors hover:text-ink" href={site.tape}>
                  {copy.footer.tapeLabel}
                </Link>
              </li>
              <li>
                <Link className="text-ink-muted transition-colors hover:text-ink" href={site.docs}>
                  {copy.footer.docs}
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Footer elsewhere">
            <p className="font-mono text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
              {copy.footer.groups.elsewhere}
            </p>
            <ul className="mt-5 grid gap-3 text-sm">
              {memos ? (
                <>
                  <li>
                    <a className="text-ink-muted transition-colors hover:text-ink" href={site.memo} rel="noreferrer">
                      {copy.footer.memo}
                    </a>
                  </li>
                  <li>
                    <a className="text-ink-muted transition-colors hover:text-ink" href={site.arch} rel="noreferrer">
                      {copy.footer.arch}
                    </a>
                  </li>
                  <li>
                    <a className="text-ink-muted transition-colors hover:text-ink" href={site.strategy} rel="noreferrer">
                      {copy.footer.strategy}
                    </a>
                  </li>
                </>
              ) : null}
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink" href={site.github} rel="noreferrer">
                  {copy.footer.github}
                </a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink" href="/llms.txt">
                  {copy.footer.llms}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div aria-hidden="true" className="site pointer-events-none -mb-6 sm:-mb-10">
        <p className="wordmark text-[26vw] sm:text-[19rem]">{site.name}</p>
      </div>
    </footer>
  );
}
