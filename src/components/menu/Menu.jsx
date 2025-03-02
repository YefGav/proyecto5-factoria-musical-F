import './Menu.css'
import { MenuButton } from './menu-button/MenuButton';

export const Menu = () => {

  return (
    <div className="menu-container">
      <img
        src="/img/icons/logoFactoriaMusical.png"
        alt="Factoria Musical Play with us!"
        className="img-logo"
      />
      <div className="menu-buttons">
         <MenuButton action="openLevel"  text = "JUGAR" />
         <MenuButton action="openRecordings" text = "GRABACIONES" />
      </div>      
    </div>
  )
}

