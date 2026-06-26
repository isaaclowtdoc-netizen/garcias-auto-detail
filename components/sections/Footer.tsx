import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-divider">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Col 1 — Logo + tagline */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col leading-none gap-[2px]">
            <span className="font-display font-bold text-[18px] text-bone tracking-[0.06em]">
              GARCIA&apos;S
            </span>
            <span className="font-display font-medium text-[10px] text-brass tracking-[0.18em] uppercase">
              AUTO DETAIL
            </span>
          </Link>
          <p className="font-body text-[16px] leading-[1.7] text-steel">
            Precision detailing. No shortcuts.
          </p>
          <p className="font-body text-[13px] text-steel mt-auto">
            © {year} Garcia&apos;s Auto Detail. All rights reserved.
          </p>
        </div>

        {/* Col 2 — Navigation */}
        <nav aria-label="Footer navigation" className="flex flex-col gap-3">
          <span className="text-label text-steel mb-1">Navigation</span>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-display font-medium text-[13px] uppercase tracking-[0.08em] text-steel hover:text-bone transition-colors duration-150 w-fit"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Col 3 — Contact info */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-label block mb-2">Hours</span>
            <ul className="font-body text-[16px] text-steel leading-[1.8] space-y-px">
              <li>Mon – Fri &nbsp; 8:30 AM – 5:00 PM</li>
              <li className="italic">Saturday &nbsp; Closed</li>
              <li className="italic">Sunday &nbsp; Closed</li>
            </ul>
          </div>
          <div>
            <span className="text-label block mb-2">Call Us</span>
            <a
              href="tel:+18642476343"
              className="font-display font-bold text-[24px] text-bone hover:text-brass transition-colors duration-150"
            >
              (864) 247-6343
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
