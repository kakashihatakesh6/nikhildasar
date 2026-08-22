import { tool } from '@langchain/core/tools';
import { connectToDatabase } from '../mongodb';
import logger from '../logger';

// Static Data matching the portfolio items
const PROJECTS = [
  {
    title: "Shop-Vista (E-Commerce Store)",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Shop-Vista",
    link: "https://shop-vistaa.netlify.app/",
    description: "A full-featured e-commerce application displaying modern catalog management, persistent global state, and dynamic user interfaces.",
    features: [
      "Responsive layout for smooth shopping experience on desktop and mobile",
      "Dynamic catalog search with sorting, category filters, and rating systems",
      "Global store state managed using Redux Toolkit",
      "Secure online payment processing powered by Razorpay integration",
      "Robust backend API using Express.js and MongoDB database management"
    ],
    techStack: ["Next JS", "React JS", "Redux", "Tailwind", "NodeJS", "JavaScript", "Express", "MongoDB", "Razorpay"]
  },
  {
    title: "Tickora (Booking)",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Tickora-Booking",
    link: "https://tickora-new.vercel.app/",
    description: "A fast, high-performance event ticketing and reservation platform optimized for peak concurrency and data consistency.",
    features: [
      "Scalable booking management powered by high-speed Redis caching layers",
      "Real-time event seating choice maps and ticketing workflows",
      "Stripe or Razorpay payment checkouts with secure transactional callbacks",
      "Responsive portal pages with interactive event categorization and styling"
    ],
    techStack: ["Next JS", "React JS", "Redis", "Tailwind", "NodeJS", "JavaScript", "Express", "Postgres", "Razorpay"]
  },
  {
    title: "Desire-Netflix (Streaming Platform)",
    category: "web",
    github: "https://github.com/kakashihatakesh6/Netflix-Clone",
    link: "https://moviepot-rosy.vercel.app/auth",
    description: "A custom video streaming portal capturing the look and feel of major production video sites, featuring profile creation, persistent search, and trailer playback overlays.",
    features: [
      "Dynamic movie library loading with categories and custom sliders",
      "Video streaming player overlay with media play and pause controllers",
      "User authentication and profile settings with NextAuth database adapters",
      "Clean UI styled using Tailwind CSS and components from Shadcn UI"
    ],
    techStack: ["Next JS", "React JS", "Tailwind", "NodeJS", "Prisma", "TypeScript", "Express", "NextAuth", "Shadcn"]
  },
  {
    title: "Forgeable-AI-Coder (Autonomous AI Code Generation Assistant)",
    category: "web",
    github: "https://github.com/kakashihatakesh6/forgeable-ai-coder",
    description: "Built a prompt-to-code system generating full-stack, ready-to-run applications, reducing development effort by ~60%. Designed end-to-end pipeline for scaffolding, logic generation, and environment setup.",
    features: [
      "Prompt-to-code generation pipeline",
      "Scaffolding and environment setup automation",
      "Improved code quality and MVP delivery"
    ],
    techStack: ["Langchain", "Langgraph", "Python", "Groq"]
  },
  {
    title: "NodeJS-AWS-CI-CD (Automated Deployment Pipeline)",
    category: "devops",
    github: "https://github.com/kakashihatakesh6/NodeJS-AWS-CI-CD",
    description: "Developed a fully automated CI/CD pipeline using GitHub Actions to deploy a Node.js server to AWS EC2 with zero-downtime updates.",
    features: [
      "Docker & Compose containerization",
      "Zero-downtime updates",
      "Secure deployments via SSH and GitHub Secrets"
    ],
    techStack: ["Node.js", "AWS EC2", "Docker", "Docker Compose", "GitHub Actions", "SSH"]
  },
  {
    title: "Spenza AI (Expense Tracker - Android App)",
    category: "mobile",
    github: "https://github.com/kakashihatakesh6/spenza-ai/",
    description: "A mobile financial dashboard application designed to manage daily expenditures, structure monthly budgeting, and generate smart statistical insights.",
    features: [
      "Visual charts displaying transaction history categories and budget limits",
      "Native device integration for attaching receipts and capturing photo invoices",
      "Robust state storage with client authentication checks",
      "Automatic weekly budget summaries and financial alerts"
    ],
    techStack: ["Next JS", "React JS", "Redux", "Tailwind", "NodeJS", "Express", "MongoDB", "Razorpay"]
  },
  {
    title: "Shopify (E-Commerce - Android App)",
    category: "mobile",
    github: "https://github.com/kakashihatakesh6/shopify",
    description: "A fully features, native-feel android application bringing standard e-commerce workflows, reviews, checkouts, and tracking to mobile screens.",
    features: [
      "Fluid page navigation and transitions optimized for mobile gesture inputs",
      "Interactive product details slider and instant item comparison view",
      "Persistent user wishlist and shopping bag local caching",
      "Direct mobile payment checkouts with Razorpay SDK integration"
    ],
    techStack: ["Next JS", "React JS", "Redux", "Tailwind", "NodeJS", "Express", "MongoDB", "Razorpay"]
  },
  {
    title: "Pay Per Parking (Vehicle Parking Booking Application)",
    category: "mobile",
    github: "https://github.com/kakashihatakesh6/Pay_Per_Parking",
    description: "A premium mobile system matching drivers with available parking spaces in real-time. Features geographical slot mapping and reservations.",
    features: [
      "Google Maps API tracking to view nearby available garage parking zones",
      "Live vacancy monitoring and timers connected through Firebase database hooks",
      "Instant reservations checkouts and receipts generated with scan codes",
      "Lightweight, native Kotlin architecture for efficient execution"
    ],
    techStack: ["Kotlin", "XML", "SDK", "Firebase", "Razorpay"]
  }
];

