"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Users,
  GraduationCap,
  Code2,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";
import styles from "./ServicesGrid.module.css";

const servicesData = [
  {
    id: "consulting",
    title: "Strategic IT & Cloud Consulting",
    tagline: "Modernize enterprise infrastructure & accelerate digital velocity",
    icon: Layers,
    accentColor: "#00f2fe",
    badge: "Enterprise Advisory",
    image: "/images/consulting-arch.jpg",
    description:
      "We partner with CTOs and technology leaders to assess legacy infrastructure, engineer scalable multi-cloud architectures, blueprint AI transformation, and execute zero-downtime migrations.",
    deliverables: [
      "Enterprise Cloud Architecture & Multi-Cloud Strategy (AWS / Azure / GCP)",
      "Generative AI & LLM Integration Readiness Roadmaps",
      "DevOps Automation, CI/CD Pipelines & Kubernetes Orchestration",
      "Cybersecurity, Zero-Trust Audits & ISO/SOC-2 Compliance",
      "Legacy Monolith Modernization & Microservices Deconstruction"
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Zero-Trust", "Kafka"],
    actionText: "Schedule Consultation",
    actionLink: "/contact?service=consulting",
    engagementModel: "Advisory retainers, project architecture audits, or interim CTO/VPE advisory"
  },
  {
    id: "freelancers",
    title: "Freelancer Hire & Staff Augmentation",
    tagline: "Deploy vetted top 3% engineering talent in 48 hours",
    icon: Users,
    accentColor: "#8b5cf6",
    badge: "Top 3% Vetted Talent",
    image: "/images/dev-workspace.jpg",
    description:
      "Eliminate hiring bottlenecks. Access elite pre-screened software engineers, full-stack developers, cloud architects, and UI/UX designers ready to integrate directly into your sprint teams.",
    deliverables: [
      "Vetted Top 3% Global Talent with proven technical & communication benchmarks",
      "48-Hour Matching & Immediate Sprint Onboarding",
      "1-Week Risk-Free Trial with zero financial obligation if not satisfied",
      "Flexible engagement: dedicated full-time, part-time hourly, or project-based squads",
      "Seamless timezone alignment and English fluency guaranteed"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Go", "React Native", "PostgreSQL"],
    actionText: "Hire Developers Now",
    actionLink: "/hire-talent",
    engagementModel: "Dedicated monthly staff augmentation, hourly freelance contracts, or autonomous pods"
  },
  {
    id: "training",
    title: "Enterprise IT Solutions Training",
    tagline: "Empower your technical workforce with cutting-edge engineering skills",
    icon: GraduationCap,
    accentColor: "#10b981",
    badge: "Corporate Upskilling",
    image: "/images/hero-network.jpg",
    description:
      "Bridge internal technology gaps. Our senior practitioners deliver live, interactive, project-based bootcamps designed specifically for enterprise software teams looking to adopt modern stacks.",
    deliverables: [
      "Production-Ready Generative AI & LLM Systems Engineering bootcamp",
      "Enterprise Kubernetes, Docker & GitOps Masterclass",
      "Modern Full-Stack Web Architecture with Next.js & Server Components",
      "Cloud Security & DevSecOps Automated Compliance workshops",
      "Hands-on capstone labs, code reviews, and post-training mentoring"
    ],
    techStack: ["Next.js 16", "OpenAI / Anthropic APIs", "LangChain", "Kubernetes", "AWS EKS", "GitHub Actions"],
    actionText: "Explore Curriculum",
    actionLink: "/training",
    engagementModel: "Private corporate cohorts (10-100 engineers), customized syllabi, or executive workshops"
  },
  {
    id: "software-dev",
    title: "Custom Software Development",
    tagline: "Bespoke web, mobile & SaaS platforms engineered for high throughput",
    icon: Code2,
    accentColor: "#4facfe",
    badge: "Full-Cycle Delivery",
    image: "/images/consulting-arch.jpg",
    description:
      "From zero-to-one MVP builds to enterprise-grade platforms scaling to millions of users. We architect, design, develop, test, and maintain robust, high-performance software systems.",
    deliverables: [
      "Scalable SaaS Applications with multi-tenancy & billing infrastructure",
      "High-Performance Web Platforms built on Next.js, React, and TypeScript",
      "Native & Cross-Platform Mobile Applications (iOS, Android, React Native)",
      "Enterprise APIs, Event-Driven Microservices & Real-Time Data Pipelines",
      "Complete CI/CD pipelines, automated testing suites, and 24/7 SLA maintenance"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Python/FastAPI", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    actionText: "Request Project Proposal",
    actionLink: "/contact?service=development",
    engagementModel: "Fixed-price milestone delivery, time & materials, or dedicated product engineering squad"
  }
];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const displayedServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.id === activeTab);

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <Sparkles size={14} />
            Our Four Core Pillars
          </div>
          <h2 className="section-title">
            Comprehensive Services Tailored for{" "}
            <span className="text-gradient">Tech Excellence</span>
          </h2>
          <p className="section-desc section-desc-center">
            Whether you need strategic advisory, on-demand elite talent, team upskilling, or turnkey software development, SiaTech provides end-to-end expertise.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${activeTab === "all" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Services
          </button>
          {servicesData.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                className={`${styles.tabBtn} ${activeTab === s.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(s.id)}
              >
                <Icon size={16} />
                <span>{s.title.split(" ")[0]} {s.title.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Services Showcase Cards */}
        <div className={styles.cardsGrid}>
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`glass-panel ${styles.serviceCard}`}
                style={{ borderColor: activeTab === service.id ? service.accentColor : undefined }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.cardIconWrap}
                    style={{
                      background: `rgba(255, 255, 255, 0.05)`,
                      color: service.accentColor,
                      border: `1px solid ${service.accentColor}33`
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <span
                    className={styles.cardBadge}
                    style={{
                      color: service.accentColor,
                      background: `${service.accentColor}15`,
                      border: `1px solid ${service.accentColor}35`
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardTagline}>{service.tagline}</p>
                <p className={styles.cardDesc}>{service.description}</p>

                <div className={styles.deliverablesList}>
                  <div className={styles.deliverableTitle}>Key Capabilities &amp; Deliverables:</div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className={styles.deliverableItem}>
                      <CheckCircle2 size={16} style={{ color: service.accentColor, flexShrink: 0, marginTop: 2 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className={styles.techStackWrap}>
                  <span className={styles.techLabel}>Technologies:</span>
                  <div className={styles.techPills}>
                    {service.techStack.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement Model info */}
                <div className={styles.engagementWrap}>
                  <Clock size={15} color="#94a3b8" />
                  <span className={styles.engagementText}>{service.engagementModel}</span>
                </div>

                {/* Bottom Action */}
                <div className={styles.cardFooter}>
                  <Link
                    href={service.actionLink}
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
