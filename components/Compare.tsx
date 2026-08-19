export function Compare() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">Not this</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        If a VPS plus SSH plus Stripe matches this, we have no reason to exist.
      </h2>
      <div className="mt-10 overflow-x-auto">
        <table className="proof-table min-w-[44rem]">
          <caption className="sr-only">
            Protocol vaults and a rented VPS versus Perch
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
              <td>You are the curator</td>
              <td>No. The protocol is.</td>
              <td>Yes, with a key on the box</td>
              <td>Yes. We are not the desk.</td>
            </tr>
            <tr>
              <td>Private set you control</td>
              <td>No</td>
              <td>A group chat</td>
              <td>On-chain allowlist</td>
            </tr>
            <tr>
              <td>Fee to you</td>
              <td>No</td>
              <td>If you invoice</td>
              <td>Named fee, 100% yours</td>
            </tr>
            <tr>
              <td>Login</td>
              <td>—</td>
              <td>SSH</td>
              <td>No shell</td>
            </tr>
            <tr>
              <td>Freeze</td>
              <td>Desk shuts the vault</td>
              <td>ToS, or power off the VM</td>
              <td>Next tick fails on-chain</td>
            </tr>
            <tr>
              <td>Leave if the operator stops</td>
              <td>Wait on the desk</td>
              <td>Ask whoever has the key</td>
              <td>Each LP withdraws without us</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
