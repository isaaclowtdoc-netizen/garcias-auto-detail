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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
