import { VolumeButton } from "./VolumeButton"


export const RecordButtons = () => {


    return (
        <div className="record-buttons">
            <div className="volume-buttons">
                <VolumeButton action="increase"/>
                <VolumeButton action="decrease" />
            </div>
            <button className="rec-button">Grabar</button>
            <button className="record-button"><img className="record-icon" src="/public/img/icons/play_icon.png" alt="play icon" /></button>
            <button className="record-button"><img className="record-icon" src="/public/img/icons/pause_icon.png" alt="pause icon" /></button>
        </div>
    )
}