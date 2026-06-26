import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// TODO: Replace with custom domain once connected in Vercel dashboard
const SITE_URL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://garcias-auto-detail.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Garcia's Auto Detail",
    default: "Garcia's Auto Detail",
  },
  description:
    "Premium car detailing. Precision hand detailing for vehicles that deserve better. Book an appointment online.",
  openGraph: {
    type: "website",
    siteName: "Garcia's Auto Detail",
    locale: "en_US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Garcia's Auto Detail",
  telephone: "+18642476343",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10105 Clemson Blvd",
    addressLocality: "Seneca",
    addressRegion: "SC",
    postalCode: "29678",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
  ],
  url: "https://garcias-auto-detail.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
