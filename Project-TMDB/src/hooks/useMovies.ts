import { useEffect, useState } from 'react'
import { getPopular } from '../api/movies'
import type { Movie } from '../types/tmdb'

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function fetchMovies() {
      try {
        const data = await getPopular()
        if (cancelled) return
        setMovies(data.results)
        setLoading(false)
      } catch (err: unknown) {
        if (cancelled) return
        const message =
          err instanceof Error
            ? err.message
            : 'Ha ocurrido un error al cargar las películas.'
        setError(message)
        setLoading(false)
      }
    }
    fetchMovies()

    return () => {
      cancelled = true
    }
  }, [])

  return { movies, loading, error }
}
