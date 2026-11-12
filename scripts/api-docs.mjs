/**
 * Downloads the 4ga Boards API specifications into static/api for the Docusaurus API reference.
 * The OpenAPI spec is maintained in the 4gaBoards repository and downloaded here at build time.
 *
 * Environment:
 *   OPENAPI_REF  git ref (branch, tag or commit) of RARgames/4gaBoards to take the spec from. Default: main
 *   OPENAPI_URL  full URL of the spec, overrides OPENAPI_REF
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ref = process.env.OPENAPI_REF || 'main';
const specPath = 'packages/api-docs/openapi';
const specUrl = process.env.OPENAPI_URL || `https://raw.githubusercontent.com/RARgames/4gaBoards/${encodeURIComponent(ref)}/${specPath}/openapi.yaml`;
const outDir = path.resolve('static', 'api');

async function downloadSpec(url, allowMissing = false) {
  const response = await fetch(url);
  if (allowMissing && response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Failed to download the OpenAPI spec from ${url}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.text();
  if (!spec.startsWith('openapi:')) {
    throw new Error(`${url} does not look like an OpenAPI document`);
  }
  return spec;
}

const specs = [{ name: 'Latest', file: 'openapi.yaml', content: await downloadSpec(specUrl) }];
if (!process.env.OPENAPI_URL) {
  const contentsUrl = new URL(`https://api.github.com/repos/RARgames/4gaBoards/contents/${specPath}`);
  contentsUrl.searchParams.set('ref', ref);
  const headers = { 'User-Agent': '4gaBoardsDocs', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(contentsUrl, { headers });
  if (!response.ok) {
    throw new Error(`Failed to list OpenAPI versions at ${contentsUrl}: ${response.status} ${response.statusText}`);
  }
  const entries = await response.json();
  if (!Array.isArray(entries)) throw new Error(`Expected an OpenAPI directory listing from ${contentsUrl}`);
  const versions = entries.filter((entry) => entry.type === 'dir').sort((first, second) => second.name.localeCompare(first.name, 'en', { numeric: true }));
  for (const version of versions) {
    const url = `https://raw.githubusercontent.com/RARgames/4gaBoards/${encodeURIComponent(ref)}/${specPath}/${encodeURIComponent(version.name)}/openapi.yaml`;
    const content = await downloadSpec(url, true);
    if (content !== null) specs.push({ name: version.name, file: `${version.name}/openapi.yaml`, content });
  }
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const spec of specs) {
  const destination = path.join(outDir, spec.file);
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, spec.content);
}

writeFileSync(
  path.join(outDir, 'versions.json'),
  JSON.stringify(specs.map(({ name, file }) => ({ name, file }))),
);

console.log(`API specs downloaded to static/api (spec from ${specUrl})`);
