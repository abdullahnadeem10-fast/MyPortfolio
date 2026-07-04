"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Milestones along the way.
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardsContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement) => (
            <motion.li
              key={achievement.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-surface p-6 sm:col-span-2 lg:col-span-1"
            >
              <p className="text-sm font-medium text-mint-primary">
                {achievement.org}
              </p>
              <h3 className="mt-2 text-lg font-bold text-text-primary">
                {achievement.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {achievement.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {achievement.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-mint-dark"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
