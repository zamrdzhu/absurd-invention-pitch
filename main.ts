// One-Sentence Absurd Invention Pitch — make.fun entry.
//
// Prints exactly one original one-sentence pitch and writes the same
// line to /output/entry.txt, the artifact the competition's gate reads.
// Node 22, standard library only. No network, no files read.
//
// The pitch: a washing machine that holds a tiny funeral for every sock
// it loses — the laugh comes from the funeral itself, the fix is closure
// for the drawer full of lonely singles, and the mechanism is silly yet
// weirdly plausible: of course a machine that eats socks would mourn them.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A washing machine that holds a tiny funeral for every sock it loses, so you finally get closure instead of a drawer full of lonely singles.";

function main(): void {
  // The gate reads /output/entry.txt as 1-220 characters of UTF-8 text;
  // refuse to emit anything that could not pass it. One sentence only:
  // exactly one full stop, at the very end.
  if (!(PITCH.length >= 1 && PITCH.length <= 220)) {
    throw new Error("pitch must be 1-220 characters");
  }
  if (PITCH.trim() !== PITCH || PITCH.split(".").length - 1 !== 1) {
    throw new Error("pitch must be a single sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", PITCH, "utf-8");
  console.log(PITCH);
}

main();
