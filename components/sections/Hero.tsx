import PrimaryButton from "@/components/ui/PrimaryButton";
import GhostButton from "@/components/ui/GhostButton";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden flex items-end">
      {/* Background video — swap src for client footage when available */}
      {/* Poster: dark placeholder until video loads */}
      <video
        src="/video/hero.mp4"
        poster="/images/hero-poster.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay — transparent top, near-opaque bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,12,0.20) 0%, rgba(12,12,12,0.60) 50%, rgba(12,12,12,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20 pb-20 md:pb-28">
        <div className="flex flex-col gap-6 max-w-[720px]">
          <span className="text-label text-brass tracking-[0.14em]">
            PREMIUM AUTO DETAILING
          </span>

          <h1 className="font-display font-extrabold text-[56px] md:text-[72px] xl:text-[96px] leading-[1.0] text-bone tracking-[-0.01em]">
            The Detail That<br />
            Changes How<br />
            You See Your Car
          </h1>

          <p className="font-body text-[17px] md:text-[18px] leading-[1.75] text-steel max-w-lg">
            Precision hand detailing for vehicles that deserve better.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <PrimaryButton href="/contact">Book a Detail</PrimaryButton>
            <GhostButton href="/services">View Services</GhostButton>
          </div>
        </div>
      </div>

      {/* Ground line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-divider" />
    </section>
  );
}
