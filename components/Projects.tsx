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
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
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
