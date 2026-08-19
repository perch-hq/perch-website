import Link from "next/link";
import { demoTape } from "@/lib/tape";

const rows = [
  { label: "Whose vault", value: demoTape.curator },
  { label: "Region", value: demoTape.region },
  { label: "Pool", value: demoTape.pool },
  { label: "Fee to the curator", value: `${demoTape.feeBps} bps, immutable` },
  { label: "Private", value: demoTape.private ? "Invite only" : "This demo tape is joinable" },
  { label: "Last act slot", value: demoTape.lastActSlot ?? "None yet — fixture" },
  { label: "Landing", value: `${demoTape.landing.colo}. ${demoTape.landing.wifi}.` },
  { label: "Frozen", value: demoTape.frozen ? "Yes — the next tick fails" : "No" },
  { label: "Leave", value: demoTape.leave },
] as const;

export function Tape() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Named vault</p>
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
        Compare that story to a protocol vault and a rented server in the{" "}
        <Link href="/docs/compare" className="text-ink hover:text-copper">
          docs
        </Link>
        . There is no APY ranking here.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/?role=lp#waitlist"
          className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
        >
          Request to join
        </Link>
        <Link
          href="/?role=lp#waitlist"
          className="border border-hairline px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          Withdraw when it is live
        </Link>
      </div>
      <p className="measure mt-8 text-sm text-ink-muted">
        On-chain <code className="font-mono text-ink">join</code> and{" "}
        <code className="font-mono text-ink">withdraw</code> are the same verbs
        as MCP. Until the program ticks, both buttons open the waitlist. Private
        vaults stay invite-only.
      </p>
      <p className="mt-10 text-sm text-ink-muted">
        Want the seat instead?{" "}
        <Link href="/?role=curator#waitlist" className="text-ink hover:text-copper">
          Request a seat
        </Link>
        .
      </p>
    </section>
  );
}
