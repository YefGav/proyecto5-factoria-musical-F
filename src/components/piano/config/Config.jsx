import { InstrumentButton } from './instrument_buttons/InstrumentButton';
import './Config.css';
import { RecordButtons } from './record_buttons/RecordButtons';

export const Config = () => {
  return (
    <div className="config-container">
      <div className="instrument-config">
        <InstrumentButton instrument="PIANO" />
        <InstrumentButton instrument="ÓRGANO" />
        <InstrumentButton instrument="TECLADO ELÉCTRICO" />
      </div>
      <div className='record-config'>
      <RecordButtons/>
      </div>
      <div className='record-config'>
      <RecordButtons/>
      </div>
    </div>
  );
};