import Link from "next/link";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";
import { demoTape } from "@/lib/tape";

export function Tape() {
  const rows = [
    { label: copy.tape.labels.who, value: copy.tape.values.who },
    { label: copy.tape.labels.region, value: demoTape.region },
    { label: copy.tape.labels.pool, value: demoTape.pool },
    {
      label: copy.tape.labels.fee,
      value: `${demoTape.feeBps} bps`,
    },
    {
      label: copy.tape.labels.private,
      value: demoTape.private
        ? copy.tape.values.privateYes
        : copy.tape.values.privateNo,
    },
    {
      label: copy.tape.labels.lastAct,
      value: demoTape.lastActSlot ?? copy.tape.values.lastActNone,
    },
    { label: copy.tape.labels.landing, value: copy.tape.values.landing },
    {
      label: copy.tape.labels.frozen,
      value: demoTape.frozen
        ? copy.tape.values.frozenYes
        : copy.tape.values.frozenNo,
    },
    { label: copy.tape.labels.leave, value: copy.tape.values.leave },
  ] as const;

  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">{copy.tape.eyebrow}</p>
      <h1 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        {copy.tape.title}
      </h1>
      <p className="measure mt-6 text-ink-muted">{copy.tape.fixture}</p>
      <table className="proof-table mt-12">
        <caption className="sr-only">{copy.tape.caption}</caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="measure mt-8 text-sm text-ink-muted">{copy.tape.note}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/#waitlist"
          className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
        >
          {copy.tape.access}
        </Link>
        <Link
          href={site.docs}
          className="border border-hairline px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          {copy.tape.docs}
        </Link>
      </div>
    </section>
  );
}
