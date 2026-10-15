import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import { Sparkles, Shield, Clock, Award } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Consultation | SiaTech - Enterprise IT Partner",
  description:
    "Connect with SiaTech to discuss IT consulting, hiring vetted freelance developers, corporate training cohorts, or custom software projects."
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.contactHero}>
        <div className="container text-center">
          <div className="section-tag">
            <Sparkles size={14} />
            Let&apos;s Talk Technology
          </div>
          <h1 className="section-title">
            Book a Strategy Session or{" "}
            <span className="text-gradient">Request Talent Profiles</span>
          </h1>
          <p className="section-desc section-desc-center">
            Whether you need to scale an urgent sprint team in 48 hours, modernize your cloud architecture, upskill your engineering division, or engineer an MVP, we are ready.
          </p>
        </div>
      </section>

      {/* Embedded interactive contact section with Suspense for query params */}
      <Suspense fallback={<div className="container text-center py-20">Loading consultation portal...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
