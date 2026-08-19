export function Compare() {
  return (
    <section className="site pb-20 sm:pb-28">
      <p className="eyebrow">The alternatives</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        Deposit in a protocol vault and it is not yours. Rent a server and the
        keys are.
      </h2>
      <div className="mt-10 overflow-x-auto">
        <table className="proof-table min-w-[44rem]">
          <caption className="sr-only">
            Protocol vaults and a rented server compared with Perch
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">Compared</span>
              </th>
              <th scope="col">Protocol vault</th>
              <th scope="col">Rented server</th>
              <th scope="col">Perch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Whose vault it is</td>
              <td>The protocol’s</td>
              <td>Yours, and so are the keys</td>
              <td>Yours. We only rent the seat.</td>
            </tr>
            <tr>
              <td>Who can join</td>
              <td>Anyone</td>
              <td>Whoever is in the group chat</td>
              <td>The wallets you invite</td>
            </tr>
            <tr>
              <td>Fee to you</td>
              <td>None</td>
              <td>Whatever you can invoice</td>
              <td>Your rate, all of it</td>
            </tr>
            <tr>
              <td>Login to the machine</td>
              <td>—</td>
              <td>Yes, and it can be leaked</td>
              <td>None to leak</td>
            </tr>
            <tr>
              <td>Stopping the trading</td>
              <td>The operator closes it</td>
              <td>Power it off and hope</td>
              <td>One transaction and it stops</td>
            </tr>
            <tr>
              <td>Getting out if it is abandoned</td>
              <td>Wait for the operator</td>
              <td>Ask whoever has the keys</td>
              <td>Withdraw on your own</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
