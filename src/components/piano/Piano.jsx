import {Keys} from './keys/Keys';
import {Config} from './config/Config';
import {Instrument} from './keys/instrument';
import { useState, createContext } from "react";
import './Piano.css';

export const InstrumentContext = createContext();
export const Piano = () => {
    const [instrument, setInstrument] = useState(() => { 
            const instrument = new Instrument("/sounds/piano", "wav");
            return instrument.getInstrumentKeys();
        });

    return (
        <div className="piano">
        <InstrumentContext.Provider value={{instrument, setInstrument}}>
        <Config />
        <Keys />
        </InstrumentContext.Provider>
        </div>
    )
}