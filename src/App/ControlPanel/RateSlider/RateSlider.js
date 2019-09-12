import React from 'react';
import './RateSlider.css';

const RateSlider = ({ audioRate, setAudioRate }) => {
    const changeAudioRate = e => {
        setAudioRate(e.target.value);
    }

    return (
        <div id="rate-slider-container">
            <label>Speed
                <input
                    type="range"
                    value={audioRate}
                    min="0.1"
                    max="2"
                    step="0.1"
                    onChange={changeAudioRate}
                />
            </label>
            <span className="audio-rate">{audioRate}x</span>
        </div>
    );
}

export default RateSlider;