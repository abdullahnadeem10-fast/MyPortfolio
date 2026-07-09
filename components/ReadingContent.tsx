"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { books } from "@/data/books";

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

const introParagraphs = [
  "Books are something I'm passionate about in my free time. They drive me towards better decision-making in my daily life. History is something we should all learn from, especially when we, as individuals, are trying to revive our society. Below are some of the books I've recently read.",
  "Books, movies, and articles are all means we humans use to articulate our thoughts. Funnily enough though, Jon Elia, someone who spent his whole life writing poetry, says that words can never fulfill the right of one's imagination. He believed huge thoughts feel suffocated in the form of words. Allama Ahmed Javed refutes this, saying that even words are like a utensil: no matter how much water you pour into it, there's still room left. It's our job now to use the words that fulfill the right of what we've imagined.",
  "Let's keep reading, and keep increasing the depth of our imagination.",
];

function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-mint-primary"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function BookCover({ coverUrl, title }: { coverUrl: string; title: string }) {
  const [error, setError] = useState(false);
  const coverClasses =
    "h-56 w-40 shrink-0 overflow-hidden rounded-xl border-2 border-mint-primary sm:h-64 sm:w-44";

  if (!coverUrl || error) {
    return (
      <div
        className={`${coverClasses} flex items-center justify-center bg-surface`}
        aria-label={`${title} cover placeholder`}
      >
        <BookIcon />
      </div>
    );
  }

  return (
    <div className={`relative ${coverClasses}`}>
      <Image
        src={coverUrl}
        alt={`Cover of ${title}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 176px, 160px"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function ReadingContent() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 pb-28 pt-12 md:pb-36 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-text-secondary transition-colors hover:text-mint-primary"
        >
          ← Back to home
        </Link>

        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
          className="mt-10 md:mt-14"
        >
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            On Reading.
          </h1>

          <div className="mt-10 space-y-8 font-serif text-base leading-relaxed text-text-primary sm:text-lg sm:leading-relaxed md:mt-14 md:space-y-10">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="max-w-[65ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        <section className="mt-24 md:mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeUp}
            className="font-serif text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
          >
            Books I&apos;ve read.
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardsContainer}
            className="mt-14 space-y-16 md:mt-20 md:space-y-24"
          >
            {books.map((book) => (
              <motion.li
                key={book.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-8 sm:flex-row sm:gap-10 md:gap-12"
              >
                <div className="flex justify-center sm:justify-start">
                  <BookCover coverUrl={book.coverUrl} title={book.title} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-mint-primary sm:text-base">
                    {book.author}
                  </p>
                  <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                    {book.summary}
                  </p>
                  <p className="mt-5 border-l-2 border-mint-primary pl-4 text-sm italic leading-relaxed text-text-secondary sm:text-base">
                    {book.takeaway}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            variants={fadeUp}
            className="mt-20 md:mt-28"
          >
            <h3 className="font-serif text-lg font-medium text-text-secondary">
              Currently reading
            </h3>
            <p className="mt-3 text-sm text-text-secondary">
              [Add what you&apos;re reading next]
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
