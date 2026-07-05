export type Project = {
  title: string;
  tags: string[];
  year: string;
  description: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Walmart Data Warehouse",
    tags: ["Python", "SQL", "ETL", "OLAP"],
    year: "2025",
    description: [
      "Built a complete data warehouse covering the full data lifecycle — EDA, multi-stage ETL pipeline, and star-schema fact/dimension design.",
      "Engineered a custom HYBRIDJOIN algorithm enabling near-real-time stream-joining to continuously populate the fact table as new transactions arrive.",
      "Authored 20 OLAP queries to extract actionable business intelligence insights from large-scale transactional data.",
    ],
    link: "https://github.com/abdullahnadeem10-fast",
  },
  {
    title: "NLP/PDC — Retail Product Entity Linking",
    tags: [
      "Python",
      "LightGBM",
      "BM25",
      "TF-IDF",
      "Distributed Computing",
    ],
    year: "2026",
    description: [
      "Built a parallel & distributed computing framework for real-time retail product entity linking, mapping noisy POS descriptions to canonical SKUs.",
      "Implemented a 5-stage pipeline combining text normalization, hybrid retrieval (BM25 + TF-IDF), and a LightGBM LambdaRank reranker for high-precision ranking.",
      "Designed for high-throughput POS transaction stream processing with low latency across distributed compute nodes.",
    ],
    link: "https://github.com/abdullahnadeem10-fast",
  },
];
