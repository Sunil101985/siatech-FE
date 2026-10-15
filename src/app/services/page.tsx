import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Users,
  GraduationCap,
  Code2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Sparkles,
  HelpCircle,
  FileCheck
} from "lucide-react";
import ServicesGrid from "@/components/ServicesGrid";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | SiaTech - Consulting, Talent Hire, IT Training & Software Dev",
  description:
    "Explore SiaTech's 4 core service pillars: Strategic IT & Cloud Consulting, Top 3% Freelancer Hire, Enterprise IT Training, and Custom Software Development."
};

const comparisonData = [
  {
    feature: "Vetted Engineering Quality",
    siatech: "Top 3% rigorously tested on live system design & code",
    traditional: "Random assignees or junior bench staff",
    platforms: "Unverified self-reported resumes"
  },
  {
    feature: "Matching & Deployment Time",
    siatech: "48 hours guaranteed with pre-screened talent",
    traditional: "6 - 12 weeks of bureaucratic RFP review",
    platforms: "Endless candidate sift & trial-and-error"
  },
  {
    feature: "Risk-Free Trial Period",
    siatech: "1-Week zero-cost trial guarantee",
    traditional: "Strict non-refundable retainer up front",
    platforms: "Dispute resolution delays and no guarantees"
  },
  {
    feature: "IP & Code Ownership",
    siatech: "100% legal ownership transferred daily",
    traditional: "Often retains shared components or licenses",
    platforms: "Vague contract protections"
  },
  {
    feature: "Ongoing Enterprise Support",
    siatech: "Dedicated tech lead & 24/7 SLA escalation",
    traditional: "Expensive add-on maintenance contracts",
    platforms: "No centralized accountability"
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container text-center">
          <div className="section-tag">
            <Sparkles size={14} />
            End-to-End Enterprise Technology Offerings
          </div>
          <h1 className="section-title">
            Engineered to Solve Your Toughest{" "}
            <span className="text-gradient">Technical Challenges</span>
          </h1>
          <p className="section-desc section-desc-center">
            From architecture consulting and on-demand freelance talent to team upskilling and turnkey software engineering, SiaTech powers your digital momentum.
          </p>
        </div>
      </section>

      {/* Embed the Interactive Core Grid */}
      <ServicesGrid />

      {/* Comparison Table Section */}
      <section className={`section ${styles.comparisonSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <Shield size={14} />
              The SiaTech Advantage
            </div>
            <h2 className="section-title">
              Why Global Leaders Choose{" "}
              <span className="text-gradient-cyan">SiaTech Over the Alternatives</span>
            </h2>
            <p className="section-desc section-desc-center">
              Compare our streamlined, high-caliber engineering partnership against traditional IT agencies and unstructured freelance marketplaces.
            </p>
          </div>

          <div className={`glass-panel ${styles.tableWrap}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Capability &amp; Assurance</th>
                  <th className={styles.thHighlight}>
                    <div className={styles.siatechBadge}>SiaTech Solutions</div>
                  </th>
                  <th>Traditional IT Agencies</th>
                  <th>Generic Freelance Sites</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    <td className={styles.siatechCell}>
                      <div className={styles.checkWrap}>
                        <CheckCircle2 size={18} color="#00f2fe" />
                        <span>{row.siatech}</span>
                      </div>
                    </td>
                    <td className={styles.otherCell}>{row.traditional}</td>
                    <td className={styles.otherCell}>{row.platforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Banner */}
          <div className={styles.bottomCtaCard}>
            <div>
              <h3 className={styles.ctaTitle}>Ready to discuss your technical roadmap?</h3>
              <p className={styles.ctaDesc}>
                Schedule a 30-minute discovery session with our Lead Solutions Architect.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">
              <span>Book Strategy Session</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
