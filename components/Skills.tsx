"use client";

import { motion } from "framer-motion";
import TechMarquee from "./TechMarquee";
import { skillsData } from "@/data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-background py-20 md:py-28">
      <TechMarquee />

      <div className="mx-auto mt-16 max-w-6xl px-6 md:mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="flex flex-col gap-10"
        >
          {skillsData.map((category) => (
            <motion.div key={category.title} variants={fadeUp}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-mint-primary px-4 py-1.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
