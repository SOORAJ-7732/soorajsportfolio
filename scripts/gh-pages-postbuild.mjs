// Fixes up the static GitHub Pages build in dist/client:
// - hosted images (/__l5e/...) are loaded from the live Lovable site
// - hardcoded root links (/resume.pdf, /#about, /favicon.ico) get the /soorajsportfolio/ prefix
import { readdirSync, readFileSync, writeFileSync, statSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const OUT = "dist/client";
const BASE = "/soorajsportfolio";
const LIVE = "https://soorajsportfolio.lovable.app";

function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|js|css)$/.test(f)) {
      const src = readFileSync(p, "utf8");
      const out = src
        .replaceAll("/__l5e/", `${LIVE}/__l5e/`)
        .replace(/(["'`(])\/(resume\.pdf|favicon\.ico|robots\.txt|#)/g, `$1${BASE}/$2`)
        .replaceAll('href="/"', `href="${BASE}/"`);
      if (out !== src) writeFileSync(p, out);
    }
  }
}
walk(OUT);
// The PDF must never pass through text decoding. Restore the exact source bytes after prerendering.
const sourcePdf = readFileSync("public/resume.pdf");
copyFileSync("public/resume.pdf", join(OUT, "resume.pdf"));
const publishedPdf = readFileSync(join(OUT, "resume.pdf"));
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
if (hash(sourcePdf) !== hash(publishedPdf)) throw new Error("Resume PDF was altered during the Pages build");
// SPA fallback + disable Jekyll processing
copyFileSync(join(OUT, "index.html"), join(OUT, "404.html"));
writeFileSync(join(OUT, ".nojekyll"), "");
console.log("GitHub Pages build ready in", OUT);
