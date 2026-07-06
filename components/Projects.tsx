"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

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

function GitHubIcon() {
  return (
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
  );
}

function StatBadge({ metric }: { metric: { value: string; label: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const isNumeric = !isNaN(Number(metric.value));
  const target = Number(metric.value);

  useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const duration = 1000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, isNumeric, target]);

  return (
    <div ref={ref} className="ml-auto flex shrink-0 items-center gap-2 rounded-lg bg-mint-primary px-3 py-1.5 text-sm font-bold text-white shadow-sm">
      <span className="text-base sm:text-lg leading-none">{isNumeric ? count : metric.value}</span>
      <span className="text-[10px] sm:text-xs font-medium opacity-90 uppercase tracking-wider">{metric.label}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Things I&apos;ve built.
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardsContainer}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.li
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-text-primary sm:text-xl">
                  {project.title}
                </h3>
                {project.metric && <StatBadge metric={project.metric} />}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-medium text-mint-primary">
                  {project.year}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-mint-dark"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.description.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="mt-6 inline-flex w-fit text-text-secondary transition-colors hover:text-mint-primary"
              >
                <GitHubIcon />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeUp}
          className="mt-8 text-sm text-text-secondary"
        >
          More projects added as I build them.
        </motion.p>
      </div>
    </section>
  );
}
