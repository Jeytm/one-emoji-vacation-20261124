// One Emoji, One Dream Vacation
// Entry: exactly one emoji — a desert island, the dream vacation itself:
// escape, solitude, a palm tree and turquoise sea in a single glyph.
// Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🏝️";

// Runtime guard: the gate requires exactly one emoji — a single grapheme
// cluster (base emoji + optional variation selector), nothing else, and
// the entry must stay within 1–8 characters.
const graphemes = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(ENTRY)];
if (
  graphemes.length !== 1 ||
  ENTRY.length < 1 ||
  ENTRY.length > 8 ||
  !/^\p{Extended_Pictographic}\uFE0F?$/u.test(ENTRY)
) {
  throw new Error(`Entry must be exactly one emoji (1-8 chars), got ${JSON.stringify(ENTRY)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote entry (${[...ENTRY].length} code point(s)): ${ENTRY}`);
