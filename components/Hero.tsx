import { site } from "@/lib/site";

export function Seat() {
  return (
    <svg
      viewBox="0 0 320 400"
      role="img"
      aria-labelledby="seat-title seat-desc"
      className="h-auto w-full max-w-[22rem]"
    >
      <title id="seat-title">Sealed seat mark</title>
      <desc id="seat-desc">
        A copper chevron perched in a square on a rail, marked as seat 01 in
        Amsterdam: a sealed seat with no login, holding none of the money.
      </desc>
      <rect
        x="48"
        y="36"
        width="224"
        height="224"
        rx="8"
        fill="var(--bg-raised)"
        stroke="var(--hairline)"
      />
      <text
        x="68"
        y="64"
        fill="var(--ink-muted)"
        fontSize="11"
        letterSpacing="0.18em"
        fontFamily="ui-monospace, monospace"
      >
        01
      </text>
      <text
        x="228"
        y="240"
        fill="var(--copper)"
        fontSize="11"
        letterSpacing="0.18em"
        fontFamily="ui-monospace, monospace"
      >
        AMS
      </text>
      <path d="M160 96 204 184H116Z" fill="var(--copper)" />
      <path
        d="M40 292h240"
        stroke="var(--copper)"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <text
        x="160"
        y="328"
        textAnchor="middle"
        fill="var(--ink-muted)"
        fontSize="13"
      >
        Sealed seat · no login
      </text>
      <text
        x="160"
        y="352"
        textAnchor="middle"
        fill="var(--ink-muted)"
        fontSize="13"
      >
        We never hold the money
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(196,122,74,0.18),transparent_68%)]"
      />
      <div className="site grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8 lg:py-28">
        <div>
          <p className="eyebrow">Colosseum Fall 2026</p>
          <h1 className="mt-6 font-serif text-[2.65rem] leading-[1.12] tracking-tight sm:text-6xl sm:leading-[1.08] lg:text-[4.15rem]">
            Build a vault.
            <br />
            Charge a fee.
            <br />
            Stay private.
            <br />
            <em className="italic text-copper">Leave anytime.</em>
          </h1>
          <p className="measure mt-8 text-lg text-ink-muted">
            The vault is yours. You set the fee, you choose who gets in, and
            anyone can withdraw whenever they want. Perch only rents the seat
            your trades go out from — we never hold the money.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="border border-copper bg-copper px-4 py-2.5 text-sm text-bg transition-colors hover:bg-transparent hover:text-copper"
            >
              Request a seat
            </a>
            <a
              href={site.memo}
              rel="noreferrer"
              className="border border-hairline px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
            >
              Read the memo
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Seat />
        </div>
      </div>
    </section>
  );
}
