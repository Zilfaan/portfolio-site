import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import TechBlock from "@/components/TechBlock";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const images = project.images ?? [];

  // Ensure preview images are 400px tall, with widths changing according to that
  const IMAGE_HEIGHT = 400;

  // Function to help render one or two images
  const renderTwoImages = () => (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-xl"
          style={{ height: IMAGE_HEIGHT }}
        >
          <Image
            src={src}
            alt={`${project.name} screenshot ${index + 1}`}
            width={1200}
            height={800}
            className="h-full w-auto object-contain hover:scale-103 transition-transform duration-500"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );

  // Function to help render several images, in a row based layout
  const renderMultipleImages = () => {
    const rows: string[][] = [];
    rows.push(images.slice(0, 2));
    for (let i = 2; i < images.length; i++) rows.push([images[i]]);

    return (
      <div className="flex flex-col gap-8 items-center justify-center">
        {rows.map((rowImages, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {rowImages.map((src, imageIndex) => {
              const globalIndex = rowIndex === 0 ? imageIndex : imageIndex + 2;
              const isWideImage = rowImages.length === 1;

              return (
                <div
                  key={globalIndex}
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${
                    isWideImage ? "w-full max-w-5xl mx-auto" : "flex-1 max-w-lg"
                  }`}
                  style={{ height: IMAGE_HEIGHT }}
                >
                  <Image
                    src={src}
                    alt={`${project.name} screenshot ${globalIndex + 1}`}
                    width={1200}
                    height={800}
                    className="h-full w-auto object-contain hover:scale-103 transition-transform duration-500"
                    priority={globalIndex === 0}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderImageGallery = () => {
    if (images.length === 0) return null;
    if (images.length <= 2) return renderTwoImages();
    return renderMultipleImages();
  };

  return (
    <div className="min-h-[91vh] flex flex-col justify-center pt-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold special-text mb-6">
            {project.name}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            {project.lengthyDescription}
          </p>
        </header>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 my-8 justify-center">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-[var(--accent-purple)] bg-[var(--accent-purple)]/10 border-2 border-[var(--accent-cyan)] py-3 px-6 rounded-xl hover:bg-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)] transition-all duration-150 hover:scale-103"
              style={{ textDecoration: "none" }}
            >
              <FaExternalLinkAlt className="text-lg" />
              <span className="font-semibold">View Live</span>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-[var(--accent-purple)] bg-[var(--accent-purple)]/10 border-2 border-[var(--accent-cyan)] py-3 px-6 rounded-xl hover:bg-[var(--accent-purple)]/20 hover:border-[var(--accent-purple)] transition-all duration-150 hover:scale-103"
              style={{ textDecoration: "none" }}
            >
              <FaGithub className="text-lg" />
              <span className="font-semibold">Source Code</span>
            </Link>
          )}
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-10">
          <h2 className="font-mono font-bold text-2xl mb-8">Built With</h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {project.techstack.map((tech, index) => (
              <TechBlock key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-3 mb-16">{renderImageGallery()}</div>
      </div>
    </div>
  );
}
