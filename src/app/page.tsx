import Hero from "@/components/Hero";
import ProjectsPage from "../components/Projects";
import Education from "../components/Education";
import Contact from "@/components/Contact";
import TechStackSection from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="techstack">
        <TechStackSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
