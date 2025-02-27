import './Song.css';
import { useModal } from '../../ModalContext';

export const Song = ({ imgSrc, title, song }) => {

  const { openModal } = useModal();

    return (
      <div className="song" onClick={() => openModal("score", song)}>
        <img className="song-img" src={imgSrc} alt={title} />
        <p>{title}</p>
      </div>
    );
  };