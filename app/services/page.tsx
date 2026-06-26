import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import PageHeader from "@/components/sections/PageHeader";
import AlternatingServiceSection from "@/components/sections/AlternatingServiceSection";
import AddOnsList from "@/components/sections/AddOnsList";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Detailing Services & Pricing",
  description:
    "Hand detailing services for every need — basic exterior, full interior and exterior, and ceramic coating. Pricing by vehicle size.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        headline="Detailing Services"
        subheadline="Three services. Every one done by hand, to the same standard, every time."
      />

      {SERVICES.map((service, i) => (
        <AlternatingServiceSection key={service.id} service={service} index={i} />
      ))}

      <AddOnsList />

      <CTABanner
        headline="Ready to Book?"
        body="Select your service and preferred date. No payment required up front."
        primaryLabel="Book a Detail"
        primaryHref="/contact"
        secondaryLabel="Questions? Contact Us"
        secondaryHref="/contact"
      />

      <Footer />
    </main>
  );
}
