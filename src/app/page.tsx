import Hero from "@/components/Hero";
import ProjectsPage from "../components/Projects";
import Education from "../components/Education";

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
    </>
  );
}
