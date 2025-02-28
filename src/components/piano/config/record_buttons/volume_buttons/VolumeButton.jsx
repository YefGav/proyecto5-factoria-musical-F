import { useContext } from 'react'
import { InstrumentContext } from '../../../Piano'
import PropTypes from 'prop-types'
import './VolumeButton.css'

export const VolumeButton = (props) => {
  const { setVolume } = useContext(InstrumentContext)

  const handleVolume = (action) => {
    setVolume((prevVolume) => {
      const newVolume =
        action === 'increase'
          ? Math.min(prevVolume + 0.1, 1)
          : Math.max(prevVolume - 0.1, 0)
      return newVolume
    })
  }

  return (
      <button
        className="volume-button"
        onClick={() => handleVolume(props.action)}
      >
        <img
          className="volume-icon"
          src={
            props.action === 'increase'
              ? "/img/icons/volume_up_icon.png"
              : "/img/icons/volume_down_icon.png"
          }
          alt="volume icon"
        />
      </button>
  );
};

VolumeButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default VolumeButton;
