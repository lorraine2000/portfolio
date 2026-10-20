// Image imports for use in the data below
import Mejestic from "../images/mejestic.jpg";
import Taskflow from "../images/taskflow.jpg";
import Apex from "../images/apex.jpg";
import Corporation from "../images/corporation.jpg";
import Profile from "../images/profile.jpg";

// List of project objects, each with details for rendering in the portfolio
export const projects = [
  {
    id: "majestic", // Unique identifier for routing or keys
    title: "Majestic Inc.", // Project name
    company: "Majestic SaaS", // Company/client name
    year: "2023-2024", // Time period of the project
    image: Mejestic, // Associated image
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    company: "1Forme",
    year: "2024",
    image: Taskflow,
  },
  {
    id: "apex",
    title: "Apex",
    company: "Apex UI",
    year: "2024",
    image: Apex,
  },
  {
    id: "nova",
    title: "Nova",
    company: "Nova Tech",
    year: "2025",
    image: Corporation,
  },
];

// List of services provided with pricing and description
export const services = [
  {
    title: "Architecture Cloud & DevOps",
    description:
      "Conteneurisation Docker, orchestration Kubernetes, déploiement sur AWS (EC2, RDS, S3) et automatisation CI/CD.",
    price: "Sur mesure",
    duration: " / Mission",
  },
  {
    title: "Développement Backend Java / Spring Boot",
    description:
      "Conception d'APIs REST performantes, microservices sécurisés (Spring Security), persistance Hibernate / SQL.",
    price: "Sur mesure",
    duration: " / Sprint",
  },
  {
    title: "Développement Web Fullstack React / TypeScript",
    description:
      "Création d'interfaces utilisateur modernes, réactives et typées d'après des maquettes Figma.",
    price: "Sur mesure",
    duration: " / Projet",
  },
  {
    title: "Qualité Logicielle & Tests Automatisés",
    description:
      "Mise en place de tests unitaires et d'intégration (JUnit, Mockito, Jest) et analyse continue SonarQube.",
    price: "Sur mesure",
    duration: " / Audit & Setup",
  },
];

// Team or profile items with tooltip data
export const items = [
  { id: 1, name: "Alice", designation: "Designer", image: Profile },
  { id: 2, name: "Bob", designation: "Developer", image: Profile },
  { id: 3, name: "Charlie", designation: "Marketer", image: Profile },
];
