"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Reading", href: "/reading" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="flex h-10 w-auto px-3 items-center justify-center rounded-lg bg-mint-primary text-sm font-bold text-white transition-colors hover:bg-mint-dark"
            aria-label="Home"
            onClick={() => setIsMenuOpen(false)}
          >
            MAN
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex items-center justify-center p-2 text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              !link.href.startsWith("#") && pathname === link.href;
            const linkClassName = `text-sm font-medium transition-colors ${
              isActive
                ? "text-mint-primary"
                : "text-text-secondary hover:text-mint-primary"
            }`;

            return (
              <li key={link.label}>
                {link.href.startsWith("#") ? (
                  <a href={link.href} className={linkClassName}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="/Abdullah_CV.pdf"
            download
            className="rounded-lg border-2 border-mint-primary bg-transparent px-4 py-2 text-sm font-bold text-mint-primary transition-colors hover:bg-mint-primary hover:text-white"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  !link.href.startsWith("#") && pathname === link.href;
                return (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-base font-medium transition-colors ${
                          isActive ? "text-mint-primary" : "text-text-secondary hover:text-mint-primary"
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-base font-medium transition-colors ${
                          isActive ? "text-mint-primary" : "text-text-secondary hover:text-mint-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="/Abdullah_CV.pdf"
                  download
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block rounded-lg border-2 border-mint-primary bg-transparent px-4 py-2 text-sm font-bold text-mint-primary transition-colors hover:bg-mint-primary hover:text-white"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
