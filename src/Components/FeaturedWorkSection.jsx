import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import projects from "../data/projects.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";

const FeaturedWorkSection = () => {
  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Conteneur principal aligné avec les bordures dashed officielles */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed px-4 sm:px-6 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        
        {/* Header de la section projets */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-gray-dark uppercase tracking-wider mb-1">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Projets & Réalisations Phares</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Travaux Récents
            </h2>
          </div>

          <Link
            to="/project"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 hover:underline"
          >
            <span>Voir tous les projets</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Carousel Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          className="my-6 pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Link
                to={`/project/${project.id}`}
                className="group flex flex-col justify-between h-full overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-bg-dark hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm"
              >
                <div>
                  {/* Image du projet avec ratio contrôlé */}
                  <div className="w-full h-44 overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      src={project.images && project.images[0] ? project.images[0] : "/images/taskflow.jpg"}
                      alt={project.title}
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur text-white border border-white/20">
                        {project.company}
                      </span>
                    </div>
                  </div>

                  {/* Contenu textuel de la carte */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1.5">
                      {project.title}
                    </h3>

                    {/* Description courte ou type de projet */}
                    <div className="text-xs text-slate-500 dark:text-gray-dark flex items-center gap-2 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{project.date}</span>
                    </div>

                    {/* Technologies mobilisées */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-gray-dark bg-slate-100 dark:bg-button-bg-dark rounded"
                          >
                            {tech.value}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer de la carte */}
                <div className="px-4 sm:px-5 py-3 border-t border-slate-100 dark:border-border-dark/60 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Consulter la fiche projet
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default FeaturedWorkSection;
