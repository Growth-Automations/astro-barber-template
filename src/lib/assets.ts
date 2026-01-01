const rawAssets = import.meta.glob('../assets/**/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const assetImports = Object.fromEntries(
  Object.entries(rawAssets).map(([key, value]) => {
    const normalizedKey = key.replace('../assets', '~/assets');
    return [normalizedKey, value];
  })
) as Record<string, string | { src: string }>;

export function resolveAsset(path: string): string {
  if (!path) {
    return '';
  }
  const normalizedHttp = path.startsWith('http://') || path.startsWith('https://');
  if (normalizedHttp) {
    return path;
  }
  if (path.startsWith('/')) {
    return path;
  }

  const normalized = path.startsWith('~/') ? path : `~/${path.replace(/^\//, '')}`;
  const asset = assetImports[normalized];
  if (!asset) {
    return normalized;
  }
  if (typeof asset === 'string') {
    return asset;
  }
  if ('src' in asset && typeof asset.src === 'string') {
    return asset.src;
  }
  return normalized;
}
