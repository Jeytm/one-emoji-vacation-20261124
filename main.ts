// One Emoji, One Dream Vacation
// Entry: exactly one emoji — a beach with umbrella, the dream vacation
// postcard at a glance. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🏖️";

// Runtime guard: the gate requires exactly one emoji — a single grapheme
// cluster (base emoji + optional variation selector), nothing else.
const graphemes = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(ENTRY)];
if (graphemes.length !== 1 || !/\p{Extended_Pictographic}/u.test(ENTRY)) {
  throw new Error(`Entry must be exactly one emoji, got ${JSON.stringify(ENTRY)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote entry (${[...ENTRY].length} code point(s)): ${ENTRY}`);
