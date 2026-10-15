import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "SiaTech | Strategic IT Consulting, Freelance Tech Talent, Corporate Training & Software Development",
  description:
    "SiaTech is the single-source technology partner for enterprises worldwide. We deliver expert IT & Cloud Consulting, vetted Top 3% Freelance Developers in 48 hours, Corporate IT Training bootcamps, and Bespoke Software Engineering.",
  keywords: [
    "IT Consulting",
    "Hire Freelancers",
    "Tech Freelancers",
    "Staff Augmentation",
    "Corporate IT Training",
    "Custom Software Development",
    "Next.js Development",
    "Cloud Architecture",
    "Kubernetes Training",
    "AI Engineering",
    "SiaTech"
  ],
  authors: [{ name: "SiaTech Solutions Inc." }],
  openGraph: {
    title: "SiaTech | Strategic IT Consulting, Freelance Talent & Software Development",
    description:
      "Deploy top 3% vetted engineers, modernize multi-cloud architecture, upskill your engineering teams, and engineer bespoke software platforms.",
    url: "https://siatech.io",
    siteName: "SiaTech",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
