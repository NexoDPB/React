export function posterUrl(path: string | null, size: 'W500'): string {
  if (path === null) return ''
  return `https://image.tmdb.org/t/p/${size}${path}`
}
