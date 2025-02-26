import { RecordButtons } from "../../piano/config/record_buttons/RecordButtons"
import './Recordings.css';

export const Recordings = ({recordings, closeModal}) => {
    
    
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
                                <img className="play" src="/public/img/icons/play_icon.png" alt="" />
                                <img className="pause" src="/public/img/icons/pause_icon.png" alt="" />
                                <img className="stop" src="/public/img/icons/stop_icon.png" alt="" />
                                <p>{rec.title}</p>
                                <p>{rec.instrument}</p>
                                <p>{rec.date}</p>
                                <p>{rec.duration}</p>
                                <img className="delete" src="/public/img/icons/delete_icon.png" alt="" />
                                <audio controls src={rec.audioURL}></audio>
                            </div>
                        ))
                    )}
                 */}
                <div className="record">
                    <div className="icons">
                        <button className="icon-btn"><img className="img-play" src="/public/img/icons/play_icon.png" alt="" /></button>
                        <button className="icon-btn"><img className="img-btn" src="/public/img/icons/pause_icon.png" alt="" /></button>
                        <button className="icon-btn"><img className="img-btn" src="/public/img/icons/stop_icon.png" alt="" /></button>
                    </div>
                        <p>Título</p>
                        <p>Instrumento</p>
                        <p>Fecha de la grabación</p>
                        <p>Duración de la grabación</p>
                        <button className="icon-btn"><img className="img-delete" src="/public/img/icons/delete_icon.png" alt="" /></button>
                </div>
        </div>
        </div>
    )
}