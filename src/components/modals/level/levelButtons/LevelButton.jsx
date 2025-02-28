import './LevelButton.css';
import { useModal } from '../../ModalContext'; 

export const LevelButton = ({ text, songs }) => {
  const { openModal } = useModal();

  return (
    <button className="level-button" onClick={() => openModal("songs", null, songs)}>
      {text}
    </button>
  );
};