import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../images/person.jpg";
import { 
  Cloud, 
  Database, 
  Layout, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Mail, 
  Clock, 
  MapPin,
  Sparkles,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

const Information = () => {
  const [time, setTime] = useState("");

  // Met à jour l'heure en temps réel
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/Paris" };
      const currentTime = now.toLocaleTimeString("fr-FR", options);
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

  // 4 Piliers techniques unifiés
  const pillars = [
    {
      icon: Database,
      title: "Backend & Micro-Services",
      subtitle: "Java 17/21, Spring Boot 3, Spring Security, Hibernate, Hono, Python",
      details: "APIs REST performantes, architectures modulaires, transactionnel BNPL, persistance SQL/NoSQL et robustesse bancaire."
    },
    {
      icon: Layout,
      title: "Frontend & Applications Web",
      subtitle: "TypeScript, React, Next.js 15, Bun, Redux, Tailwind CSS, Figma",
      details: "Interfaces utilisateurs interactives, consoles B2B, typage strict de bout en bout et dashboards de pilotage KPI."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      subtitle: "AWS (EC2, RDS, S3), Docker, Kubernetes, GitLab CI, Jenkins, Azure",
      details: "Conteneurisation d'applications, orchestration de clusters, pipelines d'intégration continue et déploiement distribué."
    },
    {
      icon: ShieldCheck,
      title: "Tests, Qualité & Méthodes",
      subtitle: "JUnit 5, Mockito, AssertJ, Jest, Selenium, SonarQube, Agile Scrum & SAFe",
      details: "Couverture de tests unitaires/intégration, détection de non-régression, analyse statique de code et rituels agiles."
    }
  ];

  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Conteneur aligné avec le reste du portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl md:border-r-[1px] md:border-dashed px-4 sm:px-6 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto"
      >
        {/* Barre de statut supérieure */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-4">
            <img 
              className="w-14 h-14 rounded-full border border-slate-300 dark:border-border-dark object-cover shadow-sm" 
              src={img} 
              alt="Lorraine KOUAM"
            />
            <div>
              <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                Lorraine KOUAM
              </span>
              <span className="text-xs text-slate-500 dark:text-gray-dark">
                ESIEA • Ex-Société Générale • Freelance • AWS Certifiée
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            À l'écoute d'opportunités
          </div>
        </div>

        {/* Titre principal & Effet machine à écrire sobre */}
        <div className="mt-4 mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Bonjour, je suis{" "}
            <span className="text-blue-700 dark:text-blue-400">
              <Typewriter
                words={["Lorraine KOUAM"]}
                loop={false}
                cursor={true}
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={100}
              />
            </span>
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 mt-2">
            Développeuse Fullstack • Java | React | Python | Cloud & DevOps
          </h2>
        </div>

        {/* Présentation percutante & ciblée */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-gray-dark leading-relaxed">
          <p>
            Ingénieure logicielle diplômée de l'<strong className="text-slate-900 dark:text-white font-medium">ESIEA</strong> avec <strong className="text-blue-700 dark:text-blue-400 font-semibold">2 ans d’expérience à la Société Générale</strong>, j’ai développé des applications critiques en <strong className="text-slate-900 dark:text-white font-medium">Java / Spring Boot</strong> et <strong className="text-slate-900 dark:text-white font-medium">React / TypeScript</strong>, avec une forte sensibilité à la qualité et à la maintenabilité du code.
          </p>
          <p>
            Actuellement <strong className="text-slate-900 dark:text-white font-medium">Développeuse Fullstack Freelance</strong>, j'ai notamment conçu <strong className="text-blue-700 dark:text-blue-400 font-semibold">PayFlex</strong> (plateforme FinTech BNPL 4x à précision centime absolue en Spring Boot 3 & Next.js 15) et <strong className="text-slate-900 dark:text-white font-medium">LorJob</strong> (plateforme de suivi de candidatures avec Bun, Hono et Prisma).
          </p>
          <p>
            J'ai également consolidé mes compétences <strong className="text-slate-900 dark:text-white font-medium">Cloud & DevOps</strong> via des déploiements distribués sur <strong className="text-slate-900 dark:text-white font-medium">AWS (EC2, RDS, S3), Docker et Kubernetes</strong>. Je recherche un poste de développeuse fullstack, backend Java ou cloud & DevOps pour contribuer à des produits robustes à forte valeur métier.
          </p>
        </div>

        {/* Barre d'actions & Micro-indicateurs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Voir mes projets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Télécharger mon CV</span>
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>Me contacter</span>
          </Link>

          {/* Heure locale & Localisation */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-dark ml-auto pt-2 sm:pt-0">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Paris : {time}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Mobilité : France</span>
            </span>
          </div>
        </div>

        {/* Piliers techniques unifiés */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-border-dark">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider">
              Domaines d'Expertise & Technologies
            </h3>
            <Link 
              to="/expertise" 
              className="text-xs font-medium text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Toutes les compétences</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-button-bg-dark text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-border-dark">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400 mb-1">
                    {item.subtitle}
                  </div>
                  
                  <p className="text-[11px] text-slate-500 dark:text-gray-dark leading-relaxed">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Information;