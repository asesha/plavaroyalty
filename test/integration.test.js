import test from "node:test";
import assert from "node:assert/strict";
import { createServer, handle, health } from "../src/app.js";

function invoke(method, url) {
  return new Promise((resolve) => {
    let status = 200;
    const req = { method, url, on(_event, cb) { if (_event === "end") cb(); return req; } };
    handle(req, {
      setHeader() {},
      writeHead(code) { status = code; },
      end(data) {
        let body = data;
        try { body = data ? JSON.parse(String(data)) : null; } catch { body = String(data ?? ""); }
        resolve({ status, body });
      },
    });
  });
}

test("health export and http health match", async () => {
  assert.equal(health().status, "ok");
  const res = await invoke("GET", "/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.status, "ok");
  assert.ok(createServer());
});

test("root serves the website page", async () => {
  const res = await invoke("GET", "/");
  assert.equal(res.status, 200);
  assert.match(String(res.body), /<html/i);
  // The root path serves HTML, not JSON, so this test expects no JSON status object
  assert.doesNotMatch(String(res.body), /^\{"status":"ok"\}$/);
});

test("unknown path returns 404", async () => {
  const res = await invoke("GET", "/unknown-path");
  assert.equal(res.status, 404);
  assert.match(String(res.body), /not found/i);
});
