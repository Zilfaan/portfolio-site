"use client";

import { educationData } from "@/lib/educationData";
import Link from "next/link";

export default function Education() {
  return (
    <div className="px-6 py-0 md:py-12 flex flex-col items-center mb-14">
      <h1 className="text-4xl md:text-5xl font-bold md:mb-16 text-[var(--accent-cyan)]">
        ~/education
      </h1>

      {/* Horizontal Timeline for desktop/tab screens */}
      <div className="hidden md:block w-full max-w-5xl relative">
        {/* Connecting line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-cyan)]/50 z-0" />

        <div className="flex justify-between items-start relative z-10">
          {educationData.map((edu, idx) => (
            <Link
              key={idx}
              href={`/education/${edu.slug}`}
              className="flex flex-col items-center relative group"
              style={{
                textDecoration: "none",
              }}
            >
              {/* Dot */}
              <div className="w-8 h-8 rounded-full bg-[var(--accent-cyan)] border-4 border-[var(--background)] z-10 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-xs font-mono font-bold text-black">
                  {idx + 1}
                </span>
              </div>

              {/* Card */}
              <div className="w-64 p-5 rounded-xl border border-[var(--accent-cyan)]/30 bg-[var(--background)] text-center hover:border-[var(--accent-cyan)] hover:shadow-lg hover:shadow-[var(--accent-cyan)]/20 transition-all duration-300 group-hover:scale-105">
                <h3 className="font-mono font-bold text-lg text-[var(--accent-cyan)] mb-2 leading-tight mt-2">
                  {edu.place}
                </h3>
                <p className="opacity-80 text-sm font-medium text-[var(--foreground)]">
                  {edu.period}
                </p>
                <p className="mt-1 font-medium text-[var(--foreground)]">
                  {edu.qualification}
                </p>
                <p className="mt-1 font-semibold text-[var(--accent-magenta)]">
                  {edu.result}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile vertical stacked timeline */}
      <div className="md:hidden w-full max-w-md mt-8 space-y-6">
        {educationData.map((edu, idx) => (
          <Link
            key={idx}
            href={`/education/${edu.slug}`}
            className="flex flex-col items-center relative"
            style={{
              textDecoration: "none",
            }}
          >
            {/* Dot + connecting line */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan)] border-2 border-[var(--background)] mb-2" />
              {idx < educationData.length - 1 && (
                <div className="w-px h-8 bg-[var(--accent-cyan)] animate-pulse" />
              )}
            </div>

            {/* Card */}
            <div className="w-full p-5 rounded-xl border border-[var(--accent-cyan)]/30 bg-[var(--background)] text-center">
              <h3 className="font-mono font-bold text-base text-[var(--accent-cyan)] mb-2">
                {edu.place}
              </h3>
              <p className="opacity-80 font-medium text-[var(--foreground)]">
                {edu.period}
              </p>
              <p className="font-medium text-[var(--foreground)]">
                {edu.qualification}
              </p>
              <p className="font-semibold text-[var(--accent-magenta)]">
                {edu.result}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
