const publicPath = process.env.PUBLIC_URL || "";

const projects = [
  {
    id: "kraken-market-dashboard",
    title: "Kraken Market Dashboard",
    category: "Real-time market dashboard",
    description:
      "A dark-first crypto dashboard with live Kraken WebSocket prices, historical charts, local watchlists, price alerts, and portfolio tracking.",
    image: `${publicPath}/projects/crypto-dashboard.png`,
    imageAlt: "Kraken Market Dashboard showing live crypto prices and market data",
    technologies: ["React", "TypeScript", "WebSocket", "Recharts"],
    sourceUrl:
      "https://github.com/mohadesehesmaeilzadeh/crypto-price-tracker",
    liveUrl:
      "https://mohadesehesmaeilzadeh.github.io/crypto-price-tracker/",
  },
  {
    id: "nebula-desk",
    title: "NebulaDesk",
    category: "Interactive web desktop",
    description:
      "A frontend portfolio reimagined as an operating system, with a boot flow, window manager, searchable Start Menu, interactive apps, and persistent preferences.",
    image: `${publicPath}/projects/nebula-desk.png`,
    imageAlt: "NebulaDesk interface with desktop icons and an interactive terminal",
    technologies: ["React", "Vite", "Vitest", "Local storage"],
    sourceUrl: "https://github.com/mohadesehesmaeilzadeh/nebula-desk",
  },
  {
    id: "bookloom",
    title: "Bookloom",
    category: "Personal reading tracker",
    description:
      "A local-first library for managing books, reading sessions, goals, backups, and analytics, with Open Library search and Persian RTL support.",
    image: `${publicPath}/projects/bookloom.png`,
    imageAlt: "Bookloom dashboard with reading statistics and progress cards",
    technologies: ["React", "React Router", "Recharts", "Open Library API"],
    sourceUrl: "https://github.com/mohadesehesmaeilzadeh/bookloom",
  },
  {
    id: "next-store",
    title: "NextStore",
    category: "Responsive storefront",
    description:
      "A Next.js storefront with server-rendered products, search and filters, a persistent Redux cart, guarded account routes, and a multi-step demo checkout.",
    image: `${publicPath}/projects/next-store.png`,
    imageAlt: "NextStore landing page with product imagery and shopping navigation",
    technologies: ["Next.js", "Redux Toolkit", "GraphQL", "Playwright"],
    sourceUrl: "https://github.com/mohadesehesmaeilzadeh/nextjs-store",
  },
  {
    id: "react-survey",
    title: "React Survey",
    category: "Accessible questionnaire",
    description:
      "A refresh-safe multi-step survey with multiple question types, guarded navigation, a persistent two-minute deadline, and tested completion states.",
    image: `${publicPath}/projects/react-survey.png`,
    imageAlt: "React Survey start screen with a user information form",
    technologies: ["React", "useReducer", "Framer Motion", "Testing Library"],
    sourceUrl: "https://github.com/mohadesehesmaeilzadeh/react-survey-app",
    liveUrl: "https://mohadesehesmaeilzadeh.github.io/react-survey-app/",
  },
  {
    id: "frontend-blog",
    title: "Frontend Blog",
    category: "Developer publishing platform",
    description:
      "An accessibility-first Gatsby blog with MDX articles, client-side search, topic archives, related content, persistent themes, RSS, and social metadata.",
    image: `${publicPath}/projects/frontend-blog.png`,
    imageAlt: "Frontend blog homepage with developer introduction and article cards",
    technologies: ["Gatsby", "React", "MDX", "SEO"],
    sourceUrl:
      "https://github.com/mohadesehesmaeilzadeh/gatsby-personal-blog",
  },
];

export default projects;
