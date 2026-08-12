import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("builds a GitHub Pages-ready portfolio", async () => {
  const html = await readFile(new URL("dist/index.html", root), "utf8");

  assert.match(html, /Jay Hsu — Senior Mobile & Product Engineer/);
  assert.match(html, /jayhsugo\.github\.io\/jay-hsu-portfolio/);
  assert.match(html, /\/jay-hsu-portfolio\/assets\//);
  assert.doesNotMatch(html, /chatgpt\.site|codex-preview|vinext/);

  assert.match(html, /fonts\.googleapis\.com/);
  assert.doesNotMatch(html, /og\.png|hero-background\.png/);
  assert.doesNotMatch(html, /[\u3400-\u9FFF]/);
});
