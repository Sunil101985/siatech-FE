import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Calendar
} from "lucide-react";
import TrainingSpotlight from "@/components/TrainingSpotlight";
import styles from "./training.module.css";

export const metadata: Metadata = {
  title: "Corporate IT Training & Workforce Upskilling | SiaTech",
  description:
    "Empower your engineering teams with production-grade training in Generative AI, Cloud Architecture, Kubernetes, and Next.js fullstack development."
};

const corporateFeatures = [
  {
    icon: Terminal,
    title: "Live Production Sandboxes",
    desc: "Engineers don't just watch slides; they build, break, and debug in isolated cloud sandboxes mirroring your real architecture."
  },
  {
    icon: Users,
    title: "1-on-1 Code Reviews",
    desc: "Every capstone project receives rigorous architectural reviews from senior industry veterans who build production systems daily."
  },
  {
    icon: Award,
    title: "Verified Certifications",
    desc: "Graduates earn verified credential badges certifying their mastery of modern enterprise frameworks, AI pipelines, or cloud standards."
  },
  {
    icon: ShieldCheck,
    title: "NDA-Protected Custom Syllabi",
    desc: "We can teach directly using your private code repositories and internal enterprise design systems under strict confidentiality."
  }
];

export default function TrainingPage() {
  return (
    <div className={styles.trainingPage}>
      {/* Page Hero */}
      <section className={styles.trainingHero}>
        <div className="container text-center">
          <div className="section-tag">
            <GraduationCap size={14} />
            Enterprise Engineering Academy
          </div>
          <h1 className="section-title">
            Level Up Your Engineering Workforce with{" "}
            <span className="text-gradient">Production-Grade IT Training</span>
          </h1>
          <p className="section-desc section-desc-center">
            Led by top practitioners. Accelerate team adoption of Generative AI, Cloud Architecture, Kubernetes, and Modern Full-Stack web development.
          </p>

          <div className={styles.heroCtaWrap}>
            <Link href="/contact?service=training" className="btn btn-primary btn-lg">
              <span>Book Corporate Cohort Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Embed the interactive training spotlight component */}
      <TrainingSpotlight />

      {/* Why SiaTech Corporate Training */}
      <section className={`section ${styles.methodologySection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <Sparkles size={14} />
              The SiaTech Methodology
            </div>
            <h2 className="section-title">
              Why Corporate Engineering Teams{" "}
              <span className="text-gradient-cyan">Choose SiaTech Bootcamps</span>
            </h2>
            <p className="section-desc section-desc-center">
              Our training is designed specifically for working engineers, technical leads, and engineering directors who need immediate ROI.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {corporateFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className={`glass-panel ${styles.featureCard}`}>
                  <div className={styles.featureIconWrap}>
                    <Icon size={24} color="#00f2fe" />
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Corporate CTA Box */}
          <div className={styles.corporateInquiryBox}>
            <div className={styles.inquiryLeft}>
              <h3 className={styles.inquiryHeading}>Upskill Your Team of 5 to 500+ Engineers</h3>
              <p className={styles.inquirySub}>
                We offer flexible corporate scheduling: half-day intensives, weekend hackathon bootcamps, or 6-week progressive cohorts. Volume discounts available for enterprise teams.
              </p>
            </div>
            <Link href="/contact?service=training" className="btn btn-primary btn-lg">
              Request Corporate Training Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
