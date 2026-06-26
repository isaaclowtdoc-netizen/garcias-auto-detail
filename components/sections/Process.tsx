import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

const STEPS = [
  {
    number: "01",
    title: "Book Online",
    description: "Choose a service and pick a date. No phone tag, no waiting.",
  },
  {
    number: "02",
    title: "Drop Off",
    description:
      "Bring the car in at your scheduled time. We'll walk through it together before we start.",
  },
  {
    number: "03",
    title: "Precision Work",
    description:
      "Every surface, every panel, every seam. We work through the vehicle in order. No section skipped.",
  },
  {
    number: "04",
    title: "You Inspect",
    description:
      "Walk the vehicle with us before you leave. We're not done until you are.",
  },
];

export default function Process() {
  return (
    <section className="bg-carbon py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-14 md:mb-20">
            <SectionDivider variant="rule" />
            <span className="text-label text-brass">THE PROCESS</span>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] text-bone">
              What Happens at Every Appointment
            </h2>
          </div>
        </FadeUp>

        {/* Steps grid — bordered cells create the horizontal rule between steps on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border border-divider divide-y sm:divide-y-0 divide-divider xl:divide-x xl:divide-y-0">
          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={i * 80}>
              <div className="flex flex-col gap-3 p-8 h-full">
                <span
                  aria-hidden="true"
                  className="font-display font-extrabold text-[96px] leading-[1.0] select-none"
                  style={{ color: "#2B2B2B" }}
                >
                  {step.number}
                </span>
                <div className="flex flex-col gap-2 mt-auto">
                  <h3 className="font-display font-bold text-[28px] leading-[1.2] text-bone">
                    {step.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.7] text-steel">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
