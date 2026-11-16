export type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  role: string;
  screenshot: string;
  /** Omit or leave empty when the project is not live yet. */
  liveUrl?: string;
  caseStudy: {
    tagline?: string;
    /** Pre-composed gallery image; otherwise the screenshot is split into three panels. */
    gallery?: string;
    year: number;
    platforms: string[];
    stack: string[];
    overview: string;
    challenge?: string;
    solution?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "get-a-pro",
    name: "GET A PRO",
    type: "Website",
    description:
      "Get A Pro is a service marketplace designed to connect customers with skilled artisans and service professionals. The platform provides a structured way for customers to discover service providers, request jobs, and manage service-related transactions.",
    role: "Front-end",
    screenshot: "/assets/shot-getapro.jpg",
    liveUrl: "https://getaprong.com/",
    caseStudy: {
      tagline: "Getting Jobs made Easier",
      gallery: "/assets/case-getapro.png",
      year: 2026,
      platforms: ["Website", "Web Admin"],
      stack: ["React", "Node.js", "TypeScript"],
      overview:
        "Get A Pro is a service marketplace designed to connect customers with skilled artisans and service professionals. The platform provides a structured way for customers to discover service providers, request jobs, and manage service-related transactions.",
      challenge:
        "Finding reliable artisans and managing service requests through disconnected channels can be difficult for customers and service providers.",
      solution:
        "Built an informative website to help users understand the platform's services and benefits, alongside an admin dashboard that enables administrators to oversee, manage, and control the platform's operations.",
    },
  },
  {
    slug: "my-store",
    name: "My Store",
    type: "Web, Web App",
    description:
      "My Store is a multi-vendor e-commerce marketplace that brings independent merchants and service providers together on one platform, allowing them to create and manage their own digital storefronts and reach customers",
    role: "Front-end",
    screenshot: "/assets/shot-mystore.jpg",
    caseStudy: {
      gallery: "/assets/case-mystore.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["React", "TypeScript"],
      overview:
        "My Store is a multi-vendor e-commerce marketplace that brings independent merchants and service providers together on one platform. Vendors can set up their own digital storefronts, list products and services, and manage orders, while customers browse multiple stores and shop in one place.",
      challenge:
        "Small merchants often struggle to get online without the cost and complexity of building their own store, and customers have no single place to discover and buy from independent vendors.",
      solution:
        "Built the customer-facing marketplace and vendor web app, including storefront pages, product listings, cart and checkout flows, and vendor dashboards for managing products and orders, with responsive interfaces that work smoothly across devices.",
    },
  },
  {
    slug: "flo-finance",
    name: "Flo Finance",
    type: "Web, Web App",
    description:
      "Flo Finance is a digital lending platform designed to make accessing loans simpler and more convenient. It provides users with a straightforward digital experience for navigating the borrowing process and accessing financial support.",
    role: "Front-end",
    screenshot: "/assets/shot-flo.jpg",
    liveUrl: "https://flofinanceng.com/",
    caseStudy: {
      gallery: "/assets/case-flo.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      overview:
        "Flo Finance is a digital lending platform designed to make accessing loans simpler and more convenient. It gives users a clear, guided digital experience for applying for loans, tracking repayments, and accessing savings and other financial products.",
      challenge:
        "Traditional loan processes are slow, paperwork-heavy, and hard to follow, which discourages people from seeking the financial support they need.",
      solution:
        "Contributed to building the platform's web experience for accessing loans, savings, and financial products, with responsive interfaces focused on accessibility and user experience.",
    },
  },
  {
    slug: "dpcms",
    name: "DPCMS",
    type: "Website",
    description:
      "DPCMS is a christian non-governmental empowerment organization, empowering individuals and communities toward financial stability, better livelihoods through collaborative thrift / savings.",
    role: "Front-end",
    screenshot: "/assets/shot-dpcms.jpg",
    liveUrl: "https://www.destinypromoterscooperative.com/",
    caseStudy: {
      gallery: "/assets/case-dpcms.png",
      year: 2026,
      platforms: ["Website"],
      stack: ["Next.js", "React", "TypeScript"],
      overview:
        "DPCMS (Destiny Promoters Cooperative) is a Christian non-governmental empowerment organization helping individuals and communities build financial stability and better livelihoods through collaborative thrift and savings.",
      challenge:
        "Managing cooperative members, contributions, and referrals manually made records hard to track, slowed down administration, and limited how easily new members could join.",
      solution:
        "Developed a cooperative management platform supporting member registration, contributions, referrals, and administrative operations.",
    },
  },
  {
    slug: "liana-thread",
    name: "Liana Thread",
    type: "Web, Web App",
    description:
      "Liana Thread is a native-wear fashion brand focused on creating stylish and well-crafted traditional outfits. It allows customers to explore collections, browse products, make purchases, save favourites, and request custom-made outfits based on their preferences.",
    role: "Front-end",
    screenshot: "/assets/shot-liana.jpg",
    caseStudy: {
      gallery: "/assets/case-liana.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["React", "TypeScript"],
      overview:
        "Liana Thread is a native-wear fashion brand creating stylish, well-crafted traditional outfits. The platform lets customers explore collections, shop ready-made pieces, save favourites, and request custom-made outfits tailored to their measurements and style.",
      challenge:
        "Selling native wear largely through social media made it hard for customers to browse full collections, place orders reliably, or request custom pieces without long back-and-forth conversations.",
      solution:
        "Built an online storefront and customer web app with collection browsing, product pages, favourites, cart and checkout, and a custom-order request flow, presenting the brand's craftsmanship through a clean, visual-first interface.",
    },
  },
  {
    slug: "luxora",
    name: "Luxora",
    type: "Website",
    description:
      "Luxora is a real estate platform developed to help individuals and businesses navigate property ownership, investment, development, leasing, and management through accessible digital solutions.",
    role: "Front-end",
    screenshot: "/assets/shot-luxora.jpg",
    caseStudy: {
      gallery: "/assets/case-luxora.png",
      year: 2026,
      platforms: ["Website"],
      stack: ["React", "TypeScript"],
      overview:
        "Luxora is a real estate platform that helps individuals and businesses navigate property ownership, investment, development, leasing, and management through accessible digital solutions.",
      challenge:
        "Real estate information is often scattered and hard to trust, making it difficult for buyers, investors, and tenants to understand available services and take the next step with confidence.",
      solution:
        "Built a modern, responsive website that clearly presents Luxora's services, property offerings, and investment opportunities, with structured content and clear calls to action that guide visitors toward enquiries.",
    },
  },
  {
    slug: "noble-merry",
    name: "Noble Merry",
    type: "Web, Web App",
    description:
      "Noble Merry is a digital thrift platform that enables users to make weekly contributions over a 50-week cycle and earn returns at the end of the cycle, with or without referrals.",
    role: "Front-end",
    screenshot: "/assets/shot-noblemerry.jpg",
    liveUrl: "https://noblemerrycompany.com/",
    caseStudy: {
      gallery: "/assets/case-noblemerry.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["React", "TypeScript"],
      overview:
        "Noble Merry is a digital thrift platform that enables users to make weekly contributions over a 50-week cycle and earn returns at the end of the cycle, with or without referrals.",
      challenge:
        "Traditional thrift groups rely on manual record-keeping and trust between members, which makes contributions hard to track and payouts difficult to verify.",
      solution:
        "Built the website and user web app for registration, weekly contribution tracking, referral management, and cycle progress, giving members a transparent view of their savings and expected returns.",
    },
  },
  {
    slug: "fortune",
    name: "Fortune",
    type: "Web, Web App",
    description:
      "Fortune Initiatives is a food supply company that expanded into thrift and savings services, offering users a structured 50-week savings plan with opportunities to earn additional returns through referrals or regular contributions",
    role: "Front-end",
    screenshot: "/assets/shot-fortune.jpg",
    liveUrl: "https://fortuneinitiativeng.com/",
    caseStudy: {
      gallery: "/assets/case-fortune.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["React", "TypeScript"],
      overview:
        "Fortune Initiatives is a food supply company that expanded into thrift and savings services, offering users a structured 50-week savings plan with opportunities to earn additional returns through referrals or regular contributions.",
      challenge:
        "Expanding from food supply into savings meant members needed a dependable way to sign up, follow their contributions, and understand how referrals affect their returns.",
      solution:
        "Built the website and member web app for onboarding, contribution tracking, referral earnings, and plan progress, presenting both the food supply business and the savings plan in one clear experience.",
    },
  },
];

export const featuredProjects = projects.slice(0, 4);
