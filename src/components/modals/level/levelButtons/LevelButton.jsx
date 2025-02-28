import './LevelButton.css'
import { useModal } from '../../ModalContext'
import PropTypes from 'prop-types'

export const LevelButton = ({ text, songs }) => {
  const { openModal } = useModal()

  return (
    <button
      className="level-button"
      onClick={() => openModal('songs', null, songs)}
    >
      {text}
    </button>
  )
}

LevelButton.propTypes = {
  text: PropTypes.string.isRequired,
  songs: PropTypes.array.isRequired,
}

export default LevelButton
