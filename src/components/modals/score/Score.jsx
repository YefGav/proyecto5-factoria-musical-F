import './Score.css';
import { useModal } from '../ModalContext';

export const Score = () => {
    const {activeModal, selectedSong, goBackModal } = useModal ();

    if (activeModal !== "score" || !selectedSong) return null;

    return (
        <div className="score-modal">
            <button className="back-arrow" onClick={goBackModal}>
                <img className="back-arrow-img" src='/img/icons/back-arrow.png' alt='Back Arrow' />
            </button>
            <div className="score">
                <img className="score-img" src={selectedSong.scoreSrc} alt={selectedSong.title} />
            </div>
        </div>
    )
}