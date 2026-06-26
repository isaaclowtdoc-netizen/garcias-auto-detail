import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

const VALUES = [
  {
    title: "No Shortcuts",
    description:
      "Every step in the process exists for a reason. We don't skip clay bar because the paint looks clean. We don't skip the jambs because they're not visible at first glance. The work is complete or it isn't done.",
  },
  {
    title: "You Inspect Before We Leave",
    description:
      "Before every handoff, we walk the vehicle with you. Point out anything you see. We'd rather spend fifteen minutes on a spot than have you notice it in the parking lot. This isn't optional — it's part of the service.",
  },
  {
    title: "Your Vehicle Gets Full Attention",
    description:
      "We limit bookings so nothing gets rushed. When your car is in, it has our focus from start to finish. No half-done work sitting between jobs. No pulling someone else off your vehicle to start another.",
  },
];

export default function ApproachValues() {
  return (
    <section className="bg-pitch py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-16">
            <SectionDivider variant="rule" />
            <span className="text-label text-brass">HOW WE WORK</span>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] text-bone">
              Three Things That Don&apos;t Change
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {VALUES.map((value, i) => (
            <FadeUp key={value.title} delay={i * 80}>
              <div className="flex flex-col gap-5">
                {/* 40px Brass rule at top of each column */}
                <span
                  className="block h-px bg-brass"
                  style={{ width: "40px" }}
                  aria-hidden="true"
                />
                <h3 className="font-display font-bold text-[28px] leading-[1.2] text-bone">
                  {value.title}
                </h3>
                <p className="font-body text-[16px] leading-[1.8] text-steel">
                  {value.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
