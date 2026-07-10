"use client";

import { motion } from "framer-motion";
import TerminalVisual from "@/components/TerminalVisual";

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
                className="rounded-lg border-2 border-mint-primary bg-transparent px-6 py-3 text-sm font-bold text-mint-primary transition-colors hover:bg-mint-primary hover:text-white"
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
            <TerminalVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
