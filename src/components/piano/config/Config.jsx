import { InstrumentButton } from './instrument_buttons/InstrumentButton';
import './Config.css';
import { RecordButtons } from './record_buttons/RecordButtons';

export const Config = () => {
  return (
    <div className="config-container">
      <div className="instrument-config">
        <InstrumentButton instrument="Piano" />
        <InstrumentButton instrument="Órgano" />
        <InstrumentButton instrument="Teclado eléctrico" />
      </div>
      <div className='record-config'>
      <RecordButtons/>
      </div>
    </div>
  );
};