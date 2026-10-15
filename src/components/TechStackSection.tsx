"use client";

import { useState } from "react";
import {
  Code,
  Server,
  Cloud,
  Brain,
  Smartphone,
  Cpu
} from "lucide-react";
import styles from "./TechStackSection.module.css";

const categories = [
  { id: "frontend", name: "Frontend & Web", icon: Code },
  { id: "backend", name: "Backend & Systems", icon: Server },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "ai", name: "AI & Machine Learning", icon: Brain },
  { id: "mobile", name: "Mobile Ecosystem", icon: Smartphone }
];

const technologies: Record<string, Array<{ name: string; tag: string; desc: string }>> = {
  frontend: [
    { name: "Next.js 16", tag: "App Router / SSR", desc: "Production architecture, Server Components & streaming" },
    { name: "React 19", tag: "Component UI", desc: "High-concurrency state, actions & suspense patterns" },
    { name: "TypeScript", tag: "Type Safety", desc: "End-to-end typed contracts across client and server" },
    { name: "Tailwind & CSS", tag: "Design Systems", desc: "Modular, performant CSS architecture and tokens" },
    { name: "WebSockets & WebRTC", tag: "Real-Time", desc: "Low-latency bidirectional data streaming & collaboration" },
    { name: "Micro-Frontends", tag: "Enterprise", desc: "Decoupled domain architectures for large engineering squads" }
  ],
  backend: [
    { name: "Node.js / Express", tag: "High Throughput", desc: "Asynchronous microservices with high concurrent I/O" },
    { name: "Python / FastAPI", tag: "Async APIs", desc: "Blazing fast OpenAPI-compliant microservices & AI hooks" },
    { name: "Go (Golang)", tag: "Systems", desc: "Ultra-efficient concurrent services, networking & daemons" },
    { name: "PostgreSQL & Prisma", tag: "Relational", desc: "ACID transactions, JSONB indexing & connection pooling" },
    { name: "Redis & Valkey", tag: "In-Memory", desc: "High-speed caching, distributed locks & pub/sub channels" },
    { name: "GraphQL & gRPC", tag: "Protocols", desc: "Type-safe schemas, binary streaming & federated graphs" }
  ],
  cloud: [
    { name: "AWS", tag: "Cloud Infrastructure", desc: "ECS, EKS, Lambda, S3, RDS, CloudFront & IAM governance" },
    { name: "Google Cloud (GCP)", tag: "Cloud Infrastructure", desc: "GKE, BigQuery, Cloud Run & Vertex AI pipelines" },
    { name: "Kubernetes (K8s)", tag: "Container Orchestration", desc: "Multi-cluster deployments, Helm, ingress & autoscaling" },
    { name: "Terraform", tag: "IaC", desc: "Repeatable, version-controlled cloud infrastructure as code" },
    { name: "Docker", tag: "Containerization", desc: "Optimized multi-stage container builds & security scanning" },
    { name: "GitHub Actions & ArgoCD", tag: "CI/CD & GitOps", desc: "Automated pipelines with zero-downtime canary rollouts" }
  ],
  ai: [
    { name: "OpenAI & Anthropic APIs", tag: "Foundation Models", desc: "GPT-4o, Claude 3.5 Sonnet integration with tool use" },
    { name: "LangChain & LlamaIndex", tag: "Agentic Frameworks", desc: "Context-aware retrieval, structured output & agent graphs" },
    { name: "Vector Databases", tag: "RAG Systems", desc: "Pinecone, Qdrant, Milvus & pgvector hybrid semantic search" },
    { name: "PyTorch & HuggingFace", tag: "Model Fine-Tuning", desc: "Domain adaptation, LoRA, quantization & local inference" },
    { name: "Guardrails & Evals", tag: "AI Safety", desc: "Hallucination detection, PII masking & automated test suites" },
    { name: "Speech & Vision AI", tag: "Multimodal", desc: "Whisper, OCR, computer vision & real-time audio pipelines" }
  ],
  mobile: [
    { name: "React Native", tag: "Cross-Platform", desc: "Unified native mobile codebases for iOS and Android" },
    { name: "Flutter & Dart", tag: "High Performance", desc: "Smooth 120fps cross-platform mobile apps with rich UI" },
    { name: "Swift & Kotlin", tag: "Native Mobile", desc: "Deep platform integrations, background sync & BLE" },
    { name: "Offline-First Sync", tag: "Architecture", desc: "Local SQLite/WatermelonDB caching with cloud reconciliation" },
    { name: "App Store & Play Store", tag: "Release CI/CD", desc: "Fastlane automated signing, beta tracks & compliance" },
    { name: "Push Notifications", tag: "Engagement", desc: "FCM, APNs, deep linking and targeted segment messaging" }
  ]
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className={`section ${styles.stackSection}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <Cpu size={14} />
            Modern Engineering Stack
          </div>
          <h2 className="section-title">
            Built on Battle-Tested,{" "}
            <span className="text-gradient-cyan">Future-Ready Technologies</span>
          </h2>
          <p className="section-desc section-desc-center">
            Our consultants, freelancers, instructors, and developers master modern, cloud-native frameworks to ensure your software is fast, resilient, and maintainable.
          </p>
        </div>

        {/* Category Pills */}
        <div className={styles.categoryPills}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.catBtn} ${isActive ? styles.catBtnActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={18} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className={styles.techGrid}>
          {technologies[activeCategory].map((tech, index) => (
            <div key={index} className={`glass-panel ${styles.techCard}`}>
              <div className={styles.techCardTop}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <span className={styles.techTag}>{tech.tag}</span>
              </div>
              <p className={styles.techDesc}>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
