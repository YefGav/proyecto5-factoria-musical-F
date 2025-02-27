import './Recordings.css';
import { useModal } from '../ModalContext';


export const Recordings = () => {
    const { closeModal } = useModal();
    
    return (
        <div className="recordings">
            <button className="close-button" onClick={closeModal}><img className="close-img" src="/public/img/icons/close_icon.png" alt="close icon" /></button>
            <h1>GRABACIONES</h1>
                
                <div className="recordings-list">
                    {/* {recordings.length === 0 ? (
                        <p>No hay grabaciones disponibles.</p>
                    ) : (
                        recordings.map((rec, index) => (
                            <div key={index} className="record">
                                <div className="icons">
                                    <button className="icon-btn">
                                        <img className="img-play" src="/public/img/icons/play_icon.png" alt="play" />
                                    </button>
                                    <button className="icon-btn">
                                        <img className="img-btn" src="/public/img/icons/pause_icon.png" alt="pause" />
                                    </button>
                                    <button className="icon-btn">
                                        <img className="img-btn" src="/public/img/icons/stop_icon.png" alt="stop" />
                                    </button>
                                </div>
                                <p>{rec.title}</p>
                                <p>{rec.instrument}</p>
                                <p>{rec.date}</p>
                                <p>{rec.duration}</p>
                                <button className="icon-btn">
                                    <img className="img-delete" src="/public/img/icons/delete_icon.png" alt="delete" />
                                </button>
                                <audio controls src={rec.audioURL}></audio>
                            </div>
                        ))
                    )}
                 */}
                <div className="record">
                    <div className="icons">
                        <button className="icon-btn">
                            <img className="img-play" src="/public/img/icons/play_icon.png" alt="play" />
                        </button>
                        <button className="icon-btn">
                            <img className="img-btn" src="/public/img/icons/pause_icon.png" alt="pause" />
                        </button>
                        <button className="icon-btn">
                            <img className="img-btn" src="/public/img/icons/stop_icon.png" alt="stop" />
                        </button>
                    </div>
                        <p>Título</p>
                        <p>Instrumento</p>
                        <p>Fecha de la grabación</p>
                        <p>Duración de la grabación</p>
                        <button className="icon-btn"><img className="img-delete" src="/public/img/icons/delete_icon.png" alt="delete" /></button>
                </div>
        </div>
        </div>
    )
}