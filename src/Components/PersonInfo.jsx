import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PersonInfo = () => {
  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Container with responsive border styling */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed px-5 md:px-12 py-12 h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        <div className="flex items-center mt-11 justify-between">
          <h6 className="text-base md:text-xl font-bold text-blue-700 dark:text-gray-dark">Who I Am</h6>
          <div className="flex items-center text-xl font-bold group gap-2 cursor-pointer">
            <h6 className="md:text-base text-sm text-blue-700 dark:text-gray-dark">What I Offer</h6>
            <button className="group-hover:rotate-45 text-blue-700 md:text-base text-sm dark:text-gray-dark transition-all duration-150">
              <GoArrowUpRight />
            </button>
          </div>
        </div>

        {/* Section 1: Présentation du profil */}
        <div className="pt-10">
          <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-gray-dark mb-4">
            Ingénieure Cloud, DevOps & Développeuse Fullstack
          </h4>
          <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Diplômée de l'<span className="font-semibold text-blue-700 dark:text-blue-400">ESIEA</span> (Spécialité Développement Logiciel) et forte de <span className="font-semibold text-purple-600 dark:text-purple-400">2 ans d’expérience à la Société Générale</span>, je conçois et développe des solutions logicielles critiques et résilientes. Mon profil associe la rigueur du <span className="font-semibold">développement applicatif (Java / Spring Boot, React / TypeScript)</span> à la puissance des <span className="font-semibold">environnements Cloud & DevOps modernes</span>.
          </p>
          
          <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Je m'attache à construire des <span className="font-semibold text-green-600 dark:text-green-400">systèmes scalables de bout en bout</span> : de la conception de microservices sécurisés et performants, jusqu'à leur conteneurisation sous <span className="font-semibold">Docker</span>, leur orchestration avec <span className="font-semibold">Kubernetes</span> et leur déploiement sur <span className="font-semibold">AWS</span>.
          </p>
        </div>

        {/* Section 2: Expérience et réalisations */}
        <div className="pt-8">
          <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-gray-dark mb-4">
            De la gestion de données massives aux architectures Cloud
          </h4>
          <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            À la <span className="font-semibold text-blue-700 dark:text-blue-400">Société Générale</span>, j'ai participé au développement et à la maintenance de <span className="font-semibold">MyBigData</span>, une application traitant plusieurs millions de lignes de données, et mené à bien la création de la V1 d'un <span className="font-semibold">chatbot IA</span> délivré en 2 mois et adopté par plus de 50 utilisateurs internes.
          </p>
          
          <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            En parallèle, je certifie et approfondis constamment mes compétences Cloud (<span className="font-semibold">AWS Certified Cloud Practitioner</span>, préparation de l'AWS Solutions Architect Associate). Mes projets personnels récents illustrent cette dynamique : orchestration distribuée d'applications multi-services (EC2, RDS, S3, Kubernetes) et développement d'applications innovantes avec IA embarquée.
          </p>
        </div>

        {/* Section 3: Philosophie d'ingénierie */}
        <div className="pt-8">
          <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-gray-dark mb-4">
            Ma philosophie d'ingénierie logicielle
          </h4>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-gray-300 mb-4">
            "La véritable valeur d'une application réside dans sa robustesse, sa maintenabilité et l'automatisation sans faille de son cycle de vie."
          </blockquote>
          
          <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Je place la <span className="font-semibold text-blue-700 dark:text-blue-400">qualité logicielle</span> au cœur de mes réalisations : tests unitaires et d'intégration systématiques (JUnit, Mockito, Jest), validation continue du code avec SonarQube, et découplage modulaire en microservices.
          </p>
          
          <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Pour moi, un projet réussi est composé de <span className="font-semibold">40% de rigueur technique</span> (clean code, architecture solide, tests), <span className="font-semibold">35% d'automatisation Cloud & DevOps</span> (CI/CD, conteneurs, infra-as-code), et <span className="font-semibold">25% d'écoute métier et d'agilité</span> (Scrum, collaboration étroite, orientation valeur utilisateur).
          </p>
        </div>

        {/* Section 4: Maîtrise technique */}
        <div className="pt-8">
          <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-gray-dark mb-4">
            Domaines de Maîtrise Technique
          </h4>
          <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white mb-4">
            Un éventail complet alliant le développement d'applications fullstack et l'infrastructure Cloud :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Cloud & Virtualisation :</span> AWS (EC2, RDS, S3), Docker, Kubernetes, Azure
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Backend & Microservices :</span> Java, Spring Boot, Spring Security, Hibernate, Python
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Frontend & Web :</span> TypeScript, JavaScript, React, Angular, Node.js, Redux
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Bases de Données :</span> PostgreSQL, MySQL, Oracle, MongoDB, SQL Server
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">CI/CD & DevOps :</span> GitLab CI, Jenkins, Linux, Shell Scripting
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Qualité & Tests :</span> JUnit, Mockito, Jest, Selenium, SonarQube
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Méthodologies :</span> Agile Scrum, SAFe, Jira, Git
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span className="font-medium">Certifications :</span> AWS Cloud Practitioner, AWS Solutions Architect Associate (en cours)
            </div>
          </div>
        </div>

        {/* Section 5: Disponibilité & Objectif */}
        <div className="pt-8">
          <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-gray-dark mb-4">
            Prête pour de nouveaux défis
          </h4>
          <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Je recherche un poste d'<span className="font-semibold text-blue-700 dark:text-blue-400">Ingénieure Cloud & DevOps</span> ou <span className="font-semibold text-blue-700 dark:text-blue-400">Développeuse Fullstack</span> au sein d'une équipe passionnée par l'innovation technique et l'excellence logicielle.
          </p>
          
          <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed dark:text-white">
            Basée en <span className="font-semibold">Île-de-France (Maurepas / Paris)</span> avec une <span className="font-semibold">mobilité France</span>, je suis prête à m'investir sur des projets à forte valeur ajoutée.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;