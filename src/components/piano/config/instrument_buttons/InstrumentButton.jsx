import './InstrumentButton.css';
import { Instrument } from '../../keys/instrument'; 
//import { KeyContext } from '../piano';
//import { useContext } from 'react';

export const InstrumentButton = (props) => {
   // const { setInstrument } = useContext(KeyContext);

    const handleClick = () => {
        if(props.instrument === "Piano") {
            setInstrument(new Instrument("/sounds/piano", "wav"));
        } else if (props.instrument === "Órgano") {
            setInstrument(new Instrument("/sounds/church_organ"));
        } else if (props.instrument === "Teclado eléctrico") {
            setInstrument(new Instrument("/sounds/electric_piano"));
        }
    }

    return (
        <button className="ins_button" instrumentType={props.instrument} onClick={handleClick}>Piano eléctrico{props.instrument}</button>
    )
}