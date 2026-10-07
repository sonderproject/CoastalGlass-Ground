"use client";

import { useState } from "react";
import { images } from "@/lib/site";
import { Photo } from "./Photo";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Motion";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader eyebrow="Results" title="See the difference." />
        <Reveal className="mt-16">
          <div className="relative aspect-[4/5] select-none overflow-hidden rounded-sm border border-line sm:aspect-[16/9]">
            {/* After (full) */}
            <Photo src={images.after} alt="Window after cleaning" tone="glass" />
            {/* Before (clipped) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Photo src={images.before} alt="Window before cleaning" tone="stone" />
              {!images.before && (
                <div
                  aria-hidden
                  className="absolute inset-0 backdrop-blur-[2px]"
                  style={{
                    background:
                      "radial-gradient(60% 50% at 30% 40%, rgba(200,187,168,0.18), transparent 70%), radial-gradient(40% 40% at 70% 70%, rgba(120,110,95,0.25), transparent 70%)",
                  }}
                />
              )}
            </div>

            <span className="eyebrow absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1.5 backdrop-blur">
              Before
            </span>
            <span className="eyebrow absolute right-4 top-4 rounded-full bg-bg/70 px-3 py-1.5 backdrop-blur">
              After
            </span>

            {/* Divider */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-px bg-ink"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                </svg>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Drag to compare before and after"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
