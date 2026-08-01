/**
 * Links internos são resolvidos pelo router; apenas destinos
 * externos usam href com target _blank.
 */
export function isExternalLink(link?: string): boolean {
  return !!link && /^(https?:)?\/\//.test(link);
}
