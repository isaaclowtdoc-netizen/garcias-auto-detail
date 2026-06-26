import PrimaryButton from "@/components/ui/PrimaryButton";
import GhostButton from "@/components/ui/GhostButton";

interface Props {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = "Ready to Book?",
  body = "Schedule your appointment online. No payment required up front.",
  primaryLabel = "Book a Detail",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="bg-brass w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="font-display font-bold text-[48px] leading-[1.1] text-pitch">
            {headline}
          </h2>
          {body && (
            <p className="font-body text-[18px] leading-[1.75] text-pitch/70">{body}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          {/* Inverted button — dark on Brass background */}
          <PrimaryButton
            href={primaryHref}
            className="!bg-pitch !text-bone hover:!bg-[#1E1E1E]"
          >
            {primaryLabel}
          </PrimaryButton>
          {secondaryLabel && secondaryHref && (
            <GhostButton href={secondaryHref} className="!border-pitch/40 !text-pitch hover:!border-pitch hover:!bg-pitch/5">
              {secondaryLabel}
            </GhostButton>
          )}
        </div>
      </div>
    </section>
  );
}
