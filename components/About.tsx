"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const stats = [
  { value: "6", label: "Semesters completed" },
  { value: "2+", label: "Projects shipped" },
  { value: "1", label: "Runner-up finish (Escape404, NASCON)" },
];

export default function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Who I am.
          </h2>

          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-text-secondary sm:text-lg">
            I&apos;m a Data Science student at FAST-NUCES Islamabad (Class of
            2027), currently 6 semesters in. I specialize in data engineering,
            AI automation, and full-stack development. Right now I&apos;m focused
            on exploring new technologies and figuring out how to integrate them
            into real products. Longer-term, I want to build scalable ERP systems
            and data-driven frameworks that help businesses make smarter, more
            profitable decisions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={statsContainer}
          className="mt-12 grid gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center sm:text-left"
            >
              <p className="text-4xl font-bold text-mint-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
