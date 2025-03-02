import './Song.css'
import { useModal } from '../../ModalContext'
import PropTypes from 'prop-types'

export const Song = ({ imgSrc, title, song }) => {

  const { openModal } = useModal();

  return (
      <div className="song" onClick={() => openModal("score", song)}>
        <img className="song-img" src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  )
}

Song.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  song: PropTypes.object.isRequired,
}

export default Song
