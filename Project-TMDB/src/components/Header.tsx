import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <button className="menu__button">
          <FontAwesomeIcon icon={faBars} className="menu__icon" />
        </button>
      </div>
      <div className="header__title">
        <FontAwesomeIcon icon={faPhotoFilm} className="title__icon" />
        <div className="title__name">
          <h1>
            <span>Movie</span>
            <span>Explorer</span>
          </h1>
        </div>
      </div>
      <div className="header__user">
        <button className="user__button">
          <FontAwesomeIcon icon={faUser} className="user__icon" />
        </button>
      </div>
    </header>
  )
}

export default Header
