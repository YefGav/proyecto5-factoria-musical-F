import {Keys} from './keys/Keys';
import {Config} from './config/Config';
import {Instrument} from './keys/instrument';
import { useState, createContext, useEffect } from "react";
import './Piano.css';

export const InstrumentContext = createContext();

export const Piano = () => {
    
    const [instrument, setInstrument] = useState(() => { 
            const instrument = new Instrument("/sounds/piano", "wav");
            return instrument.getInstrumentKeys();
        });

    const [volume, setVolume] = useState(1);
    const [audioContext, setAudioContext] = useState(null);
    const [destination, setDestination] = useState(null);
    const [instrumentConfig, setInstrumentConfig] = useState("PIANO");

    useEffect(() => {
        instrument.forEach(tile =>{
            tile.sound.volume = volume
            });
    }),[volume, instrument]

    useEffect(() => {
        if (!audioContext) {
            const newAudioContext = new AudioContext();
            const newDestination = newAudioContext.createMediaStreamDestination();
            setAudioContext(newAudioContext);
            setDestination(newDestination);
        }
    }), []

    return (
        <div className="piano">
        <InstrumentContext.Provider value={{instrument, setInstrument, volume, setVolume, audioContext, destination, setInstrumentConfig, instrumentConfig}}>
        <Config />
        <Keys />
        </InstrumentContext.Provider>
        </div>
    )
}