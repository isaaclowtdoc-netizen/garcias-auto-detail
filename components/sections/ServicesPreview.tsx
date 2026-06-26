import ServiceCard from "@/components/ui/ServiceCard";
import GhostButton from "@/components/ui/GhostButton";
import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

const PREVIEW_SERVICES = [
  {
    eyebrow: "EXTERIOR",
    title: "Basic Detail",
    description:
      "Thorough hand wash, clay bar decontamination, and hand dry. Tires and trim dressed. Paint left clean and ready.",
    price: "Pricing TBD",
    duration: "2–3 hrs",
    href: "/services",
  },
  {
    eyebrow: "INTERIOR + EXTERIOR",
    title: "Full Detail",
    description:
      "Complete interior extraction and conditioning combined with a full exterior treatment. Every surface addressed.",
    price: "Pricing TBD",
    duration: "5–7 hrs",
    href: "/services",
  },
  {
    eyebrow: "PAINT PROTECTION",
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic coating applied to decontaminated, polished paint. Protection that lasts years, not weeks.",
    price: "Pricing TBD",
    duration: "1–2 days",
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-carbon py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <FadeUp>
          <div className="flex flex-col gap-3 mb-12 md:mb-16">
            <SectionDivider variant="rule" />
            <span className="text-label text-brass">WHAT WE DO</span>
            <h2 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] text-bone">
              Every Detail, Done Right
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_SERVICES.map((service, i) => (
            <FadeUp key={service.title} delay={i * 80}>
              <ServiceCard {...service} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={240}>
          <div className="flex justify-center mt-12">
            <GhostButton href="/services">See All Services</GhostButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
