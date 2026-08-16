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
        <figcaption className="measure text-[1.125rem] leading-relaxed">
          They run Condor anywhere, or subscribe to our instance and the LLM
          upsell. We host hummingbot-api on the Act box. The model never sits
          on colo, and trading keys never sit on the cheap plane.
        </figcaption>
        <div className="diagram-scroll mt-10">
          <svg
            viewBox="0 0 880 340"
            role="img"
            aria-labelledby="split-title split-desc"
            fontFamily="inherit"
          >
            <title id="split-title">Split plane: think anywhere, sign from colo</title>
            <desc id="split-desc">
              Condor and the LLM run anywhere without trading keys, connected
              by Tailscale to hummingbot-api only. On the Amsterdam or Frankfurt
              seat, hummingbot-api talks to a Gateway-shaped shim whose crank
              signs vault.act, then Jet sends to the leader TPU. Keys never
              leave that side.
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
              title="Condor"
              sub="Orient and decide"
            />
            <Node
              x={20}
              y={140}
              w={360}
              h={56}
              title="LLM"
              sub="Credits upsell · no Act keys"
            />
            <Node
              x={20}
              y={208}
              w={360}
              h={80}
              title="No trading keys"
              sub="If keys are here, the claim is false"
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
              Tailscale · API only
            </text>

            <Panel x={480} y={28} w={400} h={292} accent />
            <Label x={500} y={52} color={copper}>
              AMS / FRA
            </Label>
            <Node
              x={500}
              y={72}
              w={360}
              h={56}
              title="hummingbot-api"
              sub="Deterministic ticks"
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
              title="Shim"
              sub="Crank signs vault.act"
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
              title="Jet → leader TPU"
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
        <figcaption className="measure text-[1.125rem] leading-relaxed">
          Solana programs protect the client. The vault PDA owns the tokens and
          the Meteora position. Stock gateway connect is out of scope: that key
          would own the LP.
        </figcaption>
        <div className="diagram-scroll mt-10">
          <svg
            viewBox="0 0 880 400"
            role="img"
            aria-labelledby="vault-title vault-desc"
            fontFamily="inherit"
          >
            <title id="vault-title">
              Three objects: lease bond, crank, inventory
            </title>
            <desc id="vault-desc">
              The customer is vault authority and never puts that key on the
              box. The vault PDA owns the token accounts and the Meteora
              position. The crank signs vault.act only while the lease is live
              and unfrozen, and may CPI into four allowlisted CLMM instructions.
              Jupiter is rejected. Owner withdraw returns inventory with the
              crank offline.
            </desc>

            <Node
              x={0}
              y={8}
              w={250}
              h={72}
              title="Customer authority"
              sub="Never on the box"
            />
            <Node
              x={315}
              y={8}
              w={250}
              h={72}
              title="Lease · USDC bond"
              sub="Freeze stops act"
            />
            <Node
              x={630}
              y={8}
              w={250}
              h={72}
              title="Crank"
              sub="Foothold · no Token approve"
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
              fund · freeze · withdraw
            </text>
            <text x={448} y={118} fill={muted} fontSize={11}>
              lease must be live
            </text>
            <text x={628} y={118} fill={muted} fontSize={11}>
              signs vault.act
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
              Vault PDA
            </text>
            <text x={220} y={204} fill={muted} fontSize={12}>
              Owns ATAs and PositionV2. Owner is the PDA, not the crank.
            </text>
            <text x={220} y={224} fill={muted} fontSize={12}>
              withdraw works with the crank offline.
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
            <text
              x={448}
              y={272}
              fill={muted}
              fontSize={11}
            >
              CPI allowlist · Jupiter rejected
            </text>

            <Node
              x={140}
              y={300}
              w={600}
              h={80}
              title="Meteora CLMM"
              sub="add_liquidity2 · remove_liquidity2 · rebalance_liquidity · claim_fee2"
              accent
            />
          </svg>
        </div>
      </figure>
    </section>
  );
}
