// Central content file. Edit prices, contact details, and photos here.

export const site = {
  name: "Coastal Glass & Ground",
  tagline: "Property care from glass to ground.",
  // TODO: replace with real contact details before launch.
  phone: "(000) 000-0000",
  email: "hello@coastalglassandground.com",
  location: "San Diego, CA",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Plans", href: "/#plans" },
  { label: "Commercial", href: "/#commercial" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// Photos: drop files in /public/images and set the paths below
// (e.g. hero: "/images/hero.jpg"). Leave null to show the styled placeholder.
export const images = {
  hero: "/images/hero.jpg" as string | null, // wide shot: storefront or modern glass in coastal light
  windows: "/images/windows.jpg" as string | null, // squeegee on large glass pane
  pressure: null as string | null, // clean sidewalk / entryway
  detail: null as string | null, // tidy exterior, planters, entry
  recurring: null as string | null, // office or restaurant frontage
  commercial: null as string | null, // tall commercial glass facade
  before: null as string | null, // same window, dirty
  after: null as string | null, // same window, clean
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  visits: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "biweekly",
    name: "Biweekly",
    price: "$299",
    cadence: "/ month",
    visits: "2 window cleanings per month",
    description: "Glass that stays sharp, on a schedule you set once.",
    features: [
      "Window cleaning every other week",
      "Fixed recurring schedule",
      "Add pressure washing or cleanup anytime",
      "Simple monthly billing",
    ],
    cta: "Start this plan",
    featured: true,
  },
  {
    id: "weekly",
    name: "Weekly",
    price: "Custom",
    cadence: "",
    visits: "4 window cleanings per month",
    description: "For storefronts, restaurants, and high-traffic glass.",
    features: [
      "Window cleaning every week",
      "Priced to your property",
      "Bundle with entryway pressure washing",
      "Simple monthly billing",
    ],
    cta: "Request pricing",
  },
  {
    id: "commercial",
    name: "Commercial",
    price: "Custom",
    cadence: "",
    visits: "Built around your property",
    description: "For property managers and multi-location businesses.",
    features: [
      "Custom visit frequency",
      "Window, pressure washing, and detail work",
      "One point of contact",
      "Multi-property scheduling",
    ],
    cta: "Request commercial pricing",
  },
];

export const services = [
  {
    title: "Window Cleaning",
    body: "Interior and exterior glass cleaning for homes, storefronts, offices, and commercial properties.",
    image: images.windows,
    tone: "glass" as const,
  },
  {
    title: "Pressure Washing",
    body: "Sidewalks, entryways, patios, exterior surfaces, and high-traffic areas.",
    image: images.pressure,
    tone: "stone" as const,
  },
  {
    title: "Property Detail",
    body: "Light exterior cleanup and finishing touches that keep your property looking maintained.",
    image: images.detail,
    tone: "sea" as const,
  },
  {
    title: "Recurring Commercial Service",
    body: "Flexible maintenance plans for businesses and properties that need consistent presentation.",
    image: images.recurring,
    tone: "dusk" as const,
  },
];

export const faqs = [
  {
    q: "How do the subscription plans work?",
    a: "Pick a visit frequency and we put your property on a fixed recurring schedule. The Biweekly plan is $299 per month for two window cleanings. Weekly and commercial plans are priced to your property.",
  },
  {
    q: "Do you clean both residential and commercial windows?",
    a: "Yes. We work with homes, storefronts, offices, and commercial properties.",
  },
  {
    q: "Do you offer one-time service?",
    a: "Yes. One-time cleanings are available. Recurring service is where we focus, because consistent upkeep keeps a property looking its best.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes. Send us basic property details and photos and we can provide a quote or schedule a walkthrough when needed.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve San Diego and surrounding communities.",
  },
  {
    q: "Can I combine window cleaning with other exterior services?",
    a: "Yes. Depending on the property, we can bundle window cleaning with pressure washing and light exterior cleanup.",
  },
];

export const areas = [
  "San Diego",
  "Downtown San Diego",
  "Mission Valley",
  "Point Loma",
  "Coronado",
  "National City",
  "Chula Vista",
  "La Mesa",
];
