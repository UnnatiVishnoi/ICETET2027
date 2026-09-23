// Responsive variant set for optimized .webp photos.
// Each "<name>.webp" (512px) is generated alongside "<name>-256.webp".
// Returns undefined for paths without generated variants (logos, etc.).
export function srcSetFor(path) {
  if (!path) return undefined;
  const match = String(path).match(/^(.*)\.webp$/);
  if (!match) return undefined;
  return `${asset(`${match[1]}-256.webp`)} 256w, ${asset(path)} 512w`;
}
// Resolve a repo-relative asset path (e.g. "assets/images/hero-bg-1.jpg")
// against the Vite base so it works in dev, in dist/, on GitHub Pages
// project sub-paths, and on cPanel sub-folders.
export function asset(path) {
  if (!path) return path;
  if (/^(https?:|data:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  const clean = String(path).replace(/^\.\//, '').replace(/^\/+/, '');
  if (base === '/' || base === './' || base === '') {
    return clean.startsWith('assets/') ? `./${clean}` : `./${clean}`;
  }
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
