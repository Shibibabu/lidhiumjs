"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Logo from "./Logo";

interface NavbarProps {
  onDrawerToggle?: () => void;
  isDrawerOpen?: boolean;
}

export default function Navbar({ onDrawerToggle, isDrawerOpen }: NavbarProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/lidhishc/lidhiumjs")
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, []);

  const GitHubButton = () => (
    <Link
      href="https://github.com/lidhishc/lidhiumjs"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors border bg-white hover:bg-gray-50 border-gray-200 shadow-sm text-gray-900"
    >
      <svg
        className="w-5 h-5 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
      {stars !== null && <span className="text-sm font-medium">{stars}</span>}
    </Link>
  );

  return (
    <nav className="w-full bg-white fixed top-0 z-50 border-b border-gray-200">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            {onDrawerToggle && (
              <button
                onClick={onDrawerToggle}
                className="md:hidden -ml-2 p-1.5 rounded-lg hover:bg-gray-100 text-gray-700"
                aria-label="Toggle menu"
              >
                {isDrawerOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            )}
            <Link href="/" className="flex items-center gap-1.5">
              <Logo width={30} height={30} />
              <span className="text-lg font-bold text-gray-800">
                Lidhium JS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-6">
            <Link
              href="/docs/getting-started"
              className="hidden md:block text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/examples"
              className="hidden md:block text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Examples
            </Link>
            <Link
              href="/docs/about"
              className="hidden md:block text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <GitHubButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
