// Image imports for use in the data below
import Payflex from "../images/payflex.jpg";
import Lorjob from "../images/lorjob.jpg";
import Corporation from "../images/corporation.jpg";
import Mejestic from "../images/mejestic.jpg";
import Taskflow from "../images/taskflow.jpg";
import Apex from "../images/apex.jpg";
import Profile from "../images/profile.jpg";

// List of project objects, each with details for rendering in the portfolio
export const projects = [
  {
    id: "payflex-bnpl",
    title: "PayFlex — FinTech BNPL 4x",
    company: "Freelance & R&D",
    year: "2026",
    image: Payflex,
  },
  {
    id: "lorjob",
    title: "LorJob — Suivi Candidatures",
    company: "Freelance SaaS",
    year: "2026",
    image: Lorjob,
  },
  {
    id: "chatbot-ia-sg",
    title: "Chatbot IA d'Entreprise",
    company: "Société Générale",
    year: "2024",
    image: Corporation,
  },
  {
    id: "mybigdata-sg",
    title: "Plateforme MyBigData",
    company: "Société Générale",
    year: "2022 - 2024",
    image: Mejestic,
  },
  {
    id: "cloud-k8s-aws",
    title: "Déploiement Cloud AWS & K8s",
    company: "Projet Cloud & DevOps",
    year: "2025",
    image: Taskflow,
  },
  {
    id: "drone-face-tracking",
    title: "Suivi Visages Drone (IA)",
    company: "Projet IA Embarquée",
    year: "2025",
    image: Apex,
  },
];

// List of services provided with description
export const services = [
  {
    title: "Développement Fullstack Java & React / Next.js",
    description:
      "Conception d'applications web de bout en bout : backends robustes en Spring Boot 3 ou Hono/Bun, et interfaces modernes en React / Next.js 15 typées TypeScript.",
    price: "Sur mesure",
    duration: " / Sprint ou Projet",
  },
  {
    title: "Systèmes Transactionnels & FinTech (BNPL)",
    description:
      "Architecture de moteurs de calculs financiers sans perte de centimes, ordonnanceurs de prélèvements, intégration de passerelles de paiement et gestion des impayés.",
    price: "Sur mesure",
    duration: " / Mission",
  },
  {
    title: "Architecture Cloud & DevOps (AWS, Docker, K8s)",
    description:
      "Conteneurisation Docker, orchestration Kubernetes, déploiement sur AWS (EC2, RDS, S3), surveillance Prometheus et automatisation CI/CD (GitLab CI, Jenkins).",
    price: "Sur mesure",
    duration: " / Audit & Setup",
  },
  {
    title: "Assurance Qualité & Fiabilité Logicielle",
    description:
      "Mise en place de tests unitaires et d'intégration (JUnit 5, AssertJ, Mockito, Jest), analyse statique SonarQube et respect des normes bancaires et de sécurité.",
    price: "Sur mesure",
    duration: " / Accompagnement",
  },
];

// Team or profile items with tooltip data
export const items = [
  { id: 1, name: "Lorraine KOUAM", designation: "Fullstack & Cloud", image: Profile },
];
