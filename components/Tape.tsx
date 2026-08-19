import Link from "next/link";
import { demoTape } from "@/lib/tape";
import { site } from "@/lib/site";

const rows = [
  { label: "Whose vault", value: demoTape.curator },
  { label: "Region", value: demoTape.region },
  { label: "Pool", value: demoTape.pool },
  { label: "Fee to the curator", value: `${demoTape.feeBps} bps, immutable` },
  { label: "Private", value: demoTape.private ? "Invite only" : "Open — fixture" },
  { label: "Last act slot", value: demoTape.lastActSlot ?? "None yet — fixture" },
  { label: "Landing", value: `${demoTape.landing.colo}. ${demoTape.landing.wifi}.` },
  { label: "Frozen", value: demoTape.frozen ? "Yes — the next tick fails" : "No" },
  { label: "Leave", value: demoTape.leave },
] as const;

export function Tape() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Receipt</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        {demoTape.name}
      </h1>
      <p className="measure mt-6 text-ink-muted">{demoTape.status}</p>
      <table className="proof-table mt-12">
        <caption className="sr-only">
          Demo tape: ticks, fee, landing, freeze, and leave
        </caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="measure mt-8 text-sm text-ink-muted">
        Presence of an on-chain{" "}
        <code className="font-mono text-ink">act</code> proves a tick. Colo
        versus wifi is the landing receipt. This is one named tape, not a
        catalog. Compare the job in the{" "}
        <Link href="/docs/compare" className="text-ink hover:text-copper">
          docs
        </Link>
        .
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/#waitlist"
          className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
        >
          Request a seat
        </Link>
        <Link
          href={site.docs}
          className="border border-hairline px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          Read the docs
        </Link>
      </div>
      <p className="measure mt-8 text-sm text-ink-muted">
        On-chain <code className="font-mono text-ink">join</code> and{" "}
        <code className="font-mono text-ink">withdraw</code> are the same verbs
        as MCP. Until the program ticks, this page is a fixture of the six demo
        beats — not a place to shop vaults.
      </p>
    </section>
  );
}
