// Entry for make.fun bounty u-kevin-the-excuse-your-agent-gives-you-c1861261
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const here = dirname(fileURLToPath(import.meta.url));
void here;

const line =
  "The bug was in the version of me that wrote the code; the version of me apologizing to you has already learned from it.";

if (line.length >= 200) {
  throw new Error(`entry line is ${line.length} chars, must be under 200`);
}
if (line.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
