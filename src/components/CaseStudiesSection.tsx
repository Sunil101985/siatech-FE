"use client";

import Link from "next/link";
import {
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";
import styles from "./CaseStudiesSection.module.css";

const caseStudies = [
  {
    client: "Global FinTech Exchange",
    category: "Strategic IT Consulting & Cloud Migration",
    stat: "-42%",
    statLabel: "Cloud Cost Optimization",
    impact: "Migrated 80+ legacy financial microservices to AWS EKS with zero downtime during peak trading hours.",
    tech: ["AWS EKS", "Terraform", "Kafka", "PostgreSQL", "DataDog"]
  },
  {
    client: "HealthPulse Diagnostics",
    category: "Turnkey Custom Software Development",
    stat: "1.2M",
    statLabel: "Monthly Active Users",
    impact: "Architected a HIPAA-compliant telemedicine platform with Next.js, real-time video consultation, and automated EHR integration.",
    tech: ["Next.js", "WebRTC", "TypeScript", "FastAPI", "Docker"]
  },
  {
    client: "HyperScale Logistics",
    category: "Freelancer Staff Augmentation",
    stat: "48 hrs",
    statLabel: "Rapid Squad Deployment",
    impact: "Supplied 6 vetted senior full-stack developers to unblock an urgent Q4 dispatch platform release ahead of schedule.",
    tech: ["React Native", "Node.js", "Redis", "Google Cloud", "GraphQL"]
  },
  {
    client: "Apex Enterprise Banking",
    category: "Corporate IT Training & Workforce Upskilling",
    stat: "140+",
    statLabel: "Engineers Upskilled in AI",
    impact: "Delivered an intensive 6-week GenAI & LLM engineering bootcamp, enabling internal teams to launch an internal RAG assistant.",
    tech: ["PyTorch", "LangChain", "Vector DBs", "OpenAI APIs", "Python"]
  }
];

const testimonials = [
  {
    quote:
      "SiaTech didn't just provide developers; they gave us a cohesive engineering force that elevated our entire architecture. We scaled our Next.js application to 500k daily queries with zero hitches.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Apex Cloud Systems",
    rating: 5
  },
  {
    quote:
      "The corporate training SiaTech conducted for our 60+ developers on Kubernetes and Cloud security paid for itself within two months. The hands-on labs and instructor depth were world-class.",
    author: "Marcus Thorne",
    role: "Chief Technology Officer",
    company: "Vanguard Digital Media",
    rating: 5
  },
  {
    quote:
      "Hiring vetted freelance engineers through SiaTech was a game-changer for our venture-backed team. Within 48 hours, we had two senior engineers pushing production commits.",
    author: "Aria Sterling",
    role: "Head of Product",
    company: "NovaPay Financial",
    rating: 5
  }
];

export default function CaseStudiesSection() {
  return (
    <section className={`section ${styles.casesSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <TrendingUp size={14} />
            Measurable Enterprise Outcomes
          </div>
          <h2 className="section-title">
            Proven Results Across{" "}
            <span className="text-gradient">Startups and Global Enterprises</span>
          </h2>
          <p className="section-desc section-desc-center">
            Discover how SiaTech&apos;s consulting, freelance talent squads, corporate training, and software development deliver tangible speed-to-market.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.casesGrid}>
          {caseStudies.map((item, idx) => (
            <div key={idx} className={`glass-panel ${styles.caseCard}`}>
              <div className={styles.caseTop}>
                <span className={styles.categoryBadge}>{item.category}</span>
                <span className={styles.clientName}>{item.client}</span>
              </div>

              <div className={styles.statCallout}>
                <div className={styles.statValue}>{item.stat}</div>
                <div className={styles.statDesc}>{item.statLabel}</div>
              </div>

              <p className={styles.caseImpact}>{item.impact}</p>

              <div className={styles.techPills}>
                {item.tech.map((t) => (
                  <span key={t} className={styles.pill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={styles.testimonialsBlock}>
          <div className="text-center" style={{ marginBottom: 36 }}>
            <h3 className={styles.testimHeading}>What Technology Leaders Say About SiaTech</h3>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`glass-panel ${styles.testimCard}`}>
                <div className={styles.starRow}>
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <Quote size={28} className={styles.quoteIcon} />
                <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.author}</div>
                  <div className={styles.authorTitle}>
                    {t.role} • <span className={styles.companyName}>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
