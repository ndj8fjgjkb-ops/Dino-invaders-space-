import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const out = join(root, 'www');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const item of ['index.html', 'nova-pilot.webp', 'assets']) {
  await cp(join(root, item), join(out, item), { recursive: true });
}
console.log('Bundled the game, dinosaur sprites, and space background for offline play.');
