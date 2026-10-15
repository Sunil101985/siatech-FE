"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Code,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Cpu
} from "lucide-react";
import styles from "./HeroSection.module.css";

const stats = [
  { value: "500+", label: "Vetted Tech Experts", sub: "Top 3% Global Talent" },
  { value: "48 hrs", label: "Talent Deployment", sub: "Rapid Squad Scaling" },
  { value: "150+", label: "Enterprise Projects", sub: "Delivered On-Time" },
  { value: "99.4%", label: "Client Satisfaction", sub: "Fortune 500 & Startups" }
];

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Decorative ambient blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      <div className="container">
        <div className={styles.heroContent}>
          {/* Top Pill */}
          <div className={styles.topBadgeWrap}>
            <span className="section-tag">
              <Sparkles size={14} className={styles.sparkleIcon} />
              Enterprise IT Solutions & Elite Engineering
            </span>
            <div className={styles.liveIndicator}>
              <span className="pulse-dot" />
              <span>Available for Q4 Engagements</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            Powering Modern Tech with{" "}
            <span className="text-gradient">Strategic Consulting</span>,{" "}
            <span className="text-gradient-cyan">Elite Freelancers</span> &amp;{" "}
            <span className="text-gradient-purple">Bespoke Software</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            SiaTech is the single-source technology partner for forward-thinking enterprises.
            Accelerate your engineering roadmap with vetted top 3% developers, modern cloud &amp; AI consulting, corporate workforce training, and end-to-end software development.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <Link href="/hire-talent" className="btn btn-primary btn-lg">
              <span>Hire Vetted Freelancers</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              <span>Book Strategy Call</span>
            </Link>
            <Link href="/services" className="btn btn-outline-cyan btn-lg">
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Trust bullet highlights */}
          <div className={styles.highlightsBar}>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={16} color="#00f2fe" />
              <span>Top 3% Rigorously Screened</span>
            </div>
            <div className={styles.highlightItem}>
              <Zap size={16} color="#8b5cf6" />
              <span>48-Hour Squad Deployment</span>
            </div>
            <div className={styles.highlightItem}>
              <ShieldCheck size={16} color="#10b981" />
              <span>Risk-Free 1-Week Trial</span>
            </div>
            <div className={styles.highlightItem}>
              <Cpu size={16} color="#4facfe" />
              <span>Full IP &amp; Code Ownership</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card with Glassmorphic Badges */}
        <div className={styles.visualContainer}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero-network.jpg"
                alt="SiaTech High-Tech Enterprise Infrastructure"
                fill
                priority
                className={styles.heroImg}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Floating Card 1: Live Squad */}
            <div className={`${styles.floatingCard} ${styles.cardTopLeft} glass-panel animate-float`}>
              <div className={styles.floatingCardIcon} style={{ background: "rgba(0, 242, 254, 0.15)", color: "#00f2fe" }}>
                <Users size={18} />
              </div>
              <div>
                <div className={styles.floatingCardLabel}>Active Talent Pod</div>
                <div className={styles.floatingCardVal}>Senior Full-Stack &amp; Cloud Lead</div>
                <div className={styles.floatingSub}>
                  <span className="pulse-dot" style={{ display: "inline-block", marginRight: 6 }} />
                  Sprint Kickoff: 48h Guaranteed
                </div>
              </div>
            </div>

            {/* Floating Card 2: Training & Upskilling */}
            <div className={`${styles.floatingCard} ${styles.cardBottomRight} glass-panel animate-float`} style={{ animationDelay: "2s" }}>
              <div className={styles.floatingCardIcon} style={{ background: "rgba(139, 92, 246, 0.15)", color: "#8b5cf6" }}>
                <GraduationCap size={18} />
              </div>
              <div>
                <div className={styles.floatingCardLabel}>Corporate IT Training</div>
                <div className={styles.floatingCardVal}>GenAI &amp; Cloud Architecture</div>
                <div className={styles.floatingSub}>240+ Enterprise Engineers Certified</div>
              </div>
            </div>

            {/* Floating Card 3: Custom Dev */}
            <div className={`${styles.floatingCard} ${styles.cardBottomLeft} glass-panel animate-float`} style={{ animationDelay: "1s" }}>
              <div className={styles.floatingCardIcon} style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
                <Code size={18} />
              </div>
              <div>
                <div className={styles.floatingCardLabel}>Software Delivery</div>
                <div className={styles.floatingCardVal}>Next.js, TypeScript &amp; AWS</div>
                <div className={styles.floatingSub}>100% Test Coverage &amp; SOC-2 Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={`glass-panel ${styles.statCard}`}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSub}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
