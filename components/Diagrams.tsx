const ink = "var(--ink)";
const muted = "var(--ink-muted)";
const hair = "var(--hairline)";
const raised = "var(--bg-raised)";
const bg = "var(--bg)";
const copper = "var(--copper)";

function Panel({
  x,
  y,
  w,
  h,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={raised}
      stroke={accent ? copper : hair}
      strokeWidth={accent ? 2 : 1}
    />
  );
}

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={bg}
        stroke={accent ? copper : hair}
        strokeWidth={accent ? 2 : 1}
      />
      <text
        x={x + 14}
        y={sub ? y + 22 : y + h / 2 + 5}
        fill={ink}
        fontSize={14}
        fontWeight={500}
      >
        {title}
      </text>
      {sub ? (
        <text x={x + 14} y={y + 42} fill={muted} fontSize={12}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Label({
  x,
  y,
  children,
  color = muted,
}: {
  x: number;
  y: number;
  children: string;
  color?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={color}
      fontSize={11}
      letterSpacing="0.12em"
      fontWeight={500}
    >
      {children}
    </text>
  );
}

export function SplitPlane() {
  return (
    <section className="site pb-20 sm:pb-28">
      <figure>
        <figcaption className="measure">
          <p className="eyebrow">The seat</p>
          <h1 className="mt-4 font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
            Cheap plane anywhere. Act plane cannot.
          </h1>
          <p className="mt-6 text-ink-muted">
            Condor, or another agent, thinks on the cheap plane. hummingbot-api
            plus the Gateway-shaped shim sit on AMS or FRA. The shim crank signs{" "}
            <code className="font-mono text-ink">vault.act</code>. Keys never sit
            on your machine and never inside the bot.
          </p>
        </figcaption>
        <div className="diagram-scroll mt-10">
          <svg
            viewBox="0 0 880 340"
            role="img"
            aria-labelledby="split-title split-desc"
            fontFamily="inherit"
          >
            <title id="split-title">
              Cheap plane thinks anywhere. Act plane sends from Amsterdam or
              Frankfurt.
            </title>
            <desc id="split-desc">
              You and Condor or another agent run anywhere without trading keys,
              connected by API only. Your own Deposit ticks first; other LPs are
              optional. On the Amsterdam or Frankfurt Act plane, hummingbot-api
              hands orders to the shim crank. Keys never leave that side.
            </desc>
            <Panel x={0} y={28} w={400} h={292} />
            <Label x={20} y={52}>
              ANYWHERE
            </Label>
            <Node
              x={20}
              y={72}
              w={360}
              h={56}
              title="You — own Deposit first"
              sub="LPs optional, after a tape exists"
            />
            <Node
              x={20}
              y={140}
              w={360}
              h={56}
              title="Condor or another agent"
              sub="Thinks. Never signs."
            />
            <Node
              x={20}
              y={208}
              w={360}
              h={80}
              title="No trading keys"
              sub="Keys stay on the seat"
            />

            <line
              x1={400}
              y1={100}
              x2={480}
              y2={100}
              stroke={ink}
              strokeWidth={1.5}
            />
            <polygon points="476,95 488,100 476,105" fill={ink} />
            <text
              x={440}
              y={88}
              fill={muted}
              fontSize={11}
              textAnchor="middle"
            >
              API only
            </text>

            <Panel x={480} y={28} w={400} h={292} accent />
            <Label x={500} y={52} color={copper}>
              ACT PLANE
            </Label>
            <Node
              x={500}
              y={72}
              w={360}
              h={56}
              title="hummingbot-api"
              sub="Places the orders"
            />
            <line
              x1={680}
              y1={128}
              x2={680}
              y2={148}
              stroke={copper}
              strokeWidth={1.5}
            />
            <Node
              x={500}
              y={148}
              w={360}
              h={56}
              title="Shim crank"
              sub="Signs vault.act · no Token approve"
              accent
            />
            <line
              x1={680}
              y1={204}
              x2={680}
              y2={224}
              stroke={copper}
              strokeWidth={1.5}
            />
            <Node
              x={500}
              y={224}
              w={360}
              h={64}
              title="Sends the trade"
              sub="Keys never leave this side"
            />
          </svg>
        </div>
      </figure>
    </section>
  );
}

export function VaultCustody() {
  return (
    <section className="site pb-20 sm:pb-28">
      <figure>
        <figcaption className="measure">
          <p className="eyebrow">Custody</p>
          <h2 className="mt-4 font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
            The vault holds the money. The crank only trades it.
          </h2>
          <p className="mt-6 text-ink-muted">
            We operate the shim crank, so inventory cannot live with us. The
            vault PDA is the lock. Withdrawals work when the seat is frozen and
            nobody is around to sign.
          </p>
        </figcaption>
        <div className="diagram-scroll mt-10">
          <svg
            viewBox="0 0 880 400"
            role="img"
            aria-labelledby="vault-title vault-desc"
            fontFamily="inherit"
          >
            <title id="vault-title">
              The vault holds the money. The shim crank only signs.
            </title>
            <desc id="vault-desc">
              No key ever goes on the machine. The vault PDA holds the tokens
              and the Meteora position. The shim crank signs vault.act only
              while the lease is live and unfrozen. Anyone with a Deposit can
              withdraw without the curator.
            </desc>

            <Node
              x={0}
              y={8}
              w={250}
              h={72}
              title="Curator"
              sub="Opens the vault · own Deposit ticks first"
            />
            <Node
              x={315}
              y={8}
              w={250}
              h={72}
              title="Lease, on-chain"
              sub="freeze stops vault.act"
            />
            <Node
              x={630}
              y={8}
              w={250}
              h={72}
              title="Shim crank"
              sub="Signs act · cannot Transfer out"
              accent
            />

            <line
              x1={125}
              y1={80}
              x2={125}
              y2={148}
              stroke={ink}
              strokeWidth={1.5}
            />
            <line
              x1={440}
              y1={80}
              x2={440}
              y2={148}
              stroke={muted}
              strokeWidth={1.5}
            />
            <line
              x1={755}
              y1={80}
              x2={755}
              y2={148}
              stroke={copper}
              strokeWidth={1.5}
            />
            <text x={133} y={118} fill={muted} fontSize={11}>
              open · freeze
            </text>
            <text x={448} y={118} fill={muted} fontSize={11}>
              seat must be live
            </text>
            <text x={628} y={118} fill={muted} fontSize={11}>
              signs the trade
            </text>

            <rect
              x={80}
              y={148}
              width={720}
              height={96}
              fill={raised}
              stroke={copper}
              strokeWidth={2}
            />
            <text x={220} y={180} fill={ink} fontSize={16} fontWeight={500}>
              The vault
            </text>
            <text x={220} y={204} fill={muted} fontSize={12}>
              Holds tokens and PositionV2. Each Deposit stays its owner’s.
            </text>
            <text x={220} y={224} fill={muted} fontSize={12}>
              Withdrawals work with the curator gone.
            </text>

            <line
              x1={440}
              y1={244}
              x2={440}
              y2={284}
              stroke={copper}
              strokeWidth={1.5}
            />
            <polygon points="435,280 440,292 445,280" fill={copper} />
            <text x={448} y={272} fill={muted} fontSize={11}>
              Only the market you named · your fee comes to you
            </text>

            <Node
              x={140}
              y={300}
              w={600}
              h={80}
              title="Meteora"
              sub="First market"
              accent
            />
          </svg>
        </div>
      </figure>
    </section>
  );
}
