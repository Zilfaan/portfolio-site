import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Neon floating circles in background*/}
      <span
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse top-10 left-10"
        style={{ backgroundColor: "var(--accent-cyan)" }}
      ></span>
      <span
        className="absolute w-56 h-56 rounded-full opacity-15 blur-3xl animate-pulse top-1/2 left-3/4"
        style={{ backgroundColor: "var(--accent-magenta)" }}
      ></span>

      {/* Avatar */}
      <div className="relative z-10 opacity-80">
        <Image
          src="/avatar.png"
          alt="Zilfaan"
          width={200}
          height={200}
          className="object-cover w-full h-full rounded-full border"
          priority
        />
      </div>

      {/* Name */}
      <h1 className="relative z-10 text-5xl sm:text-6xl font-extrabold mt-6 mb-4 drop-shadow-lg special-text">
        Zilfaan Zaki Sulfikhan
      </h1>
      {/* Tagline */}
      <p
        className="relative z-10 max-w-xl text-lg sm:text-xl mb-8 drop-shadow-md"
        style={{ color: "var(--foreground)" }}
      >
        Sri Lankan CS undergrad (Year 2) building games, web and mobile
        applications.
      </p>

      <div className="flex gap-5">
        {/* Move to projects Button */}
        <a
          href="#projects"
          className="relative z-10 inline-block px-8 py-3 font-mono rounded-lg shadow-lg 
             bg-[var(--accent-cyan)]
             transition-all duration-300 ease-out
             hover:bg-[var(--accent-magenta)] hover:scale-105
             active:scale-95"
          style={{
            color: "var(--background)",
            textDecoration: "none",
          }}
        >
          Explore Projects
        </a>
        {/* Download CV Button */}
        <a
          href="/Zilfaan-Sulfikhan.pdf"
          download
          className="relative z-10 inline-flex items-center gap-2 px-7 py-3 font-mono rounded-lg border shadow-lg
             border-[color:var(--accent-cyan)]
             text-[color:var(--accent-cyan)]
             bg-[color:color-mix(in srgb, var(--accent-cyan) 10%, transparent)]
             transition-all duration-300 ease-out
             hover:border-[color:var(--accent-magenta)] hover:text-[color:var(--accent-magenta)] hover:translate-y-[-1px]
             active:translate-y-0"
          style={{
            textDecoration: "none",
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M7 10l5 5 5-5" />
            <path d="M12 15V3" />
          </svg>
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
}
