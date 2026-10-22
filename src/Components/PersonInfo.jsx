import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Cloud, 
  Download, 
  ExternalLink,
  Layers,
  Sparkles,
  Heart,
  TrendingUp,
  ShieldCheck,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const PersonInfo = () => {
  const [activeTab, setActiveTab] = useState("all");

  const downloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/cv/cv.pdf";
      link.download = "Lorraine_KOUAM_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  const experiences = [
    {
      id: "freelance",
      company: "Indépendante",
      role: "Développeuse Fullstack Freelance",
      period: "2026 – Présent",
      duration: "En cours",
      type: "Freelance",
      location: "France",
      context: "Conception de solutions FinTech transactionnelles, architectures monorepo et applications SaaS",
      highlight: "PayFlex (BNPL 4x à précision centime absolue) & LorJob (Suivi de candidatures Bun/Hono)",
      projects: [
        {
          name: "PayFlex — Plateforme FinTech de paiement en plusieurs fois (BNPL 4x)",
          details: "Architecture fullstack monorepo (Java / Spring Boot 3, Next.js 15, TypeScript, PostgreSQL) avec cœur transactionnel résilient.",
          bullets: [
            "Moteur de fractionnement en 4x : calcul exact des centimes (RoundingMode.DOWN à 24,99 €, résidu 0,03 € imputé sur J+0 à 25,02 € -> 25,02 € + 3x 24,99 € = 99,99 € exacts).",
            "Ordonnanceur automatique de prélèvements (@Scheduled) aux échéances J+0, J+30, J+60, J+90 avec JOIN FETCH optimisé.",
            "Concurrence et intégrité financière par locking optimiste (@Version) et UUID métier immuable sur BaseEntity.",
            "Automate de résilience bancaire et simulateur de passerelle (succès 90%) : relances automatiques à J+3 et détection des défauts (bascule en DEFAULTED si retryCount > 3).",
            "Console B2B Next.js 15 « Time Machine » pour tester les décalages temporels et suivre les indicateurs financiers en direct.",
            "API sécurisée et observable (Spring Security, erreurs RFC 7807, Spring Actuator, métriques Prometheus) conteneurisée avec Docker Compose.",
            "Stratégie de test complète : tests unitaires JUnit 5 & AssertJ avec horloge figée (Clock.fixed()) et tests d'intégration (@SpringBootTest)."
          ]
        },
        {
          name: "LorJob — Plateforme de suivi de candidatures & pilotage KPI",
          details: "Plateforme fullstack en monorepo propulsée par le runtime Bun et Next.js 15.",
          bullets: [
            "API REST légère et performante avec Hono et persistance PostgreSQL / Prisma ORM.",
            "Tableau de bord de pilotage des KPI de recrutement (taux de conversion, délais moyens, statuts d'entretiens).",
            "Moteur de relances automatisées par e-mail et système d'authentification sans mot de passe sécurisé par code OTP."
          ]
        }
      ],
      skills: [
        "Java 17+",
        "Spring Boot 3",
        "Next.js 15",
        "TypeScript",
        "Bun",
        "Hono",
        "PostgreSQL",
        "Prisma",
        "Docker Compose",
        "JUnit 5",
        "Prometheus",
        "Spring Security"
      ]
    },
    {
      id: "sg",
      company: "Société Générale",
      role: "Développeuse Fullstack",
      period: "Septembre 2022 – Août 2024",
      duration: "2 ans",
      type: "Expérience Entreprise",
      location: "Fontenay-sous-Bois, France",
      context: "Direction des Systèmes d'Information bancaire • Environnement de production critique",
      highlight: "Traitement de flux de données massifs et livraison de la V1 d'un Chatbot IA",
      projects: [
        {
          name: "MyBigData — Analyse de données massives",
          details: "Développement et maintenance de l'application interne critique MyBigData, dédiée à l'exploitation et l'analyse de plusieurs millions de lignes de données bancaires.",
          bullets: [
            "Développement de services backend Java / Spring Boot optimisés pour le traitement à haute charge.",
            "Développement d'UI (TypeScript, React) selon les maquettes Figma, avec tests unitaires et d'intégration.",
            "Requêtes SQL et interfaçage avec les bases de données relationnelles (PostgreSQL, Oracle).",
            "Mise en place de tests rigoureux (JUnit, Mockito, Jest) et contrôle continu de la qualité du code avec SonarQube."
          ]
        },
        {
          name: "Chatbot IA d'Entreprise",
          details: "Livraison en 2 mois de la version 1 d'un chatbot propulsé par l'IA pour les collaborateurs.",
          bullets: [
            "Conception d'une double interface : UI utilisateur pour les requêtes et UI administrateur pour la gestion des connaissances et des logs.",
            "Adoption réussie par plus de 50 utilisateurs internes avec documentation technique complète.",
            "Suivi des projets en Agile Scrum et participation aux mises en production avec l’équipe de déploiement."
          ]
        }
      ],
      skills: [
        "Java",
        "Spring Boot",
        "React",
        "TypeScript",
        "PostgreSQL / Oracle",
        "SonarQube",
        "JUnit",
        "Mockito",
        "Jest",
        "GitLab CI",
        "Agile Scrum"
      ]
    },
    {
      id: "personal-projects",
      company: "Projets d'Ingénierie & R&D",
      role: "Concepteur Logiciel & Cloud (Projets Personnels)",
      period: "Janvier 2025 – Août 2025",
      duration: "Projets R&D",
      type: "Projets Personnels",
      location: "Maurepas, France",
      context: "Cloud public, orchestration de conteneurs, IA embarquée et vision par ordinateur",
      highlight: "Déploiement AWS/K8s et Drone avec suivi facial en temps réel",
      projects: [
        {
          name: "Virtualisation, Orchestration & Déploiement Cloud AWS (07/2025 – 08/2025)",
          details: "Consolidation des compétences pratiques en cloud, conteneurisation et déploiement distribué.",
          bullets: [
            "Conteneurisation d’une application avec Docker puis orchestration avec Kubernetes en environnement virtualisé.",
            "Déploiement sur AWS EC2, avec gestion de la base de données sur AWS RDS et du stockage d'objets sur AWS S3.",
            "Mise en œuvre des principes d'architecture distribuée et de haute disponibilité."
          ]
        },
        {
          name: "Application de Suivi de Visages par Drone (01/2025 – 03/2025)",
          details: "Projet personnel orienté IA embarquée, vision par ordinateur et intégration logiciel-matériel.",
          bullets: [
            "Développement d’un système de pilotage manuel et automatique d’un drone via reconnaissance faciale.",
            "Implémentation de la capture photo et vidéo en temps réel via la caméra embarquée (Python, OpenCV).",
            "Calcul d'asservissement pour maintenir le cadrage du sujet en direct."
          ]
        }
      ],
      skills: [
        "AWS (EC2, RDS, S3)",
        "Docker",
        "Kubernetes",
        "Python",
        "OpenCV",
        "Linux / Shell"
      ]
    }
  ];

  const education = [
    {
      degree: "Ingénieur en Informatique : Spécialité Développement Logiciel",
      school: "ESIEA – École d'Ingénieurs du Monde Numérique",
      period: "09/2021 – 01/2025",
      specialization: "Spécialité Développement Logiciel & Architecture des Systèmes",
      location: "Ivry-sur-Seine, France",
      highlights: [
        "Conception logicielle avancée, algorithmique, structures de données, POO et Clean Architecture.",
        "Génie logiciel, bases de données, sécurité applicative et architectures distribuées.",
        "Gestion de projets d'ingénierie logicielle en méthodologie Agile Scrum."
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Certifiée",
      badge: "Validée",
      description: "Validation des fondamentaux du Cloud AWS, sécurité, architectures réseau, calcul et services managés."
    },
    {
      title: "Certification TOEIC Anglais",
      issuer: "ETS Global",
      status: "Score : 860 / 990",
      badge: "Niveau B2",
      description: "Anglais professionnel et technique fluide en contexte de développement international."
    }
  ];

  const softSkills = [
    "Rigoureuse et organisée",
    "Capacité d’analyse et de synthèse",
    "Maîtrise du travail sous pression",
    "Autonome et force de proposition",
    "Esprit d’équipe",
    "Aisance relationnelle et bonne communication"
  ];

  const hobbies = [
    { title: "Pâtisserie", description: "Précision, rigueur du dosage et créativité culinaire." },
    { title: "Sport & Dépassement", description: "Pratique régulière de la musculation et de la course à pied (endurance et discipline)." },
    { title: "Couture", description: "Patience, minutie, assemblage et attention au moindre détail." }
  ];

  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Conteneur principal avec alignement dashed officiel */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed px-4 sm:px-6 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        
        {/* En-tête de section */}
        <div className="mt-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-blue-200/60 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Parcours Professionnel & Réalisations</span>
          </div>

          <h2 className="text-black dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-xl mb-3">
            Expériences & Formation
          </h2>

          <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base max-w-xl leading-relaxed">
            Ingénieure logicielle diplômée de l'<strong className="text-slate-900 dark:text-white font-medium">ESIEA</strong> avec <strong className="text-blue-700 dark:text-blue-400 font-semibold">2 ans d'expérience à la Société Générale</strong> et aujourd'hui <strong className="text-slate-900 dark:text-white font-medium">Développeuse Fullstack Freelance</strong> (PayFlex, LorJob).
          </p>
        </div>

        {/* Chiffres clés (KPIs) percutants */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">2 ans</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">Société Générale (Prod bancaire)</div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">BNPL 4x</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">PayFlex (FinTech Freelance)</div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">Millions</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">Lignes traitées (MyBigData)</div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">Bac+5</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">ESIEA & AWS Certifiée</div>
          </div>
        </div>

        {/* Filtres d'affichage rapides */}
        <div className="flex flex-wrap gap-2 mb-6 pt-2 border-t border-slate-200 dark:border-border-dark">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm"
                : "bg-slate-100 dark:bg-button-bg-dark text-slate-600 dark:text-gray-dark hover:bg-slate-200 dark:hover:bg-button-hover-dark"
            }`}
          >
            Vue d'ensemble
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "experience"
                ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm"
                : "bg-slate-100 dark:bg-button-bg-dark text-slate-600 dark:text-gray-dark hover:bg-slate-200 dark:hover:bg-button-hover-dark"
            }`}
          >
            Expériences professionnelles
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "education"
                ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm"
                : "bg-slate-100 dark:bg-button-bg-dark text-slate-600 dark:text-gray-dark hover:bg-slate-200 dark:hover:bg-button-hover-dark"
            }`}
          >
            Formation & Certifications
          </button>
        </div>

        {/* Section 1 : Timeline des Expériences Professionnelles */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="space-y-6 my-6">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Expériences en Entreprise & Missions Freelance</span>
            </h3>

            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark p-5 sm:p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              >
                {/* Header de l'expérience */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-100 dark:border-border-dark/60">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h4>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/50">
                        {exp.type}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {exp.role}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-gray-dark mt-1 flex items-center gap-3 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period} ({exp.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contexte & Missions détaillées */}
                <div className="mt-4 space-y-4">
                  <div className="text-xs text-slate-500 dark:text-gray-dark italic">
                    {exp.context}
                  </div>

                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="bg-slate-50/70 dark:bg-button-bg-dark/30 rounded-lg p-3.5 border border-slate-100 dark:border-border-dark/60">
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{proj.name}</span>
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-gray-dark mb-2 pl-5">
                        {proj.details}
                      </p>
                      <ul className="space-y-1.5 pl-5">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-xs text-slate-600 dark:text-gray-dark flex items-start gap-2 leading-relaxed">
                            <span className="text-blue-500 font-bold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Badges de compétences */}
                  <div className="pt-2">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-gray-dark block mb-2">
                      Technologies & Méthodes mobilisées :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-button-bg-dark rounded-md border border-slate-200/50 dark:border-border-dark/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section 2 : Formation & Certifications */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="space-y-6 my-8">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Diplôme & Certifications Officielles</span>
            </h3>

            {/* Formation ESIEA */}
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark p-5 sm:p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {edu.school}
                      </h4>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50">
                        Bac+5 • Titre d'Ingénieur CTI
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-400 font-medium mt-0.5">
                      {edu.specialization}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-gray-dark flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-border-dark/60">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-600 dark:text-gray-dark flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Certifications en grille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-button-bg-dark text-slate-700 dark:text-slate-300">
                        {cert.badge}
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">
                      {cert.title}
                    </h5>
                    <div className="text-[11px] font-medium text-blue-700 dark:text-blue-400 mb-2">
                      {cert.issuer}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-gray-dark leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-border-dark/60 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3 : Atouts & Centres d'Intérêt */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-border-dark">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Atouts */}
            <div>
              <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Atouts & Savoir-Être</span>
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Centres d'Intérêt */}
            <div>
              <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Centres d'Intérêt</span>
              </h3>
              <div className="space-y-2.5">
                {hobbies.map((h, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark"
                  >
                    <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {h.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 4 : Méthode & Philosophie d'Ingénierie */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-border-dark">
          <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Ma Philosophie d'Ingénierie</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">40 %</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Rigueur & Clean Code
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-dark leading-relaxed">
                Précision financière mathématique (zéro perte de centimes), architecture découplée, tests systématiques (JUnit 5, Mockito) et Quality Gates SonarQube.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">35 %</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Cloud, Conteneurs & DevOps
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-dark leading-relaxed">
                Déploiements sur AWS (EC2, RDS, S3), conteneurisation Docker multi-stage, clusters Kubernetes et métriques Prometheus en production.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">25 %</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Sens Produit & Agilité
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-dark leading-relaxed">
                Méthodes Agile Scrum & SAFe, prototypage Figma fidèle, esprit d'équipe et orientation valeur métier pour les utilisateurs finaux.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action & Téléchargement CV */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-border-dark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={downloadCV}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger mon CV (PDF)</span>
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark transition-colors"
          >
            <span>Me contacter pour une opportunité</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PersonInfo;