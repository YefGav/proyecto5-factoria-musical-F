import './Menu.css'
//import { Keys } from "./components/keys/Keys";
//import { Instrument } from "./components/keys/instrument.js";


export const Menu = () => {
  
  
  /*const handleClick = (event) => {
    console.log('The button was press! Play the song...')
    alert('Play button clicked')
  }
    */

  return (
    <div className="menu-container">
      <div className="init-app">
        <img
          src="/public/img/icons/logoFactoriaMusical.png"
          alt="Factoria Musical Play with us!"
          className="img-logo"
        />

        <div className="buttons">
          <div>
            <button  className="btn-play">
              Play
            </button>
          </div>
          <div>
            <button  className="btn-recording">
              Recording
            </button>
          </div>
        </div>
      </div>

 
      
    </div>
  )
}

