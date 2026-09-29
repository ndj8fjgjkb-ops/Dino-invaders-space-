import { cp, mkdir, rm, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const out = join(root, 'www');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
const html = await readFile(join(root, 'index.html'), 'utf8');
const rootImages = [...html.matchAll(/\.src="\.\/([^"?]+)(?:\?[^"]*)?"/g)].map(m => m[1]).filter(p => !p.includes('/'));
for (const item of new Set(['index.html', 'manifest.webmanifest', 'nova-pilot.webp', 'assets', ...rootImages])) {
  await cp(join(root, item), join(out, item), { recursive: true });
}
console.log('Bundled the game, dinosaur sprites, and space background for offline play.');
