"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  FileCheck
} from "lucide-react";
import styles from "./TalentCalculator.module.css";

const rolesData = [
  { id: "fullstack", name: "Senior Full-Stack Engineer", skills: "Next.js, React, Node.js, TypeScript, PostgreSQL", baseRate: 48 },
  { id: "ai", name: "AI & GenAI Solutions Engineer", skills: "Python, PyTorch, OpenAI API, LangChain, RAG Systems", baseRate: 65 },
  { id: "cloud", name: "Cloud & DevOps Architect", skills: "AWS, Kubernetes, Terraform, Docker, CI/CD, GitOps", baseRate: 60 },
  { id: "mobile", name: "Mobile Engineer (React Native/Flutter)", skills: "React Native, iOS, Android, Redux, GraphQL", baseRate: 50 },
  { id: "designer", name: "Senior UI/UX Product Designer", skills: "Figma, Design Systems, Prototyping, User Research", baseRate: 45 },
  { id: "qa", name: "QA Automation & Test Architect", skills: "Cypress, Playwright, Jest, CI pipelines, Load Testing", baseRate: 40 }
];

const seniorityMultipliers = {
  mid: { label: "Mid-Level (3-5 Years)", multiplier: 0.85 },
  senior: { label: "Senior Engineer (5-8 Years)", multiplier: 1.0 },
  lead: { label: "Tech Lead / Architect (8+ Years)", multiplier: 1.35 }
};

const commitmentOptions = [
  { id: "fulltime", label: "Full-Time Dedicated (40h / week)", hours: 160 },
  { id: "parttime", label: "Part-Time Dedicated (20h / week)", hours: 80 },
  { id: "hourly", label: "Flexible Hourly / Ad-Hoc", hours: 40 }
];

export default function TalentCalculator() {
  const [selectedRole, setSelectedRole] = useState(rolesData[0]);
  const [seniority, setSeniority] = useState<"mid" | "senior" | "lead">("senior");
  const [commitment, setCommitment] = useState(commitmentOptions[0]);
  const [engineersCount, setEngineersCount] = useState(1);

  // Compute estimated rates
  const effectiveHourly = Math.round(selectedRole.baseRate * seniorityMultipliers[seniority].multiplier);
  const monthlyEst = effectiveHourly * commitment.hours * engineersCount;

  return (
    <section className={`section ${styles.calcSection}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <Users size={14} />
            Instant Talent Matching Calculator
          </div>
          <h2 className="section-title">
            Configure Your On-Demand{" "}
            <span className="text-gradient-cyan">Engineering Squad</span>
          </h2>
          <p className="section-desc section-desc-center">
            Estimate your monthly investment and get matched with pre-vetted top 3% developers ready to integrate into your sprints within 48 hours.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          {/* Left Column: Interactive Selectors */}
          <div className={styles.calcLeft}>
            {/* Step 1: Select Role */}
            <div className={styles.inputBlock}>
              <label className={styles.blockLabel}>
                <span className={styles.stepNum}>1</span> Select Technical Specialization:
              </label>
              <div className={styles.roleGrid}>
                {rolesData.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`${styles.roleCard} ${selectedRole.id === role.id ? styles.roleActive : ""}`}
                    onClick={() => setSelectedRole(role)}
                  >
                    <div className={styles.roleName}>{role.name}</div>
                    <div className={styles.roleSkills}>{role.skills}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Seniority */}
            <div className={styles.inputBlock}>
              <label className={styles.blockLabel}>
                <span className={styles.stepNum}>2</span> Experience &amp; Seniority Level:
              </label>
              <div className={styles.pillsRow}>
                {(Object.keys(seniorityMultipliers) as Array<"mid" | "senior" | "lead">).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={`${styles.pillBtn} ${seniority === lvl ? styles.pillActive : ""}`}
                    onClick={() => setSeniority(lvl)}
                  >
                    {seniorityMultipliers[lvl].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Commitment & Team Size */}
            <div className={styles.inputBlock}>
              <div className={styles.twoCol}>
                <div>
                  <label className={styles.blockLabel}>
                    <span className={styles.stepNum}>3</span> Engagement Model:
                  </label>
                  <select
                    className="form-select"
                    value={commitment.id}
                    onChange={(e) => {
                      const found = commitmentOptions.find((c) => c.id === e.target.value);
                      if (found) setCommitment(found);
                    }}
                  >
                    {commitmentOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={styles.blockLabel}>
                    <span className={styles.stepNum}>4</span> Number of Engineers:
                  </label>
                  <div className={styles.counterWrap}>
                    <button
                      type="button"
                      className={styles.counterBtn}
                      onClick={() => setEngineersCount(Math.max(1, engineersCount - 1))}
                    >
                      -
                    </button>
                    <span className={styles.counterVal}>{engineersCount}</span>
                    <button
                      type="button"
                      className={styles.counterBtn}
                      onClick={() => setEngineersCount(Math.min(10, engineersCount + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Estimate */}
          <div className={styles.calcRight}>
            <div className={styles.summaryBox}>
              <div className={styles.summaryBadge}>
                <Sparkles size={14} /> Estimated Investment
              </div>

              <div className={styles.priceWrap}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{monthlyEst.toLocaleString()}</span>
                <span className={styles.period}>/ month</span>
              </div>

              <div className={styles.hourlyNote}>
                Equivalent to ~<strong>${effectiveHourly}</strong> / hour per engineer
              </div>

              <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                  <span>Selected Role:</span>
                  <strong>{selectedRole.name}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Seniority:</span>
                  <strong>{seniorityMultipliers[seniority].label.split(" ")[0]}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Team Size:</span>
                  <strong>{engineersCount} Engineer{engineersCount > 1 ? "s" : ""}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Timezone Match:</span>
                  <strong>EST, PST, CET, or IST</strong>
                </div>
              </div>

              <div className={styles.perksList}>
                <div className={styles.perkItem}>
                  <ShieldCheck size={16} color="#10b981" />
                  <span>1-Week Risk-Free Trial Period</span>
                </div>
                <div className={styles.perkItem}>
                  <Zap size={16} color="#00f2fe" />
                  <span>Matched &amp; ready in 48 hours</span>
                </div>
                <div className={styles.perkItem}>
                  <FileCheck size={16} color="#8b5cf6" />
                  <span>100% Code &amp; IP Ownership</span>
                </div>
              </div>

              <Link
                href={`/contact?role=${encodeURIComponent(selectedRole.name)}&seniority=${seniority}&count=${engineersCount}`}
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginTop: 24 }}
              >
                <span>Request Candidate Profiles</span>
                <ArrowRight size={18} />
              </Link>

              <p className={styles.trialDisclaimer}>
                No upfront commitment. Review candidate resumes &amp; schedule interviews within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
