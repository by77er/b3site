import { Outlet, NavLink } from "react-router";
import type { Route } from "./+types";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bay Bark Bash" },
    { name: "description", content: "Come party with us at Bay Bark Bash!" },
    { property: "og:title", content: "Bay Bark Bash" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://baybarkbash.tampafurry.club" },
    { property: "og:image", content: "https://baybarkbash.tampafurry.club/img/BAY_BARK_BASH.png" },
    { property: "og:description", content: "Come party with furries in St. Petersburg FL!" },
    { name: "keywords", content: "furry, event, party, Tampa, St. Petersburg" },
  ];
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/directions", label: "Directions" },
  { to: "/schedule", label: "Schedule" },
  { to: "/tos-privacy", label: "TOS & Privacy" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 flex flex-col md:flex-row items-center justify-between p-2 md:h-16">
        <div className="flex w-full items-center justify-between md:w-auto">
          <img
            src="/img/BAY_BARK_BASH.png"
            alt="Mascot"
            className="w-auto h-auto max-w-12 max-h-full"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-gray-900 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`
            w-full md:w-auto overflow-hidden 
            ${menuOpen ? "max-h-screen" : "max-h-0"}
            md:max-h-full
          `}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
          `block pt-4 pb-2 md:inline md:ml-4 md:bg-transparent ${
            isActive
              ? "text-blue-500 hover:underline"
              : "text-gray-800 dark:text-gray-200 hover:underline"
          }`
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="max-w-6xl mx-auto p-4 pt-20">
        <Outlet />
      </div>
    </main>
  );
}