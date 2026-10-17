export interface Genre {
  id: number
  name: string
}
export interface Movie {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
  genre_ids: number[]
}
export interface PaginatedResponse<T> {
  page: number
  result: T[]
  total_pages: number
}
