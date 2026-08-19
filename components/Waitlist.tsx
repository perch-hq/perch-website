"use client";

import { FormEvent, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

const roles = [
  { value: "curator", label: "I run a strategy" },
  { value: "agent", label: "I build agents" },
  { value: "curious", label: "Just looking" },
] as const;

type Role = (typeof roles)[number]["value"];

function parseRole(value: string | null): Role {
  if (value === "agent" || value === "curious") {
    return value;
  }
  return "curator";
}

function WaitlistForm() {
  const params = useSearchParams();
  const defaultRole = useMemo(
    () => parseRole(params.get("role")),
    [params],
  );

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
            Ask for a seat.
          </h2>
          <p className="measure mt-6 text-ink-muted">
            Seats are for people who already run Condor, hummingbot-api, or
            another LP agent, and bounced on two servers plus a pasted key. A
            named tape is proof that ticks landed — not a catalog to shop.
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
                defaultValue={defaultRole}
                className="border border-hairline bg-bg px-3 py-2 text-ink"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              What you already run
              <textarea
                name="running"
                rows={3}
                placeholder="Condor, hummingbot-api, a Meteora bot…"
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

export function Waitlist() {
  return (
    <Suspense
      fallback={
        <section id="waitlist" className="scroll-mt-20 border-t border-hairline">
          <div className="site py-20 sm:py-28">
            <p className="eyebrow">Design partners</p>
            <h2 className="mt-4 font-serif text-3xl">Ask for a seat.</h2>
          </div>
        </section>
      }
    >
      <WaitlistForm />
    </Suspense>
  );
}
