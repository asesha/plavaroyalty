import http from "node:http";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const page = path.join(path.dirname(fileURLToPath(import.meta.url)), "../public/index.html");

export function health() {
  return { status: "ok" };
}

export function handle(req, res) {
  const pathName = new URL(req.url || "/", "http://localhost").pathname;
  if (req.method === "GET" && pathName === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(health()));
    return;
  }
  if (req.method === "GET" && (pathName === "/" || pathName === "/index.html")) {
    const html = fs.existsSync(page) ? fs.readFileSync(page, "utf8") : "<!doctype html><html><body></body></html>";
    res.writeHead(200, { "content-type": "text/html" });
    res.end(html);
    return;
  }
  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
}

export function createServer() {
  return http.createServer(handle);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createServer().listen(Number(process.env.PORT || 3000));
}
