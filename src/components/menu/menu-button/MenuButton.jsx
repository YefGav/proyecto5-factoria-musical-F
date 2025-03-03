import './MenuButton.css'
import { useModal } from '../../modals/ModalContext'
import PropTypes from 'prop-types'

export const MenuButton = ({ action, text }) => {
  const { openModal } = useModal()

  return (
    <button className="menu-btn" onClick={() => openModal(action)}>
      {text}
    </button>
  )
}

MenuButton.propTypes = {
  action: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default MenuButton
