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
  ChevronUp
} from "lucide-react";
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

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
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
        </div>

        <div className={styles.grid}>
          {/* Left: Contact Form */}
          <div className={`glass-panel ${styles.formCard}`}>
            {submitted ? (
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
