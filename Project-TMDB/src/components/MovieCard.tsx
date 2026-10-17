import './MovieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons'

type MovieCardProps = {
  name: string
  year: number
  genres: string[]
  qualification: number
  image: string
}
function MovieCard({
  name,
  year,
  genres,
  qualification,
  image,
}: MovieCardProps) {
  return (
    <div>
      <h2></h2>
      <img src={image} alt={`Image of the movie ${name}`} />
      <p>{year}</p>
      <div>
        <p>{genres.join(', ')}</p>
        <p>
          <FontAwesomeIcon icon={faStar} />
          {qualification}
        </p>
      </div>
      <button>
        <FontAwesomeIcon icon={faHeart} />
        Added to favorites
      </button>
    </div>
  )
}

export default MovieCard
