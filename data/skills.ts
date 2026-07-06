export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages & Databases",
    skills: ["Python", "SQL", "Java", "Kotlin"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL Pipelines", "Data Warehousing", "OLAP", "EDA", "Stream Processing"],
  },
  {
    title: "ML & NLP",
    skills: ["LightGBM", "LambdaRank", "BM25", "TF-IDF", "Information Retrieval", "Distributed Computing"],
  },
  {
    title: "App Development",
    skills: ["Android TV (Leanback)", "REST API Integration", "Agile Workflows"],
  },
  {
    title: "Business & BI",
    skills: ["Business Intelligence", "ERP Systems", "Business Process Analysis", "Product Development"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Claude"],
  },
];
