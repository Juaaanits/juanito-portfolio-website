export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    id: 5,
    title: "ExtractAI: AI-Powered Receipt Understanding System",
    description:
      "Built a two-stage AI pipeline using PaddleOCR and Gemini API to convert receipts into structured JSON outputs with confidence scoring, combining OCR, field extraction, and validation in a single workflow.",
    image: null,
    tags: ["Python", "OCR Pipeline", "Gemini API", "PaddleOCR", "Structured Data Extraction"],
    github: "https://github.com/Juaaanits/ExtractaAI",
    demo: "https://github.com/Juaaanits/ExtractaAI",
  },
  {
    id: 6,
    title: "Containerized Monitoring System",
    description:
      "Designed and deployed a monitoring stack for MongoDB using Docker Compose, Prometheus, MongoDB Exporter, and Grafana to improve observability, performance tracking, and database health visibility.",
    image: null,
    tags: ["Docker Compose", "Prometheus", "Grafana", "MongoDB", "Observability"],
    github:
      "https://github.com/Juaaanits/setup-mongodb-monitoring-prometheus-grafana",
    demo: "https://github.com/Juaaanits/setup-mongodb-monitoring-prometheus-grafana",
  },
  {
    id: 7,
    title: "Breast Cancer Classification Using Logistic Regression",
    description:
      "Built a machine learning classification pipeline using StandardScaler and L2-regularized logistic regression, achieving 94.15% test accuracy, 0.9877 ROC-AUC, and 0.92 F1-score with Python, Scikit-learn, Pandas, and NumPy.",
    image: null,
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    github: "https://github.com/Juaaanits/breast-cancer-classification-lr",
    demo: "https://github.com/Juaaanits/breast-cancer-classification-lr",
  },
  {
    id: 8,
    title: "SortiPhy: Recyclable Waste Monitoring System (Thesis)",
    description:
      "Developed and deployed a deep learning model for real-time waste classification on Raspberry Pi with Arduino integration, achieving 95% training accuracy for embedded environmental monitoring.",
    image: null,
    tags: ["Python", "C++", "Raspberry Pi", "Arduino", "Edge AI"],
    github: "https://github.com/Juaaanits/sortiphy-thesis",
    demo: "https://github.com/Juaaanits/sortiphy-thesis",
  },
  {
    id: 4,
    title: "AI Cursor Init",
    description:
      "The AI-powered documentation framework that lives inside your IDE. Generate Architecture Decision Records, system diagrams, and onboarding guides with simple slash commands.",
    image:
      "https://github.com/mgiovani/ai-cursor-init/raw/main/images/system-architecture-example.png",
    tags: ["Developer Tooling", "Technical Documentation", "IDE Workflow", "Architecture Decision Records"],
    github: "https://github.com/mgiovani/ai-cursor-init/",
    demo: "https://github.com/mgiovani/ai-cursor-init/?tab=readme-ov-file#-visual-showcase",
  },
  {
    id: 1,
    title: "MyInstants Discord Bot",
    description: "A discord bot to play MyInstants sounds to your friends.",
    image:
      "https://camo.githubusercontent.com/4b1917eff3bda4e61188df670776876b702136fb1dfb9fcbd4bdb8d68189069d/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f36314c4e416f324b39524c2e706e67",
    tags: ["Python", "Discord Bot", "Automation", "API Integration"],
    github: "https://github.com/mgiovani/my-instants-discord-bot",
    demo: "https://discord.com/oauth2/authorize?client_id=836019264124354571",
  },
  {
    id: 2,
    title: "Base 16 Whatsapp Theme",
    description: "A Whatsapp Web theme inspired by the Dark Base 16 colors.",
    image:
      "https://camo.githubusercontent.com/1b6684c7c3ad58073423a154fa0709eb215c096fec5aa32b6a430240aaa7ce55/68747470733a2f2f692e696d6775722e636f6d2f733134694f54392e706e67",
    tags: ["CSS", "JavaScript", "Theming", "Frontend Customization"],
    github: "https://github.com/mgiovani/base16-whatsapp",
    demo: null,
  },
  {
    id: 3,
    title: "Covid Data Tracker",
    description:
      "API, OCR, and data extraction to track Covid cases in Montes Claros - Brazil.",
    image: null,
    tags: ["Python", "Go", "Docker", "Data Pipeline"],
    github: "https://github.com/mgiovani/mocorona",
    demo: null,
  },
  {
    id: 9,
    title: "PresyoCheck",
    description:
      "Price-checking and comparison project focused on helping users inspect product pricing and related shopping information through a streamlined interface.",
    image: null,
    tags: ["Price Comparison", "Consumer Web App", "Product Search", "Frontend Development"],
    github: "https://github.com/Juaaanits/PresyoCheck",
    demo: "https://github.com/Juaaanits/PresyoCheck",
  },
  {
    id: 10,
    title: "BrewBean",
    description:
      "Coffee-themed application project centered on product presentation, branding, and a polished frontend user experience.",
    image: null,
    tags: ["React", "Brand Identity", "UI/UX Design", "Frontend Development"],
    github: "https://github.com/Juaaanits/BrewBean",
    demo: "https://github.com/Juaaanits/BrewBean",
  },
  {
    id: 11,
    title: "IP Address Tracker Web",
    description:
      "Web application for searching IP addresses and surfacing location and network information in an interactive, user-friendly format.",
    image: null,
    tags: ["Next.js", "IP Geolocation", "API Integration", "Responsive Web App"],
    github: "https://github.com/Juaaanits/ip-address-tracker-web",
    demo: "https://github.com/Juaaanits/ip-address-tracker-web",
  },
  {
    id: 12,
    title: "FingerFlux",
    description:
      "Interactive application project built around a gesture or touch-driven experience with a focus on frontend responsiveness and user interaction.",
    image: null,
    tags: ["Interactive UI", "User Interaction Design", "Frontend Engineering", "Responsive Design"],
    github: "https://github.com/Juaaanits/FingerFlux",
    demo: "https://github.com/Juaaanits/FingerFlux",
  },
  {
    id: 13,
    title: "ShelfLifePlus Web",
    description:
      "Prototype web experience for ShelfLife+, an under-development agricultural logistics and intelligence platform focused on reducing food waste through NDVI-informed crop signals, in-transit IoT monitoring, and AI-assisted freshness assessment workflows.",
    image: null,
    tags: ["AgriTech", "Supply Chain Intelligence", "Prototype Platform", "Decision Support System"],
    github: null,
    demo: "https://shelflifeplus-web.vercel.app/",
  },
  {
    id: 14,
    title: "NDVI Compare",
    description:
      "Comparison-focused project for working with NDVI-related data and visual outputs to support environmental or vegetation analysis workflows.",
    image: null,
    tags: ["Remote Sensing", "NDVI Analysis", "Geospatial Visualization", "Comparative Analytics"],
    github: "https://github.com/Juaaanits/ndvi-compare",
    demo: "https://github.com/Juaaanits/ndvi-compare",
  },
  {
    id: 15,
    title: "Sunspot Time Series Prediction",
    description:
      "Time series forecasting project that models sunspot activity patterns to explore predictive analytics and sequential data behavior.",
    image: null,
    tags: ["Python", "Time Series Forecasting", "Predictive Modeling", "Machine Learning"],
    github: "https://github.com/Juaaanits/sunspot-time-series-prediction",
    demo: "https://github.com/Juaaanits/sunspot-time-series-prediction",
  },
  {
    id: 16,
    title: "Linear Regression Energy Efficiency Dataset",
    description:
      "Regression-based machine learning project analyzing an energy efficiency dataset to model and evaluate predictive relationships in structured data.",
    image: null,
    tags: ["Python", "Linear Regression", "Energy Efficiency Modeling", "Data Science"],
    github:
      "https://github.com/Juaaanits/linear-regression-energy-efficiency-dataset",
    demo:
      "https://github.com/Juaaanits/linear-regression-energy-efficiency-dataset",
  },
  {
    id: 17,
    title: "EDA Spotify Songs",
    description:
      "Exploratory data analysis project examining Spotify song attributes, trends, and distributions to surface patterns in music data.",
    image: null,
    tags: ["Exploratory Data Analysis", "Python", "Spotify Dataset", "Data Visualization"],
    github: "https://github.com/Juaaanits/EDA-Spotify-Songs",
    demo: "https://github.com/Juaaanits/EDA-Spotify-Songs",
  },
  {
    id: 18,
    title: "Cinema Ticketing System",
    description:
      "Ticketing system project for managing cinema reservations, booking flows, and related customer-facing or administrative operations.",
    image: null,
    tags: ["System Design", "Booking Workflow", "Database Management", "CRUD Application"],
    github: "https://github.com/Juaaanits/cinema-ticketing-system",
    demo: "https://github.com/Juaaanits/cinema-ticketing-system",
  },
  {
    id: 19,
    title: "Predictive Modeling for Agriculture",
    description:
      "Agriculture-focused predictive modeling project applying machine learning techniques to data-driven decision support in farming contexts.",
    image: null,
    tags: ["Machine Learning", "Agricultural Analytics", "Predictive Modeling", "Python"],
    github: "https://github.com/Juaaanits/predictive-modeling-for-agriculture",
    demo: "https://github.com/Juaaanits/predictive-modeling-for-agriculture",
  },
  {
    id: 20,
    title: "Random Quote Machine",
    description:
      "Frontend application that serves and displays quotes through a lightweight interactive interface built for quick engagement and clean presentation.",
    image: null,
    tags: ["JavaScript", "Frontend Development", "API Consumption", "Interactive UI"],
    github: "https://github.com/Juaaanits/random-quote-machine",
    demo: "https://github.com/Juaaanits/random-quote-machine",
  },
  {
    id: 21,
    title: "Cybersecurity Attack Classification",
    description:
      "Classification project focused on identifying or categorizing cybersecurity attack patterns using machine learning on security-related datasets.",
    image: null,
    tags: ["Cybersecurity", "Attack Classification", "Machine Learning", "Security Analytics"],
    github: "https://github.com/Juaaanits/cybersecurity-attack-classification",
    demo: "https://github.com/Juaaanits/cybersecurity-attack-classification",
  },
  {
    id: 22,
    title: "Telegram Weather Notification Bot",
    description:
      "Automation bot that delivers weather updates through Telegram, combining messaging workflows with notification-based user utility.",
    image: null,
    tags: ["Telegram Bot", "Weather API", "Automation", "Notification System"],
    github: "https://github.com/Juaaanits/telegram-weather-notification-bot",
    demo: "https://github.com/Juaaanits/telegram-weather-notification-bot",
  },
  {
    id: 23,
    title: "SmartTrafficLight System",
    description:
      "Smart traffic light project exploring automated or intelligent traffic control logic for responsive transportation scenarios.",
    image: null,
    tags: ["Embedded Systems", "IoT", "Traffic Control", "Automation"],
    github: "https://github.com/Juaaanits/SmartTrafficLight-System",
    demo: "https://github.com/Juaaanits/SmartTrafficLight-System",
  },
  {
    id: 24,
    title: "Fashion MNIST Classification",
    description:
      "Computer vision classification project using the Fashion-MNIST dataset to train and evaluate image recognition models.",
    image: null,
    tags: ["Deep Learning", "Computer Vision", "Image Classification", "Python"],
    github: "https://github.com/Juaaanits/Fashion-MNIST-Classification",
    demo: "https://github.com/Juaaanits/Fashion-MNIST-Classification",
  },
  {
    id: 25,
    title: "Adventure Work Dashboard",
    description:
      "Dashboard project for analyzing and presenting business or operational metrics with a focus on reporting and decision support.",
    image: null,
    tags: ["Business Intelligence", "Dashboard Development", "Data Visualization", "Reporting"],
    github: "https://github.com/Juaaanits/Adventure-Work-Dashboard",
    demo: "https://github.com/Juaaanits/Adventure-Work-Dashboard",
  },
  {
    id: 26,
    title: "Address Book",
    description:
      "Contact management application for storing, organizing, and retrieving address book records through a structured interface.",
    image: null,
    tags: ["CRUD Application", "Database Management", "Contact Management", "Software Development"],
    github: "https://github.com/Juaaanits/Address-Book",
    demo: "https://github.com/Juaaanits/Address-Book",
  },
];

export const featuredProjects = [projects[0], projects[1], projects[2]];

export default {
  projects,
  featuredProjects,
};
