import Project from "@/types/Project";

export const projects: Project[] = [
  {
    slug: "lena",
    name: "Lena",
    description:
      "A simple yet powerful TODO app with scheduling/time management capabilities.",
    image: "/projects/lena/lena.gif",
    link: "",
    techstack: [
      "typescript",
      "tailwindcss",
      "electron",
      "react",
      "vite",
      "firebase",
    ],
  },
  {
    slug: "lights-wager",
    name: "Lights Wager",
    description:
      "A top-down action game for Brackeys Game Jam 2025.2, built around the theme 'Risk it for the biscuit'.",
    image: "/projects/lightswager/lightswager.gif",
    link: "https://spidergeneral.itch.io/lights-wager",
    techstack: ["unreal-engine", "c++"],
  },
  {
    slug: "spider-client",
    name: "Spider Client",
    description:
      "Heavily modified version of Minecraft, adding new features and improving quality of life.",
    image: "/projects/spiderclient/spiderclient.gif",
    link: "",
    techstack: ["java", "opengl", "mcp"],
  },
  {
    slug: "oceon",
    name: "Oceon",
    description:
      "Fully reactive and accessible website focused on SDG Goal 14: Life Below Water.",
    image: "/projects/oceon/oceon.gif",
    link: "",
    techstack: ["html", "css"],
  },
  {
    slug: "spicetify-youtube-importer",
    name: "Spicetify Youtube Importer",
    description:
      "Spicetify extension to directly download audio from youtube and view videos for them on the spotify client",
    image: "/projects/spicetify/spicetify.png",
    link: "https://github.com/Zilfaan/spicetify-youtube-importer",
    techstack: ["typescript", "react"],
  },
];
