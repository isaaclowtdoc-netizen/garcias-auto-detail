import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Story() {
  return (
    <section className="bg-pitch py-[56px] md:py-[80px] xl:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text — left column */}
          <FadeUp>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <SectionDivider variant="rule" />
                <span className="text-label text-brass">THE STORY</span>
                <h2 className="font-display font-bold text-[40px] md:text-[48px] leading-[1.1] text-bone">
                  Started in a Driveway.<br />
                  Still Done the Same Way.
                </h2>
              </div>

              {/* TODO: Replace with client-provided story before launch */}
              <div className="flex flex-col gap-5 font-body text-[16px] leading-[1.8] text-steel">
                <p>
                  I started detailing cars because I couldn&apos;t find anyone who
                  did it the way I wanted it done. That was eight years ago, out
                  of my driveway, with two buckets and a stack of microfiber
                  towels I kept washing every night. The work spoke for itself and
                  the phone kept ringing.
                </p>
                <p>
                  Garcia&apos;s Auto Detail exists because there&apos;s a gap between a
                  car wash and a real detail — and most people never experience
                  the difference. Every appointment I take is a chance to show
                  someone what their vehicle actually looks like when it&apos;s
                  properly cared for.
                </p>
                <p>
                  I don&apos;t run a production line. I take a limited number of
                  appointments per week so that every vehicle gets the time it
                  needs. If you&apos;ve booked with me, you have my full attention
                  from drop-off to pickup.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Image — right column, portrait crop */}
          {/* TODO: Replace with editorial stock image — hands-on, dark garage, side-lit */}
          <FadeUp delay={80}>
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px]">
              <Image
                src="/images/about/story.jpg"
                alt="Garcia's Auto Detail — hands-on precision work"
                fill
                className="object-cover img-grade"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
