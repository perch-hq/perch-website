import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/copy";

export function Product() {
  return (
    <section id="product" className="site scroll-mt-20 pb-20 sm:pb-28">
      <div className="max-w-2xl">
        <p className="eyebrow">{copy.product.eyebrow}</p>
        <h2 className="mt-4 text-3xl leading-snug tracking-tight sm:text-4xl">
          {copy.product.h2}
        </h2>
      </div>
      <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
        {copy.product.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <article className="max-w-md">
              <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
