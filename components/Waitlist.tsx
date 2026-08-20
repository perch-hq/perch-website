"use client";

import { FormEvent, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { copy, type WaitlistRole } from "@/lib/copy";
import { site } from "@/lib/site";

const roleValues = new Set(copy.waitlist.roles.map((role) => role.value));

function parseRole(value: string | null): WaitlistRole {
  if (value && roleValues.has(value as WaitlistRole)) {
    return value as WaitlistRole;
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
    const title = `${copy.waitlist.issueTitle} · ${role}`;
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
          <p className="eyebrow">{copy.waitlist.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-snug tracking-tight sm:text-4xl">
            {copy.waitlist.h2}
          </h2>
          <p className="measure mt-6 leading-relaxed text-ink-muted">
            {copy.waitlist.lede}
          </p>
        </div>
        <form onSubmit={onSubmit} className="stage p-6 sm:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm">
              {copy.waitlist.fields.email}
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="border border-hairline bg-bg px-3 py-2 text-ink"
              />
            </label>
            <label className="grid gap-2 text-sm">
              {copy.waitlist.fields.role}
              <select
                name="role"
                defaultValue={defaultRole}
                className="border border-hairline bg-bg px-3 py-2 text-ink"
              >
                {copy.waitlist.roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              {copy.waitlist.fields.running}
              <textarea
                name="running"
                rows={3}
                placeholder={copy.waitlist.fields.runningPlaceholder}
                className="border border-hairline bg-bg px-3 py-2 text-ink placeholder:text-ink-muted"
              />
            </label>
            <button
              type="submit"
              className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
            >
              {copy.waitlist.submit}
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
            <p className="eyebrow">{copy.waitlist.eyebrow}</p>
            <h2 className="mt-4 text-3xl">{copy.waitlist.h2}</h2>
          </div>
        </section>
      }
    >
      <WaitlistForm />
    </Suspense>
  );
}
