"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-10 flex flex-col sm:flex-row items-center justify-between bg-[var(--background)]/50 text-[var(--foreground)]">
      <p className="text-sm font-mono mb-4 sm:mb-0">
        © {new Date().getFullYear()} Zilfaan Zaki Sulfikhan.
      </p>
      <div className="flex gap-6">
        {[
          { href: "https://github.com/zilfaan", label: "GitHub" },
          {
            href: "https://www.linkedin.com/in/zilfaan-sulfikhan-9358b6303/",
            label: "LinkedIn",
          },
          { href: "mailto:zilfaanzaki@gmail.com", label: "Email" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono transition"
            style={{ color: "var(--foreground)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
