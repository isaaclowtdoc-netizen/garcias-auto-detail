"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

const TESTIMONIALS = [
  {
    quote:
      "I've had my car detailed twice before. This was different. You could tell they actually cared about the result.",
    name: "Marcus T.",
    vehicle: "2021 BMW M4",
  },
  {
    quote:
      "Dropped off a disaster interior and picked up something that looked better than when I bought it. Worth every dollar.",
    name: "Diana R.",
    vehicle: "2019 Audi Q5",
  },
  {
    quote:
      "The ceramic coating has been holding for eight months and the car still beads like the first day. Exceptional work.",
    name: "James V.",
    vehicle: "2022 Porsche Macan",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-pitch py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-14">
            <SectionDivider variant="rule" />
            <span className="text-label text-brass">CLIENT FEEDBACK</span>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-8 max-w-3xl">
          <div key={current} className="flex flex-col gap-4">
            <blockquote className="font-body italic text-[22px] md:text-[28px] leading-[1.55] text-bone">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="font-body text-[13px] text-steel">
              — {t.name}, {t.vehicle}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="font-body text-[20px] text-steel hover:text-bone transition-colors duration-150 leading-none"
            >
              ←
            </button>
            <span className="text-label text-steel">
              {current + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="font-body text-[20px] text-steel hover:text-bone transition-colors duration-150 leading-none"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
