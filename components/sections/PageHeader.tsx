interface Props {
  headline: string;
  subheadline?: string;
}

export default function PageHeader({ headline, subheadline }: Props) {
  return (
    <section className="bg-carbon pt-[72px]">
      {/* pt-[72px] offsets the fixed NavBar height */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20 py-20 md:py-28 flex flex-col gap-4">
        <h1 className="font-display font-extrabold text-[56px] md:text-[72px] leading-[1.05] text-bone">
          {headline}
        </h1>
        {subheadline && (
          <p className="font-body text-[18px] leading-[1.75] text-steel max-w-2xl">
            {subheadline}
          </p>
        )}
      </div>
    </section>
  );
}
