import type { Movie, Genre, PaginatedResponse } from '../types/tmdb'
import { tmdbFetch } from './client'

export function getPopular(): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch('/movie/popular', {})
}
export function searchMovie(query: string): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch('/search/movie', { query })
}
export function getGenres(): Promise<{ genres: Genre[] }> {
  return tmdbFetch('/genre/movie/list', {})
}
export function discoverByGenre(id: number): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch('/discover/movie', { with_genres: String(id) })
}
