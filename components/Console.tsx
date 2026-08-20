"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";

// "Confirmed" is a UI state token (the other half of the illustrative
// send → confirm cycle), not marketing copy, so it lives here rather than
// in lib/copy.ts. The idle state comes from copy.console.status.
const CONFIRMED = "Confirmed";
const CYCLE_MS = 5200;

export function Console() {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setConfirmed((value) => !value);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside
      aria-label={copy.console.label}
      className="stage console-enter overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-hairline-strong" />
            <span className="size-2 rounded-full bg-hairline-strong" />
            <span className="size-2 rounded-full bg-copper/70" />
          </div>
          <p className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-muted uppercase">
            {copy.console.region}
          </p>
        </div>
        <p
          className={`flex items-center gap-2 font-mono text-[0.7rem] tracking-wide transition-colors duration-500 ${
            confirmed ? "text-sage" : "text-copper"
          }`}
        >
          <span
            aria-hidden="true"
            className="status-dot size-1.5 rounded-full bg-copper"
            data-state={confirmed ? "confirmed" : "sending"}
          />
          {confirmed ? CONFIRMED : copy.console.status}
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
