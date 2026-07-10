const STATIC_LINES = [
  { prompt: true, text: "$ whoami" },
  { prompt: false, text: "Muhammad Abdullah Nadeem" },
  { prompt: true, text: "$ cat focus.txt" },
  { prompt: false, text: "Data Science, AI automation,\nfull-stack development" },
  { prompt: true, text: "$ cat fact_of_the_day.txt" },
];

const facts = [
  "Did you know? The world's oldest continuously operating university, the University of al-Qarawiyyin in Morocco, was founded by a Muslim woman named Fatima al-Fihri in 859 AD.",
];

function pickFact() {
  return facts[Math.floor(Math.random() * facts.length)];
}

function buildSequence(lines) {
  const seq = [];
  lines.forEach((line, i) => {
    for (const ch of line.text) {
      seq.push({ lineIndex: i, char: ch });
    }
    seq.push({ lineIndex: i, char: "\0" });
  });
  return seq;
}

const lines = [
  ...STATIC_LINES,
  { prompt: false, text: pickFact() },
];
const sequence = buildSequence(lines);

let typedCount = sequence.length; // simulate fully typed

const renderedLines = [];
let seqIdx = 0;

for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
  const chars = [];
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

console.log(renderedLines);
