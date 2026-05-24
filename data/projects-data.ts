export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  category: "cloud" | "software-ai";
  tags: string[];
  github: string | null;
  demo: string | null;
};

const projects: Project[] = [
  {
    id: 29,
    title:
      "CerebraSense - Deep Learning-based Brain Tumor MRI Classification Web Application",
    description:
      "Developed a web application that utilizes a deep learning model to classify brain tumor types from MRI scans. The application provides an intuitive interface for users to upload MRI images and receive real-time classification results, leveraging Python for the backend and a modern web framework for the frontend.",
    image: "/images/CerebraSense-Brain-Tumor-MRI-Classification.png",
    category: "software-ai",
    tags: ["Python", "Deep Learning", "MRI Classification", "Web Application"],
    github: "https://github.com/Juaaanits/Cerebrasense-Web",
    demo: "https://cerebrasense-web.vercel.app/",
  },
  {
    id: 5,
    title: "ExtractAI: AI-Powered Receipt Understanding System",
    description:
      "Built a two-stage AI pipeline using PaddleOCR and Gemini API to convert receipts into structured JSON outputs with confidence scoring, combining OCR, field extraction, and validation in a single workflow.",
    image: "/images/ExtractaAI.png",
    category: "software-ai",
    tags: [
      "Python",
      "OCR Pipeline",
      "Gemini API",
      "PaddleOCR",
      "Structured Data Extraction",
    ],
    github: "https://github.com/Juaaanits/ExtractaAI",
    demo: "https://github.com/Juaaanits/ExtractaAI",
  },
  {
    id: 6,
    title: "Containerized Monitoring System",
    description:
      "Designed and deployed a monitoring stack for MongoDB using Docker Compose, Prometheus, MongoDB Exporter, and Grafana to improve observability, performance tracking, and database health visibility.",
    image: "/images/ContainerizedMonitoringSystem.png",
    category: "cloud",
    tags: [
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "MongoDB",
      "Observability",
    ],
    github:
      "https://github.com/Juaaanits/setup-mongodb-monitoring-prometheus-grafana",
    demo: "https://github.com/Juaaanits/setup-mongodb-monitoring-prometheus-grafana",
  },
  {
    id: 8,
    title: "SortiPhy: Recyclable Waste Monitoring System (Thesis)",
    description:
      "Developed and deployed a deep learning model for real-time waste classification on Raspberry Pi with Arduino integration, achieving 95% training accuracy for embedded environmental monitoring.",
    image: "/images/SortiPhy.png",
    category: "software-ai",
    tags: ["Python", "C++", "Raspberry Pi", "Arduino", "Edge AI"],
    github: "https://github.com/Juaaanits/sortiphy-thesis",
    demo: "https://github.com/Juaaanits/sortiphy-thesis",
  },
  {
    id: 7,
    title: "Breast Cancer Classification Using Logistic Regression",
    description:
      "Built a machine learning classification pipeline using StandardScaler and L2-regularized logistic regression, achieving 94.15% test accuracy, 0.9877 ROC-AUC, and 0.92 F1-score with Python, Scikit-learn, Pandas, and NumPy.",
    image: "/images/BreastCancerClassification.png",
    category: "software-ai",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    github: "https://github.com/Juaaanits/breast-cancer-classification-lr",
    demo: "https://github.com/Juaaanits/breast-cancer-classification-lr",
  },

  {
    id: 9,
    title: "PresyoCheck",
    description:
      "Price-checking and comparison project focused on helping users inspect product pricing and related shopping information through a streamlined interface.",
    image: "images/PresyoCheck.png",
    category: "software-ai",
    tags: [
      "Consumer Web App",
      "Product Price Search",
      "Hackathon Project",
      "Next.js",
      "Supabase",
    ],
    github: "https://github.com/Juaaanits/PresyoCheck",
    demo: "https://presyo-check.vercel.app/",
  },
  {
    id: 10,
    title: "BrewBean",
    description:
      "Coffee-themed application project centered on product presentation, branding, and a polished frontend user experience.",
    image: "images/BrewBean.png",
    category: "software-ai",
    tags: [
      "Docker",
      "PHP",
      "UI/UX Design",
      "JavaScript",
      "Frontend Development",
    ],
    github: "https://github.com/Juaaanits/BrewBean",
    demo: "https://github.com/Juaaanits/BrewBean",
  },
  {
    id: 11,
    title: "IP Address Tracker Web",
    description:
      "IP Address Tracker is a responsive web app that detects and tracks IP addresses or domains, then displays geolocation details and map position in real time.",
    image: "images/IPAddressTracker.png",
    category: "software-ai",
    tags: [
      "JavaScript",
      "IP Geolocation",
      "API Integration",
      "Responsive Web App",
      "Frontend Challenge",
    ],
    github: "https://github.com/Juaaanits/ip-address-tracker-web",
    demo: "https://ip-address-tracker-web.vercel.app/",
  },
  {
    id: 12,
    title: "FingerFlux",
    description:
      "A real-time hand gesture control system using Python and Mediapipe to detect finger positions via webcam. Sends commands to Arduino/ESP32 to control LEDs, a servo motor, and an LCD, supporting both static and dynamic gestures with real-time feedback.",
    image: "images/FingerFlux.png",
    category: "software-ai",
    tags: ["OpenCV", "Computer Vision", "Embedded Systems", "MediaPipe"],
    github: "https://github.com/Juaaanits/FingerFlux",
    demo: "https://github.com/Juaaanits/FingerFlux",
  },
  {
    id: 13,
    title: "ShelfLifePlus Web",
    description:
      "Prototype web experience for ShelfLife+, an under-development agricultural logistics and intelligence platform focused on reducing food waste through NDVI-informed crop signals, in-transit IoT monitoring, and AI-assisted freshness assessment workflows.",
    image: "images/ShelflifePlusWeb.png",
    category: "software-ai",
    tags: [
      "AgriTech",
      "NDVI Monitoring",
      "IoT Monitoring",
      "AI Freshness Assessment",
      "Supply Chain Analytics",
    ],
    github: null,
    demo: "https://shelflifeplus-web.vercel.app/",
  },
  {
    id: 14,
    title: "NDVI Compare",
    description:
      "Comparison-focused project for working with NDVI-related data and visual outputs to support environmental or vegetation analysis workflows.",
    image: "images/NDVICompare.png",
    category: "software-ai",
    tags: [
      "Remote Sensing",
      "NDVI Analysis",
      "Geospatial Visualization",
      "Vegetation Index Comparison",
    ],
    github: "https://github.com/Juaaanits/ndvi-compare",
    demo: "https://github.com/Juaaanits/ndvi-compare",
  },
  {
    id: 15,
    title: "Sunspot Time Series Prediction",
    description:
      "Time series forecasting project that models sunspot activity patterns to explore predictive analytics and sequential data behavior.",
    image: "images/SunspotTimeSeriesPrediction.png",
    category: "software-ai",
    tags: [
      "Python",
      "Time Series Forecasting",
      "Sequential Data Analysis",
      "Machine Learning",
    ],
    github: "https://github.com/Juaaanits/sunspot-time-series-prediction",
    demo: "https://github.com/Juaaanits/sunspot-time-series-prediction",
  },
  {
    id: 16,
    title: "Linear Regression Energy Efficiency Dataset",
    description:
      "Regression-based machine learning project analyzing an energy efficiency dataset to model and evaluate predictive relationships in structured data.",
    image: "images/EnergyEfficiency.png",
    category: "software-ai",
    tags: [
      "Python",
      "Linear Regression",
      "Regression Analysis",
      "Energy Efficiency Prediction",
    ],
    github:
      "https://github.com/Juaaanits/linear-regression-energy-efficiency-dataset",
    demo: "https://github.com/Juaaanits/linear-regression-energy-efficiency-dataset",
  },
  {
    id: 17,
    title: "EDA Spotify Songs",
    description:
      "Exploratory data analysis project examining Spotify song attributes, trends, and distributions to surface patterns in music data.",
    image: "images/SpotifySongs.png",
    category: "software-ai",
    tags: [
      "Exploratory Data Analysis",
      "Python",
      "Spotify Dataset",
      "Music Data Analysis",
      "Data Visualization",
    ],
    github: "https://github.com/Juaaanits/EDA-Spotify-Songs",
    demo: "https://github.com/Juaaanits/EDA-Spotify-Songs",
  },
  {
    id: 18,
    title: "Cinema Ticketing System",
    description:
      "This is a console-based Cinema Ticketing and Snack Availment System built using C++. It simulates a real-world cinema point-of-sale experience, enabling customers to purchase movie tickets, receive applicable discounts, buy snacks, and get a detailed official receipt — all from the terminal.",
    image: null,
    category: "software-ai",
    tags: [
      "Ticket Booking System",
      "CRUD Application",
      "C++",
      "Reservation Workflow",
    ],
    github: "https://github.com/Juaaanits/cinema-ticketing-system",
    demo: "https://github.com/Juaaanits/cinema-ticketing-system",
  },
  {
    id: 19,
    title: "Predictive Modeling for Agriculture",
    description:
      "Agriculture-focused predictive modeling project applying machine learning techniques to data-driven decision support in farming contexts.",
    image: "images/PredictiveModelingForAgriculture.png",
    category: "software-ai",
    tags: [
      "Machine Learning",
      "Agricultural Analytics",
      "Predictive Modeling",
      "Decision Support Systems",
    ],
    github: "https://github.com/Juaaanits/predictive-modeling-for-agriculture",
    demo: "https://github.com/Juaaanits/predictive-modeling-for-agriculture",
  },
  {
    id: 20,
    title: "Random Quote Machine",
    description:
      "Frontend application that serves and displays quotes through a lightweight interactive interface built for quick engagement and clean presentation.",
    image: "images/RandomQuoteMachine.png",
    category: "software-ai",
    tags: [
      "React",
      "TypeScript",
      "Frontend Development",
      "Quote API",
      "Interactive UI",
    ],
    github: "https://github.com/Juaaanits/random-quote-machine",
    demo: "https://random-quote-machine-mu-azure.vercel.app/",
  },
  {
    id: 21,
    title: "Cybersecurity Attack Classification",
    description:
      "Classification project focused on identifying or categorizing cybersecurity attack patterns using machine learning on security-related datasets.",
    image: "images/CybersecurityAttackClassification.png",
    category: "software-ai",
    tags: [
      "Cybersecurity",
      "Threat Classification",
      "Machine Learning",
      "Security Analytics",
    ],
    github: "https://github.com/Juaaanits/cybersecurity-attack-classification",
    demo: "https://github.com/Juaaanits/cybersecurity-attack-classification",
  },
  {
    id: 22,
    title: "Telegram Weather Notification Bot",
    description:
      "Automation bot that delivers weather updates through Telegram, combining messaging workflows with notification-based user utility.",
    image: "images/TelegramWeatherNotificationBot.png",
    category: "software-ai",
    tags: ["Telegram Bot", "Weather API", "Automation", "Alert Notifications"],
    github: "https://github.com/Juaaanits/telegram-weather-notification-bot",
    demo: "https://github.com/Juaaanits/telegram-weather-notification-bot",
  },
  {
    id: 23,
    title: "SmartTrafficLight System",
    description:
      "Smart traffic light project exploring automated or intelligent traffic control logic for responsive transportation scenarios.",
    image: "images/SmartTrafficLightSystem.png",
    category: "software-ai",
    tags: ["Embedded Systems", "IoT", "Traffic Signal Control", "Arduino"],
    github: "https://github.com/Juaaanits/SmartTrafficLight-System",
    demo: "https://github.com/Juaaanits/SmartTrafficLight-System",
  },
  {
    id: 24,
    title: "Fashion MNIST Classification",
    description:
      "This project follows an approach inspired by TensorFlow’s official tutorial to build a neural network capable of classifying images of clothing. It uses the Fashion MNIST dataset to train a model that can identify various apparel categories, including shirts, shoes, bags, and other items..",
    image: "images/FashionMNISTClassification.png",
    category: "software-ai",
    tags: [
      "Python",
      "TensorFlow",
      "Neural Networks",
      "Image Classification",
      "Fashion MNIST Dataset",
    ],
    github: "https://github.com/Juaaanits/Fashion-MNIST-Classification",
    demo: "https://github.com/Juaaanits/Fashion-MNIST-Classification",
  },
  {
    id: 25,
    title: "Adventure Work Dashboard",
    description:
      "Dashboard project for analyzing and presenting business or operational metrics with a focus on reporting and decision support.",
    image: "images/AdventureWorkDashboard.png",
    category: "software-ai",
    tags: [
      "Business Intelligence",
      "Power BI",
      "Data Visualization",
      "Reporting",
    ],
    github: "https://github.com/Juaaanits/Adventure-Work-Dashboard",
    demo: "https://github.com/Juaaanits/Adventure-Work-Dashboard",
  },
  {
    id: 27,
    title: "Palindrome Checker",
    description:
      "A simple web application to check if a given string is a palindrome.",
    image: "images/PalindromeChecker.png",
    category: "software-ai",
    tags: [
      "JavaScript",
      "Palindrome Checker",
      "Web Application",
      "String Manipulation",
    ],
    github: "https://github.com/Juaaanits/Palindrome-Checker",
    demo: "https://palindrome-checker-eosin.vercel.app/",
  },
  {
    id: 26,
    title: "Address Book",
    description:
      "This is a console-based Address Book Management System built using Python. It allows users to manage their contacts by adding, editing, deleting, viewing, and searching for contacts. The system stores contact information such as first name, last name, address, and phone number. It provides a simple and interactive menu for users to perform operations on the address book.",
    image: null,
    category: "software-ai",
    tags: [
      "Python",
      "Contact Management",
      "CRUD Application",
      "Console Application",
    ],
    github: "https://github.com/Juaaanits/Address-Book",
    demo: "https://github.com/Juaaanits/Address-Book",
  },
  {
    id: 27,
    title: "AWS Cloud Architecture Design - Park Wan Ji Hospitality Group",
    description:
      "Designed a secure and scalable AWS cloud architecture to support Park Wan Ji Hospitality Group's migration from on-premise infrastructure, covering network design, compute and storage planning, and high-availability patterns for enterprise workloads.",
    image: "images/ParkWanJiAWSCloudArchitecture.png",
    category: "cloud",
    tags: ["AWS", "Network Design", "Cloud Architecture", "High Availability"],
    github: null,
    demo: "https://docs.google.com/presentation/d/1UaijASfm6irGjTzFde9u8pR0oHo_jVr1/edit?slide=id.p2#slide=id.p2",
  },
  {
    id: 28,
    title: "Automated AWS Web Hosting with Terraform",
    description:
      "An Infrastructure-as-Code (IaC) project that provisions a high-availability static website architecture on AWS. It integrates S3 for secure storage, CloudFront for global content delivery, and Route 53 with ACM for automated DNS and SSL management.",
    image: "/images/AutomatedAWSWebHostingWithTerraform.png",
    category: "cloud",
    tags: [
      "AWS",
      "Terraform",
      "Infrastructure as Code",
      "S3 Static Website",
      "CloudFront CDN",
      "Route 53 DNS",
      "ACM SSL Management",
    ],
    github:
      "https://github.com/Juaaanits/Automated-AWS-Web-Hosting-with-Terraform",
    demo: "https://juanito-ramos-dev.site/",
  },
];

export const featuredProjects = [
  projects.find((project) => project.id === 29)!,
  projects.find((project) => project.id === 28)!,
  projects.find((project) => project.id === 5)!,
];

export default {
  projects,
  featuredProjects,
};
