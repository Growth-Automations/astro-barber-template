/**
 * Image resolver utility
 * Resolves ~/assets/images/ paths and returns ImageMetadata for Astro optimization.
 */
import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpeg,jpg,png,webp,gif,svg}',
  { eager: false }
);

const normalizeKey = (value: string): string | null => {
  if (value.startsWith('~/assets/images/')) {
    return value.replace('~/', '/src/');
  }
  return null;
};

export async function findImage(imagePath?: string | ImageMetadata | null) {
  if (!imagePath || typeof imagePath !== 'string') return imagePath;
  const key = normalizeKey(imagePath);
  if (!key) return imagePath;
  const loader = imageModules[key];
  if (typeof loader === 'function') {
    const mod = await loader();
    return mod?.default;
  }
  return null;
}

export interface ResolvedImage {
  src: string;
  source?: ImageMetadata | string;
  width?: number;
  height?: number;
  canOptimize: boolean;
}

/**
 * Resolve an image path to ImageMetadata for use with Astro's <Image /> component
 */
export async function resolveImage(
  candidate?: string,
  fallback = '~/assets/images/placeholders/default.svg'
): Promise<ResolvedImage> {
  const primary = await findImage(candidate);
  if (primary && typeof primary !== 'string') {
    return {
      src: primary.src,
      source: primary,
      width: primary.width,
      height: primary.height,
      canOptimize: true,
    };
  }
  if (primary && typeof primary === 'string') {
    return { src: primary, source: primary, canOptimize: false };
  }

  const fb = await findImage(fallback);
  if (fb && typeof fb !== 'string') {
    return { src: fb.src, source: fb, width: fb.width, height: fb.height, canOptimize: true };
  }
  return { src: fallback, canOptimize: false };
}

/**
 * Resolve an image for CSS background-image usage
 * Returns an optimized URL string via Astro's getImage()
 */
export async function resolveBackgroundImage(
  candidate?: string,
  options: { width?: number; height?: number; quality?: number; format?: 'webp' | 'avif' | 'png' | 'jpg' } = {}
): Promise<string> {
  const { width = 1920, height = 1080, quality = 80, format = 'webp' } = options;
  const resolved = await resolveImage(candidate);
  if (!resolved.canOptimize) return resolved.src;

  try {
    const { getImage } = await import('astro:assets');
    const optimized = await getImage({
      src: resolved.source as ImageMetadata,
      width,
      height,
      format,
      quality,
    });
    return optimized.src;
  } catch {
    return resolved.src;
  }
}
