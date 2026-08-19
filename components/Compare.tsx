export function Compare() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">The alternatives</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Kamino is a different job. A VPS is this job without the lock.
      </h2>
      <div className="mt-10 overflow-x-auto">
        <table className="proof-table min-w-[44rem]">
          <caption className="sr-only">
            Protocol vaults, Helius plus a VPS plus SSH, and Perch
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Compared</span>
              </th>
              <th scope="col">Protocol vault</th>
              <th scope="col">Helius + VPS + SSH</th>
              <th scope="col">Perch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Job</td>
              <td>Deposit-and-forget CLMM</td>
              <td>Run your Hummingbot book</td>
              <td>Run your Hummingbot book</td>
            </tr>
            <tr>
              <td>Who runs the book</td>
              <td>The protocol desk</td>
              <td>You, with a shell</td>
              <td>You. No shell.</td>
            </tr>
            <tr>
              <td>Login to the machine</td>
              <td>—</td>
              <td>Yes, and the Gateway key can leak</td>
              <td>None to leak</td>
            </tr>
            <tr>
              <td>Inventory</td>
              <td>Share of a pooled vault</td>
              <td>Wallet the Gateway key owns</td>
              <td>Vault PDA; each LP a Deposit</td>
            </tr>
            <tr>
              <td>Stopping the trading</td>
              <td>Operator closes it</td>
              <td>Power off, or ToS</td>
              <td>freeze; next act fails on-chain</td>
            </tr>
            <tr>
              <td>Leave if it is abandoned</td>
              <td>Wait for the operator</td>
              <td>Ask whoever has the keys</td>
              <td>withdraw without us</td>
            </tr>
            <tr>
              <td>What they take</td>
              <td>Manager cut of LP yield</td>
              <td>RPC + VPS invoice</td>
              <td>Rent covers colo; fee share if the book performs, then rent can be waived</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="measure mt-8 text-sm text-ink-muted">
        Matching Kamino APY is not the falsifier. Matching no-shell, freeze-gated
        act, PDA inventory, and withdraw on a Frankfurt VPS with SSH is.
      </p>
    </section>
  );
}