const SKILLS = {
  frontEnd: ["Next JS", "React", "JavaScript", "TypeScript", "Redux", "Material UI", "Shadcn", "Tailwind CSS", "HTML", "CSS"],
  backendAndDatabase: ["NodeJS", "Go", "Express", "JWT", "Prisma", "Postgres", "MongoDB", "GraphQL", "SQL"],
  devOpsAndTools: ["Docker", "AWS", "S3", "AWS EC2", "Heroku", "Netlify", "Vercel", "Git", "GitHub", "Bash Scripting", "Postman", "Photoshop"]
};

const EXPERIENCE = [
  {
    company: "GPU.net",
    role: "Full Stack Developer",
    location: "Squareworks, Bengaluru",
    duration: "May 2025 - Present",
    details: [
      "Subnet Platform: Contributed to the development of decentralized GPU sharing, building dashboards and APIs for subnet creation, GPU staking, and performance tracking.",
      "AI Powered Gamerx Platform: Developed full-stack features using Node.js, Express, PostgreSQL, and Sequelize, implementing AI-driven personalization and gaming quests.",
      "CI/CD Pipelines: Automated build, test, and release workflows using Jenkins and GitHub Actions.",
      "AWS Infrastructure: Deployed services using EC2 Auto Scaling, ELB, and monitored via CloudWatch."
    ]
  },
  {
    company: "QpiAI",
    role: "Full Stack Developer",
    location: "Karle Town, Bengaluru",
    duration: "July 2024 - May 2025",
    details: [
      "Quantum Cloud Platform: Engineered Quantum Circuit Builder UI and integrated Quantum-SDK, improving circuit design speed by 10%.",
      "Course-Selling Platform: Optimized Node.js/Postgres queries, reducing API response times to ~40ms and increasing query speeds by 30%.",
      "Ticketing System: Developed an automated email ticketing system using Nodemailer, boosting resolution efficiency by 25%."
    ]
  },
  {
    company: "Freelancer",
    role: "Full Stack Developer",
    location: "East Homes (Remote)",
    duration: "March 2023 - June 2024",
    details: [
      "Optimized live site load speeds through lazy loading, image compression, and request reduction.",
      "Developed emergency form submission flows using Material UI, Prisma, and NextJS."
    ]
  }
];

export const getProjects = tool(
  async () => {
    return JSON.stringify(PROJECTS, null, 2);
  },
  {
    name: "getProjects",
    description: "Retrieve a list of all software projects built by Nikhil, including titles, descriptions, features, tech stack, and URLs."
  }
);

export const getSkills = tool(
  async () => {
    return JSON.stringify(SKILLS, null, 2);
  },
  {
    name: "getSkills",
    description: "Retrieve Nikhil's technical skill set categorized by Front End, Backend & Database, and DevOps & Tools."
  }
);

export const getExperience = tool(
  async () => {
    return JSON.stringify(EXPERIENCE, null, 2);
  },
  {
    name: "getExperience",
    description: "Retrieve details about Nikhil's professional work experience, company names, roles, duration, locations, and achievements."
  }
);

export const getVisitorStats = tool(
  async () => {
    try {
      const { db } = await connectToDatabase();
      const visitorCollection = db.collection('Visitor');
      const totalVisitors = await visitorCollection.countDocuments();
      
      const countryCursor = await visitorCollection.aggregate([
        { $group: { _id: '$country', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]);
      const countries = await countryCursor.toArray();

      const cityCursor = await visitorCollection.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]);
      const cities = await cityCursor.toArray();

      return JSON.stringify({
        totalVisitors,
        topCountries: countries.map(c => ({ country: c._id || 'Unknown', count: c.count })),
        topCities: cities.map(c => ({ city: c._id || 'Unknown', count: c.count })),
      }, null, 2);
    } catch (error) {
      logger.error('Error fetching visitor stats in tool:', error);
      return JSON.stringify({ error: "Failed to fetch live database visitor statistics." });
    }
  },
  {
    name: "getVisitorStats",
    description: "Retrieve live traffic statistics from Nikhil's portfolio database, including total visitor count, top countries, and top cities."
  }
);

export const tools = [getProjects, getSkills, getExperience, getVisitorStats];
