import Link from "next/link";
import { plans, services } from "@/lib/site";
import { Arrow, Button } from "./Button";
import { Reveal } from "./Motion";
import { Photo } from "./Photo";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader eyebrow="Services" title="What we take care of" />
          <Reveal>
            <Button href="/quote" variant="ghost">
              Get a Quote
            </Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <Link
                href="/quote"
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-line transition-colors duration-500 hover:border-white/25 md:aspect-[5/4]"
              >
                <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.04]">
                  <Photo src={s.image} alt={s.title} tone={s.tone} sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 md:p-8">
                  <div>
                    <p className="font-mono text-xs text-accent">0{i + 1}</p>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-sm text-muted">{s.body}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-500 group-hover:border-white/40 group-hover:bg-white/5">
                    <Arrow className="group-hover:translate-x-0.5 group-hover:-rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  return (
    <section id="plans" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Subscription Plans"
          title="Clean glass, on a schedule."
          body="Choose how often you want us there. We put your property on a fixed recurring schedule and handle the rest."
        />
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-sm border p-8 md:p-10 ${
                  p.featured ? "border-accent/50 bg-surface" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="text-5xl font-medium tracking-[-0.04em] md:text-6xl">{p.price}</span>
                  {p.cadence && <span className="text-muted">{p.cadence}</span>}
                </p>
                <p className="mt-3 text-sand">{p.visits}</p>
                <p className="mt-6 text-muted">{p.description}</p>
                <ul className="mt-8 space-y-3 border-t border-line pt-8 text-[0.95rem]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href={`/quote?plan=${p.id}`} variant={p.featured ? "primary" : "ghost"}>
                    {p.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-sm text-muted">
            One-time cleanings available on request. Larger properties are quoted individually.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function QuoteCTA() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-sm bg-ink px-5 py-24 text-bg md:px-16 md:py-36">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-balance">
            Ready to clean up the view?
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg text-bg/60">
            Tell us about your property and we&apos;ll get you a straightforward quote.
          </p>
          <Link
            href="/quote"
            className="group mt-10 inline-flex min-h-13 items-center gap-3 rounded-full bg-bg px-8 font-medium text-ink transition-colors hover:bg-black"
          >
            Get a Quote
            <Arrow className="group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-sm text-bg/50">Residential and commercial inquiries welcome.</p>
        </Reveal>
      </div>
    </section>
  );
}
