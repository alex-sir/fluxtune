import React from 'react';
import { MdVolumeUp, MdVolumeDown, MdVolumeMute, MdVolumeOff } from 'react-icons/md';
import './Volume.css';

const Volume = ({ volume, isMuted, setVolume, muteVolumeChange }) => {
    const handleVolumeChange = e => {
        setVolume(e.target.value);

        if (isMuted) {
            muteVolumeChange();
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
        <div>
            {volumeIcon}
            <input
                id="volume"
                type="range"
                value={volume}
                min="0"
                max="1"
                step="0.01"
                onChange={handleVolumeChange}
            />
        </div>
    );
}

export default Volume;