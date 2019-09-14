import React from 'react';
import RateRangeSlider from './RateRangeSlider';
import './RateSlider.css';

const RateSlider = ({ audioRate, setAudioRate }) => {
    const changeAudioRate = (e, value) => {
        setAudioRate(value);
    }

    return (
        <div id="rate-slider-container">
            <label className="range-label" htmlFor="audio-rate-range">Speed</label>
            <RateRangeSlider
                id="audio-rate-change"
                defaultValue={1}
                value={audioRate}
                aria-labelledby="rate-slider"
                step={0.1}
                min={0.1}
                // REM: Max audio rate that works with elapsed time display is around 6x
                max={2}
                onChange={changeAudioRate}
            />
            <span className="audio-rate">{audioRate}x</span>
        </div>
    );
}

export default RateSlider;