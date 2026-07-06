"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/timeline";
import { achievements } from "@/data/achievements";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type UnifiedEntry = {
  id: string;
  type: "experience" | "education" | "achievement";
  categoryLabel: string;
  period?: string;
  title: string;
  org: string;
  bullets: string[];
  tags: string[];
  details?: string[];
};

const allEntries: UnifiedEntry[] = [
  ...timelineData.map((item) => ({
    id: `timeline-${item.title}`,
    type: item.type,
    categoryLabel: item.type === "experience" ? "Experience" : "Education",
    period: item.period,
    title: item.title,
    org: item.org,
    bullets: item.description,
    tags: item.tags,
  })),
  ...achievements.map((item) => ({
    id: `achievement-${item.title}`,
    type: "achievement" as const,
    categoryLabel: "Achievement",
    title: item.title,
    org: item.org,
    bullets: [item.description],
    tags: item.tags,
    details: item.details,
  })),
];

const tabs = ["All", "Experience", "Education", "Achievement"];

export default function Timeline() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filteredEntries = allEntries.filter((entry) => {
    if (filter === "All") return true;
    return entry.categoryLabel === filter;
  });

  const toggleDetails = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            My journey.
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          {tabs.map((tab) => {
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-mint-primary text-white"
                    : "border border-border text-text-secondary hover:border-mint-primary hover:text-mint-primary"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </motion.div>

        <div className="relative mt-12 md:mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-mint-primary md:left-1/2 md:-translate-x-px"
          />

          <ul className="relative space-y-12 md:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredEntries.map((entry) => (
                <motion.li
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative pl-8 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-background bg-mint-primary md:left-1/2 md:-translate-x-1/2"
                  />

                  <div className="md:col-start-1 md:pr-8 md:text-right">
                    <p className="text-sm font-medium tracking-wide text-mint-primary">
                      {entry.categoryLabel} {entry.period && `— ${entry.period}`}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-text-primary sm:text-2xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">{entry.org}</p>
                  </div>

                  <div className="mt-4 md:col-start-2 md:mt-0 md:pl-8">
                    <ul className="space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-primary"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.type === "achievement" && entry.details && entry.details.length > 0 && (
                      <div className="mt-4">
                        <button
                          onClick={() => toggleDetails(entry.id)}
                          className="text-sm font-medium text-mint-primary transition-colors hover:text-mint-dark"
                        >
                          {expanded[entry.id] ? "− Details" : "+ Details"}
                        </button>
                        <AnimatePresence>
                          {expanded[entry.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                                {entry.details.map((detail, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span
                                      aria-hidden="true"
                                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-mint-primary bg-transparent"
                                    />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-2">
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
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
