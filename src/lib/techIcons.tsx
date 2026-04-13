import { JSX } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import React from "react";

// Map icon library and icon name to the actual component type
const iconLibraries: Record<string, Record<string, React.ComponentType<{ className?: string }>>> = {
  fa: FaIcons,
  si: SiIcons,
};

export function getTechIcon(icon?: string, colorClass?: string): JSX.Element {
  if (!icon) return <span className="text-gray-400">?</span>;
  const [lib, iconName] = icon.split(":");
  const IconComponent = iconLibraries[lib]?.[iconName];
  if (IconComponent) {
    return React.createElement(IconComponent, { className: colorClass || "text-[var(--foreground)]" });
  }
  return <span className="text-gray-400">?</span>;
}
