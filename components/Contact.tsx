"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const linksContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const contactLinks = [
  {
    label: "Email",
    value: "abdullahstan981@gmail.com",
    href: "mailto:abdullahstan981@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92 320 5497468",
    href: "tel:+923205497468",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/abdullahnadeem10-fast",
    href: "https://github.com/abdullahnadeem10-fast",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.08.28-2.2 0-3.28a5 5 0 0 0-5.5-2.7c-1.76 0-3.5.6-4.8 1.8-1.3-1.2-3.04-1.8-4.8-1.8a5 5 0 0 0-5.5 2.7c-.28 1.08-.28 2.2 0 3.28a5.5 5.5 0 0 0-1 3.5C6 16 9 18 12 18a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-abdullah-nadeem",
    href: "https://www.linkedin.com/in/muhammad-abdullah-nadeem/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-text-secondary sm:text-lg">
            Open to freelance work, collaborations, and interesting data/AI
            problems.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={linksContainer}
          className="mt-10 space-y-4 sm:mt-12"
        >
          {contactLinks.map((link) => (
            <motion.li key={link.label} variants={fadeUp}>
              <a
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-mint-primary"
                {...(link.label === "GitHub"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="text-text-secondary transition-colors group-hover:text-mint-primary">
                  {link.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-text-secondary">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-text-primary transition-colors group-hover:text-mint-primary sm:text-base">
                    {link.value}
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
