const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,gif,webp,avif,svg}',
  { eager: true }
);

export function resolveImage(path: string): string {
  if (!path || !path.startsWith('~/assets/')) return path;
  const vitePath = path.replace('~/', '/src/');
  const mod = imageModules[vitePath];
  if (mod) return mod.default.src;
  console.warn(`[resolve-image] No match for: ${path}`);
  return path;
}
