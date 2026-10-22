import { useEffect, useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import { RiCalendarLine } from "react-icons/ri";

const Projects = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const smoothPosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      smoothPosRef.current = {
        x:
          smoothPosRef.current.x +
          (cursorPos.x - smoothPosRef.current.x) * 0.12,
        y:
          smoothPosRef.current.y +
          (cursorPos.y - smoothPosRef.current.y) * 0.12,
      };
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [cursorPos]);

  const handleMouseEnterCard = () => {
    setIsHovered(true);
    setCursorScale(1.3);
  };

  const handleMouseLeaveCard = () => {
    setIsHovered(false);
    setCursorScale(1);
  };

  const smoothPos = smoothPosRef.current;
  const opacity = isHovered ? 1 : 0;
  const scale = isHovered ? 1 : 0;
  const cursorTransform = `translate(${smoothPos.x - 12.5}px, ${
    smoothPos.y - 12.5
  }px) scale(${cursorScale})`;

  return (
    <div className="border-b-border-light dark:border-b-border-dark border-b-[1px]">
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        <h1 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight">
          Mes projets récents
        </h1>
        <p className="text-slate-600 dark:text-gray-dark max-w-md text-sm sm:text-base">
          Voici une sélection de projets sur lesquels j'ai travaillé récemment.
        </p>

        <div className="relative">
          {cursorPos.x > 0 && (
            <div
              className={`fixed z-[9999999] pointer-events-none w-5 h-5 rounded-full transition-all duration-300 ease-out bg-slate-200/80 dark:bg-gray-800/90 backdrop-blur-lg border border-slate-300/60 dark:border-gray-700/60 shadow-2xl`}
              style={{
                opacity,
                transform: `${cursorTransform} scale(${scale})`,
                top: 0,
                left: 0,
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black/90 dark:bg-white/90 rounded-full shadow-md" />
            </div>
          )}

          <div className="flex flex-col gap-7 md:gap-16 my-7">
            {projects.map((project, index) => (
              <div
                key={index}
                className="max-w-2xl group overflow-hidden cursor-none bg-slate-100 border-border-light dark:bg-bg-dark border dark:border-border-dark rounded-lg shadow-md"
                onMouseEnter={handleMouseEnterCard}
                onMouseLeave={handleMouseLeaveCard}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="max-h-[350px] overflow-hidden">
                    <img
                      className="rounded-t-lg overflow-hidden h-full group-hover:scale-105 object-cover w-full transition-all duration-500"
                      src={project.images[0]}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-5 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/50">
                          {project.company}
                        </span>
                        {project.type && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-button-bg-dark text-slate-700 dark:text-slate-300">
                            {project.type}
                          </span>
                        )}
                      </div>

                      <h5 className="mb-1 text-base md:text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h5>

                      <div className="flex items-center gap-2 text-slate-500 dark:text-gray-dark text-xs sm:text-sm mt-1">
                        <RiCalendarLine className="w-4 h-4 text-blue-500" />
                        <span>{project.date}</span>
                      </div>

                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-button-bg-dark rounded border border-slate-200/60 dark:border-border-dark"
                            >
                              {tech.value}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <button className="group-hover:rotate-45 text-base md:text-2xl text-black dark:text-white transition-all duration-200 p-1 flex-shrink-0">
                      <GoArrowUpRight />
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;