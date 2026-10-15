"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Users,
  GraduationCap,
  Layers,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import styles from "./Navbar.module.css";

const services = [
  {
    name: "IT & Cloud Consulting",
    href: "/services#consulting",
    desc: "Cloud migration, enterprise architecture & AI roadmaps",
    icon: Layers,
    color: "#00f2fe"
  },
  {
    name: "Hire Freelancers & Tech Talent",
    href: "/hire-talent",
    desc: "Top 3% vetted developers, engineers & designers in 48h",
    icon: Users,
    color: "#8b5cf6"
  },
  {
    name: "Corporate IT Training",
    href: "/training",
    desc: "Upskill enterprise teams in Cloud, AI, and Fullstack",
    icon: GraduationCap,
    color: "#10b981"
  },
  {
    name: "Custom Software Development",
    href: "/services#development",
    desc: "Full-cycle SaaS, mobile, and web platform engineering",
    icon: Code2,
    color: "#4facfe"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdown(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Sparkles size={20} className={styles.logoSparkle} />
          </div>
          <span className={styles.logoText}>
            Sia<span className="text-gradient">Tech</span>
          </span>
          <span className={styles.logoBadge}>PRO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownTrigger} ${
                pathname.startsWith("/services") ? styles.active : ""
              }`}
              onClick={() => setServicesDropdown(!servicesDropdown)}
            >
              Services
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${
                  servicesDropdown ? styles.chevronOpen : ""
                }`}
              />
            </button>

            {servicesDropdown && (
              <div className={styles.megaMenu}>
                <div className={styles.menuGrid}>
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={styles.menuItem}
                        onClick={() => setServicesDropdown(false)}
                      >
                        <div
                          className={styles.menuIconWrap}
                          style={{
                            background: `rgba(255, 255, 255, 0.05)`,
                            color: item.color
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className={styles.menuItemTitle}>
                            {item.name}
                          </div>
                          <div className={styles.menuItemDesc}>
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className={styles.menuFooter}>
                  <div className={styles.menuFooterText}>
                    <ShieldCheck size={16} color="#00f2fe" />
                    <span>Guaranteed NDA & ISO 27001-Compliant Delivery</span>
                  </div>
                  <Link href="/services" className={styles.menuFooterLink}>
                    View All Services <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/hire-talent"
            className={`${styles.navLink} ${
              pathname === "/hire-talent" ? styles.active : ""
            }`}
          >
            Hire Talent
            <span className={styles.navPill}>Top 3%</span>
          </Link>

          <Link
            href="/training"
            className={`${styles.navLink} ${
              pathname === "/training" ? styles.active : ""
            }`}
          >
            IT Training
          </Link>

          <Link
            href="/about"
            className={`${styles.navLink} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`${styles.navLink} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className={styles.headerActions}>
          <Link href="/contact" className="btn btn-secondary btn-sm">
            Talk to an Expert
          </Link>
          <Link href="/hire-talent" className="btn btn-primary btn-sm">
            <span>Hire Developers</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile hamburger button */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            <div className={styles.mobileCategory}>Services</div>
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={18} style={{ color: item.color }} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className={styles.mobileDivider} />

            <Link
              href="/hire-talent"
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users size={18} color="#8b5cf6" />
              <span>Hire Freelancers & Talent</span>
            </Link>

            <Link
              href="/training"
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap size={18} color="#10b981" />
              <span>Corporate IT Training</span>
            </Link>

            <Link
              href="/about"
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About SiaTech</span>
            </Link>

            <Link
              href="/contact"
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact Us</span>
            </Link>

            <div className={styles.mobileCtaGroup}>
              <Link
                href="/hire-talent"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%" }}
              >
                Hire Developers Now
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%" }}
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
