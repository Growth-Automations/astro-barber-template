import { getEntry } from 'astro:content';
import type { SiteSettings } from './types';

export async function getSiteSettings(): Promise<SiteSettings> {
  const entry = await getEntry('settings', 'site');
  return entry.data satisfies SiteSettings;
}
