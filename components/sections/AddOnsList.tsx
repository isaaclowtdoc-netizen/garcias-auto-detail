import { VEHICLE_ADDONS } from "@/lib/services";
import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

export default function AddOnsList() {
  return (
    <section className="bg-carbon py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-14">
            <SectionDivider variant="rule" />
            <span className="text-label text-brass">VEHICLE SIZE</span>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] text-bone">
              Additional Pricing by Size
            </h2>
            <p className="font-body text-[16px] leading-[1.7] text-steel max-w-prose">
              Base pricing applies to standard sedans and coupes. Larger vehicles
              require additional time. Select the tier that matches your vehicle
              at booking.
            </p>
          </div>
        </FadeUp>

        <div className="max-w-3xl">
          {VEHICLE_ADDONS.map((addon, i) => (
            <FadeUp key={addon.name} delay={i * 80}>
              <div
                className={`flex items-start justify-between gap-8 py-7 ${
                  i < VEHICLE_ADDONS.length - 1 ? "border-b border-divider" : ""
                }`}
              >
                {/* Name + description */}
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-[22px] leading-[1.2] text-bone">
                    {addon.name}
                  </span>
                  <span className="font-body text-[15px] leading-[1.6] text-steel">
                    {addon.description}{" "}
                    <span className="text-steel/70">({addon.examples})</span>
                  </span>
                </div>

                {/* Price */}
                <span className="shrink-0 font-display font-bold text-[22px] leading-[1.2] text-brass">
                  {addon.price}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
