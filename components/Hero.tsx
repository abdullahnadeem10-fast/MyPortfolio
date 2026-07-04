"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-mint-primary">
              — Data Science &amp; AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Muhammad Abdullah Nadeem
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Data Science student building AI automation, data pipelines, and
              full-stack products. Currently exploring how new technologies can
              solve real, everyday business problems.
            </p>

            <p className="mt-4 text-sm text-text-secondary">
              📍 Islamabad, Pakistan
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-mint-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mint-dark"
              >
                View Projects
              </a>
              <a
                href="/Abdullah_CV.pdf"
                download
                className="rounded-lg border border-mint-primary bg-background px-6 py-3 text-sm font-medium text-mint-dark transition-colors hover:bg-surface"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <div
              className="flex h-64 w-64 shrink-0 items-center justify-center rounded-2xl border-2 border-mint-primary bg-surface sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              aria-label="Profile photo placeholder"
            >
              <span className="text-sm font-medium text-text-secondary">
                Photo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
