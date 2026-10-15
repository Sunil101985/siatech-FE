"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Mail,
  CheckCircle2,
  Phone,
  MapPin,
  Shield,
  Award
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Top CTA Banner */}
      <div className="container">
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <div className="badge badge-cyan" style={{ marginBottom: 12 }}>
              <Sparkles size={14} /> Ready to accelerate your roadmap?
            </div>
            <h2 className={styles.ctaHeading}>
              Let&apos;s build next-generation technology together.
            </h2>
            <p className={styles.ctaSubtext}>
              Whether you need strategic IT consulting, top 3% talent in 48 hours, team upskilling, or end-to-end software development.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/hire-talent" className="btn btn-primary btn-lg">
              <span>Hire Top Talent</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Book a Strategy Call
            </Link>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className={styles.mainGrid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Sparkles size={20} />
              </div>
              <span className={styles.logoText}>
                Sia<span className="text-gradient">Tech</span>
              </span>
              <span className={styles.logoBadge}>SOLUTIONS</span>
            </Link>
            <p className={styles.brandDesc}>
              SiaTech is a global technology powerhouse delivering high-impact IT consulting, elite tech freelancers, corporate IT training, and bespoke software engineering.
            </p>

            <div className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <Shield size={16} color="#00f2fe" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className={styles.trustBadge}>
                <Award size={16} color="#8b5cf6" />
                <span>Top 3% Vetted Talent</span>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://github.com/Sunil101985/siatech-FE" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className={styles.colTitle}>Core Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services#consulting">Strategic IT Consulting</Link></li>
              <li><Link href="/hire-talent">Hire Freelance Developers</Link></li>
              <li><Link href="/training">Corporate IT Training</Link></li>
              <li><Link href="/services#development">Custom Software Development</Link></li>
              <li><Link href="/services#cloud">Cloud Architecture & DevOps</Link></li>
              <li><Link href="/services#ai">Generative AI & Data Solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Talent & Hiring */}
          <div>
            <h4 className={styles.colTitle}>Hire Top Roles</h4>
            <ul className={styles.linkList}>
              <li><Link href="/hire-talent?role=fullstack">Full-Stack Next.js Engineers</Link></li>
              <li><Link href="/hire-talent?role=ai">AI & LLM Engineers</Link></li>
              <li><Link href="/hire-talent?role=devops">DevOps & Cloud Architects</Link></li>
              <li><Link href="/hire-talent?role=mobile">React Native & Mobile Devs</Link></li>
              <li><Link href="/hire-talent?role=designer">UI/UX Product Designers</Link></li>
              <li><Link href="/hire-talent?role=qa">QA Automation Specialists</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 className={styles.colTitle}>Stay Informed</h4>
            <p className={styles.newsletterText}>
              Subscribe to the SiaTech Tech Brief for enterprise architecture insights, hiring trends, and AI updates.
            </p>

            {subscribed ? (
              <div className={styles.subscribedMsg}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <div className={styles.contactSnippets}>
              <div className={styles.contactItem}>
                <Mail size={15} color="#00f2fe" />
                <span>contact@siatech.io</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={15} color="#8b5cf6" />
                <span>+1 (800) 555-SIATECH</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={15} color="#10b981" />
                <span>San Francisco • London • Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.statusIndicator}>
            <span className="pulse-dot" />
            <span className={styles.statusText}>All SiaTech Delivery & Training Hubs Active</span>
          </div>
          <div className={styles.copyright}>
            &copy; 2026 SiaTech Solutions Inc. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
