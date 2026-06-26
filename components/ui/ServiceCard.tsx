interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  href?: string;
}

export default function ServiceCard({
  eyebrow,
  title,
  description,
  price,
  duration,
  href = "/services",
}: Props) {
  return (
    <div className="group relative flex flex-col gap-5 p-8 bg-graphite border border-divider rounded-[4px] min-h-[280px] transition-colors duration-200 hover:bg-[#222222]">
      {/* 3px left accent border — transparent by default, Brass on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[4px] bg-divider transition-colors duration-200 group-hover:bg-brass"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 flex-1 pl-1">
        {eyebrow && (
          <span className="text-label text-steel group-hover:text-brass transition-colors duration-200">
            {eyebrow}
          </span>
        )}
        <h3 className="font-display font-bold text-[32px] leading-[1.2] text-bone">
          {title}
        </h3>
        <p className="font-body text-[16px] leading-[1.7] text-steel">{description}</p>
      </div>

      <div className="flex items-baseline justify-between pl-1 mt-auto pt-4 border-t border-divider">
        <div>
          <span className="font-display font-medium text-[18px] text-bone">{price}</span>
          {duration && (
            <span className="font-body text-[13px] text-steel ml-2">{duration}</span>
          )}
        </div>
        {href && (
          <a
            href={href}
            className="font-body font-medium text-[13px] text-brass hover:text-bone hover:underline transition-colors duration-150"
          >
            See Details →
          </a>
        )}
      </div>
    </div>
  );
}
