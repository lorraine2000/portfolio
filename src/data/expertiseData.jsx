import React from "react";
import {
  SiPython,
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiBun,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiJenkins,
  SiPrometheus,
  SiApachetomcat,
  SiApache,
  SiJest,
  SiSelenium,
  SiSonar,
  SiGit,
  SiJira,
  SiLinux,
  SiPrisma
} from "react-icons/si";
import { FaJava, FaAws, FaShieldAlt } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { TbApi, TbBrandAzure, TbAward, TbLanguage, TbHeartHandshake } from "react-icons/tb";
import { RiRobotLine, RiCpuLine } from "react-icons/ri";

export const expertiseData = [
  {
    title: "Backend & Architectures Micro-Services",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500 text-lg" /> },
      { name: "Spring Boot 3", icon: <SiSpringboot className="text-emerald-500 text-lg" /> },
      { name: "Spring Security", icon: <FaShieldAlt className="text-emerald-600 text-lg" /> },
      { name: "Hibernate / JPA", icon: <SiHibernate className="text-amber-500 text-lg" /> },
      { name: "Python", icon: <SiPython className="text-blue-500 text-lg" /> },
      { name: "Hono", icon: <TbApi className="text-orange-500 text-lg" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-500 text-lg" /> },
      { name: "APIs REST", icon: <TbApi className="text-cyan-500 text-lg" /> },
      { name: "Micro-Services", icon: <RiCpuLine className="text-purple-500 text-lg" /> },
      { name: "Tomcat & Apache", icon: <SiApachetomcat className="text-yellow-600 text-lg" /> }
    ]
  },
  {
    title: "Frontend & Applications Web Modernes",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-lg" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-lg" /> },
      { name: "React", icon: <SiReact className="text-cyan-400 text-lg" /> },
      { name: "Next.js 15", icon: <SiNextdotjs className="text-black dark:text-white text-lg" /> },
      { name: "Angular", icon: <SiAngular className="text-red-600 text-lg" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-emerald-600 text-lg" /> },
      { name: "Bun", icon: <SiBun className="text-amber-200 text-lg" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600 text-lg" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-lg" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600 text-lg" /> }
    ]
  },
  {
    title: "Cloud, DevOps & Conteneurisation",
    skills: [
      { name: "AWS (EC2, RDS, S3)", icon: <FaAws className="text-amber-500 text-lg" /> },
      { name: "Docker & Compose", icon: <SiDocker className="text-blue-500 text-lg" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600 text-lg" /> },
      { name: "GitLab CI", icon: <SiGitlab className="text-orange-500 text-lg" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-400 text-lg" /> },
      { name: "Cloud Azure", icon: <TbBrandAzure className="text-blue-400 text-lg" /> },
      { name: "Prometheus", icon: <SiPrometheus className="text-orange-600 text-lg" /> },
      { name: "Shell & Linux", icon: <SiLinux className="text-yellow-500 text-lg" /> }
    ]
  },
  {
    title: "Bases de Données & Stockage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-lg" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-lg" /> },
      { name: "Oracle Database", icon: <GrOracle className="text-red-600 text-lg" /> },
      { name: "Microsoft SQL Server", icon: <TbApi className="text-red-500 text-lg" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 text-lg" /> }
    ]
  },
  {
    title: "Tests, Qualité & Fiabilité Logicielle",
    skills: [
      { name: "JUnit 5", icon: <TbApi className="text-emerald-600 text-lg" /> },
      { name: "Mockito & AssertJ", icon: <TbApi className="text-green-500 text-lg" /> },
      { name: "Jest", icon: <SiJest className="text-red-600 text-lg" /> },
      { name: "Selenium", icon: <SiSelenium className="text-emerald-400 text-lg" /> },
      { name: "SonarQube", icon: <SiSonar className="text-sky-500 text-lg" /> }
    ]
  },
  {
    title: "Méthodes & Outils de Pilotage",
    skills: [
      { name: "Git & GitHub / GitLab", icon: <SiGit className="text-orange-600 text-lg" /> },
      { name: "Jira", icon: <SiJira className="text-blue-500 text-lg" /> },
      { name: "Agile Scrum", icon: <TbHeartHandshake className="text-indigo-500 text-lg" /> },
      { name: "SAFe (Scaled Agile)", icon: <TbHeartHandshake className="text-purple-500 text-lg" /> }
    ]
  },
  {
    title: "Certifications & Langues",
    skills: [
      { name: "AWS Cloud Practitioner (Validée)", icon: <TbAward className="text-amber-500 text-lg" /> },
      { name: "TOEIC 860 / 990 (Niveau B2)", icon: <TbAward className="text-blue-500 text-lg" /> },
      { name: "Français : Langue maternelle / Courant", icon: <TbLanguage className="text-emerald-500 text-lg" /> },
      { name: "Anglais : Professionnel (Niveau B2)", icon: <TbLanguage className="text-blue-500 text-lg" /> }
    ]
  },
  {
    title: "Atouts & Savoir-Être",
    skills: [
      { name: "Rigoureuse et organisée" },
      { name: "Capacité d'analyse et de synthèse" },
      { name: "Maîtrise du travail sous pression" },
      { name: "Autonome et force de proposition" },
      { name: "Esprit d'équipe" },
      { name: "Aisance relationnelle & bonne communication" }
    ]
  },
  {
    title: "Centres d'Intérêt",
    skills: [
      { name: "Pâtisserie" },
      { name: "Sport : Musculation & Course à pied" },
      { name: "Couture" }
    ]
  }
];

export default expertiseData;