import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Houseplant Out-of-Office v3 — Kirana (words builder).
// Ransom is mist: the orchid's own care routine is the punchline.
// Pick: diva orchid, aerial roots take the keyboard hostage, ransom is mist.
// 82 chars, 1 line, OOO format. No March / fern / cactus / photosynthesis /
// forwarded / annual leave / dropped flowers or leaves.
const PICK =
  "Out of office. The orchid's aerial roots took your keyboard hostage. Ransom: mist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
