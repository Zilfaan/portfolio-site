import { JSX } from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiElectron,
  SiVite,
  SiFirebase,
  SiUnrealengine,
  SiOpengl,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

// Mapping tech to icons
export const techIcons: Record<string, JSX.Element> = {
  typescript: <SiTypescript className="text-sky-500" />,
  tailwindcss: <SiTailwindcss className="text-cyan-400" />,
  electron: <SiElectron className="text-blue-400" />,
  react: <FaReact className="text-blue-500" />,
  vite: <SiVite className="text-purple-500" />,
  firebase: <SiFirebase className="text-yellow-500" />,
  "unreal-engine": <SiUnrealengine className="text-gray-200" />,
  "c++": <span className="text-blue-400 font-bold">C++</span>,
  java: <FaJava className="text-red-500" />,
  opengl: <SiOpengl className="text-green-400" />,
  mcp: <span className="text-pink-400 font-bold">MCP</span>,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-400" />,
  nodejs: <SiNodedotjs className="text-green-600" />,
  express: <SiExpress className="text-gray-300 dark:text-white" />,
};

// Mapping tech to docs link
export const techLinks: Record<string, string> = {
  typescript: "https://www.typescriptlang.org/docs/",
  tailwindcss: "https://tailwindcss.com/docs",
  electron: "https://www.electronjs.org/docs",
  react: "https://react.dev/",
  vite: "https://vitejs.dev/guide/",
  firebase: "https://firebase.google.com/docs",
  "unreal-engine": "https://docs.unrealengine.com/",
  "c++": "https://cplusplus.com/doc/tutorial/",
  java: "https://docs.oracle.com/javase/tutorial/",
  opengl: "https://www.khronos.org/opengl/wiki",
  mcp: "https://minecraft.fandom.com/wiki/Tutorials/Programs_and_editors/Mod_Coder_Pack",
  html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  nodejs: "https://nodejs.org/docs",
  express: "https://expressjs.com/en/starter/installing.html",
};
