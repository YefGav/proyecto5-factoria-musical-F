import './InstrumentButton.css';
import { Instrument } from '../../keys/instrument';
import { useContext } from 'react';
import { InstrumentContext } from '../../Piano';
import PropTypes from 'prop-types';

export const InstrumentButton = (props) => {
    const { setInstrument } = useContext(InstrumentContext);

    const handleClick = () => {
        if(props.instrument === "Piano") {
            setInstrument(new Instrument("/sounds/piano", "wav").getInstrumentKeys());
        } else if (props.instrument === "Órgano") {
            setInstrument(new Instrument("/sounds/church_organ").getInstrumentKeys());
        } else if (props.instrument === "Teclado eléctrico") {
            setInstrument(new Instrument("/sounds/electric_piano").getInstrumentKeys());
        }
    }

    return (
        <button className="ins_button" onClick={handleClick}>{props.instrument}</button>
    );
};

InstrumentButton.propTypes = {
    instrument: PropTypes.string.isRequired,
};

export default InstrumentButton;