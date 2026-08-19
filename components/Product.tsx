const pieces = [
  {
    title: "You run the book",
    body: "Point Condor or another agent at hummingbot-api on the perch. Packaged rebalance this sprint — you do not upload code onto the box. Range, size, and timing stay yours.",
  },
  {
    title: "We rent the seat",
    body: "hummingbot-api sits on a machine you cannot log into, in Amsterdam or Frankfurt. Rent covers colo. When the book performs, we can share claimed fees and waive that rent.",
  },
  {
    title: "The vault holds the money",
    body: "We operate the signer, so inventory cannot live with us. The vault trades the named pool and pays the fee you set. There is no route to an address we picked.",
  },
] as const;

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <p className="eyebrow">The product</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
        A sealed seat. The vault is why that is not a rented server.
      </h2>
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        {pieces.map((item, i) => (
          <article key={item.title} className="border-t border-hairline pt-6">
            <p className="font-mono text-xs tracking-widest text-copper">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 text-[0.95rem] text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
