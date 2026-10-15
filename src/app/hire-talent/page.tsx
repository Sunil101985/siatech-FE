"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Briefcase,
  Search,
  Filter,
  Sparkles
} from "lucide-react";
import TalentCalculator from "@/components/TalentCalculator";
import styles from "./hire.module.css";

const sampleTalent = [
  {
    id: 1,
    name: "Dmitri V.",
    title: "Lead Full-Stack Next.js & React Architect",
    exp: "9+ Years Exp",
    location: "Berlin, Germany (CET)",
    skills: ["Next.js 16", "React 19", "TypeScript", "Node.js", "GraphQL", "TailwindCSS"],
    availability: "Available Immediately (40h/wk)",
    verified: "Top 1% Global",
    bio: "Ex-fintech tech lead. Architected scalable frontend platforms processing $20M+ daily transactions. Expert in Next.js Server Components and edge caching.",
    hourlyRate: "$65/hr"
  },
  {
    id: 2,
    name: "Priya S.",
    title: "Senior AI & Generative LLM Engineer",
    exp: "7+ Years Exp",
    location: "Bangalore, India (IST / Flexible to US)",
    skills: ["Python", "PyTorch", "LangChain", "OpenAI APIs", "Pinecone", "FastAPI"],
    availability: "Available in 48 Hours",
    verified: "Top 3% Vetted",
    bio: "Engineered production multi-agent RAG pipelines and autonomous code generation workflows. Published researcher in transformer embeddings.",
    hourlyRate: "$70/hr"
  },
  {
    id: 3,
    name: "Carlos M.",
    title: "Staff Cloud & Kubernetes Architect",
    exp: "11+ Years Exp",
    location: "Austin, TX (EST/CST)",
    skills: ["AWS", "Kubernetes (EKS)", "Terraform", "Docker", "GitOps", "Datadog"],
    availability: "Available in 24 Hours",
    verified: "AWS Certified Solution Architect Pro",
    bio: "Specializes in multi-region high availability and zero-downtime microservices migrations. Reduced cloud bills by an average of 35% across 14 clients.",
    hourlyRate: "$85/hr"
  },
  {
    id: 4,
    name: "Sarah L.",
    title: "Senior UI/UX Product Designer & Systems Lead",
    exp: "8+ Years Exp",
    location: "Toronto, Canada (EST)",
    skills: ["Figma", "Design Systems", "Prototyping", "UX Research", "HTML/CSS"],
    availability: "Available Immediately (Part-time or Full-time)",
    verified: "Top 2% Vetted",
    bio: "Crafts high-converting, deeply aesthetic SaaS interfaces and design systems. Led UX redesigns for B2B enterprise apps with over 2M users.",
    hourlyRate: "$55/hr"
  },
  {
    id: 5,
    name: "Alexei K.",
    title: "Senior Mobile Engineer (React Native & iOS)",
    exp: "6+ Years Exp",
    location: "Warsaw, Poland (CET)",
    skills: ["React Native", "TypeScript", "Swift", "Kotlin", "Redux", "Offline Sync"],
    availability: "Available in 48 Hours",
    verified: "Top 3% Vetted",
    bio: "Delivered 12+ 5-star mobile apps across consumer and enterprise sectors. Master of high-performance gesture animations and offline-first database sync.",
    hourlyRate: "$58/hr"
  },
  {
    id: 6,
    name: "Mei-Ling Z.",
    title: "Lead DevOps & SecOps Engineer",
    exp: "8+ Years Exp",
    location: "Singapore (SGT / Flexible)",
    skills: ["Kubernetes", "Azure", "GCP", "CI/CD Security", "ArgoCD", "Vault"],
    availability: "Available in 3 Days",
    verified: "SOC-2 Compliance Specialist",
    bio: "Automates SOC-2 Type II, ISO 27001, and HIPAA compliance pipelines. Hardens container clusters and builds airtight GitOps workflows.",
    hourlyRate: "$75/hr"
  }
];

