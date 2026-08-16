export function Capability() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="measure text-[1.125rem] leading-relaxed">
        Our crank can only execute delegated instructions. Their key is never
        on the box. Freeze stops the next{" "}
        <code className="font-mono text-[0.95em]">act</code>; it does not
        return inventory.
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="proof-table min-w-[36rem]">
          <caption className="sr-only">
            What the crank can do versus what the vault authority can do
          </caption>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Crank · our key on the box</th>
              <th scope="col">Authority · their key, never on the box</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rebalance named pool</td>
              <td>
                Yes, via <code>vault.act</code> while the lease is live
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>Transfer anywhere</td>
              <td>No</td>
              <td>Their wallet, not through the crank</td>
            </tr>
            <tr>
              <td>Freeze lease</td>
              <td>Yes</td>
              <td>Yes. Next <code>act</code> fails. Not a withdrawal.</td>
            </tr>
            <tr>
              <td>Withdraw inventory</td>
              <td>No</td>
              <td>Yes, with the crank offline</td>
            </tr>
            <tr>
              <td>Change owner</td>
              <td>No</td>
              <td>The PDA is the owner</td>
            </tr>
            <tr>
              <td>SSH the box</td>
              <td>We operate it</td>
              <td>Denied</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Incumbent() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="measure text-[1.125rem] leading-relaxed">
        A Frankfurt VPS with SSH and a Stripe hold is not this product. If
        freeze is a terms-of-service clause, we still own the wallet.
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="proof-table min-w-[36rem]">
          <caption className="sr-only">
            Helius plus a VPS plus SSH plus Stripe versus Perch
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Compared</span>
              </th>
              <th scope="col">Helius + FRA VPS + SSH + Stripe</th>
              <th scope="col">Perch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Login</td>
              <td>SSH</td>
              <td>No shell</td>
            </tr>
            <tr>
              <td>Freeze</td>
              <td>ToS, or power off the VM</td>
              <td>
                <code>vault.act</code> fails on-chain
              </td>
            </tr>
            <tr>
              <td>Who owns the LP</td>
              <td>The operator, if they pasted a key</td>
              <td>The vault PDA</td>
            </tr>
            <tr>
              <td>Recover inventory</td>
              <td>Ask us</td>
              <td>Owner withdraws without us</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Adoption() {
  return (
    <section className="site pb-16 sm:pb-24">
      <p className="measure text-[1.125rem] leading-relaxed">
        User 1 already gets the full product. Adoption is three design partners
        from Condor and Botcamp, then public landing receipts — not a threshold
        of users before the seat works.
      </p>
    </section>
  );
}
