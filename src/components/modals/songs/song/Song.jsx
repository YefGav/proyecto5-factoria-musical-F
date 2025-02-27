import './Song.css';
import { useModal } from '../../ModalContext';

export const Song = ({ imgSrc, title, song }) => {

  const { openModal } = useModal();

    return (
      <div className="score" onClick={() => openModal("score", song)}>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </div>
    );
  };