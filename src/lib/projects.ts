import Project from "@/types/Project";

export const projects: Project[] = [
  {
    slug: "lena",
    name: "Lena",
    description:
      "A simple yet powerful TODO app with scheduling/time management capabilities.",
    lengthyDescription:
      "Lena helps you manage your daily tasks efficiently with managing your tasks and routines efficiently. Built to be lightweight yet heavily customizable, it integrates seamlessly with your workflow, allowing you to track tasks without distractions whilst looking and feeling the way that you want it to.",
    images: [
      "/projects/lena/lena.gif",
      "/projects/lena/lena2.png",
      "/projects/lena/lena3.png",
    ],
    link: "",
    github: "https://github.com/Zilfaan/Lena",
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
    lengthyDescription:
      "A top-down action game for Brackeys Game Jam 2025.2, built around the theme 'Risk it for the biscuit' where you are bound to the core of your Safe Zone. Step outside, and the barrier begins to wither. The longer you wander, the faster safety drains. Dodge, and strike through swarms of enemies, upgrade your Safe Zone with powerful cores all with the goal of eventually Ascending after obtaining 2 light fragments.",
    images: [
      "/projects/lightswager/lightswager.gif",
      "/projects/lightswager/lightswager2.png",
      "/projects/lightswager/lightswager3.png",
    ],
    link: "https://spidergeneral.itch.io/lights-wager",
    github: "https://github.com/Zilfaan/TopDownZoneGame",
    techstack: ["unreal-engine", "c++"],
  },
  {
    slug: "spider-client",
    name: "Spider Client",
    description:
      "Heavily modified version of Minecraft, adding new features and improving quality of life.",
    lengthyDescription:
      "Spider Client is a custom minecraft client that adds performance improvements, quality of life, and additional features. This custom client aimed to enhance gameplay experience while maintaining performance and the minecraft feel. No longer available for public download.",
    images: [
      "/projects/spiderclient/spiderclient.gif",
      "/projects/spiderclient/spiderclient.png",
      "/projects/spiderclient/spiderclient2.png",
    ],
    link: "",
    techstack: ["java", "opengl", "mcp"],
  },
  {
    slug: "oceon",
    name: "Oceon",
    description:
      "Fully reactive and accessible website focused on SDG Goal 14: Life Below Water.",
    lengthyDescription:
      "Oceon is a simple webbsite that educates users about ocean conservation and sustainable practices focused on SDG Goal 14: Life below water, developed for a coursework. Built with accessibility and responsiveness in mind, it provides interactive educational resources, and informs people on the threats faced by marine life. Built for a coursework.",
    images: [
      "/projects/oceon/oceon.gif",
      "/projects/oceon/oceon3.png",
      "/projects/oceon/oceon2.png",
    ],
    link: "",
    techstack: ["html", "css", "javascript"],
  },
  {
    slug: "spicetify-youtube-importer",
    name: "Spicetify Youtube Importer",
    description:
      "Spicetify extension to directly download audio from YouTube and view videos for them on the Spotify client.",
    lengthyDescription:
      "This extension allows Spotify users to import tracks from YouTube directly into their playlists, bridging the gap between platforms. Features include batch importing, metadata extraction, and the ability to synchronize the video for the downloaded song, all on the Spotify desktop client.",
    images: [
      "/projects/spicetify/spicetify.png",
      "/projects/spicetify/spicetify2.png",
    ],
    link: "",
    github: "https://github.com/Zilfaan/spicetify-youtube-importer",
    techstack: ["typescript", "react", "nodejs", "express"],
  },
];
