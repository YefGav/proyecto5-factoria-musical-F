import { useState, useEffect } from "react";
import './RecordButtons.css';
import { VolumeButton } from "./volume_buttons/VolumeButton";

export const RecordButtons = () => {
    
    return (
        
        <div className="record-buttons-container">
        <div className="volume-buttons">
            <VolumeButton action="increase"/>
            <VolumeButton action="decrease" />
        </div>
        <button className="record-button">
                       <img className="rec-img" src="/public/img/icons/rec_icon.png" alt="" />
               </button>
               <button className="record-button">
                       <img className="record-icon" src="/public/img/icons/play_icon.png" alt="play icon" />
               </button>
               <button className="record-button">
                       <img className="record-icon" src="/public/img/icons/pause_icon.png" alt="pause icon" />
               </button>
        </div>

)
}