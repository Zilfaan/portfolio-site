"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function Navbar() {
  const pageMap: Record<string, string> = {
    "#home": "Home",
    "#education": "Education",
    "#projects": "Projects",
    "#techstack": "Tech",
    "#contact": "Contact",
  };

  const pathname = usePathname();

  // Which section is active
  const [activeSection, setActiveSection] = useState("#home");

  // Get the target page for display
  const targetPage =
    pathname === "/" ? pageMap[activeSection] || activeSection : pathname;

  // Typing effect
  const [displayedPage, setDisplayedPage] = useState(targetPage);
  const [phase, setPhase] = useState<"idle" | "deleting" | "typing">("idle");

  // Hamburger / sidebar
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Only show navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section detection
  useEffect(() => {
    if (pathname != "/") return;
    const sections = Object.keys(pageMap).map((id) =>
      document.querySelector(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = `#${visible[0].target.id}`;
          setActiveSection(id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // User is not on home page, set active section to pathname
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
    }
  }, [pathname]);

  // Trigger typing when section changes
  useEffect(() => {
    if (targetPage !== displayedPage) setPhase("deleting");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetPage]);

  useEffect(() => {
    if (phase === "idle") return;

    const stepDelay = 75;
    let timeout: NodeJS.Timeout;

    if (phase === "deleting") {
      if (displayedPage.length > 0) {
        timeout = setTimeout(
          () => setDisplayedPage(displayedPage.slice(0, -1)),
          stepDelay
        );
      } else {
        setPhase("typing");
      }
    } else if (phase === "typing") {
      if (displayedPage != targetPage) {
        timeout = setTimeout(
          () => setDisplayedPage(targetPage.slice(0, displayedPage.length + 1)),
          stepDelay
        );
      } else {
        setPhase("idle");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedPage, phase, targetPage]);

  // Lock scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarVisible ? "hidden" : "";
  }, [sidebarVisible]);

  // Sidebar functions
  const openSidebar = () => {
    setSidebarVisible(true);
    setTimeout(() => setHamburgerOpen(true), 10);
  };
  const closeSidebar = () => {
    setHamburgerOpen(false);
    setTimeout(() => setSidebarVisible(false), 300);
  };

  // Small helper to fix hrefs based on pathname
  const getHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Navbar */}
      <nav
        className={`absolute top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center py-3 px-4 sm:px-10 text-sm sm:text-base overflow-x-hidden transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[var(--background)]/40"
            : "bg-transparent"
        }`}
      >
        {/* Linux terminal style website name */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="font-mono whitespace-nowrap"
            style={{ color: "var(--accent-cyan)" }}
          >
            <span className="text-[var(--accent-magenta)] text-sm sm:text-base">
              zilfaan@portfolio:~$
            </span>{" "}
            {displayedPage}
            <span className="inline-block w-[1px] h-5 bg-[var(--accent-cyan)] ml-1 animate-blink"></span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex">
          <div className="mr-10 flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5 mt-2 sm:mt-0 w-full sm:w-auto">
            {Object.entries(pageMap).map(([hash, label]) => (
              <Link
                key={hash}
                href={getHref(hash)}
                className={`font-mono transition ${
                  activeSection === hash
                    ? "text-[var(--accent-cyan)]"
                    : "hover:text-[var(--accent-magenta)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            className="cursor-pointer"
            onClick={() => {
              const next = theme === "light" ? "dark" : "light";
              setTheme(next);
            }}
          >
            {theme === "light" ? <BiSun size={20} /> : <BiMoon size={20} />}
          </button>
        </div>

        {/* Hamburger button */}
        <div className="sm:hidden">
          <button onClick={openSidebar} className="text-xl font-bold">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarVisible && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className={`flex-1 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
              hamburgerOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeSidebar}
          />
          {/* Panel */}
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-[var(--background)] p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
              hamburgerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={closeSidebar}
              className="self-end text-[var(--foreground)] text-2xl"
            >
              ✕
            </button>
            {Object.entries(pageMap).map(([hash, label]) => (
              <Link
                key={hash}
                href={getHref(hash)}
                onClick={closeSidebar}
                className={`font-mono text-lg transition ${
                  activeSection === hash
                    ? "text-[var(--accent-cyan)]"
                    : "hover:text-[var(--accent-magenta)]"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex-1 flex items-end">
              <button
                className="cursor-pointer"
                onClick={() => {
                  const next = theme === "light" ? "dark" : "light";
                  setTheme(next);
                }}
              >
                {theme === "light" ? <BiSun size={28} /> : <BiMoon size={28} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
