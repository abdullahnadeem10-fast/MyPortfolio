"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const entriesContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

type TimelineEntry = {
  category: string;
  period: string;
  title: string;
  org: string;
  bullets: string[];
  tags: string[];
};

const timelineEntries: TimelineEntry[] = [
  {
    category: "Experience",
    period: "March 2026 – Present",
    title: "Android TV App Developer",
    org: "PixelDale, Islamabad, Pakistan",
    bullets: [
      "Develop and ship Android TV applications, managing the full product lifecycle from architecture design to production deployment.",
      "Build performant, lean UIs optimized for 10-foot display environments using Android TV Leanback libraries.",
      "Integrate REST APIs and media streaming pipelines into live TV applications used by end consumers.",
      "Operate within agile sprint workflows with version control, peer code reviews, and cross-functional team collaboration.",
    ],
    tags: ["Kotlin", "Android TV", "Leanback", "REST APIs", "Agile"],
  },
  {
    category: "Education",
    period: "2023 – 2027",
    title: "BS Data Science",
    org: "FAST-NUCES Islamabad",
    bullets: [
      "6 semesters completed; specializing in Machine Learning, Data Warehousing, Parallel & Distributed Computing, NLP, and Gen-AI.",
      "Actively building production-level projects in AI, automation, and full-stack development alongside coursework.",
    ],
    tags: [
      "Machine Learning",
      "Data Warehousing",
      "NLP",
      "Distributed Computing",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Experience &amp; education.
          </h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={entriesContainer}
          className="relative mt-12 space-y-12 md:space-y-16"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-mint-primary md:left-1/2 md:-translate-x-px"
          />

          {timelineEntries.map((entry) => (
            <motion.li
              key={`${entry.category}-${entry.title}`}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative pl-8 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-background bg-mint-primary md:left-1/2 md:-translate-x-1/2"
              />

              <div className="md:col-start-1 md:pr-8 md:text-right">
                <p className="text-sm font-medium tracking-wide text-mint-primary">
                  {entry.category} — {entry.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-text-primary sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{entry.org}</p>
              </div>

              <div className="mt-4 md:col-start-2 md:mt-0 md:pl-8">
                <ul className="space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-primary"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-mint-dark"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
