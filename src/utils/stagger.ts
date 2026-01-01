/**
 * Stagger utility for animation delays
 * Returns a class name like 'stagger-0', 'stagger-1', etc.
 * Use with data-animate for staggered entrance animations.
 */

/**
 * Get stagger class for an item at a given index
 * @param index - The item's index in the list
 * @param maxStagger - Maximum stagger level (default 12)
 * @returns CSS class name like 'stagger-3'
 */
export function stagger(index: number, maxStagger: number = 12): string {
  const level = Math.min(Math.max(0, index), maxStagger);
  return `stagger-${level}`;
}

/**
 * Get stagger class with a multiplier
 * Useful for slower staggered animations
 * @param index - The item's index
 * @param multiplier - Multiply index by this (e.g., 2 for every other step)
 * @param maxStagger - Maximum stagger level
 */
export function staggerBy(index: number, multiplier: number = 1, maxStagger: number = 12): string {
  return stagger(index * multiplier, maxStagger);
}
