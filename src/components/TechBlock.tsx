import { techIcons, techLinks } from "@/lib/tech";

interface TechBlockProps {
  tech: string;
}

const TechBlock = ({ tech }: TechBlockProps) => {
  return (
    <a
      href={techLinks[tech.toLowerCase()]}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-mono 
                 bg-[var(--foreground)]/5 border border-white/10 transition-transform duration-300 
                 hover:scale-110 hover:bg-[var(--accent-cyan)]/10 hover:border-[var(--accent-cyan)] 
                 hover:shadow-[0_0_10px_var(--accent-cyan)] cursor-pointer"
      style={{
        textDecoration: "none",
      }}
    >
      {techIcons[tech.toLowerCase()] ?? (
        <span className="text-gray-400">?</span>
      )}
      <span className="capitalize">{tech}</span>
    </a>
  );
};

export default TechBlock;