export default function HireTalentPage() {
  const [filterRole, setFilterRole] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTalent = sampleTalent.filter((candidate) => {
    const matchesFilter =
      filterRole === "all" ||
      candidate.title.toLowerCase().includes(filterRole.toLowerCase()) ||
      candidate.skills.some((s) => s.toLowerCase().includes(filterRole.toLowerCase()));
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={styles.hirePage}>
      {/* Hero */}
      <section className={styles.hireHero}>
        <div className="container text-center">
          <div className="section-tag">
            <Users size={14} />
            Top 3% Global Engineering Talent
          </div>
          <h1 className="section-title">
            Hire Elite Freelancers &amp;{" "}
            <span className="text-gradient">Dedicated Tech Squads</span>
          </h1>
          <p className="section-desc section-desc-center">
            Scale your engineering capacity on demand. Every developer is rigorously vetted for technical depth, system design, and communication excellence.
          </p>

          <div className={styles.heroPerks}>
            <div className={styles.heroPerk}>
              <Zap size={18} color="#00f2fe" />
              <span>48-Hour Matching</span>
            </div>
            <div className={styles.heroPerk}>
              <ShieldCheck size={18} color="#10b981" />
              <span>1-Week Risk-Free Trial</span>
            </div>
            <div className={styles.heroPerk}>
              <Clock size={18} color="#8b5cf6" />
              <span>Timezone Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Showcase Directory */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Search & Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.searchBox}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search by skill (e.g. Next.js, Python, AWS, Figma)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.roleFilters}>
              <button
                type="button"
                className={`${styles.filterBtn} ${filterRole === "all" ? styles.filterBtnActive : ""}`}
                onClick={() => setFilterRole("all")}
              >
                All Profiles
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${filterRole === "next.js" ? styles.filterBtnActive : ""}`}
                onClick={() => setFilterRole("next.js")}
              >
                Next.js / Frontend
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${filterRole === "ai" ? styles.filterBtnActive : ""}`}
                onClick={() => setFilterRole("ai")}
              >
                AI &amp; LLMs
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${filterRole === "cloud" ? styles.filterBtnActive : ""}`}
                onClick={() => setFilterRole("cloud")}
              >
                Cloud / DevOps
              </button>
              <button
                type="button"
                className={`${styles.filterBtn} ${filterRole === "mobile" ? styles.filterBtnActive : ""}`}
                onClick={() => setFilterRole("mobile")}
              >
                Mobile
              </button>
            </div>
          </div>

          {/* Candidate Grid */}
          <div className={styles.candidatesGrid}>
            {filteredTalent.map((cand) => (
              <div key={cand.id} className={`glass-panel ${styles.candidateCard}`}>
                <div className={styles.candidateTop}>
                  <div>
                    <div className={styles.candHeader}>
                      <h3 className={styles.candName}>{cand.name}</h3>
                      <span className="badge badge-cyan">{cand.verified}</span>
                    </div>
                    <div className={styles.candTitle}>{cand.title}</div>
                  </div>
                  <div className={styles.rateTag}>{cand.hourlyRate}</div>
                </div>

                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <Briefcase size={14} color="#94a3b8" />
                    <span>{cand.exp}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={14} color="#94a3b8" />
                    <span>{cand.location}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className="pulse-dot" />
                    <span style={{ color: "#34d399", fontWeight: 600 }}>{cand.availability}</span>
                  </div>
                </div>

                <p className={styles.candBio}>{cand.bio}</p>

                <div className={styles.candSkills}>
                  {cand.skills.map((s) => (
                    <span key={s} className={styles.skillPill}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className={styles.candAction}>
                  <Link
                    href={`/contact?role=${encodeURIComponent(cand.title)}&candidate=${encodeURIComponent(cand.name)}`}
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    <span>Interview {cand.name.split(" ")[0]}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredTalent.length === 0 && (
            <div className={styles.noResults}>
              <Users size={36} color="#64748b" />
              <p>No candidates match your current search criteria.</p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setFilterRole("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Talent Calculator */}
      <TalentCalculator />

      {/* How It Works Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">
              <Zap size={14} />
              Frictionless Hiring
            </div>
            <h2 className="section-title">
              Our 4-Step <span className="text-gradient">Vetting &amp; Onboarding Process</span>
            </h2>
            <p className="section-desc section-desc-center">
              We remove the trial-and-error from hiring software engineers. Here is how we get you production-ready developers in 48 hours.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`glass-panel ${styles.stepCard}`}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Tell Us What You Need</h3>
              <p className={styles.stepDesc}>
                Share your required tech stack, seniority, team timezone, and project scope in a quick 20-minute briefing with our engineering director.
              </p>
            </div>

            <div className={`glass-panel ${styles.stepCard}`}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Receive 2-3 Matched Profiles</h3>
              <p className={styles.stepDesc}>
                Within 24 to 48 hours, we present hand-selected profiles from our top 3% network with verified code samples and architecture portfolios.
              </p>
            </div>

            <div className={`glass-panel ${styles.stepCard}`}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Conduct Technical Interview</h3>
              <p className={styles.stepDesc}>
                Meet the candidates directly. Evaluate cultural fit, technical communication, and ask your custom engineering questions.
              </p>
            </div>

            <div className={`glass-panel ${styles.stepCard}`}>
              <div className={styles.stepNumber}>04</div>
              <h3 className={styles.stepTitle}>1-Week Risk-Free Trial</h3>
              <p className={styles.stepDesc}>
                Start your sprint with complete peace of mind. If you are not completely thrilled after the first week, you owe zero dollars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
