export type Contest = {
  id: number;
  title: string;
  description: string;
  organizer: string;
  year: string;
  award?: string | null;
  image?: string | null;
  tags: string[];
  demo: string | null;
  github: string | null;
};

const contests: Contest[] = [
  {
    id: 1,
    title: "STARTer Hackathon",
    description:
      "Served as the backend developer and security engineer while developing LingapLink, a modern healthcare platform built to connect patients and providers through AI-powered triage, secure patient access, intelligent appointment scheduling, encrypted messaging, and provider dashboards with HIPAA-aware design.",
    organizer:
      "National Technovation Summit / Department of Science and Technology",
    year: "2025",
    award: "Champion Team",
    image: "/images/CarmenTheParaSight.png",
    tags: [
      "Hackathon",
      "Backend Development",
      "Security Engineering",
      "Healthcare Platform",
    ],
    demo: null,
    github: null,
  },
  {
    id: 2,
    title: "Space Business Innovation Challenge",
    description:
      "Developed the prototype web and backend foundation for ShelfLife+, an under-development agricultural logistics intelligence platform designed to combine NDVI-based crop signals, in-transit IoT monitoring, and AI-assisted freshness assessment into a decision-support system for reducing post-harvest food waste.",
    organizer: "Philippine Space Agency",
    year: "2025",
    award: "Runner-Up",
    image: "/images/SpaceBusinessInnovationChallenge.jpg",
    tags: ["AgriTech", "Supply Chain Intelligence", "Full-Stack Prototyping"],
    demo: null,
    github: null,
  },
  {
    id: 3,
    title: "Breaking Enigma 2025: National Hackathon Competition",
    description:
      "Built a smart IoT monitoring dashboard for ethylene, temperature, and humidity in crop packaging environments, with an ESP32-based sensor system integrated to Firebase.",
    organizer: "Philippine Startup Week",
    year: "2025",
    award: "Finalist",
    image: "/images/BreakingEnigma.jpg",
    tags: ["National Hackathon", "IoT Dashboard", "ESP32", "Firebase"],
    demo: null,
    github: null,
  },
  {
    id: 4,
    title: "Zero to Agent: Manila Hackathon 2026",
    description:
      "Built PresyoCheck AI, an AI-powered consumer price protection agent for Filipino shoppers that matches product queries against the official DTI Suggested Retail Price dataset, fetches live Philippine e-commerce listings via SerpApi, analyzes price deviations, and generates plain-language compliance verdicts with Gemini 2.5 Flash.",
    organizer: "Vercel",
    year: "2026",
    award: "Participant",
    image: "/images/ZeroToAgent.jpg",
    tags: [
      "AI Agent",
      "Consumer Protection",
      "DTI SRP Compliance",
      "Real-Time Price Analysis",
    ],
    demo: "https://presyo-check.vercel.app/",
    github: "https://github.com/Juaaanits/PresyoCheck",
  },
];

const awardedContests = contests.filter(
  (contest) => contest.award && contest.award !== "Participant",
);
const nonAwardedContests = contests.filter(
  (contest) => !contest.award || contest.award === "Participant",
);

export const featuredContests = [
  ...awardedContests,
  ...nonAwardedContests,
].slice(0, 3);

export default {
  contests,
  featuredContests,
};
