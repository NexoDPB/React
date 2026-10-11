import { useState } from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

const genres: string[] = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Drama',
  'Fantasy',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller',
]

function SearchBar() {
  const [value, setValue] = useState('')
  const [option, valueOption] = useState('')
  const sendTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      title: value,
      genre: option,
    })
  }
  return (
    <form onSubmit={sendTitle} className="form__movies">
      <div className="filter__title">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search__icon" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="movie__title"
          placeholder="Title of movie"
        />
      </div>
      <div className="filter__genre">
        <select
          value={option}
          onChange={(e) => valueOption(e.target.value)}
          className="select__genre"
        >
          <option value="Anything" className="genre__option--selected">
            Genre
          </option>
          {genres.map((genre) => (
            <option className="genre__option" key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default SearchBar
