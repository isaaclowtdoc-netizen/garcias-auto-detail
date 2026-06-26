// TODO: Replace placeholder contact details (phone, address) with client info before launch

export default function ContactSidebar() {
  return (
    <aside className="flex flex-col gap-10">

      {/* Hours */}
      <div className="flex flex-col gap-3">
        <span className="text-label text-brass">HOURS</span>
        <ul className="flex flex-col gap-1 font-body text-[16px] leading-[1.8]">
          <li className="flex justify-between gap-6">
            <span className="text-steel">Mon – Fri</span>
            <span className="text-bone">8am – 6pm</span>
          </li>
          <li className="flex justify-between gap-6">
            <span className="text-steel">Saturday</span>
            <span className="text-bone">9am – 4pm</span>
          </li>
          <li className="flex justify-between gap-6">
            <span className="text-steel">Sunday</span>
            <span className="text-steel italic">Closed</span>
          </li>
        </ul>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-3">
        <span className="text-label text-brass">LOCATION</span>
        <address className="not-italic font-body text-[16px] leading-[1.8] text-steel">
          {/* TODO: Replace with client's street address */}
          123 Placeholder St<br />
          Your City, ST 00000
        </address>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-medium text-[13px] text-brass hover:text-bone transition-colors duration-150 w-fit"
        >
          Get Directions →
        </a>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <span className="text-label text-brass">CALL US</span>
        <a
          href="tel:+15555550000"
          className="font-display font-bold text-[32px] leading-[1.1] text-bone hover:text-brass transition-colors duration-150"
        >
          (555) 555-0000
        </a>
      </div>

      {/* Callout note */}
      <div className="border-l-2 border-brass pl-5">
        <p className="font-body text-[14px] leading-[1.7] text-steel">
          Walk-ins are accepted based on availability, but appointments are
          strongly recommended.
        </p>
      </div>

    </aside>
  );
}
