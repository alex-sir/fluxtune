import React from 'react';
import './RateSlider.css';

const RateSlider = ({ audioRate, setAudioRate }) => {
    const changeAudioRate = e => {
        setAudioRate(e.target.value);
    }

    return (
        <div id="rate-slider-container">
            <label htmlFor="audio-rate-range">Speed</label>
            <input
                id="audio-rate-change"
                type="range"
                value={audioRate}
                min="0.1"
                max="2"
                step="0.1"
                onChange={changeAudioRate}
            />
            <span className="audio-rate">{audioRate}x</span>
        </div>
    );
}

export default RateSlider;