"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";

export function Waitlist() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const role = String(data.get("role") ?? "curious");
    const running = String(data.get("running") ?? "").trim() || "—";
    const title = `Seat request · ${role}`;
    const body = [
      `**Email:** ${email}`,
      `**Role:** ${role}`,
      `**Already running:** ${running}`,
    ].join("\n");
    const url = `${site.seatIssue}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- GitHub issues, not a Next route
    window.location.href = url;
  }

  return (
    <section id="waitlist" className="scroll-mt-20 border-t border-hairline">
      <div className="site grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="eyebrow">Design partners</p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
            Isolation capacity is the brake. We are not filling a waitlist
            token.
          </h2>
          <p className="measure mt-6 text-ink-muted">
            User 1 is a curator with one opt-in LP. If you already run a
            Meteora book — or an agent that still pastes a key — request a
            seat. This opens a GitHub issue. We will not blitzscale tenants
            onto one box.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="border border-hairline bg-bg-raised p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="border border-hairline bg-bg px-3 py-2 text-ink"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Role
              <select
                name="role"
                defaultValue="curator"
                className="border border-hairline bg-bg px-3 py-2 text-ink"
              >
                <option value="curator">Curator — I want to open a vault</option>
                <option value="lp">LP — I want to opt in</option>
                <option value="agent">Agent builder</option>
                <option value="curious">Just looking</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              What you already run
              <textarea
                name="running"
                rows={3}
                placeholder="Meteora bot, Condor, a thin public vault…"
                className="border border-hairline bg-bg px-3 py-2 text-ink placeholder:text-ink-muted"
              />
            </label>
            <button
              type="submit"
              className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
            >
              Request a seat
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
