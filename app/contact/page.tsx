import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import BookingForm from "@/components/sections/BookingForm";
import ContactSidebar from "@/components/sections/ContactSidebar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request a detailing appointment with Garcia's Auto Detail. No payment required up front. Payment collected on-site.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader headline="Book Your Appointment" />

      <section className="bg-pitch py-[56px] md:py-[80px] xl:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

            {/* Form — 7 columns */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Sidebar — 4 columns (1 col gutter implicit from gap) */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ContactSidebar />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
