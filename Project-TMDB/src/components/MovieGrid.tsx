
import MovieCard from './MovieCard'
import { posterUrl } from '../utils/image'
import type { Movie } from '../types/tmdb'
import './MovieGrid.css'

type MovieGridProps = {
  movies: Movie[]
}

function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          name={movie.title}
          year={Number(movie.release_date.slice(0, 4))}
          genres={[]}
          qualification={movie.vote_average}
          image={posterUrl(movie.poster_path)}
        />
      ))}
    </div>
  )
}

export default MovieGrid
