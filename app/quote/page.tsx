import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote for window cleaning, pressure washing, and recurring exterior property care in San Diego.",
};

export default function QuotePage() {
  return (
    <section className="pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6">Get a Quote</p>
          <h1 className="text-5xl font-medium leading-[1] tracking-[-0.04em] md:text-7xl">
            Tell us about your property.
          </h1>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted">
            Share a few details and we&apos;ll get back to you with straightforward pricing.
            Residential and commercial inquiries welcome.
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Suspense>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
