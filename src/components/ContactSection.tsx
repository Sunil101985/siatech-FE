"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Send,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  Copy,
  Sparkles
} from "lucide-react";
import { GOOGLE_FORM_CONFIG } from "@/config/forms";
import styles from "./ContactSection.module.css";

const faqs = [
  {
    q: "How fast can SiaTech deploy freelance developers to our project?",
    a: "We match and onboard pre-screened top 3% developers within 48 hours. After an initial technical introduction and mutual fit confirmation, engineers can begin committing code immediately."
  },
  {
    q: "How does the 1-week risk-free trial work?",
    a: "When you hire freelance developers or squads through SiaTech, your first week is completely risk-free. If you are not 100% satisfied with the engineer's output or team velocity, you owe nothing."
  },
  {
    q: "Can you customize corporate training for our tech stack?",
    a: "Yes. All corporate IT training tracks are customized to your team's specific requirements, current codebase, cloud provider (AWS/GCP/Azure), and tooling preferences."
  },
  {
    q: "Who owns the code and intellectual property for software development?",
    a: "You retain 100% full legal intellectual property and code ownership from day one. All deliverables, repositories, and documentation are transferred seamlessly under standard enterprise NDAs."
  }
];

export default function ContactSection() {
  const [formMode, setFormMode] = useState<"web" | "google">("web");
  const [googleUrl, setGoogleUrl] = useState(GOOGLE_FORM_CONFIG.embedUrl);
  const [tempGoogleUrl, setTempGoogleUrl] = useState("");
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "freelancers",
    budget: "$25k - $50k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSetGoogleUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempGoogleUrl.trim()) {
      let finalUrl = tempGoogleUrl.trim();
      // Auto-append embedded=true if it's a standard viewform link
      if (finalUrl.includes("docs.google.com/forms") && !finalUrl.includes("embedded=true")) {
        finalUrl += (finalUrl.includes("?") ? "&" : "?") + "embedded=true";
      }
      setGoogleUrl(finalUrl);
    }
  };

  const copyBlueprintText = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 40 }}>
          <div className="section-tag">
            <Mail size={14} />
            Let&apos;s Build Together
          </div>
          <h2 className="section-title">
            Start Your Project with <span className="text-gradient">SiaTech</span>
          </h2>
          <p className="section-desc section-desc-center">
            Tell us about your requirements. An enterprise technical solutions architect will review your inquiry and respond within 4 business hours.
          </p>

          {/* Form Mode Toggle */}
          <div className={styles.modeToggleWrap}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${formMode === "web" ? styles.toggleBtnActive : ""}`}
              onClick={() => setFormMode("web")}
            >
              <Send size={15} />
              <span>Interactive Website Form</span>
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${formMode === "google" ? styles.toggleBtnActive : ""}`}
              onClick={() => setFormMode("google")}
            >
              <FileSpreadsheet size={15} />
              <span>Google Form Integration</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Left: Contact Form or Google Form */}
          <div className={`glass-panel ${styles.formCard}`}>
            {formMode === "web" ? (
              submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={48} color="#10b981" />
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Received!</h3>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{formData.name}</strong>. A SiaTech solutions director has received your request regarding <strong>{formData.service}</strong> and will reach out to <strong>{formData.email}</strong> with next steps.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "freelancers",
                        budget: "$25k - $50k",
                        message: ""
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Primary Service Needed *</label>
                      <select
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="consulting">IT &amp; Cloud Consulting</option>
                        <option value="freelancers">Freelancer Hire / Staff Augmentation</option>
                        <option value="training">Corporate IT Training</option>
                        <option value="software-dev">Custom Software Development</option>
                        <option value="all">Multiple Services / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Monthly Budget / Project Scope</label>
                    <select
                      className="form-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="< $15k">&lt; $15,000</option>
                      <option value="$15k - $30k">$15,000 - $30,000</option>
                      <option value="$30k - $60k">$30,000 - $60,000</option>
                      <option value="$60k+">$60,000+ Enterprise Scope</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Details or Talent Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your tech stack, timeline, team requirements, or business objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div className={styles.formFooter}>
                    <div className={styles.securityNote}>
                      <ShieldCheck size={16} color="#00f2fe" />
                      <span>Protected by strict NDA &amp; Enterprise Confidentiality</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                      <span>Send Inquiry &amp; Request Strategy Call</span>
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              )
            ) : (
              /* Google Form Integration Mode */
              <div className={styles.googleFormContainer}>
                {googleUrl ? (
                  <div className={styles.iframeWrapper}>
                    <div className={styles.iframeBar}>
                      <span className={styles.googleBadge}>
                        <FileSpreadsheet size={14} /> Google Form Live
                      </span>
                      <button
                        type="button"
                        className={styles.changeLinkBtn}
                        onClick={() => setGoogleUrl("")}
                      >
                        Change Google Form Link
                      </button>
                    </div>
                    <iframe
                      src={googleUrl}
                      title="SiaTech Google Form"
                      className={styles.googleIframe}
                      frameBorder="0"
                    >
                      Loading Google Form…
                    </iframe>
                  </div>
                ) : (
                  <div className={styles.connectGoogleCard}>
                    <div className={styles.googleIconCircle}>
                      <FileSpreadsheet size={32} color="#00f2fe" />
                    </div>
                    <h3 className={styles.googleTitle}>Connect Your Google Form</h3>
                    <p className={styles.googleDesc}>
                      Paste the link or embed URL of your Google Form below to display it directly inside this section for your visitors.
                    </p>

                    <form onSubmit={handleSetGoogleUrl} className={styles.urlInputForm}>
                      <input
                        type="url"
                        required
                        placeholder="https://docs.google.com/forms/d/e/.../viewform?embedded=true"
                        value={tempGoogleUrl}
                        onChange={(e) => setTempGoogleUrl(e.target.value)}
                        className={`form-input ${styles.urlInput}`}
                      />
                      <button type="submit" className="btn btn-primary">
                        Embed Google Form
                      </button>
                    </form>

                    <div className={styles.blueprintDivider} />

                    <div className={styles.blueprintPrompt}>
                      <div className={styles.blueprintText}>
                        <strong>Need to create the Google Form?</strong> We prepared the exact questions, types, and options ready for you to copy.
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => setShowBlueprint(!showBlueprint)}
                      >
                        <Sparkles size={14} color="#00f2fe" />
                        <span>{showBlueprint ? "Hide Blueprint" : "View Questions Blueprint"}</span>
                      </button>
                    </div>

                    {showBlueprint && (
                      <div className={styles.blueprintList}>
                        <h4 className={styles.blueprintHeading}>
                          Recommended Google Form Questions &amp; Types:
                        </h4>
                        {GOOGLE_FORM_CONFIG.fields.map((f, i) => (
                          <div key={f.id} className={styles.blueprintItem}>
                            <div className={styles.blueprintHeader}>
                              <span className={styles.fieldIndex}>Q{i + 1}</span>
                              <span className={styles.fieldLabel}>{f.label}</span>
                              {f.required && <span className={styles.reqBadge}>Required</span>}
                              <span className={styles.typeBadge}>{f.type}</span>
                            </div>
                            {f.options && (
                              <div className={styles.optionsList}>
                                {f.options.map((opt, oIdx) => (
                                  <div key={oIdx} className={styles.optionBullet}>
                                    • {opt}
                                  </div>
                                ))}
                              </div>
                            )}
                            <button
                              type="button"
                              className={styles.copyBtn}
                              onClick={() => copyBlueprintText(f.label, i)}
                            >
                              <Copy size={12} />
                              <span>{copiedIndex === i ? "Copied!" : "Copy Question"}</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Info & FAQ Accordion */}
          <div className={styles.rightInfo}>
            {/* Quick Contact Info */}
            <div className={`glass-panel ${styles.infoBox}`}>
              <h3 className={styles.infoTitle}>Connect with SiaTech Direct</h3>
              <div className={styles.contactList}>
                <div className={styles.contactPoint}>
                  <div className={styles.pointIcon} style={{ color: "#00f2fe" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className={styles.pointLabel}>Direct Email</div>
                    <div className={styles.pointVal}>enterprise@siatech.io</div>
                  </div>
                </div>
                <div className={styles.contactPoint}>
                  <div className={styles.pointIcon} style={{ color: "#8b5cf6" }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className={styles.pointLabel}>Global Helpline</div>
                    <div className={styles.pointVal}>+1 (800) 555-SIATECH (7428)</div>
                  </div>
                </div>
                <div className={styles.contactPoint}>
                  <div className={styles.pointIcon} style={{ color: "#10b981" }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className={styles.pointLabel}>Response Time SLA</div>
                    <div className={styles.pointVal}>Under 4 hours (24/7 Mon-Fri)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className={styles.faqBlock}>
              <h4 className={styles.faqBlockTitle}>Frequently Asked Questions</h4>
              <div className={styles.faqList}>
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className={styles.faqItem}>
                      <button
                        type="button"
                        className={styles.faqQuestion}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {isOpen && <p className={styles.faqAnswer}>{faq.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
