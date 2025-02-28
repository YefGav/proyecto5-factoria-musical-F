import { useState, useEffect } from "react";
import './RecordButtons.css';
import { VolumeButton } from "./volume_buttons/VolumeButton";

export const RecordButtons = () => {

    const [recording, setRecording] = useState(false);
    const [recorder, setRecord] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    
    const getStream = async () => {
        return await navigator.mediaDevices.getDisplayMedia({ audio: true });
    }
    
    const startRecording = async () => {
        if (recording) {
            return;
        } 

        const stream = await getStream();
        const mediaRecorder = new MediaRecorder(stream);
        let chunks = [];
        
        mediaRecorder.onstart = () => {
            setRecording(true);
        }

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
            console.log(chunks);
        }

        mediaRecorder.onstop = () => {
            setRecording(false);
            const blob = new Blob(chunks, { type: "audio/webm"});
            setAudioBlob(blob);
        }

        mediaRecorder.onpause = () => {
            setRecording(false);
        }

        mediaRecorder.onresume = () => {
            setRecording(true);
        }

        mediaRecorder.start();
        setRecord(mediaRecorder);
    }

    const stopRecording = () => {
        if (recorder && recording) {
            recorder.stop();
        }
    }

    const pauseRecording = () => {
        if (recorder && recording) {
            recorder.pause();
        }
    }

    const resumeRecording = () => {
        if (recorder && !recording) {
            recorder.resume();
        }
    }

    return (
        
        <div className="record-buttons-container">
        <div className="volume-buttons">
            <VolumeButton action="increase"/>
            <VolumeButton action="decrease" />
        </div>
        <button className="record-button" onClick={recording ? stopRecording : startRecording}>
                       <img className="rec-img" src="/public/img/icons/rec_icon.png" alt="" />
               </button>
               <button className="record-button" onClick={resumeRecording}>
                       <img className="record-icon" src="/public/img/icons/play_icon.png" alt="play icon" />
               </button>
               <button className="record-button" onClick={pauseRecording}>
                       <img className="record-icon" src="/public/img/icons/pause_icon.png" alt="pause icon" />
               </button>
        </div>

)
}