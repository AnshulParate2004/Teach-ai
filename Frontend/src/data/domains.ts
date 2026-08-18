export type DomainStatus = "live" | "coming-soon";

export interface Domain {
  slug: string;
  name: string;
  icon: "sparkles" | "chart" | "atom" | "blocks" | "briefcase" | "heart" | "megaphone" | "palette" | "landmark" | "leaf" | "users";
  description: string;
  problemCount: number;
  status: DomainStatus;
  topics: string[];
}

export const domains: Domain[] = [
  {
    slug: "design-ui-ux",
    name: "Design & UI/UX",
    icon: "palette",
    description: "Job simulations and virtual internships for the Design & UI/UX sector.",
    problemCount: 2,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "government-public-services",
    name: "Government & Public Services",
    icon: "landmark",
    description: "Job simulations and virtual internships for the Government & Public Services sector.",
    problemCount: 1,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "tech-development",
    name: "Tech & Development",
    icon: "briefcase",
    description: "Job simulations and virtual internships for the Tech & Development sector.",
    problemCount: 9,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart",
    description: "Job simulations and virtual internships for the Healthcare sector.",
    problemCount: 1,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "consulting-strategy",
    name: "Consulting & Strategy",
    icon: "briefcase",
    description: "Job simulations and virtual internships for the Consulting & Strategy sector.",
    problemCount: 1,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "customer-service",
    name: "Customer Service",
    icon: "users",
    description: "Job simulations and virtual internships for the Customer Service sector.",
    problemCount: 3,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: "leaf",
    description: "Job simulations and virtual internships for the Agriculture sector.",
    problemCount: 1,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
  {
    slug: "marketing-branding",
    name: "Marketing & Branding",
    icon: "megaphone",
    description: "Job simulations and virtual internships for the Marketing & Branding sector.",
    problemCount: 2,
    status: "live",
    topics: ["AI", "Data", "Business Logic"],
  },
];

export const getDomain = (slug: string) => domains.find((d) => d.slug === slug);
