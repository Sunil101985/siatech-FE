"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle,
  Download,
  ArrowRight,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";
import styles from "./TrainingSpotlight.module.css";

const tracks = [
  {
    id: "genai",
    title: "Generative AI & LLM Engineering",
    duration: "6 Weeks • Live Hands-On",
    level: "Advanced Engineering",
    icon: Cpu,
    tag: "High Demand",
    color: "#00f2fe",
    summary:
      "Move beyond toy prompts to building enterprise-grade, high-throughput AI agents, RAG pipelines, fine-tuned domain models, and evaluations.",
    modules: [
      "Foundations of Transformers, Embedding Spaces & Attention Mechanisms",
      "Production RAG: Hybrid Vector Search (Pinecone/Qdrant), Chunking & Rerankers",
      "Fine-Tuning Open Source LLMs (Llama 3 / Mistral) with LoRA & QLoRA",
      "Building Autonomous Agentic Workflows with LangGraph & Tool Calling",
      "Guardrails, Prompt Injection Defense & Enterprise Cost/Latency Optimization"
    ],
    audience: "Senior Software Engineers, ML Engineers & Technical Architects"
  },
  {
    id: "cloud-k8s",
    title: "Enterprise Kubernetes & Cloud Architecture",
    duration: "5 Weeks • Lab Intensive",
    level: "Intermediate - Advanced",
    icon: Layers,
    tag: "Core Infrastructure",
    color: "#8b5cf6",
    summary:
      "Master modern multi-cloud engineering, infrastructure-as-code, zero-trust service meshes, and resilient cloud-native architectures.",
    modules: [
      "Container Internals, Docker Multi-Stage Optimization & Image Hardening",
      "Kubernetes in Production: Ingress, Helm, StatefulSets & Autoscaling (HPA/KEDA)",
      "Infrastructure as Code with Terraform & AWS / GCP Provider Best Practices",
      "GitOps Continuous Delivery with ArgoCD & Progressive Canary Deployments",
      "Distributed Observability with Prometheus, Grafana, OpenTelemetry & Jaeger"
    ],
    audience: "DevOps Engineers, Systems Administrators & Cloud Developers"
  },
  {
    id: "nextjs-fullstack",
    title: "Next.js & Modern Web Architecture",
    duration: "4 Weeks • Project-Based",
    level: "All Engineering Levels",
    icon: Terminal,
    tag: "Modern Frontend",
    color: "#10b981",
    summary:
      "Learn how to build high-performance, SEO-dominating, fullstack web applications using Next.js App Router, React Server Components, and Edge APIs.",
    modules: [
      "Next.js App Router Deep Dive: Server Components, Streaming & Suspense",
      "Server Actions, Dynamic Form Validation & Optimistic UI Updates",
      "High-Performance Rendering: Incremental Static Regeneration (ISR) & Edge Caching",
      "Database Integration: PostgreSQL, Prisma, Drizzle & Connection Pooling",
      "Authentication & Security: NextAuth, JWTs, RBAC & CSRF Protection"
    ],
    audience: "Frontend, Backend & Full-Stack Developers transitioning to modern frameworks"
  }
];

