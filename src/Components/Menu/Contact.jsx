import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiCopy, 
  FiCheck, 
  FiExternalLink, 
  FiDownload, 
  FiShare2, 
  FiMapPin, 
  FiClock, 
  FiSend,
  FiBriefcase
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);

  // Informations de contact
  const contactInfo = {
    name: "Lorraine KOUAM",
    title: "Ingénieure Cloud & DevOps | Fullstack Java",
    email: "lorrainekouam084@gmail.com",
    phone: "+33 6 95 39 86 00",
    linkedin: "https://www.linkedin.com/in/ls-kouam",
    github: "https://github.com/",
    location: "Île-de-France (Paris / Maurepas) • Mobilité France 🇫🇷"
  };

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.linkedin}
ADR:;;Île-de-France;France;;;
NOTE:Ingénieure Cloud & DevOps | Fullstack Java (ESIEA, Société Générale)
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Lorraine_KOUAM_contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const shareContact = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${contactInfo.name} - ${contactInfo.title}`,
          text: `Contactez Lorraine KOUAM (${contactInfo.title}) : ${contactInfo.email} | ${contactInfo.phone}`,
          url: window.location.href
        });
      } catch (err) {
        console.log("Share cancelled or failed");
      }
    } else {
      copyToClipboard(`${contactInfo.name} - ${contactInfo.email} - ${contactInfo.phone}`, "share");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Prise de contact portfolio - ${formData.name || "Nouveau contact"}`
    );
    const bodyEncoded = encodeURIComponent(
      `Nom / Entreprise : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );
    
    // Déclenche le client mail avec les champs pré-remplis
    window.location.href = `mailto:${contactInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const contactCards = [
    {
      id: "email",
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      value: contactInfo.email,
      description: "Idéal pour échanger sur une opportunité ou un projet",
      badge: "Réponse < 24h",
      actionText: "Envoyer un email",
      action: () => (window.location.href = `mailto:${contactInfo.email}?subject=Prise de contact`),
      canCopy: true
    },
    {
      id: "phone",
      icon: <FiPhone className="w-5 h-5" />,
      title: "Téléphone",
      value: contactInfo.phone,
      description: "Pour un échange direct et réactif",
      badge: "Lun - Ven",
      actionText: "Appeler",
      action: () => (window.location.href = `tel:${contactInfo.phone.replace(/\s/g, "")}`),
      canCopy: true
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "ls-kouam",
      description: "Réseau professionnel et parcours détaillé",
      badge: "Profil vérifié",
      actionText: "Consulter le profil",
      action: () => window.open(contactInfo.linkedin, "_blank"),
      canCopy: false
    },
    {
      id: "github",
      icon: <FaGithub className="w-5 h-5" />,
      title: "GitHub",
      value: "Projets & Code",
      description: "Architectures Cloud, CI/CD et dépôts Java / React",
      badge: "Open Source",
      actionText: "Explorer les projets",
      action: () => window.open(contactInfo.linkedin, "_blank"),
      canCopy: false
    }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        {/* Conteneur principal aligné avec le reste du portfolio */}
        <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
          
          {/* Header de la section */}
          <div className="mt-4 mb-8">
            {/* Badge de disponibilité épuré */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible pour de nouvelles opportunités • Île-de-France & Remote
            </div>

            <h1 className="text-black dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-xl mb-3">
              Me Contacter
            </h1>

            <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base max-w-xl leading-relaxed">
              Vous recherchez une <strong>Ingénieure Cloud & DevOps</strong> ou une <strong>Développeuse Fullstack Java</strong> ? Discutons de vos besoins d'infrastructure, de vos projets ou d'une opportunité de collaboration.
            </p>

            {/* Micro-indicateurs d'engagement (design sobre et pro) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs sm:text-sm text-slate-600 dark:text-gray-dark border-t border-slate-200 dark:border-border-dark mt-5">
              <div className="flex items-center gap-2">
                <FiClock className="text-slate-400 dark:text-slate-500" />
                <span>Temps de réponse : <strong className="text-slate-900 dark:text-white font-medium">&lt; 24 heures</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-slate-400 dark:text-slate-500" />
                <span>Localisation : <strong className="text-slate-900 dark:text-white font-medium">Paris / IDF (Mobilité France)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FiBriefcase className="text-slate-400 dark:text-slate-500" />
                <span>Contrats : <strong className="text-slate-900 dark:text-white font-medium">CDI • Prestation • Freelance</strong></span>
              </div>
            </div>

            {/* Actions rapides vCard & Partage */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark transition-colors shadow-sm"
              >
                <FiDownload className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Enregistrer la fiche contact (.vcf)</span>
              </button>

              <button
                onClick={shareContact}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark transition-colors shadow-sm"
              >
                <FiShare2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>{copiedItem === "share" ? "Coordonnées copiées !" : "Partager les coordonnées"}</span>
              </button>
            </div>
          </div>

          {/* Grille des cartes de contact (palette unifiée, zéro arc-en-ciel) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {contactCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-bg-dark border border-slate-200 dark:border-border-dark rounded-xl p-5 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-button-bg-dark text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-border-dark">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-gray-dark bg-slate-100 dark:bg-button-bg-dark/70 px-2.5 py-1 rounded-md">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-0.5">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-400 break-all mb-2">
                    {card.value}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-gray-dark mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-border-dark/60">
                  <button
                    onClick={card.action}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 transition-colors"
                  >
                    <span>{card.actionText}</span>
                    <FiExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  {card.canCopy && (
                    <button
                      onClick={() => copyToClipboard(card.value, card.id)}
                      className="p-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-button-hover-dark text-slate-700 dark:text-slate-300 transition-colors"
                      title="Copier dans le presse-papiers"
                      aria-label="Copier"
                    >
                      {copiedItem === card.id ? (
                        <FiCheck className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <FiCopy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire de message direct */}
          <div className="mt-10 bg-white dark:bg-bg-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                Envoyer un message direct
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-dark">
                Remplissez ce formulaire pour m'écrire directement. Votre logiciel de messagerie s'ouvrira avec les informations pré-remplies.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Votre nom / Entreprise <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Jean Dupont (Société X)"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-button-bg-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Votre adresse email <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nom@entreprise.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-button-bg-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Sujet de votre demande
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Ex: Opportunité Ingénieure Cloud / DevOps (CDI)"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-button-bg-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message <span className="text-slate-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Présentez brièvement votre projet, vos attentes techniques ou votre proposition..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-button-bg-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-500 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>

                {formSent && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in">
                    ✓ Client de messagerie ouvert avec vos informations !
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Bannière de conclusion professionnelle (harmonisée) */}
          <div className="mt-10 border border-slate-200 dark:border-border-dark rounded-xl p-6 sm:p-8 bg-slate-50/60 dark:bg-button-bg-dark/30">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Prêt(e) à collaborer ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-dark leading-relaxed mb-5">
              Disponible pour échanger autour de vos projets Cloud & DevOps, architectures microservices ou opportunités de recrutement.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 text-xs sm:text-sm font-medium transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>M'écrire par email</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-border-dark bg-white dark:bg-button-bg-dark text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-button-hover-dark text-xs sm:text-sm font-medium transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Me rejoindre sur LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;