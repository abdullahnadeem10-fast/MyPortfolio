"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { facts } from "@/data/facts";

const CHAR_DELAY = 45; // ms per character
const PAUSE_AT_END = 3000; // ms to pause before restart
const LINE_PAUSE = 180; // extra pause after finishing a line

const STATIC_LINES = [
  { prompt: true, text: "$ whoami" },
  { prompt: false, text: "Muhammad Abdullah Nadeem" },
  { prompt: true, text: "$ cat focus.txt" },
  { prompt: false, text: "Data Science, AI automation,\nfull-stack development" },
  { prompt: true, text: "$ cat fact_of_the_day.txt" },
];

type Line = { prompt: boolean; text: string };

// Flatten lines into a sequence of { lineIndex, char } segments
type Segment = { lineIndex: number; char: string };

function buildSequence(lines: Line[]): Segment[] {
  const seq: Segment[] = [];
  lines.forEach((line, i) => {
    for (const ch of line.text) {
      seq.push({ lineIndex: i, char: ch });
    }
    seq.push({ lineIndex: i, char: "\0" });
  });
  return seq;
}

function pickFact(): string {
  return facts[Math.floor(Math.random() * facts.length)];
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function TerminalVisual() {
  const reduced = useReducedMotion();

  // Pick a random fact once on mount and keep it stable across loop restarts
  const factRef = useRef<string>(pickFact());

  // Build the full line list (static lines + fact line), memoised in a ref
  const linesRef = useRef<Line[]>([
    ...STATIC_LINES,
    { prompt: false, text: factRef.current },
  ]);

  const sequenceRef = useRef<Segment[]>(buildSequence(linesRef.current));

  const [typedCount, setTypedCount] = useState(
    reduced ? sequenceRef.current.length : 0
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [typedCount]);

  useEffect(() => {
    if (reduced) {
      setTypedCount(sequenceRef.current.length);
      return;
    }

    function scheduleNext(count: number) {
      const total = sequenceRef.current.length;
      if (count >= total) {
        timeoutRef.current = setTimeout(() => setTypedCount(0), PAUSE_AT_END);
        return;
      }
      const current = sequenceRef.current[count];
      const delay = current.char === "\0" ? LINE_PAUSE : CHAR_DELAY;
      timeoutRef.current = setTimeout(() => setTypedCount(count + 1), delay);
    }

    scheduleNext(typedCount);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [typedCount, reduced]);

  // Build rendered lines from the typed count
  const lines = linesRef.current;
  const sequence = sequenceRef.current;
  const renderedLines: { prompt: boolean; text: string }[] = [];
  let seqIdx = 0;

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const chars: string[] = [];
    let lineEnded = false;

    while (seqIdx < typedCount && seqIdx < sequence.length) {
      const seg = sequence[seqIdx];
      if (seg.lineIndex !== lineIdx) break;
      if (seg.char === "\0") {
        seqIdx++;
        lineEnded = true;
        break;
      }
      chars.push(seg.char);
      seqIdx++;
    }

    if (chars.length > 0 || lineEnded) {
      renderedLines.push({ prompt: lines[lineIdx].prompt, text: chars.join("") });
    }

    if (!lineEnded && seqIdx >= typedCount) break;
  }

  const isFinished = typedCount >= sequence.length;

  return (
    <div
      className="flex h-64 w-64 shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-mint-primary sm:h-72 sm:w-72 lg:h-80 lg:w-80"
      aria-label="Animated terminal showing profile information"
      role="img"
    >
      {/* Traffic light top bar */}
      <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-[#0D1B2A] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28CA42]" aria-hidden="true" />
      </div>

      {/* Terminal body */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden bg-[#0D1B2A] px-4 py-3 font-mono text-[11px] leading-relaxed sm:text-xs lg:text-[11px]"
      >
        {renderedLines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line.prompt ? (
              <span className="text-[#778DA9]">{line.text}</span>
            ) : (
              <span className="text-[#E0E1DD]">{line.text}</span>
            )}
            {/* Blinking cursor while typing this line */}
            {i === renderedLines.length - 1 && !isFinished && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block text-[#E0E1DD]"
                aria-hidden="true"
              >
                ▊
              </motion.span>
            )}
          </div>
        ))}

        {/* Idle cursor after sequence completes */}
        {isFinished && (
          <div>
            <span className="text-[#778DA9]">$ </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="text-[#E0E1DD]"
              aria-hidden="true"
            >
              ▊
            </motion.span>
          </div>
        )}
      </div>
    </div>
  );
}