export default function TrainingSpotlight() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [downloadModal, setDownloadModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setDownloaded(true);
      setTimeout(() => {
        setDownloadModal(false);
        setDownloaded(false);
        setEmailInput("");
      }, 2500);
    }
  };

  return (
    <section className={`section ${styles.trainingSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <GraduationCap size={14} />
            Workforce Upskilling &amp; IT Training
          </div>
          <h2 className="section-title">
            Transform Your Engineering Teams with{" "}
            <span className="text-gradient">Production-Grade Training</span>
          </h2>
          <p className="section-desc section-desc-center">
            Designed and taught by industry architects. We empower corporate engineering departments to master AI, Cloud, and Full-Stack frameworks through immersive, code-first workshops.
          </p>
        </div>

        {/* Training Highlights Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statBox}>
            <div className={styles.statNum}>120+</div>
            <div className={styles.statText}>Corporate Batches Delivered</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>98.5%</div>
            <div className={styles.statText}>Post-Training Skill Adoption</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>4.9 / 5</div>
            <div className={styles.statText}>Average Instructor Rating</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>100%</div>
            <div className={styles.statText}>Hands-On Lab &amp; Code Reviews</div>
          </div>
        </div>

        {/* Track Selector & Content Panel */}
        <div className={styles.contentGrid}>
          {/* Track Tabs */}
          <div className={styles.tracksNav}>
            {tracks.map((track) => {
              const Icon = track.icon;
              const isActive = selectedTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  className={`${styles.trackBtn} ${isActive ? styles.trackBtnActive : ""}`}
                  onClick={() => setSelectedTrack(track)}
                >
                  <div
                    className={styles.trackIconWrap}
                    style={{
                      background: isActive ? `${track.color}25` : "rgba(255, 255, 255, 0.04)",
                      color: track.color
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div className={styles.trackInfo}>
                    <div className={styles.trackHeader}>
                      <span className={styles.trackDuration}>{track.duration}</span>
                      <span className={styles.trackTag} style={{ color: track.color }}>
                        {track.tag}
                      </span>
                    </div>
                    <div className={styles.trackTitle}>{track.title}</div>
                  </div>
                </button>
              );
            })}

            {/* Custom Corporate Bootcamp Banner */}
            <div className={styles.customTrainingCard}>
              <div className={styles.customCardTitle}>Need a Custom Corporate Cohort?</div>
              <p className={styles.customCardText}>
                We build bespoke training syllabi aligned with your company&apos;s exact internal tech stack, architecture, and coding standards.
              </p>
              <Link href="/contact?service=training" className="btn btn-outline-cyan btn-sm">
                Inquire Corporate Plan <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Track Detail Card */}
          <div className={`glass-panel ${styles.detailCard}`}>
            <div className={styles.detailHeader}>
              <div>
                <span className="badge badge-purple" style={{ marginBottom: 8 }}>
                  {selectedTrack.level}
                </span>
                <h3 className={styles.detailTitle}>{selectedTrack.title}</h3>
                <div className={styles.detailDuration}>
                  <Calendar size={15} color="#00f2fe" />
                  <span>{selectedTrack.duration} • Live Instructor Sessions + Interactive Sandbox</span>
                </div>
              </div>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setDownloadModal(true)}
              >
                <Download size={15} />
                <span>Download Syllabus</span>
              </button>
            </div>

            <p className={styles.detailSummary}>{selectedTrack.summary}</p>

            <div className={styles.curriculumSection}>
              <div className={styles.curriculumHeading}>
                <BookOpen size={18} color="#8b5cf6" />
                <span>Comprehensive Curriculum Breakdown</span>
              </div>
              <div className={styles.moduleList}>
                {selectedTrack.modules.map((mod, i) => (
                  <div key={i} className={styles.moduleItem}>
                    <div className={styles.moduleNum}>0{i + 1}</div>
                    <div className={styles.moduleContent}>{mod}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.targetAudience}>
              <strong>Ideal For:</strong> {selectedTrack.audience}
            </div>

            <div className={styles.detailActions}>
              <Link
                href={`/contact?training=${encodeURIComponent(selectedTrack.title)}`}
                className="btn btn-primary"
              >
                <span>Enroll Your Team in {selectedTrack.title.split(" ")[0]}</span>
                <ArrowRight size={16} />
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => setDownloadModal(true)}
              >
                Request Course Outline PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Modal */}
      {downloadModal && (
        <div className={styles.modalOverlay} onClick={() => setDownloadModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Download Full Syllabus</h3>
            <p className={styles.modalSub}>
              Enter your corporate email to instantly receive the 12-page curriculum blueprint for{" "}
              <strong>{selectedTrack.title}</strong>.
            </p>

            {downloaded ? (
              <div className={styles.downloadSuccess}>
                <CheckCircle size={28} color="#10b981" />
                <div>
                  <div style={{ fontWeight: 700, color: "#ffffff" }}>Syllabus Sent!</div>
                  <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                    Check your inbox for the download link.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownload}>
                <div className="form-group">
                  <label className="form-label">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Download Syllabus PDF
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setDownloadModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
