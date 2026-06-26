import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyGarcias from "@/components/sections/WhyGarcias";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Premium Car Detailing",
  description:
    "Precision hand detailing for vehicles that deserve better. Book an appointment with Garcia's Auto Detail.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyGarcias />
      <Process />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
