import { copy } from "@/lib/copy";

export function Console() {
  return (
    <aside aria-label={copy.console.label} className="stage overflow-hidden">
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <p className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-muted uppercase">
          {copy.console.region}
        </p>
        <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wide text-copper">
          <span className="size-1.5 rounded-full bg-copper" />
          {copy.console.status}
        </p>
      </div>

      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-hairline px-4 py-5 sm:border-b-0 sm:border-r">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-muted uppercase">
            {copy.console.agent.kicker}
          </p>
          <p className="mt-2 text-[0.95rem]">{copy.console.agent.title}</p>
          <p className="mt-1 text-sm text-ink-muted">{copy.console.agent.body}</p>
        </div>
        <div className="border-b border-hairline px-4 py-5">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-copper uppercase">
            {copy.console.hummingbot.kicker}
          </p>
          <p className="mt-2 text-[0.95rem]">{copy.console.hummingbot.title}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {copy.console.hummingbot.body}
          </p>
        </div>
      </div>

      <div className="border-t border-hairline bg-bg px-4 py-5">
        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-muted uppercase">
          {copy.console.vault.kicker}
        </p>
        <p className="mt-2 text-[0.95rem]">{copy.console.vault.title}</p>
        <p className="mt-1 text-sm text-ink-muted">{copy.console.vault.body}</p>
      </div>

      <dl className="grid grid-cols-2 border-t border-hairline">
        <div className="border-r border-hairline px-4 py-4">
          <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-muted uppercase">
            {copy.console.laptop.kicker}
          </dt>
          <dd className="mt-2 text-sm text-ink-muted">{copy.console.laptop.body}</dd>
        </div>
        <div className="px-4 py-4">
          <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-copper uppercase">
            {copy.console.perch.kicker}
          </dt>
          <dd className="mt-2 text-sm">{copy.console.perch.body}</dd>
        </div>
      </dl>
    </aside>
  );
}
