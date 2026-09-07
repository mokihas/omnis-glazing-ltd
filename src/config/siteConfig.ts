export const siteConfig = {
  businessName: "Omnis Glazing Ltd",
  legalBusinessName: "Omnis Glazing Ltd",
  tagline: "Architectural & Structural Glazing",
  primaryCategory: "Glass & Glazing Contractor",
  secondaryCategories: ["Architectural Glazing", "Commercial Glazing", "Residential Glazing"],
  phone: "020 4538 7655",
  whatsapp: "",
  email: "info@omnisglazing.uk",
  website: "https://www.omnisglazing.uk/",
  streetAddress: "Suite 3, 157 Station Road East",
  city: "Oxted",
  state: "Surrey",
  postalCode: "RH8 0QE",
  country: "UK",
  latitude: 51.2612,
  longitude: 0.0003,
  openingHours: [
    { day: "Monday", open: "08:00", close: "17:30" },
    { day: "Tuesday", open: "08:00", close: "17:30" },
    { day: "Wednesday", open: "08:00", close: "17:30" },
    { day: "Thursday", open: "08:00", close: "17:30" },
    { day: "Friday", open: "08:00", close: "17:30" },
    { day: "Saturday", open: "Closed", close: "Closed" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  serviceAreas: [
    { name: "Oxted", slug: "oxted" },
    { name: "Surrey", slug: "surrey" },
    { name: "London", slug: "london" }
  ],
  logo: "/logo.png",
  favicon: "/favicon.ico",
  heroImage: "/images/hero-placeholder.svg",
  aboutImage: "/images/about-placeholder.svg",
  socialProfiles: [
    { platform: "facebook", url: "https://facebook.com/omnisglazing" },
    { platform: "instagram", url: "https://instagram.com/omnisglazing" },
    { platform: "linkedin", url: "https://linkedin.com/company/omnis-glazing-ltd" },
  ],
  reviews: {
    googleBusinessProfileUrl: "https://maps.app.goo.gl/CZvG7ZAi2KGUrLW16",
    aggregateRating: "5.0",
    totalReviews: "1",
    reviewWidgetEmbedCode: `<!-- Paste your Google Reviews Widget Embed Code Here -->`
  },
  trustBadges: [] as Array<{name: string, image: string}>,
  companyRegistrationNumber: "",
  yearEstablished: 2020,
  founder: "",
  description: "Omnis Glazing Ltd provides expert architectural and structural glass installation and replacement solutions in Oxted, Surrey, and across the UK.",
  emergencyService: false,
  certifications: [],
  brands: [],
  services: [
    {
      id: "architectural-glazing",
      name: "Architectural & Structural Glazing",
      slug: "architectural-glazing",
      shortDescription: "High-end bespoke structural glass solutions for residential and commercial spaces.",
      longDescription: "We provide professional architectural glazing services, delivering made-to-measure solutions that push the boundaries of design. Specializing in high-end structural glass for residential and commercial spaces.",
      image: "/images/service-placeholder.svg",
      applications: ["Glass roofs", "Facades", "Wall cladding"],
    },
    {
      id: "commercial-glazing",
      name: "Commercial Glazing",
      slug: "commercial-glazing",
      shortDescription: "Premium commercial glazing solutions including shopfronts, and office partitions.",
      longDescription: "Our commercial glazing services cover a wide range of applications from modern office glass partitions to high-street shopfronts. We focus on safety, security, and architectural aesthetics.",
      image: "/images/commercial-glazing-placeholder.svg",
      applications: ["Shopfronts", "Office partitions", "Curtain walls"],
    },
    {
      id: "residential-glazing",
      name: "Residential Glazing",
      slug: "residential-glazing",
      shortDescription: "Custom residential glass services including glass splashbacks, and shower screens.",
      longDescription: "Enhance your home with our residential glazing solutions. We supply and install bespoke glass splashbacks, frameless shower enclosures, glass balustrades, and external glass doors.",
      image: "/images/residential-glazing-placeholder.svg",
      applications: ["Shower screens", "Splashbacks", "Glass balustrades"],
    },
    {
      id: "specialized-glass",
      name: "Specialized Glass",
      slug: "specialized-glass",
      shortDescription: "Advanced specialized glass like fire glass, acoustic glass, and solar control.",
      longDescription: "We offer advanced specialized glass solutions for demanding environments, including fire glass, acoustic glass, solar control coatings, security laminates, and electrochromic glass.",
      image: "/images/emergency-glazing-placeholder.svg",
      applications: ["Fire glass", "Acoustic glass", "Solar control glass"],
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Client",
      text: "Excellent service and high quality architectural glass installation. Highly recommended.",
      date: "2024-01-15",
      service: "Architectural Glazing"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Commercial Office Partitions",
      type: "Commercial Glazing",
      location: "London",
      service: "commercial-glazing",
      description: "Installation of modern internal glass partitions for an office space.",
      image: "/images/project-1-placeholder.svg"
    },
    {
      id: "project-2",
      title: "Structural Glass Roof",
      type: "Architectural Glazing",
      location: "Surrey",
      service: "architectural-glazing",
      description: "Custom structural glass roof for a high-end residential property.",
      image: "/images/project-2-placeholder.svg"
    }
  ],
  faqs: [
    {
      question: "Do you provide UK-wide installation?",
      answer: "Yes, we are based in Oxted, Surrey, but we have installation teams across the UK and provide UK-wide installation services."
    },
    {
      question: "What types of architectural glazing do you offer?",
      answer: "We offer bespoke made-to-measure glazing solutions including glass roofs, skylights, facades, wall cladding, and external glass doors."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes and will conduct a professional site survey to ensure the perfect fit for your structural glazing."
    },
    {
      question: "Do you service commercial properties?",
      answer: "Absolutely. We manage complex commercial glazing projects, including office partitions, shopfronts, and curtain walls."
    }
  ],
  ghl: {
    enableChatWidget: false,
    chatWidgetEmbedCode: `<!-- Paste your GHL Chat Widget Code Here -->`,
    heroFormEmbedCode: `<!-- Paste your GHL Hero Form Embed Code Here -->`,
    contactFormEmbedCode: `<!-- Paste your GHL Contact Page Form Embed Code Here -->`
  }
};
