
import { useMovies } from '../hooks/useMovies'
import MovieGrid from '../components/MovieGrid'

function HomePage() {
  const { movies, loading, error } = useMovies()

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <main>
      <h1>Películas populares</h1>
      <MovieGrid movies={movies} />
    </main>
  )
}

export default HomePage
