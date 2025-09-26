"use client";

import { educationData } from "@/lib/educationData";

// Get education details
interface Props {
  params: { slug: string };
}

// Decide grade color
const getGradeColor = (grade: string) => {
  const num = parseFloat(grade);

  if (!isNaN(num) && num >= 1 && num <= 9) {
    switch (grade) {
      case "9":
        return "text-[var(--high-grade)]";
      case "8":
        return "text-[var(--moderately-high-grade)]";
      case "7":
        return "text-[var(--moderate-grade)]";
      case "6":
        return "text-[var(--average-grade)]";
      default:
        return "text-red-500";
    }
  }

  if (!isNaN(num)) {
    if (num >= 90) return "text-[var(--high-grade)]";
    if (num >= 80) return "text-[var(--moderately-high-grade)]";
    if (num >= 70) return "text-[var(--moderate-grade)]";
    if (num >= 60) return "text-[var(--average-grade)]";
    return "text-red-500";
  }

  return "text-red-500";
};

export default function EducationDetail({ params }: Props) {
  const education = educationData.find((e) => e.slug === params.slug);

  if (!education) {
    return (
      <div className="px-6 py-20 max-w-3xl mx-auto text-center">
        <p className="text-lg opacity-80">Education record not found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 min-h-[90vh] py-20 flex flex-col justify-center max-w-4xl mx-auto space-y-8 ">
      <h1 className="text-3xl md:text-4xl font-mono font-bold mb-8 special-text">
        ~/education/{education.slug}
      </h1>

      {/* Education Info Card */}
      <div className="border border-[var(--accent-cyan)]/30 rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-[var(--accent-cyan)]">
          {education.place}
        </h2>

        {/* Stacked view for mobile and a normal grid view for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col md:block">
            <span className="opacity-70 mb-1 md:mb-0">Period:</span>
            <p className="font-medium text-[var(--foreground)]">
              {education.period}
            </p>
          </div>
          <div className="flex flex-col md:block">
            <span className="opacity-70 mb-1 md:mb-0">Qualification:</span>
            <p className="font-medium text-[var(--foreground)]">
              {education.qualification}
            </p>
          </div>
          <div className="flex flex-col md:block">
            <span className="opacity-70 mb-1 md:mb-0">Result:</span>
            <p className="font-semibold text-[var(--accent-magenta)]">
              {education.result}
            </p>
          </div>
        </div>
      </div>
      {/* Subjects */}
      {education.subjects.length > 0 && (
        <div>
          <h3 className="text-lg font-mono font-bold text-[var(--accent-cyan)] mb-4">
            Key Subjects
          </h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            {education.subjects.map((subject, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm rounded-full border border-[var(--accent-cyan)]/30 opacity-90 flex justify-between sm:justify-start gap-2"
              >
                <span>{subject.name}</span> -
                <span
                  className={`${getGradeColor(subject.grade)} font-semibold`}
                >
                  {subject.grade}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
