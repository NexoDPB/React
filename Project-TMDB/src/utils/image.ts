type PosterSize = 'w200' | 'w500'
export function posterUrl(path: string | null, size: PosterSize = 'w500'): string {
  if (path === null) return ''
  // * https://developer.themoviedb.org/docs/image-basics
  return `https://image.tmdb.org/t/p/${size}${path}`
}
