"use client";

import Link from "next/link";
import { Section } from "./Section";
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-card relative">
      <button
        onClick={scrollToTop}
        style={{ fontSize: "24px", cursor: "pointer" }}
        className="absolute right-0 m-4 z-50"
        aria-label="Revenir en haut de page"
        title="Revenir en haut"
      >
        <FaArrowUp />
      </button>

      <Section className="flex flex-col items-center justify-center py-8 gap-2">
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/faq"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            FAQ
          </Link>

          <a
            href="mailto:olivier.riviere.dev@gmail.com?subject=Question%20-%20Site%20vitrine"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          © 2025 Olivier Riviere. Construit avec Next.js et Tailwind CSS.
        </p>
      </Section>
    </footer>
  );
};
