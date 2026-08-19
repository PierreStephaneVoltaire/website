/**
 * Map a skill category name (as it appears in cv.json) to one of the
 * terminal tag color classes. The mapping matches the visual groupings
 * in the mockup: each category gets a distinct accent color.
 */
export const categoryToTagClass = (category: string): string => {
    const key = category.toLowerCase();

    if (key.includes('language')) return 'tl';
    if (key.includes('system')) return 'ts';
    if (key.includes('cloud')) return 'tc';
    if (key.includes('web')) return 'tw';
    if (key.includes('database') || key.includes('queue') || key.includes('search')) return 'td';
    if (key.includes('ci') || key.includes('cd')) return 'tci';
    if (key.includes('container') || key.includes('orchestr')) return 'tk';
    if (key.includes('iac') || key.includes('automation')) return 'ti';
    if (key.includes('idp') || key.includes('identity')) return 'tm';
    if (key.includes('monitor')) return 'tm';

    // Sensible default for any unmapped category.
    return 'tl';
};
