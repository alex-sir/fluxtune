import React from 'react';

const Volume = ({ volume, setVolume }) => {
    const changeVolume = e => {
        setVolume(e.target.value);
    }

    return (
        <div>
            <label htmlFor="volume">Volume</label>
            <input
                id="volume"
                type="range"
                value={volume}
                min="0"
                max="1"
                step="0.01"
                onChange={changeVolume}
            />
            <span>{parseInt(volume * 100, 10)}</span>
        </div>
    );
}

export default Volume;