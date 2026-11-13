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
        "My Store is a multi-vendor e-commerce marketplace that brings independent merchants and service providers together on one platform, allowing them to create and manage their own digital storefronts and reach customers.",
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
        "Flo Finance is a digital lending platform designed to make accessing loans simpler and more convenient. It provides users with a straightforward digital experience for navigating the borrowing process and accessing financial support.",
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
        "DPCMS is a christian non-governmental empowerment organization, empowering individuals and communities toward financial stability, better livelihoods through collaborative thrift / savings.",
      solution:
        "Developed a cooperative management platform supporting member registration, contributions, referrals, and administrative operations.",
    },
  },
  {
    slug: "liana-thread",
    name: "Liana Thread",
    type: "Web, Web App",
    description:
      "Lilian Thread is a native-wear fashion brand focused on creating stylish and well-crafted traditional outfits. It allows customers to explore collections, browse products, make purchases, save favourites, and request custom-made outfits based on their preferences.",
    role: "Front-end",
    screenshot: "/assets/shot-liana.jpg",
    caseStudy: {
      gallery: "/assets/case-liana.png",
      year: 2026,
      platforms: ["Web", "Web App"],
      stack: ["React", "TypeScript"],
      overview:
        "Lilian Thread is a native-wear fashion brand focused on creating stylish and well-crafted traditional outfits. It allows customers to explore collections, browse products, make purchases, save favourites, and request custom-made outfits based on their preferences.",
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
        "Luxora is a real estate platform developed to help individuals and businesses navigate property ownership, investment, development, leasing, and management through accessible digital solutions.",
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
    },
  },
];

export const featuredProjects = projects.slice(0, 4);
