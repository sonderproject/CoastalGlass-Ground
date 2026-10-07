"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow } from "./Button";

const propertyTypes = [
  "Residential",
  "Storefront",
  "Office",
  "Apartment / Multi-Family",
  "Commercial Property",
  "Other",
];
const serviceOptions = [
  "Window Cleaning",
  "Pressure Washing",
  "Exterior Cleanup",
  "Recurring Maintenance",
];
const frequencies = [
  { id: "biweekly", label: "Biweekly plan — $299/mo" },
  { id: "weekly", label: "Weekly plan" },
  { id: "commercial", label: "Commercial / custom" },
  { id: "one-time", label: "One time" },
  { id: "not-sure", label: "Not sure" },
];

// Set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) to receive submissions by email.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

function Chip({
  type,
  name,
  value,
  defaultChecked,
  children,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  defaultChecked?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} value={value} defaultChecked={defaultChecked} className="peer sr-only" />
      <span className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-[0.95rem] text-muted transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-bg peer-focus-visible:outline peer-focus-visible:outline-accent hover:border-white/30">
        {children}
      </span>
    </label>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow block">
      {children}
    </label>
  );
}

export function QuoteForm() {
  const params = useSearchParams();
  const initialPlan = params.get("plan") ?? "";
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      if (endpoint) {
        const data = new FormData(e.currentTarget);
        const res = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Request failed");
      }
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line pt-12"
        >
          <p className="eyebrow text-accent!">Request received</p>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] md:text-5xl">
            Thank you. We&apos;ll be in touch shortly.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted">
            We&apos;ll review your property details and follow up with a straightforward quote.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="space-y-14" exit={{ opacity: 0 }}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="md:col-span-2">
              <Label htmlFor="name">Name</Label>
              <input id="name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" placeholder="(619) 000-0000" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Property address</Label>
              <input id="address" name="address" required autoComplete="street-address" className="field" placeholder="Street, city" />
            </div>
          </div>

          <fieldset>
            <legend className="eyebrow mb-5">Property type</legend>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((t) => (
                <Chip key={t} type="radio" name="property_type" value={t}>
                  {t}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow mb-5">Services</legend>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((s) => (
                <Chip key={s} type="checkbox" name="services" value={s} defaultChecked={s === "Window Cleaning"}>
                  {s}
                </Chip>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow mb-5">Plan / frequency</legend>
            <div className="flex flex-wrap gap-2">
              {frequencies.map((f) => (
                <Chip key={f.id} type="radio" name="frequency" value={f.label} defaultChecked={f.id === initialPlan}>
                  {f.label}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div>
            <Label htmlFor="details">Tell us about the property</Label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="field resize-none"
              placeholder="Number of windows or floors, access notes, anything we should know."
            />
          </div>

          <div>
            <p className="eyebrow mb-5">Photos (optional)</p>
            <label className="flex min-h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-line px-6 py-8 text-center transition-colors hover:border-white/30">
              <input
                type="file"
                name="photos"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              />
              <span>Add photos of the property</span>
              <span className="text-sm text-muted">
                {files.length ? files.map((f) => f.name).join(", ") : "Tap to choose images"}
              </span>
            </label>
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-line pt-10">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-ink px-8 font-medium text-bg transition-colors hover:bg-white disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Request My Quote"}
              <Arrow className="group-hover:translate-x-1" />
            </button>
            {status === "error" && (
              <p role="alert" className="text-sm text-sand">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
            <p className="text-sm text-muted">No account needed. We&apos;ll reply with a quote.</p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
