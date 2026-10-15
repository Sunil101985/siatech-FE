import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  Award,
  Globe,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | SiaTech - Technology, Talent & Training Partner",
  description:
    "Learn about SiaTech's mission, values, and global presence delivering IT consulting, freelance talent, corporate training, and software development."
};

const values = [
  {
    icon: Target,
    title: "Engineering Excellence",
    desc: "We hold ourselves to the highest technical standards. Every architecture blueprint, line of code, and training syllabus is built for high reliability and scale."
  },
  {
    icon: Zap,
    title: "Velocity Without Tech Debt",
    desc: "Speed is essential, but cutting corners creates compounding friction. We deliver fast with automated testing, clean design patterns, and continuous integration."
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    desc: "No hidden costs, no surprise contract lock-ins. You receive daily commits, direct developer communications, and complete code ownership."
  },
  {
    icon: Award,
    title: "Continuous Upskilling",
    desc: "Technology evolves rapidly. We invest heavily in staying at the frontier of Generative AI, cloud infrastructure, and modern application frameworks."
  }
];

const hubs = [
  { city: "San Francisco", region: "North America HQ", focus: "Enterprise Strategy & AI Engineering" },
  { city: "London", region: "European Operations", focus: "FinTech Consulting & Cloud Architecture" },
  { city: "Bangalore", region: "Asia-Pacific Delivery Hub", focus: "Full-Stack Development & Talent Network" },
  { city: "Berlin", region: "Continental Europe Hub", focus: "DevSecOps & Corporate Training Cohorts" }
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <div className="container text-center">
          <div className="section-tag">
            <Sparkles size={14} />
            About SiaTech
          </div>
          <h1 className="section-title">
            Empowering the World with{" "}
            <span className="text-gradient">Transformative Tech &amp; Talent</span>
          </h1>
          <p className="section-desc section-desc-center">
            SiaTech was founded on a simple premise: modern businesses need a single, dependable partner capable of strategic guidance, top-tier engineering talent, workforce upskilling, and end-to-end software delivery.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={`glass-panel ${styles.missionCard}`}>
              <span className="badge badge-cyan" style={{ marginBottom: 12 }}>Our Mission</span>
              <h2 className={styles.cardHeading}>Democratizing Elite Tech Capabilities</h2>
              <p className={styles.cardText}>
                We believe that every forward-thinking enterprise should have access to the world&apos;s top 3% engineering talent and modern software architecture without the bureaucratic drag of traditional IT consultancies.
              </p>
            </div>

            <div className={`glass-panel ${styles.missionCard}`}>
              <span className="badge badge-purple" style={{ marginBottom: 12 }}>Our Vision</span>
              <h2 className={styles.cardHeading}>The Modern Engineering Engine</h2>
              <p className={styles.cardText}>
                To build the world&apos;s most agile ecosystem for technology execution — seamlessly combining strategic advisory, freelance talent pods, cutting-edge training, and high-performance software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <Award size={14} />
              Our Principles
            </div>
            <h2 className="section-title">
              The Values That Drive{" "}
              <span className="text-gradient-cyan">Every SiaTech Delivery</span>
            </h2>
            <p className="section-desc section-desc-center">
              Our culture is built around craftsmanship, transparency, and relentless dedication to our clients&apos; long-term technological success.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={`glass-panel ${styles.valueCard}`}>
                  <div className={styles.valueIconWrap}>
                    <Icon size={24} color="#00f2fe" />
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Delivery Hubs */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <Globe size={14} />
              Global Footprint
            </div>
            <h2 className="section-title">
              Operating Across <span className="text-gradient">Key Tech Hubs</span>
            </h2>
            <p className="section-desc section-desc-center">
              Our distributed network allows 24/7 continuous engineering, seamless timezone alignment, and rapid deployment anywhere in the world.
            </p>
          </div>

          <div className={styles.hubsGrid}>
            {hubs.map((hub, i) => (
              <div key={i} className={`glass-panel ${styles.hubCard}`}>
                <div className={styles.hubCity}>{hub.city}</div>
                <div className={styles.hubRegion}>{hub.region}</div>
                <div className={styles.hubFocus}>{hub.focus}</div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className={styles.aboutCtaCard}>
            <div>
              <h3 className={styles.ctaTitle}>Partner with SiaTech Today</h3>
              <p className={styles.ctaSub}>
                Join 120+ enterprises that trust us for consulting, talent, training, and software engineering.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg">
              <span>Start the Conversation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
