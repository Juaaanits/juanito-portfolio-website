export type Certification = {
  id: number
  title: string
  issuer: string
  year: string
  description: string
  image?: string | null
  tags: string[]
  credentialUrl: string | null
  projectUrl: string | null
  projectLabel?: string | null
  insights?: string[]
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    year: "2026",
    description:
      "Foundational AWS training focused on core cloud concepts, shared responsibility, pricing models, and essential platform services used in modern cloud environments.",
    image: null,
    tags: ["AWS", "Cloud Fundamentals", "Security", "Billing"],
    credentialUrl: "https://example.com/aws-cloud-practitioner-essentials",
    projectUrl: "https://example.com/aws-cloud-practitioner-labs",
    projectLabel: "Labs",
    insights: [
      "Built a stronger grasp of AWS global infrastructure, core services, and cloud value propositions.",
      "Reinforced how identity, security, and the shared responsibility model shape cloud system design.",
      "Improved the ability to map business needs to foundational AWS service choices and cost considerations.",
    ],
  },
  {
    id: 2,
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    year: "2026",
    description:
      "Architecture-focused training covering resilient AWS environments, network topology, storage patterns, and design decisions for scalable cloud workloads.",
    image: null,
    tags: ["AWS", "Cloud Architecture", "VPC Design", "High Availability"],
    credentialUrl: "https://example.com/aws-academy-cloud-architecting",
    projectUrl: "https://example.com/cloud-architecture-case-study",
    projectLabel: "Case Study",
    insights: [
      "Strengthened architectural thinking around availability, fault tolerance, and workload placement across AWS services.",
      "Practiced designing VPC-based environments with clear subnetting, routing, and layered security boundaries.",
      "Improved tradeoff analysis between performance, scalability, operational simplicity, and cost efficiency.",
    ],
  },
  {
    id: 3,
    title: "n8n AI Automation Workflow Training",
    issuer: "Independent Study",
    year: "2026",
    description:
      "Hands-on low-code automation practice using AI-connected workflows, API integrations, triggers, and multi-step orchestration for operational use cases.",
    image: null,
    tags: ["n8n", "AI Automation", "Low-Code Tools", "API Workflows"],
    credentialUrl: "https://example.com/n8n-ai-automation-training",
    projectUrl: "https://example.com/n8n-automation-demo",
    projectLabel: "Workflow Demo",
    insights: [
      "Learned how to structure trigger-based workflows that connect AI tools, APIs, and business logic reliably.",
      "Improved understanding of workflow orchestration, retries, and error handling in low-code automation systems.",
      "Built a clearer view of where low-code automation accelerates delivery and where custom engineering is still needed.",
    ],
  },
]

export const featuredCertifications = certifications.slice(0, 3)

export default {
  certifications,
  featuredCertifications,
}
