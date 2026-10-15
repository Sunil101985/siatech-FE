/**
 * Google Form Configuration for SiaTech
 *
 * To connect your own Google Form:
 * 1. Open Google Forms (forms.google.com) and create your form.
 * 2. Click "Send" -> Select the "< >" (Embed HTML) tab or the Link tab.
 * 3. Copy the URL inside src="..." or the share link.
 * 4. Paste it into `GOOGLE_FORM_EMBED_URL` below!
 */

export const GOOGLE_FORM_CONFIG = {
  // Paste your Google Form embed URL here:
  // e.g. "https://docs.google.com/forms/d/e/1FAIpQLSc_Example.../viewform?embedded=true"
  embedUrl: "",

  // Suggested Form Title & Description
  formTitle: "SiaTech Client & Talent Inquiry Form",
  formDescription:
    "Please fill out this form to request IT consulting, hire vetted freelancers, book corporate training, or start a software development project.",

  // Question Blueprint to create in your Google Form:
  fields: [
    {
      id: "name",
      label: "Full Name",
      type: "Short answer",
      required: true,
      placeholder: "e.g., Alex Mercer"
    },
    {
      id: "email",
      label: "Work Email",
      type: "Short answer",
      required: true,
      placeholder: "e.g., alex@company.com"
    },
    {
      id: "phone",
      label: "Phone / WhatsApp",
      type: "Short answer",
      required: false,
      placeholder: "e.g., +1 (555) 019-2834"
    },
    {
      id: "company",
      label: "Company / Organization Name",
      type: "Short answer",
      required: true,
      placeholder: "e.g., Acme Innovations"
    },
    {
      id: "service",
      label: "Primary Service Required",
      type: "Multiple choice / Dropdown",
      required: true,
      options: [
        "Strategic IT & Cloud Consulting",
        "Hire Freelancers / Dedicated Engineers",
        "Corporate IT Training & Workforce Upskilling",
        "Custom Software & SaaS Development",
        "Multiple Services / Enterprise Package"
      ]
    },
    {
      id: "budget",
      label: "Estimated Project Budget / Scope",
      type: "Multiple choice / Dropdown",
      required: false,
      options: [
        "Under $15,000",
        "$15,000 - $30,000",
        "$30,000 - $60,000",
        "$60,000+ Enterprise Scope"
      ]
    },
    {
      id: "timeline",
      label: "Target Kickoff Timeline",
      type: "Multiple choice",
      required: false,
      options: [
        "Immediate (Within 48 hours)",
        "Within 2 weeks",
        "Within 1 month",
        "Planning / Exploring stage"
      ]
    },
    {
      id: "message",
      label: "Project Scope or Technical Requirements",
      type: "Paragraph",
      required: false,
      placeholder: "Describe your stack, goals, team size, or deliverables..."
    }
  ]
};
