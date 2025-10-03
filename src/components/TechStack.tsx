"use client";

import { useState } from "react";
import TechBlock from "./TechBlock";

// List techstack and categorize
const techs = [
  // Languages
  { name: "C#", type: "language" },
  { name: "C++", type: "language" },
  { name: "Java", type: "language" },
  { name: "JavaScript", type: "language" },
  { name: "Python", type: "language" },
  { name: "TypeScript", type: "language" },

  // Frontend
  { name: "CSS", type: "frontend" },
  { name: "Electron", type: "frontend" },
  { name: "Expo", type: "frontend" },
  { name: "HTML", type: "frontend" },
  { name: "Next.Js", type: "frontend" },
  { name: "React", type: "frontend" },
  { name: "React Native", type: "frontend" },
  { name: "TailwindCSS", type: "frontend" },
  { name: "Vite", type: "frontend" },

  // Backend
  { name: "Express", type: "backend" },
  { name: "Firebase", type: "backend" },
  { name: "Node.Js", type: "backend" },

  // Database
  { name: "MongoDB", type: "database" },
  { name: "MySQL", type: "database" },
  { name: "SQLite", type: "database" },

  // Developer Operations
  { name: "Docker", type: "Developer Operations" },
  { name: "Git", type: "Developer Operations" },
  { name: "Github Actions", type: "Developer Operations" },

  // Game dev
  { name: "Blender", type: "Game Development" },
  { name: "MCP", type: "Game Development" },
  { name: "OpenGL", type: "Game Development" },
  { name: "Unity", type: "Game Development" },
  { name: "Unreal Engine", type: "Game Development" },
].sort((a, b) => a.name.localeCompare(b.name));

// Generate categories from tech stack
const filters = ["all", ...new Set(techs.map((t) => t.type))];

export default function TechStackSection() {
  // Filtering
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTechs =
    activeFilter === "all"
      ? techs
      : techs.filter((tech) => tech.type === activeFilter);

  // Utility to ensure categories with less entries only take the required amount of space
  const getGridCols = (count: number) => {
    if (count >= 6) return "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
    if (count === 5) return "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
    if (count === 4) return "sm:grid-cols-3 md:grid-cols-4";
    return "sm:grid-cols-3";
  };

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center text-center">
      {/* Background glow */}
      <div className="w-[75rem] h-[30rem] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)]/75 opacity-5 blur-3xl -z-10"></div>

      <h2 className="text-3xl md:text-4xl font-mono font-bold special-text mb-6">
        What I work With
      </h2>
      <p className="text-[var(--foreground)]/80 text-lg mb-6 max-w-2xl mx-auto">
        These are the tools that make my projects tick.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors duration-200 cursor-pointer ${
              activeFilter === filter
                ? "bg-[var(--accent-cyan)] text-[var(--background)]"
                : "bg-[var(--foreground)]/5 text-[var(--foreground)]/80 hover:bg-[var(--accent-cyan)]/20"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Tech blocks */}
      <div className="flex justify-center w-full">
        <div
          className={`inline-grid grid-cols-2 gap-4 ${getGridCols(
            filteredTechs.length
          )}`}
        >
          {filteredTechs.map((tech) => (
            <TechBlock
              key={tech.name}
              tech={tech.name.replace(/\s+/g, "-").replace(/\./g, "")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
