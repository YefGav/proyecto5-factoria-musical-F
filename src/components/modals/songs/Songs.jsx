import { Song } from "./song/Song";
import { useModal } from "../ModalContext";
import './Songs.css'

export const Songs = () => {

    const { selectedSongs, goBackModal } = useModal();

    return (
        <div className="songs-modal">
            <button className="back-arrow" onClick={goBackModal}>
                <img className="back-arrow-img" src='/img/icons/back-arrow.png' alt='Back Arrow' />
            </button>
            <h1>Por favor, seleccione una canción</h1>
            <div className="songs-container">
            {selectedSongs.map((song) => (
              <Song key={song.id} imgSrc={song.imgSrc} title={song.title} song={song} />
            ))}
            </div>
        </div>
    )
}