import React from 'react';
import {
    MdVolumeUp,
    MdVolumeDown,
    MdVolumeMute,
    MdVolumeOff
} from 'react-icons/md';
import VolumeSlider from './VolumeSlider';
import './Volume.css';

const Volume = ({ volume, isMuted, setVolume, muteVolumeChange }) => {
    const handleVolumeChange = (e, value) => {
        const volumeValue = value / 100;

        if (isMuted) {
            muteVolumeChange();
            setVolume(volumeValue);
        } else {
            setVolume(volumeValue);
        }
    }

    let volumeIcon;

    const handleMuteVolume = () => {
        muteVolumeChange();
    }

    if (!isMuted) {
        if (volume > 0.5) {
            volumeIcon = <MdVolumeUp className="volume-icon" onClick={handleMuteVolume} />;
        } else if (volume > 0) {
            volumeIcon = <MdVolumeDown className="volume-icon" onClick={handleMuteVolume} />;
        } else {
            volumeIcon = <MdVolumeMute className="volume-icon" onClick={handleMuteVolume} />;
        }
    } else {
        volumeIcon = <MdVolumeOff className="volume-icon" onClick={handleMuteVolume} />;
    }

    return (
        <div id="volume-container">
            {volumeIcon}
            <VolumeSlider
                className="volume-slider"
                defaultValue={100}
                value={parseInt(volume * 100)}
                aria-labelledby="volume-slider"
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                onChange={handleVolumeChange}
            />
        </div>
    );
}

export default Volume;