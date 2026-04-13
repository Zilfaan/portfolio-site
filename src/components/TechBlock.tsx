
import { techLinks } from "@/lib/tech";
import { getTechIcon } from "@/lib/techIcons";

interface TechBlockProps {
  tech: string;
  icon?: string;
  colorClass?: string;
}

const TechBlock = ({ tech, icon, colorClass }: TechBlockProps) => {
  // Try to get a docs link for the tech, fallback to undefined
  const link = techLinks?.[tech.toLowerCase().replace(/\s+|\./g, "").replace(/\(.*\)/, "")] ?? undefined;
  return (
    <a
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center justify-center gap-[6px] md:gap-[10px] px-2 py-1.5 md:px-2.5 md:py-2 rounded-md border border-white/10 bg-[var(--foreground)]/5 transition-all duration-200 shadow-sm hover:shadow-md hover:bg-[var(--accent-cyan)]/10 hover:border-[var(--accent-cyan)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)]/40 min-w-0"
      style={{ textDecoration: "none" }}
    >
      <span className={colorClass ? `${colorClass} text-lg md:text-xl` : "text-[var(--foreground)] text-lg md:text-xl"}>
        {getTechIcon(icon, colorClass ? `${colorClass} text-lg md:text-xl` : "text-[var(--foreground)] text-lg md:text-xl")}
      </span>
      <span className="capitalize text-[11px] md:text-xs font-mono tracking-tight whitespace-nowrap text-center leading-tight">
        {tech}
      </span>
    </a>
  );
};

export default TechBlock;
