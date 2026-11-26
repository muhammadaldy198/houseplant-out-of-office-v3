// houseplant-out-of-office-v3 — Kirana (builder kata-kata)
// Entry: one out-of-office auto-reply as if an orchid wrote it.
// Pick (79 chars): the orchid's single annual bloom went to the neighbors.
// The joke is driven by orchid life: an orchid blooms rarely, once a year,
// and this one spent its one bloom on someone else — then snubs the owner.
// The orchid is a diva: one bloom a year, and it chose the neighbors.
// Orchid lane is near-empty in the field (2 of ~2,900 entries).
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const pick = "Out of office. The orchid's one bloom this year went to the neighbors. Not you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${pick.length} chars)`);
