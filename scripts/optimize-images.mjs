// One-time optimizer: committee portraits + home gallery.
// - Backs up originals to legacy-static/original-images (never deletes blindly)
// - Writes <name>.webp (max 512px wide, q80) + <name>-256.webp (256px, q75)
// - Applies identically to assets/images (dev) and public/assets/images (build)
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DIRS = ['assets/images', 'public/assets/images'].map((d) => path.join(ROOT, d));
const BACKUP = path.join(ROOT, 'legacy-static', 'original-images');

const targets = (await fs.readdir(DIRS[0]))
  .filter((f) => /^(committee-(?!(01|02|03|04|05|06|07)\.jpg$).+\.(jpg|jpeg)|gallery-\d+\.jpg)$/.test(f))
  .sort();

console.log(`targets: ${targets.length}`);
await fs.mkdir(BACKUP, { recursive: true });

let savedBytes = 0;
for (const file of targets) {
  const base = file.replace(/\.(jpg|jpeg)$/, '');
  for (const dir of DIRS) {
    const src = path.join(dir, file);
    const out512 = path.join(dir, `${base}.webp`);
    const out256 = path.join(dir, `${base}-256.webp`);
    try {
      await fs.access(src);
    } catch {
      continue;
    }
    // backup once (from first dir that has it)
    const backupFile = path.join(BACKUP, file);
    try {
      await fs.access(backupFile);
    } catch {
      await fs.copyFile(src, backupFile);
    }
    const before = (await fs.stat(src)).size;
    await sharp(src).rotate().resize({ width: 512, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out512);
    await sharp(src).rotate().resize({ width: 256, withoutEnlargement: true }).webp({ quality: 75 }).toFile(out256);
    const after = (await fs.stat(out512)).size + (await fs.stat(out256)).size;
    if (dir === DIRS[1]) savedBytes += before - after;
    // remove the original jpg from the served trees (backup preserved)
    await fs.rm(src, { force: true });
  }
  console.log(`ok ${base}`);
}
console.log(`DONE files=${targets.length} netSavedBytes≈${savedBytes}`);
