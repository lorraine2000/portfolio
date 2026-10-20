import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import { RiCalendarLine } from "react-icons/ri";
import { RiMapPinLine, RiProjectorLine } from "react-icons/ri";
import { FaGithub, FaVideo } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const swiperRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="p-10 text-white text-center">Project not found</div>;
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hasVideo = project.videos && project.videos.length > 0;
  const hasImages = project.images && project.images.length > 0;

  // Construire un tableau avec tous les médias (vidéo en premier, puis images)
  const allMedia = [];
  
  // Ajouter la vidéo en premier si elle existe
  if (hasVideo) {
    allMedia.push({ type: 'video', url: project.videos[0] });
  }
  
  // Ajouter toutes les images
  if (hasImages) {
    project.images.forEach(img => {
      allMedia.push({ type: 'image', url: img });
    });
  }
  
  const hasMultipleMedia = allMedia.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-b-border-light dark:border-b-border-dark border-b-[1px] border-dashed"
    >
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        <Link
          to="/project"
          className="flex items-center gap-2 text-slate-600 dark:text-gray-dark text-sm sm:text-base"
        >
          <RiArrowLeftLine className="text-xl" />
          <span className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
            Back
          </span>
        </Link>

        <div className="mt-6">
          <h1 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
            {project.company} 
          </p>

          <p className="mt-2 flex flex-wrap items-center gap-4 text-slate-600 dark:text-gray-dark text-sm sm:text-base max-w-xl">
            {/* Date */}
            <span className="flex items-center gap-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 dark:bg-gray-700">
                <RiCalendarLine className="w-4 h-4" />
              </span>
              <span>{project.date}</span>
            </span>

            {/* Lieu */}
            <span className="flex items-center gap-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 dark:bg-gray-700">
                <RiMapPinLine className="w-4 h-4" />
              </span>
              <span>{project.lieu}</span>
            </span>

            {/* Type */}
            <span className="flex items-center gap-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 dark:bg-gray-700">
                <RiProjectorLine className="w-4 h-4" />
              </span>
              <span>{project.type}</span>
            </span>

            {/* Bouton GitHub */}
            {project.lien && project.lien.trim() !== "" && (
              <a
                href={project.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 
                          text-white text-sm font-semibold rounded-md transition duration-200"
              >
                <FaGithub className="w-5 h-5" />
                Voir le projet sur GitHub
              </a>
            )}
          </p>
        </div>

        {/* SECTION MÉDIAS : VIDÉO + IMAGES DANS LE MÊME CARROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="mt-6 relative"
        >
          {allMedia.length === 0 ? null : hasMultipleMedia ? (
            <>
              <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ 
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                loop={true}
                className="rounded-lg shadow-lg"
              >
                {allMedia.map((media, index) => (
                  <SwiperSlide key={index}>
                    {media.type === 'video' ? (
                      <video 
                        controls 
                        className="w-full object-cover max-h-[400px]"
                        poster={project.images && project.images[0] ? project.images[0] : undefined}
                      >
                        <source src={media.url} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéo.
                      </video>
                    ) : (
                      <img
                        src={media.url}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full object-cover max-h-[400px]"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bouton précédent */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="swiper-button-prev-custom absolute left-4 top-1/2 transform z-10 bg-slate-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 text-slate-600 dark:text-gray-dark hover:text-black dark:hover:text-white opacity-70 hover:opacity-100 transition-opacity duration-300 text-lg md:text-xl"
                aria-label="Previous slide"
              >
                <RiArrowLeftLine />
              </motion.button>

              {/* Bouton suivant */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="swiper-button-next-custom absolute right-4 top-1/2 transform z-10 bg-slate-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 text-slate-600 dark:text-gray-dark hover:text-black dark:hover:text-white opacity-70 hover:opacity-100 transition-opacity duration-300 text-lg md:text-xl"
                aria-label="Next slide"
              >
                <RiArrowRightLine />
              </motion.button>
            </>
          ) : (
            // Un seul média
            allMedia[0]?.type === 'video' ? (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full object-cover max-h-[400px]"
                  poster={project.images && project.images[0] ? project.images[0] : undefined}
                >
                  <source src={allMedia[0].url} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéo.
                </video>
              </div>
            ) : (
              <img
                src={allMedia[0]?.url}
                alt={project.title}
                className="rounded-lg w-full object-cover max-h-[400px] shadow-lg"
              />
            )
          )}
        </motion.div>

        {/* PRÉSENTATION */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <h2 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Présentation
          </h2>
          <div className="text-slate-600 dark:text-gray-dark text-sm sm:text-base space-y-4">
            {project.description.split("\n").map((paragraph, index) => {
              if (paragraph.trim().startsWith("NB")) {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl border-l-4 border-amber-400 bg-amber-50/80 dark:bg-amber-500/10 dark:border-amber-400 shadow-sm"
                  >
                    <span className="font-bold text-amber-600 dark:text-amber-400">
                      ⚠️ {paragraph.split(":")[0]} :
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {paragraph.split(":").slice(1).join(":")}
                    </span>
                  </div>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* FONCTIONNALITÉS */}
          <h2 className="text-black mt-7 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Fonctionnalités 
          </h2>
          <ul className="grid sm:grid-cols-1 gap-4 mt-4">
            {project.features.map((feature, index) => {
              const IconComponent = RiIcons[feature.icon];
              return (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 dark:border-gray-700
                            bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl 
                            transition-all duration-500 ease-out transform hover:-translate-y-1
                            hover:bg-slate-50 dark:hover:bg-gray-800 group"
                >
                  {IconComponent && (
                    <IconComponent
                      className="w-6 h-6 mt-0.5 flex-shrink-0 transition-transform duration-300 
                                group-hover:scale-125 group-hover:rotate-6"
                      style={{ color: feature.color }}
                    />
                  )}
                  <span className="leading-relaxed text-slate-700 dark:text-slate-300 
                                  transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
                    {feature.value}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* TECHNOLOGIES */}
          <h2 className="text-black mt-10 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Technologies  
          </h2>
          <div className="relative border-l-2 border-slate-300 dark:border-gray-600 ml-4 mt-4">
            {project.technologies.map((tech, index) => {
              const IconComponent = SiIcons[tech.icon] || RiIcons[tech.icon];
              return (
                <div key={index} className="mb-8 ml-6 relative">
                  <span className="absolute -left-2 flex items-center justify-center w-10 h-10 rounded-full
                                   bg-slate-50 dark:bg-gray-800 border-2 border-slate-300 dark:border-gray-600">
                    {IconComponent && (
                      <IconComponent 
                        className="w-5 h-5"
                        style={{ color: tech.color }}
                      />
                    )}
                  </span>
                  <div className="transition-transform duration-300 ease-out hover:translate-x-2 ml-10">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      {tech.value}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RÉSULTATS */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Results
          </h2>
          {Array.isArray(project.results) && project.results.length > 0 && (
            <div className="grid grid-row-2 md:grid-row-1 grid-col-1 md:grid-cols-2 gap-x-2 ">
              {project.results.map((r, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-500 to-teal-400 rounded-r-md opacity-90" />
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1 font-medium">
                    {r.metric}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {r.value}
                  </p>
                  {r.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {r.description}
                    </p>
                  )}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-emerald-100/10 to-transparent dark:from-emerald-400/5" />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;