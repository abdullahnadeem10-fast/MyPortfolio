export type TimelineEntry = {
  type: 'experience' | 'education';
  title: string;
  org: string;
  period: string;
  description: string[];
  tags: string[];
};

export const timelineData: TimelineEntry[] = [
  {
    type: "experience",
    title: "Android TV App Developer",
    org: "PixelDale, Islamabad, Pakistan",
    period: "March 2026 – Present",
    description: [
      "Develop and ship Android TV applications, managing the full product lifecycle from architecture design to production deployment.",
      "Build performant, lean UIs optimized for 10-foot display environments using Android TV Leanback libraries.",
      "Integrate REST APIs and media streaming pipelines into live TV applications used by end consumers.",
      "Operate within agile sprint workflows with version control, peer code reviews, and cross-functional team collaboration.",
    ],
    tags: ["Kotlin", "Android TV", "Leanback", "REST APIs", "Agile"],
  },
  {
    type: "education",
    title: "BS Data Science",
    org: "FAST-NUCES Islamabad",
    period: "2023 – 2027",
    description: [
      "6 semesters completed; specializing in Machine Learning, Data Warehousing, Parallel & Distributed Computing, NLP, and Gen-AI.",
      "Actively building production-level projects in AI, automation, and full-stack development alongside coursework.",
    ],
    tags: ["Machine Learning", "Data Warehousing", "NLP", "Distributed Computing"],
  },
];
