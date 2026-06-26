import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

const STATS = [
  { value: "8+", label: "Years of hands-on experience" },
  { value: "500+", label: "Vehicles detailed" },
  { value: "100%", label: "Hand done, every time" },
];

const DIFFERENTIATORS = [
  "We don't rush. Every session is booked with time built in.",
  "You inspect the vehicle before we consider it done.",
  "No pressure wash. No automatic anything. Every surface is hand-addressed.",
  "Products chosen for results, not margins.",
];

export default function WhyGarcias() {
  return (
    <section className="bg-pitch py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Stats column */}
          <FadeUp>
            <div className="flex flex-col gap-10">
              {STATS.map((stat) => (
                <div key={stat.value} className="flex flex-col gap-1">
                  <span className="font-display font-extrabold text-[80px] leading-[1.0] text-brass">
                    {stat.value}
                  </span>
                  <span className="font-body text-[16px] leading-[1.7] text-steel">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Differentiators column */}
          <FadeUp delay={80}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <SectionDivider variant="rule" />
                <span className="text-label text-brass">WHY GARCIA&apos;S</span>
                <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] text-bone">
                  No Machines.<br />No Shortcuts.
                </h2>
                <p className="font-body text-[16px] leading-[1.7] text-steel max-w-prose">
                  Most shops clean cars. We restore them. Every booking gets the same
                  treatment — methodical, unhurried, held to the same standard
                  regardless of the vehicle.
                </p>
              </div>

              <ul className="flex flex-col gap-4" role="list">
                {DIFFERENTIATORS.map((point) => (
                  <li
                    key={point}
                    className="font-body text-[16px] leading-[1.7] text-steel border-l-2 border-brass pl-5"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
