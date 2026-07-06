"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

// Flatten all skills into a single array
const allSkills = skillsData.flatMap((category) => category.skills);

// Duplicate the array so we can scroll continuously without empty spaces
const duplicatedSkills = [...allSkills, ...allSkills];

export default function TechMarquee() {
  return (
    <div className="relative flex w-full overflow-hidden py-4 group">
      {/* Fade masks for left and right edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

      {/* Marquee Container */}
      <div className="flex w-max shrink-0 items-center gap-3 animate-marquee group-hover:[animation-play-state:paused]">
        {duplicatedSkills.map((skill, idx) => (
          <span
            key={`${skill}-${idx}`}
            className="flex-shrink-0 rounded-full border border-mint-primary px-3 py-1 text-xs font-medium text-text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
