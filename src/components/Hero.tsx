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
          src=""
          alt="Zilfaan"
          width={200}
          height={200}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Name */}
      <h1
        className="relative z-10 text-5xl sm:text-6xl font-extrabold mt-6 mb-4 drop-shadow-lg"
        style={{ color: "var(--accent-cyan)" }}
      >
        Zilfaan Zaki Sulfikhan
      </h1>
      {/* Tagline */}
      <p
        className="relative z-10 max-w-xl text-lg sm:text-xl mb-8 drop-shadow-md"
        style={{ color: "var(--foreground)" }}
      >
        Full-stack developer crafting web, mobile apps with an interest towards
        Game Development.
      </p>

      {/* Move to projects Button TODO: */}
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
    </section>
  );
}
