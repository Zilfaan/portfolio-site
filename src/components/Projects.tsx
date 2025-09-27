"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import TechBlock from "./TechBlock";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Show a 3d Carousel effect for desktop and a normal carousel for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto rotate carousel
  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Controlling carousel

  const goToProject = (index: number) => {
    setCurrentIndex(index);
    startAutoRotate();
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    startAutoRotate();
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    startAutoRotate();
  };

  // 3D Effect for carousel cards
  const getDesktopTransformStyle = (index: number) => {
    const total = projects.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    const visible = Math.abs(diff) <= 1;
    const angle = diff * 50;
    const radius = 280;
    const scale = diff === 0 ? 1.1 : 0.85;
    const opacity = visible ? (diff === 0 ? 1 : 0.6) : 0;
    const zIndex = diff === 0 ? 10 : visible ? 5 : 0;
    return {
      transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: visible ? "auto" : "none",
    };
  };

  // Standard carousel for mobile
  const getMobileTransformStyle = (index: number) => {
    const diff = index - currentIndex;
    const translateX = diff * 100;
    const scale = diff === 0 ? 1 : 0.9;
    const opacity = Math.abs(diff) <= 1 ? 1 : 0;
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex: diff === 0 ? 10 : 5,
    };
  };

  return (
    <div className="pt-10 pb-20 flex items-center justify-center px-4 md:px-6 relative min-h-screen">
      {/* Randomised dots in background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-20 animate-pulse hidden md:block"
          style={{
            backgroundColor:
              i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-magenta)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="max-w-7xl w-full">
        {isMobile ? (
          <div className="space-y-8">
            {/* Mobile Info */}
            <div className="text-center space-y-6">
              <h1 className="text-2xl md:text-3xl font-mono font-bold special-text">
                ~/{projects[currentIndex].name.toLowerCase().replace(" ", "-")}
              </h1>
              <div
                className="rounded-xl border border-opacity-30 p-4 mx-4 border-[var(--accent-cyan)] "
                style={{
                  backgroundColor: "rgba(0,255,245,0.05)",
                  boxShadow: "0 5px 20px rgba(0,255,245,0.1)",
                }}
              >
                <p className="text-sm opacity-90 mb-4">
                  {projects[currentIndex].description}
                </p>
                <Link
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-transform duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))",
                    color: "var(--background)",
                    boxShadow: "0 5px 15px rgba(0,255,245,0.3)",
                  }}
                >
                  ./launch-project.sh
                </Link>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                  {projects[currentIndex].techstack.map((tech, index) => (
                    <TechBlock key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="relative h-64 overflow-hidden rounded-xl mx-4">
              <div className="relative w-full h-full flex items-center justify-center">
                {projects.map((project, index) => {
                  return (
                    <div
                      key={project.slug}
                      className="absolute w-full h-full rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
                      style={getMobileTransformStyle(index)}
                    >
                      {index === currentIndex ? (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="block w-full h-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            draggable={false}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-sm font-mono font-bold text-[var(--accent-cyan)]">
                              {project.name}
                            </h3>
                          </div>
                        </Link>
                      ) : (
                        <div onClick={() => goToProject(index)}>
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            draggable={false}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-sm font-mono font-bold text-[var(--accent-cyan)]">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={prevProject}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--background)]/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors z-20"
              >
                ←
              </button>
              <button
                onClick={nextProject}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--background)]/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors z-20"
              >
                →
              </button>
            </div>

            <div className="flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[var(--accent-cyan)] scale-125"
                      : "bg-[var(--foreground)]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center min-h-[60vh] select-none">
            {/* Desktop Info */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl md:text-4xl font-mono font-bold special-text">
                ~/{projects[currentIndex].name.toLowerCase().replace(" ", "-")}
              </h1>
              <div
                className="rounded-xl border border-opacity-30 p-6 border-[var(--accent-cyan)]"
                style={{
                  backgroundColor: "rgba(0,255,245,0.05)",
                  boxShadow: "0 5px 20px rgba(0,255,245,0.1)",
                }}
              >
                <p className="text-base opacity-90 mb-4 leading-relaxed">
                  {projects[currentIndex].description}
                </p>
                <Link
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-mono font-semibold transition-transform duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))",
                    color: "var(--background)",
                    boxShadow: "0 5px 15px rgba(0,255,245,0.3)",
                  }}
                >
                  ./launch-project.sh
                </Link>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                  {projects[currentIndex].techstack.map((tech, index) => (
                    <TechBlock key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Carousel */}
            <div
              className="relative w-full h-[400px] flex items-center justify-center"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease-in-out",
                }}
              >
                {projects.map((project, index) => {
                  const { transform, zIndex, opacity } =
                    getDesktopTransformStyle(index);
                  const isActive = index === currentIndex;
                  return (
                    <div
                      key={project.slug}
                      className="absolute top-1/2 left-1/2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                      style={{
                        width: isActive ? 240 : 200,
                        height: isActive ? 300 : 250,
                        marginLeft: isActive ? "-120px" : "-100px",
                        marginTop: isActive ? "-150px" : "-125px",
                        transform,
                        zIndex,
                        opacity,
                        boxShadow: isActive
                          ? "0 20px 40px rgba(0,255,245,0.3)"
                          : "0 10px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      {isActive ? (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="block w-full h-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            draggable={false}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-sm font-mono font-bold text-[var(--accent-cyan)]">
                              {project.name}
                            </h3>
                          </div>
                        </Link>
                      ) : (
                        <div onClick={() => goToProject(index)}>
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            draggable={false}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-sm font-mono font-bold text-[var(--accent-cyan)]">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
