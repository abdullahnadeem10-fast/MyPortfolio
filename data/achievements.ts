export type Achievement = {
  title: string;
  org: string;
  description: string;
  tags: string[];
  details: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Runner-up — Escape404, NASCON",
    org: "FAST-NUCES",
    description:
      "Competed in Escape404, a data-focused escape room competition at NASCON, solving a series of data puzzles under time pressure to progress through the room. Finished as runner-up.",
    tags: ["Competition", "Data Puzzles", "Problem Solving"],
    details: [
      "Add more specifics here about the puzzles you solved, how your team approached them, or what made the round challenging.",
    ],
  },
];
