export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Publication = {
  title: string
  description: string
  year: string
  link?: string
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    location: string
    linkedin: string
    github: string | null
    website: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
  }
  summary: string[]
  skills: {
    languages: string[]
    architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Giovani Moutinho",
    title: "Senior Software Engineer",
    email: "contact@mgiovani.com",
    location: "Brazil",
    linkedin: "https://www.linkedin.com/in/mgiovani",
    github: "https://github.com/mgiovani/",
    website: "https://mgiovani.com",
    photo: "/images/profile.png",
    yearsOfExperience: "13+ years of coding experience",
    teamLeadExperience: "5+ years leading backend teams on Python, FastAPI, Django, and AWS",
  },
  summary: ["13+ years of coding experience and 5+ years leading backend teams on Python, FastAPI, Django, and AWS"],
  skills: {
    languages: ["Python", "FastAPI", "SQLAlchemy", "Django REST", "TypeScript", "Node.js", "Express"],
    architecture: ["Clean Code/Architecture", "DDD", "Microservices", "Pub/Sub", "BFF", "REST", "GraphQL"],
    cloud: ["AWS – ECS, Lambda, RDS, S3", "Docker", "Kubernetes", "GitHub Actions"],
    data: ["PostgreSQL", "Redis", "Celery"],
    quality: ["TDD", "Pytest", "Ruff", "CI/CD"],
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Prenuvo",
      period: "Jan 2023 - Present",
      location: "Remote, United States",
      responsibilities: [
        "Implemented performance enhancements that cut response times by 25% through optimized database access and resource management.",
        "Designed and built backend support for AI-powered tools used by radiologists, boosting workflow efficiency.",
        "Created and rolled out a self-service discount system, giving Sales fine-grained control over promotions.",
        "Led an external-service integration that improved operational efficiency and contributed to seasonal revenue gains.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Perflo",
      period: "Nov 2021 - Nov 2022",
      location: "Remote, United States",
      responsibilities: [
        "Built an asynchronous processing mechanism with Celery and Redis, enabling seamless background task handling.",
        "Engineered a Microsoft Teams bot to collect critical user data and integrate it into the main web application.",
        "Developed RESTful APIs with Django and DRF to ensure secure, efficient data transfer.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Olist",
      period: "Jun 2020 - Oct 2021",
      location: "Remote, Brazil",
      responsibilities: [
        "Developed RESTful APIs and microservices using a pub/sub architecture, increasing system scalability.",
        "Modernized legacy apps by refactoring code and improving database interactions, lowering latency.",
        "Implemented a Backend-for-Frontend layer with Node.js and Express, improving performance and simplifying client development.",
        "Provided onboarding and mentoring for new team members, ensuring alignment with best practices.",
      ],
    },
    {
      title: "Full-Stack Engineer (Part-Time)",
      company: "Advogar",
      period: "Aug 2019 - Oct 2021",
      location: "Remote, Brazil",
      responsibilities: [
        "Added advanced image processing and third-party integrations to expand API capabilities.",
        "Led backend integration between core services, ensuring consistent data flow.",
      ],
    },
    {
      title: "Development Team Lead & Software Developer",
      company: "Justiça Fácil",
      period: "Mar 2019 - Jul 2020",
      location: "Remote, Brazil",
      responsibilities: [
        "Coordinated a distributed team to deliver high-priority features on schedule.",
        "Built asynchronous web crawlers that reduced specific search tasks from two hours to two minutes.",
        "Developed features that streamlined QA workflows, saving up to eight hours per tester each week.",
      ],
    },
  ],
  hardSkills: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Django REST",
    "TypeScript",
    "Node.js",
    "Express",
    "Clean Architecture",
    "DDD",
    "Microservices",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "Celery",
    "TDD",
    "Pytest",
  ],
  softSkills: [
    "Problem Solving",
    "Remote Collaboration",
    "Adaptability",
    "Critical Thinking",
    "Communication",
    "Team Leadership",
  ],
  languages: [
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "English",
      level: "Professional (C2 Proficient)",
      certificate: "EF SET English Certificate 82/100 (C2 Proficient)",
    },
  ],
  publications: [
    {
      title: "Estratégias Pedagógicas para o Processo de Ensino-Aprendizagem de Algoritmos",
      description: "A publication exploring pedagogical strategies for teaching and learning algorithms.",
      year: "2019",
    },
    {
      title: "Estudos de Técnicas de Mineração de Dados Aplicadas em Ambientes Sistematizados de Bibliotecas",
      description: "A study on data mining techniques applied to systematized library environments.",
      year: "2018",
    },
    {
      title: "Carros de Combate na Selva: Utilização de VBCCCs no Teatro de Operações da Amazônia",
      description: "A publication on combat vehicles in jungle environments, focusing on operations in the Amazon.",
      year: "2017",
    },
  ],
}

export default resumeData
