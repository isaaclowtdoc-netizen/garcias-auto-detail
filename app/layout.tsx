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

export const metadata: Metadata = {
  title: {
    template: "%s | Garcia's Auto Detail",
    default: "Garcia's Auto Detail",
  },
  description: "Premium car detailing. Book an appointment online.",
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
