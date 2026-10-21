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
  TrendingUp,
  ShieldCheck
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
      id: "sg",
      company: "Société Générale",
      role: "Ingénieure d'Études / Développeuse Fullstack & Cloud",
      period: "Septembre 2022 – Août 2024",
      duration: "2 ans",
      type: "Alternance d'Ingénieur",
      location: "Fontenay-sous-Bois, France",
      context: "Direction des Systèmes d'Information bancaire • Environnement de production critique",
      highlight: "Traitement de volumes massifs et livraison d'un Chatbot IA interne",
      projects: [
        {
          name: "Plateforme MyBigData (Données Massives)",
          details: "Développement et maintenance d'une application interne critique traitant plusieurs millions de lignes de données financières.",
          bullets: [
            "Conception de microservices backend Java / Spring Boot optimisés pour le traitement à haute fréquence.",
            "Développement d'interfaces utilisateur modernes et réactives en React / TypeScript d'après des maquettes Figma.",
            "Requêtes SQL avancées et optimisation des performances sur bases de données relationnelles (Oracle, PostgreSQL).",
            "Mise en place de tests unitaires et d'intégration systématiques (JUnit, Mockito, Jest) et Quality Gate SonarQube."
          ]
        },
        {
          name: "Chatbot IA d'Entreprise",
          details: "Conception et livraison de la version 1 d'un assistant conversationnel intelligent en 2 mois.",
          bullets: [
            "Architecture backend Spring Boot et intégration de modèles de langage (LLM).",
            "Double interface : UI utilisateur pour les collaborateurs et UI administrateur pour la gestion des connaissances et des logs.",
            "Adoption par plus de 50 utilisateurs métiers internes avec documentation technique complète."
          ]
        }
      ],
      skills: [
        "Java 17/21",
        "Spring Boot",
        "React",
        "TypeScript",
        "Docker",
        "GitLab CI",
        "PostgreSQL / Oracle",
        "SonarQube",
        "Agile Scrum"
      ]
    },
    {
      id: "cloud-personal",
      company: "Projets Cloud & Ingénierie Personnelle",
      role: "Ingénieure Cloud & Architecte Logiciel (Lab & Réalisations)",
      period: "2024 – Présent",
      duration: "Continu",
      type: "Projets & R&D",
      location: "France",
      context: "Conception d'architectures distribuées, observabilité et automatisation DevSecOps",
      highlight: "Déploiements AWS, Kubernetes, Terraform et Kafka",
      projects: [
        {
          name: "Déploiement Cloud AWS & Kubernetes (EKS)",
          details: "Mise en place d'une infrastructure hautement disponible et sécurisée.",
          bullets: [
            "Conteneurisation multi-stage Docker pour des images ultra-légères.",
            "Orchestration avec manifests Kubernetes (Deployments, Services, Ingress ALB, Secrets).",
            "Provisionnement d'infrastructure as Code (IaC) avec Terraform sur AWS (EC2, RDS, S3).",
            "Surveillance en continu et métriques avec Prometheus, Grafana et CloudWatch."
          ]
        },
        {
          name: "Architecture événementielle avec Apache Kafka",
          details: "Système de communication asynchrone entre microservices distribués.",
          bullets: [
            "Implémentation du Transactional Outbox Pattern avec Spring Boot 3 et Kafka.",
            "Tolérance aux pannes avec Resilience4j (Circuit Breakers, Retry, Fallbacks).",
            "Tests d'intégration avec Testcontainers pour valider les brokers Kafka en local."
          ]
        }
      ],
      skills: [
        "AWS (EC2, RDS, S3, EKS)",
        "Kubernetes",
        "Terraform",
        "Apache Kafka",
        "Docker",
        "GitHub Actions",
        "Resilience4j",
        "Spring Boot 3"
      ]
    }
  ];

  const education = [
    {
      degree: "Diplôme d'Ingénieur du Numérique (Grade de Master)",
      school: "ESIEA – École d'Ingénieurs du Monde Numérique",
      period: "2021 – 2025",
      specialization: "Spécialité Développement Logiciel & Architecture des Systèmes",
      location: "Paris / Ivry-sur-Seine",
      highlights: [
        "Conception logicielle avancée, algorithmique, structures de données complexes et Clean Architecture.",
        "Sécurité applicative, systèmes d'information distribués et génie logiciel.",
        "Gestion de projets d'ingénierie en méthode Agile Scrum."
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Certifiée",
      badge: "Validé",
      description: "Validation des fondamentaux du Cloud AWS, de la sécurité, des architectures réseau et des services managés."
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      status: "En cours",
      badge: "Préparation active",
      description: "Conception d'architectures Cloud hautement disponibles, tolérantes aux pannes, sécurisées et optimisées en coûts."
    },
    {
      title: "Certification TOEIC Anglais",
      issuer: "ETS Global",
      status: "Score : 860 / 990",
      badge: "Niveau B2 / C1",
      description: "Maîtrise de l'anglais professionnel en contexte technique, rédactionnel et de communication internationale."
    }
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
            Ingénieure diplômée de l'<strong className="text-slate-900 dark:text-white font-medium">ESIEA</strong> avec <strong className="text-blue-700 dark:text-blue-400 font-semibold">2 ans d'expérience à la Société Générale</strong> sur des applications bancaires critiques, le traitement de données massives et le Cloud.
          </p>
        </div>

        {/* Chiffres clés (KPIs) percutants */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">2 ans</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">Société Générale (Prod bancaire)</div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">Millions</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">Lignes de données (MyBigData)</div>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
            <div className="text-xs text-slate-500 dark:text-gray-dark mt-0.5">Collaborateurs (Chatbot IA)</div>
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
              <span>Expériences en Entreprise & Projets d'Ingénierie</span>
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
                        Bac+5 • Titre CTI
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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

        {/* Section 3 : Méthode & Philosophie d'Ingénierie */}
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
                Architecture découplée en microservices, tests systématiques (JUnit, Mockito, Jest) et Quality Gates SonarQube.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">35 %</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Automatisation Cloud & DevOps
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-dark leading-relaxed">
                Infrastructure as Code (Terraform), conteneurisation Docker, clusters Kubernetes (EKS) et pipelines CI/CD résilients.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark shadow-sm">
              <div className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">25 %</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                Agilité & Sens Métier
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-dark leading-relaxed">
                Rituels Scrum, collaboration transverse avec les équipes produit et DevOps pour délivrer rapidement de la valeur utile.
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