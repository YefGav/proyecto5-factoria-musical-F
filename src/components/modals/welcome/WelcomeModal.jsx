import './WelcomeModal.css';
import { useModal } from '../ModalContext';

const WelcomeModal = () => {
  const { closeModal } = useModal();

  return (
    <div className="welcome-modal">
      <h1>
        Bienvenido/a a Factoría Musical, donde podrás disfrutar de la música de
        una manera sencilla y divertida. ¿Listo para crear algo increíble? No te
        preocupes si eres principiante o experto, ¡este lugar es para todos!
        Encuentra partituras, experimenta con diferentes sonidos, graba tus
        producciones y diviértete al máximo. ¡Vamos, la música te espera!
      </h1>
      <button onClick={closeModal}>Start</button>
    </div>
  )
}

export default WelcomeModal