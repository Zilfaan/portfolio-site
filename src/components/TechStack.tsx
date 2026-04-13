"use client";

import { useEffect, useState } from "react";
import TechBlock from "./TechBlock";


type Tech = {
  icon: string | undefined;
  colorClass: string | undefined;
  name: string;
  type: string;
};

export default function TechStackSection() {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [filters, setFilters] = useState<string[]>(["all"]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTechs() {
      try {
        const res = await fetch("/techstack.json");
        const data: Tech[] = await res.json();
        data.sort((a, b) => a.name.localeCompare(b.name));
        setTechs(data);
        setFilters(["all", ...Array.from(new Set(data.map((t) => t.type)))]);
      } catch (e) {
        setTechs([]);
        setFilters(["all"]);
      } finally {
        setLoading(false);
      }
    }
    fetchTechs();
  }, []);

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
    <section className="relative mb-30 flex flex-col items-center text-center">
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
        {loading ? (
          <div className="text-lg font-mono text-[var(--foreground)]/60">Loading...</div>
        ) : (
          <div
            className={`inline-grid grid-cols-2 gap-4 ${getGridCols(
              filteredTechs.length
            )}`}
          >
            {filteredTechs.map((tech) => (
              <TechBlock
                key={tech.name}
                tech={tech.name}
                icon={tech.icon}
                colorClass={tech.colorClass}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
