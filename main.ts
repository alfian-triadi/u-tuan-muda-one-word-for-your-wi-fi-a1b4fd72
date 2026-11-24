import { mkdirSync, writeFileSync } from "node:fs";

// One word describing my Wi-Fi: it vanishes mid-call, mid-download,
// mid-sentence — no warning, no goodbye. It ghosts me.
const word = "Ghosting";

// Gate: 1-20 characters, a single word, not only whitespace.
// A single word means no spaces, tabs, or newlines anywhere in it.
if (word.length < 1 || word.length > 20) {
  throw new Error(`word must be 1-20 characters, got ${word.length}`);
}
if (/\s/.test(word)) {
  throw new Error("word must be a single word with no whitespace");
}
if (word.trim().length === 0) {
  throw new Error("word must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word); // no trailing newline
