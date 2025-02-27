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


    useEffect(() => {
        instrument.forEach(tile =>{
            tile.sound.volume = volume
            });
    }),[volume, instrument]

    return (
        <div className="piano">
        <InstrumentContext.Provider value={{instrument, setInstrument, volume, setVolume}}>
        <Config />
        <Keys />
        </InstrumentContext.Provider>
        </div>
    )
}