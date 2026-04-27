export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export type Language = {
  name: string;
  level: string;
  certificate?: string;
};

export type Publication = {
  title: string;
  description: string;
  year: string;
  link?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ResumeData = {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    linkedin: string;
    github: string | null;
    website: string;
    photo?: string;
    yearsOfExperience: string;
    specificExperience: string;
  };
  summary: string[];
  skills: SkillCategory[];
  experience: WorkExperience[];
  hardSkills: string[];
  softSkills: string[];
  languages: Language[];
  publications: Publication[];
};

const resumeData: ResumeData = {
  personalInfo: {
    name: "Juanito M. Ramos II",
    title: "System Engineer | Cloud & Data Engineering | AI/ML Support",
    email: "juanitoramos113@gmail.com",
    location: "Philippines",
    linkedin: "https://www.linkedin.com/in/juanitoramos/",
    github: "https://github.com/Juaaanits",
    website: "https://juanito-portfolio-website.vercel.app/",
    photo: "/images/profile.png",
    yearsOfExperience:
      "1+ years of professional experience in system, cloud, and data-focused engineering",
    specificExperience:
      "Experience spanning SQL Server operations, Azure and AWS infrastructure, data migration, monitoring, and AI-assisted OCR and product-matching workflows",
  },
  summary: [
    "System Engineer with professional experience in cloud infrastructure, SQL Server administration, monitoring, migration planning, and AI/ML support for data extraction workflows.",
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "PHP", "SQL", "C++"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Linux",
        "Bash",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      category: "Database Systems",
      items: [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Supabase",
        "Firebase",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Python",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "OCR Pipelines",
        "LLM Integration",
        "n8n (workflow automation)",
      ],
    },
    {
      category: "Full-Stack Development (Web & Mobile)",
      items: [
        "Node.js",
        "Express",
        "Flask",
        "React",
        "Next.js",
        "React Native",
        "TailwindCSS",
      ],
    },
    {
      category: "Data Visualization",
      items: ["PowerBI", "Excel"],
    },
  ],
  experience: [
    {
      title: "AI/ML Engineer Support (Volunteer)",
      company: "ShopQuick",
      period: "April 2026 - Present",
      location: "Remote",
      responsibilities: [
        "Designed an OCR-to-SKU normalization pipeline for receipt data extraction and product matching, defining system architecture and component interactions using Google Cloud Vision, GPT-4, hybrid matching (fuzzy search and embeddings), confidence-based validation, and storage using Supabase.",
      ],
    },
    {
      title: "System Engineer (Cloud & Data Focus)",
      company: "Solvento Philippines, Inc.",
      period: "April 2025 - Present",
      location: "Hybrid",
      responsibilities: [
        "Designed and implemented a weekly full backup strategy for a production OLTP SQL Server environment, improving data reliability and strengthening recovery readiness.",
        "Executed large-scale data migration across staging and production environments, ensuring data integrity and minimizing system downtime during deployments.",
        "Developed SQL Server filegroup and partitioning strategies to optimize query performance for high-volume datasets.",
        "Built a real-time monitoring dashboard using Grafana, integrating SQL Server and Azure App Services, reducing manual monitoring effort by approximately 70-80%.",
        "Monitored Azure and SQL Server performance metrics and logs, improving system visibility and accelerating incident detection and response.",
      ],
    },
    {
      title: "Technology Infrastructure Bootcamp Trainee (Internship)",
      company: "Solvento Philippines, Inc.",
      period: "January 2025 - March 2025",
      location: "Hybrid",
      responsibilities: [
        "Designed a hybrid AWS cloud architecture including multi-AZ VPC, load balancing, auto-scaling, and high-availability RDS setups to support scalable and fault-tolerant applications.",
        "Developed database and file migration strategies using AWS DMS and AWS DataSync, enabling seamless transition from on-premise systems to cloud infrastructure.",
        "Created a phased migration plan with detailed cost estimation and infrastructure design, providing a clear roadmap for cloud adoption and scalability.",
      ],
    },
  ],
  hardSkills: [
    "Linux",
    "Bash",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "SQL Server",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Firebase",
    "Python",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OCR Pipelines",
    "LLM Integration",
    "n8n",
    "Node.js",
    "Express",
    "Flask",
    "React",
    "Next.js",
    "React Native",
    "TailwindCSS",
    "PowerBI",
    "Excel",
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Critical Thinking",
    "Collaboration",
    "System Ownership",
  ],
  languages: [
    {
      name: "English",
      level: "Professional",
    },
    {
      name: "Filipino",
      level: "Native",
    },
  ],
  publications: [],
};

export default resumeData;
