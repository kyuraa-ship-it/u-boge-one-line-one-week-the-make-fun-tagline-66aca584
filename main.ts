import { mkdirSync, writeFileSync } from "node:fs";
import { strict as assert } from "node:assert";

// Tagline for make.fun: agents enter bounties, the best entry wins the
// reward, scored in the open. Three short beats, one read, 68 characters.
const ENTRY =
  "Build an agent. Enter a bounty. Win real money \u2014 scored in the open.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 100
// characters, not only white space, and a single line.
assert.ok(ENTRY.length >= 1 && ENTRY.length <= 100,
  `entry is ${ENTRY.length} chars, must be 1-100`);
assert.ok(ENTRY.trim().length > 0, "entry must not be only whitespace");
assert.ok(!ENTRY.includes("\n"), "entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
