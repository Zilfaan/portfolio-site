"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const pageMap: Record<string, string> = {
    "/": "Home",
    "/projects": "Projects",
    "/about": "About",
    "/contact": "Contact",
  };
  const targetPage = pageMap[pathname] || "";

  // Typing effect
  const [displayedPage, setDisplayedPage] = useState(targetPage);
  const [phase, setPhase] = useState<"idle" | "deleting" | "typing">("idle");

  // Hamburger / sidebar
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Only show navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect logic
  useEffect(() => {
    if (targetPage !== displayedPage) setPhase("deleting");
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
      if (displayedPage.length < targetPage.length) {
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

  // Lock scroll when sidebar open for mobile view
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

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 flex flex-wrap justify-between items-center py-3 px-6 sm:px-10 text-sm sm:text-base transition-colors duration-300 ${
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
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5 mt-2 sm:mt-0 w-full sm:w-auto">
            {Object.entries(pageMap).map(([path, label]) => (
              <Link
                key={path}
                href={path}
                className={`font-mono transition ${
                  pathname === path
                    ? "text-[var(--accent-cyan)]"
                    : "hover:text-[var(--accent-magenta)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger button for mobile view*/}
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
            {Object.entries(pageMap).map(([path, label]) => (
              <Link
                key={path}
                href={path}
                onClick={closeSidebar}
                className={`font-mono text-lg transition ${
                  pathname === path
                    ? "text-[var(--accent-cyan)]"
                    : "hover:text-[var(--accent-magenta)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
