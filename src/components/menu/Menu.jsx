import './Menu.css'
import { MenuButton } from './menu-button/MenuButton';


export const Menu = () => {
  
  


  return (
    <div className="menu-container">
      <div className="init-app">
        <img
          src="/public/img/icons/logoFM-black.png"
          alt="Factoria Musical Play with us!"
          className="img-logo"
        />

        <div className="buttons">
          
           <MenuButton text = "JUGAR" />
           <MenuButton text = "GRABACIONES" />
        
        </div>
      </div>

 
      
    </div>
  )
}

