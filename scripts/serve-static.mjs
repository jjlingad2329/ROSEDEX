import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist", "client");
const port = 5173;
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".png":"image/png", ".webp":"image/webp", ".json":"application/json" };

if (!existsSync(join(root, "index.html"))) {
  throw new Error("Static output is missing. Run npm run build first.");
}

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  let file = normalize(join(root, pathname === "/" ? "index.html" : pathname));
  if (!file.startsWith(root)) { response.writeHead(403).end("Forbidden"); return; }
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(root, "index.html");
  response.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream", "Cache-Control": "no-cache" });
  createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Invitation ready at http://localhost:${port}`));
