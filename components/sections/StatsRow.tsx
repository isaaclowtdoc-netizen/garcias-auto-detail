import FadeUp from "@/components/ui/FadeUp";

const STATS = [
  { value: "8+", label: "Years in business" },
  { value: "500+", label: "Vehicles detailed" },
  { value: "100%", label: "Hand done, no machines" },
  { value: "1", label: "Standard, applied to every car" },
];

export default function StatsRow() {
  return (
    <section className="bg-carbon py-[56px] md:py-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-divider border border-divider">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 80}>
              <div className="bg-carbon px-8 py-10 flex flex-col gap-2">
                <span className="font-display font-extrabold text-[64px] md:text-[72px] leading-[1.0] text-brass">
                  {stat.value}
                </span>
                <span className="font-body text-[15px] leading-[1.6] text-steel">
                  {stat.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
