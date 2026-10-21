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
  Sparkles
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

  // 4 Piliers techniques unifiés (palette monochrome & accents pro, zéro arc-en-ciel)
  const pillars = [
    {
      icon: Cloud,
      title: "Cloud & Virtualisation",
      subtitle: "AWS (EC2, RDS, S3, EKS), Docker, Kubernetes, Terraform (IaC)",
      details: "Déploiement d'architectures distribuées résilientes, conteneurisation multi-stage et haute disponibilité."
    },
    {
      icon: Database,
      title: "Backend & Microservices",
      subtitle: "Java 17/21, Spring Boot 3, Apache Kafka, PostgreSQL, Oracle",
      details: "APIs REST performantes, architectures orientées événements, Transactional Outbox et tolérance aux pannes."
    },
    {
      icon: Layout,
      title: "Frontend & Interfaces Web",
      subtitle: "TypeScript, JavaScript, React, Tailwind CSS, Intégration Figma",
      details: "Interfaces utilisateur et tableaux de bord ergonomiques, typage strict et composants réutilisables."
    },
    {
      icon: ShieldCheck,
      title: "DevSecOps & Qualité Logicielle",
      subtitle: "GitLab CI, GitHub Actions, SonarQube, JUnit 5, Mockito, Trivy",
      details: "Tests automatisés, contrôle qualité continu, Quality Gates bloquantes et scan de vulnérabilités."
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
                ESIEA • Ex-Société Générale • AWS Certifiée
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible pour opportunités
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
            Ingénieure Cloud & DevOps • Développeuse Fullstack Java
          </h2>
        </div>

        {/* Présentation percutante & ciblée */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-gray-dark leading-relaxed">
          <p>
            Diplômée de l'<strong className="text-slate-900 dark:text-white font-medium">ESIEA</strong> et forte de <strong className="text-blue-700 dark:text-blue-400 font-semibold">2 ans d’expérience à la Société Générale</strong>, je conçois et déploie des applications critiques en combinant la rigueur du développement applicatif (<strong className="text-slate-900 dark:text-white font-medium">Java / Spring Boot</strong>, <strong className="text-slate-900 dark:text-white font-medium">React / TypeScript</strong>) avec la puissance des environnements Cloud modernes (<strong className="text-slate-900 dark:text-white font-medium">AWS, Docker, Kubernetes</strong>).
          </p>
          <p>
            À la Société Générale, j'ai notamment contribué à la plateforme de données massives <strong className="text-slate-900 dark:text-white font-medium">MyBigData</strong> (plusieurs millions de lignes traitées) et mené à bien la création de la V1 d'un <strong className="text-slate-900 dark:text-white font-medium">Chatbot IA</strong> interne adopté par plus de 50 collaborateurs.
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

          {/* Heure locale & Localisation (sobre et discret) */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-dark ml-auto pt-2 sm:pt-0">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Paris : {time}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Île-de-France (Mobilité France)</span>
            </span>
          </div>
        </div>

        {/* Piliers techniques unifiés (remplacement du bloc multicolore) */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-border-dark">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider">
              Domaines d'Expertise Technique
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