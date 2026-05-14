import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextDir = path.join(__dirname, "..", ".next");

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log("Removed .next");
} catch (err) {
  console.error("Could not remove .next:", err instanceof Error ? err.message : err);
  process.exitCode = 1;
}
