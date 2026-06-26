import Image from "next/image";
import type { Service } from "@/lib/services";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDivider from "@/components/ui/SectionDivider";
import FadeUp from "@/components/ui/FadeUp";

interface Props {
  service: Service;
  index: number;
}

export default function AlternatingServiceSection({ service, index }: Props) {
  const isEven = index % 2 === 0; // even index → image left, text right
  const bg = isEven ? "bg-pitch" : "bg-carbon";

  return (
    <section className={`${bg} py-[56px] md:py-[80px] xl:py-[80px]`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            isEven ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Image — 5 columns */}
          <FadeUp className="lg:col-span-5 lg:[direction:ltr]">
            {/* TODO: replace with real stock image per photography direction */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2px]">
              <Image
                src={service.imagePath}
                alt={`${service.title} service`}
                fill
                className="object-cover img-grade"
                sizes="(max-width: 1024px) 100vw, 41vw"
              />
            </div>
          </FadeUp>

          {/* Text — 7 columns */}
          <FadeUp delay={80} className="lg:col-span-7 lg:[direction:ltr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <SectionDivider variant="rule" />
                <span className="text-label text-brass">{service.eyebrow}</span>
                <h2 className="font-display font-bold text-[40px] md:text-[48px] leading-[1.1] text-bone">
                  {service.title}
                </h2>
                <p className="font-body text-[16px] leading-[1.7] text-steel max-w-prose">
                  {service.description}
                </p>
              </div>

              {/* What's included */}
              <ul className="flex flex-col gap-2" role="list">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] leading-[1.6] text-steel flex items-start gap-3"
                  >
                    <span className="mt-[6px] shrink-0 block w-[5px] h-[5px] rounded-full bg-brass" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2 border-t border-divider">
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-[28px] leading-[1.1] text-bone">
                    {service.price}
                  </span>
                  <span className="font-body text-[13px] text-steel">
                    {service.duration} &middot; Sedan pricing
                  </span>
                </div>
                <PrimaryButton href="/contact" className="sm:ml-auto shrink-0">
                  Book This Service
                </PrimaryButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
