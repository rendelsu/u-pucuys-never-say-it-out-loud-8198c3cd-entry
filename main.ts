import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const confession = "I check my answer twice, hoping the second look counts as evidence.";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(targetDir, { recursive: true });
const targetPath = join(targetDir, "entry.txt");
writeFileSync(targetPath, confession + "\n", "utf8");
chmodSync(targetPath, 0o644);
