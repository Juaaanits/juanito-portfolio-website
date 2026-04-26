export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
}

const projects: Project[] = [
  {
    id: 4,
    title: "AI Cursor Init",
    description:
      "The AI-powered documentation framework that lives inside your IDE. Generate Architecture Decision Records, system diagrams, and onboarding guides with simple slash commands.",
    image:
      "https://github.com/mgiovani/ai-cursor-init/raw/main/images/system-architecture-example.png",
    tags: ["AI", "Documentation", "IDE", "Framework"],
    github: "https://github.com/mgiovani/ai-cursor-init/",
    demo: "https://github.com/mgiovani/ai-cursor-init/?tab=readme-ov-file#-visual-showcase",
  },
  {
    id: 1,
    title: "MyInstants Discord Bot",
    description: "A discord bot to play MyInstants sounds to your friends.",
    image:
      "https://camo.githubusercontent.com/4b1917eff3bda4e61188df670776876b702136fb1dfb9fcbd4bdb8d68189069d/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f36314c4e416f324b39524c2e706e67",
    tags: ["Python", "Discord", "Bot"],
    github: "https://github.com/mgiovani/my-instants-discord-bot",
    demo: "https://discord.com/oauth2/authorize?client_id=836019264124354571",
  },
  {
    id: 2,
    title: "Base 16 Whatsapp Theme",
    description: "A Whatsapp Web theme inspired by the Dark Base 16 colors.",
    image:
      "https://camo.githubusercontent.com/1b6684c7c3ad58073423a154fa0709eb215c096fec5aa32b6a430240aaa7ce55/68747470733a2f2f692e696d6775722e636f6d2f733134694f54392e706e67",
    tags: ["CSS", "Javascript"],
    github: "https://github.com/mgiovani/base16-whatsapp",
    demo: null,
  },
  {
    id: 3,
    title: "Covid Data Tracker",
    description:
      "API, OCR, and data extraction to track Covid cases in Montes Claros - Brazil.",
    image: null,
    tags: ["Python", "Go", "Docker"],
    github: "https://github.com/mgiovani/mocorona",
    demo: null,
  },
]

export const featuredProjects = [projects[0], projects[1], projects[2]]

export default {
  projects,
  featuredProjects,
}
