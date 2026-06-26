import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Story from "@/components/sections/Story";
import StatsRow from "@/components/sections/StatsRow";
import ApproachValues from "@/components/sections/ApproachValues";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Garcia's Auto Detail",
  description:
    "Eight years of precision hand detailing. One standard applied to every vehicle. Learn how Garcia's Auto Detail works.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        headline="Built on Precision. Operated with Obsession."
        subheadline="Eight years in. Still done by hand, every time."
      />
      <Story />
      <StatsRow />
      <ApproachValues />
      <CTABanner
        headline="See the Difference."
        body="Book an appointment and walk away knowing exactly what a real detail looks like."
        primaryLabel="Book a Detail"
        primaryHref="/contact"
      />
      <Footer />
    </main>
  );
}
