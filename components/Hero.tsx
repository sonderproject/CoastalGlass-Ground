"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/site";
import { Button } from "./Button";
import { Photo } from "./Photo";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 md:pb-24">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Photo
          src={images.hero}
          alt="Sunlight reflecting off clean storefront glass in San Diego"
          tone="glass"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />

      <div className="container-x relative">
        <motion.p className="eyebrow mb-6" {...rise(0.2)}>
          San Diego Property Care
        </motion.p>
        <motion.h1
          className="max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-balance"
          {...rise(0.3)}
        >
          Clear glass. Clean ground. Better first impressions.
        </motion.h1>
        <motion.p className="mt-8 max-w-xl text-lg leading-relaxed text-muted" {...rise(0.45)}>
          Professional window cleaning and exterior property care for homes, storefronts, offices,
          and commercial properties across San Diego.
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap gap-3" {...rise(0.55)}>
          <Button href="/quote">Get a Quote</Button>
          <Button href="/#plans" variant="ghost">
            View Plans
          </Button>
        </motion.div>
        <motion.p className="mt-10 text-sm text-muted" {...rise(0.65)}>
          Residential <span className="mx-2 text-accent">•</span> Commercial
          <span className="mx-2 text-accent">•</span> Recurring Service
        </motion.p>
      </div>
    </section>
  );
}
