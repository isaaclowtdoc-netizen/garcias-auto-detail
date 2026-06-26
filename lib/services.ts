export interface Service {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  includes: string[];
  price: string;
  duration: string;
  imagePath: string; // TODO: replace placeholder paths with real stock images
}

export interface AddOn {
  name: string;
  description: string;
  examples: string;
  price: string;
}

export const SERVICES: Service[] = [
  {
    id: "basic-detail",
    eyebrow: "EXTERIOR",
    title: "Basic Detail",
    description:
      "A complete exterior treatment done entirely by hand. Paint is washed, decontaminated, and left with a clean surface ready for protection. Tires and trim dressed. No cutting corners on the rinse.",
    includes: [
      "Two-bucket hand wash",
      "Clay bar decontamination",
      "Hand dry with microfiber",
      "Tire and trim dressing",
      "Glass cleaned exterior",
      "Door jambs wiped down",
    ],
    price: "Pricing TBD",
    duration: "2–3 hrs",
    imagePath: "/images/services/basic-detail.jpg",
  },
  {
    id: "full-detail",
    eyebrow: "INTERIOR + EXTERIOR",
    title: "Full Detail",
    description:
      "The complete treatment. Interior extraction, leather or fabric conditioning, and a full exterior detail performed in sequence. Every surface on the vehicle is addressed before we call it done.",
    includes: [
      "Full exterior basic detail",
      "Interior vacuum and extraction",
      "Leather or fabric conditioning",
      "Dashboard, console, and trim cleaned",
      "Door panels and pockets detailed",
      "Glass cleaned interior and exterior",
      "Odor elimination treatment",
    ],
    price: "Pricing TBD",
    duration: "5–7 hrs",
    imagePath: "/images/services/full-detail.jpg",
  },
  {
    id: "ceramic-coating",
    eyebrow: "PAINT PROTECTION",
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic coating applied to properly prepared paint. This is not a spray-on sealant. Paint is decontaminated, polished, and inspected before coating goes down. The result protects for years, not weeks.",
    includes: [
      "Full exterior detail and decontamination",
      "Paint correction (light to moderate defects)",
      "IPA wipe-down and panel inspection",
      "Single-layer ceramic coating application",
      "Cure time and post-care instructions",
      "6-month follow-up inspection",
    ],
    price: "Pricing TBD",
    duration: "1–2 days",
    imagePath: "/images/services/ceramic-coating.jpg",
  },
];

// Vehicle size add-ons — applied on top of base service pricing
export const VEHICLE_ADDONS: AddOn[] = [
  {
    name: "Small SUV / Truck",
    description: "Crossovers, compact SUVs, mid-size trucks",
    examples: "e.g. RAV4, F-150",
    price: "+$25",
  },
  {
    name: "SUV / Truck",
    description: "Full-size SUVs and trucks",
    examples: "e.g. Tahoe, Silverado, Expedition",
    price: "+$50",
  },
  {
    name: "Large SUV / Truck",
    description: "Oversized vehicles, extended cabs, XL platforms",
    examples: "e.g. Suburban, Excursion",
    price: "+$75",
  },
];
