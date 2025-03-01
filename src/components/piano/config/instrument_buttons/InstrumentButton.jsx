import './InstrumentButton.css';
import { Instrument } from '../../keys/instrument'; 
import { useContext } from 'react';
import { InstrumentContext } from '../../Piano';

export const InstrumentButton = (props) => {
    const { setInstrument } = useContext(InstrumentContext);

    const handleClick = () => {
        if(props.instrument === "PIANO") {
            setInstrument(new Instrument("/sounds/piano", "wav").getInstrumentKeys());
        } else if (props.instrument === "ÓRGANO") {
            setInstrument(new Instrument("/sounds/church_organ").getInstrumentKeys());
        } else if (props.instrument === "TECLADO ELÉCTRICO") {
            setInstrument(new Instrument("/sounds/electric_piano").getInstrumentKeys());
        }
    }

    return (
        <button className="ins_button" onClick={handleClick}>{props.instrument}</button>
    )
}